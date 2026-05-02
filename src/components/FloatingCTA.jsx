import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.a
      href="tel:0145678900"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3.5 rounded-full shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 hover:scale-105 transition-all lg:hidden"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm">Appeler</span>
    </motion.a>
  );
}