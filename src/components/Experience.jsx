import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import Section from './Section.jsx';
import { experience, certifications, education } from '../data/profile.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow={<>● Experience</>}
      title={
        <>
          Where I've shipped,{' '}
          <span className="gradient-text">who I've shipped with.</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-1.5 grid h-9 w-9 md:h-12 md:w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-electric text-white shadow-glow">
                <Briefcase size={16} />
              </div>

              <div className="card p-6 md:p-7 card-hover">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  <span className="text-accent-glow font-medium">@ {job.company}</span>
                </div>
                <div className="mt-1 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  {job.period} · {job.location}
                </div>
                <p className="mt-4 text-zinc-300 leading-relaxed">{job.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-electric/20 border border-white/10 text-accent-glow">
                <Award size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              {certifications.length} verified
            </span>
          </div>

          <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
            {certifications.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-xl border border-white/[.06] bg-white/[.02] p-3.5 hover:border-accent/40 hover:bg-white/[.04] transition-all"
                >
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-200 group-hover:text-white transition-colors leading-snug">
                      {c.name}
                    </div>
                    <div className="mt-1 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {c.issuer}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="mt-0.5 shrink-0 text-zinc-600 group-hover:text-accent group-hover:rotate-12 transition-all"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card card-hover p-6"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-electric/20 border border-white/10 text-accent-glow">
              <GraduationCap size={18} />
            </div>
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>
          <div className="mt-5">
            <div className="text-zinc-200 font-medium">{education.degree}</div>
            <div className="text-sm text-zinc-400 mt-1">{education.school}</div>
            <div className="text-xs font-mono text-zinc-500 mt-2 uppercase tracking-wider">
              {education.period}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
