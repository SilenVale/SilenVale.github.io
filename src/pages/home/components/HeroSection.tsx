import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import { PROFILE } from '@/data/profile';

const AVATAR = '/avatar.jpg';

export default function HeroSection() {
  const smoothAnchor = useSmoothAnchor();

  return (
    <section id="hero" className="bg-paper border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 animate-fade-in-up">
            <p className="np-kicker text-news-red mb-3">Front Page · 头版</p>
            <h2 className="np-headline text-[clamp(1.75rem,4.5vw,2.75rem)] text-ink mb-4 leading-tight">
              {PROFILE.headline}
            </h2>
            <p className="text-base md:text-lg text-ink/85 mb-1">{PROFILE.subtitle}</p>
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

          <aside className="lg:col-span-5 animate-fade-in-up-delay-1">
            <div className="border border-ink/15 bg-white/30 p-5">
              <figure className="mb-4">
                <div className="aspect-[4/5] max-w-[160px] mx-auto overflow-hidden border-2 border-ink">
                  <img src={AVATAR} alt={`${PROFILE.name} 肖像`} className="w-full h-full object-cover np-halftone" />
                </div>
                <figcaption className="np-byline text-center mt-2">
                  {PROFILE.name} · {PROFILE.title}
                </figcaption>
              </figure>
              <div className="np-rule-single mb-4" />
              <div className="space-y-4 text-sm">
                <div>
                  <p className="np-byline mb-1">Education</p>
                  <p className="font-medium">{PROFILE.education.school}</p>
                  <p className="text-xs text-ink/80">{PROFILE.education.major} · {PROFILE.education.degree}</p>
                  <p className="text-xs text-ink/75">{PROFILE.education.period}</p>
                  <p className="text-xs text-ink/75">{PROFILE.education.gpa} · {PROFILE.education.english}</p>
                </div>
                <div>
                  <p className="np-byline mb-1">Honors</p>
                  <ul className="space-y-1">
                    {PROFILE.highlights.map((h) => (
                      <li key={h} className="text-xs leading-snug flex gap-1.5 text-ink/85">
                        <span className="text-news-red shrink-0">▪</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="np-byline mb-1">Contact</p>
                  <p className="text-xs text-ink/85">{PROFILE.contact.phone}</p>
                  <a href={`mailto:${PROFILE.contact.email}`} className="text-xs text-news-red hover:underline block">
                    {PROFILE.contact.email}
                  </a>
                  <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer" className="text-xs text-ink/75 hover:text-news-red block">
                    github.com/{PROFILE.handle}
                  </a>
                </div>
                <div>
                  <p className="np-byline mb-1">Focus</p>
                  <p className="text-xs text-ink/80 leading-relaxed">{PROFILE.roleLine}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
