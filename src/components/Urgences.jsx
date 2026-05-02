import { Phone, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Clock, text: "Disponible 24h/24, 7j/7" },
  { icon: Zap, text: "Intervention en moins de 30 min" },
  { icon: Shield, text: "Devis gratuit et transparent" },
];

export default function Urgences() {
  return (
    <section id="urgences" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/20 border border-destructive/30 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-sm font-semibold text-red-300">Urgence plomberie</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Une urgence plomberie ?
              <span className="block text-accent mt-2">Nous intervenons immédiatement.</span>
            </h2>

            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Fuite d'eau, canalisation bouchée, panne de chaudière… Nos plombiers qualifiés sont disponibles
              24h/24 pour intervenir chez vous dans les plus brefs délais.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {FEATURES.map((f) => (
              <div key={f.text} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                <f.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-white">{f.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-accent/25 animate-pulse hover:animate-none"
            >
              <a href="tel:0145678900">
                <Phone className="w-6 h-6 mr-3" />
                Appel d'urgence : 01 45 67 89 00
              </a>
            </Button>
            <p className="mt-4 text-sm text-white/50">Appel gratuit · Devis immédiat · Sans engagement</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}