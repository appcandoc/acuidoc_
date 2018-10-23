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
        ]
      },
      {
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
              {
                path: '/nfcApi',
                title: 'NFC'
              },
              {
                path: '/wifiApi',
                title: 'Wi-Fi'
              },
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
                path: '/topBarApi',
                title: '设置置顶信息'
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
              {
                path: '/userApi',
                title: '用户'
              }
            ]
          },
          {
            groupName: '用户',
            list: [
              {
                path: '/loginApi',
                title: '登录'
              },
              {
                path: '/authorizeApi',
                title: '授权'
              },
              {
                path: '/getUserInfoApi',
                title: '获取用户信息'
              }
            ]
          },
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
      }
    ]
  }
};
