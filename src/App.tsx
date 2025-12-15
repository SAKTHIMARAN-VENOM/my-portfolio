import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { FutureLearning } from "@/components/FutureLearning";
import { Footer } from "@/components/Footer";

type Stage = "disclaimer" | "scanning" | "creating" | "line" | "portfolio";

const App = () => {
  const [stage, setStage] = useState<Stage>("disclaimer");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Stage 1: Disclaimer (5 seconds)
    timers.push(setTimeout(() => setStage("scanning"), 5000));

    // Stage 2: Scanning (6 seconds)
    timers.push(setTimeout(() => setStage("creating"), 11000));

    // Stage 3: Creating profile (5 seconds)
    timers.push(setTimeout(() => setStage("line"), 16000));

    // Stage 4: Line animation (4 seconds)
    timers.push(setTimeout(() => setStage("portfolio"), 20000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {stage === "disclaimer" && (
          <motion.div
            key="disclaimer"
            className="flex items-center justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center px-4"
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                times: [0, 0.15, 0.85, 1],
              }}
            >
              <p className="text-2xl md:text-3xl text-primary font-medium">
                Disclaimer: Please press F11 for better experience
              </p>
            </motion.div>
          </motion.div>
        )}

        {stage === "scanning" && (
          <motion.div
            key="scanning"
            className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scanning lines */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-green-500/40 to-green-500/20"
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: 1,
              }}
              style={{
                height: "30%",
                boxShadow: "0 0 50px rgba(34, 197, 94, 0.5)",
              }}
            />

            {/* Barcode scanner lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-0.5 bg-green-500"
                initial={{ y: "-100%" }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  delay: i * 0.15,
                  repeat: 1,
                }}
                style={{
                  boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)",
                }}
              />
            ))}

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                {[...Array(144)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-green-500/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      delay: (i % 12) * 0.08,
                      repeat: 1,
                    }}
                  />
                ))}
              </div>
            </div>

            <motion.div
              className="text-center px-4 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl md:text-3xl text-green-500 font-medium mb-4">
                Scanning your device
              </p>
              <motion.div
                className="flex gap-2 justify-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-green-500 text-xl">●</span>
                <span className="text-green-500 text-xl">●</span>
                <span className="text-green-500 text-xl">●</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {stage === "creating" && (
          <motion.div
            key="creating"
            className="flex items-center justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="text-center px-4">
              <motion.p
                className="text-2xl md:text-3xl text-primary font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Creating a customized profile
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Wait for a moment...
              </motion.p>

              {/* Loading bar */}
              <div className="mt-8 w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                  }}
                />
              </div>

              {/* Percentage counter */}
              <motion.div
                className="mt-4 text-primary text-lg font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  Processing...
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {stage === "line" && (
          <motion.div
            key="line-animation"
            className="flex items-center justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-4xl h-1">
              {/* Animated line moving from left to right */}
              <motion.div
                className="absolute left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                style={{
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.4)",
                }}
              />
              
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute left-0 h-1 bg-primary blur-sm"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {stage === "portfolio" && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <Projects />
            <Skills />
            <FutureLearning />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
