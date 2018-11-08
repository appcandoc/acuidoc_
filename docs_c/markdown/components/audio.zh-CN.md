### audio
 
audio音频组件是基于html5的audio控件封装的，所以它可以在web端和APP端都可以使用。缺点是如果在APP端使用时是只能用控制面板进行音乐的播放暂停控制，无法在控制面板显示封面和音乐的切换。此外，因为是基于浏览器内核播放，音乐缓冲会占用一些时间（大概2-3秒）。一般用于web版本和web app版本的音乐播放器使用。

### 属性名

|属性名|	类型|	默认值	|说明|
|----|-----|-----|----|
|src|	String|		|要播放音频的资源地址|
|name|	String|		|要播放音频的名称|
|author|	String|		|要播放音频的作者|


### 典型示例

#### 示例代码：

```html
<ac-layout>
    <ACTopText :text="text"></ACTopText>
    <ac-audio :current="current"></ac-audio>
  </ac-layout>
```

```javascript
export default {
  config: {
    window: {
      navigationBarTitleText: '音频',
      disableScroll: true
    }
  },
  components: {ACTopText},
  data () {
    return {
      text:'audio',
      current:{
        src:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        name:'此时此刻',
        author:'许巍',
      },
    }
  },
}
```


