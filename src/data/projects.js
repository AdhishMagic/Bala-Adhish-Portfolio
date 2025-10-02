// Centralized projects data used across the site (homepage featured carousel + technical portfolio page)
// Keep structure consistent: id, title, type, difficulty, status, featured, image, description, fullDescription,
// problemStatement?, solutionApproach?, keyFeatures?, technologies, metrics, awards, githubUrl, liveDemo, gallery,
// architectureDiagram?, architectureDecisions?, codeSnippets?

const projects = [
  {
    id: 1,
  title: "Sales Forecasting with Multiple Models",
    type: "Data Science",
    difficulty: "Advanced",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698b1?w=800&h=600&fit=crop",
  description: "Compared Seasonal Naïve, Holt–Winters, ARIMA/SARIMA, and Linear Regression for monthly sales forecasting.",
  fullDescription: `Implemented an end-to-end classical time-series workflow: data cleaning, stationarity checks, seasonal decomposition, hyperparameter tuning, and rolling backtests. Benchmarked models with MAPE/RMSE across monthly horizons to guide model selection for planning decisions.`,
    problemStatement: "Business teams need reliable sales predictions to plan inventory and marketing but struggle to choose the right model for different patterns (trend/seasonality).",
    solutionApproach: "Implemented a model comparison framework with SARIMA grid-search and Holt-Winters smoothing; benchmarked against Seasonal Naïve and a simple Linear Regression baseline.",
    keyFeatures: [
      "End-to-end EDA and preprocessing pipeline",
      "Stationarity tests (ADF) and differencing",
      "SARIMA hyperparameter grid search",
      "Cross-validated backtesting with rolling windows",
      "Error metrics dashboard (MAPE, RMSE, MAE)"
    ],
    technologies: ["Python", "Jupyter Notebook", "pandas", "statsmodels", "scikit-learn", "NumPy", "Matplotlib"],
    metrics: {
      linesOfCode: "1.6K",
      duration: "3 weeks",
      teamSize: "1",
      userImpact: "Academic"
    },
    awards: [],
    githubUrl: null,
    liveDemo: null,
    gallery: [
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      {
        title: "Classical time-series first",
        description: "Prefer interpretable classical models (SARIMA, Holt-Winters) before moving to ML/Deep Learning.",
        rationale: "Sales data often exhibits seasonal components where classical models perform competitively with fewer data requirements."
      },
      {
        title: "Rolling-window backtesting",
        description: "Use rolling splits to simulate production forecasting and avoid optimistic leakage.",
        rationale: "Better reflects real-world forecasting where future data is unavailable at train time."
      }
    ],
    codeSnippets: [
      {
        title: "SARIMA model fit and forecast",
        language: "Python",
        code: `import pandas as pd\nfrom statsmodels.tsa.statespace.sarimax import SARIMAX\n\n# train/test split\ntrain, test = ts[:-12], ts[-12:]\n\n# simple SARIMA example\nmodel = SARIMAX(train, order=(1,1,1), seasonal_order=(1,1,1,12), enforce_stationarity=False, enforce_invertibility=False)\nres = model.fit(disp=False)\n\npred = res.get_forecast(steps=12).predicted_mean\nerror = (abs(pred - test) / test).mean()  # MAPE`
      }
    ]
  },
  {
    id: 2,
  title: "All‑in‑One Calculator",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800&h=600&fit=crop",
  description: "Responsive calculator supporting arithmetic, percentage, and keyboard input with a clean UI.",
  fullDescription: `Vanilla JavaScript calculator with input sanitization, keyboard shortcuts, and expression parsing. Designed with accessible UI patterns and clear error states.`,
    problemStatement: "Practice DOM manipulation and event handling while delivering a familiar, accessible utility.",
    solutionApproach: "Implemented a small expression parser with operator precedence and added keyboard bindings for fast input.",
    keyFeatures: [
      "Keyboard shortcuts (0-9, operators, Enter, Backspace)",
      "Operator precedence and chaining",
      "Responsive layout for mobile",
      "Clear/Error states"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    metrics: {
      linesOfCode: "400",
      duration: "1 week",
      teamSize: "1",
      userImpact: "Personal"
    },
    awards: [],
    githubUrl: null,
    liveDemo: null,
    gallery: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop"
    ],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      {
        title: "Vanilla JS over frameworks",
        description: "Keep bundle size tiny and focus on core JavaScript fundamentals.",
        rationale: "Great for learning and ensures minimal dependencies."
      }
    ],
    codeSnippets: [
      {
        title: "Evaluate expression safely",
        language: "JavaScript",
        code: `const evaluate = (expr) => {\n  // basic tokenization and safe eval using Function\n  const safe = expr.replace(/[^0-9+*/().%-]/g, '');\n  try {\n    const val = Function('return ' + safe)();\n    return Number.isFinite(val) ? val : 'Error';\n  } catch {\n    return 'Error';\n  }\n};`
      }
    ]
  },
  {
    id: 3,
  title: "Weather Forecast Application",
    type: "Web Development",
    difficulty: "Intermediate",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1527708676371-14f9a9503c9b?w=800&h=600&fit=crop",
  description: "City-based weather app showing current conditions and a 5‑day outlook (OpenWeather API).",
  fullDescription: `Lightweight SCSS-styled app with debounced search, clear error states, and simple caching of recent queries. Prioritizes clarity and responsiveness.`,
    problemStatement: "Provide quick, accurate weather info with a simple interface and minimal API usage.",
    solutionApproach: "Used fetch with abort controllers, debouncing, and localStorage to reduce network calls.",
    keyFeatures: [
      "Search by city with debouncing",
      "Current conditions + 5-day forecast",
      "Unit toggle (°C/°F)",
      "Recent search history"
    ],
    technologies: ["HTML", "SCSS", "JavaScript", "OpenWeather API"],
    metrics: {
      linesOfCode: "600",
      duration: "2 weeks",
      teamSize: "1",
      userImpact: "Personal"
    },
    awards: [],
    githubUrl: null,
    liveDemo: null,
    gallery: [],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      {
        title: "API usage optimization",
        description: "Cache responses and debounce input to minimize API calls.",
        rationale: "Keeps the app snappy and respects rate limits."
      }
    ],
    codeSnippets: [
      {
        title: "Fetch current weather",
        language: "JavaScript",
        code: `const fetchWeather = async (city, signal) => {\n  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=YOUR_KEY";\n  const res = await fetch(url, { signal });\n  if (!res.ok) throw new Error('City not found');\n  return res.json();\n};`
      }
    ]
  },
  {
    id: 4,
  title: "CNN‑based Image Classification",
    type: "AI/ML",
    difficulty: "Advanced",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
  description: "Convolutional neural network for image classification with data augmentation and robust evaluation.",
  fullDescription: `TensorFlow/Keras notebook covering train/validation split, augmentations, learning‑rate scheduling, early stopping, and confusion‑matrix analysis. Includes transfer learning baselines for improved generalization.`,
    problemStatement: "Accurately classify images across multiple categories with limited labeled data.",
    solutionApproach: "Leverage transfer learning and augmentation to improve generalization on small datasets.",
    keyFeatures: [
      "Custom CNN and transfer learning variants",
      "Data augmentation pipeline",
      "Early stopping and LR scheduling",
      "Evaluation: accuracy, confusion matrix, ROC"
    ],
    technologies: ["Python", "Jupyter Notebook", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    metrics: {
      linesOfCode: "1.2K",
      duration: "3 weeks",
      teamSize: "1",
      userImpact: "Academic"
    },
    awards: [],
    githubUrl: null,
    liveDemo: null,
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    ],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      {
        title: "Transfer learning baseline",
        description: "Start from a pre-trained backbone (e.g., MobileNetV2) and fine-tune.",
        rationale: "Improves results quickly on smaller datasets."
      }
    ],
    codeSnippets: [
      {
        title: "Keras CNN model",
        language: "Python",
        code: `import tensorflow as tf\nfrom tensorflow.keras import layers as L, models as M\n\nmodel = M.Sequential([\n  L.Conv2D(32, 3, activation='relu', input_shape=(128,128,3)),\n  L.MaxPool2D(),\n  L.Conv2D(64, 3, activation='relu'),\n  L.MaxPool2D(),\n  L.Flatten(),\n  L.Dense(128, activation='relu'),\n  L.Dropout(0.3),\n  L.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])`
      }
    ]
  },
  {
    id: 5,
  title: "Starbucks Landing Page (Concept)",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1503481766315-7a586b20f66b?w=800&h=600&fit=crop",
  description: "Responsive concept landing page focused on layout, typography, and accessibility.",
  fullDescription: `Semantic HTML with modern CSS (Flexbox/Grid). Emphasis on responsive design, accessible color contrast, and clear focus states.`,
    problemStatement: "Practice pixel-perfect UI development and responsive design patterns.",
    solutionApproach: "Used CSS Grid for layout and utility classes for spacing to keep CSS organized.",
    keyFeatures: [
      "Responsive hero and product sections",
      "Sticky header with smooth scrolling",
      "Accessible color contrast and focus states",
      "Lightweight assets"
    ],
    technologies: ["HTML", "CSS", "Responsive Design"],
    metrics: {
      linesOfCode: "500",
      duration: "4 days",
      teamSize: "1",
      userImpact: "Personal"
    },
    awards: [],
    githubUrl: null,
    liveDemo: null,
    gallery: [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&h=600&fit=crop"
    ],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      {
        title: "Mobile-first CSS",
        description: "Start from small screens and progressively enhance.",
        rationale: "Ensures usability across devices with minimal overrides."
      }
    ],
    codeSnippets: [
      {
        title: "Responsive grid snippet",
        language: "CSS",
        code: `.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}`
      }
    ]
  },
  {
    id: 5.1,
  title: "Bala Adhish Portfolio",
    type: "Web Development",
    difficulty: "Intermediate",
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
  description: "React + Vite + Tailwind portfolio showcasing projects and case studies.",
  fullDescription: "Responsive, component-driven portfolio using modern tooling (Vite, Tailwind, shadcn-style UI). Includes modular pages and a project showcase with filters and modal details.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    metrics: { linesOfCode: "2.5K", duration: "2 weeks", teamSize: "1", userImpact: "Hiring Managers" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Bala-Adhish-Portfolio",
    liveDemo: null,
    gallery: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
    ],
    architectureDiagram: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
    architectureDecisions: [
      { title: "Vite + React", description: "Fast dev server and lean bundling.", rationale: "Developer experience and performance." },
      { title: "Tailwind CSS", description: "Utility-first styling.", rationale: "Rapid iteration and consistency." }
    ],
    keyFeatures: [
      "Project showcase with modal details",
      "Search and sorting",
      "Responsive layout and components"
    ],
    codeSnippets: []
  },
  {
    id: 6,
  title: "Medical Insurance Price Prediction",
    type: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=800&h=600&fit=crop",
    description: "Predict medical insurance charges using regression models on demographic and lifestyle features.",
    fullDescription: "Built a regression pipeline including preprocessing (encoding, scaling), model training (Linear/Tree-based), and evaluation (RMSE/MAE).",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "Matplotlib", "Seaborn"],
    metrics: { linesOfCode: "800", duration: "2 weeks", teamSize: "1", userImpact: "Academic" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Medical-Insurance-Price-Prediction",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1580281657527-47d8b0f6a5dc?w=800&h=600&fit=crop"]
  },
  {
    id: 7,
  title: "Stock Price Prediction",
    type: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop",
    description: "Time-series prediction of stock prices with classical models and feature engineering.",
    fullDescription: "Implemented moving-window features and classical models (ARIMA/Regression) for next-day/next-week forecasts.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "statsmodels", "scikit-learn"],
    metrics: { linesOfCode: "900", duration: "2 weeks", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Stock-Price-Prediction",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=600&fit=crop"]
  },
  {
    id: 8,
  title: "Rainfall Prediction using Machine Learning",
    type: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1501696461415-6bd6660c1c94?w=800&h=600&fit=crop",
    description: "Predict rainfall using meteorological features and supervised learning.",
    fullDescription: "Trained classification models (Logistic, RandomForest) with cross-validation and handled class imbalance.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "Matplotlib"],
    metrics: { linesOfCode: "700", duration: "2 weeks", teamSize: "1", userImpact: "Academic" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Rainfall-Prediction-using-Machine-Learning",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1484766280341-87861644c80d?w=800&h=600&fit=crop"]
  },
  {
    id: 9,
  title: "Agriculture Automation with AI & IoT",
    type: "Mobile",
    difficulty: "Advanced",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=800&h=600&fit=crop",
  description: "Flutter app interfacing with IoT sensors and AI logic for agriculture automation.",
  fullDescription: "Measures water/fertilizer volumes and optimizes schedules to reduce manual intervention and costs. MQTT-based messaging for device coordination.",
    technologies: ["Dart", "Flutter", "IoT", "MQTT"],
    metrics: { linesOfCode: "1.5K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Automation-with-AI-IOT-with-Machine-language",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1526312426976-593c8acbfaee?w=800&h=600&fit=crop"]
  },
  {
    id: 10,
  title: "IPL Score Prediction",
    type: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1594470117722-d04a5571ab47?w=800&h=600&fit=crop",
    description: "Predict T20 innings scores using historical ball-by-ball features.",
    fullDescription: "Feature engineering on overs, wickets, run rate with regression models and evaluation metrics.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn"],
    metrics: { linesOfCode: "850", duration: "1 week", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/IPL-Score-Prediction",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop"]
  },
  {
    id: 11,
    title: "CarbonTrack",
    type: "Web Development",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=800&h=600&fit=crop",
  description: "Carbon footprint tracker with simple calculators and actionable tips.",
  fullDescription: "Front-end app to estimate footprint for transport/energy and visualize weekly trends. Focuses on clarity and low-friction inputs.",
    technologies: ["JavaScript", "HTML", "CSS"],
    metrics: { linesOfCode: "700", duration: "1 week", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/CarbonTrack",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1460400408855-36abd76648b9?w=800&h=600&fit=crop"]
  },
  {
    id: 12,
  title: "SmartCrick: Predicting Match Winners",
    type: "AI/ML",
    difficulty: "Advanced",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1521417531039-96c46b1f3e8a?w=800&h=600&fit=crop",
  description: "Predict match winners using historical stats with ML classification.",
  fullDescription: "Feature engineering on team form, venues, and recent performance. Evaluated multiple classifiers and calibration for reliable probabilities.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn"],
    metrics: { linesOfCode: "1.1K", duration: "3 weeks", teamSize: "1", userImpact: "Academic" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/SmartCrick-A-Data-Driven-AI-System-to-Predict-Match-Winners-in-Professional-Cricket-Leagues",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=600&fit=crop"]
  },
  {
    id: 13,
  title: "Utility Sandbox (automatic-octo-engine)",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    description: "Sandbox repo for experiments and utilities.",
    fullDescription: "Small utilities and prototypes collected during learning.",
    technologies: ["JavaScript", "HTML", "CSS"],
    metrics: { linesOfCode: "300", duration: "Varies", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/automatic-octo-engine",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&h=600&fit=crop"]
  },
  {
    id: 14,
  title: "Wine Quality Prediction using Machine Learning",
    type: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c76ea?w=800&h=600&fit=crop",
    description: "Classify wine quality using physicochemical tests.",
    fullDescription: "Built and evaluated classification models; analyzed feature importances.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "Matplotlib"],
    metrics: { linesOfCode: "750", duration: "1 week", teamSize: "1", userImpact: "Academic" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Wine-Quality-Prediction-using-Machine-Learning",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop"]
  },
  {
    id: 15,
  title: "Ultimate JARVIS AI",
    type: "AI/ML",
    difficulty: "Intermediate",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    description: "Voice-driven assistant with NLP for basic tasks.",
    fullDescription: "Prototype voice commands, reminders, and web search integration.",
    technologies: ["Python", "NLP", "SpeechRecognition"],
    metrics: { linesOfCode: "1.0K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Ultimate-JARVIS-AI",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"]
  },
  {
    id: 16,
  title: "CRUD Operations in JavaScript",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=800&h=600&fit=crop",
    description: "Basic CRUD app with vanilla JavaScript and localStorage.",
    fullDescription: "Create, read, update, and delete records in a single-page UI.",
    technologies: ["JavaScript", "HTML", "CSS"],
    metrics: { linesOfCode: "350", duration: "3 days", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/CRUD-Operation-in-JavaScript",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"]
  },
  {
    id: 17,
  title: "Python Projects Collection",
    type: "Data Science",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    description: "Collection of small Python utilities and scripts.",
    fullDescription: "Assorted practice scripts for data processing and automation.",
    technologies: ["Python"],
    metrics: { linesOfCode: "1.2K", duration: "Varies", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Python-Projects",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"]
  },
  {
    id: 18,
  title: "YouTube Homepage Clone",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    description: "Static layout clone of YouTube homepage.",
    fullDescription: "Implemented with semantic HTML and responsive CSS.",
    technologies: ["HTML", "CSS"],
    metrics: { linesOfCode: "450", duration: "4 days", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/YouTube-Clone",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"]
  },
  {
    id: 19,
  title: "TrendNet: Real‑time Topic Graph from X (Twitter)",
    type: "AI/ML",
    difficulty: "Advanced",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&h=600&fit=crop",
  description: "Real-time topic graph from X (Twitter) streams.",
  fullDescription: "Ingests posts, extracts entities/keywords, and visualizes evolving conversation networks.",
    technologies: ["Python", "NLP", "NetworkX", "Tweepy"],
    metrics: { linesOfCode: "1.6K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/TrendNet-AI-Powered-Real-Time-Topic-Graph-from-Twitter-X",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop"]
  },
  {
    id: 20,
  title: "GenSync: LLM‑based Idea Generator",
    type: "AI/ML",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    description: "LLM-powered idea generator with simple prompts.",
    fullDescription: "Generates structured ideas given context and constraints.",
    technologies: ["Python", "LLM", "NLP"],
    metrics: { linesOfCode: "900", duration: "1 week", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/GenSync-llm-model-to-generate-idea",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=600&fit=crop"]
  },
  {
    id: 21,
  title: "Tic‑Tac‑Toe Game",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
    description: "Classic Tic-Tac-Toe with JS and simple AI.",
    fullDescription: "Implements win logic and reset functionality.",
    technologies: ["JavaScript", "HTML", "CSS"],
    metrics: { linesOfCode: "300", duration: "2 days", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Tic-Tac-Toe-Game",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"]
  },
  {
    id: 22,
  title: "MindWatt: Behavior‑Aware Energy Optimization System",
  type: "AI/ML",
    difficulty: "Advanced",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?w=800&h=600&fit=crop",
    description: "Optimizes energy usage based on behavioral patterns.",
    fullDescription: "Learns habits and suggests schedules to reduce energy consumption.",
    technologies: ["Python", "ML", "IoT"],
    metrics: { linesOfCode: "1.8K", duration: "Ongoing", teamSize: "1", userImpact: "Concept" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/MindWatt-Behavior-Aware-Energy-Optimization-System",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"]
  },
  {
    id: 23,
  title: "AI‑Assisted Full‑Stack Website",
    type: "Web Development",
    difficulty: "Intermediate",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  description: "Exploring full‑stack development workflows accelerated by AI tooling.",
  fullDescription: "Automates portions of front‑end/back‑end scaffolding and boilerplate with AI assistants.",
    technologies: ["JavaScript", "Node.js", "AI Tools"],
    metrics: { linesOfCode: "1.3K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Full-stack-website-only-using-AI",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"]
  },
  {
    id: 24,
  title: "AI Therapy Bot",
    type: "AI/ML",
    difficulty: "Intermediate",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  description: "Chatbot for supportive, empathetic conversations using NLP.",
  fullDescription: "Provides empathetic responses and resource suggestions; not a medical device.",
    technologies: ["Python", "NLP", "LLM"],
    metrics: { linesOfCode: "1.0K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/AI-Therapy-Bot",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&h=600&fit=crop"]
  },
  {
    id: 25,
  title: "Pizza Delivery API (FastAPI)",
    type: "Web Development",
    difficulty: "Intermediate",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb09530?w=800&h=600&fit=crop",
    description: "REST API for pizza ordering and tracking built with FastAPI.",
    fullDescription: "Implements CRUD for menu, orders, and authentication.",
    technologies: ["Python", "FastAPI", "SQLite"],
    metrics: { linesOfCode: "1.4K", duration: "2 weeks", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Pizza-Delivery-API-with-FastAPI",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"]
  },
  {
    id: 26,
  title: "Number Guessing Game",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    description: "Simple number guessing game using HTML/CSS/JS.",
    fullDescription: "Generates random numbers and gives feedback on guesses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    metrics: { linesOfCode: "200", duration: "1 day", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Number-Guessing-Game",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"]
  },
  {
    id: 27,
  title: "Dynamic Ping Pong",
    type: "Web Development",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop",
    description: "Interactive ping pong game in the browser.",
    fullDescription: "Canvas-based animation with simple physics.",
    technologies: ["JavaScript", "HTML", "CSS"],
    metrics: { linesOfCode: "350", duration: "3 days", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Dynamic-Ping-Pong",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1520975922421-151edbd0f0bd?w=800&h=600&fit=crop"]
  },
  {
    id: 28,
  title: "Data Preprocessing Template",
    type: "Data Science",
    difficulty: "Beginner",
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Template notebook for data preprocessing workflows.",
    fullDescription: "Covers missing values, encoding, scaling, and train-test splits.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn"],
    metrics: { linesOfCode: "500", duration: "3 days", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Data-Preprocessing-Structure",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop"]
  },
  {
    id: 29,
  title: "TensorFlow Experiments",
    type: "AI/ML",
    difficulty: "Intermediate",
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&h=600&fit=crop",
    description: "Collection of TensorFlow experiments and notebooks.",
    fullDescription: "Exploring different architectures and training tricks.",
    technologies: ["Python", "TensorFlow", "Jupyter Notebook"],
    metrics: { linesOfCode: "2.0K", duration: "Ongoing", teamSize: "1", userImpact: "Personal" },
    awards: [],
    githubUrl: "https://github.com/AdhishMagic/Tensorflow_projects",
    liveDemo: null,
    gallery: ["https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop"]
  }
];

export default projects;
