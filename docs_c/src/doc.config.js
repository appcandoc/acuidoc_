/* eslint-disable
* nav: {
          '介绍': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/intro',
          'Vue 组件': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/view',
          'api 接口': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/requsetApi',
      },
* */
const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: './static/42.png',
        title: 'ACUI',
        version,
        href: '#/'
      },
      nav: {
        '介绍': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/intro',
        'UI 组件': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/view',
        'api 接口': 'https://appcandoc.github.io/acuidoc_/#/zh-CN/requsetApi',
      },
    },
    nav: {
      intro: {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/ideIntro',
                title: '安装开发工具'
              },
              {
                path: '/changelogIntro',
                title: '第一个应用'
              },
              {
                path: '/guideIntro',
                title: '微应用开发指南'
              },
              {
                path: '/appconfigIntro',
                title: 'app配置'
              },
              {
                path: '/pageIntro',
                title: 'page配置'
              },
              {
                path: '/conditionalRenderingIntro',
                title: '条件渲染 if'
              },
              {
                path: '/listRenderingIntro',
                title: '列表渲染 for'
              },
              {
                path: '/habitIntro',
                title: '需要舍弃的pc端开发习惯'
              },
              {
                path: '/flexibleIntro',
                title: '设配方案'
              },
              {
                path: '/frameworkIntro',
                title: '框架'
              },
              {
                path: '/themeIntro',
                title: '主题'
              }
            ]
          }
        ]
      },
      components: {
        name: '组件',
        showInMobile: false,
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
                path: '/form',
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
          {
            groupName: '事件',
            list: [
              {
                path: '/event',
                title: '事件'
              }
            ]
          },
        ]
      },
      docApi: {
        name: 'API',
        groups: [
          {
            groupName: '网络',
            list: [
              {
                path: '/requsetApi',
                title: '发起请求'
              },
              {
                path: '/uploadFileApi',
                title: '上传文件'
              },
              {
                path: '/downloadFileApi',
                title: '下载文件'
              },
              {
                path: '/storageApi',
                title: '数据缓存'
              },
              {
                path: '/sqliteApi',
                title: '数据库'
              },
              {
                path: '/webSocketApi',
                title: 'webSocket'
              }
            ]
          },
          {
            groupName: '媒体',
            list: [
              {
                path: '/imageApi',
                title: '图片'
              },
              {
                path: '/recordApi',
                title: '录音'
              },
              {
                path: '/voiceApi',
                title: '音频播放'
              },
              {
                path: '/videoApi',
                title: '视频'
              },
              {
                path: '/fileApi',
                title: '文件'
              }
            ]
          },
          {
            groupName: '位置',
            list: [
              {
                path: '/getLocationApi',
                title: '获取位置'
              },
              {
                path: '/chooseLocationApi',
                title: '选择位置'
              },
              {
                path: '/openLocationApi',
                title: '查看位置'
              }
            ]
          },
          {
            groupName: '设备',
            list: [
              {
                path: '/systemInfoApi',
                title: '系统信息'
              },
              {
                path: '/networkStatusApi',
                title: '网络状态'
              },
              {
                path: '/accelerometerApi',
                title: '加速度计'
              },
              {
                path: '/compassApi',
                title: '罗盘'
              },
              {
                path: '/callApi',
                title: '拨打电话'
              },
              {
                path: '/scanCodeApi',
                title: '扫码'
              },
              {
                path: '/clipboardApi',
                title: '剪贴板'
              },
              {
                path: '/screenBrightnessApi',
                title: '屏幕亮度'
              },
              {
                path: '/userCaptureScreenApi',
                title: '用户截屏事件'
              },
              {
                path: '/bluetoothApi',
                title: '用户蓝牙事件'
              },
              {
                path: '/iBeaconApi',
                title: 'iBeacon'
              },
              {
                path: '/vibrateApi',
                title: '震动'
              },
              {
                path: '/phoneContactApi',
                title: '手机联系人'
              },
              // {
              //   path: '/nfcApi',
              //   title: 'NFC'
              // },
              {
                path: '/wifiApi',
                title: 'Wi-Fi'
              }
            ]
          },
          {
            groupName: '交互反馈',
            list: [
              {
                path: '/toastApi',
                title: '提示 toast'
              },
              {
                path: '/loadingApi',
                title: '加载框 loading'
              },
              {
                path: '/modalApi',
                title: '对话框 modal'
              },
              {
                path: '/actionSheetApi',
                title: '动作面板 actionSheet'
              }
            ]
          },
          {
            groupName: '界面',
            list: [
              {
                path: '/navigationBarApi',
                title: '设置导航条'
              },
              {
                path: '/tabBarApi',
                title: '设置tabBar'
              },
              {
                path: '/backgroundApi',
                title: '设置窗口背景'
              },
              {
                path: '/navigateApi',
                title: '导航'
              },
              {
                path: '/animationApi',
                title: '动画'
              },
              {
                path: '/pageScrollToApi',
                title: '位置'
              },
              {
                path: '/pullDownRefreshApi',
                title: '下拉刷新'
              },
              // {
              //   path: '/userApi',
              //   title: '用户'
              // }
            ]
          },
          // {
          //   groupName: '用户',
          //   list: [
          //     {
          //       path: '/loginApi',
          //       title: '登录'
          //     },
          //     {
          //       path: '/authorizeApi',
          //       title: '授权'
          //     },
          //     {
          //       path: '/getUserInfoApi',
          //       title: '获取用户信息'
          //     }
          //   ]
          // },
          {
            groupName: '支付',
            list: [
              {
                path: '/wxRequestPaymentApi',
                title: '微信支付'
              },
              {
                path: '/aliRequestPaymentApi',
                title: '支付宝支付'
              }
            ]
          },
          {
            groupName: '高德地图',
            list: [
              {
                path: '/mapApi',
                title: '高德地图'
              }
            ]
          }
        ]
      },
    },
  }
};
