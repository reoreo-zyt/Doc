---
title: react-router 添加路由刷新页面后显示 404
date: 2024-10-10 20:30:00
sidebar: auto
permalink: /pages/react-router-404
categories: 
  - 前端
tags: 
  - react-router
author: 
  name: reoreo-zyt
  link: https://github.com/reoreo-zyt
---

在代码中，我们配置了嵌套路由：

```ts
import React from "react";
import { lazy } from "react";
import LazyImportComponent from "@src/components/lazyImportComponent";

const routes = [
  {
    path: "/",
    element: (
      <LazyImportComponent
        lazyChildren={lazy(() => import("@components/Layout"))}
      />
    ),
    children: [
      {
        path: "/",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/Home"))}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/About"))}
          />
        ),
      }
    ],
  },
];

export default routes;
```

通过链接访问可以，刷新后就不行了。

解决方案 在 webpack 的 devServer 里添加：

```js
historyApiFallback: false, // react-router 添加路由刷新页面后显示404，刷新之后history中的数据没有保存
```
