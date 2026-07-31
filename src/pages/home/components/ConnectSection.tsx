import { useRevealAnimation } from '@/hooks/useRevealAnimation';

const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    account: 'SilenVale',
    url: 'https://github.com/SilenVale',
    icon: 'ri-github-fill',
    color: 'bg-foreground-100',
    iconColor: 'text-foreground-700',
  },
  {
    platform: '小红书',
    account: '天笑星辰',
    url: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b',
    icon: 'ri-book-open-line',
    color: 'bg-primary-100',
    iconColor: 'text-primary-500',
  },
];

export default function ConnectSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section id="social" className="py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`mb-10 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3 font-label">
            Social
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950">社媒</h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            isVisible ? 'animate-fade-in-up-delay-1' : 'reveal-hidden'
          }`}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-background-50 border border-background-200/50 rounded-xl cursor-pointer transition-all duration-[280ms] ease-out hover:-translate-y-1 hover:border-primary-200/60"
            >
              <div
                className={`w-11 h-11 rounded-xl ${link.color} flex items-center justify-center flex-shrink-0 transition-colors duration-[280ms]`}
              >
                <i className={`${link.icon} text-xl ${link.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground-900">{link.platform}</p>
                <p className="text-xs text-foreground-500 truncate">{link.account}</p>
              </div>
              <span className="inline-block transition-transform duration-[280ms] group-hover:translate-x-1">
                <i className="ri-arrow-right-line text-foreground-400 w-5 h-5 flex items-center justify-center" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}