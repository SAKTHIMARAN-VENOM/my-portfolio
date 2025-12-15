import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningItems } from "@/content/learning";

const statusConfig = {
  exploring: {
    label: "Exploring",
    color: "text-secondary",
    icon: "🔍",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-primary",
    icon: "⚡",
  },
  queued: {
    label: "Queued",
    color: "text-muted-foreground",
    icon: "📋",
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function FutureLearning() {
  return (
    <section id="learning" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Future Learning</SectionHeading>

        <div className="space-y-4">
          {learningItems.map((item, idx) => {
            const config = statusConfig[item.status];
            return (
              <motion.div
                key={item.title}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-neon"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{config.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className={`text-sm font-medium ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    {item.note && (
                      <p className="text-muted-foreground">{item.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
