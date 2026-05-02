import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const INFO = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "01 45 67 89 00",
    href: "tel:0145678900",
    sub: "Appel gratuit · 24h/24",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@dupont-plomberie.fr",
    href: "mailto:contact@dupont-plomberie.fr",
    sub: "Réponse sous 2h",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "12 rue de la Paix, 75002 Paris",
    href: "#",
    sub: "Siège & showroom",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Dim : 24h/24",
    href: "#",
    sub: "Urgences sans interruption",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Parlons de votre projet
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Que ce soit pour un devis, une urgence ou un simple renseignement,
              notre équipe est à votre disposition.
            </p>

            <div className="mt-10 space-y-6">
              {INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors">{info.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{info.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Demande de devis gratuit</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Type de prestation</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors">
                    <option value="">Sélectionnez une prestation</option>
                    <option>Dépannage urgent</option>
                    <option>Plomberie sanitaire</option>
                    <option>Chauffage</option>
                    <option>Rénovation salle de bain</option>
                    <option>Débouchage</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre besoin..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                >
                  Envoyer ma demande de devis
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Réponse garantie sous 2 heures · Devis 100% gratuit
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}