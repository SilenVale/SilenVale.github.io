import RevealOnScroll from '@/components/RevealOnScroll';
import { NewspaperSection } from './NewspaperSection';
import { EXPERIENCES } from '@/data/profile';

export default function ExperienceSection() {
  return (
    <NewspaperSection
      id="experience"
      kicker="Experience · 实习经历"
      title="实习经历"
      subtitle="Real product environments, real metrics, real delivery"
      className="bg-paper-dark/30"
    >
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <article key={exp.project}>
            <RevealOnScroll>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="np-headline text-xl md:text-2xl">{exp.company}</h3>
                <span className="np-byline">{exp.period}</span>
              </div>
              <p className="text-news-red font-medium text-sm mb-1">{exp.role}</p>
              <p className="np-deck text-sm mb-3">{exp.project}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {exp.tags.map((t) => (
                  <span key={t} className="np-tag text-news-red border-news-red/30">{t}</span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="mb-6">
              <p className="text-sm leading-relaxed text-ink/90">{exp.intro}</p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {exp.blocks.map((block, blockIdx) => (
                <RevealOnScroll
                  key={block.title}
                  className="np-card bg-white/40 h-full"
                  delayMs={blockIdx * 60}
                >
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
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="np-card bg-white/50 border-l-[3px] border-l-news-red">
                <p className="np-byline mb-2">项目结果</p>
                <p className="text-sm leading-relaxed text-ink/90">{exp.result}</p>
              </div>
            </RevealOnScroll>

            {idx < EXPERIENCES.length - 1 && <div className="np-rule-single mt-12" />}
          </article>
        ))}
      </div>
    </NewspaperSection>
  );
}
