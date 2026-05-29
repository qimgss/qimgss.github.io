---
title: 快速开始
---

# 快速开始

本章带你快速完成 blkops 的核心功能。

---

## 1️⃣ 搜索分区
```bash
blkops -s boot
```
输出信息示例：
```
Dumping <partition> to <image>
Detected slot suffix: <Slot>
Source device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Block device opened, size: <Block size> bytes
Creating output file: <image>
Image size: <image size>
Device size: <partition size>
Starting dump operation...
Dumping: <progress> (<partition size>/<image size>) - <write speed>/s
✅ Dump completed: <image size> written in <write time> (<write speed>/s)
Successfully dumpedd <partition> to <image>
```
---

## 2️⃣ 写入镜像

使用 `-w` 或 `--write` 将镜像写入指定分区：
```bash
$ blkops -w "<image>" "<partition>"
```
输出信息示例：
```
Writing <image> to partition: <partition>
Detected slot suffix: <Slot>
Target device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Block device opened, size: <Block size> bytes
Opening image: <image>
Image size: <image size>
Device size: <partition size>
Starting flash operation...
Flashing: 100% (<image size>/<partition size>) - <write speed>/s
Flushing device cache...
✅ Flash completed: <image size> written in <write time> (<write speed>/s)
Successfully wrote <image> to device: /dev/block/xxx
```

> ⚠️ 该操作会覆盖设备上的 boot 分区

---

## 3️⃣ 提取分区
以boot分区为例
```bash
blkops -d boot boot.img
```

输出信息示例：
```
Dumping <partition> to <image>
Detected slot suffix: <Slot>
Source device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Opening block device: device: /dev/block/xxx
Block device opened, size: <Block size> bytes
Creating output file: <image>
Image size: <image size>
Device size: <partition size>
Starting dump operation...
Dumping: <progress> (<partition size>/<image size>) - <write speed>/s
✅ Dump completed: <image size> written in <write time> (<write speed>/s)
Successfully dumpedd <partition> to <image>
```

---

## 常见组合

| 目的 | 命令 |
|---|---|
| 查找分区 | `blkops -s <partition>` |
| 刷写镜像 | `blkops -w image.img partition` |
| 备份分区 | `blkops -d partition backup.img` |

👉 更多用法见 [CLI 使用](/cli/)