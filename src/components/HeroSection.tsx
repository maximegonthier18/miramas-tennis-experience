import { motion } from "framer-motion";
import heroImg from "@/assets/hero-tennis.jpg";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tennis Club de Miramas"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-gradient opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={logo} alt="Logo TC Miramas" className="h-32 w-32 mx-auto rounded-full shadow-2xl border-4 border-accent/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none mb-4"
        >
          TENNIS CLUB
          <span className="block text-gradient">DE MIRAMAS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Passion, performance et convivialité au cœur de la Provence.
          Rejoignez le club de tennis de référence près de Marseille.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block accent-gradient text-accent-foreground font-body font-bold px-8 py-4 rounded-lg text-lg tracking-wide hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            NOUS CONTACTER
          </a>
          <a
            href="#club"
            className="inline-block border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-4 rounded-lg text-lg tracking-wide hover:bg-primary-foreground/10 transition-all duration-200"
          >
            DÉCOUVRIR LE CLUB
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
