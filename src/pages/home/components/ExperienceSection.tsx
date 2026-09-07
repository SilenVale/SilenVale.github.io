import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { EXPERIENCES } from '@/data/profile';

export default function ExperienceSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="experience"
      kicker="Experience · 实习经历"
      title="实习经历"
      subtitle="Real product environments, real metrics, real delivery"
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
            <p className="text-news-red font-medium text-sm mb-4">{exp.role}</p>

            <div className="np-card bg-white/50 mb-5 border-l-[3px] border-l-news-red">
              <p className="np-byline mb-1">核心成果</p>
              <p className="text-sm font-medium leading-relaxed">{exp.leadResult}</p>
            </div>

            <p className="text-sm text-ink/75 mb-4">{exp.context}</p>

            <ul className="space-y-2">
              {exp.highlights.map((h) => (
                <li key={h} className="text-sm leading-relaxed flex gap-2 text-ink/90">
                  <span className="text-news-red shrink-0">—</span>
                  {h}
                </li>
              ))}
            </ul>

            {idx < EXPERIENCES.length - 1 && <div className="np-rule-single mt-10" />}
          </article>
        ))}
      </div>
    </NewspaperSection>
  );
}
