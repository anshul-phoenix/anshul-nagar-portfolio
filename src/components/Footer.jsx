import { Github, Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';
import { profile } from '../data/profile.js';

const sitemap = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/[.06]">
      <div className="absolute inset-x-0 top-0 glow-divider" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container-page py-14 relative">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-electric text-white font-display font-bold shadow-glow">
                {profile.initials}
              </span>
              <span>
                <span className="block font-display font-semibold tracking-tight">
                  {profile.name}
                </span>
                <span className="block text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Full-stack Engineer · AI Builder
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm text-muted leading-relaxed">
              Engineering production-grade web apps end-to-end. Open to senior full-stack and
              AI engineering roles — remote, hybrid, or relocation.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={14} className="text-accent-glow" /> {profile.location}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 mb-4">
              Sitemap
            </div>
            <ul className="space-y-2.5">
              {sitemap.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-sm text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-zinc-700 group-hover:w-5 group-hover:bg-accent transition-all" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 mb-4">
              Reach out
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                >
                  <Mail size={14} className="text-accent-glow" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                >
                  <Github size={14} className="text-accent-glow" />
                  github.com/anshul456ch
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                >
                  <Linkedin size={14} className="text-accent-glow" />
                  linkedin.com/in/anshul-nagar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <span>
            © {new Date().getFullYear()} {profile.name} · Built with React, Tailwind & Framer Motion.
          </span>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <ArrowUp size={14} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
