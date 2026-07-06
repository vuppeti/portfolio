import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin } from 'lucide-react';
import { siteMetadata } from '../../data/portfolioData';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.24),_transparent_35%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Available for ambitious teams</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-7xl">
            {siteMetadata.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-sky-400">{siteMetadata.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{siteMetadata.headline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">{siteMetadata.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={siteMetadata.resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400">
              View Projects
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition hover:border-sky-400 hover:text-sky-400" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition hover:border-sky-400 hover:text-sky-400" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${siteMetadata.email}`} className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition hover:border-sky-400 hover:text-sky-400" aria-label="Email">
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-8 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_100px_-30px_rgba(56,189,248,0.4)]">
            <div className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Core Focus</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">React • TypeScript • Cloud-native systems</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Current Impact</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Shipping AI-powered experiences with measurable business value</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Approach</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Design systems, performance, reliability, and developer velocity</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
