---
title: 重定向次数过多
sidebar_position: 6.6
---

# 重定向次数过多/ERR_TOO_MANY_REDIRECTS
作者：[小满1221](https://www.yhdzz.cn/)

## 原因

1. 打开了强制SSL但WordPress设置中是http头
2. 开启了CDN，但是打开了强制SSL

## 解决方案

1. 关闭源站的SSL
2. 备份并修改数据库，参考：[无法正常加载CSS](/docs/疑难解答/CSS)
3. 检查CDN，如果CDN设置了SSL，源站的SSL可以不用开,建议打开源站跟随
4. 清理浏览器缓存