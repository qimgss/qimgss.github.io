---
title: 写入镜像
---

# 写入镜像到分区

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

## 参数说明

| 参数 | 说明 |
|---|---|
| `<image>` | 待写入的镜像文件 |
| `<partition>` | 目标分区名称 |

⚠️ **此操作会覆盖分区数据，请谨慎使用**