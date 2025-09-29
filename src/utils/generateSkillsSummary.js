/*
  Utility: Generate Skills Summary PDF
  - Input: skillsData (array of { category, skills: [{ name, proficiency, level, technologies, projects }] })
  - Output: triggers a client-side download of a PDF file containing:
    * Cover with title/date
    * Aggregated metrics (totals/averages)
    * Bar chart of average proficiency per category
    * Pie chart of level distribution (Expert/Advanced/Intermediate/Beginner)
    * Table of top skills by proficiency
*/

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Chart, registerables } from 'chart.js';

// Register all available components to ensure pie/bar controllers are available
Chart.register(...registerables);

function calcMetrics(skillsData) {
  const totalSkills = skillsData?.reduce((acc, c) => acc + (c?.skills?.length || 0), 0) || 0;
  const sum = skillsData?.reduce((acc, c) => acc + c?.skills?.reduce((s, sk) => s + (sk?.proficiency || 0), 0), 0) || 0;
  // Use one-decimal precision for averages to avoid rounding confusion
  const average = totalSkills ? Math.round((sum / totalSkills) * 10) / 10 : 0;

  const dist = { expert: 0, advanced: 0, intermediate: 0, beginner: 0 };
  skillsData?.forEach(c => c?.skills?.forEach(sk => {
    const p = sk?.proficiency || 0;
    if (p >= 85) dist.expert += 1; else if (p >= 70) dist.advanced += 1; else if (p >= 50) dist.intermediate += 1; else dist.beginner += 1;
  }));

  const categories = skillsData?.map(c => ({
    name: c?.category,
    avg: (() => {
      const count = c?.skills?.length || 0;
      const total = c?.skills?.reduce((a, sk) => a + (sk?.proficiency || 0), 0) || 0;
      return count ? Math.round((total / count) * 10) / 10 : 0;
    })()
  }));

  const categoryStats = skillsData?.map(c => {
    const count = c?.skills?.length || 0;
    const expertCount = c?.skills?.filter(sk => (sk?.proficiency || 0) >= 85)?.length || 0;
    const avg = count ? Math.round(((c?.skills?.reduce((a, sk) => a + (sk?.proficiency || 0), 0) || 0) / count) * 10) / 10 : 0;
    return { name: c?.category, count, expertCount, avg };
  });

  const flatSkills = skillsData?.flatMap(c => c?.skills?.map(sk => ({
    category: c?.category,
    name: sk?.name,
    proficiency: sk?.proficiency || 0,
    level: sk?.level,
    technologies: (sk?.technologies || []).join(', ')
  })));

  const topSkills = [...flatSkills].sort((a,b) => b.proficiency - a.proficiency).slice(0, 10);

  return { totalSkills, average, dist, categories, categoryStats, topSkills };
}

function createCanvas(width = 600, height = 300) {
  const canvas = document.createElement('canvas');
  // Use CSS size for layout and device pixels for clarity
  const ratio = (window?.devicePixelRatio || 1);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const ctx = canvas.getContext('2d');
  try { ctx.scale(ratio, ratio); } catch {}
  // Ensure hidden so it won’t disturb layout but still renderable
  canvas.style.position = 'fixed';
  canvas.style.left = '-9999px';
  document.body.appendChild(canvas);
  return canvas;
}

function destroyCanvas(canvas, chart) {
  try { chart?.destroy?.(); } catch {}
  try { canvas?.remove?.(); } catch {}
}

export async function generateSkillsSummaryPDF(skillsData, options = {}) {
  const dateStr = new Date().toISOString().slice(0,10);
  const { fileName = `Bala_Adhish_Skills_Summary_${dateStr}.pdf` } = options;
  const metrics = calcMetrics(skillsData || []);

  const doc = new jsPDF({ unit: 'pt' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const MARGIN = 40;
  const HEADER_H = 56;
  const TOP_Y = HEADER_H + 30; // unified content top below header
  const FOOTER_GAP = 40;

  // Brand palette
  const colors = {
    primary: [79, 70, 229], // indigo-600
    secondary: [34, 197, 94], // green-500
    accent: [6, 182, 212], // cyan-500
    text: [17, 24, 39], // gray-900
    muted: [107, 114, 128], // gray-500
    light: [248, 250, 252], // slate-50
    border: [229, 231, 235], // gray-200
  };

  const drawHeader = (subtitle = 'Skills Summary') => {
    doc.setFillColor(...colors.primary);
    doc.rect(0, 0, pageWidth, 56, 'F');
    doc.setTextColor(255,255,255);
    doc.setFont('helvetica','bold');
    doc.setFontSize(14);
    doc.text('Bala Adhish — Portfolio', MARGIN, 24);
    doc.setFont('helvetica','normal');
    doc.setFontSize(11);
    doc.text(subtitle, MARGIN, 42);
    doc.setTextColor(...colors.text);
  };

  const drawFooter = () => {
    doc.setDrawColor(...colors.border);
    doc.line(MARGIN, pageHeight - FOOTER_GAP, pageWidth - MARGIN, pageHeight - FOOTER_GAP);
    doc.setFontSize(10);
    doc.setTextColor(...colors.muted);
    const pageNumber = `${doc.getCurrentPageInfo().pageNumber}`;
    doc.text(`Page ${pageNumber}`, pageWidth - MARGIN - 40, pageHeight - 20);
    doc.text('adhishmagic.github.io/Bala-Adhish-Portfolio', MARGIN, pageHeight - 20);
    doc.setTextColor(...colors.text);
  };

  // Custom plugin to draw values directly on charts for clarity
  const valueLabelPlugin = {
    id: 'valueLabel',
    afterDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, chartArea } = chart;
      ctx.save();
      ctx.font = '12px Helvetica';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      if (chart.config.type === 'bar') {
        const meta = chart.getDatasetMeta(0);
        const values = data.datasets[0].data || [];
        values.forEach((val, i) => {
          const elem = meta.data[i];
          if (!elem) return;
          const { x, y } = elem.tooltipPosition();
          const label = typeof val === 'number' ? `${Math.round(val * 10) / 10}` : String(val);
          // draw just above the bar
          const textY = Math.min(y - 4, chartArea.bottom - 4);
          ctx.fillStyle = '#111827';
          ctx.fillText(label, x, textY);
        });
      } else if (chart.config.type === 'pie') {
        const dataset = data.datasets[0];
        const values = dataset.data || [];
        const total = values.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0) || 1;
        const meta = chart.getDatasetMeta(0);
        values.forEach((val, i) => {
          const elem = meta.data[i];
          if (!elem) return;
          const { x, y } = elem.tooltipPosition();
          const pct = Math.round(((val / total) * 100));
          const label = `${val} (${pct}%)`;
          ctx.fillStyle = '#111827';
          ctx.fillText(label, x, y);
        });
      }
      ctx.restore();
    }
  };

  async function chartToImage(configFactory, width, height) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    let chart;
    try {
      const cfg = configFactory(ctx);
      // Enforce no animation and non-responsive sizing for deterministic rendering
      cfg.options = cfg.options || {};
      cfg.options.animation = false;
      cfg.options.responsive = false;
      cfg.options.maintainAspectRatio = false;
      chart = new Chart(ctx, cfg);
      // Wait a frame to ensure rendering is flushed
      await new Promise(r => setTimeout(r, 0));
      const img = chart?.toBase64Image ? chart.toBase64Image() : canvas.toDataURL('image/png', 1.0);
      return { img, cssW: width, cssH: height, canvas };
    } catch (e) {
      console?.error?.('Chart render failed', e);
      return { img: null, cssW: width, cssH: height, canvas };
    } finally {
      destroyCanvas(canvas, chart);
    }
  }

  // Cover/banner
  drawHeader('Skills Summary');
  // Decorative banner block
  doc.setFillColor(255,255,255);
  doc.roundedRect(MARGIN, TOP_Y, pageWidth - 2*MARGIN, 120, 8, 8, 'S');
  doc.setFont('helvetica','bold');
  doc.setFontSize(22);
  doc.text('Skills Summary — Bala Adhish', MARGIN + 16, TOP_Y + 40);
  doc.setFont('helvetica','normal');
  doc.setFontSize(12);
  doc.setTextColor(...colors.muted);
  doc.text(`Generated: ${new Date().toLocaleString()}`, MARGIN + 16, TOP_Y + 60);
  doc.setTextColor(...colors.text);

  // Quick stats pill row
  const pill = (x, y, w, label, value, fill = colors.light, stroke = colors.border) => {
    doc.setFillColor(...fill); doc.setDrawColor(...stroke);
    doc.roundedRect(x, y, w, 44, 8, 8, 'FD');
    doc.setFontSize(11); doc.setTextColor(...colors.muted); doc.text(label, x + 12, y + 18);
    doc.setFont('helvetica','bold'); doc.setTextColor(...colors.text); doc.setFontSize(14); doc.text(value, x + 12, y + 36);
    doc.setFont('helvetica','normal');
  };
  const pillsY = TOP_Y + 80;
  const spaceW = pageWidth - 2*MARGIN;
  const gap = 12;
  const pillW = Math.floor((spaceW - 2*gap) / 3);
  const totalSkills = metrics.totalSkills || 0;
  const pct = (n) => totalSkills ? `${Math.round((n / totalSkills) * 100)}%` : '0%';
  pill(MARGIN, pillsY, pillW, 'Total Skills', String(totalSkills));
  pill(MARGIN + pillW + gap, pillsY, pillW, 'Average Proficiency', `${metrics.average}%`);
  pill(
    MARGIN + 2*(pillW + gap),
    pillsY,
    pillW,
    'Expert/Advanced',
    `${metrics.dist.expert} (${pct(metrics.dist.expert)}) / ${metrics.dist.advanced} (${pct(metrics.dist.advanced)})`
  );

  // Chart 1: Bar — Average proficiency per category
  let y = pillsY + 64;
  doc.setFont('helvetica', 'bold');
  doc.text('Average Proficiency by Category', 40, y);
  y += 10;
  const barResult = await chartToImage(() => ({
    type: 'bar',
    data: {
      labels: metrics.categories.map(c => c.name),
      datasets: [{
        label: 'Avg %',
        data: metrics.categories.map(c => c.avg),
        backgroundColor: ['#4F46E5','#22C55E','#06B6D4','#3B82F6','#F59E0B','#EF4444']
      }]
    },
    plugins: [valueLabelPlugin],
    options: {
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        y: { beginAtZero: true, max: 100, grid: { color: '#E5E7EB' }, ticks: { color: '#6B7280' } },
        x: { ticks: { color: '#6B7280' } }
      }
    }
  }), 800, 360);
  const barImg = barResult.img;
  const barW = pageWidth - 2*MARGIN;
  const ratio = 360 / 800;
  let barH = ratio * barW;
  const availableH = pageHeight - FOOTER_GAP - (y + 10) - 20; // avoid footer overlap
  if (barH > availableH) barH = availableH;
  if (barImg) {
    doc.addImage(barImg, 'PNG', MARGIN, y + 10, barW, barH);
  } else {
    doc.setFont('helvetica','italic'); doc.setFontSize(11); doc.setTextColor(150);
    doc.text('Bar chart unavailable', MARGIN, y + 24);
    doc.setTextColor(...colors.text);
  }

  // Fill remaining space on page 1 with Category Highlights table (compact)
  let tableStartY = y + 10 + barH + 16;
  const bottomLimit = pageHeight - FOOTER_GAP - 60;
  if (tableStartY < bottomLimit) {
    doc.setFont('helvetica','bold');
    doc.text('Category Highlights', MARGIN, tableStartY);
    autoTable(doc, {
      startY: tableStartY + 8,
      margin: { left: MARGIN, right: MARGIN },
      tableWidth: pageWidth - 2*MARGIN,
      head: [['Category', 'Skills', 'Expert (≥85%)', 'Avg %']],
      body: metrics.categoryStats.map(c => [c.name, String(c.count), String(c.expertCount), `${c.avg}%`]),
      styles: { fontSize: 8, cellPadding: 2, overflow: 'linebreak' },
      headStyles: { fillColor: colors.primary, textColor: [255,255,255] },
      alternateRowStyles: { fillColor: colors.light },
      columnStyles: { 0: { cellWidth: 200 }, 1: { cellWidth: 60, halign: 'center' }, 2: { cellWidth: 120, halign: 'center' }, 3: { cellWidth: 60, halign: 'center' } },
      pageBreak: 'avoid'
    });
  }

  drawFooter();

  // New page for Pie + Table
  doc.addPage();
  drawHeader('Distribution & Top Skills');
  doc.setFont('helvetica', 'bold');
  doc.text('Proficiency Level Distribution', MARGIN, TOP_Y);
  // Plugin: center text for doughnut
  const doughnutCenterTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      const total = [metrics.dist.expert, metrics.dist.advanced, metrics.dist.intermediate, metrics.dist.beginner].reduce((a,b)=>a+b,0);
      ctx.save();
      ctx.font = 'bold 14px Helvetica';
      ctx.fillStyle = '#111827';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;
      ctx.fillText(`Total ${total}`, x, y);
      ctx.restore();
    }
  };

  const pieResult = await chartToImage(() => ({
    type: 'doughnut',
    data: {
      labels: ['Expert (85-100)', 'Advanced (70-84)', 'Intermediate (50-69)', 'Beginner (<50)'],
      datasets: [{
        data: [metrics.dist.expert, metrics.dist.advanced, metrics.dist.intermediate, metrics.dist.beginner],
        backgroundColor: ['#22C55E', '#3B82F6', '#EAB308', '#9CA3AF'],
        borderColor: '#ffffff',
        borderWidth: 1,
        cutout: '55%'
      }]
    },
    // Avoid overlapping labels on slices; rely on legend + pills
    plugins: [doughnutCenterTextPlugin],
    options: { plugins: { legend: { position: 'bottom' } } }
  }), 400, 300);
  const pieImg = pieResult.img;
  const maxPieW = Math.min(360, pageWidth - 2*MARGIN);
  const pieW = maxPieW;
  const pieRatio = 300 / 400; // height/width from render dimensions
  const pieH = pieRatio * pieW;
  let pieY = TOP_Y + 16;
  const pieX = (pageWidth - pieW) / 2;
  const pieAvailH = pageHeight - FOOTER_GAP - pieY - 200; // leave room for table title
  const pieScaledH = Math.min(pieH, Math.max(160, pieAvailH));
  if (pieImg) {
    doc.addImage(pieImg, 'PNG', pieX, pieY, pieW, pieScaledH);
  } else {
    doc.setFont('helvetica','italic'); doc.setFontSize(11); doc.setTextColor(150);
    doc.text('Pie chart unavailable', MARGIN, pieY + 16);
    doc.setTextColor(...colors.text);
  }

  // Level summary pills under pie to fill space and add clarity
  const pillsRowY = pieY + pieScaledH + 12;
  const pillsGap = 10;
  const pillsCount = 4;
  const pillRowW = pageWidth - 2*MARGIN - (pillsGap * (pillsCount - 1));
  const pillEachW = Math.floor(pillRowW / pillsCount);
  const levels = [
    { label: 'Expert (85-100)', count: metrics.dist.expert },
    { label: 'Advanced (70-84)', count: metrics.dist.advanced },
    { label: 'Intermediate (50-69)', count: metrics.dist.intermediate },
    { label: 'Beginner (<50)', count: metrics.dist.beginner }
  ];
  levels.forEach((lv, idx) => {
    const x = MARGIN + idx * (pillEachW + pillsGap);
    const text = `${lv.count} (${pct(lv.count)})`;
    pill(x, pillsRowY, pillEachW, lv.label, text);
  });

  // Table — Top skills
  doc.setFont('helvetica', 'bold');
  const tableTitleY = pillsRowY + 58;
  doc.text('Top Skills by Proficiency', MARGIN, tableTitleY);
  const topTableWidth = pageWidth - 2*MARGIN;
  const topCol0 = 120; // Skill
  const topCol1 = 100; // Category
  const topCol2 = 55;  // Proficiency
  const topCol3 = Math.max(120, topTableWidth - (topCol0 + topCol1 + topCol2));
  autoTable(doc, {
    startY: tableTitleY + 10,
    margin: { left: MARGIN, right: MARGIN },
    tableWidth: topTableWidth,
    head: [['Skill', 'Category', 'Proficiency', 'Technologies']],
    body: metrics.topSkills.map(s => [s.name, s.category, `${s.proficiency}%`, s.technologies]),
    styles: { fontSize: 8, cellPadding: 2, overflow: 'linebreak' },
    headStyles: { fillColor: colors.primary, textColor: [255,255,255] },
    alternateRowStyles: { fillColor: colors.light },
    columnStyles: {
      0: { cellWidth: topCol0 },
      1: { cellWidth: topCol1 },
      2: { cellWidth: topCol2, halign: 'center' },
      3: { cellWidth: topCol3 }
    },
    didParseCell: (data) => {
      if (data.section === 'body' && data.column.index === 2) {
        const raw = String(data.cell.raw || '').replace('%','');
        const val = parseInt(raw, 10);
        if (!isNaN(val)) {
          if (val >= 85) { data.cell.styles.fillColor = colors.secondary; data.cell.styles.textColor = [255,255,255]; }
          else if (val >= 70) { data.cell.styles.fillColor = colors.primary; data.cell.styles.textColor = [255,255,255]; }
          else if (val >= 50) { data.cell.styles.fillColor = [234,179,8]; data.cell.styles.textColor = [0,0,0]; }
          else { data.cell.styles.fillColor = [156,163,175]; data.cell.styles.textColor = [255,255,255]; }
        }
      }
    }
  });

  drawFooter();

  // Category breakdown table on a new page for clarity
  doc.addPage();
  drawHeader('Category Breakdown');
  doc.setFont('helvetica','bold');
  doc.text('Average Proficiency by Category', MARGIN, TOP_Y);
  autoTable(doc, {
    startY: TOP_Y + 20,
    margin: { left: MARGIN, right: MARGIN },
    head: [['Category', 'Avg Proficiency']],
    body: metrics.categories.map(c => [c.name, `${c.avg}%`]),
    styles: { fontSize: 11, cellPadding: 4, overflow: 'linebreak' },
    headStyles: { fillColor: colors.primary, textColor: [255,255,255] },
    alternateRowStyles: { fillColor: colors.light },
    columnStyles: { 0: { cellWidth: 220 }, 1: { cellWidth: 120, halign: 'center' } }
  });

  drawFooter();

  // Save
  // Final footer on last page
  drawFooter();
  doc.save(fileName);
}
