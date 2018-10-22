## navigator

### 1、页面路由 js API方式

通过API封装对象ac进行页面路由

方法介绍

| 方法名  | 参数 | 说明   |
| ----- | ------ | ------ |
| navigateTo| {url: url} | 打开一个新页面|
| redirectTo| {url: url}| 在当前页打开 |
| navigateBack| 无 | 回到上级页面  |

#### 示例：

```javascript
// 以新界面的形式 打开/user对应界面
window.ac.navigateTo({url: '/user'})

// 在当前页 打开/user对应界面
window.ac.redirectTo({url: '/user'})

// 返回前一个页面
window.ac.navigateBack()
```

### 2、页面路由 \<ac-navigator> DOM标签方式

标签属性

| 属性  | 类型   | 是否必选 | 说明             |
| ----- | ------ | ---- | -------------- |
| url | String | 否    | 路由链接 |
| open-type | String | 是    | 跳转方式|

#### open-type 有效值：

| 值  | 说明   |
| ----- | ------ |
| navigate | 对应 window.ac.navigateTo 的功能|
| redirect | 对应 window.ac.redirectTo 的功能 |
| navigateBack | 对应 window.ac.navigateBack 的功能 |


#### 示例：

```javascript

<ac-view>
   <ac-navigator openType="navigateBack">回到上个页面</ac-navigator>
   <ac-navigator url="/user" openType="redirect">在当前页打开</ac-navigator>
   <ac-navigator url="/user" openType="navigate">打开一个新页面</ac-navigator>
</ac-view>

