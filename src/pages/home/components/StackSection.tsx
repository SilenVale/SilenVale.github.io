import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';

const STACK_CARDS = [
  {
    name: 'AI 产品与产品思维',
    en: 'AI Product',
    description: '用户问题拆解、需求分析、竞品分析、PRD、POC、MVP、PMF、用户验证与产品取舍。',
    tools: ['PRD', '用户调研', '竞品分析', 'POC / MVP'],
    status: '已验证',
  },
  {
    name: 'Agent 与 AI 应用',
    en: 'Agents & AI Apps',
    description: 'Context Engineering、Tool Calling、Agent Loop、MCP、Workflow 与 Agent Contract 设计。',
    tools: ['Dify', 'MCP', 'Skill/CLI Contract', 'Context Engineering'],
    status: '正在学习',
  },
  {
    name: 'AI 协作开发',
    en: 'AI-assisted Dev',
    description: '用 GPT、OpenAgents、Cursor、Codex、Stitch 协同开发、调试、测试和迭代。',
    tools: ['GPT', 'Codex', 'Cursor', 'Stitch'],
    status: '已验证',
  },
  {
    name: '前端与全栈实现',
    en: 'Frontend & Full-stack',
    description: 'React、Vite、Next.js、TypeScript、Supabase Auth、Postgres、RLS、Edge Functions。',
    tools: ['React', 'Next.js', 'Supabase', 'TypeScript'],
    status: '已验证',
  },
  {
    name: '数据与自动化工作流',
    en: 'Data & Automation',
    description: 'Python、TikHub、ASR、数据清洗、批处理、Excel 分析与调研 Skill。',
    tools: ['Python', 'TikHub', 'ASR', '数据处理'],
    status: '已验证',
  },
  {
    name: '知识管理与协作系统',
    en: 'Knowledge System',
    description: 'Markdown、结构化知识库、AI 上下文管理、SOP、项目档案与复盘。',
    tools: ['Obsidian', 'Markdown', 'SOP', '中控台'],
    status: '持续迭代',
  },
];

export default function StackSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="stack"
      kicker="Technology · 科技简报"
      title="技术栈"
      subtitle="A layered capability map — each skill has project evidence and a clear learning status"
      className="bg-paper-dark/30"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK_CARDS.map((card, idx) => (
          <div
            key={card.name}
            className={`np-card ${isVisible ? (idx < 3 ? 'animate-fade-in-up' : 'animate-fade-in-up-delay-1') : 'reveal-hidden'}`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-bold text-base">{card.name}</h3>
              <span className="np-tag text-[0.55rem] shrink-0">{card.status}</span>
            </div>
            <p className="np-byline mb-2">{card.en}</p>
            <p className="text-xs leading-relaxed text-ink/75 mb-3">{card.description}</p>
            <div className="flex flex-wrap gap-1">
              {card.tools.map((t) => (
                <span key={t} className="text-[0.6rem] font-meta uppercase tracking-wide text-ink-muted">
                  {t}{' · '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </NewspaperSection>
  );
}
