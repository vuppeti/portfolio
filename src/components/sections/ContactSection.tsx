import { ArrowRightIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { siteMetadata } from '../../data/portfolioData';

const contactLinks = [
  { label: 'Email', href: `mailto:${siteMetadata.email}`, icon: EnvelopeIcon },
  { label: 'GitHub', href: siteMetadata.github, icon: Github },
  { label: 'LinkedIn', href: siteMetadata.linkedin, icon: Linkedin },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something meaningful together"
      description="I’m always interested in impactful product work, AI experiences, and high-performing engineering teams."
    >
      <Card className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-slate-400">Reach out for collaborations, freelance work, or full-time opportunities.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
        <a href={siteMetadata.resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          <DocumentArrowDownIcon className="h-5 w-5" />
          Download Resume
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </Card>
    </Section>
  );
}
