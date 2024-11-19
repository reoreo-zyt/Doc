---
title: ubuntu 22 环境配置 nginx 部署静态网站（react webpack项目）
date: 2024-10-19 20:36:47
permalink: /pages/472ac2/
sidebar: auto
categories:
  - 服务器
tags:
  - nginx
  - linux
author: 
  name: reoreo-zyt
  link: https://github.com/reoreo-zyt
---

### 项目预览

部署一个纯前端项目，项目使用webpack打包。

[开源项目地址-仿官方网站](https://github.com/reoreo-zyt/react-web)

### 准备部署环境

* ubuntu 22
* nodejs 版本18以上
* nginx
* git

进入管理员模式

```bash
sudo su
```

在云服务平台开放安全组，确保55510端口开放（nginx配置端口）
[可以查看腾讯云或者其他官方文档](https://cloud.tencent.com/developer/article/1985662%3Ffrom=15425)

在服务器上开启防火墙，只允许22、55510、80等端口允许访问

```bash
sudo ufw enable
sudo ufw allow 80
sudo ufw allow 22
sudo ufw allow 55510
```

下载 nginx git

```bash
apt install nginx
apt install git
```

下载 node

ubuntu 22 目前下载 node 会出现问题，只能下载到 12 的最新版本。解决方法如下：

先移除掉当前的 node 环境，否则会报错

```bash
sudo dpkg --remove --force-remove-reinstreq libnode-dev
```

```bash
curl -sL https://deb.nodesource.com/setup_20.x | bash -
#文件名setup_20.x中的数字20，就是目前能找到最新的LTS版本，自然可以将20改成21，以后有22也同理
apt install nodejs
```

克隆 git 项目

```bash
git clone https://github.com/reoreo-zyt/react-web.git
```

如果国际网络不行可以使用以下方式

```bash
git clone https://gitclone.com/github.com/reoreo-zyt/react-web.git
```

下载完成后进入项目打包

```bash
yarn
yarn build
```

配置 nginx 并重启它

```bash
cd ect/nginx
vim nginx.conf
```

> 按 i 插入修改，按 :wq 保存文件

```conf
http: {
    server {
                listen 55510;
                server_name localhost;

                location / {
                        root /projects/react-web/dist;
                        index index.html index.htm;
                }
   }
}
```

重启 nginx

```bash
nginx -s reload
```

可以通过公网 ip 进行访问了！
