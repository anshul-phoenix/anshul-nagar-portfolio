import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, Star } from 'lucide-react';
import Section from './Section.jsx';
import { projects } from '../data/profile.js';

const filters = ['All', 'AI / GenAI', 'Enterprise', 'Backend'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const featured = projects[0];
  const rest = projects.slice(1);
  const visible =
    filter === 'All' ? rest : projects.filter((p) => p.tag === filter && p.title !== featured.title);
  const showFeatured = filter === 'All' || featured.tag === filter;

  return (
    <Section
      id="projects"
      eyebrow={<>● Selected Work</>}
      title={
        <>
          Products I've shipped,{' '}
          <span className="gradient-text">problems I've solved.</span>
        </>
      }
      intro="A mix of AI-native tools and enterprise-grade frontends. Numbers below are real, measured, and from production."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              filter === f
                ? 'border-accent bg-accent/15 text-white shadow-glow'
                : 'border-white/10 bg-white/[.02] text-zinc-400 hover:text-white hover:border-white/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured */}
      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.article
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="card card-hover p-6 md:p-10 relative overflow-hidden mb-6 group"
          >
            <div className={`absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br ${featured.accent} blur-3xl opacity-60 pointer-events-none`} />
            <div className={`absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr ${featured.accent} blur-3xl opacity-30 pointer-events-none`} />
            <div className="absolute inset-0 dot-bg pointer-events-none opacity-50" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent-glow">
                  <Star size={12} className="fill-accent-glow" /> Featured
                </div>
                <div className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-accent-glow">
                  {featured.subtitle}
                </div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-4 text-zinc-300 leading-relaxed text-[15px] md:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex items-start gap-2 text-sm text-zinc-200">
                  <Zap size={16} className="mt-0.5 shrink-0 text-accent-lime" />
                  <span>
                    <strong className="text-white font-semibold">Impact:</strong> {featured.impact}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="card p-1.5 bg-ink-900/50 backdrop-blur">
                  <div className="rounded-xl bg-ink-950/80 overflow-hidden">
                    <div className="flex items-center gap-1.5 border-b border-white/[.05] px-4 py-2.5">
                      <span className="terminal-dot bg-rose-400/80" />
                      <span className="terminal-dot bg-amber-400/80" />
                      <span className="terminal-dot bg-emerald-400/80" />
                      <span className="ml-3 text-[11px] font-mono text-zinc-500">
                        rag-pipeline.ts
                      </span>
                    </div>
                    <div className="p-4 font-mono text-[11.5px] leading-relaxed">
                      <p><span className="text-violet-400">const</span> <span className="text-cyan-300">chain</span> = <span className="text-violet-400">await</span> <span className="text-zinc-300">createRagChain</span>({'{'}</p>
                      <p className="ml-4 text-zinc-300">retriever<span className="text-zinc-500">: </span><span className="text-zinc-200">vectorStore</span>.<span className="text-cyan-300">asRetriever</span>(<span className="text-amber-300">8</span>),</p>
                      <p className="ml-4 text-zinc-300">llm<span className="text-zinc-500">:        </span><span className="text-violet-400">new</span> <span className="text-zinc-200">Ollama</span>({'{'} <span className="text-cyan-300">model</span><span className="text-zinc-500">: </span><span className="text-emerald-300">'llama3'</span> {'}'}),</p>
                      <p className="ml-4 text-zinc-300">prompt<span className="text-zinc-500">:    </span><span className="text-zinc-200">groundedAnswerPrompt</span>,</p>
                      <p>{'});'}</p>
                      <p className="mt-3"><span className="text-zinc-500">// 1. retrieve → 2. rerank → 3. synthesize</span></p>
                      <p><span className="text-violet-400">const</span> <span className="text-cyan-300">answer</span> = <span className="text-violet-400">await</span> <span className="text-zinc-200">chain</span>.<span className="text-cyan-300">invoke</span>(<span className="text-zinc-300">query</span>);</p>
                      <p className="mt-2 text-accent-lime">→ <span className="text-zinc-300">grounded · cited · hallucination-free</span></p>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="absolute top-3 right-3 text-zinc-500 group-hover:text-accent group-hover:rotate-12 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="card card-hover p-6 md:p-7 relative overflow-hidden group"
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`}
              />

              <div className="flex items-start justify-between gap-4 relative">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-accent-glow">
                    {p.subtitle}
                  </div>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-bold">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 group-hover:text-accent group-hover:rotate-12 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <p className="mt-4 text-zinc-300 leading-relaxed text-[15px] relative">
                {p.description}
              </p>

              <div className="mt-4 flex items-start gap-2 text-sm text-zinc-300 relative">
                <Zap size={16} className="mt-0.5 shrink-0 text-accent-lime" />
                <span>
                  <strong className="text-white font-medium">Impact:</strong> {p.impact}
                </span>
              </div>

              <ul className="mt-5 space-y-2 relative">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5 relative">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-10 text-sm text-zinc-500 inline-flex items-center gap-2 font-mono">
        <Sparkles size={14} className="text-accent-glow" />
        More work and detailed case studies available on request.
      </div>
    </Section>
  );
}
