import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bodyguard.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Executive bodyguard standing beside armored vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 section-padding !pb-24 w-full max-w-4xl">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-primary mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-xs tracking-[0.4em] text-primary mb-4"
        >
          PRIVATE SECURITY & EXECUTIVE PROTECTION
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-foreground mb-6"
          >
            YOUR SHADOW.
            <br />
            <span className="text-primary">YOUR SHIELD.</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground font-body text-lg max-w-md mb-10"
        >
          Elite close protection for the world's most discerning principals.
          Invisible until needed. Absolute when deployed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] hover:bg-gold-light transition-colors duration-300"
          >
            REQUEST SECURE DETAIL
          </a>
          <a
            href="#protocols"
            className="px-8 py-4 border border-border text-foreground font-display text-sm tracking-[0.2em] hover:border-primary hover:text-primary transition-colors duration-300"
          >
            OUR PROTOCOLS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
