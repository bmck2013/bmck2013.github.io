import type { ThemeConfig } from '~/types'

export const userConfig: ThemeConfig = {
  site: {
    title: '奇境骰聲',
    subtitle: 'wonderclatter',
    author: 'Lunan',
    description: '以骰为笔，以桌为卷 Where dice become stories',
    website: 'https://wonderclatter.com',
    avatar: '/avatar.png',
    socialLinks: [
      { name: 'twitter', href: 'https://x.com/chobits' },
      { name: 'rss', href: '/atom.xml' }
    ],
    navLinks: [
      { name: '文章', href: '/' },
      { name: '归档', href: '/archive' },
      { name: '分类', href: '/categories' },
      { name: '关于', href: '/about' }
    ]
  },
  appearance: {
    locale: 'zh-cn',
    theme: 'light'
  }
}