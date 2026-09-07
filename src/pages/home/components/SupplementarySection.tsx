import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { SUPPLEMENTARY } from '@/data/profile';

export default function SupplementarySection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="supplementary"
      kicker="Supplementary · 补充实践"
      title="补充实践"
      className="bg-paper-dark/30"
    >
      <article ref={ref} className={`np-card max-w-3xl ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
        <h3 className="font-display font-bold text-lg mb-4">{SUPPLEMENTARY.title}</h3>
        {SUPPLEMENTARY.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-ink/90">{p}</p>
        ))}
      </article>
    </NewspaperSection>
  );
}
