import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROFILE } from '@/data/profile';

const LINKS = [
  {
    platform: 'GitHub',
    account: PROFILE.handle,
    url: PROFILE.contact.github,
    note: '代码仓库 · 开源贡献 · 项目源码',
  },
  {
    platform: '小红书',
    account: PROFILE.name,
    url: PROFILE.contact.xiaohongshu,
    note: 'Build in Public · AI 产品学习日常',
  },
  {
    platform: 'Email',
    account: PROFILE.contact.email,
    url: `mailto:${PROFILE.contact.email}`,
    note: '合作 · 交流 · 机会',
  },
];

export default function ConnectSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="social"
      kicker="Classified · 分类广告"
      title="联系我"
      subtitle="Open to collaboration, conversations, and interesting problems"
      dark
    >
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}
      >
        {LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform === 'Email' ? undefined : '_blank'}
            rel={link.platform === 'Email' ? undefined : 'noopener noreferrer'}
            className="np-classified bg-paper/5 border-paper/20 text-paper hover:bg-paper/10 hover:border-paper/40 cursor-pointer block"
          >
            <p className="font-display font-bold text-lg text-paper mb-1">{link.platform}</p>
            <p className="text-paper/80 mb-2">{link.account}</p>
            <p className="text-[0.6rem] text-paper/50 uppercase tracking-wider">{link.note}</p>
          </a>
        ))}
      </div>
    </NewspaperSection>
  );
}
