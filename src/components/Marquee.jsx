const TECH = [
  'React', 'Vue 3', 'Angular', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Tailwind CSS',
  'Redux Toolkit', 'RTK Query', 'Vitest', 'Jest', 'LangChain.js', 'Ollama',
  'OpenAI API', 'Anthropic API', 'Claude Code', 'Cursor', 'MCP Servers', 'GraphQL',
];

export default function Marquee() {
  return (
    <section aria-label="Tech stack" className="relative py-10 border-y border-white/[.06] bg-white/[.015]">
      <div className="container-page mb-4">
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 text-center">
          The stack I ship with
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {TECH.map((t) => (
            <Item key={`a-${t}`} label={t} />
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {TECH.map((t) => (
            <Item key={`b-${t}`} label={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ label }) {
  return (
    <span className="inline-flex items-center gap-2 font-display font-semibold text-xl md:text-2xl text-zinc-500 hover:text-white transition-colors whitespace-nowrap">
      {label}
      <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
    </span>
  );
}
