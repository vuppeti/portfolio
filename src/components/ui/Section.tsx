import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p> : null}
          <h2 className="mt-2 text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
