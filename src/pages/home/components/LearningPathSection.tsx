import { useRevealAnimation } from '@/hooks/useRevealAnimation';

interface PathItem {
  title: string;
  items: string[];
}

interface PathColumn {
  number: string;
  title: string;
  en: string;
  description: string;
  paths: PathItem[];
  color: {
    bg: string;
    border: string;
    numberBg: string;
    numberText: string;
    tagBg: string;
    tagText: string;
    progressBg: string;
    progressFill: string;
  };
}

const COLUMNS: PathColumn[] = [
  {
    number: '01',
    title: 'Agent 底层逻辑',
    en: 'Agent Foundations',
    description: '理解 Agent 的上下文工程、协议层和运行时，而不停留在调用层。',
    paths: [
      {
        title: '核心概念',
        items: ['Context Engineering', 'Tool Calling', 'Agent Loop', 'MCP / A2A', 'Harness'],
      },
      {
        title: '深入方向',
        items: ['Workflow 与 Agent 的边界', '长任务上下文压缩', '失败与重试机制', '可观测性与成本'],
      },
    ],
    color: {
      bg: 'bg-accent-50/70',
      border: 'border-accent-200/40',
      numberBg: 'bg-accent-500',
      numberText: 'text-white',
      tagBg: 'bg-accent-100/80',
      tagText: 'text-accent-800',
      progressBg: 'bg-accent-200',
      progressFill: 'bg-accent-500',
    },
  },
  {
    number: '02',
    title: 'AI Native 构建',
    en: 'AI Native Building',
    description: '从想法到上线，建立人与 AI 的完整协作闭环。',
    paths: [
      {
        title: '协作工具',
        items: ['Readdy', 'GPT / OpenAgents', 'Cursor / Claude', 'React / Vite'],
      },
      {
        title: '构建流程',
        items: ['前后端接线', '数据库与权限', '测试与回归', '部署与迭代'],
      },
    ],
    color: {
      bg: 'bg-primary-50/70',
      border: 'border-primary-200/40',
      numberBg: 'bg-primary-500',
      numberText: 'text-white',
      tagBg: 'bg-primary-100/80',
      tagText: 'text-primary-800',
      progressBg: 'bg-primary-200',
      progressFill: 'bg-primary-500',
    },
  },
  {
    number: '03',
    title: '产品价值洞察',
    en: 'Product Discovery',
    description: '理解用户为什么需要一个产品，把技术能力转化为真实价值。',
    paths: [
      {
        title: '分析方法',
        items: ['用户问题识别', '需求拆解', '竞品分析', 'PRD 与方案'],
      },
      {
        title: '验证体系',
        items: ['POC / MVP / PMF', '用户反馈', '价值验证', '产品取舍'],
      },
    ],
    color: {
      bg: 'bg-secondary-50/70',
      border: 'border-secondary-200/40',
      numberBg: 'bg-secondary-500',
      numberText: 'text-white',
      tagBg: 'bg-secondary-100/80',
      tagText: 'text-secondary-800',
      progressBg: 'bg-secondary-200',
      progressFill: 'bg-secondary-500',
    },
  },
];

export default function LearningPathSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section id="learning" className="py-24 md:py-32 px-6 md:px-10 bg-background-100">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3 font-label">
            Learning Path
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-3">学习路径</h2>
          <p className="text-sm text-foreground-500 max-w-xl">
            不是课程列表，而是我正在持续构建的能力系统。每条路径都有明确的学习方向和阶段性验证。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {COLUMNS.map((col, idx) => (
            <div
              key={col.number}
              className={`group flex flex-col p-5 md:p-6 rounded-xl border ${col.color.border} ${col.color.bg} transition-all duration-[280ms] ease-out hover:-translate-y-1 ${
                isVisible
                  ? idx === 0
                    ? 'animate-fade-in-up'
                    : idx === 1
                      ? 'animate-fade-in-up-delay-1'
                      : 'animate-fade-in-up-delay-2'
                  : 'reveal-hidden'
              }`}
            >
              {/* Number + Title */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-9 h-9 rounded-lg ${col.color.numberBg} flex items-center justify-center text-sm font-bold ${col.color.numberText} flex-shrink-0`}
                >
                  {col.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground-950">{col.title}</h3>
                  <p className="text-[11px] text-foreground-500 font-label tracking-wide uppercase">
                    {col.en}
                  </p>
                </div>
              </div>

              <p className="text-sm text-foreground-600 leading-relaxed mb-5">
                {col.description}
              </p>

              {/* Progress bar */}
              <div className={`w-full h-[3px] rounded-full ${col.color.progressBg} mb-5`}>
                <div
                  className={`h-full rounded-full ${col.color.progressFill} transition-all duration-700`}
                  style={{ width: idx === 0 ? '40%' : idx === 1 ? '55%' : '35%' }}
                />
              </div>

              {/* Path groups */}
              {col.paths.map((group) => (
                <div key={group.title} className="mb-4">
                  <p className="text-[11px] text-foreground-500 font-medium mb-2.5 tracking-wide uppercase border-b border-background-200/40 pb-2">
                    {group.title}
                  </p>
                  <div className="space-y-1.5">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 pl-1">
                        <span className={`w-1 h-1 rounded-full ${col.color.numberBg} flex-shrink-0`} />
                        <span className="text-xs text-foreground-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}