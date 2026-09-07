import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { BUILD_LOG } from '@/data/profile';

export default function BuildingInPublicSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="building"
      kicker="Column · 公开构建专栏"
      title="Building in Public"
      subtitle="把产品决策和构建过程变成可被旁观者理解的故事"
      className="bg-paper-dark/30"
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        {BUILD_LOG.map((entry, idx) => (
          <article
            key={entry.headline}
            className={`py-5 ${idx > 0 ? 'border-t border-ink/10' : ''} ${
              isVisible
                ? idx === 0
                  ? 'animate-fade-in-up'
                  : idx === 1
                    ? 'animate-fade-in-up-delay-1'
                    : idx === 2
                      ? 'animate-fade-in-up-delay-2'
                      : 'animate-fade-in-up-delay-3'
                : 'reveal-hidden'
            }`}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <time className="np-byline shrink-0">{entry.date}</time>
              <h3 className="font-display font-bold text-lg">{entry.headline}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink/80 pl-0 md:pl-16">{entry.excerpt}</p>
          </article>
        ))}
      </div>
    </NewspaperSection>
  );
}
