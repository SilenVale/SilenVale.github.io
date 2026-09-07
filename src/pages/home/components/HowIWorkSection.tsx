import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { CAPABILITIES, SKILLS } from '@/data/profile';

export default function HowIWorkSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="skills"
      kicker="Skills · 专业技能"
      title="专业技能与我如何工作"
      subtitle="Capability map backed by project evidence"
    >
      <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="np-card h-full">
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

        <div className="np-rule-single mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '产品', items: SKILLS.product },
            { title: 'AI 应用', items: SKILLS.ai },
            { title: '工程与工具', items: SKILLS.engineering },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="font-display font-bold text-base mb-3 border-b border-ink/15 pb-2">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span key={s} className="np-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </NewspaperSection>
  );
}
