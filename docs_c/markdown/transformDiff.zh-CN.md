# 微应用与小程序区别对比

##  UI组件

微应用提供了一些UI组件，对应用小程序中的组件，这部分组件中的属性方法不全对应小程序，存在差异，以下是微应用UI组件与相应小程序相同组件区别对比。

###  view

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
hover-class | 支持 | 支持 | 指定按下去的样式类。当hover-class="none" 时，没有点击态效果
hover-stop-propagation | 支持 | 支持| 指定是否阻止本节点的祖先节点出现点击态
hover-start-time | 支持 |  支持 | 按住后多久出现点击态，单位毫秒
hover-stay-time | 支持 | 支持 | 手指松开后点击态保留时间，单位毫秒

###  scroll-view

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
scroll-x | 支持 | 支持 | 允许横向滚动
scroll-y | 支持 | 支持 | 允许纵向滚动
scroll-top | 支持 | 支持 | 设置竖向滚动条位置
scroll-left | 支持 | 支持 | 设置横向滚动条位置
scroll-into-view | 支持 | 支持 | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
height | 支持 | 不支持，需要使用 WXSS设置height | 滚动视图高度
scroll | 支持 | 支持 | 滚动时触发
scrollstart | 支持 | 不支持 | 滚动开始时触发
scrollend | 支持 | 不支持 | 滚动结束后触发
probe | 支持 | 不支持 | 触发scroll事件的条件
pull-down | 支持 | 不支持 | 下拉刷新的处理
pull-left | 支持 | 不支持 | 左拉
pull-up | 支持 | 不支持 | 上拉加载
scroll-with-animation | 支持 | 支持 | 在设置滚动条位置时使用动画过渡
enable-reach-bottom-load | 支持 | 不支持 | 是否到底加载
on-load-more | 支持 | 不支持 | 到底时的处理，此时一般用于请求数据并渲染到页面上

###  swiper

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
indicator-dots | 支持 | 支持 | 是否显示面板指示点
indicator-color | 支持 | 支持 | 指示点颜色
indicator-active-color | 支持 | 支持 | 当前选中的指示点颜色
autoplay | 支持 | 支持 | 是否自动切换
current | 支持 | 支持 | 当前所在滑块的 index
interval | 支持 | 支持 | 自动切换时间间隔
duration | 支持 | 支持 | 滑动动画时长
circular | 支持 | 支持 | 是否采用衔接滑动
@change | 返回index | bindchange返回event.detail = {current, source} | current 改变时会触发 change 事件
@animationfinish | 返回index | bindanimationfinish返回event.detail = {current, source} | 动画结束时会触发 animationfinish 事件

###  text

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
block | 支持 | 不支持 | 是否块级元素
space | 支持 | 支持 | 显示连续空格
decode | 支持 | 支持 | 是否解码
selectable | 支持 | 支持 | 是否允许长按选择

###  icon

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
type | 支持 | 支持success, success_no_circle, info, warn, waiting, cancel, download, search, clear | icon的类型，有效值：'success', 'info', 'info-circle', 'warn', 'waiting','waiting-circle', 'safe-success', 'safe_warn', 'success-circle', 'success-no-circle', 'circle', 'download', 'cancel', 'search', 'clear'
size | 支持 | 支持 | icon的大小，默认单位px
color | 支持 | 支持 | icon的颜色，同css的color

###  progress

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
percent | 支持 | 支持 | 设置百分比的数值，范围0～100
show-info | 支持 | 支持 | 在进度条右侧显示百分比
stroke-width | 支持 | 支持 | 进度条线的宽度，单位px
active-color | 支持 | 支持 | 
background-color | 支持 | 支持 | 
active | 支持 | 支持 | 进度条初始动画
animate-after-show | 支持 | 不支持 | 默认为true，在屏幕外不显示动画，出现在屏幕中才显示动画
border-radius | 支持 | 不支持 | 默认为直角，通过该属性设置圆角

### button

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
size | 支持 | 支持 | 按钮的大小
type | 支持 | 支持 | 按钮的样式类型
plain | 支持 | 支持 | 按钮是否镂空，背景色透明
disabled | 支持 | 支持 | 是否禁用
loading | 支持 | 支持 | 名称前是否带 loading 图标
icon | 支持 | 不支持 | 名称前的图标，需使用iconfont图标
full-width | 支持 | 不支持 | 是否100%宽度
form-type | 支持 | 支持 | 用于form 组件，点击分别会触发 组件的 submit/reset 事件
hover-class | 支持 | 支持 | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果画
hover-stop-propagation | 支持 | 支持 | 指定是否阻止本节点的祖先节点出现点击态
hover-start-time | 支持 | 支持 | 按住后多久出现点击态，单位毫秒
hover-stay-time | 支持 | 支持 | 手指松开后点击态保留时间，单位毫秒

###  checkbox

checkbox-group 多项选择器，内部由多个checkbox组成
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
@change | 返回值包含current 和 value两个参数。 current为对象，里面包含两个值，checked：当前点击的是否选中，value：当前点击的value值； value为数组，返回checkbox-group里选中的所有value值。 |  detail = {value:[选中的checkbox的value的数组]} |选中项发生改变时触发change事件。返回值不同

checkbox 多选项目
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
value | 支持 | 支持 | 标识，选中时触发的change事件，并携带的value
disabled | 支持 | 支持 | 是否禁用
checked | 支持 | 支持 | 当前是否选中，可用来设置默认选中
color | 支持 | 支持 | checkbox的颜色，同css的color
type | 支持 | 不支持 | 

###  form

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
@submit | 支持 | 支持 | 携带 form 中的数据触发 submit 事件
@reset | 支持 | 支持 | 表单重置时会触发 reset 事件
action | 支持 | 不支持 | 该属性当使用搜索时，需要指定（可以使键盘出现搜索按钮）。其他场景并不是必要的

###  input

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
type | 支持为以下类型：'text', 'password', 'search', 'email', 'number', 'tel', 'datetime-local', 'date', 'time' | 支持为以下类型：'text', 'idcard',  'number', 'digit' | 文本框类型
required | 支持 | 不支持 | 	是否必须输入
disabled | 支持 | 支持 | 禁用
readonly | 支持 | 不支持 | 是否只读
value | 支持 | 支持 | 输入框的初始内容。也可以使用model来绑定初始值。
placeholder | 支持 | 支持 | 输入要提示
regex | 支持 | 不支持 | 自定义正则表达式,email、mobile、银行卡bankcard
showClearIcon | 支持 | 不支持 | 清除输入图标,内容非空时显示
showErrorIcon | 支持 | 不支持 | 校验不通过时显示
showSuccessIcon | 支持 | 不支持 | 校验通过时显示
showRequiredIcon | 支持 | 不支持 | 必须输入图标
password | 不支持，需要通过type属性指定 | 支持 | 是否是密码类型

###  label

目前label只适用于和checkbox、radio组件合用，label包含的区域都可以实现点击选中和反选。

小程序中使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch

属性名 | 微应用 |小程序 | 描述
---|---|---|---
for |不支持| 支持|绑定控件的 id

###  picker

mode属性表
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
selector |支持| 支持|默认项，普通选择器
multiSelector |支持| 支持|多列选择器
time |支持| 支持|时间选择器
date |支持| 支持|日期选择器
region |支持| 支持|省市区选择器

普通选择器：mode = selector

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
range |支持| 支持|选择器的数据
value |支持| 支持|value 的值表示选择了 range 中的第几个（下标从 0 开始）
@change |支持| 支持|value 改变时触发 change 事件
@cancel |支持|支持|取消选择时触发
range-key |不支持,除非数组对象中的value与key值相同|	支持|当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
disabled|支持| 支持|是否禁用

多列选择器：mode = multiSelector

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
range |支持| 支持|选择器的数据
value |支持| 支持|value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）
@change |支持|支持|value 改变时触发 change 事件
@cancel |支持| 支持|取消选择时触发
range-key |不支持| 支持|通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
disabled|支持| 支持|是否禁用
is-chain|支持| 不支持|是否联动
小程序实现联动需要自己写js来实现，组件本身没有提供属性。

时间选择器：mode = time

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
value |支持| 支持|表示选中的时间，格式为"hh:mm"
start |支持| 支持|表示有效时间范围的开始，字符串格式为"hh:mm"
end |支持| 支持|表示有效时间范围的结束，字符串格式为"hh:mm"
@change |支持| 支持|value 改变时触发 change 事件
@cancel |支持|支持|取消选择时触发
disabled|支持| 支持|是否禁用

日期选择器：mode = date

属性名 | 微应用 |小程序 | 描述
---|---|---|---
value |支持| 支持|表示选中的日期，格式为"YYYY-MM-DD"
start |支持| 支持|表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
end |支持| 支持|表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"
fields |不支持| 支持|有效值 year,month,day，表示选择器的粒度
@change |支持| 支持|value 改变时触发 change 事件
@cancel |支持|支持|取消选择时触发
disabled|支持| 支持|是否禁用
date-format|支持| 不支持|以"YYYY-MM-DD"格式显示日期

省市区选择器：mode = region

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
range |支持 | 支持|选择器的数据
value |支持| 支持|表示选中的省市区，默认选中每一列的第一个值
@change |支持| 支持|value 改变时触发 change 事件
@cancel |支持| 支持|取消选择时触发
hideDistrict |支持| 不支持|是否隐藏区
disabled|支持| 支持|是否禁用

###  radio

radio-group 多项选择器，内部由多个radio组成
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
@change | 返回值选中的value | detail = {value:[选中的radio的value的数组]} |选中项发生改变时触发change事件。返回值不同

radio 单选项目
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
value | 支持 | 支持 | 标识，选中时触发的change事件，并携带的value
disabled | 支持 | 支持 | 是否禁用
checked | 支持 | 支持 | 当前是否选中，可用来设置默认选中
color | 支持 | 支持 | radio的颜色，同css的color

###  slider

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
|width	| 支持 | 	不支持 |	设置slider的宽度 |
|min	| 支持|	支持 |最小值 |
|max	| 支持|	支持 |最大值 |
|step	| 支持|	支持 |步长，取值必须大于 0，并且可被(max - min)整除 |
|value	| 支持|	支持 | 当前取值 |
|buffer-value | 支持| 不支持 |	Slider可以被用作播放器的进度条. 可以进行缓存条的制作,传入值即可显示缓存 |
|buffer-color | 支持| 不支持 | 缓存条颜色 |
|tooltip-class | 支持| 不支持 |为tooltip自定义样式 |
|thumb-style| 支持| 不支持，小程序可设置滑块属性block-size和block-color |为滑块进行自定义的样式|
|thumb-down-style| 支持| 不支持 |为滑块进行自定义按下的动画样式|
|tooltip-style | 支持| 不支持 |	为tooltip自定义样式|
|active-color | 支持| 支持 |	已选择的颜色|
|background-color| 支持| 支持 |背景条的颜色|
|show-value| 支持| 支持 |是否显示当前 value|
|show-max-value	| 支持| 不支持 |	是否显示当前 maxValue|
|show-tooltip| 支持| 不支持 |	是否显示Tooltip|
|slider-weight| 支持|不支持 |线条粗细|
|bar-border-radius| 支持| 不支持 |背景条两端圆角的程度|
|scale-line| 支持| 不支持 |	是否显示刻度,如：'10'|
|key-scale-line| 支持| 不支持 |是否显示大刻度,如：'20'|
|scale-position| 支持| 不支持 |	设置刻度在滑动条的上方/下方。under为下方，over上方|
|scale-margin| 支持| 不支持 |设置刻度距离滑动条的位置|
|unlimited| 支持| 不支持 |	最大值设置无上限。必须设置max、key-scale-line、step，并且key-scale-line与step必须一致。|
|max-format| 支持| 不支持 |	为max设置数据格式|
|value-format| 支持| 不支持 |	为value设置数据格式|
|tooltip-format| 支持| 不支持 |	为tooltip设置数据格式|
|@change	| 支持| 支持，event.detail = {value} |		完成一次拖动后触发的事件。返回值为拖动后的value值|
|@changing	| 支持| 支持，event.detail = {value} |		拖动过程中触发的事件。返回值为拖动过程中的value值|

### switch

微应用：通过value、v-model设置
小程序：通过checked设置
属性名 | 微应用 | 小程序 | 描述
---|---|---|---
value | 支持 | 不支持，checked |是否选中,可以使用v-model绑定
disabled| 支持 | 支持 |是否禁用
color| 支持 | 支持 |switch 的颜色，同 css 的 color
trueValue| 支持 | 不支持 |自定义打开时的值
falseValue| 支持 | 不支持 |	自定义关闭时的值
@change|  支持 | 支持，event.detail={ value} | switch 改变时触发 change 事件

###  textarea

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
value | 支持 | 不支持 |输入框的内容
name | 支持 | 不支持 |用于提交表单
rows	|支持 |不支持  | 输入框的可见行数
cols	|支持 | 不支持  | 规定文本区的宽度（以平均字符数计）
height	|支持 | 不支持  |	输入框的高度
width	|支持 | 不支持 |	输入框的宽度
title	|支持 | 不支持 |	输入框的标题
readonly|支持 | 不支持 |	是否只读
disabled| 支持 | 支持 |是否禁用
show-counter| 支持 | 不支持 |是否显示计数器
placeholder| 支持 | 支持 |输入框为空时占位符
placeholder-style| 支持 | 支持 |	指定 placeholder 的样式
placeholder-class| 支持 | 支持 |	指定 placeholder 的样式类
maxlength| 支持 | 支持 |	最大输入长度，设置为 -1 的时候不限制最大长度
auto-height| 支持 | 支持 |	是否自动增高，设置auto-height时，style.height不生
@focus	|支持 | 支持，返回值不同 |		输入框聚焦时触发
@blur	|支持 | 支持，返回值不同 |	输入框失去焦点时触发
@input	|支持 | 支持，返回值不同 |	当键盘输入时，触发input事件

###  navigator

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
url | 支持 | 支持 |路由链接
open-type | 支持 |支持 |跳转方式，微应用支持navigate、redirect、navigateBack、switchTab

###  image

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
src | 支持 |支持 |图片资源地址
width | 支持  |不支持 |图片宽度，可以是数字或百分比，数字后不加单位
height | 支持 | 不支持 |图片高度，可以是数字或百分比，数字后不加单位
mode | 支持 | 不支持simple |图片裁剪、缩放的模式
load-effect | 支持 |不支持 |第一次加载的效果，可选值为none/fade/blur
lazy-load | 支持，有bug | 不支持 |图片懒加载。只针对scroll-view下的image有效。懒加载的图片必须要设置width和height
offset | 支持 |不支持 | 图片懒加载距离页面底部为offset距离时触发
@error | 支持 |不支持 |图片载入错误时的事件
@load | 支持 | 不支持 |图片载入完毕时的事件

###  audio

此组件微应用属性与audio不同，需要小程序自行编写

###  video

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
src| 支持 | 支持	|要播放视频的资源地址
initial-time | 支持 | 支持 |指定视频初始播放位置
duration|支持 | 支持 |指定视频时长
controls|支持 | 支持|	是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
danmu-list|支持 | 支持| 弹幕列表
danmu-btn|	支持 | 支持|	是否显示弹幕按钮，只在初始化时有效，不能动态变更
enable-danmu	|支持 | 支持|	是否展示弹幕，只在初始化时有效，不能动态变更
autoplay	|支持 | 支持|	是否自动播放
loop	|支持 | 支持|	是否循环播放
muted	|支持 | 支持|	是否静音播放
page-gesture|支持 | 支持|	在非全屏模式下，是否开启亮度与音量调节手势【App支持】
direction	|支持 | 支持|设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕顺时针90度）
show-fullscreen-btn|支持 | 支持|	是否显示全屏按钮
show-play-btn|支持 | 支持	|是否显示视频底部控制栏的播放按钮
enable-progress-gesture|支持 | 支持|	是否开启控制进度的手势
objectFit	|支持 | 支持|	当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
poster	|支持 | 支持|默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
@play|	支持 | 支持|	当开始/继续播放时触发play事件
@pause|支持 |支持|当暂停播放时触发 pause 事件
@ended	|支持 | 支持|当播放到末尾时触发 ended 事件
@timeupdate|支持 | 支持|播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次
@fullscreenchange	|支持 | 支持，返回值多一个direction|当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}
@controlschange	|	支持 |不支持|当播放控件显示或隐藏时触发，event.detail = {show: '控件显示状态'}
@waiting|	支持 | 支持 |视频出现缓冲时触发
@error|	支持 | 支持 |视频播放出错时触发

###  canvas

属性名 | 微应用 | 小程序 | 描述
---|---|---|---
canvas-id | 支持 |支持 |设置唯一一个canvas的id以区分其他canvas
width | 支持 |不支持 |设置宽度
height | 支持 |不支持 |设置高度

### 不相同组件

组件名称 | 转换规则 | 描述
---| ---| ---
ac-layout | 转换到view组件 | 用于页面布局
ac-col | 转换成view组件 | 用于栅格布局
ac-row | 转换成view组件 | 用于栅格布局

##  API

微应用提供api能力调用原生功能，其中大部分都是对应小程序提供的api功能，相关情况如下：

API | 微应用 |小程序 | 描述
---| --- | --- | ---
request| 支持 | 支持  | 网络请求，小程序基础库2.1.0版本新增方法微应用不支持，responseType微应用不支持
uploadFile| 支持 | 支持  | 文件上传，小程序基础库2.1.0版本新增方法微应用不支持
downloadFile| 支持 | 支持  |文件下载，小程序基础库2.1.0版本新增方法微应用不支持，filePath微应用不支持
数据缓存| 支持 | 支持  |storage相关方法
数据库| 支持 | 不支持  |database相关方法，openDatabase、executeSql、executetTansaction、selectSql、closeDatabase
webSocket| 支持 | 支持 | Socket
图片| 支持，chooseImage、previewImage、getImageInfo、saveImageToPhotosAlbum | 支持 | 图片相关，小程序基础库2.x版本新增方法微应用不支持
录音| 只支持stopRecord，startRecord | 支持 |录音功能， 微应用除stopRecord，startRecord方法外，其他方法均不支持
音频| 只支持playVoice，pauseVoice、stopVoice | 支持 |音频播放，微应用除playVoice，pauseVoice、stopVoice方法外，其他方法均不支持
视频| 支持，VideoContext相关方法不支持stop、hideStatusBar、showStatusBar | 支持 |拍摄视频或从手机相册中选视频，及其视频相关控制
文件| 支持 | 支持 | 文件相关，小程序基础库1.9.9版本新增方法微应用不支持，如FileSystemManager
getLocation| 支持，参数altitude不支持 | 支持，参数provider不支持 |获取当前的地理位置、速度
chooseLocation| 支持| 支持，参数backgroundColor、color、cancel不支持 |打开地图选择位置
openLocation| 支持 | 支持，参数backgroundColor、color不支持 |使用内置地图查看位置
getSystemInfo \ getSystemInfoSync| 支持，小程序基础库1.8.0版本新增方法微应用不支持 | 支持 | 系统信息
getNetworkType| 支持 | 支持 | 获取网络类型
onNetworkStatusChange| 支持 | 支持 | 监听网络状态变化
加速计| 支持，startAccelerometer方法下的参数interval不支持 | 支持 | 加速度相关方法
罗盘| 支持，onCompassChange方法下的参数accuracy不支持 | 支持 | 加速度相关方法
makePhoneCall| 支持|支持|拨打电话
scanCode| 支持，成功回调里的参数rawData不支持|支持，参数backgroundColor、color不支持|扫码
getClipboardData \ setClipboardData | 支持 | 支持 | 剪贴板
屏幕亮度 | 支持 | 支持 | 屏幕亮度
屏幕截屏 | 支持，android目前是直接截屏事件 | 支持 | 监听用户截屏
震动 | 支持 | 支持 | 手机震动，vibrateLong、vibrateShort
showToast | 支持，仅支持参数title、icon、duration | 支持 |显示消息提示框
hideToast | 支持 | 支持 |隐藏消息提示框
showLoading | 支持 | 支持 |打开加载框
hideLoading | 支持 | 支持 |关闭加载框
showModal | 支持 | 支持 |打开模态对话框
showActionSheet | 支持，itemColor不支持，itemList:[{color:'#ff0000',text:'A'}] | 支持,itemList:["A"] |打开操作菜单，itemList数组不同
setNavigationBarTitle | 支持 | 支持 |动态设置当前页面的标题
setNavigationBarColor | 支持,参数animation不支持 | 支持 |设置页面导航条颜色
showNavigationBarLoading | 支持 | 支持，参数color不支持 |在当前页面显示导航条加载动画
hideNavigationBarLoading | 支持 | 支持 |在当前页面隐藏导航条加载动画
设置tabBar | 支持 | 支持 |设置tabbar相关,setTabBarBadge、removeTabBarBadge、showTabBarRedDot、hideTabBarRedDot、setTabBarStyle、setTabBarItem、showTabBar
设置窗口背景 | 支持 | 支持 | 设置窗口背景setBackgroundColor、setBackgroundTextStyle
路由导航 | 支持，不支持reLaunch，navigateBack不支持参数 | 支持 |路由跳转switchTab、redirectTo、navigateTo、navigateBack
pageScrollTo | 支持 | 支持| 滚动页面到某位置
startPullDownRefresh | 支持，直接回调 | 支持，需要在success回调| 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
stopPullDownRefresh | 支持，直接回调 | 支持，需要在success回调| 停止当前页面下拉刷新
onPullDownRefresh 、onReachBottom|支持，在appcan对象下|在page对象下|监听用户下拉刷新事件、监听用户上拉触底事件
requestPayment | 支持，微信支付、支付宝| 参数不同，且只有支付宝| 微信支付，在小程序中建议按照微信写法进行调用
onAppResume | 支持| 不支持 | 支付查询
loginAuth | 支持 | 不支持 | 获取code，用户获取token以便获取用户信息
openMicroApp | 支持 | 不支持，小程序方法navigateToMiniProgram | 启动微应用，小程序使用navigateToMiniProgram，两个方法的参数也不同
onload | 支持 | 不支持，page对象下存在，但是回调参数不一样 | 页面初始化完毕
setEvent |支持 | 不支持,reportAnalytics| 事件上报，用于统计，参数不同
getUrlQuery | 支持 | 不支持，onload回调的参数即为获取到的参数对象 | 页面之间传参，path?aaa=xxx



