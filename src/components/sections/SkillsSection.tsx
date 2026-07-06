import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skillGroups } from '../../data/portfolioData';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A broad toolkit for modern product delivery"
      description="My work spans frontend engineering, cloud architecture, backend integration, and quality engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
