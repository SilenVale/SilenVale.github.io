import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROFILE } from '@/data/profile';

const LINKS = [
  {
    platform: 'GitHub',
    account: PROFILE.handle,
    url: PROFILE.contact.github,
    note: '项目代码与开源贡献',
  },
  {
    platform: '小红书',
    account: PROFILE.name,
    url: PROFILE.contact.xiaohongshu,
    note: 'Build in Public 记录',
  },
  {
    platform: 'Email',
    account: PROFILE.contact.email,
    url: `mailto:${PROFILE.contact.email}`,
    note: '邮件联系',
  },
];

export default function ConnectSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="social"
      kicker="Contact · 联系"
      title="联系我"
      subtitle="欢迎以下方向的交流"
      dark
    >
      <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PROFILE.contactIntents.map((intent) => (
            <span
              key={intent}
              className="px-3 py-1 border border-paper/30 font-meta text-[0.65rem] uppercase tracking-widest text-paper/90"
            >
              {intent}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform === 'Email' ? undefined : '_blank'}
              rel={link.platform === 'Email' ? undefined : 'noopener noreferrer'}
              className="np-classified bg-paper/5 border-paper/20 text-paper hover:bg-paper/10 hover:border-paper/40 cursor-pointer block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <p className="font-display font-bold text-lg text-paper mb-1">{link.platform}</p>
              <p className="text-paper/85 mb-2 text-sm">{link.account}</p>
              <p className="text-[0.65rem] text-paper/60 uppercase tracking-wider">{link.note}</p>
            </a>
          ))}
        </div>
      </div>
    </NewspaperSection>
  );
}
