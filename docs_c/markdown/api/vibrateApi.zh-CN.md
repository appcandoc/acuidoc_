### appcan.vibrateLong(OBJECT)

使手机发生较长时间的振动（400ms）

### OBJECT参数说明：

|参数名|	类型|	必填|	说明|
|---|---|---|---|
|success|	Function|	否|	接口调用成功的回调函数|
|fail	|Function	|否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### appcan.vibrateShort(OBJECT)

使手机发生较短时间的振动（15ms）

### OBJECT参数说明：

|参数名|	类型	|必填	|说明|
|---|---|---|---|
|success|	Function	|否|	接口调用成功的回调函数|
|fail	|Function	|否|	接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### Bug & Tip
**tip**：**vibrateShort** 接口仅在 iPhone7/iPhone7Plus 及 Android 机型生效
