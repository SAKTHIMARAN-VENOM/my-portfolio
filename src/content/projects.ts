export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  cover: string;
  images: string[];
  tech: string[];
  links?: { live?: string; repo?: string };
  problem?: string;
  solution?: string;
  highlights?: string[];
  learned?: string[];
};

export const projects: Project[] = [
  {
    slug: "smart-irrigation-aiot",
    title: "Smart Irrigation System (AIoT)",
    year: "2025",
    cover: "/images/projects/smart-irrigation/cover.png",
    images: [
      "/images/projects/smart-irrigation/hardware.jpg",
      "/images/projects/smart-irrigation/cloud-dashboard.png",
      "/images/projects/smart-irrigation/architecture.png"
    ],
    description:
      "An ESP32-based irrigation controller that monitors soil moisture and environmental data, streams readings to the cloud, and automatically controls a water pump. A Python backend analyses trends and can apply simple ML (threshold + rolling average) to decide watering windows. Built to demonstrate end-to-end AIoT: device → cloud → analytics → action.",
    tech: [
      "ESP32",
      "Arduino (C/C++)",
      "DHT11 / Capacitive Moisture Sensor",
      "Relay Module",
      "Wi‑Fi (HTTP/MQTT)",
      "ThingSpeak / Firebase",
      "Python",
      "Pandas",
      "Matplotlib",
      "FastAPI",
      "Streamlit"
    ],
    links: {
      live: "#",
      repo: "https://github.com/SAKTHIMARAN-VENOM/smart-irrigation"
    },
    problem:
      "Manual watering wastes water and time. Basic timers don’t adapt to real soil conditions or weather trends.",
    solution:
      "Continuously sample soil moisture and temperature, push to cloud, and run a lightweight analytics service to trigger watering only when necessary. Adds safety cutoffs and schedules to avoid overwatering.",
    highlights: [
      "Real-time telemetry: soil moisture, temperature, humidity (5–60s interval)",
      "Cloud logging and simple alerting (ThingSpeak/Firebase)",
      "Python FastAPI endpoint to send control commands back to ESP32",
      "Auto + manual override modes (mobile/web)",
      "Modular code and wiring to swap sensors easily"
    ],
    learned: [
      "End-to-end IoT data pipeline design (device → cloud → analytics → actuation)",
      "Building resilient Wi‑Fi code on ESP32 (reconnect, backoff)",
      "API design for device control (idempotent commands, timestamps)",
      "Basic ML-on-data approach with rolling means and hysteresis to reduce pump flapping"
    ]
  }
];
