import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { BUILD_STORIES } from '@/data/profile';

export default function BuildingInPublicSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="building"
      kicker="Column · 公开构建"
      title="Building in Public"
      subtitle="Real stories with a problem, a choice, and an outcome"
      className="bg-paper-dark/30"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {BUILD_STORIES.map((story, idx) => (
          <article
            key={story.headline}
            className={`np-card flex flex-col h-full ${
              isVisible
                ? idx === 0
                  ? 'animate-fade-in-up'
                  : idx === 1
                    ? 'animate-fade-in-up-delay-1'
                    : 'animate-fade-in-up-delay-2'
                : 'reveal-hidden'
            }`}
          >
            <time className="np-byline mb-2">{story.date}</time>
            <h3 className="font-display font-bold text-base mb-3 leading-snug">{story.headline}</h3>
            <p className="text-xs text-ink/70 mb-2">
              <span className="font-medium text-ink/85">问题：</span>
              {story.problem}
            </p>
            <p className="text-sm leading-relaxed text-ink/90 flex-1 mb-4">{story.takeaway}</p>
            {story.link && (
              <a
                href={story.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-meta text-[0.65rem] uppercase tracking-widest text-news-red hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red"
              >
                {story.link.label} →
              </a>
            )}
          </article>
        ))}
      </div>
    </NewspaperSection>
  );
}
