---
title: video autopaly 自动播放
date: 2022-01-22 20:30:00
sidebar: auto
permalink: /pages/video-autoplay
categories: 
  - 前端
tags: 
  - html
author: 
  name: reoreo-zyt
  link: https://github.com/reoreo-zyt
---

### 1、问题描述

```html
<video controls width="750" autoplay loop class="video">
    <source
      src="*"
      type="video/mp4" />
</video>
```

> 使用 autoplay="autoplay" 也无效

### 2、原因及解决方案

原因：各个浏览器有自动播放策略（Autoplay）的限制，在浏览器无交互操作前，不允许媒体文件（有声音）自动播放。

解决方案：加 muted 属性，让浏览器没有自动播放策略的限制。

```html
<video controls width="750" autoplay loop class="video" muted>
    <source
      src="*"
      type="video/mp4" />
</video>
```
