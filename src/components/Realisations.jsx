import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Rénovation salle de bain",
    location: "Paris 16ème",
    category: "Rénovation",
  },
  {
    title: "Installation cuisine",
    location: "Neuilly-sur-Seine",
    category: "Installation",
  },
  {
    title: "Système de chauffage",
    location: "Boulogne-Billancourt",
    category: "Chauffage",
  },
];

export default function Realisations({ images }) {
  return (
    <section id="realisations" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Nos réalisations</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Des projets qui parlent d'eux-mêmes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={images[index]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/20 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-white/70 mt-1">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}