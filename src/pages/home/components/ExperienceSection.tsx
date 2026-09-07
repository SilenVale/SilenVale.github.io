import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { EXPERIENCES } from '@/data/profile';

export default function ExperienceSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="experience"
      kicker="Business · 商业版"
      title="实习经历"
      subtitle="From growth metrics to agent contracts — real product engineering in production contexts"
      className="bg-paper-dark/30"
    >
      <div ref={ref} className="space-y-10">
        {EXPERIENCES.map((exp, idx) => (
          <article
            key={exp.project}
            className={`${isVisible ? (idx === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up-delay-1') : 'reveal-hidden'}`}
          >
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <p className="text-sm leading-relaxed mb-4">{exp.summary}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed flex gap-2">
                      <span className="text-news-red shrink-0 font-bold">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="lg:col-span-5">
                <div className="np-card bg-white/50 h-full">
                  <p className="np-byline mb-2">Results · 项目结果</p>
                  <p className="text-sm leading-relaxed italic">{exp.result}</p>
                </div>
              </aside>
            </div>
            {idx < EXPERIENCES.length - 1 && <div className="np-rule-single mt-10" />}
          </article>
        ))}
      </div>
    </NewspaperSection>
  );
}
