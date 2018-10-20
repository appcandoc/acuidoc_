/* eslint-disable */
const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
        title: 'ACUI',
        version,
        href: '#/'
      },
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              {
                path: '/changelog',
                title: '更新日志'
              },
              {
                path: '/vant-css',
                title: '内置样式'
              },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/contribution',
                title: '开发指南'
              },
              {
                path: '/style-guide',
                title: '风格指南'
              },
              {
                path: '/demo',
                title: '示例页面'
              },
              {
                path: '/locale',
                title: '国际化'
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '视图容器',
            list: [
              {
                path: '/view',
                title: 'view'
              },
              {
                path: '/scrollview',
                title: 'scrollview'
              },
              {
                path: '/swiper',
                title: 'swiper'
              },
            ]
          },
          {
            groupName: '基础内容',
            list: [
              {
                path: '/text',
                title: 'text'
              },
              {
                path: '/icon',
                title: 'icon'
              },
              {
                path: '/progress',
                title: 'progress'
              },
            ]
          },
          {
            groupName: '表单组件',
            list: [
              {
                path: '/button',
                title: 'button'
              },
              {
                path: '/checkbox',
                title: 'checkbox'
              },
              {
                path: '/formd',
                title: 'form'
              },
              {
                path: '/input',
                title: 'input'
              },
              {
                path: '/label',
                title: 'label'
              },
              {
                path: '/picker',
                title: 'picker'
              },
              {
                path: '/radio',
                title: 'radio'
              },
              {
                path: '/slider',
                title: 'slider'
              },
              {
                path: '/switch',
                title: 'switch'
              },
              {
                path: '/textarea',
                title: 'textarea'
              },
            ]
          },
          {
            groupName: '导航',
            list: [
              {
                path: '/navigator',
                title: 'navigator'
              }
            ]
          },
          {
            groupName: '媒体组件',
            list: [
              {
                path: '/image',
                title: 'image'
              },
              {
                path: '/audio',
                title: 'audio'
              },
              {
                path: '/video',
                title: 'video'
              }
            ]
          },
          {
            groupName: '画布',
            list: [
              {
                path: '/canvas',
                title: 'canvas'
              }
            ]
          },
        ]
      }
    ]
  }
};
