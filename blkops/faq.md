---
title: FAQ
---

# 常见问题

## blkops 需要 root 吗？

是的，blkops 直接操作 block 设备，通常需要 root 权限。

---

## 支持哪些 Android 版本？

blkops 不依赖 Android 版本，只要能访问 `/dev/block` 即可。

---

## 能否用于量产 / 商业项目？

可以，blkops 使用 **Apache-2.0 协议**，允许商用。

---

## 构建失败怎么办？

- 确认 Rust ≥ 1.70
- 确认 Android NDK 路径正确
- Windows 需安装 VS 2022 C++ 工具链

---

## 是否支持 macOS？

目前主要支持 Windows / Linux，macOS 暂未测试。