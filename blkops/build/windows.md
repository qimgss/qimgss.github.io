---
title: Windows 构建 blkops
---

# 在 Windows 上构建 blkops

## 环境要求

- ✅ Visual Studio 2022 Build Tools  
  - 勾选 **“使用 C++ 的桌面开发”**
  - 安装 **Windows SDK**
- ✅ [Rust](https://www.rust-lang.org/tools/install)
- ✅ [Android NDK](https://developer.android.google.cn/ndk/downloads)

> ⚠️ 需要手动修改编译脚本中的 Android NDK 路径

## 构建步骤

在项目根目录执行：
``` powershell
./build-win.ps1
```