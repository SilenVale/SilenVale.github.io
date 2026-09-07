import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';
import { PROFILE, SKILLS } from '@/data/profile';

export default function AboutSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="about"
      kicker="Profile · 人物专访"
      title="关于我"
      subtitle="Product Engineer who translates user flows into shippable systems"
    >
      <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
        <div className="lg:col-span-7">
          <blockquote className="np-pull-quote mb-6">
            「我关心的不只是模型能力本身，也关心一个想法如何被拆解、验证、实现，并最终变成真实可用的产品。」
          </blockquote>
          <div className="np-columns-2 text-sm leading-relaxed text-ink/85 gap-6">
            <p>
              目前就读于{PROFILE.education.school}{PROFILE.education.major}专业，是一名正在向 AI 产品与 AI Native 产品工程方向发展的{PROFILE.title}。
              将用户流程转译为 Agent 引导、CLI/接口 Contract、前端 POC 与可验收发布链路，是我的核心工作方式。
            </p>
            <p>
              并行探索 AI PM 实习校招、OPC 创业与研究生申请三条路径。大三上以学业、课程学习与项目精进为主，
              把真实产出沉淀为可被招聘方、同行和合作伙伴快速理解的能力证据。
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {[
            { label: '身份', value: `${PROFILE.education.school} CS 大三` },
            { label: '方向', value: PROFILE.subtitle },
            { label: '方式', value: 'Agent Contract + AI 协作开发 + 前端 POC' },
            { label: '探索', value: '个人构建 · 知识系统 · 公开构建' },
            { label: '状态', value: '持续学习 · 持续做项目 · 持续复盘' },
          ].map((item) => (
            <div key={item.label} className="np-card flex gap-4 items-start">
              <span className="np-byline shrink-0 w-12">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-10 pt-8 border-t border-ink/10 ${isVisible ? 'animate-fade-in-up-delay-2' : 'reveal-hidden'}`}>
        <p className="np-byline mb-4 text-center">Skills at a Glance · 技能一览</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '产品', items: SKILLS.product },
            { title: 'AI 应用', items: SKILLS.ai },
            { title: '工程与工具', items: SKILLS.engineering },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="font-display font-bold text-lg mb-3 border-b border-ink/15 pb-2">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span key={s} className="np-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </NewspaperSection>
  );
}
