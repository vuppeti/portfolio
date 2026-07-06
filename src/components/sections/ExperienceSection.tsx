import { useState } from 'react';
import { ChevronDownIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { experienceItems } from '../../data/portfolioData';

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A journey across product, platform, and frontend engineering"
      description="Each chapter has strengthened my ability to deliver scalable systems and polished product experiences."
    >
      <div className="space-y-4">
        {experienceItems.map((item, index) => {
          const isOpen = expandedIndex === index;

          return (
            <Card key={item.company} className="overflow-hidden">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                onClick={() => setExpandedIndex(isOpen ? null : index)}
              >
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-sky-500/15 p-3 text-sky-400">
                    <BriefcaseIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-100">{item.company}</p>
                    <p className="mt-1 text-sky-400">{item.role}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.period}</p>
                  </div>
                </div>
                <ChevronDownIcon className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-6 space-y-3 border-t border-slate-800 pt-4 text-sm leading-7 text-slate-400">
                      {item.summary.map((entry) => (
                        <li key={entry} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
