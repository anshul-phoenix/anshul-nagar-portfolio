import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  Wand2,
  TestTube2,
} from 'lucide-react';
import Section from './Section.jsx';
import { skills } from '../data/profile.js';

const meta = {
  Frontend: { Icon: Code2, gradient: 'from-violet-500/30 to-fuchsia-500/20' },
  'Backend & APIs': { Icon: Server, gradient: 'from-cyan-500/30 to-blue-500/20' },
  Databases: { Icon: Database, gradient: 'from-emerald-500/30 to-teal-500/20' },
  'Cloud & DevOps': { Icon: Cloud, gradient: 'from-sky-500/30 to-indigo-500/20' },
  'AI / GenAI Engineering': { Icon: Brain, gradient: 'from-fuchsia-500/30 to-rose-500/20' },
  'AI Dev Tools': { Icon: Wand2, gradient: 'from-amber-500/30 to-orange-500/20' },
  'Testing & Performance': { Icon: TestTube2, gradient: 'from-lime-500/30 to-emerald-500/20' },
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow={<>● Skills</>}
      title={
        <>
          A stack chosen for <span className="gradient-text">the long run.</span>
        </>
      }
      intro="Tools I reach for daily — from rendering pixels to wiring vector databases. I optimize for clarity, speed, and the half-life of the codebase."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {skills.map((s, i) => {
          const { Icon, gradient } = meta[s.category] || { Icon: Code2, gradient: 'from-accent/20 to-accent-electric/20' };
          return (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="card card-hover p-6 group relative overflow-hidden"
            >
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />
              <div className="flex items-center gap-3 relative">
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${gradient} border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{s.category}</h3>
                  <div className="text-xs font-mono text-zinc-500 mt-0.5">
                    {s.items.length} tools · daily use
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 relative">
                {s.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
