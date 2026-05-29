---
title: 使用示例
---

# blkops 使用示例

## 查找并刷写 boot 分区
```bash
blkops -s boot
blkops -w boot.img boot
```

## 备份当前 boot 分区

```bash
blkops -d boot boot_backup.img
```
## 批量操作

```bash
for p in boot vendor dtbo; do
blkops -d p{p}.img
done
```
