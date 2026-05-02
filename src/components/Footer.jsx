import { Droplets, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Droplets className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold">Dupont</span>
                <span className="font-heading text-lg font-bold text-accent ml-1">Plomberie</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Artisan plombier certifié RGE. Dépannage, installation et rénovation sur Paris et Hauts-de-Seine.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Dépannage urgent", "Plomberie sanitaire", "Chauffage", "Salle de bain", "Débouchage", "Rénovation"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/60 hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Zone d'intervention</h4>
            <ul className="space-y-2.5">
              {["Paris (tous arrondissements)", "Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Issy-les-Moulineaux", "Et plus encore..."].map((z) => (
                <li key={z}>
                  <a href="#zone" className="text-sm text-white/60 hover:text-accent transition-colors">{z}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0145678900" className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" /> 01 45 67 89 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@dupont-plomberie.fr" className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> contact@dupont-plomberie.fr
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 12 rue de la Paix, 75002 Paris
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dupont Plomberie. Tous droits réservés. SIRET: 123 456 789 00012
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="text-xs text-white/40 hover:text-accent transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}