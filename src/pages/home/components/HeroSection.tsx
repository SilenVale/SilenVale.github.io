import { useSmoothAnchor } from '@/hooks/useSmoothScroll';
import avatar from '@/assets/avatar.jpg';

export default function HeroSection() {
  const smoothAnchor = useSmoothAnchor();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background-50 overflow-hidden"
    >
      {/* Warm glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-primary-100/25 blur-[120px] hero-glow" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent-50/20 blur-[100px] hero-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-10 pt-24 pb-16">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background-200 border-2 border-background-300/60 flex items-center justify-center overflow-hidden">
            <img
              src={avatar}
              alt="天笑星辰头像"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & ID */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-1 tracking-tight animate-fade-in-up-delay-1">
          天笑星辰
        </h1>
        <p className="text-sm text-foreground-500 mb-6 animate-fade-in-up-delay-1">
          Silen · <span className="text-foreground-400">SilenVale</span>
        </p>

        {/* Main title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground-900 mb-5 leading-snug animate-fade-in-up-delay-2">
          把想法做成可验证的 AI 产品
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-foreground-600 leading-relaxed max-w-2xl mb-3 animate-fade-in-up-delay-2">
          华中科技大学计算机科学与技术专业大二学生，正在探索 AI 产品、AI Native 产品工程与个人构建。
        </p>
        <p className="text-sm md:text-base text-foreground-500 leading-relaxed max-w-2xl mb-10 animate-fade-in-up-delay-2">
          我用产品判断、AI 协作开发和结构化知识管理，把问题推进到可运行的原型。
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#projects"
            onClick={(e) => smoothAnchor(e, '#projects')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-background-50 text-sm font-medium rounded-lg cursor-pointer transition-all duration-[280ms] ease-out hover:bg-primary-600 hover:-translate-y-[3px] hover:shadow-md active:scale-[0.97] whitespace-nowrap"
          >
            查看项目
            <span className="inline-block transition-transform duration-[280ms] group-hover:translate-x-[3px]">
              <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center" />
            </span>
          </a>
          <a
            href="#about"
            onClick={(e) => smoothAnchor(e, '#about')}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-foreground-300/50 text-foreground-700 text-sm font-medium rounded-lg cursor-pointer transition-all duration-[280ms] ease-out hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 hover:-translate-y-[3px] hover:shadow-sm active:scale-[0.97] whitespace-nowrap bg-transparent"
          >
            了解我
            <span className="inline-block transition-transform duration-[280ms] group-hover:translate-x-[3px]">
              <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
