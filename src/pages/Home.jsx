import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Urgences from "../components/Urgences";
import ZoneIntervention from "../components/ZoneIntervention";
import Realisations from "../components/Realisations";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const HERO_IMAGE = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80";
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80",
];

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <Stats />
      <Services />
      <Urgences />
      <ZoneIntervention />
      <Realisations images={PROJECT_IMAGES} />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}