---
sidebar_position: 4.3
---


# 1Panel搭建教程
作者：[小满1221](https://www.yhdzz.cn/)


:::warning
多图警告
:::

## 部署基础环境

单击 `网站`->`运行环境`->`创建运行环境`

![1p_CreateRunEnv.png](../../static/img/docs/4/1p_CreateRunEnv.png)

1. 设置名称
2. 应用为PHP，8，版本为：8.x.xx
3. 修改端口（不冲突即可）
4. 拓展镜像源请选择清华大学镜像源

![1p_SelectPHPMirrors.png](../../static/img/docs/4/1p_SelectPHPMirrors.png)

拓展模板选择：WordPress

:::warning
注意：默认扩展需要删除`pdo_mysql`并添加`sg16`
:::

最终的扩展列表

![1p_FinalList.png](../../static/img/docs/4/1p_FinalList.png)

确认无误后单击确认按钮即可，此过程取决你的速度

完成后的图片

![1p_BuildPHPEnv.png](../../static/img/docs/4/1p_BuildPHPEnv.png)


## 创建网站

![1p_CreateSite.png](../../static/img/docs/4/1p_CreateSite.png)

选择上面蓝色的运行环境，类型选择PHP，运行环境选择：刚才安装的PHP81
域名：访问者的域名

代号：网站对应的目录，例:如果设置成`wp`

对应主目录:`/opt/1panel/www/sites/wp`

确认好信息后单击右下角确认

然后单击你的域名
![1p_ClickYourDomain.png](../../static/img/docs/4/1p_ClickYourDomain.png)

在伪静态页面中，单击方案下拉框，选择`wp2`,然后保存并重载

![1p_PseudoStaticSetting.png](../../static/img/docs/4/1p_PseudoStaticSetting.png)

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
![1p_EnterSiteFolder.png](../../static/img/docs/4/1p_EnterSiteFolder.png)

将这几个文件删除
![1p_DeleteDefaultFile.png](../../static/img/docs/4/1p_DeleteDefaultFile.png)

然后鼠标悬停到    `上传/下载`	在弹出的下拉列表里选择远程下载

![1p_OpenDownloadBox.png](../../static/img/docs/4/1p_OpenDownloadBox.png)

下载WordPress
官网链接：https://cn.wordpress.org/download/
右键单击红框处，单击 复制链接地址
![1p_WordPressWebSite.png](../../static/img/docs/4/1p_WordPressWebSite.png)


或者直接复制此链接：
```url
https://cn.wordpress.org/latest-zh_CN.zip
```
填进去然后单击右下角确认等待下载完成

![1p_DownloadWordPress.png](../../static/img/docs/4/1p_DownloadWordPress.png)

下载完成后：
1. 单击压缩包
2. 鼠标悬停在更多
3. 右键后点击解压

![1p_UnzipWordPress.png](../../static/img/docs/4/1p_UnzipWordPress.png)

解压完毕的截图

![1p_UnzipWordPressFinish.png](../../static/img/docs/4/1p_UnzipWordPressFinish.png)


进入新出来的文件夹，然后将文件剪切出来

![1p_CutAllFiles.png](../../static/img/docs/4/1p_CutAllFiles.png)

然后回到上一级目录，单击粘贴


![1p_PasteAllFiles.png](../../static/img/docs/4/1p_PasteAllFiles.png)

最后将WordPress文件夹和刚才下载压缩包删除就可以了


![1p_DeleteUnusedFIles.png](../../static/img/docs/4/1p_DeleteUnusedFIles.png)


### 创建数据库

（未安装的情况下单击应用商店自行下载）

![1p_CreateDatabase.png](../../static/img/docs/4/1p_CreateDatabase.png)

记录账号，密码，数据库名

因为1Panel使用Docker，所以我们还需要单击链接信息获取链接信息

![1p_DatabaseConnectInfo.png](../../static/img/docs/4/1p_DatabaseConnectInfo.png)

记下地址和端口信息

### 运行安装程序
接下来我们访问网站（请提前将域名解析到你的服务器或者将CDN设置好）

如果无误的情况下，和截图的一样就行了

![1p_WordPressInstall.png](../../static/img/docs/4/1p_WordPressInstall.png)


单击现在就开始
然后按照对应的提示，填写对应的地址，表前缀不了解的不用管

![1p_InputWordPressDatabaseInfo.png](../../static/img/docs/4/1p_InputWordPressDatabaseInfo.png)

填写完毕后单击提交

正常情况下会出现下面的样式

![1p_ConfirmDatabaseInfo.png](../../static/img/docs/4/1p_ConfirmDatabaseInfo.png)

单击运行安装程序

![1p_InputWordPressSiteInfo.png](../../static/img/docs/4/1p_InputWordPressSiteInfo.png)

填写对应的信息，然后单击 安装WordPress

![1p_InstallSuccessful.png](../../static/img/docs/4/1p_InstallSuccessful.png)

完成后的截图

![1p_LoginWordPress.png](../../static/img/docs/4/1p_LoginWordPress.png)

单击登录

输入你刚才设置的账号密码

![1p_SettingWordPressPermaLink.png](../../static/img/docs/4/1p_SettingWordPressPermaLink.png)

到此页面后先设置`固定链接`

![1p_SettingWordPressPermaLinkValue.png](../../static/img/docs/4/1p_SettingWordPressPermaLinkValue.png)

笔者建议

```nginx
/%post_id%.html
```

设置完成后单击左下角保存更改

## 安装主题

![1p_InstallTheme.png](../../static/img/docs/4/1p_InstallTheme.png)

单击侧边栏的`外观`->`主题`->`安装主题`

![1p_ThemeUpload.png](../../static/img/docs/4/1p_ThemeUpload.png)

选择主题文件并上传即可

![1p_ThemeFileSelect.png](../../static/img/docs/4/1p_ThemeFileSelect.png)

上传成功后就可以启用了

![1p_ThemeEnable.png](../../static/img/docs/4/1p_ThemeEnable.png)



教程结束




## 疑难解答


### 疑难解答Ａ：容器停止

![图片 1](https://img.1v.fit/2026/02/27/8MH.png)

请在容器页面配置镜像源和删除没使用的镜像后重试



### 疑难解答B：上传的文件超过`php.ini`文件中定义的`upload_max_filesize`值

![1p_upload_max_filesize.png](../../static/img/docs/4/1p_upload_max_filesize.png)

单击 `网站`->`运行环境`->`创建运行环境`->`目录图标`

![1p_EnterPHPRuntimeEnvFolder.png](../../static/img/docs/4/1p_EnterPHPRuntimeEnvFolder.png)

找到`conf文件夹`->`php.ini`文件，单击打开

![1p_FindPHPConfigFile.png](../../static/img/docs/4/1p_FindPHPConfigFile.png)

![1p_FixPHPConfig.png](../../static/img/docs/4/1p_FixPHPConfig.png)

使用快捷键`Ctrl + F` 查找 `upload_max_filesize`

![1p_FIndupload_max_filesize.png](../../static/img/docs/4/1p_FIndupload_max_filesize.png)

改成合适的大小。笔者推荐:`50M`

最后回到运行环境处，单击重启即可

![1p_RestartPHPEnv.png](../../static/img/docs/4/1p_RestartPHPEnv.png)

### 疑难解答C：无法创建目录

![1p_WordPressFolderNoPermiession.png](../../static/img/docs/4/1p_WordPressFolderNoPermiession.png)

先进入网站文件夹

![1p_EnterSiteFolder.png](../../static/img/docs/4/1p_EnterSiteFolder.png)

先全选所有文件，然单击权限

![1p_SelectAllFiles.png](../../static/img/docs/4/1p_SelectAllFiles.png)

然后按照`wp-config.php`的权限信息设置后保存即可

![1p_ChangeFolderPermission.png](../../static/img/docs/4/1p_ChangeFolderPermission.png)

### 疑难解答D：安装主题提示`SourceGuardian Loader - add 'sourceguardian.enable_vm_hybrid=1' to php.ini which is required for running this protected script with hybrid vm PHP on this platform`
![](https://a1.boltp.com/2026/03/25/69c3a7cb22824.png)

![](https://a1.boltp.com/2026/03/25/69c3a2d9c1df9.png)
进入1Panel面板，点击运行环境。选择网站使用的PHP。

![1p_EnterPHPRuntimeEnvFolder.png](../../static/img/docs/4/1p_EnterPHPRuntimeEnvFolder.png)

找到`conf文件夹`->`php.ini`文件，单击打开。

![](https://a1.boltp.com/2026/03/25/69c3a4e95eab2.png)
在`php.ini`文件里，滑倒最底下。输入 `sourceguardian.enable_vm_hybrid=1`。然后保存。

![1p_RestartPHPEnv.png](../../static/img/docs/4/1p_RestartPHPEnv.png)
最后回到运行环境处，单击重启即可。
