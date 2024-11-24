---
title: vue 项目搭建
date: 2024-11-21 19:24:46
permalink: /pages/b8847a/
sidebar: auto
categories:
  - 前端
tags:
  - vue2
  - vue3
  - vite
  - webpack
author:
  name: reoreo-zyt
  link: https://github.com/reoreo-zyt
---

### 环境

目前前端项目主流的搭建有两种：

- 使用 webpack
- 使用 [vite](https://cn.vite.dev/)

官方提供的脚手架有 `@vue/cli`（现在官方推荐使用 `create-vue` 来创建基于 `Vite` 的新项目。）以及 `create-vue`。

### vue2

需要兼容 `IE11`，创建 `vue2` 的项目。

```bash
npm create vue@legacy
```

为了支持使 `vite` 项目支持 `vue2`，可以在 `vite.config.js` 看到该插件已被引用。

```bash
import vue2 from '@vitejs/plugin-vue2'
```

在你自己编写满足需求的 `vite` 插件前，你可以在 [awesome-vite](https://github.com/vitejs/awesome-vite#plugins) 中查看有哪些插件可以使用。

在 windows 系统下，文件会默认使用 CRLF 的行尾序列。`vite` 创建的文件默认使用 LF 的行尾序列，在跨平台项目中，可以统一为 LF 行尾序列。可以参考[此处](https://github.com/Daotin/issue-blog/issues/6)配置。

在搭建的项目中，可以看到 eslint 配置好了，不过，有一个问题是，eslint 把格式化的功能也做了。

在 vscode 设置中，可以把 format on save 勾选上，这样保存文件时，会自动格式化。然后将 editor 的默认格式化工具设置为 prettier，这样在保存文件时，会优先使用 prettier 格式化。

修改 eslint 配置文件

```js
module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    // "@vue/eslint-config-prettier" 取消 eslint 的格式化功能
  ],
};
```

`.prettierrc` 配置格式化文件

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": true,
  "singleQuote": true,
  "semi": false,
  "trailingComma": "none",
  "bracketSpacing": true
}
```
