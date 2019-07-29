## 项目名称：众安保险

#### 官网

https://www.zhongan.com/

#### 上线网址

http://47.94.157.240:6666

#### 仓库地址

git@github.com:gzh51904/zhongan.git

## 使用技术与框架

react、react-router、react-redux、redux、antd-UI、video-react插件、axios

## 项目总体框架

![](C:\Users\q1871\Desktop\momo\zhongan-cli\cli.png)

## 团队分工

组长：莫坚培

成员：郭样；胡俊森；曾维锟

#### 负责模块说明

###### 莫坚培：

- 搭建项目脚手架，完成项目总体框架搭建
- 完成头条页面样式、子页面样式、我的头条、头条详情页面样式
- 完成头条各页面逻辑、根据url的参数动态渲染头条列表
- 完成头条详情样式、根据url的参数动态渲染数据

###### 曾维锟：

- 完成App发现页，应用了redux共享数据，完成发现页的样式
- 完成后台管理系统，应用了antd和React技术，实现商品列表动态渲染，实现商品的增删改查

###### 胡俊森：

- 完成‘我的’路由页
- 实现登陆注册功能
- 发现页面登录权限

###### 郭样：

- 完成App首页样式，子导航页面样式，自适应布局
- 完成详情页，搜索页样式

## 目录结构

```
|-- README.md
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- g_images
|   |   |-- elves.jpg
|   |   `-- youxuan.png
|   |-- index.html
|   `-- manifest.json
`-- src
    |-- App.js
    |-- api
    |   |-- index.js
    |   `-- require.js
    |-- assets
    |   `-- img
    |       |-- find.png
    |       |-- find_on.png
    |       |-- home.png
    |       |-- home_on.png
    |       |-- my.png
    |       |-- my_on.png
    |       |-- newpeople.jpg
    |       |-- notLogin.png
    |       |-- toutiao.png
    |       `-- toutiao_on.png
    |-- css
    |   |-- App.scss
    |   `-- base.css
    |-- index.js
    |-- pages
    |   |-- Discover
    |   |   |-- Discover.scss
    |   |   |-- MyNav
    |   |   |   |-- Ucarowner.jsx
    |   |   |   |-- Ufamily.jsx
    |   |   |   |-- Uhealth.jsx
    |   |   |   `-- Utrip.jsx
    |   |   `-- index.jsx
    |   |-- Goods
    |   |   |-- Goods.scss
    |   |   `-- index.jsx
    |   |-- Home
    |   |   |-- component
    |   |   |   |-- Bus
    |   |   |   |   `-- index.jsx
    |   |   |   |-- Health
    |   |   |   |   `-- index.jsx
    |   |   |   |-- MyHome
    |   |   |   |   |-- MyHome.scss
    |   |   |   |   `-- index.jsx
    |   |   |   |-- Parent_child
    |   |   |   |   `-- index.jsx
    |   |   |   |-- Penates
    |   |   |   |   `-- index.jsx
    |   |   |   |-- RenderList.jsx
    |   |   |   |-- Tourist
    |   |   |   |   `-- index.jsx
    |   |   |   `-- Treasure
    |   |   |       `-- index.jsx
    |   |   |-- guo_icon
    |   |   |   |-- demo.css
    |   |   |   |-- demo_index.html
    |   |   |   |-- iconfont.css
    |   |   |   |-- iconfont.eot
    |   |   |   |-- iconfont.js
    |   |   |   |-- iconfont.svg
    |   |   |   |-- iconfont.ttf
    |   |   |   |-- iconfont.woff
    |   |   |   `-- iconfont.woff2
    |   |   |-- index.js
    |   |   `-- scss
    |   |       |-- Gcomponent.scss
    |   |       `-- Home.scss
    |   |-- Mine
    |   |   |-- Mine.scss
    |   |   `-- index.js
    |   `-- News
    |       |-- News.scss
    |       |-- components
    |       |   |-- MyNews
    |       |   |   |-- MyNews.jsx
    |       |   |   |-- MyNews.scss
    |       |   |   `-- pages
    |       |   |       |-- comment.jsx
    |       |   |       |-- course.jsx
    |       |   |       |-- pk.jsx
    |       |   |       `-- video.jsx
    |       |   |-- NewsBody
    |       |   |   |-- NewsBody.jsx
    |       |   |   `-- NewsBody.scss
    |       |   |-- NewsItem
    |       |   |   |-- NewsItem.jsx
    |       |   |   `-- NewsItem.scss
    |       |   |-- NewsTop
    |       |   |   |-- NewsTop.scss
    |       |   |   `-- newsTop.jsx
    |       |   |-- ZaNews.jsx
    |       |   `-- public
    |       |       |-- Advance
    |       |       |   |-- Advance.jsx
    |       |       |   `-- Advance.scss
    |       |       `-- Course
    |       |           |-- Course.jsx
    |       |           `-- Course.scss
    |       |-- data
    |       |   |-- FeHelper.json
    |       |   |-- FeHelper2.json
    |       |   |-- FeHelper3.json
    |       |   `-- FeHelper4.json
    |       |-- iconfont
    |       |   |-- demo.css
    |       |   |-- demo_index.html
    |       |   |-- iconfont.css
    |       |   |-- iconfont.eot
    |       |   |-- iconfont.js
    |       |   |-- iconfont.svg
    |       |   |-- iconfont.ttf
    |       |   |-- iconfont.woff
    |       |   `-- iconfont.woff2
    |       |-- img
    |       |   |-- Advance
    |       |   |   |-- ban1.png
    |       |   |   |-- ban2.png
    |       |   |   |-- ban3.jpg
    |       |   |   `-- ban4.jpg
    |       |   |-- doc1.png
    |       |   |-- doc2.png
    |       |   |-- doc3.png
    |       |   |-- doc4.png
    |       |   |-- doc5.png
    |       |   |-- doc6.png
    |       |   |-- down_icon.png
    |       |   |-- mynews_comment.png
    |       |   |-- mynews_course.png
    |       |   |-- mynews_pk.png
```

