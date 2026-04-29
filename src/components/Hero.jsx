import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  Zap,
} from 'lucide-react';
import { profile } from '../data/profile.js';

const ROLES = [
  'Full-Stack Engineer',
  'React · Vue · Angular',
  'AI-Driven Developer',
  'RAG & LLM Builder',
  'Performance Engineer',
];

function useRotatingText(words, ms = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), ms);
    return () => clearInterval(t);
  }, [words, ms]);
  return words[i];
}

export default function Hero() {
  const role = useRotatingText(ROLES);

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[130px] pointer-events-none" />
      <div className="absolute top-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent-electric/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-accent-lime/10 blur-[120px] pointer-events-none" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-1.5 text-xs font-mono text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-lime" />
              </span>
              Open to senior full-stack & AI engineering roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-7 h-display"
            >
              <span className="block text-zinc-400 text-base sm:text-lg font-sans font-normal mb-3 tracking-normal">
                Hi, I'm Anshul —
              </span>
              <span className="gradient-text">Full-Stack Engineer</span>
              <span className="block mt-1 text-zinc-200">building for the AI era.</span>
            </motion.h1>

            <motion.div
              key={role}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm md:text-base text-accent-glow"
            >
              <Terminal size={16} />
              <span className="typing-caret">{role}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-7 max-w-2xl text-lg text-muted leading-relaxed"
            >
              4+ years shipping production-grade web apps end-to-end —{' '}
              <span className="text-zinc-200 font-medium">React, Vue, Angular</span> on the
              frontend; <span className="text-zinc-200 font-medium">Node.js, PostgreSQL, MongoDB</span>{' '}
              on the backend; <span className="text-zinc-200 font-medium">AWS</span> in the cloud.
              I cut a 17-second SPA load time down to{' '}
              <span className="text-accent-glow font-semibold">under 250ms</span>, and I build with{' '}
              <span className="text-zinc-200 font-medium">Claude Code, Cursor, Devin</span>, and{' '}
              <span className="text-zinc-200 font-medium">LangChain</span> daily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary group">
                See my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="btn-ghost">
                Let's talk
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-7 flex items-center gap-5 text-sm text-zinc-400"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {profile.location}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* RIGHT — terminal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/30 via-accent-electric/20 to-accent-lime/20 blur-2xl" />
            <div className="relative card ring-accent-soft p-1.5 overflow-hidden">
              <div className="rounded-2xl bg-ink-900 overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-white/[.06] px-4 py-3">
                  <span className="terminal-dot bg-rose-400/80" />
                  <span className="terminal-dot bg-amber-400/80" />
                  <span className="terminal-dot bg-emerald-400/80" />
                  <span className="ml-3 text-xs font-mono text-zinc-500">
                    ~/anshul-nagar
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-zinc-600 hidden sm:inline">
                    bash
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <Line prompt label="whoami" />
                  <p className="text-zinc-200 ml-5">
                    Anshul Nagar · Full-Stack + AI Engineer
                  </p>
                  <p className="text-zinc-500 ml-5">
                    Pune, India · {new Date().getFullYear()}
                  </p>

                  <div className="my-3 h-px bg-white/[.05]" />

                  <Line prompt label="cat skills.json" />
                  <pre className="ml-5 text-[12.5px] text-zinc-300 whitespace-pre-wrap">
{`{
  "frontend": ["React", "Vue 3", "Angular", "TypeScript"],
  "backend":  ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  "cloud":    ["AWS", "Docker", "Kubernetes"],
  "ai":       ["LangChain.js", "Ollama", "RAG", "Claude Code"]
}`}
                  </pre>

                  <div className="my-3 h-px bg-white/[.05]" />

                  <Line prompt label="./impact --summary" />
                  <ul className="ml-5 space-y-1 text-zinc-300">
                    <li>
                      <span className="text-accent-lime">✓</span> 17s → 250ms SPA load{' '}
                      <span className="text-zinc-500">(98% faster)</span>
                    </li>
                    <li>
                      <span className="text-accent-lime">✓</span> 60% perf gain on enterprise SPAs
                    </li>
                    <li>
                      <span className="text-accent-lime">✓</span> 78%+ unit test coverage
                    </li>
                    <li>
                      <span className="text-accent-lime">✓</span> RAG pipelines in production
                    </li>
                  </ul>

                  <div className="my-3 h-px bg-white/[.05]" />

                  <Line prompt label="echo $STATUS" />
                  <p className="ml-5 text-accent-glow">
                    "Available — let's build something."
                    <span className="typing-caret" />
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-ink-800/80 backdrop-blur px-3 py-2 text-xs font-mono shadow-card">
              <Cpu size={14} className="text-accent-electric" />
              <span className="text-zinc-300">Claude Code · Cursor · MCP</span>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-ink-800/80 backdrop-blur px-3 py-2 text-xs font-mono shadow-card">
              <Zap size={14} className="text-accent-lime" />
              <span className="text-zinc-300">4+ yrs · Production grade</span>
            </div>
          </motion.div>
        </div>

        {/* metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {profile.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08, duration: 0.5 }}
              className="card card-hover p-5 group"
            >
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-zinc-300">{m.label}</div>
              <div className="text-xs text-zinc-500 mt-0.5 font-mono">{m.detail}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 inline-flex items-center gap-2 text-xs text-zinc-500 font-mono"
        >
          <Sparkles size={14} className="text-accent-glow" />
          Crafted with Claude Code · React · Tailwind · Framer Motion
        </motion.div>
      </div>
    </section>
  );
}

function Line({ label }) {
  return (
    <p className="text-zinc-500">
      <span className="text-accent-electric">➜</span>{' '}
      <span className="text-accent-lime">~</span>{' '}
      <span className="text-zinc-300">{label}</span>
    </p>
  );
}
