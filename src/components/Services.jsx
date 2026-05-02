import { Wrench, Droplets, Flame, ShowerHead, CircleDot, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: Wrench,
    title: "Dépannage urgent",
    description: "Fuites, canalisations bouchées, robinetterie défaillante. Intervention express sous 30 minutes.",
  },
  {
    icon: Droplets,
    title: "Plomberie sanitaire",
    description: "Installation et remplacement de lavabos, WC, douches, baignoires et raccordements.",
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation, entretien et dépannage de chaudières, radiateurs et planchers chauffants.",
  },
  {
    icon: ShowerHead,
    title: "Salle de bain",
    description: "Rénovation complète de salle de bain : conception, plomberie et finitions.",
  },
  {
    icon: CircleDot,
    title: "Débouchage",
    description: "Débouchage haute pression de canalisations, éviers, toilettes et colonnes d'immeuble.",
  },
  {
    icon: Hammer,
    title: "Rénovation",
    description: "Remise aux normes, remplacement de tuyauterie ancienne et mise en conformité.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Nos services</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Une expertise complète en plomberie
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            De la réparation d'urgence à la rénovation totale, nous intervenons sur tous vos projets de plomberie et chauffage.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative p-7 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2.5 text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}