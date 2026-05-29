import{c as a,Q as e,j as n,m as t}from"./chunks/framework.DS5OPS01.js";const h=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"title":"快速开始"},"headers":[],"relativePath":"guide/quick-start.md","filePath":"guide/quick-start.md"}'),i={name:"guide/quick-start.md"};function p(l,s,c,o,d,g){return e(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本章带你快速完成 blkops 的核心功能。</p><hr><h2 id="_1️⃣-搜索分区" tabindex="-1">1️⃣ 搜索分区 <a class="header-anchor" href="#_1️⃣-搜索分区" aria-label="Permalink to &quot;1️⃣ 搜索分区&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blkops</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boot</span></span></code></pre></div><p>输出信息示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dumping &lt;partition&gt; to &lt;image&gt;</span></span>
<span class="line"><span>Detected slot suffix: &lt;Slot&gt;</span></span>
<span class="line"><span>Source device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Block device opened, size: &lt;Block size&gt; bytes</span></span>
<span class="line"><span>Creating output file: &lt;image&gt;</span></span>
<span class="line"><span>Image size: &lt;image size&gt;</span></span>
<span class="line"><span>Device size: &lt;partition size&gt;</span></span>
<span class="line"><span>Starting dump operation...</span></span>
<span class="line"><span>Dumping: &lt;progress&gt; (&lt;partition size&gt;/&lt;image size&gt;) - &lt;write speed&gt;/s</span></span>
<span class="line"><span>✅ Dump completed: &lt;image size&gt; written in &lt;write time&gt; (&lt;write speed&gt;/s)</span></span>
<span class="line"><span>Successfully dumpedd &lt;partition&gt; to &lt;image&gt;</span></span></code></pre></div><hr><h2 id="_2️⃣-写入镜像" tabindex="-1">2️⃣ 写入镜像 <a class="header-anchor" href="#_2️⃣-写入镜像" aria-label="Permalink to &quot;2️⃣ 写入镜像&quot;">​</a></h2><p>使用 <code>-w</code> 或 <code>--write</code> 将镜像写入指定分区：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blkops</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;image&gt;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;partition&gt;&quot;</span></span></code></pre></div><p>输出信息示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Writing &lt;image&gt; to partition: &lt;partition&gt;</span></span>
<span class="line"><span>Detected slot suffix: &lt;Slot&gt;</span></span>
<span class="line"><span>Target device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Block device opened, size: &lt;Block size&gt; bytes</span></span>
<span class="line"><span>Opening image: &lt;image&gt;</span></span>
<span class="line"><span>Image size: &lt;image size&gt;</span></span>
<span class="line"><span>Device size: &lt;partition size&gt;</span></span>
<span class="line"><span>Starting flash operation...</span></span>
<span class="line"><span>Flashing: 100% (&lt;image size&gt;/&lt;partition size&gt;) - &lt;write speed&gt;/s</span></span>
<span class="line"><span>Flushing device cache...</span></span>
<span class="line"><span>✅ Flash completed: &lt;image size&gt; written in &lt;write time&gt; (&lt;write speed&gt;/s)</span></span>
<span class="line"><span>Successfully wrote &lt;image&gt; to device: /dev/block/xxx</span></span></code></pre></div><blockquote><p>⚠️ 该操作会覆盖设备上的 boot 分区</p></blockquote><hr><h2 id="_3️⃣-提取分区" tabindex="-1">3️⃣ 提取分区 <a class="header-anchor" href="#_3️⃣-提取分区" aria-label="Permalink to &quot;3️⃣ 提取分区&quot;">​</a></h2><p>以boot分区为例</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blkops</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boot.img</span></span></code></pre></div><p>输出信息示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dumping &lt;partition&gt; to &lt;image&gt;</span></span>
<span class="line"><span>Detected slot suffix: &lt;Slot&gt;</span></span>
<span class="line"><span>Source device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Opening block device: device: /dev/block/xxx</span></span>
<span class="line"><span>Block device opened, size: &lt;Block size&gt; bytes</span></span>
<span class="line"><span>Creating output file: &lt;image&gt;</span></span>
<span class="line"><span>Image size: &lt;image size&gt;</span></span>
<span class="line"><span>Device size: &lt;partition size&gt;</span></span>
<span class="line"><span>Starting dump operation...</span></span>
<span class="line"><span>Dumping: &lt;progress&gt; (&lt;partition size&gt;/&lt;image size&gt;) - &lt;write speed&gt;/s</span></span>
<span class="line"><span>✅ Dump completed: &lt;image size&gt; written in &lt;write time&gt; (&lt;write speed&gt;/s)</span></span>
<span class="line"><span>Successfully dumpedd &lt;partition&gt; to &lt;image&gt;</span></span></code></pre></div><hr><h2 id="常见组合" tabindex="-1">常见组合 <a class="header-anchor" href="#常见组合" aria-label="Permalink to &quot;常见组合&quot;">​</a></h2><table tabindex="0"><thead><tr><th>目的</th><th>命令</th></tr></thead><tbody><tr><td>查找分区</td><td><code>blkops -s &lt;partition&gt;</code></td></tr><tr><td>刷写镜像</td><td><code>blkops -w image.img partition</code></td></tr><tr><td>备份分区</td><td><code>blkops -d partition backup.img</code></td></tr></tbody></table><p>👉 更多用法见 <a href="/blkops/cli/">CLI 使用</a></p>`,24)])])}const k=a(i,[["render",p]]);export{h as __pageData,k as default};
