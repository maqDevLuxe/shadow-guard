import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "THREAT INTEL", title: "Emerging Security Risks for UHNW Individuals in 2026", date: "MAR 2026" },
  { tag: "OPERATIONS", title: "The Evolution of Executive Protection: From Reactive to Predictive", date: "FEB 2026" },
  { tag: "TECHNOLOGY", title: "AI-Driven Threat Detection: A New Era in Close Protection", date: "JAN 2026" },
];

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="intel" className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        INTELLIGENCE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
      >
        SECURITY INTEL BLOG
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className="glass-card p-8 group hover:border-primary/50 transition-colors duration-500 flex flex-col"
          >
            <p className="font-display text-xs tracking-[0.2em] text-primary mb-3">{post.tag}</p>
            <h3 className="font-display text-lg text-foreground mb-4 leading-tight flex-1">
              {post.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-xs">{post.date}</p>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
