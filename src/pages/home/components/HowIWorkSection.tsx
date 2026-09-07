import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROFILE, CAPABILITIES } from '@/data/profile';

export default function HowIWorkSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="how-i-work"
      kicker="Method · 工作方式"
      title="我如何工作"
      subtitle={PROFILE.positioning}
    >
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.title}
            className={`np-card h-full ${idx === 1 ? 'animate-fade-in-up-delay-1' : ''}`}
          >
            <h3 className="font-display font-bold text-lg mb-0.5">{cap.title}</h3>
            <p className="np-byline mb-3">{cap.en}</p>
            <p className="text-sm leading-relaxed text-ink/90 mb-4">{cap.description}</p>
            <div className="pt-3 border-t border-ink/10">
              <p className="np-byline mb-1.5">项目证据</p>
              <p className="text-xs leading-relaxed text-ink/75">{cap.evidence}</p>
            </div>
          </div>
        ))}
      </div>
    </NewspaperSection>
  );
}
