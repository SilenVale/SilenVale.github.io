import { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { label: '首页', en: 'Home', href: '#hero' },
  { label: '关于', en: 'About', href: '#about' },
  { label: '技术栈', en: 'Stack', href: '#stack' },
  { label: '学习路径', en: 'Path', href: '#learning' },
  { label: '项目', en: 'Projects', href: '#projects' },
  { label: '社媒', en: 'Social', href: '#social' },
];

const SECTION_IDS = ['hero', 'about', 'stack', 'learning', 'projects', 'social'];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 40;
  const smoothAnchor = useSmoothAnchor();
  const activeSection = useActiveSection(SECTION_IDS);

  // Sliding indicator
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const updateIndicator = useCallback(() => {
    if (!navRef.current) return;
    const activeIndex = NAV_ITEMS.findIndex((item) => item.href === activeSection);
    const buttons = navRef.current.querySelectorAll('a[data-nav-item]');
    const btn = buttons[activeIndex] as HTMLElement | undefined;
    if (btn) {
      const parentRect = navRef.current.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - parentRect.left + navRef.current.scrollLeft,
        width: btnRect.width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    const handleResize = () => updateIndicator();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateIndicator]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);
    smoothAnchor(e, href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[280ms] ease-out ${
        scrolled
          ? 'bg-background-50/85 backdrop-blur-[20px] border-b border-background-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-base font-semibold text-foreground-950 whitespace-nowrap cursor-pointer hover:text-primary-500 transition-colors duration-200"
        >
          Silen
        </a>

        {/* Desktop nav */}
        <div
          ref={navRef}
          className="hidden md:flex items-center gap-1 relative"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                data-nav-item
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 text-sm whitespace-nowrap cursor-pointer transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-primary-600 font-medium'
                    : 'text-foreground-600 hover:text-foreground-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          {/* Sliding underline */}
          <div
            className="absolute bottom-0 h-[2px] bg-primary-500 rounded-full transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg hover:bg-background-200/50 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-[18px] h-[1.5px] bg-foreground-800 transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-foreground-800 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-foreground-800 transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <div className="bg-background-50/95 backdrop-blur-[20px] border-b border-background-200/50 px-5 pb-5 pt-1 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm py-2.5 px-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-foreground-600 hover:bg-background-100 hover:text-foreground-900'
                }`}
              >
                {item.label}
                <span className="ml-2 text-xs text-foreground-400">{item.en}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}