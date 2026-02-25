---
title: 无法正常加载CSS
sidebar_position: 6.1
---

# 原因
作者：[小满1221](https://www.yhdzz.cn/)

大部分原因是https里面请求了http的资源

#### 解决方案

先备份数据库：然后在wp_options表里面改地址，应该是有一个地址http开头

或者开强制HTTPS，但是开了可能会多次重定向。