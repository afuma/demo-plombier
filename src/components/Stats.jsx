import { motion } from "framer-motion";

const STATS = [
  { number: "15+", label: "Années d'expérience" },
  { number: "3 500+", label: "Interventions réalisées" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "30 min", label: "Temps d'intervention moyen" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">{stat.number}</p>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}