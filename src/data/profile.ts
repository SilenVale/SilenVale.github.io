export const PROFILE = {
  name: '天笑星辰',
  alias: 'Silen',
  handle: 'SilenVale',
  title: '产品工程师',
  headline: '产品工程师，正在把 AI 想法做成真实产品。',
  subtitle: '从用户问题、Agent 工作流到可验证的前端体验。',
  credential: '华中科技大学 CS｜ViceMe AI 产品工程师实习生',
  intro:
    '我在 ViceMe 设计创作者与作品发布体验，也独立构建 AI 产品原型。关心的不只是模型能力，而是一个想法如何被验证、做出来，并真正被人使用。',
  positioning:
    '用产品判断定义问题，用 Agent 工作流组织过程，用前端 POC 验证结果。',
  location: '武汉 · 华中科技大学',
  highlights: [
    'AdventureX 2026 Build in Public 赛道二等奖',
    'ViceMe AI 产品工程师实习生',
  ],
  contact: {
    email: '2983155117@qq.com',
    github: 'https://github.com/SilenVale',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b',
    resume: '/resume-silen-product-engineer.pdf',
  },
  contactIntents: [
    'AI 产品工程实习',
    '共创项目',
    'Agent 产品交流',
  ],
};

export interface ProjectCase {
  id: string;
  tabLabel: string;
  headline: string;
  dateline: string;
  badge?: string;
  problem: string;
  actions: string[];
  result: string;
  links: { label: string; url: string }[];
  tags: string[];
}

export const SELECTED_WORK: ProjectCase[] = [
  {
    id: 'experience-card',
    tabLabel: 'Experience Card',
    headline: '让经验成为彼此的下一步',
    dateline: '2026.07 · AdventureX 2026 · 产品负责人',
    badge: '二等奖',
    problem: '经验分享很多，但读者很难判断一段经历是否适用于自己的情境。',
    actions: [
      '定义「五问输入 → AI 整理 → 作者确认 → 情境试用 → 反馈回流」闭环',
      '主动不做招聘、支付和自动匹配，聚焦 48 小时可验证的 MVP',
      '将用户输入、模型输出与前端状态收敛为可校验的字段契约',
    ],
    result: '完成 AdventureX 正式提交；Demo 走通登录、生成、发布、试用、反馈全路径。',
    links: [
      { label: '查看 Demo', url: 'https://experience-card-adventurex-2026.pages.dev/' },
    ],
    tags: ['React', 'Supabase', 'Dify'],
  },
  {
    id: 'viceme',
    tabLabel: 'ViceMe',
    headline: '创作者发布链路与 Agent Contract',
    dateline: '2026.06 — 至今 · 猴子说话 · AI 产品工程师实习生',
    problem: '创作者需要一条从「成为创作者」到「作品发布与承接」的完整路径，且 Agent 与页面必须分工清晰。',
    actions: [
      '梳理官网→申请→名片→作品详情→创作者中心全链路的状态与权限边界',
      '将读取、补问、预览、确认、发布拆为 Agent/CLI Contract',
      '在 Next.js/React 工程交付三类玩法的前端 POC，完成 13 个个人提交',
    ],
    result: '通过 typecheck、production build 及 350 项测试回归；桌面端与 390px H5 主路径验收完成。',
    links: [
      { label: 'GitHub', url: 'https://github.com/SilenVale' },
    ],
    tags: ['Next.js', 'Agent Contract', 'React POC'],
  },
  {
    id: 'silen-workbench',
    tabLabel: 'AI Workbench',
    headline: '本地优先的个人 AI 工作台',
    dateline: '2026.07 — 至今 · 独立开发',
    problem: '个人知识库操作需要可追溯的处理链路，Agent 不能随意改写事实或越权调用工具。',
    actions: [
      '连接 Obsidian Vault，设计「素材 → 结构化事实 → 内容 → 图文卡片」流水线',
      '以 JSON Schema 约束模型输出，区分已验证与未验证信息',
      '沉淀启动契约、Source of Truth 与人工确认留痕',
    ],
    result: '已作为个人知识库管理与小红书内容生产的日常工具持续使用。',
    links: [
      { label: 'GitHub', url: 'https://github.com/SilenVale' },
    ],
    tags: ['React', 'Node', 'Obsidian', 'Agent Contract'],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  leadResult: string;
  context: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: '猴子说话 · ViceMe',
    role: 'AI 产品工程师实习生',
    period: '2026.06 — 至今',
    project: 'AI Native Creator Platform',
    leadResult:
      '完成官网、创作者申请、个人名片与作品详情等关键体验的产品设计与前端 POC；350 项测试回归通过。',
    context: '面向创作者生态的 Skill 平台——沉淀和分发 Skill、服务型 Skill 与 Vibe Coding Web 应用。',
    highlights: [
      '定义「申请中仅本人可见」与「审核通过自动公开」两种状态下的展示与权限边界',
      '将 Agent 引导与 CLI/页面执行拆为 Contract：登录、发布、改价等写操作均保留用户确认节点',
    ],
  },
  {
    company: 'NextChat 企业版',
    role: '数据增长与运维产品设计',
    period: '2026.07 — 至今',
    project: 'NextChat Enterprise · 8 万+ Stars 开源项目的企业版',
    leadResult: '以 1,454 UV → 19 笔成功充值订单为漏斗基线，完成首版指标字典与 6 类生命周期触达规则。',
    context: '定义从埋点、漏斗诊断到支付挽回与模型运维的首版运营体系。',
    highlights: [
      '设计登录→套餐→下单→支付全链路埋点与可定位的指标体系',
      '定义模型运维「每日扫描→审核→试跑→同步→下架」受控流程与 P0 异常巡检闭环',
    ],
  },
];

export interface CapabilityItem {
  title: string;
  en: string;
  description: string;
  evidence: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: '产品判断',
    en: 'Product Judgment',
    description: '从用户问题出发，定义 P0 范围、流程/状态/权限与验收标准。',
    evidence: 'Experience Card 范围取舍 · ViceMe 创作者链路 · NextChat 漏斗基线',
  },
  {
    title: 'Agent 工作流',
    en: 'Agent Workflow',
    description: '设计 Agent/CLI Contract，明确引导、执行、确认与留痕的分工。',
    evidence: 'ViceMe 发布 Contract · AI Workbench 启动契约 · 抖音调研 Skill',
  },
  {
    title: '前端验证',
    en: 'Frontend POC',
    description: '用 React/Next.js 把方案做成可交互、可验收的原型与主路径。',
    evidence: 'Experience Card Demo · ViceMe 13 PR · H5 390px 路径检查',
  },
];

export interface BuildStory {
  date: string;
  headline: string;
  problem: string;
  takeaway: string;
  link?: { label: string; url: string };
}

export const BUILD_STORIES: BuildStory[] = [
  {
    date: '2026.07',
    headline: 'Experience Card 公开构建',
    problem: '如何在 48 小时内把「经验分享」做成可试用的产品，而不是 AI 总结工具？',
    takeaway: '真实过程比完成宣言更有说服力；最终获 Build in Public 赛道二等奖。',
    link: { label: '查看 Demo', url: 'https://experience-card-adventurex-2026.pages.dev/' },
  },
  {
    date: '2026.07',
    headline: '为什么不做清单比做清单更重要',
    problem: 'AdventureX 期间，哪些功能看起来酷但会拖垮 MVP？',
    takeaway: '主动不做招聘、支付、自动匹配——把资源集中在「情境试用」这一核心假设上。',
  },
  {
    date: '2026.08',
    headline: '小红书 IP 作为轻量用户研究',
    problem: '没有预算做正式用户调研，如何获得真实反馈？',
    takeaway: '累计约 300 赞藏；以评论和私信作为选题与产品问题的轻量输入，而非商业结论。',
    link: { label: '小红书主页', url: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b' },
  },
];

export const BEYOND = [
  { title: '内容表达', copy: '在小红书记录 AI 产品构建与学习过程。' },
  { title: '知识管理', copy: '维护结构化 AI 协作知识库（SOUL / USER / SOP）。' },
  { title: '数学建模', copy: '省一等奖；用结构化方法拆解复杂问题。' },
];
