import { useState } from 'react';
import { NewspaperSection } from './NewspaperSection';
import { EXPERIENCES, type ExperienceItem } from '@/data/profile';

function firstSentence(text: string): string {
  const end = text.search(/[。！？]/);
  if (end === -1) return text;
  return text.slice(0, end + 1);
}

function ExperienceAccordionItem({ exp, defaultOpen }: { exp: ExperienceItem; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const summary = firstSentence(exp.intro);
  const panelId = `experience-panel-${exp.project}`;

  return (
    <article className="border border-ink/10 bg-white/20 p-5 md:p-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
        <h3 className="np-headline text-xl md:text-2xl">{exp.company}</h3>
        <span className="np-byline">{exp.period}</span>
      </div>
      <p className="text-news-red font-medium text-sm mb-1">{exp.role}</p>
      <p className="np-deck text-sm mb-3">{exp.project}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {exp.tags.map((t) => (
          <span key={t} className="np-tag text-news-red border-news-red/30">{t}</span>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-ink/90 mb-5">
        {open ? exp.intro : summary}
      </p>

      <div
        id={panelId}
        className={`np-accordion-panel ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="np-accordion-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
            {exp.blocks.map((block) => (
              <div key={block.title} className="np-card bg-white/40 h-full">
                <h4 className="font-display font-bold text-sm text-ink mb-2 border-b border-ink/10 pb-1">
                  {block.title}
                </h4>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-ink/85 mb-2 last:mb-0">{p}</p>
                ))}
                {block.bullets && (
                  <ul className="space-y-1.5 mt-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="text-sm leading-relaxed flex gap-2 text-ink/85">
                        <span className="text-news-red shrink-0">—</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="np-card bg-white/50 border-l-[3px] border-l-news-red mb-4">
        <p className="np-byline mb-2">项目结果</p>
        <p className="text-sm leading-relaxed text-ink/90">{exp.result}</p>
      </div>

      <button
        type="button"
        className="np-accordion-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        {open ? '收起 ▴' : '展开职责详情 ▸'}
      </button>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <NewspaperSection
      id="experience"
      kicker="Experience · 实习经历"
      title="实习经历"
      subtitle="Real product environments, real metrics, real delivery"
      className="bg-paper-dark/30"
    >
      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceAccordionItem key={exp.project} exp={exp} defaultOpen={idx === 0} />
        ))}
      </div>
    </NewspaperSection>
  );
}
