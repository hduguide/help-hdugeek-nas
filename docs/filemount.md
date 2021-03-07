## 文件挂载 ##

- **大部分情况下你只需使用主页的 `资料下载` 即可实现文件操作，此处方法仅适合在实验室的纯校园网用户**

## PC 挂载虚拟磁盘 ##

- **PC 挂载虚拟磁盘仅适合完全校园网用户，但是操作如同本地文件一样方便**

### WebDAV 网络驱动器
- 特点：一次设置，永久访问，无需打开网页即可访问服务器资源
- URL/服务器地址填写内网版ip地址
- WebDAV 未采用 SSL/https 加密，端口5005

#### 1.适用于 Windows
#### 1.1Windows 客户端 RaiDrive
 - 优先推荐的客户端，支持各种网盘和文件服务器，无需破解

首先访问[官方网站](https://www.raidrive.com/)下载软件并安装，安装后到设置中改中文，或者在英文环境下按照如下要求添加：

![]( https://geeknas-1252054182.cos.ap-shanghai.myqcloud.com/raidrive.png)

注意：设备选择`其他`，地址的`安全`需要取消选择，即 http 模式，帐号密码填自己的，内网ip请访问vpnindex.hdugeek.top获取
#### 1.2Windows 客户端 netdrive

 - 不太推荐的客户端，需要破解

自行安装软件后在 Drivers 选项卡最下面找到 WebDAV ，点击右边的设置按钮，参照 RaiDrive 设置，并输入你的用户名和密码，设置完点击 Connect 即可访问。

#### 2.Windows 文件资源管理器

 - Win10 默认只支持 https 的WebDAV映射网络驱动器，所以需要修改一次注册表来同时支持 http 和 https，嫌麻烦的可以使用客户端，但是原生的映射更加简洁和干净

1.打开注册表(regedit)，定位到
```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters
```
把 `BasicAuthLevel` 键值改成2，即同时支持 http 和 https，默认(1)只支持 https

![](https://geeknas-1252054182.cos.ap-shanghai.myqcloud.com/regedit.png)

 - 在某些版本的 Windows 操作系统中，WebDAV 驱动器的最大文件大小被限制为 50MB，也需要修改注册表来解禁

2.定位到同一目录
```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters
```
把 `FileSizeLimitInBytes` 键值由 50,000,000 (50MB) 修改为：4294967295（0xffffffff）字节，即4G

 - 为了使设置快速生效，这里重启 Webclient 服务（管理员模式）：

```
net stop webclient
net start webclient
```

![](https://geeknas-1252054182.cos.ap-shanghai.myqcloud.com/guanliyuan.png)

3.完成以上步骤后，映射网络驱动器有两种方法：

1. 右键桌面的“此电脑”-》“映射网络驱动器”，在文件夹一栏填写`http://ip:5005` (ip请访问vpnindex.hdugeek.top获取)
2. 双击桌面的“此电脑”-》找个空位右键“添加一个网络位置”，网络地址一栏填写：`http://ip:5005` (ip请访问vpnindex.hdugeek.top获取)

然后输入你的账户和密码即可访问，在你电脑磁盘中将会多出一个盘符或者网络位置

#### 2.适用于 MAC & Linux

详情百度 mac/Ubuntu webdav文件服务的概念及设置

### FTP
- 优点：可以无需软件，可批量下载
- 缺点：文件必须下载后才能打开
- URL/服务器地址填写填写内网版ip地址
- FTP采用主动连接方式，端口21
- FTP连接尽量选择对 UTF-8 支持较好的软件

在 windows 文件资源管理器（不建议使用浏览器）输入：

- [ftp://ip](ftp://ip) (ip请访问vpnindex.hdugeek.top获取)

然后输入你的账户和密码

在 Windows 下首次使用 ftp 会有`密码错误提示`，在密码无误的前提下出现以下提示：
“打开 ftp 服务器上的文件夹时发生错误 请检查是否有权限访问该文件夹”

![](https://geeknas-1252054182.cos.ap-shanghai.myqcloud.com/ftperror.jpg)

请按照此方法：[打开ftp服务器上的文件夹时发生错误该如何设置](https://jingyan.baidu.com/article/9faa72319e6e92473c28cbef.html) 来取消使用被动 ftp

## 手机访问
手机可以使用支持 FTP & WebDAV 的软件，一般注意以下几点

- URL/服务器地址填写内网版ip地址
- FTP采用主动连接方式，端口21
- FTP连接尽量选择对 UTF-8 支持较好的软件
- WebDAV 未采用 SSL/https 加密，端口5005