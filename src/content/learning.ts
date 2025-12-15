export type LearningItem = {
  title: string;
  note?: string;
  status: "exploring" | "in-progress" | "queued";
};

export const learningItems: LearningItem[] = [
  // Month 1–2: Foundations
  {
    title: "Arduino & ESP32 Basics",
    note: "Sensors, actuators, digital vs analog, serial monitor",
    status: "in-progress",
  },
  {
    title: "Python for Data",
    note: "NumPy, Pandas, Matplotlib for IoT data",
    status: "in-progress",
  },

  // Month 2: Connectivity
  {
    title: "IoT Communication",
    note: "Wi‑Fi, MQTT, HTTP; device -> cloud messaging",
    status: "in-progress",
  },

  // Month 3: ML Foundations
  {
    title: "Machine Learning Basics",
    note: "Regression, Classification, Model evaluation with scikit‑learn",
    status: "queued",
  },

  // Month 4: Cloud + APIs
  {
    title: "Cloud IoT Integration",
    note: "ThingSpeak / Firebase / AWS IoT Core, data pipelines",
    status: "queued",
  },
  {
    title: "APIs & Dashboards",
    note: "Flask / FastAPI + Streamlit dashboards",
    status: "queued",
  },

  // Month 5: Edge AI
  {
    title: "Edge AI / TinyML",
    note: "TensorFlow Lite, model conversion & deployment on ESP32",
    status: "queued",
  },

  // Ongoing
  {
    title: "Git & GitHub",
    note: "Version control and project documentation",
    status: "exploring",
  },
];
