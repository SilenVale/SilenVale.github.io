import { PROFILE, BEYOND } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t-4 border-news-red">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="np-byline text-paper/60 text-center mb-4">Beyond Work · 副刊</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
          {BEYOND.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <p className="font-display font-bold text-sm text-paper mb-1">{item.title}</p>
              <p className="text-xs text-paper/70 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="np-rule-single border-paper/20 mb-4 max-w-xs mx-auto" />
        <div className="text-center">
          <p className="font-display text-lg font-bold mb-1">THE SILEN TIMES</p>
          <p className="font-meta text-[0.65rem] uppercase tracking-widest text-paper/60">
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.alias} · Built in Wuhan
          </p>
        </div>
      </div>
    </footer>
  );
}
