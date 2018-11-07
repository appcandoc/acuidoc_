###  rich-text
富文本，在富文本组件内可放任意html内容。

属性表

| 属性	| 类型 |	默认 |	说明 |
|-------|------|------|--------|
|selectable	| Boolean	| false	| 是否允许长按选择 |
| decode	| Boolean	| false	| 设为true时，当渲染html字符串时，指定decode可以将字符串解析为DOM |

#### Bug && Tip
1、富文本里不可以放ACUI的组件标签
2、如果从服务端获取html片段，需要添加decode属性，因为从服务端传递的html片段为字符串。
