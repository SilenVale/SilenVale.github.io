import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import avatar from '@/assets/avatar.jpg';
import { PROFILE } from '@/data/profile';

export default function HeroSection() {
  const smoothAnchor = useSmoothAnchor();

  return (
    <section id="hero" className="bg-paper border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main headline column */}
          <div className="lg:col-span-8 animate-fade-in-up">
            <p className="np-kicker text-news-red mb-3">Front Page · 头版头条</p>
            <h2 className="np-headline text-[clamp(2rem,5vw,3.25rem)] text-ink mb-4">
              {PROFILE.tagline}
            </h2>
            <p className="np-deck text-base md:text-lg mb-6 max-w-2xl">
              {PROFILE.subtitle} — {PROFILE.location}
            </p>

            <div className="np-columns-2 text-sm md:text-[0.95rem] leading-relaxed text-ink/85 mb-8">
              <p className="np-drop-cap mb-4">
                我是{PROFILE.name}（{PROFILE.alias}），{PROFILE.education.school}{PROFILE.education.major}大三在读。
                正在把 AI 产品判断、Agent Contract 设计与前端 POC 工程串成一条可验收的发布链路。
              </p>
              <p>
                从 AdventureX 黑客松的 Experience Card，到 ViceMe 的创作者平台 Contract，再到本地优先的 Silen AI Workbench——
                我关心的不只是模型能力，而是想法如何被拆解、验证、实现，并最终变成真实可用的产品。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => smoothAnchor(e, '#projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper font-meta text-xs uppercase tracking-widest cursor-pointer hover:bg-news-red transition-colors"
              >
                阅读项目报道
              </a>
              <a
                href="#experience"
                onClick={(e) => smoothAnchor(e, '#experience')}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink font-meta text-xs uppercase tracking-widest cursor-pointer hover:border-news-red hover:text-news-red transition-colors"
              >
                实习经历
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 animate-fade-in-up-delay-1">
            <div className="border border-ink/15 bg-white/30 p-5">
              <figure className="mb-4">
                <div className="aspect-[4/5] max-w-[200px] mx-auto overflow-hidden border-2 border-ink">
                  <img src={avatar} alt={`${PROFILE.name} 肖像`} className="w-full h-full object-cover np-halftone" />
                </div>
                <figcaption className="np-byline text-center mt-2">
                  Portrait · {PROFILE.title}
                </figcaption>
              </figure>

              <div className="np-rule-single mb-4" />

              <div className="space-y-3 text-sm">
                <div>
                  <p className="np-byline mb-1">Education</p>
                  <p className="font-medium">{PROFILE.education.school}</p>
                  <p className="text-ink-muted text-xs">{PROFILE.education.major}</p>
                  <p className="text-ink-muted text-xs">{PROFILE.education.gpa} · {PROFILE.education.english}</p>
                </div>
                <div>
                  <p className="np-byline mb-1">Honors</p>
                  <ul className="space-y-1">
                    {PROFILE.honors.map((h) => (
                      <li key={h} className="text-xs leading-snug flex gap-1.5">
                        <span className="text-news-red shrink-0">▪</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="np-byline mb-1">Contact</p>
                  <a href={`mailto:${PROFILE.contact.email}`} className="text-xs text-news-red hover:underline block">
                    {PROFILE.contact.email}
                  </a>
                  <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer" className="text-xs text-ink-muted hover:text-news-red">
                    github.com/{PROFILE.handle}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
