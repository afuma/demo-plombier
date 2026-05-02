import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Marie Laurent",
    location: "Paris 15ème",
    text: "Intervention rapide et efficace pour une fuite d'eau en pleine nuit. Le plombier était très professionnel et a résolu le problème en moins d'une heure. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Thomas Mercier",
    location: "Boulogne-Billancourt",
    text: "Rénovation complète de notre salle de bain. Travail soigné, respect des délais et du budget. L'équipe Dupont est vraiment à l'écoute. Résultat magnifique.",
    rating: 5,
  },
  {
    name: "Sophie Dubois",
    location: "Neuilly-sur-Seine",
    text: "Excellente prestation pour l'installation de notre nouvelle chaudière. Conseils pertinents, devis clair et transparent. Un artisan de confiance que je recommande sans hésiter.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Avis clients</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Ils nous font confiance
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">4.9/5 sur 127 avis Google</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-foreground leading-relaxed">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}