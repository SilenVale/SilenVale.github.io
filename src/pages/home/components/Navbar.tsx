import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { label: '头版', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '技能', href: '#skills' },
  { label: '公开构建', href: '#building' },
  { label: '联系', href: '#social' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'building', 'social'];

const TODAY = new Date().toLocaleDateString('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const compact = scrollY > 120;
  const smoothAnchor = useSmoothAnchor();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    smoothAnchor(e, href);
  };

  if (compact) {
    return (
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/15 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-between gap-4">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display font-bold text-sm text-ink hover:text-news-red transition-colors shrink-0"
          >
            THE SILEN TIMES
          </a>
          <nav className="hidden lg:flex items-center gap-4" aria-label="主导航">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                className={`np-nav-link cursor-pointer whitespace-nowrap ${
                  activeSection === item.href ? 'active font-bold text-ink' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden font-meta text-[0.6rem] uppercase tracking-widest text-ink/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="切换菜单"
          >
            {mobileOpen ? '收起' : '菜单'}
          </button>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden border-t border-ink/10 px-4 py-3 grid grid-cols-2 gap-2" aria-label="移动端导航">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                className={`np-nav-link py-2 text-center ${activeSection === item.href ? 'active font-bold' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-ink/10">
      <div className="border-b border-ink/10 bg-paper-dark/50">
        <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between text-[0.62rem] font-meta uppercase tracking-widest text-ink/70">
          <span>Vol. MMXXVI · No. 09</span>
          <span className="hidden sm:inline">{TODAY}</span>
          <span>武汉</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 text-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="block group">
          <p className="np-kicker text-news-red mb-1">Product Engineering Gazette</p>
          <h1 className="np-masthead text-[clamp(1.75rem,5vw,3rem)] text-ink group-hover:text-news-red transition-colors">
            THE SILEN TIMES
          </h1>
        </a>
        <div className="np-rule-double mt-3 mb-2" />
        <nav className="hidden md:flex items-center justify-center gap-5 flex-wrap pb-2" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={activeSection === item.href ? 'page' : undefined}
              className={`np-nav-link cursor-pointer ${activeSection === item.href ? 'active font-bold' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden w-full py-2 font-meta text-xs uppercase tracking-widest text-ink/70"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '— 收起 —' : '— 目录 —'}
        </button>
        {mobileOpen && (
          <nav className="md:hidden grid grid-cols-2 gap-2 py-3 border-t border-ink/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`np-nav-link py-2 text-center ${activeSection === item.href ? 'active font-bold' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
