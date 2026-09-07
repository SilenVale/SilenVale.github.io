import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { BEYOND } from '@/data/profile';

export default function BeyondWorkSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="beyond"
      kicker="Lifestyle · 副刊"
      title="工作之外"
      subtitle="Interests that feed the work — and work that feeds the interests"
    >
      <div ref={ref} className="np-columns-2 gap-8 text-sm leading-relaxed">
        {BEYOND.map((item, idx) => (
          <div
            key={item.title}
            className={`break-inside-avoid mb-6 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <h3 className="font-display font-bold text-base mb-2 flex items-center gap-2">
              <span className="text-news-red">◆</span>{item.title}
            </h3>
            <p className="text-ink/80">{item.copy}</p>
          </div>
        ))}
      </div>
    </NewspaperSection>
  );
}
