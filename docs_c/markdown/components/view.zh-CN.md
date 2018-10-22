## ac-view

视图容器。类似html里面的div元素。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
| hover-class | String |  none  | 指定按下去的样式类。当 hover-class="none" <br>时，没有点击态效果|
| hover-stop-propagation | Boolean |   false  | 指定是否阻止本节点的祖先节点出现点击态 |
| hover-start-time | Number |  50   | 按住后多久出现点击态，单位毫秒 |
| hover-stay-time |Number |  400 | 手指松开后点击态保留时间，单位毫秒 |

### 示例：

#### 前端代码
```script
  <ac-view class="section">
  <ac-view class="section__title">横向flex排列</ac-view>
  <ac-view class="flex-wrp" style="flex-direction:row;">
    <ac-view class="flex-item bc_green">1</ac-view>
    <ac-view class="flex-item bc_red">2</ac-view>
    <ac-view class="flex-item bc_blue">3</ac-view>
  </ac-view>
</ac-view>

<ac-view class="sample_title">纵向flex排列</ac-view>
<ac-view class="sample_content">
  <ac-view class="float-wrp">
    <ac-view class="float-item bc_green">1</ac-view>
    <ac-view class="float-item bc_red">2</ac-view>
    <ac-view class="float-item bc_blue">3</ac-view>
  </ac-view>
</ac-view>
```
### less代码
```script
.flex-wrp{
  display:flex;
  background-color: #FFFFFF;
  width: 15rem;
  margin: 0 auto;
}
.flex-item{
  width: 5rem;
  height: 5rem;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bc_green{
  background-color: #7CC422;
}
.bc_red{
  background-color: #FFA060;
}
.bc_blue{
  background-color: #46D1E4;
}




.float-wrp {
  width: 5rem;
  margin: 0 auto;
  height: 15rem;
}
.flex-item{
  width: 5rem;
  height: 5rem;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bc_green{
  background-color: #7CC422;
}
.bc_red{
  background-color: #FFA060;
}
.bc_blue{
  background-color: #46D1E4;
}
.float-wrp .float-item{
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  color: #ffffff;
}

.touch_wrap{
    width: 2rem;
    height: 2rem;
    margin: auto;
    line-height: 2rem;
    text-align: center;
}      


```
![](./img/views/view1.png)