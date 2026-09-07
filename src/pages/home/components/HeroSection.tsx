import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import { PROFILE } from '@/data/profile';

const AVATAR = '/avatar.jpg';

export default function HeroSection() {
  const smoothAnchor = useSmoothAnchor();

  return (
    <section id="hero" className="bg-paper border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 animate-fade-in-up">
            <p className="np-kicker text-news-red mb-3">Front Page · 头版</p>
            <h2 className="np-headline text-[clamp(1.75rem,4.5vw,2.75rem)] text-ink mb-4 leading-tight">
              {PROFILE.headline}
            </h2>
            <p className="text-base md:text-lg text-ink/80 mb-1">{PROFILE.subtitle}</p>
            <p className="np-byline mb-6">{PROFILE.credential}</p>

            <p className="text-sm md:text-[0.95rem] leading-relaxed text-ink/90 max-w-2xl mb-8">
              {PROFILE.intro}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => smoothAnchor(e, '#projects')}
                className="inline-flex items-center px-5 py-2.5 bg-ink text-paper font-meta text-xs uppercase tracking-widest cursor-pointer hover:bg-news-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red"
              >
                查看代表作品
              </a>
              <a
                href={PROFILE.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-ink font-meta text-xs uppercase tracking-widest cursor-pointer hover:border-news-red hover:text-news-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-news-red"
              >
                下载简历
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 animate-fade-in-up-delay-1">
            <div className="border border-ink/15 bg-white/30 p-5">
              <figure className="mb-4">
                <div className="aspect-[4/5] max-w-[180px] mx-auto overflow-hidden border-2 border-ink">
                  <img
                    src={AVATAR}
                    alt={`${PROFILE.name} 肖像`}
                    className="w-full h-full object-cover np-halftone"
                  />
                </div>
                <figcaption className="np-byline text-center mt-2">
                  {PROFILE.name} · {PROFILE.title}
                </figcaption>
              </figure>

              <div className="np-rule-single mb-4" />

              <div>
                <p className="np-byline mb-2">Representative Results</p>
                <ul className="space-y-2">
                  {PROFILE.highlights.map((h) => (
                    <li key={h} className="text-xs leading-snug flex gap-1.5 text-ink/85">
                      <span className="text-news-red shrink-0">▪</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
