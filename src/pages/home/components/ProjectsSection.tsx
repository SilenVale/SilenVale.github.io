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
      kicker="Selected Work · 代表作品"
      title="代表项目"
      subtitle="Each case: a problem, key actions, and a verifiable result"
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
                onKeyDown={(e) => {
                  const idx = SELECTED_WORK.findIndex((x) => x.id === p.id);
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    switchProject(SELECTED_WORK[(idx + 1) % SELECTED_WORK.length].id);
                  }
                  if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    switchProject(SELECTED_WORK[(idx - 1 + SELECTED_WORK.length) % SELECTED_WORK.length].id);
                  }
                }}
                className={`font-meta text-[0.65rem] uppercase tracking-wider px-3 py-1.5 cursor-pointer transition-colors border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red ${
                  selected
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink/70 border-ink/20 hover:border-ink/40'
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
          className={`animate-fade-slide-in ${isVisible ? '' : 'reveal-hidden'}`}
        >
          <div className="flex flex-wrap items-start gap-3 mb-3">
            {active.badge && <span className="np-badge">{active.badge}</span>}
            <span className="np-byline">{active.dateline}</span>
          </div>

          <h3 className="np-headline text-xl md:text-2xl mb-6">{active.headline}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { label: '起点问题', content: active.problem },
              { label: '可验证结果', content: active.result },
            ].map((block) => (
              <div key={block.label} className="np-card">
                <p className="np-byline mb-2">{block.label}</p>
                <p className="text-sm leading-relaxed text-ink/90">{block.content}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="np-byline mb-3">关键动作</p>
            <ul className="space-y-2">
              {active.actions.map((action) => (
                <li key={action} className="text-sm leading-relaxed flex gap-2 text-ink/90">
                  <span className="text-news-red shrink-0">—</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink/10">
            {active.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 bg-ink text-paper font-meta text-[0.65rem] uppercase tracking-widest hover:bg-news-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red"
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
