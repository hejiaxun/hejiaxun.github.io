# 贺加勋的机器人研究与工程主页

This repository hosts the public source for [hejiaxun.github.io](https://hejiaxun.github.io).

## 信息架构

- **首页** — 研究定位与代表性成果。
- **学术研究** — 正式发表论文与公开项目解读。
- **项目** — 机器人研究、具身智能与软硬件系统。
- **经历** — 公开教育与研究经历。
- **简历** — 完成隐私和披露边界审查后的中英文简历入口。

首个完整项目页为已发表的 IEEE RA-L 绳张力状态估计工作，其他页面从经过核验且允许公开的材料逐步扩展。

## Public-content rules

- Do not publish company-confidential material, recruiting records, private contact information, or unapproved internal metrics.
- Clearly distinguish open-source reproduction from personal extensions.
- State maturity boundaries: simulator calibration is not policy Sim-to-Real deployment; estimator deployment is not ownership of the pre-existing controller.
- Keep claims traceable to a paper, released artifact, or private evidence ledger before publication.

## 版式与依赖

网站采用本地化的轻量 Jekyll 学术主页版式，视觉上参考 [al-folio](https://github.com/alshedivat/al-folio) 与 [minimal-light](https://github.com/yaoyao-liu/minimal-light)。核心布局、字体和图片显示不依赖外部 CDN，避免第三方资源异常导致页面错位或认证弹窗。

## 本地开发

```bash
bundle install
bundle exec jekyll serve
```

推送到 `main` 会触发 GitHub Actions 构建并发布到 `gh-pages`；GitHub Pages 来源应保持为 `gh-pages / root`。
