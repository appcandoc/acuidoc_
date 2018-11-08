 ### label
目前label只适用于和checkbox、radio组件合用，label包含的区域都可以实现点击选中和反选。

典型示例

代码
```script
<template>
<ac-view>
    <ac-checkbox-group>
        <ac-label class="checkbox" ac:for="item in items">
            <ac-checkbox :value="item.name" :checked="item.checked"></ac-checkbox>{{item.value}}
        </ac-label>
    </ac-checkbox-group>

    <!-- radio  -->
    <ac-radio-group>
    <ac-label>
      <ac-row height="60" border-bottom space-bottom="20">
        <ac-col width="50" vertical-align="middle" align="center">
          <ac-icon name="weixin" size="36" color="#72d345"></ac-icon>
        </ac-col>
        <ac-col vertical-align="middle">
          <ac-view class="title">微信支付</ac-view>
          <ac-view class="msg">推荐安装微信客户端的用户使用</ac-view>
        </ac-col>
        <ac-col width="30" vertical-align="middle">
          <ac-radio value="1" checked></ac-radio>
        </ac-col>
      </ac-row>
    </ac-label>
    <ac-label>
      <ac-row height="40">
        <ac-col width="50" vertical-align="middle" align="center">
          <ac-icon name="zhifubao" size="36" color="#009fe8"></ac-icon>
        </ac-col>
        <ac-col>
          <ac-view class="title">支付宝支付</ac-view>
          <ac-view class="msg">推荐安装支付宝客户端的用户使用</ac-view>
        </ac-col>
        <ac-col width="30" vertical-align="middle">
          <ac-radio value="2"></ac-radio>
        </ac-col>
      </ac-row>
    </ac-label>
  </ac-radio-group>
</ac-view>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: true },
        { name: 'BRA', value: '巴西', checked: true }
      ],
    }
  },
}
</script>

<style lang="less">
.demo-content {
  .radio {
    display: block;
    margin-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    .ac-radio {
      margin-right: 6px;
    }

  }
   .changemsg{
    font-size:14px;
    color:#666;
    padding-left:15px
  }
  .paybox{
    text-align:left;
    margin:0;
    padding:0
  }
  .title{
    color:#333;
    font-size:14px;
  }
  .msg{
    color:#666;
    font-size:12px
  }
}
</style>


```

效果

 ![](./img/label/label.png)
