import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { NewspaperSection } from './NewspaperSection';

const COLUMNS = [
  {
    number: 'I',
    title: 'Agent 底层逻辑',
    en: 'Agent Foundations',
    description: '理解 Agent 的上下文工程、协议层和运行时，而不停留在调用层。',
    items: ['Context Engineering', 'Tool Calling', 'Agent Loop', 'MCP / A2A', 'Harness', 'Workflow 边界'],
    progress: 40,
  },
  {
    number: 'II',
    title: 'AI Native 构建',
    en: 'AI Native Building',
    description: '从想法到上线，建立人与 AI 的完整协作闭环。',
    items: ['GPT / Codex / Cursor', 'React / Next.js / Vite', 'Supabase 全栈', 'Contract 先行', '部署与迭代'],
    progress: 55,
  },
  {
    number: 'III',
    title: '产品价值洞察',
    en: 'Product Discovery',
    description: '理解用户为什么需要一个产品，把技术能力转化为真实价值。',
    items: ['用户问题识别', '需求拆解', '竞品分析', 'POC / MVP / PMF', '价值验证', '产品取舍'],
    progress: 35,
  },
];

export default function LearningPathSection() {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <NewspaperSection
      id="learning"
      kicker="Education · 学习专栏"
      title="学习路径"
      subtitle="Not a course list — an evolving capability system with clear directions and checkpoints"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {COLUMNS.map((col, idx) => (
          <div
            key={col.number}
            className={`np-card ${isVisible ? (idx === 1 ? 'animate-fade-in-up-delay-1' : 'animate-fade-in-up') : 'reveal-hidden'}`}
          >
            <div className="flex items-baseline gap-3 mb-3 border-b border-ink/10 pb-3">
              <span className="font-display text-3xl font-bold text-news-red">{col.number}</span>
              <div>
                <h3 className="font-display font-bold">{col.title}</h3>
                <p className="np-byline">{col.en}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink/75 mb-4">{col.description}</p>
            <div className="h-1 bg-ink/10 mb-4">
              <div className="h-full bg-news-red transition-all" style={{ width: `${col.progress}%` }} />
            </div>
            <ul className="space-y-1.5">
              {col.items.map((item) => (
                <li key={item} className="text-xs flex gap-2">
                  <span className="text-news-red">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </NewspaperSection>
  );
}
