export const PROFILE = {
  name: '天笑星辰',
  alias: 'Silen',
  handle: 'SilenVale',
  title: '产品工程师',
  subtitle: 'Agent 产品架构 · AI 工作流 · Next.js/React POC',
  tagline:
    '将用户流程转译为 Agent 引导、CLI/接口 Contract、前端 POC 与可验收发布链路的产品工程师。',
  location: '武汉 · 华中科技大学',
  contact: {
    email: '2983155117@qq.com',
    github: 'https://github.com/SilenVale',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/674d652d000000001d02ed1b',
    resume: '/resume-silen-product-engineer.pdf',
  },
  education: {
    school: '华中科技大学',
    major: '计算机科学与技术',
    period: '2024.09 — 2028.06（预计）',
    gpa: 'GPA 86+ / 100（前 30%）',
    english: 'CET-4 500+',
  },
  honors: [
    'AdventureX 2026 小红书 Build in Public 赛道二等奖',
    '数学建模竞赛省一等奖',
  ],
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  tags: string[];
  summary: string;
  highlights: string[];
  result: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: '猴子说话',
    role: 'AI 产品工程师实习生',
    period: '2026.06 — 至今',
    project: 'ViceMe · AI Native Creator Platform',
    tags: ['PRODUCT ARCHITECTURE', 'AGENT CONTRACT', 'REACT POC'],
    summary:
      '面向创作者生态的 Skill 超级 GitHub——沉淀和分发 Skill、服务型 Skill 与 Vibe Coding Web 应用。',
    highlights: [
      '梳理官网→成为创作者→个人名片→作品详情→创作者中心全链路，定义申请中与审核通过两种状态下的权限边界。',
      '将资料读取、缺失补问、做同款/导入、预览、确认、上传发布拆为 Agent/CLI Contract。',
      '在官方 Next.js/React 工程实现官网玩法演示及三类隔离前端 POC，完成 13 个个人提交。',
    ],
    result:
      '交付 MD/Skill 分层、状态/权限规则与开发交接；官网版本通过 typecheck、production build 及 350 项测试回归；完成桌面端与 390px H5 主路径检查。',
  },
  {
    company: 'NextChat 企业版',
    role: '数据增长与运维产品设计',
    period: '2026.07 — 至今',
    project: 'NextChat Enterprise',
    tags: ['GROWTH', 'METRICS', 'RELIABILITY'],
    summary:
      '基于 8 万+ Stars 开源项目的 enterprise 版本，以近 7 日真实经营基线定义运营体系。',
    highlights: [
      '定义登录→首页→套餐→下单→支付全链路埋点与漏斗指标体系。',
      '设计支付失败挽回、高购买意向、低余额等 6 类自动化邮件策略（P1—P6 优先级）。',
      '定义模型运维"每日扫描→审核→试跑→同步→下架"受控流程与 P0 异常巡检闭环。',
    ],
    result:
      '完成漏斗指标字典、6 类生命周期触达规则与异常证据模板；以 1,454 UV → 19 笔成功充值作为优化基线。',
  },
];

export interface ProjectItem {
  id: string;
  headline: string;
  dateline: string;
  deck: string;
  tags: string[];
  body: string[];
  role?: string;
  link?: string;
  badge?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'experience-card',
    headline: 'Experience Card：让经验成为彼此的下一步',
    dateline: '2026.07 · AdventureX 2026 · 两人团队',
    deck: 'AI 经验共创产品 · 小红书 Build in Public 赛道二等奖',
    tags: ['React', 'Vite', 'Supabase', 'Dify', 'Cloudflare'],
    badge: '二等奖',
    body: [
      '观察到经验分享大量存在，但读者难判断其是否适用于自身情境；提出让经验被结构化、可情境试用、能回流反馈的差异化方向。',
      '定义"用户五问 → AI 整理 → 作者确认 → 匿名情境试用 → 反馈回流"三层闭环；主动不做招聘、支付和自动匹配。',
      '作为产品负责人，将用户输入、模型输出、作者确认和前端展示收敛为可校验的字段与状态，完成正式提交与 Demo 验收。',
    ],
    role: '产品负责人 · 体验闭环 · 前端细节 · 最终验收',
    link: 'https://experience-card-adventurex-2026.pages.dev/',
  },
  {
    id: 'silen-workbench',
    headline: 'Silen AI Workbench：本地优先的个人 AI 工作台',
    dateline: '2026.07 — 至今 · 独立开发',
    deck: 'DeepSeek Harness + Obsidian 知识库 · 可追溯的内容生产链路',
    tags: ['React', 'Node', 'Obsidian', 'Agent Contract', 'JSON Schema'],
    body: [
      '连接 Obsidian 本地 Vault，覆盖文档处理与自媒体内容生产的个人 AI 工作台。',
      '提供素材解读问答及"小红书笔记 → 1080×1440 图文卡片 HTML"生成能力，以结构化输出契约约束模型结果。',
      '沉淀启动契约、Source of Truth、工具最小权限与人工确认留痕，降低 Agent 操作中的事实漂移风险。',
    ],
    role: '独立开发 · 产品架构 · 工程实现',
  },
  {
    id: 'lottery-bot',
    headline: '彩票打印机器人：不用盯着也不会错的打票机',
    dateline: '2026.04 — 2026.06 · 学校创业实验室 · 三人团队',
    deck: 'AI 软硬件一体化 · 产品负责人',
    tags: ['用户访谈', 'MVP', '软硬件架构', 'OCR 闭环'],
    body: [
      '访谈 3 家彩票站业主，将定位从"更快打票"修正为"高峰期无需持续盯守、仍能避免错单"。',
      'MVP 聚焦"上传方案 → AI 解析 → 业主确认 → 自动打票 → OCR 核验 → 完成通知"闭环。',
      '交付 3 家访谈记录、需求文档、业主端 7 页原型，并与团队跑通真机联调完整打票流程。',
    ],
    role: '团队负责人 · 需求 · 产品架构 · 功能拆解 · 验收',
  },
  {
    id: 'douyin-skill',
    headline: '抖音账号调研 Skill：把重复研究变成可复用工作流',
    dateline: '2026 · 已验证工作流',
    deck: '数据工作流 · TikHub + ASR + Excel',
    tags: ['Python', 'TikHub', 'ASR', '数据处理'],
    body: [
      '将账号搜索、作品抓取、评论采集、样本下载、语音转文字和结构化 Excel 输出串成一条可复用的研究流程。',
      '面向内容研究和账号对标场景，把一次性调研变成可重复执行的 Skill 工作流。',
    ],
  },
  {
    id: 'knowledge-system',
    headline: '个人知识库与 AI 协作系统',
    dateline: '持续迭代',
    deck: '协作系统 · SOUL / USER / AGENTS / 中控台',
    tags: ['Markdown', 'SOP', 'Context Engineering', '项目档案'],
    body: [
      '通过 SOUL、USER、PROCEDURES、AGENTS、INDEX、中控台组织长期协作。',
      '让 AI 先读取上下文，再按规则协作、调用资料、记录验证并持续更新——不是大文件夹，而是可成长的个人工作系统。',
    ],
  },
];

export const BUILD_LOG = [
  {
    date: '2026.07',
    headline: 'AdventureX · Experience Card 公开构建',
    excerpt: '在小红书同步记录从问题收窄、功能取舍到部署上线的完整过程，最终获 Build in Public 赛道二等奖。',
  },
  {
    date: '2026.07',
    headline: 'Build in Public 复盘沉淀',
    excerpt: '「真实过程比完成宣言更有说服力」——遇到问题、做出取舍、交付可操作版本、接受反馈。',
  },
  {
    date: '2026.08',
    headline: '个人 IP 内容矩阵',
    excerpt: '定位"985 CS 学生的 AI 产品经理求职与副业探索"，累计获赞与收藏约 300，以评论和私信作为轻量用户研究输入。',
  },
  {
    date: '2026.09',
    headline: '个人主页改版',
    excerpt: '将简历叙事与公开构建记录整合为可快速理解的个人刊物式主页。',
  },
];

export const BEYOND = [
  {
    title: '内容创作与公开表达',
    copy: '在小红书、抖音记录 AI 产品学习、项目构建和双线探索的真实过程。',
  },
  {
    title: '结构化知识管理',
    copy: '维护个人 AI 协作知识库，用 SOUL、USER、SOP 让上下文可被复用。',
  },
  {
    title: '数学建模',
    copy: '省一等奖。习惯用结构化方法拆解复杂问题，思维也用在产品和工程判断里。',
  },
  {
    title: '持续学习与复盘',
    copy: '并行推进 AI 产品经理、Agent 工程和个人构建三条学习线。',
  },
];

export const SKILLS = {
  product: ['需求拆解', '竞品研究', '用户访谈', 'MVP/P0 范围', '流程/状态/权限', '原型', '指标验收'],
  ai: ['LLM API', 'Dify Workflow', 'Context Engineering', 'Agent Workflow', 'MD/Skill/CLI Contract', 'RAG 基础'],
  engineering: ['React/Vite', 'Next.js', 'TypeScript', 'Supabase', 'Node', 'Python', 'Git/PR', 'Codex', 'Cursor', 'Stitch'],
};
