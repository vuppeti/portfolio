import { SparklesIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const specialties = [
  'React',
  'TypeScript',
  'Python',
  'AWS',
  'Redux',
  'Next.js',
  'Node.js',
  'AI-powered developer tools',
  'Cloud-native architectures',
];

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Experienced in building modern products that scale"
      description="I bring a product-minded and engineering-first approach to shipping reliable digital experiences that balance performance, design, and business outcomes."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-lg leading-8 text-slate-300">
            Experienced Software Development Engineer with 6 years of experience designing, developing, and deploying scalable, high-performance web applications and cloud-native solutions.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            I enjoy translating complex requirements into elegant interfaces, robust systems, and thoughtful developer experiences that stand the test of time.
          </p>
        </Card>
        <Card className="flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-sky-500/15 p-2 text-sky-400">
              <SparklesIcon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100">Specialized in</h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {specialties.map((item) => (
              <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
