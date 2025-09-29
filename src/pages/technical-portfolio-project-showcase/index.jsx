import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const TechnicalPortfolioProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    technology: [],
    difficulty: [],
    status: []
  });
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

  // Portfolio projects from resume
  const projects = [
    {
      id: 1,
      title: "Sales-Forcasting-using-Multi-Models",
      type: "Data Science",
      difficulty: "Advanced",
      status: "Completed",
      featured: true,
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698b1?w=800&h=600&fit=crop",
      description: "Sales forecasting using Seasonal Naïve, Holt-Winters, ARIMA, SARIMA, and Linear Regression to compare performance across time horizons.",
      fullDescription: `Built and evaluated multiple classical time-series models for sales forecasting. The project includes data cleaning, stationarity checks, decomposition, hyperparameter tuning, and backtesting to compare model performance (MAPE/RMSE) across monthly horizons.`,
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
      title: "All_type_of_Calculator",
      type: "Web Development",
      difficulty: "Beginner",
      status: "Completed",
  featured: true,
      image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800&h=600&fit=crop",
      description: "A responsive calculator supporting basic arithmetic, percentage, and keyboard input with a clean UI.",
  fullDescription: `A front-end calculator built with vanilla JavaScript. Includes input sanitization, keyboard shortcuts, and expression parsing with graceful error handling. Designed with simple, accessible UI patterns.`,
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
      title: "Weather-Forecast-Application",
      type: "Web Development",
      difficulty: "Intermediate",
      status: "Completed",
  featured: true,
      image: "https://images.unsplash.com/photo-1527708676371-14f9a9503c9b?w=800&h=600&fit=crop",
      description: "City-based weather forecast with current conditions and 5-day outlook using OpenWeather API.",
  fullDescription: `A lightweight weather app styled with SCSS. Implements debounced search, error states, and simple caching of recent queries. UI focuses on clarity and responsiveness.`,
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
      title: "CNN-based-Image-Classification",
      type: "AI/ML",
      difficulty: "Advanced",
      status: "Completed",
  featured: true,
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
      description: "Built a convolutional neural network for image classification with data augmentation and evaluation.",
  fullDescription: `Implemented a CNN using TensorFlow/Keras in a Jupyter Notebook. Includes train/validation split, augmentations, learning-rate scheduling, and confusion matrix analysis.`,
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
      title: "Starbucks-Coffee-Website-Landing-Page",
      type: "Web Development",
      difficulty: "Beginner",
      status: "Completed",
  featured: true,
      image: "https://images.unsplash.com/photo-1503481766315-7a586b20f66b?w=800&h=600&fit=crop",
      description: "A static, responsive Starbucks-themed landing page focusing on layout and typography.",
      fullDescription: `Built a clean landing page using semantic HTML and modern CSS techniques (Flexbox/Grid). Emphasis on responsive design and accessibility.`,
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
      title: "Bala-Adhish-Portfolio",
      type: "Web Development",
      difficulty: "Intermediate",
      status: "Completed",
      featured: true,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
      description: "This portfolio site built with React + Vite + Tailwind, showcasing projects and case studies.",
      fullDescription: "A responsive, component-driven portfolio using modern tooling (Vite, Tailwind, shadcn-style UI), with modular pages and a project showcase with filters and modal details.",
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
      title: "Medical-Insurance-Price-Prediction",
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
      title: "Stock-Price-Prediction",
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
      title: "Rainfall-Prediction-using-Machine-Learning",
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
      title: "Automation-with-AI-IOT-with-Machine-language",
      type: "Mobile",
      difficulty: "Advanced",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=800&h=600&fit=crop",
      description: "Flutter/Dart app interfacing with IoT sensors and AI logic for agriculture automation.",
      fullDescription: "Measures water/fertilizer volumes and optimizes schedules to reduce manual intervention and costs.",
      technologies: ["Dart", "Flutter", "IoT", "MQTT"],
      metrics: { linesOfCode: "1.5K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/Automation-with-AI-IOT-with-Machine-language",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1526312426976-593c8acbfaee?w=800&h=600&fit=crop"]
    },
    {
      id: 10,
      title: "IPL-Score-Prediction",
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
      description: "Carbon footprint tracker with simple calculators and tips.",
      fullDescription: "Front-end app to estimate footprint for transport/energy and visualize weekly trends.",
      technologies: ["JavaScript", "HTML", "CSS"],
      metrics: { linesOfCode: "700", duration: "1 week", teamSize: "1", userImpact: "Personal" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/CarbonTrack",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1460400408855-36abd76648b9?w=800&h=600&fit=crop"]
    },
    {
      id: 12,
      title: "SmartCrick-A-Data-Driven-AI-System-to-Predict-Match-Winners-in-Professional-Cricket-Leagues",
      type: "AI/ML",
      difficulty: "Advanced",
      status: "Completed",
      featured: false,
      image: "https://images.unsplash.com/photo-1521417531039-96c46b1f3e8a?w=800&h=600&fit=crop",
      description: "Predict match winners using historical stats and ML classification.",
      fullDescription: "Built a feature set on team forms and venues; evaluated multiple classifiers and calibration.",
      technologies: ["Python", "Jupyter Notebook", "pandas", "scikit-learn"],
      metrics: { linesOfCode: "1.1K", duration: "3 weeks", teamSize: "1", userImpact: "Academic" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/SmartCrick-A-Data-Driven-AI-System-to-Predict-Match-Winners-in-Professional-Cricket-Leagues",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=600&fit=crop"]
    },
    {
      id: 13,
      title: "automatic-octo-engine",
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
      title: "Wine-Quality-Prediction-using-Machine-Learning",
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
      title: "Ultimate-JARVIS-AI",
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
      title: "CRUD-Operation-in-JavaScript",
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
      title: "Python-Projects",
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
      title: "YouTube-Clone",
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
      title: "TrendNet-AI-Powered-Real-Time-Topic-Graph-from-Twitter-X",
      type: "AI/ML",
      difficulty: "Advanced",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&h=600&fit=crop",
      description: "Builds a real-time topic graph from Twitter/X streams.",
      fullDescription: "Ingests tweets, extracts entities/keywords, and visualizes networks.",
      technologies: ["Python", "NLP", "NetworkX", "Tweepy"],
      metrics: { linesOfCode: "1.6K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/TrendNet-AI-Powered-Real-Time-Topic-Graph-from-Twitter-X",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop"]
    },
    {
      id: 20,
      title: "GenSync-llm-model-to-generate-idea",
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
      title: "Tic-Tac-Toe-Game",
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
      title: "MindWatt-Behavior-Aware-Energy-Optimization-System",
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
      title: "Full-stack-website-only-using-AI",
      type: "Web Development",
      difficulty: "Intermediate",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      description: "Exploring building a full-stack site leveraging AI tooling.",
      fullDescription: "Automates parts of front-end/back-end scaffolding with AI.",
      technologies: ["JavaScript", "Node.js", "AI Tools"],
      metrics: { linesOfCode: "1.3K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/Full-stack-website-only-using-AI",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"]
    },
    {
      id: 24,
      title: "AI-Therapy-Bot",
      type: "AI/ML",
      difficulty: "Intermediate",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: "Chatbot for supportive conversations using NLP.",
      fullDescription: "Provides empathetic responses; not a medical device.",
      technologies: ["Python", "NLP", "LLM"],
      metrics: { linesOfCode: "1.0K", duration: "Ongoing", teamSize: "1", userImpact: "Prototype" },
      awards: [],
      githubUrl: "https://github.com/AdhishMagic/AI-Therapy-Bot",
      liveDemo: null,
      gallery: ["https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&h=600&fit=crop"]
    },
    {
      id: 25,
      title: "Pizza-Delivery-API-with-FastAPI",
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
      title: "Number-Guessing-Game",
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
      title: "Dynamic-Ping-Pong",
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
      title: "Data-Preprocessing-Structure",
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
      title: "Tensorflow_projects",
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

  // Get available filter options
  const filterOptions = useMemo(() => {
    const types = [...new Set(projects.map(p => p.type))];
    const technologies = [...new Set(projects.flatMap(p => p.technologies))];
    const difficulties = [...new Set(projects.map(p => p.difficulty))];
    const statuses = [...new Set(projects.map(p => p.status))];

    return {
      types: types?.sort(),
      technologies: technologies?.sort(),
      difficulties: difficulties?.sort(),
      statuses: statuses?.sort()
    };
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      // Type filter
      const matchesType = activeFilters?.type?.length === 0 || 
        activeFilters?.type?.includes(project?.type);

      // Technology filter
      const matchesTechnology = activeFilters?.technology?.length === 0 || 
        activeFilters?.technology?.some(tech => project?.technologies?.includes(tech));

      // Difficulty filter
      const matchesDifficulty = activeFilters?.difficulty?.length === 0 || 
        activeFilters?.difficulty?.includes(project?.difficulty);

      // Status filter
      const matchesStatus = activeFilters?.status?.length === 0 || 
        activeFilters?.status?.includes(project?.status);

      return matchesSearch && matchesType && matchesTechnology && matchesDifficulty && matchesStatus;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b?.id - a?.id; // Assuming higher ID means more recent
        case 'popular':
          const aPopularity = (a?.awards?.length || 0) + parseInt(a?.metrics?.userImpact?.replace(/[^\d]/g, '') || '0');
          const bPopularity = (b?.awards?.length || 0) + parseInt(b?.metrics?.userImpact?.replace(/[^\d]/g, '') || '0');
          return bPopularity - aPopularity;
        case 'complexity':
          const complexityOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return complexityOrder?.[b?.difficulty] - complexityOrder?.[a?.difficulty];
        case 'alphabetical':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, activeFilters, sortBy]);

  const featuredProjects = projects?.filter(p => p?.featured);

  useEffect(() => {
    // Keep index in range when featured list changes
    if (!featuredProjects || featuredProjects.length === 0) {
      setFeaturedIndex(0);
      return;
    }
    setFeaturedIndex((prev) => {
      if (prev < 0) return 0;
      if (prev >= featuredProjects.length) return featuredProjects.length - 1;
      return prev;
    });
  }, [featuredProjects?.length]);

  const nextFeatured = () => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    setFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    setFeaturedIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Auto-advance carousel when not hovered
  useEffect(() => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    if (isFeaturedHovered) return; // pause on hover

    const id = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // 5s interval

    return () => clearInterval(id);
  }, [featuredProjects?.length, isFeaturedHovered]);

  const handleFilterChange = (category, filters) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: filters
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      type: [],
      technology: [],
      difficulty: [],
      status: []
    });
    setSearchQuery('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Technical Portfolio - Project Showcase | Bala Adhish</title>
        <meta name="description" content="Explore Bala Adhish's comprehensive technical portfolio featuring AI/ML projects, full-stack applications, and award-winning solutions with detailed case studies and code examples." />
        <meta name="keywords" content="technical portfolio, AI projects, machine learning, full-stack development, React, Python, project showcase" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-hero-gradient text-white py-16">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="FolderOpen" size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Technical Portfolio</h1>
                  <p className="text-xl text-white/90">Project Showcase & Case Studies</p>
                </div>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Explore my comprehensive collection of technical projects, from AI-powered solutions to full-stack applications. 
                Each project demonstrates problem-solving approach, technical implementation, and measurable impact through detailed case studies.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Code" size={20} />
                  <span>{projects?.length} Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Award" size={20} />
                  <span>{projects?.reduce((sum, p) => sum + (p?.awards ? p?.awards?.length : 0), 0)} Awards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-width px-4 py-12">
          {/* Project Statistics */}
          <ProjectStats projects={projects} />

          {/* Featured Project Carousel */}
          {featuredProjects && featuredProjects?.length > 0 && (
            <section
              className="relative"
              onMouseEnter={() => setIsFeaturedHovered(true)}
              onMouseLeave={() => setIsFeaturedHovered(false)}
            >
              <FeaturedProject
                project={featuredProjects[featuredIndex]}
                onViewDetails={handleViewDetails}
              />

              {featuredProjects.length > 1 && (
                <>
                  <button
                    aria-label="Previous featured project"
                    onClick={prevFeatured}
                    className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border hover:bg-surface-hover rounded-full items-center justify-center shadow transition"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    aria-label="Next featured project"
                    onClick={nextFeatured}
                    className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border hover:bg-surface-hover rounded-full items-center justify-center shadow transition"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    {featuredProjects.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === featuredIndex ? 'bg-primary' : 'bg-border'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* Project Filters */}
          <ProjectFilter
            filters={filterOptions}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Projects Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">
                All Projects ({filteredAndSortedProjects?.length})
              </h2>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Filter" size={16} />
                <span className="text-sm">
                  {Object.values(activeFilters)?.flat()?.length > 0 ? 'Filtered' : 'All Projects'}
                </span>
              </div>
            </div>

            {filteredAndSortedProjects?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search criteria or clearing the filters to see more projects.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>

          {/* Call to Action */}
          <section className="mt-16 bg-surface rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and collaborate with fellow developers. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/professional-connect-contact-hub')}
                className="btn-primary"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Get In Touch
              </button>
              <button
                onClick={() => window.open('https://github.com/AdhishMagic', '_blank')}
                className="btn-secondary"
              >
                <Icon name="Github" size={16} className="mr-2" />
                View GitHub Profile
              </button>
            </div>
          </section>
        </div>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TechnicalPortfolioProjectShowcase;