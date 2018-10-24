### 打开数据库

appcan.openDatabase(OBJECT)

### OBJECT参数说明

|参数	|类型	|必填	|说明|
|----|-----|-----|-----|
|name|	String|	是	|数据库名称|
|path	|String	|是|	数据库路径|
|success|	Function|	否|	接口调用成功的回调|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码

```javascript
appcan.openDatabase({
    name: 'test',
    path: 'test.db',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
```

### 注意事项

- 在某个页面打开数据库后，其他页面也可以使用
- 数据库文件不存在时将自动创建
- 路径参数只传文件名时，将在默认位置打开或创建
- 不能重复打开同名数据库

### 执行sql语句参数

appcan.executeSql(OBJECT)

### OBJECT参数说明
|参数	|类型	|必填	|说明|
|----|-----|-----|----|
|name|	String|	是|	数据库名称|
|sql|	String	|是	|sql语句|
|success|	Function|	否|	接口调用成功的回调|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码

```javascript
// 创建表
appcan.executeSql({
    name: 'test',
    sql: 'CREATE TABLE person (_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, age SMALLINT)',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
// 插入数据
appcan.executeSql({
    name: 'test',
    sql: 'INSERT INTO person VALUES (NULL, "john", 30)',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
appcan.executeSql({
    name: 'test',
    sql: 'INSERT INTO person VALUES (NULL, "Tim", 35)',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
```

### 注意事项

* 手动拼接sql语句时注意防止注入
* 需要查询结果请使用 selectSql 方法

### 执行事务操作

appcan.executetTansaction(OBJECT)

### OBJECT参数说明

|参数	|类型	|必填	|说明|
|-----|------|-----|-----|
|name|	String|	是	|数据库名称|
|operation|	String|	是|	事务操作类型（begin、commit、rollback）|
|success|	Function|	否|	接口调用成功的回调|
|fail	|Function|	否|	接口调用失败的回调函数|
|complete	|Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码

```javascript
// 开始事务
appcan.executetTansaction({
    name: 'test',
    operation: 'begin',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
// 提交事务
appcan.executetTansaction({
    name: 'test',
    operation: 'commit',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
```

### 注意事项

安卓端支持事务嵌套，iOS端不支持

### 执行sql查询

appcan.selectSql(OBJECT)

### OBJECT参数说明

|参数	|类型	|必填	|说明|
|----|-----|-----|-----|
|name|	String	|是|	数据库名称|
|sql	|String|	是|	sql语句|
|success|	Function|	否	|接口调用成功的回调，返回查询结果|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明

|参数	|类型|	说明|
|-----|-----|-----|
|data|	Array|	查询到的结果集合|

### 示例代码

```javascript
appcan.selectSql({
    name: 'test',
    sql: 'SELECT * FROM person WHERE age >= 33',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
```

### 关闭数据库

appcan.closeDatabase(OBJECT)

### OBJECT参数说明

|参数	|类型	|必填	|说明|
|-----|-----|-----|-----|
|name	|String|	是|	数据库名称|
|success	|Function	|否	|接口调用成功的回调|
|fail|	Function|否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码

```javascript
appcan.closeDatabase({
    name: 'test',
    success(res) {
        console.log(res)
    },
    error(error) {
        console.error(error)
    }
})
```

