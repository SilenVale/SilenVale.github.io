import { useState, useCallback, useId } from 'react';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { SELECTED_WORK } from '@/data/profile';

export default function ProjectsSection() {
  const { ref, isVisible } = useRevealAnimation();
  const [activeId, setActiveId] = useState(SELECTED_WORK[0].id);
  const tabListId = useId();
  const active = SELECTED_WORK.find((p) => p.id === activeId) ?? SELECTED_WORK[0];
  const switchProject = useCallback((id: string) => setActiveId(id), []);

  return (
    <NewspaperSection
      id="projects"
      kicker="Selected Work · 代表项目"
      title="代表项目"
      subtitle="Each case documented with problem framing, actions, and verifiable outcomes"
    >
      <div ref={ref}>
        <div
          role="tablist"
          aria-label="代表项目"
          className={`flex flex-wrap gap-2 mb-8 border-b border-ink/15 pb-4 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}
        >
          {SELECTED_WORK.map((p) => {
            const selected = activeId === p.id;
            return (
              <button
                key={p.id}
                role="tab"
                id={`${tabListId}-tab-${p.id}`}
                aria-selected={selected}
                aria-controls={`${tabListId}-panel-${p.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => switchProject(p.id)}
                className={`font-meta text-[0.65rem] uppercase tracking-wider px-3 py-1.5 cursor-pointer transition-colors border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red ${
                  selected ? 'bg-ink text-paper border-ink' : 'bg-transparent text-ink/70 border-ink/20 hover:border-ink/40'
                }`}
              >
                {p.tabLabel}
              </button>
            );
          })}
        </div>

        <article
          role="tabpanel"
          id={`${tabListId}-panel-${active.id}`}
          aria-labelledby={`${tabListId}-tab-${active.id}`}
          className={isVisible ? 'animate-fade-slide-in' : 'reveal-hidden'}
        >
          <div className="flex flex-wrap items-start gap-3 mb-3">
            {active.badge && <span className="np-badge">{active.badge}</span>}
            <span className="np-byline">{active.dateline}</span>
          </div>
          <h3 className="np-headline text-xl md:text-2xl mb-6">{active.headline}</h3>

          <div className="space-y-5 mb-6">
            {active.blocks.map((block) => (
              <div key={block.title} className="np-card">
                <h4 className="font-display font-bold text-sm text-ink mb-2">{block.title}</h4>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 30)} className="text-sm leading-relaxed text-ink/85 mb-2 last:mb-0">{p}</p>
                ))}
              </div>
            ))}
          </div>

          {active.role && (
            <p className="text-sm text-ink/80 mb-4 pl-3 border-l-2 border-news-red/40">
              <span className="font-medium">角色与协作：</span>{active.role}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink/10">
            {active.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-ink text-paper font-meta text-[0.65rem] uppercase tracking-widest hover:bg-news-red transition-colors"
              >
                {link.label} →
              </a>
            ))}
            <div className="flex flex-wrap gap-1.5 ml-auto">
              {active.tags.map((t) => (
                <span key={t} className="np-tag">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </NewspaperSection>
  );
}
