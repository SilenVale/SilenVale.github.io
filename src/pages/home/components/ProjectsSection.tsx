import { useState, useCallback } from 'react';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROJECTS } from '@/data/profile';

export default function ProjectsSection() {
  const { ref, isVisible } = useRevealAnimation();
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  const switchProject = useCallback((id: string) => setActiveId(id), []);

  return (
    <NewspaperSection
      id="projects"
      kicker="Features · 专题报道"
      title="代表项目"
      subtitle="Not a portfolio wall — each story has a starting problem, a core solution, and a verified loop"
    >
      <div ref={ref}>
        {/* Tab strip — newspaper section index */}
        <div className={`flex flex-wrap gap-2 mb-8 border-b border-ink/15 pb-4 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => switchProject(p.id)}
              className={`font-meta text-[0.65rem] uppercase tracking-wider px-3 py-1.5 cursor-pointer transition-colors border ${
                activeId === p.id
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-ink-muted border-ink/20 hover:border-ink/40'
              }`}
            >
              {p.id === 'experience-card' ? 'Experience Card' :
               p.id === 'silen-workbench' ? 'AI Workbench' :
               p.id === 'lottery-bot' ? '彩票机器人' :
               p.id === 'douyin-skill' ? '抖音 Skill' :
               '知识库'}
            </button>
          ))}
        </div>

        <article className={`animate-fade-slide-in ${isVisible ? '' : 'reveal-hidden'}`}>
          <div className="flex flex-wrap items-start gap-3 mb-3">
            {active.badge && <span className="np-badge">{active.badge}</span>}
            <span className="np-byline">{active.dateline}</span>
          </div>

          <h3 className="np-headline text-2xl md:text-3xl mb-2">{active.headline}</h3>
          <p className="np-deck text-base mb-6">{active.deck}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 np-columns-2 text-sm leading-relaxed">
              {active.body.map((para, i) => (
                <p key={i} className={`mb-4 ${i === 0 ? 'np-drop-cap' : ''}`}>{para}</p>
              ))}
              {active.role && (
                <p className="np-byline mt-4 not-italic normal-case tracking-normal text-xs">
                  角色：{active.role}
                </p>
              )}
            </div>

            <aside className="lg:col-span-4 space-y-4">
              <div className="np-card">
                <p className="np-byline mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((t) => (
                    <span key={t} className="np-tag">{t}</span>
                  ))}
                </div>
              </div>
              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block np-classified text-news-red hover:text-ink cursor-pointer"
                >
                  → 查看线上 Demo
                  <br />
                  <span className="text-ink-muted text-[0.6rem]">{active.link.replace('https://', '')}</span>
                </a>
              )}
            </aside>
          </div>
        </article>

        <p className="np-byline text-center mt-10 text-ink/40">
          — Continued in other sections · 更多实践见「公开构建」与「工作之外」—
        </p>
      </div>
    </NewspaperSection>
  );
}
