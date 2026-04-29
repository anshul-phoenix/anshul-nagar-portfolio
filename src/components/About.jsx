import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, Code2, Sparkles } from 'lucide-react';
import Section from './Section.jsx';
import { aboutCopy } from '../data/profile.js';

const stats = [
  { icon: Code2, value: '4+', label: 'Years engineering production apps' },
  { icon: Sparkles, value: '15+', label: 'Production features owned end-to-end' },
  { icon: Coffee, value: '∞', label: 'Cups of coffee turned into commits' },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow={<>● About</>}
      title={
        <>
          Engineer who ships across the whole stack —{' '}
          <span className="gradient-text">and builds with AI.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-5">
          {aboutCopy.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-zinc-300 leading-relaxed text-[17px]"
            >
              {p}
            </motion.p>
          ))}

          <div className="grid sm:grid-cols-3 gap-3 pt-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="card card-hover p-4"
                >
                  <Icon size={18} className="text-accent-glow" />
                  <div className="mt-3 font-display text-2xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 leading-snug">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 card p-6 lg:sticky lg:top-24 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-accent-glow">
              What I bring
            </div>
            <ul className="mt-4 space-y-3">
              {aboutCopy.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex gap-3 text-sm text-zinc-300"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-lime" />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/[.06]">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 mb-3">
                Currently
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="text-accent-glow">→</span> Shipping full-stack features at Infosys
                </li>
                <li>
                  <span className="text-accent-glow">→</span> Building RAG tooling on LangChain.js
                </li>
                <li>
                  <span className="text-accent-glow">→</span> Exploring agentic workflows with MCP
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
