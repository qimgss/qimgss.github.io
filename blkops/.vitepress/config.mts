import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blkops/',
  title: 'blkops',
  description: 'Android 设备 Block 分区操作工具',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-blkops' },
      { text: 'CLI', link: '/cli/' },
      { text: '构建', link: '/build/' },
      { text: 'GitHub', link: 'https://github.com/qimgss/BlockOperations' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '什么是 blkops', link: '/guide/what-is-blkops' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        }
      ],

      '/cli/': [
        {
          text: 'CLI 使用',
          items: [
            { text: 'CLI 概览', link: '/cli/' },
            { text: '搜索分区', link: '/cli/search' },
            { text: '写入镜像', link: '/cli/write' },
            { text: '导出分区', link: '/cli/dump' },
            { text: '使用示例', link: '/cli/examples' }
          ]
        }
      ],

      '/build/': [
        {
          text: '构建 blkops',
          items: [
            { text: '构建说明', link: '/build/' },
            { text: 'Windows 构建', link: '/build/windows' },
            { text: 'Linux 构建', link: '/build/linux' }
          ]
        }
      ],

      // 默认侧边栏（兜底）
      '/': [
        {
          text: 'blkops',
          items: [
            { text: '首页', link: '/' },
            { text: 'FAQ', link: '/faq' }
          ]
        }
      ]
    },

    // 内置搜索 ✅
    search: {
      provider: 'local'
    }
  }
})