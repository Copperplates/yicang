# yicang_app_server

### 一、介绍

奕藏app的后端仓库。

### 二、软件架构

##### 1.技术栈

###### 1.1.SpringBoot

###### &nbsp; &nbsp; SpringBoot是一个快速开发框架，可以快速搭建项目，省去了繁琐的配置，实现快速开发。其核心思想是约定大于配置，使用注解的方式进行配置，简化了配置文件的编写。同时，SpringBoot大幅度降低了软件耦合度，方便新增和修改模块。

###### 1.2.MybatisPlus

###### &nbsp; &nbsp; MybatisPlus是国产数据持久化框架，降低了数据库注入的风险，同时提供了代码生成器，可以快速生成代码，提高开发效率。本项目使用MybatisPlus负责mapper层的开发，每个mapper继承BaseMapper，可以直接使用MybatisPlus提供的方法，在进行相对复杂的查询时，可以自定义sql语句。

###### 1.3.Mysql

###### &nbsp; &nbsp; Mysql是一款开源的关系型数据库，本项目使用Mysql进行数据存储。

###### 1.4.Docker

###### &nbsp; &nbsp; Docker是一款轻量级的容器化工具，可以将应用程序和依赖打包成一个独立的镜像，方便部署。本项目使用Docker进行部署，方便后续迭代。

###### 1.5.SpringSecurity（后续迭代）

###### &nbsp; &nbsp; SpringSecurity是一款安全框架，可以实现用户认证和授权，本项目考虑使用SpringSecurity进行安全认证和权限控制，增强用户安全性。考虑后续迭代中在登陆部分加上安全认证，使用JWT进行token认证，使用SpringSecurity进行权限控制，使用SpringSecurity进行CSRF防御。

##### 2.项目结构

```
├─yicang_app_server
│  ├─src
│  │  ├─main
│  │  │  ├─java
│  │  │  │  └─com
│  │  │  │      └─yicang_app
│  │  │  │          └─backend
│  │  │  │              ├─config
│  │  │  │              ├─controller
│  │  │  │              ├─mapper
│  │  │  │              ├─entity
│  │  │  │              ├─service
│  │  │  │              │  └─impl
│  │  │  │              ├─constant
│  │  │  │              └─BackendApplication.java
│  │  │  └─resources
│  │  │      ├─docker
│  │  │      ├─sql
│  │  │      └─application.yml
```

### 三、软件技术难点

###### 1.数据库设计

###### 使用mysql数据库，设计表如下：

- 用户表
- 藏品表
- 用户藏品表
- 用户关注藏品表

##### 为了方便分布式部署，采用多个数据库进行存储，使用dynamic-datasource-spring-boot-starter进行动态数据源切换。

```yaml
dynamic:
  primary: user_info
  strict: false
  datasource:
    user_info:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/user_info?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
    user_collection_novel:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/user_collection_novel?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
      user_collection_painting:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/user_collection_painting?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
    user_interest_novel:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/user_interest_novel?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
    user_interest_painting:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/user_interest_painting?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
    collection_ds:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/collection_ds?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: root
```

###### 2.后端接口设计

[接口文档](./doc/api.md)

###### 端口设计尽量原子化，方便前端调用。例如：用户信息的增删改查，对应一个接口，后端根据前端传入的参数自动判断进行操作。

###### 3.前后端分离

- 使用http协议进行通信

###### 4.安全性（后续迭代）

- 使用SpringSecurity进行安全认证
- 使用JWT进行token认证
- 使用SpringSecurity进行权限控制
- 使用SpringSecurity进行CSRF防御

### 四、开发进度

- [x] 1.0.0 2023-03-22 完成基本功能开发
- [ ] 2.0.0 xxxx-xx-xx 完成安全性功能开发