# THE SILEN TIMES · 个人主页

天笑星辰（Silen）的报纸杂志风个人站点，部署于 [silenvale.github.io](https://silenvale.github.io)。

## 本地开发

```bash
npm install
npm run dev
```

## 构建与部署

推送至 `main` 分支后，GitHub Actions 会自动构建 `out/` 并部署到 GitHub Pages。

```bash
npm run build    # 本地预览构建结果
npm run preview  # 预览 out/ 目录
```

## 更新内容

- 个人资料与项目数据：`src/data/profile.ts`
- 页面组件：`src/pages/home/components/`
- 静态资源（头像、简历 PDF）：`public/`

## 技术栈

React 19 · Vite · TypeScript · Tailwind CSS
