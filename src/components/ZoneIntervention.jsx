import { MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ZONES = [
  { ville: "Paris", arrondissements: "Tous arrondissements" },
  { ville: "Boulogne-Billancourt", arrondissements: "92100" },
  { ville: "Neuilly-sur-Seine", arrondissements: "92200" },
  { ville: "Levallois-Perret", arrondissements: "92300" },
  { ville: "Issy-les-Moulineaux", arrondissements: "92130" },
  { ville: "Vanves", arrondissements: "92170" },
  { ville: "Montrouge", arrondissements: "92120" },
  { ville: "Saint-Cloud", arrondissements: "92210" },
  { ville: "Suresnes", arrondissements: "92150" },
  { ville: "Puteaux", arrondissements: "92800" },
  { ville: "Courbevoie", arrondissements: "92400" },
  { ville: "Nanterre", arrondissements: "92000" },
];

export default function ZoneIntervention() {
  return (
    <section id="zone" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Zone d'intervention</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Paris & Hauts-de-Seine
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Nous intervenons rapidement sur Paris et l'ensemble du département des Hauts-de-Seine (92).
              Notre équipe locale connaît parfaitement votre secteur.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {ZONES.map((zone) => (
                <div key={zone.ville} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{zone.ville}</span>
                    <span className="text-xs text-muted-foreground ml-1">({zone.arrondissements})</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                title="Zone d'intervention Dupont Plomberie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824862928!2d2.209556!3d48.858844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Intervention rapide</p>
                  <p className="text-xs text-muted-foreground">30 min max sur zone</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}