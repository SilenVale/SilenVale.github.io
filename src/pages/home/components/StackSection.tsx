import { useRevealAnimation } from '@/hooks/useRevealAnimation';

interface StackCard {
  id: string;
  name: string;
  en: string;
  description: string;
  tools: string[];
  status: 'verified' | 'learning' | 'exploring';
  statusLabel: string;
  color: {
    dot: string;
    badge: string;
    badgeText: string;
  };
}

const STACK_CARDS: StackCard[] = [
  {
    id: 'ai-product',
    name: 'AI 产品与产品思维',
    en: 'AI Product',
    description: '用户问题拆解、需求分析、竞品分析、PRD、POC、MVP、PMF、用户验证与产品取舍。',
    tools: ['PRD', '用户调研', '竞品分析', 'POC / MVP', '产品定位'],
    status: 'verified',
    statusLabel: '已验证',
    color: { dot: 'bg-primary-500', badge: 'bg-primary-50', badgeText: 'text-primary-700' },
  },
  {
    id: 'agents',
    name: 'Agent 与 AI 应用',
    en: 'Agents & AI Apps',
    description: 'Context Engineering、Tool Calling、Agent Loop、MCP、A2A、Workflow 与 Agent 的判断。',
    tools: ['Dify', 'GPT', 'OpenAgents', 'MCP', 'Context Engineering'],
    status: 'learning',
    statusLabel: '正在学习',
    color: { dot: 'bg-accent-500', badge: 'bg-accent-50', badgeText: 'text-accent-700' },
  },
  {
    id: 'ai-dev',
    name: 'AI 协作开发',
    en: 'AI-assisted Development',
    description: '用 Readdy、Cursor、Claude、GPT 和 OpenAgents 协同开发、调试、测试和迭代。',
    tools: ['Readdy', 'Cursor', 'Claude', 'Vibe Coding'],
    status: 'verified',
    statusLabel: '已验证',
    color: { dot: 'bg-primary-500', badge: 'bg-primary-50', badgeText: 'text-primary-700' },
  },
  {
    id: 'frontend',
    name: '前端与全栈实现',
    en: 'Frontend & Full-stack',
    description: 'React、Vite、JavaScript、Supabase Auth、Postgres、RLS、Storage、Edge Functions。',
    tools: ['React', 'Vite', 'Supabase', 'Postgres', 'Edge Functions'],
    status: 'verified',
    statusLabel: '已验证',
    color: { dot: 'bg-secondary-500', badge: 'bg-secondary-50', badgeText: 'text-secondary-700' },
  },
  {
    id: 'data',
    name: '数据与自动化工作流',
    en: 'Data & Automation',
    description: 'Python、TikHub、ASR、数据清洗、批处理、重试、去重、manifest、Excel 分析。',
    tools: ['Python', 'TikHub', 'ASR', '数据处理'],
    status: 'verified',
    statusLabel: '已验证',
    color: { dot: 'bg-primary-500', badge: 'bg-primary-50', badgeText: 'text-primary-700' },
  },
  {
    id: 'knowledge',
    name: '知识管理与协作系统',
    en: 'Knowledge System',
    description: 'Markdown、结构化知识库、AI 上下文管理、SOP、项目档案、复盘和持续迭代。',
    tools: ['Markdown', '知识库', 'SOP', '项目档案'],
    status: 'learning',
    statusLabel: '持续迭代',
    color: { dot: 'bg-accent-500', badge: 'bg-accent-50', badgeText: 'text-accent-700' },
  },
];

export default function StackSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section id="stack" className="py-24 md:py-32 px-6 md:px-10 bg-background-50">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3 font-label">
            Tech Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-3">技术栈</h2>
          <p className="text-sm text-foreground-500 max-w-xl">
            不是技能标签云，而是有层次的能力地图。每项能力都有真实的项目证据和清晰的学习状态。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {STACK_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className={`group p-5 md:p-6 bg-background-100 border border-background-200/40 rounded-xl transition-all duration-[280ms] ease-out hover:-translate-y-1 hover:border-primary-200/60 ${
                isVisible
                  ? idx === 0
                    ? 'animate-fade-in-up'
                    : idx === 1
                      ? 'animate-fade-in-up-delay-1'
                      : idx === 2
                        ? 'animate-fade-in-up-delay-2'
                        : idx === 3
                          ? 'animate-fade-in-up-delay-1'
                          : idx === 4
                            ? 'animate-fade-in-up-delay-2'
                            : 'animate-fade-in-up-delay-3'
                  : 'reveal-hidden'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full ${card.color.dot} flex-shrink-0`} />
                  <h3 className="text-sm font-semibold text-foreground-900">{card.name}</h3>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium whitespace-nowrap ${card.color.badge} ${card.color.badgeText}`}
                >
                  {card.statusLabel}
                </span>
              </div>

              <p className="text-xs text-foreground-500 mb-1.5 font-label tracking-wide uppercase">
                {card.en}
              </p>
              <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {card.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-[11px] text-foreground-600 bg-background-50 border border-background-200/50 rounded-md whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}