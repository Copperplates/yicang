# yicang

> v1.0.0

Base URLs:

* <a href="http://47.97.38.78">正式环境: http://47.97.38.78</a>

# user

## POST user_login

POST /user/login

处理用户登录

> Body 请求参数

```json
{
  "username": "程秀英",
  "password": "ad Ut in mollit"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "success": 1,
  "code": 1000,
  "message": "操作成功",
  "data": null
}
```

```json
{
  "success": 0,
  "code": 10031,
  "message": "错误了捏",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||存放需要返回的数据|
|»» username|string|true|none||none|
|»» password|string|true|none||none|
|»» signature|string|true|none||none|
|»» status|integer|true|none||none|
|»» characterCode|integer|true|none||none|
|»» createTime|string|true|none||none|
|»» updateTime|string|true|none||none|
|»» id|integer|true|none||none|

## POST user_register

POST /user/register

用户注册

> Body 请求参数

```json
{
  "username": "胡磊",
  "password": "aliquip"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "success": 1,
  "code": 1000,
  "message": "注册成功",
  "data": null
}
```

```json
{
  "success": 0,
  "code": 10031,
  "message": "失败原因",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

## POST user_logout

POST /user/logout

用户登出

> Body 请求参数

```json
{
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "success": 0,
  "code": 1000,
  "message": "登出成功",
  "data": null
}
```

```json
{
  "success": 0,
  "code": 10031,
  "message": "登出失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

## GET user_info

GET /user/userInfo

获取用户信息

> Body 请求参数

```json
{
  "username": "廖杰"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "success": 1,
  "code": 10001,
  "message": "操作成功",
  "data": {
    "username": "赵秀英",
    "signature": "veniam dolor sit",
    "status": 1,
    "character_code": 1000,
    "create_time": "1975-03-05 15:17:45"
  }
}
```

```json
{
  "success": 0,
  "code": 10031,
  "message": "aute eu in",
  "data": {
    "username": "毛强",
    "signature": "qui reprehenderit est nisi",
    "status": 1,
    "character_code": 100010,
    "create_time": "2013-02-26 07:22:26"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» username|string|true|none||none|
|»» signature|string¦null|true|none||none|
|»» status|integer|true|none||none|
|»» character_code|integer|true|none||none|
|»» create_time|string|true|none||none|

## GET collection_novel

GET /user/collectionNovel

获取用户的小说藏品列表

> Body 请求参数

```json
{
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "username": "string",
    "novelList": [
      {
        "id": 0,
        "novelName": "string",
        "novelId": 0,
        "boughtTime": "string",
        "updateTime": "string",
        "username": "string"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» username|string|true|none||none|
|»» novelList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» novelName|string|true|none||none|
|»»» novelId|integer|true|none||none|
|»»» boughtTime|string|true|none||none|
|»»» updateTime|string|true|none||none|
|»»» username|string|true|none||none|

## GET collection_painting

GET /user/collectionPainting

获取用户画作藏品列表

> Body 请求参数

```json
{
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "username": "string",
    "paintingList": [
      {
        "id": 0,
        "paintingName": "string",
        "paintingId": 0,
        "boughtTime": "string",
        "updateTime": "string"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» username|string|true|none||none|
|»» paintingList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» paintingName|string|true|none||none|
|»»» paintingId|integer|true|none||none|
|»»» boughtTime|string|true|none||none|
|»»» updateTime|string|true|none||none|

## GET interest_novel_list

GET /user/interestNovelList

获取用户关注的小说列表

> Body 请求参数

```json
{
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "novelList": [
      {
        "id": 0,
        "novelName": "string",
        "novelId": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» novelList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» novelName|string|true|none||none|
|»»» novelId|integer|true|none||none|

## GET interest_painting_list

GET /user/interestPaintingList

获取关注画作列表

> Body 请求参数

```json
{
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "paintingList": [
      {
        "id": 0,
        "paintingName": "string",
        "paintingId": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» paintingList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» paintingName|string|true|none||none|
|»»» paintingId|integer|true|none||none|

## POST user_set_signature

POST /user/setSignature

> Body 请求参数

```json
{
  "username": "string",
  "signature": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» signature|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "username": "string",
    "password": "string",
    "signature": "string",
    "status": 1,
    "characterCode": 0,
    "createTime": "string",
    "updateTime": "string",
    "id": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||存放需要返回的数据|
|»» username|string|true|none||none|
|»» password|string|true|none||none|
|»» signature|string|true|none||none|
|»» status|integer|true|none||none|
|»» characterCode|integer|true|none||none|
|»» createTime|string|true|none||none|
|»» updateTime|string|true|none||none|
|»» id|integer|true|none||none|

# mall/painting

## POST interest_painting

POST /mall/interestPainting

用户关注画作

> Body 请求参数

```json
{
  "username": "string",
  "paintingName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» paintingName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|

## GET get_painting_list

GET /mall/paintingList

获取画作列表

> Body 请求参数

```json
null
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|null| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "novelList": [
      {
        "id": 0,
        "paintingName": "string",
        "painter": "string",
        "introduction": "string",
        "createTime": "string",
        "updateTime": "string",
        "finishTime": "string",
        "filePath": "string",
        "price": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» novelList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» paintingName|string|true|none||none|
|»»» painter|string|true|none||none|
|»»» introduction|string|true|none||none|
|»»» createTime|string|true|none||none|
|»»» updateTime|string|true|none||none|
|»»» finishTime|string¦null|true|none||none|
|»»» filePath|string|false|none||none|
|»»» price|integer|true|none||none|

## GET get_painting_info

GET /mall/paintingInfo

获取小说信息

> Body 请求参数

```json
{
  "paintingName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» paintingName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "paintingName": "string",
    "painter": "string",
    "introduction": "string",
    "createTime": "string",
    "updateTime": "string",
    "finishTime": "string",
    "filePath": "string",
    "price": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|integer|true|none||none|
|»» paintingName|string|true|none||none|
|»» painter|string|true|none||none|
|»» introduction|string|true|none||none|
|»» createTime|string|true|none||none|
|»» updateTime|string|true|none||none|
|»» finishTime|string¦null|true|none||none|
|»» filePath|string|false|none||none|
|»» price|integer|true|none||none|

## POST user_buy_painting

POST /mall/userBuyPainting

> Body 请求参数

```json
{
  "username": "string",
  "paintingName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» paintingName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|

## POST add_painting

POST /mall/addPainting

> Body 请求参数

```json
{
  "id": 0,
  "paintingName": "string",
  "painter": "string",
  "introduction": "string",
  "createTime": "string",
  "updateTime": "string",
  "finishTime": "string",
  "filePath": "string",
  "price": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» paintingName|body|string| 是 |none|
|» painter|body|string| 是 |none|
|» introduction|body|string| 是 |none|
|» createTime|body|string| 是 |none|
|» updateTime|body|string| 是 |none|
|» finishTime|body|string¦null| 是 |none|
|» filePath|body|string| 否 |none|
|» price|body|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

# mall/novel

## GET get_novel_list

GET /mall/novelList

获取小说列表

> Body 请求参数

```json
null
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|null| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "novelList": [
      {
        "id": 0,
        "novelName": "string",
        "writer": "string",
        "introduction": "string",
        "createTime": "string",
        "updateTime": "string",
        "finishTime": "string",
        "filePath": "string",
        "balance": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» novelList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» novelName|string|true|none||none|
|»»» writer|string|true|none||none|
|»»» introduction|string|true|none||none|
|»»» createTime|string|true|none||none|
|»»» updateTime|string|true|none||none|
|»»» finishTime|string¦null|true|none||none|
|»»» filePath|string|false|none||none|
|»»» balance|integer|true|none||none|

## GET get_novel_info

GET /mall/novelInfo

获取小说信息

> Body 请求参数

```json
{
  "novelName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» novelName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "novelName": "string",
    "writer": "string",
    "introduction": "string",
    "createTime": "string",
    "updateTime": "string",
    "finishTime": "string",
    "filePath": "string",
    "balance": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|integer|true|none||none|
|»» novelName|string|true|none||none|
|»» writer|string|true|none||none|
|»» introduction|string|true|none||none|
|»» createTime|string|true|none||none|
|»» updateTime|string|true|none||none|
|»» finishTime|string¦null|true|none||none|
|»» filePath|string|false|none||none|
|»» balance|integer|true|none||none|

## POST interest_novel

POST /mall/interestNovel

关注小说

> Body 请求参数

```json
{
  "username": "string",
  "novelName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» novelName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|

## POST user_buy_novel

POST /mall/userBuyNovel

> Body 请求参数

```json
{
  "username": "string",
  "novelName": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» novelName|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|

## POST add_novel

POST /mall/addNovel

> Body 请求参数

```json
{
  "id": 0,
  "novelName": "string",
  "writer": "string",
  "introduction": "string",
  "createTime": "string",
  "updateTime": "string",
  "finishTime": "string",
  "filePath": "string",
  "balance": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» novelName|body|string| 是 |none|
|» writer|body|string| 是 |none|
|» introduction|body|string| 是 |none|
|» createTime|body|string| 是 |none|
|» updateTime|body|string| 是 |none|
|» finishTime|body|string¦null| 是 |none|
|» filePath|body|string| 否 |none|
|» balance|body|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

# file

## POST file_upload

POST /files/upload

> Body 请求参数

```yaml
file: string
path: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» file|body|string(binary)| 否 |none|
|» path|body|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

## PUT file_update

PUT /files/update

> Body 请求参数

```yaml
path: string
file: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» path|body|string| 否 |none|
|» file|body|string(binary)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

## GET file_download

GET /files/download

> Body 请求参数

```yaml
path: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» path|body|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object¦null|true|none||none|

# 数据模型

<h2 id="tocS_UserInterestPainting">UserInterestPainting</h2>

<a id="schemauserinterestpainting"></a>
<a id="schema_UserInterestPainting"></a>
<a id="tocSuserinterestpainting"></a>
<a id="tocsuserinterestpainting"></a>

```json
{
  "id": 0,
  "paintingName": "string",
  "paintingId": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|paintingName|string|true|none||none|
|paintingId|integer|true|none||none|

<h2 id="tocS_UserInterestNovel">UserInterestNovel</h2>

<a id="schemauserinterestnovel"></a>
<a id="schema_UserInterestNovel"></a>
<a id="tocSuserinterestnovel"></a>
<a id="tocsuserinterestnovel"></a>

```json
{
  "id": 0,
  "novelName": "string",
  "novelId": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|novelName|string|true|none||none|
|novelId|integer|true|none||none|

<h2 id="tocS_PaintingModel">PaintingModel</h2>

<a id="schemapaintingmodel"></a>
<a id="schema_PaintingModel"></a>
<a id="tocSpaintingmodel"></a>
<a id="tocspaintingmodel"></a>

```json
{
  "id": 0,
  "paintingName": "string",
  "painter": "string",
  "introduction": "string",
  "createTime": "string",
  "updateTime": "string",
  "finishTime": "string",
  "filePath": "string",
  "price": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|paintingName|string|true|none||none|
|painter|string|true|none||none|
|introduction|string|true|none||none|
|createTime|string|true|none||none|
|updateTime|string|true|none||none|
|finishTime|string¦null|true|none||none|
|filePath|string|false|none||none|
|price|integer|true|none||none|

<h2 id="tocS_NovelModel">NovelModel</h2>

<a id="schemanovelmodel"></a>
<a id="schema_NovelModel"></a>
<a id="tocSnovelmodel"></a>
<a id="tocsnovelmodel"></a>

```json
{
  "id": 0,
  "novelName": "string",
  "writer": "string",
  "introduction": "string",
  "createTime": "string",
  "updateTime": "string",
  "finishTime": "string",
  "filePath": "string",
  "balance": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|novelName|string|true|none||none|
|writer|string|true|none||none|
|introduction|string|true|none||none|
|createTime|string|true|none||none|
|updateTime|string|true|none||none|
|finishTime|string¦null|true|none||none|
|filePath|string|false|none||none|
|balance|integer|true|none||none|

<h2 id="tocS_UserCollectionPainting">UserCollectionPainting</h2>

<a id="schemausercollectionpainting"></a>
<a id="schema_UserCollectionPainting"></a>
<a id="tocSusercollectionpainting"></a>
<a id="tocsusercollectionpainting"></a>

```json
{
  "id": 0,
  "paintingName": "string",
  "paintingId": 0,
  "boughtTime": "string",
  "updateTime": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|paintingName|string|true|none||none|
|paintingId|integer|true|none||none|
|boughtTime|string|true|none||none|
|updateTime|string|true|none||none|

<h2 id="tocS_UserCollectionNovel">UserCollectionNovel</h2>

<a id="schemausercollectionnovel"></a>
<a id="schema_UserCollectionNovel"></a>
<a id="tocSusercollectionnovel"></a>
<a id="tocsusercollectionnovel"></a>

```json
{
  "id": 0,
  "novelName": "string",
  "novelId": 0,
  "boughtTime": "string",
  "updateTime": "string",
  "username": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|novelName|string|true|none||none|
|novelId|integer|true|none||none|
|boughtTime|string|true|none||none|
|updateTime|string|true|none||none|
|username|string|true|none||none|

<h2 id="tocS_UserInfo">UserInfo</h2>

<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "username": "string",
  "password": "string",
  "signature": "string",
  "status": 1,
  "characterCode": 0,
  "createTime": "string",
  "updateTime": "string",
  "id": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|username|string|true|none||none|
|password|string|true|none||none|
|signature|string|true|none||none|
|status|integer|true|none||none|
|characterCode|integer|true|none||none|
|createTime|string|true|none||none|
|updateTime|string|true|none||none|
|id|integer|true|none||none|

