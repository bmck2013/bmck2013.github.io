---
title: Astro 本地更新 Github Pages
published: 2026-09-29
tags: [Markdown,Blogging]
category: Guides
draft: false
---

`pnpm dev`    # 先开 http://localhost:4321 看文章是否正常


`pnpm build`    # 生产构建，同时生成 Pagefind 搜索索引


`pnpm preview`    # 看构建后的站，验证搜索/样式/图片

`git pull --rebase origin main`    # 先同步远程，避免再次 rejected

`git add src/content/blog/你的文章.md`

`git status`

`git commit -m "post: 新增《我的新文章》"`

`git push -u origin main`
