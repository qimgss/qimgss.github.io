---
layout: home
title: blkops
description: Android 设备 Block 分区操作工具（纯 Rust）
---

# blkops 

<p align="center">
  <img src="https://img.shields.io/badge/rust-1.70%2B-orange.svg" />
  <img src="https://img.shields.io/badge/License-Apache--2.0-blue.svg" />
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux-lightgrey" />
</p>

<br />

> **blkops** 是一个**纯 Rust 编写的 Android CLI 工具**，  
> 用于 **查找、读取、写入 Android 设备的 block 分区**。

---

## ✨ 核心功能

| 功能 | 说明 |
|---|---|
| 🔍 分区搜索 | 快速定位 Android 分区对应的 block 设备 |
| 💾 写入镜像 | 将 `boot.img / vendor.img` 等写入指定分区 |
| 📤 导出分区 | 将设备分区完整导出为镜像文件 |
| ⚡ 高性能 | 直接操作 block 层，无中间抽象 |
| 🛠 跨平台 | 支持 Windows / Linux 构建 |

