## 内网外入 | CQUPT

##### 地址：https://cqupt.congm.in
##### 博文：https://i.congm.in/cqupt-inner
##### 统计：http://new.cnzz.com/v1/login.php?siteid=1257517721
##### 作者：https://congm.in

### 项目目录
```
  ├── README.md
  ├── nginx_conf     // 两次代理, 绕过80端口
  │    ├── host.congm.in.conf    // nginx配置文件 (校内旧电脑)
  │    └── cqupt.congm.in.conf   // nginx配置文件 (云主机)
  ├── common
  │    └── ...      // 导航侧栏脚本及样式 (通过nginx注入) (打包后)
  ├── static
  │    └── ...      // 主页静态文件 (打包后)
  ├── json
  │    └── ...      // 数据 (快捷链接、捐助列表)
  ├── index.html    // 主页 (打包后)
  └── src
       └── ...      // 目录文件 (打包前)
```