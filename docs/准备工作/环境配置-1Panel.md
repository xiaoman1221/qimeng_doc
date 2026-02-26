---
sidebar_position: 4.2
---


# 环境配置 - 1Panel篇
作者：[小满1221](https://www.yhdzz.cn/)


:::warning
多图警告
:::

## 部署基础环境

单击 `网站`->`运行环境`->`创建运行环境`

![图片 2](https://img.1v.fit/2026/02/27/8fB.png)

1. 设置名称
2. 应用为PHP，8，版本为：8.1.xx
3. 修改端口（不冲突即可）
4. 拓展镜像源请选择清华大学镜像源
![图片 5](https://img.1v.fit/2026/02/27/8yo.png)
拓展模板选择：WordPress

:::warning
注意：默认扩展需要删除`pdo_mysql`并添加`ionCube`
:::

最终的扩展列表

![图片 7](https://img.1v.fit/2026/02/27/CIp.png)

确认无误后单击确认按钮即可，此过程取决你的速度

完成后的图片

![图片 11](https://img.1v.fit/2026/02/27/Kdu.png)


## 创建网站
![图片 4](https://img.1v.fit/2026/02/27/C5b.png)选择上面蓝色的运行环境，类型选择PHP，运行环境选择：刚才安装的PHP81
域名：访问者的域名

代号：网站对应的目录，例:如果设置成`wp`

对应主目录:`/opt/1panel/www/sites/wp`

确认好信息后单击右下角确认

然后单击你的域名
![图片 9](https://img.1v.fit/2026/02/27/FrN.png)

在伪静态页面中，单击方案下拉框，选择`wp2`,然后保存并重载

![图片 3](https://img.1v.fit/2026/02/27/CP3.png)

或者直接复制

```nginx
rewrite ^.*/files/(.*)$ /wp-includes/ms-files.php?file=$1 last;
if (!-e $request_filename){
	rewrite ^.+?(/wp-.*) $1 last;
	rewrite ^.+?(/.*\.php)$ $1 last;
	rewrite ^ /index.php last;
}
```

## 下载WordPress

单击上图所示的网站目录的文件夹图标
![图片 8](https://img.1v.fit/2026/02/27/FhY.png)

将这几个文件删除
![图片 6](https://img.1v.fit/2026/02/27/CYr.png)

然后鼠标悬停到    `上传/下载`	在弹出的下拉列表里选择远程下载

![图片 10](https://img.1v.fit/2026/02/27/Fef.png)

下载WordPress
官网链接：https://cn.wordpress.org/download/
右键单击红框处，单击 复制链接地址
![图片 14](https://img.1v.fit/2026/02/27/K1E.png)


或者直接复制此链接：
```url
https://cn.wordpress.org/latest-zh_CN.zip
```
填进去然后单击右下角确认等待下载完成

![图片 17](https://img.1v.fit/2026/02/27/via.png)

下载完成后：
1. 单击压缩包
2. 鼠标悬停在更多
3. 右键后点击解压

![图片 20](https://img.1v.fit/2026/02/27/BS8.png)

解压完毕的截图

![图片 12](https://img.1v.fit/2026/02/27/K9J.png)


进入新出来的文件夹，然后将文件剪切出来

![图片 15](https://img.1v.fit/2026/02/27/vu0.png)

然后回到上一级目录，单击粘贴


![图片 18](https://img.1v.fit/2026/02/27/vNA.png)

最后将WordPress文件夹和刚才下载压缩包删除就可以了


![图片 19](https://img.1v.fit/2026/02/27/BC4.png)


### 创建数据库

（未安装的情况下单击应用商店自行下载）

![图片 13](https://img.1v.fit/2026/02/27/KG9.png)

记录账号，密码，数据库名

因为1Panel使用Docker，所以我们还需要单击链接信息获取链接信息

![图片 16](https://img.1v.fit/2026/02/27/vjT.png)

记下地址和端口信息

### 运行安装程序
接下来我们访问网站（请提前将域名解析到你的服务器或者将CDN设置好）

如果无误的情况下，和截图的一样就行了

![图片 22](https://img.1v.fit/2026/02/27/BVZ.png)


单击现在就开始
然后按照对应的提示，填写对应的地址，表前缀不了解的不用管

![图片 25](https://img.1v.fit/2026/02/27/Jtn.png)

填写完毕后单击提交

正常情况下会出现下面的样式

![图片 21](https://img.1v.fit/2026/02/27/BTW.png)

单击运行安装程序

![图片 24](https://img.1v.fit/2026/02/27/JE7.png)

填写对应的信息，然后单击 安装WordPress

![图片 23](https://img.1v.fit/2026/02/27/JvM.png)

完成后的截图

![图片 27](https://img.1v.fit/2026/02/27/WJQ.png)

单击登录

输入你刚才设置的账号密码

![图片 34](https://img.1v.fit/2026/02/27/Plt.png)

到此页面后先设置`固定链接`

![图片 26](https://img.1v.fit/2026/02/27/Jke.png)

笔者建议

```nginx
/%post_id%.html
```

设置完成后单击左下角保存更改

## 安装主题

![图片 30](https://img.1v.fit/2026/02/27/W4P.png)

单击侧边栏的`外观`->`主题`->`安装主题`

![图片 32](https://img.1v.fit/2026/02/27/P6O.png)

选择主题文件并上传即可

![图片 42](https://img.1v.fit/2026/02/27/s8R.png)

上传成功后就可以启用了

![图片 38](https://img.1v.fit/2026/02/27/hoF.png)



教程结束




## 疑难解答


### 疑难解答Ａ：容器停止

![图片 1](https://img.1v.fit/2026/02/27/8MH.png)

请在容器页面配置镜像源和删除没使用的镜像后重试



### 疑难解答B：上传的文件超过`php.ini`文件红定义的`upload_max_filesize`值

![图片 28](https://img.1v.fit/2026/02/27/WOI.png)

单击 `网站`->`运行环境`->`创建运行环境`->`目录图标`

![图片 29](https://img.1v.fit/2026/02/27/WDC.png)

找到`conf文件夹`->`php.ini`文件，单击打开

![图片 31](https://img.1v.fit/2026/02/27/PUj.png)

![图片 33](https://img.1v.fit/2026/02/27/PaG.png)

使用快捷键`Ctrl + F` 查找 `upload_max_filesize`

![图片 36](https://img.1v.fit/2026/02/27/U0V.png)

改成合适的大小。笔者推荐:`50M`

最后回到运行环境处，单击重启即可

![图片 39](https://img.1v.fit/2026/02/27/hZU.png)

### 疑难解答C：无法创建目录

![图片 41](https://img.1v.fit/2026/02/27/hLc.png)

先进入网站文件夹

![图片 43](https://img.1v.fit/2026/02/27/szx.png)

先全选所有文件，然单击权限

![图片 37](https://img.1v.fit/2026/02/27/Uql.png)

然后按照`wp-config.php`的权限信息设置后保存即可

![图片 40](https://img.1v.fit/2026/02/27/hRz.png)
