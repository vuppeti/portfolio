import { ArrowTopRightOnSquareIcon, CodeBracketIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { projects } from '../../data/portfolioData';

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work at the intersection of AI and product engineering"
      description="The portfolio is structured so additional AI-focused projects can be added by extending the shared data layer."
    >
      {projects.map((project) => (
        <Card key={project.title} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{project.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-100">{project.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-400">{project.description}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Problem</h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Solution</h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 space-y-6"
            >
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Target Audience</h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
                  {project.targetAudience.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Project Reflection</h4>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.reflection}</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-center gap-2 text-slate-100">
                <CodeBracketIcon className="h-5 w-5 text-sky-400" />
                <h4 className="font-semibold">Design Thinking Process</h4>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
                {project.process.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-center gap-2 text-slate-100">
                <PhotoIcon className="h-5 w-5 text-sky-400" />
                <h4 className="font-semibold">Screenshots</h4>
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-slate-700 bg-slate-900/70 p-8 text-center text-slate-500">
                Screenshots placeholder for future product visuals.
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400">
                GitHub
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400">
                Live Demo
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Card>
      ))}
    </Section>
  );
}
