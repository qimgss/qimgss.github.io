---
title: 提取镜像
---

# 提取镜像到指定路径

使用 `-w` 或 `--write` 将镜像写入指定分区：
```bash
$ blkops -w "<partition>" "<image>"
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

## 参数说明

| 参数 | 说明 |
|---|---|
| `<partition>` | 目标分区名称 |
| `<image>` | 待写入的镜像文件 |