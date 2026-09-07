import { PROFILE } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-8 px-4 border-t-4 border-news-red">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-display text-xl font-bold mb-2">THE SILEN TIMES</p>
        <div className="np-rule-single border-paper/20 mb-4 max-w-xs mx-auto" />
        <p className="font-meta text-[0.65rem] uppercase tracking-widest text-paper/60 mb-2">
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.alias}
        </p>
        <p className="text-xs text-paper/40 italic">
          Printed with curiosity, AI collaboration, and too much coffee.
        </p>
        <p className="font-meta text-[0.55rem] text-paper/30 mt-4 uppercase tracking-[0.2em]">
          All stories verified · No AI-generated filler · Built in Wuhan
        </p>
      </div>
    </footer>
  );
}
