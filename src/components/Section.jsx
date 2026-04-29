import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="h-section mt-3">{title}</h2>
          {intro && <p className="mt-4 text-muted text-lg leading-relaxed">{intro}</p>}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
