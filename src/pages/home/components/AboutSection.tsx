import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROFILE } from '@/data/profile';

export default function AboutSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="about"
      kicker="Profile · 人物侧写"
      title="关于我"
      subtitle={PROFILE.positioning}
    >
      <div ref={ref} className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
        <blockquote className="np-pull-quote mb-6 text-base">
          {PROFILE.methodLine}
        </blockquote>
        <p className="text-sm md:text-[0.95rem] leading-relaxed text-ink/90">
          我是{PROFILE.name}（{PROFILE.alias}），{PROFILE.education.school}{PROFILE.education.major}专业大三在读，现任 ViceMe AI 产品工程师实习生。
          将用户流程转译为 Agent 引导、CLI/接口 Contract、前端 POC 与可验收发布链路，是我一贯的工作方式。
          从 AdventureX 的 Experience Card，到 ViceMe 的创作者平台，再到本地优先的 Silen AI Workbench——
          我关心的不只是模型能力，而是一个想法如何被拆解、验证、实现，并最终变成真实可用的产品。
        </p>
      </div>
    </NewspaperSection>
  );
}
