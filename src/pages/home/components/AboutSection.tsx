import { useRevealAnimation } from '@/hooks/useRevealAnimation';

const INFO_ITEMS = [
  { label: '身份', value: '华中科技大学 CS 大二' },
  { label: '方向', value: 'AI 产品 / AI Native 产品工程' },
  { label: '方式', value: '产品判断 + AI 协作开发' },
  { label: '探索', value: '个人构建 · 知识系统' },
  { label: '状态', value: '持续学习 · 持续做项目 · 持续复盘' },
];

export default function AboutSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Perfunctory label */}
        <div className={`mb-10 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3 font-label">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950">关于我</h2>
        </div>

        {/* Narrative intro */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up-delay-1' : 'reveal-hidden'}`}>
          <p className="text-base md:text-lg text-foreground-700 leading-relaxed">
            我目前就读于华中科技大学计算机科学与技术专业，是一名正在向 AI 产品与 AI Native 产品工程方向发展的学生。
          </p>
          <p className="text-base md:text-lg text-foreground-600 leading-relaxed mt-4">
            我关心的不只是模型能力本身，也关心一个想法如何被拆解、验证、实现，并最终变成真实可用的产品。
          </p>
        </div>

        {/* Info cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
            isVisible ? 'animate-fade-in-up-delay-2' : 'reveal-hidden'
          }`}
        >
          {INFO_ITEMS.map((item) => (
            <div
              key={item.label}
              className="group p-5 bg-background-50 border border-background-200/50 rounded-xl transition-all duration-[280ms] ease-out hover:-translate-y-1 hover:border-primary-200/60"
            >
              <p className="text-xs text-foreground-400 mb-1.5 tracking-wide font-label uppercase">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground-800 leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}