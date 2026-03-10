import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, ArrowRight } from "lucide-react";

const ContactFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section ref={ref} id="contact" className="section-padding bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8 }}
            className="h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-display text-xs tracking-[0.4em] text-primary mb-4"
          >
            ENGAGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            REQUEST SECURE DETAIL
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-12"
          >
            All inquiries are encrypted and handled with the highest level of discretion.
            Response within 2 hours.
          </motion.p>
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4 text-left"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  required
                  className="w-full p-4 bg-background border border-border font-display text-xs tracking-[0.15em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="SECURE EMAIL"
                  required
                  className="w-full p-4 bg-background border border-border font-display text-xs tracking-[0.15em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <select className="w-full p-4 bg-background border border-border font-display text-xs tracking-[0.15em] text-muted-foreground focus:border-primary focus:outline-none transition-colors">
                <option>SERVICE REQUIRED</option>
                <option>EXECUTIVE PROTECTION</option>
                <option>SECURE TRANSPORT</option>
                <option>THREAT ASSESSMENT</option>
                <option>EVENT SECURITY</option>
                <option>RESIDENTIAL SECURITY</option>
              </select>
              <textarea
                rows={4}
                placeholder="BRIEF DETAILS (OPTIONAL)"
                className="w-full p-4 bg-background border border-border font-display text-xs tracking-[0.15em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full p-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-3"
              >
                SUBMIT SECURE REQUEST
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 border border-primary/30"
            >
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-lg tracking-[0.15em] text-foreground mb-2">REQUEST RECEIVED</p>
              <p className="text-muted-foreground text-sm">Your inquiry is encrypted. Expect contact within 2 hours.</p>
            </motion.div>
          )}
        </div>
      </section>

      <footer className="section-padding !py-12 border-t border-border/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground">AEGIS</span>
          </div>
          <div className="flex gap-8">
            {["Protocols", "Operatives", "Fleet", "Intel", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-display text-xs tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-xs">
            © 2026 AEGIS SECURITY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
