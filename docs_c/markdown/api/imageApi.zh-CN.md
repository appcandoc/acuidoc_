### appcan.chooseImage(OBJECT)

从本地相册选择图片或使用相机拍照。

**OBJECT参数说明：**

参数 |	类型  |	必填  |	说明
---|---|---|---
clip | 	Boolean  |	否  |	是否裁剪图像，默认为否，当允许裁剪时图片数量限制为1
count |	Number  | 否  |	最多可以选择的图片张数，默认9
sizeType  |	StringArray  |	否  |	original 原图，compressed 压缩图，默认二者都有
sourceType  |	StringArray  |	否  |	album 从相册选图，camera 使用相机，默认二者都有
success  |	Function  |	是  |	成功则返回图片的本地文件路径列表 tempFilePaths
fail  |	Function  |	否  |	接口调用失败的回调函数
complete  |	Function  |	否  |	接口调用结束的回调函数（调用成功、失败都会执行）

**注：文件的临时路径，在APP本次启动期间可以正常使用，如需持久保存，需在主动调用 appcan.saveFile，在APP下次启动时才能访问得到。**

**success返回参数说明：**

参数  |	类型  |	说明
---|---|---
tempFilePaths | StringArray | 图片的本地文件路径列表
tempFiles | ObjectArray | 图片的本地文件列表，每一项是一个 File 对象

**File 对象结构如下:**

字段 | 类型 | 说明
---|---|---
path | String | 本地文件路径
size | Number | 本地文件大小，单位：B


### appcan.previewImage(OBJECT)

预览图片。

**OBJECT参数说明：**

参数  |	类型  |	必填  |	说明
---|---|---|---
current	| String  |	否 | 当前显示图片的链接，不填则默认为 urls 的第一张
urls | StringArray | 是 | 需要预览的图片链接列表
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```JavaScript
appcan.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
})
```
### 完整示例

这里演示从相册中选择图片并显示出来。

    
```html
<ac-view class="content">
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      图片来源：
    </ac-col>
    <ac-col span="9">
        <ac-input :value="sourceType[sourceTypeIndex]"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      图片质量：
    </ac-col>
    <ac-col span="9">
        <ac-input :value="sizeType[sizeTypeIndex]"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      数量限制：
    </ac-col>
    <ac-col span="9">
        <ac-input :value="count[countIndex]"></ac-input>
    </ac-col>
  </ac-row>
  <ac-view class="imageList_win">
    <ac-view class="image" ac:for="imageList" ac:for-item="image">
      <ac-image :src="image" width="90" height="90" mode="aspectFill"></ac-image>
    </ac-view>
  </ac-view>
  <ac-button type="primary" @tap="chooseImage">选择图片</ac-button>
</ac-view>
```
**JS部分**

```JavaScript
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]
export default {
  data () {
    return {
      imageList: [

      ],
      sourceTypeIndex: 2,
      sourceType: ['拍照', '相册', '拍照或相册'],
      sizeTypeIndex: 1,
      sizeType: ['压缩', '原图', '压缩或原图'],
      countIndex: 8,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    chooseImage () {
      var that = this
      appcan.chooseImage({
        sourceType: sourceType[this.sourceTypeIndex],
        sizeType: sizeType[this.sizeTypeIndex],
        count: this.count[this.countIndex],
        success: function (res) {
          console.log(res)
          that.imageList = res.tempFilePaths
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }
  }
}
```
**LESS部分**

```less
.content{
  padding: 10px;
}
.imageList_win{
  display: flex;
  flex-wrap: wrap;
  // .mix-flex-x-center();
  width: 300px;
  margin: 0 auto;
  .image{
    margin: 5px;
  }
}
```
### appcan.getImageInfo(OBJECT)

获取图片信息

**OBJECT参数说明：**

参数  |	类型  |	必填  |	说明
---|---|---|---
src	|String | 是 | 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
success | Function | 否	| 接口调用成功的回调函数
fail | Function | 否 |	接口调用失败的回调函数
complete  |	Function  |	否 |	接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数 |	类型 |	说明
---|---|---
width | Number|	图片宽度，单位px
height | Number | 图片高度，单位px
path | String | 返回图片的本地路径
orientation | S	String | S返回图片的方向，有效值见下表
type | SString | S返回图片的格式

**orientation参数说明：**

枚举值 | 对应EXIF信息的orientation值 | 说明
---|---|---
up | 1 | 默认
down | 3 | 180度旋转
left | 8 | 逆时针旋转90度
right | 6 | 顺时针旋转90度
up-mirrored | 2 | 同up，但水平翻转
down-mirrored | 4 | 同down，但水平翻转（垂直翻转）
left-mirrored | 5 | 同left，但垂直翻转（顺时针90度+水平翻转）
right-mirrored | 7 | 同right，但垂直翻转

**示例代码：**

```JavaScript
appcan.getImageInfo({
  src: 'images/a.jpg',
  success: function (res) {
    console.log(res.width)
    console.log(res.height)
  }
})
appcan.chooseImage({
  success: function (res) {
    appcan.getImageInfo({
      src: res.tempFilePaths[0],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
appcan.saveImageToPhotosAlbum(OBJECT)
```

保存图片到系统相册，需要用户授权。如果要保存网络图片到相册，需要先下载获取临时存储地址再保存到相册。

**OBJECT参数说明：**

参数名 | 类型 | 必填 | 说明
---|---|---|---
filePath | String | 是 | 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径，网络图片需要先下载得到临时路径。
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数名 | 类型 | 说明
---|---|---
errMsg | String | 调用结果

**示例代码：**

```JavaScript
appcan.saveImageToPhotosAlbum({
  success (res) {
      console.log(res)
  }
})

```
**完整示例**
保存网络图片到相册。


```html
<ac-view class="win">
  <ac-view class="img_win">
    <ac-image :src="imageSrc" height="200" ></ac-image>
  </ac-view>
  <ac-view>
    <ac-button type="primary" @tap="saveImg">保存到手机相册</ac-button>
  </ac-view>
</ac-view>
```
**JS部分**
```JavaScript
export default {
  data () {
    return {
      imageSrc: 'http://images.uileader.com/20170930/7fbde6a5-2e25-4f74-873d-a4b44fd82269.jpg'
    }
  },
  methods: {
    saveImg () {
      var self = this
      appcan.downloadFile({
        url: self.imageSrc,
        success: function (res) {
          appcan.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              appcan.showToast({
                title: '已保存到相册'
              })
            },
            fail () {
              appcan.showToast({
                title: '保存失败'
              })
            },
            complete () {

            }
          })
        },
        fail: function ({ errMsg }) {
          appcan.showToast({
            title: '图片下载失败'
          })
        },
        complete: function () {

        }
      })
    }
  },
  mounted () {}
}
```
