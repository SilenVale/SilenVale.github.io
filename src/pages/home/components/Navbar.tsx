import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { label: '头版', href: '#hero' },
  { label: '人物', href: '#about' },
  { label: '实习', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '技能', href: '#stack' },
  { label: '专栏', href: '#building' },
  { label: '联系', href: '#social' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'stack', 'building', 'social'];

const TODAY = new Date().toLocaleDateString('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
});

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 20;
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_var(--rule)]' : 'bg-paper'
      }`}
    >
      {/* Dateline bar */}
      <div className="border-b border-ink/10 bg-paper-dark/50">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between text-[0.62rem] font-meta uppercase tracking-widest text-ink-muted">
          <span>Vol. MMXXVI · No. 09</span>
          <span className="hidden sm:inline">{TODAY}</span>
          <span>武汉 · 中国</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 text-center">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="block cursor-pointer group"
        >
          <p className="np-kicker text-news-red mb-1">Est. 2024 · Product Engineering Gazette</p>
          <h1 className="np-masthead text-[clamp(2rem,6vw,3.5rem)] text-ink group-hover:text-news-red transition-colors">
            THE SILEN TIMES
          </h1>
          <p className="font-meta text-[0.65rem] tracking-[0.35em] uppercase text-ink-muted mt-1">
            天笑星辰 · Silen · SilenVale
          </p>
        </a>
        <div className="np-rule-double mt-3 mb-2" />
      </div>

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-4 pb-3">
        <div className="hidden md:flex items-center justify-center gap-6 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`np-nav-link cursor-pointer whitespace-nowrap ${
                activeSection === item.href ? 'active font-bold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden w-full py-2 font-meta text-xs uppercase tracking-widest text-ink-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '— 收起目录 —' : '— 展开目录 —'}
        </button>

        <div className={`md:hidden overflow-hidden transition-all ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="grid grid-cols-2 gap-2 py-3 border-t border-ink/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`np-nav-link py-2 text-center cursor-pointer ${
                  activeSection === item.href ? 'active font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="np-rule-thick" />
    </header>
  );
}
