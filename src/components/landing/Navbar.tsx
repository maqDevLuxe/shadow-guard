import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const navLinks = ["Protocols", "Operatives", "Fleet", "Intel", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="flex items-center justify-between section-padding !py-4">
        <a href="#" className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-display text-lg tracking-[0.3em] text-foreground">
            AEGIS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-primary text-primary font-display text-xs tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            REQUEST DETAIL
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border/30"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm tracking-[0.2em] text-muted-foreground hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
