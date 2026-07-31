import { useState, useCallback, useRef } from 'react';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

/* ======== Tab types ======== */

type ProjectTab = 'experience-card' | 'douyin-skill' | 'knowledge-system';

interface TabItem {
  key: ProjectTab;
  label: string;
  en: string;
}

const TABS: TabItem[] = [
  { key: 'experience-card', label: 'Experience Card', en: 'AI 产品' },
  { key: 'douyin-skill', label: '抖音调研 Skill', en: '数据工作流' },
  { key: 'knowledge-system', label: '知识库系统', en: '协作系统' },
];

/* ======== Experience Card Content ======== */

const EC_PIPELINE = [
  '真实经历', '五问结构化', 'AI 整理', '作者确认', '经验卡发布', '情境试用', '反馈回流',
];

const EC_TECH = ['React', 'Vite', 'Supabase', 'Dify', 'Cloudflare / Vercel'];

function ExperienceCardContent() {
  return (
    <div className="animate-fade-slide-in">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-medium rounded-md">
            AdventureX 2026
          </span>
          <span className="px-2.5 py-0.5 bg-secondary-50 text-secondary-700 text-[11px] font-medium rounded-md">
            已验证
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground-950 mb-3">
          Experience Card · 让经验成为彼此的下一步
        </h3>
        <p className="text-sm text-foreground-600 leading-relaxed max-w-3xl">
          一个把真实经历整理成结构化经验卡，并允许读者带着自己的具体情境进行试用和反馈的 AI 产品。AdventureX 2026 期间完成。
        </p>
      </div>

      {/* Pipeline */}
      <div className="mb-8 p-5 bg-background-50 rounded-xl border border-background-200/40">
        <h4 className="text-xs font-semibold text-foreground-600 mb-4 tracking-wide uppercase">核心流程</h4>
        <div className="flex flex-wrap items-center gap-2">
          {EC_PIPELINE.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-2 bg-background-100 border border-background-200/40 rounded-lg text-sm text-foreground-700 whitespace-nowrap">
                {step}
              </div>
              {i < EC_PIPELINE.length - 1 && (
                <i className="ri-arrow-right-line text-foreground-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech + Link */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {EC_TECH.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] text-foreground-600 bg-background-100 border border-background-200/40 rounded-md whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href="https://experience-card-adventurex-2026.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-foreground-950 text-background-50 text-sm font-medium rounded-lg cursor-pointer transition-all duration-[280ms] ease-out hover:-translate-y-[2px] active:scale-[0.97] whitespace-nowrap"
        >
          查看项目
          <span className="inline-block transition-transform duration-[280ms] group-hover:translate-x-[3px]">
            <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
          </span>
        </a>
      </div>
    </div>
  );
}

/* ======== Douyin Skill Content ======== */

const DS_FLOW = [
  { label: '搜索账号', icon: 'ri-search-line' },
  { label: '抓取作品', icon: 'ri-video-line' },
  { label: '筛选样本', icon: 'ri-filter-line' },
  { label: '批量下载', icon: 'ri-download-line' },
  { label: '抓取评论', icon: 'ri-message-3-line' },
  { label: 'ASR 转写', icon: 'ri-mic-line' },
  { label: 'Excel 输出', icon: 'ri-file-excel-line' },
  { label: '分析报告', icon: 'ri-article-line' },
];

const DS_TECH = ['Python', 'TikHub', 'ASR', '数据处理', 'Excel'];

function DouyinSkillContent() {
  return (
    <div className="animate-fade-slide-in">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-secondary-50 text-secondary-700 text-[11px] font-medium rounded-md">
            已验证工作流
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground-950 mb-3">
          抖音账号调研 Skill · 把重复研究变成可复用工作流
        </h3>
        <p className="text-sm text-foreground-600 leading-relaxed max-w-3xl">
          将账号搜索、作品抓取、评论采集、样本下载、语音转文字和结构化 Excel 输出串成一条可复用的研究流程，面向内容研究和账号对标场景。
        </p>
      </div>

      {/* Flow diagram */}
      <div className="mb-8 p-5 bg-background-50 rounded-xl border border-background-200/40">
        <h4 className="text-xs font-semibold text-foreground-600 mb-5 tracking-wide uppercase">研究流程</h4>
        <div className="hidden md:flex flex-wrap items-center gap-2">
          {DS_FLOW.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2.5 bg-background-100 border border-background-200/40 rounded-lg whitespace-nowrap">
                <div className="w-7 h-7 rounded-md bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className={`${step.icon} text-primary-500 text-xs`} />
                </div>
                <span className="text-sm text-foreground-700">{step.label}</span>
              </div>
              {i < DS_FLOW.length - 1 && (
                <i className="ri-arrow-right-line text-foreground-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden space-y-2">
          {DS_FLOW.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2.5 bg-background-100 border border-background-200/40 rounded-lg flex-1">
                <div className="w-7 h-7 rounded-md bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className={`${step.icon} text-primary-500 text-xs`} />
                </div>
                <span className="text-sm text-foreground-700">{step.label}</span>
              </div>
              {i < DS_FLOW.length - 1 && (
                <i className="ri-arrow-down-line text-foreground-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div className="flex flex-wrap items-center gap-2">
        {DS_TECH.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] text-foreground-600 bg-background-100 border border-background-200/40 rounded-md whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ======== Knowledge System Content ======== */

const KS_LAYERS = [
  {
    title: 'Identity · 身份',
    items: ['SOUL', 'USER', '目标、偏好、能力和长期方向'],
    color: 'border-l-primary-500',
  },
  {
    title: 'Rules · 规则',
    items: ['PROCEDURES', 'AGENTS', '协作规则、事实边界、工具选择'],
    color: 'border-l-accent-500',
  },
  {
    title: 'Knowledge · 知识',
    items: ['INDEX', 'Owner / Builder / Influencer', '课程、项目、工具、方法论'],
    color: 'border-l-secondary-500',
  },
  {
    title: 'Operations · 行动',
    items: ['中控台', '本周重点', '项目工作台', '操作日志', '复盘记录'],
    color: 'border-l-foreground-500',
  },
];

function KnowledgeSystemContent() {
  return (
    <div className="animate-fade-slide-in">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-accent-50 text-accent-700 text-[11px] font-medium rounded-md">
            持续迭代
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground-950 mb-3">
          个人知识库与 AI 协作系统
        </h3>
        <p className="text-sm text-foreground-600 leading-relaxed max-w-3xl">
          通过 SOUL、USER、PROCEDURES、AGENTS、INDEX、中控台、项目档案和工具目录组织长期协作。让 AI 先读取上下文，再按规则协作、调用资料、记录验证并持续更新。
        </p>
      </div>

      {/* 4-layer stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {KS_LAYERS.map((layer) => (
          <div
            key={layer.title}
            className={`p-4 bg-background-50 border border-background-200/40 rounded-xl border-l-[3px] ${layer.color}`}
          >
            <h4 className="text-sm font-semibold text-foreground-900 mb-2">{layer.title}</h4>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-[11px] text-foreground-600 bg-background-100 border border-background-200/40 rounded-md whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Emphasis */}
      <div className="p-4 bg-primary-50 rounded-xl border border-primary-100/50">
        <p className="text-sm text-primary-800 leading-relaxed">
          这不是一个"大文件夹"，而是一套能让 AI 理解我、按规则协作、调用资料、记录变化并持续成长的个人工作系统。
        </p>
      </div>
    </div>
  );
}

/* ======== Projects Section ======== */

export default function ProjectsSection() {
  const { ref, isVisible } = useRevealAnimation();
  const [activeTab, setActiveTab] = useState<ProjectTab>('experience-card');
  const [pending, setPending] = useState(false);
  const tabRefs = useRef<Map<ProjectTab, HTMLButtonElement>>(new Map());

  const switchTab = useCallback(
    (tab: ProjectTab) => {
      if (tab === activeTab || pending) return;
      setPending(true);
      setTimeout(() => {
        setActiveTab(tab);
        setPending(false);
      }, 220);
    },
    [activeTab, pending]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, tab: ProjectTab) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchTab(tab);
      }
    },
    [switchTab]
  );

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10 bg-background-50">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-10 ${isVisible ? 'animate-fade-in-up' : 'reveal-hidden'}`}>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3 font-label">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-3">项目</h2>
          <p className="text-sm text-foreground-500 max-w-xl">
            不是作品墙，而是真实产品构建的完整叙事。每个项目都有起点问题、核心方案和已验证的闭环。
          </p>
        </div>

        {/* Tab bar — desktop */}
        <div className={`hidden md:flex items-center gap-1 mb-8 border-b border-background-200/50 pb-0 ${isVisible ? 'animate-fade-in-up-delay-1' : 'reveal-hidden'}`}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.key, el);
                }}
                onClick={() => switchTab(tab.key)}
                onKeyDown={(e) => handleKeyDown(e, tab.key)}
                tabIndex={0}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-t-lg cursor-pointer transition-all duration-[280ms] ease-out whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50 ${
                  isActive
                    ? 'text-primary-600 bg-background-50'
                    : 'text-foreground-500 hover:text-foreground-800 hover:bg-background-100/60'
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-xs text-foreground-400">{tab.en}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab bar — mobile */}
        <div className={`md:hidden flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 mb-8 ${isVisible ? 'animate-fade-in-up-delay-1' : 'reveal-hidden'}`}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => switchTab(tab.key)}
                onKeyDown={(e) => handleKeyDown(e, tab.key)}
                tabIndex={0}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-full cursor-pointer transition-all duration-[280ms] ease-out whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-500 border border-background-200/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content area with transition */}
        <div className={`min-h-[320px] md:min-h-[280px] transition-all duration-[220ms] ease-out ${isVisible ? 'animate-fade-in-up-delay-2' : 'reveal-hidden'} ${pending ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
          {activeTab === 'experience-card' && <ExperienceCardContent />}
          {activeTab === 'douyin-skill' && <DouyinSkillContent />}
          {activeTab === 'knowledge-system' && <KnowledgeSystemContent />}
        </div>
      </div>
    </section>
  );
}