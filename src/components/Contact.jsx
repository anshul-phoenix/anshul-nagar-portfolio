import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import Section from './Section.jsx';
import { profile } from '../data/profile.js';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/anshul-nagar-084315197', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'github.com/anshul456ch', href: profile.github },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow={<>● Contact</>}
      title={
        <>
          Let's build something{' '}
          <span className="gradient-text">worth shipping.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent-electric/20 blur-3xl pointer-events-none" />

          <div className="relative">
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
              Hiring for a senior full-stack or AI-focused role?{' '}
              <span className="gradient-text">I'd love to talk.</span>
            </h3>
            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              I'm open to senior IC and tech-lead roles where I can ship full-stack features, raise the
              quality bar, and bring AI-driven engineering practices to the team. Remote, hybrid, or
              relocate — happy to discuss.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary group">
                Email me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={14} className="text-accent-glow" />
              Based in {profile.location} · open to remote & relocation
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="card card-hover p-5 flex items-center gap-4 group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-electric/20 border border-white/10 text-accent-glow group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {c.label}
                  </div>
                  <div className="text-sm text-zinc-200 truncate">{c.value}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
