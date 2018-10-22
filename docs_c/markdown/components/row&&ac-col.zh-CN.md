###  ac-row&&ac-col
1、使用 row 组件在水平方向创建一行；  
2、将一组 col 组件插入在 row 组件中；  
3、在每个 col 组件中，键入自己的内容。  

布局组件特性：

1、采用了12栅格系统，将区域进行12等分；  
2、通过设置 col 组件的span参数，指定跨越的范围，其范围是1到12，并且只能为整数；  
3、每个 row 组件中的 col 组件中span属性值总和应该为12；  
4、如果不设置span，row 组件里面所有的 col 组件宽度自动等分，例如row里有5个col要实现宽度等分，如果设置span那么每个col的span就是2.4不是整数，那么就都不设置span，每个 col 宽度自动占整体五分之一；  
5、当其中1个或者多个col设置了定宽，其他的col宽度自适应并等分；  
6、当其中1个或者多个col设置了定宽，其他的col依然可以设置span，保留12栅格的特性；  
7、row里的内容会横向排列，col里的内容会纵向排列；  
8、row和col里面都可以放置内容，但col只能放在row里，不能单独存在。  
9、栅格布局适用于静态元素布局（非循环生成）；或者col是静态布局，循环生成row（例如美团的商家列表）；或者单行row里循环生成col的情况（例如首页单行图标）。不适合用于行与列都循环的情况（例如微信朋友圈的九宫格），这种情况请自行使用flex或者float来实现。  


###  ac-row
| 属性	| 类型 |	默认 |	说明 |
|-------|------|------|--------|
|border-top|	Boolean|	false|	是否显示上边框|
|border-bottom	|Boolean	|false	|是否显示下边框|
|space|	[Number,String]|	0|	同时设置上边距和下边距值space / 2|
|space-top	|[Number,String]	|0	|设置上边距|
|space-bottom|	[Number,String]  |	0|	设置下边距|
|height	|[Number, String]|	0	|设置高度|
|hover-class	|String	|none	|指定按下去的样式类，可以使用框架提供的'touchui-hover'【此样式写在了app.ui中】，也可以自定义样式|
|url|	String|		|点击跳转链接|


###  ac-col
| 属性	| 类型 |	默认 |	说明 |
|-------|------|------|--------|
|span	|Number|	-	|栅格的占位格数，可选值为0~12的整数|
|border-left	|Boolean|	false|	是否显示左边框|
|border-right	|Boolean	|false|	是否显示右边框|
|space	|[Number,String]|	0	|同时设置左边距和右边距值均为space / 2
|space-left|	[Number,String]|	0	|设置左边距
|space-right	|[Number,String]|	0	|设置右边距
|width	|[Number,String]|	0	|设置宽度
|align|	String	|"left"	|设置内容水平对齐方式，可设置"left", "center", "right"
|vertical-align	|String	|"top"	|设置内容垂直对齐方式，可设置"top", "middle", "bottom" 。注意垂直居中或垂直靠下必须要对row设置高度
|hover-class|	String|	none	|指定按下去的样式类，可以使用框架提供的'touchui-hover'【此样式写在了app.ui中】，也可以自定义样式