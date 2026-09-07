export const PROFILE = {
  name: '天笑星辰',
  alias: 'Silen',
  handle: 'SilenVale',
  title: '产品工程师',
  headline: '产品工程师，正在把 AI 想法做成真实产品。',
  subtitle: '从用户问题、Agent 工作流到可验证的前端体验。',
  credential: '华中科技大学 CS｜ViceMe AI 产品工程师实习生',
  roleLine: 'Agent 产品架构 · AI 工作流 · Next.js/React POC',
  methodLine:
    '将用户流程转译为 Agent 引导、CLI/接口 Contract、前端 POC 与可验收发布链路的产品工程师。',
  intro:
    '我在 ViceMe 设计创作者与作品发布体验，也独立构建 AI 产品原型。关心的不只是模型能力，而是一个想法如何被验证、做出来，并真正被人使用。',
  positioning:
    '用产品判断定义问题，用 Agent 工作流组织过程，用前端 POC 验证结果。',
  location: '武汉 · 华中科技大学',
  highlights: [
    'AdventureX 2026 小红书 Build in Public 赛道二等奖',
    '数学建模竞赛省一等奖',
  ],
  contact: {
    phone: '19971128060',
    email: '2983155117@qq.com',
    github: 'https://github.com/SilenVale',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b',
    resume: '/resume-silen-product-engineer.pdf',
  },
  education: {
    school: '华中科技大学',
    major: '计算机科学与技术',
    degree: '本科',
    period: '2024.09 — 2028.06（预计）',
    gpa: 'GPA 86+ / 100（前 30%）',
    english: 'CET-4 500+',
  },
  contactIntents: ['AI 产品工程实习', '共创项目', 'Agent 产品交流'],
};

export interface ResumeBlock {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  tags: string[];
  intro: string;
  blocks: ResumeBlock[];
  result: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: '猴子说话（ViceMe）',
    role: 'AI 产品工程师实习生',
    period: '2026.06 — 至今',
    project: 'ViceMe｜AI Native 创作者与作品平台',
    tags: ['PRODUCT ARCHITECTURE', 'AGENT CONTRACT', 'REACT POC'],
    intro:
      'ViceMe｜AI Native Creator Platform / "Skill 超级 GitHub"。面向国内及海外创作者生态，沉淀和分发 Skill、服务型 Skill 与 Vibe Coding Web 应用；面向人类用户规划发现、体验与交易承接，为 Agent 提供结构化、可发现的能力描述。',
    blocks: [
      {
        title: '我的职责',
        paragraphs: [
          '官网、创作者与作品体验页面产品 Owner × 前端 POC 实现者：主导"作品定义—Agent 发布—页面承接—前端验证"的产品工程链路。',
        ],
      },
      {
        title: '创作者链路与状态架构',
        paragraphs: [
          '梳理官网→成为创作者→个人名片→作品详情/作品集→创作者中心路径；定义同一创作者路由在"申请中仅本人可见/可编辑"与"审核通过自动公开"两种状态下的展示与权限边界，区分公开资料/作品与订单、收益、买方等私有经营数据。',
        ],
      },
      {
        title: 'Agent / CLI 发布 Contract',
        paragraphs: [
          '将资料读取、缺失补问、做同款/导入、本机预览、用户确认、上传发布拆为明确步骤；规定 Agent 负责引导，CLI/页面负责执行与展示，平台审核负责最终公开；登录、申请、发布、改价、支付等写操作均保留用户确认节点。',
        ],
      },
      {
        title: 'Skill 流程核对与开发交接',
        paragraphs: [
          '对 D/dev 基线进行只读勘查，核对 Skill、CLI、Bonjour 模板与发布/回滚约束；识别可仅通过 Skill 调整的引导，以及需要页面/后端支持的共用草稿、权限与路由能力缺口，输出低保真、状态规则和开发交接，进入 dev→PR 协作流程。',
        ],
      },
      {
        title: 'Next.js/React POC 与验收',
        paragraphs: [
          '以 Stitch 完成创作者中心多角色原型与页面交接；将原型转译为页面 Contract，并在官方 Next.js/React 工程实现官网玩法演示及 Skill、服务型 Skill、Vibe 网站三类隔离前端 POC，补齐空态、媒体展示、状态承接与 PC/H5 主路径。',
        ],
      },
    ],
    result:
      '完成 ViceMe 官网、创作者申请与个人名片、作品详情页等关键体验的产品设计与前端 POC；交付 MD/Skill 分层、状态/权限规则、低保真和开发交接，形成公开内容与受控写操作的边界。在官方 Next.js/React 工程形成 13 个个人提交，完成桌面端及 390px H5 主路径检查；其中官网相关版本据项目记录通过 TypeScript typecheck、production build 及 92 个测试文件 / 350 项既有测试回归。',
  },
  {
    company: 'NextChat 企业版',
    role: '数据增长、生命周期运营与模型运维产品设计',
    period: '2026.07 — 至今',
    project: 'NextChat Enterprise',
    tags: ['GROWTH', 'METRICS', 'RELIABILITY'],
    intro:
      '基于 8 万+ GitHub Stars 开源项目 NextChat 的企业化 AI 产品版本；以平台近 7 日真实经营基线——登录页 UV 1,454、登录成功率 36.11%、套餐页访问 276、成功充值订单 19、充值金额 US$296、客单价 US$15.58——定义从埋点、漏斗诊断到支付、邮件与模型健康的首版运营体系。',
    blocks: [
      {
        title: '我的职责',
        paragraphs: ['增长与运维产品 Owner：亲自定义数据漏斗、生命周期运营、模型运维与异常验证闭环。'],
      },
      {
        title: '漏斗与埋点产品定义',
        paragraphs: [
          '定义登录→首页→套餐页→下单→支付全链路事件、前后端数据口径与埋点需求；围绕登录流失、价格页犹豫与支付失败设计可定位的指标体系，并与研发对接事件采集与看板呈现。',
        ],
      },
      {
        title: '生命周期运营',
        paragraphs: [
          '设计支付失败挽回、高购买意向、低余额、首充激活、新模型通知、沉睡召回 6 类自动化邮件策略；定义 P1—P6 优先级、24h/7d 频控、用户分群、触发数据源与唯一转化 KPI。',
        ],
      },
      {
        title: '模型运维产品设计',
        paragraphs: [
          '定义"每日扫描→去重→人工审核→供应商试跑→前端同步→下架/回滚"的受控流程，补充管理员权限、二次确认、异常通知与操作日志要求。',
        ],
      },
      {
        title: '异常巡检闭环',
        paragraphs: [
          '定义"看板异常发现→人工登录/对话/支付复现→Bug 证据提交→研发定位"机制，覆盖流量归零、登录/支付成功率归零、可用模型数异常等 P0 风险。',
        ],
      },
    ],
    result:
      '完成首版漏斗指标字典、埋点需求、6 类生命周期触达规则、模型健康状态与异常证据模板；以现有 1,454 UV → 19 笔成功充值订单的漏斗作为后续优化基线，项目当前处于测试与策略验证阶段。',
  },
];

export interface ProjectCase {
  id: string;
  tabLabel: string;
  headline: string;
  dateline: string;
  badge?: string;
  blocks: ResumeBlock[];
  result?: string;
  role?: string;
  links: { label: string; url: string }[];
  tags: string[];
}

export const SELECTED_WORK: ProjectCase[] = [
  {
    id: 'experience-card',
    tabLabel: 'Experience Card',
    headline: 'Experience Card · AI 经验共创产品',
    dateline: '2026.07 · AdventureX 2026 黑客松 · 两人团队',
    badge: 'Build in Public 赛道二等奖',
    blocks: [
      {
        title: '问题判断与产品定位',
        paragraphs: [
          '观察到学习、求职、工作经验分享大量存在，但读者难判断其是否适用于自身情境；调研 Delphi、XHuman、小红书 RED Skill 与知识付费平台，判断"复刻人、撮合、分发"已有覆盖，提出让经验被结构化、可情境试用、能回流反馈的差异化方向。',
        ],
      },
      {
        title: 'MVP 与机制设计',
        paragraphs: [
          '定义"用户五问输入 → AI 将经验整理为前提/边界/动作 → 作者确认发布 → 他人匿名情境试用 → 反馈回流"的三层闭环；设计发布门禁、生成失败兜底与匿名试用，验证"经验从内容变能力"这一核心假设。',
        ],
      },
      {
        title: '范围取舍与工程落地',
        paragraphs: [
          '基于竞品白区、支付合规与 48 小时验证边界，主动不做招聘、支付和自动匹配；使用 React/Vite + Supabase（Auth/Postgres/RLS/Edge Functions）+ Dify Workflow + Cloudflare，以结构化 JSON 契约对齐协作方并交付可访问 Demo。',
        ],
      },
      {
        title: '验收与结果',
        paragraphs: [
          '按"登录 → 生成 → 确认 → 发布 → 试用 → 反馈"真实用户路径逐项验收，完成 AdventureX 2026 小红书 Build in Public 赛道正式提交。（独立 Web 产品，未接入小红书 API）',
        ],
      },
    ],
    role: '作为产品负责人，将用户输入、模型输出、作者确认和前端展示收敛为可校验的字段与状态；在两人团队中负责方向判断、体验闭环、前端细节与最终验收。',
    links: [{ label: '查看 Demo', url: 'https://experience-card-adventurex-2026.pages.dev/' }],
    tags: ['React', 'Vite', 'Supabase', 'Dify', 'Cloudflare'],
  },
  {
    id: 'silen-workbench',
    tabLabel: 'AI Workbench',
    headline: 'Silen AI Workbench · 本地优先个人 AI 工作台',
    dateline: '2026.07 — 至今 · 独立开发',
    blocks: [
      {
        title: '产品定位',
        paragraphs: [
          '基于 DeepSeek Harness 的 Agent 运行与工具层、连接 Obsidian 本地知识库，构建覆盖文档处理与自媒体内容生产的个人 AI 工作台；面向课程讲义、逐字稿、笔记与运营素材提供可追溯的处理链路。',
        ],
      },
      {
        title: '能力与数据契约',
        paragraphs: [
          '将文档格式化为 Wiki 知识结构与严格 JSON；提供素材解读问答及"小红书笔记 → 1080×1440 图文卡片 HTML"生成能力，以结构化输出契约和服务端校验约束模型结果。',
        ],
      },
      {
        title: 'Agent 可靠性设计',
        paragraphs: [
          '沉淀启动契约（角色/上下文/边界/输出格式）、Source of Truth（最终事实表为唯一权威）、工具最小权限、人工确认与执行留痕；区分已验证与未验证信息，降低 Agent 在个人知识库操作中的事实漂移风险。',
        ],
      },
      {
        title: '工程与真实使用',
        paragraphs: [
          '使用 React + Node 实现，直接读取 Obsidian Markdown Vault；采用本地优先、仅监听回环地址的隐私边界，已作为个人知识库管理和小红书内容生产工具持续使用。（本地运行，公开演示数据均为合成数据）',
        ],
      },
      {
        title: '工作流沉淀',
        paragraphs: [
          '将"原始素材 → 结构化事实 → 可编辑内容行 → 图文卡片"拆为可复用流水线；通过明确输入、输出、校验和确认点，把一次性 Prompt 使用转为可复查、可迭代的个人生产系统。',
        ],
      },
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/SilenVale' }],
    tags: ['React', 'Node', 'Obsidian', 'DeepSeek Harness', 'Agent Contract'],
  },
  {
    id: 'lottery-bot',
    tabLabel: '彩票打印机器人',
    headline: '彩票打印机器人 · AI 软硬件一体化产品',
    dateline: '2026.04 — 2026.06 · 学校创业实验室 · 三人团队 / 产品负责人',
    blocks: [
      {
        title: '调研与重新定义问题',
        paragraphs: [
          '访谈 3 家彩票站业主，归纳人工依赖、错单风险、高峰拥堵、需求变化与服务时间等六类痛点；发现核心不是"更快打票"，而是高峰期业主无需持续盯守、仍能避免错单，进而将定位修正为"不用盯着也不会错的打票机"。',
        ],
      },
      {
        title: 'MVP 与系统架构',
        paragraphs: [
          '规划 POC → MVP → PMF 三阶段；MVP 聚焦"上传方案 → AI 解析 → 业主确认 → 自动打票 → OCR 核验 → 完成通知"，不做会员、营销与多店管理；设计业主端 App、树莓派/灵巧手/双摄像头/报警设备及 AI 意图理解、OCR 闭环核验的三层架构。',
        ],
      },
      {
        title: '个人交付',
        paragraphs: [
          '作为团队负责人负责需求、目标、产品架构、功能拆解与验收；交付 3 家访谈记录、含痛点量化与 SMART 指标的需求文档、业主端 7 页面原型与验收清单，并与团队跑通真机联调/仿真原型的完整打票流程。',
        ],
      },
      {
        title: '风险控制',
        paragraphs: [
          '遵循非侵入式、拟人化操作、闭环控制与 P0—P3 多重预警原则；将业主确认、OCR 核验、报警与取消任务设计为人机协作节点，降低自动化设备在高风险场景中误执行的可能。',
        ],
      },
    ],
    links: [],
    tags: ['用户访谈', 'MVP', '软硬件架构', 'OCR 闭环', '产品负责人'],
  },
];

export const SUPPLEMENTARY = {
  title: '小红书个人 IP 运营与用户需求验证',
  paragraphs: [
    '定位"985 CS 学生的 AI 产品经理求职与副业探索实践"，独立完成选题、封面、图文结构与持续发布；以收藏、评论、私信和真实提问作为轻量用户研究输入，反推选题、表达与产品问题，账号累计获赞与收藏约 300。',
  ],
};

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
    evidence: 'Experience Card 范围取舍 · ViceMe 创作者链路 · NextChat 漏斗基线 · 彩票机器人问题重新定义',
  },
  {
    title: 'Agent 工作流',
    en: 'Agent Workflow',
    description: '设计 Agent/CLI Contract，明确引导、执行、确认与留痕的分工。',
    evidence: 'ViceMe 发布 Contract · AI Workbench 启动契约 · Skill/CLI 流程核对',
  },
  {
    title: '前端验证',
    en: 'Frontend POC',
    description: '用 React/Next.js 把方案做成可交互、可验收的原型与主路径。',
    evidence: 'Experience Card Demo · ViceMe 13 PR / 350 项测试 · H5 390px 路径检查',
  },
];

export const SKILLS = {
  product: [
    '需求拆解',
    '竞品研究',
    '用户访谈',
    'MVP/P0 范围设计',
    '流程/状态/权限',
    '原型',
    '指标与体验验收',
  ],
  ai: [
    'LLM API',
    'Dify Workflow',
    '结构化 JSON',
    'Prompt / Context Engineering',
    'RAG 基础',
    'Tool Use',
    'Agent Workflow',
    'MD/Skill/CLI Contract',
    '权限与人工确认',
  ],
  engineering: [
    'React/Vite',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Node',
    'Python',
    'Git/PR',
    'Codex',
    'Claude Code',
    'Cursor',
    'Stitch',
    'Readdy.ai',
    'Figma',
    '墨刀',
  ],
};

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
    takeaway:
      '在小红书同步记录从问题收窄、功能取舍到部署上线的完整过程；真实过程比完成宣言更有说服力，最终获 Build in Public 赛道二等奖。',
    link: { label: '查看 Demo', url: 'https://experience-card-adventurex-2026.pages.dev/' },
  },
  {
    date: '2026.07',
    headline: '为什么「不做清单」比「做清单」更重要',
    problem: 'AdventureX 期间，哪些功能看起来酷但会拖垮 MVP？',
    takeaway: '主动不做招聘、支付、自动匹配——把资源集中在「情境试用」这一核心假设上。',
  },
  {
    date: '2026.08',
    headline: '小红书 IP 作为轻量用户研究',
    problem: '没有预算做正式用户调研，如何获得真实反馈？',
    takeaway:
      '定位"985 CS 学生的 AI 产品经理求职与副业探索实践"，累计约 300 赞藏；以评论和私信作为选题与产品问题的轻量输入。',
    link: { label: '小红书主页', url: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b' },
  },
];

export const BEYOND = [
  { title: '内容表达', copy: '在小红书、抖音记录 AI 产品构建与学习过程。' },
  { title: '知识管理', copy: '维护结构化 AI 协作知识库（SOUL / USER / SOP / 中控台）。' },
  { title: '数学建模', copy: '省一等奖；用结构化方法拆解复杂问题。' },
];
