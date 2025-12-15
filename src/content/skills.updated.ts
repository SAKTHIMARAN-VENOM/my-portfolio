export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { category: "Programming", items: ["Python", "C++", "C"] },
  { category: "IoT & Embedded", items: [
      "Internet of Things (IoT)",
      "Arduino",
      "ESP32",
      "Sensors & Actuators",
      "Microcontrollers",
      "MQTT",
      "HTTP / REST",
      "Wireless (Wi‑Fi / Bluetooth)"
    ]
  },
  { category: "Data & ML", items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow Lite",
      "Predictive Modeling",
      "Data Visualization"
    ]
  },
  { category: "Cloud & Web", items: [
      "ThingSpeak",
      "Firebase (Realtime DB)",
      "AWS IoT Core (basics)",
      "FastAPI",
      "Streamlit"
    ]
  },
  { category: "Tools", items: [
      "Arduino IDE",
      "VS Code",
      "Jupyter Notebook",
      "Git",
      "GitHub",
      "Wokwi / Tinkercad"
    ]
  },
  { category: "Soft Skills", items: [
      "Problem Solving",
      "Teamwork",
      "Communication"
    ]
  },
];
