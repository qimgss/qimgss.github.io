---
title: 搜索Block原位置
---

# 搜索Block原位置

使用 `-w` 或 `--write` 将镜像写入指定分区：
```bash
$ blkops -s <partition>
```
输出信息示例：
```
Searching for partition: <partition>
Detected slot suffix: <Slot>
Found: /dev/block/xxx
```
纯文本
## 参数说明

| 参数 | 说明 |
|---|---|
| `<partition>` | 目标分区名称 |

另外，如果你添加`-p`参数，则只输出原位置
``` bash
$ blkops -p -s <partition>
/dev/block/xxx
```