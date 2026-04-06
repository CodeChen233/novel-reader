# 📱 卖萌的小说阅读器 - PWA 部署指南

把你的小说阅读器变成可以安装到 iPhone/Android 主屏幕的"App"，完全免费！

---

## 📁 PWA 目录结构

```
pwa/
├── index.html       ← 主页面（移动端优化版）
├── manifest.json    ← PWA 应用配置
├── sw.js            ← Service Worker（离线缓存）
└── icons/           ← 各尺寸图标
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 部署到 GitHub Pages（免费，推荐）

### 第一步：创建 GitHub 账号
访问 https://github.com 注册免费账号

### 第二步：新建仓库
1. 点击右上角 **"+"** → **"New repository"**
2. 仓库名填：`novel-reader`（或任意名称）
3. 选择 **Public**（公开，免费托管必须选这个）
4. 点击 **"Create repository"**

### 第三步：上传文件
在你的新仓库页面：
1. 点击 **"uploading an existing file"**
2. 把 `pwa/` 文件夹里的**所有文件和图标文件夹**上传
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` 文件夹（含所有图标）
3. 点击 **"Commit changes"**

### 第四步：开启 GitHub Pages
1. 进入仓库 **Settings**（设置）
2. 左侧找到 **Pages**
3. Source 选择 **"Deploy from a branch"**
4. Branch 选 **main**，目录选 **/ (root)**
5. 点击 **Save**

等待 1-2 分钟，你的网址就会出现：
```
https://你的用户名.github.io/novel-reader/
```

---

## 📲 安装到 iPhone（添加到主屏幕）

1. 用 **Safari** 打开你的网址
2. 点击底部的 **分享按钮**（方框+箭头图标 ⬆）
3. 向下滑动，找到 **"添加到主屏幕"**
4. 确认名称，点击 **"添加"**
5. 完成！主屏幕上会出现 App 图标 🎉

> ⚠️ **必须用 Safari，不能用 Chrome/微信内置浏览器**

---

## 📲 安装到 Android（添加到主屏幕）

1. 用 **Chrome** 打开你的网址
2. 点击右上角 **三个点** 菜单
3. 点击 **"添加到主屏幕"** 或 **"安装应用"**
4. 完成！

---

## ✨ PWA 版特色功能

- **📖 离线阅读**：安装后无网络也能用（已导入的内容可读）
- **📱 全屏模式**：像原生 App 一样，看不到浏览器地址栏
- **👆 手势翻章**：左右滑动切换章节
- **🔤 字号调节**：底部 A- / A+ 按钮调节字体大小
- **🎨 三种主题**：护眼纸质 / 深色 / 绿豆沙
- **🔍 全文搜索**：搜索当前小说内容
- **💾 阅读记忆**：记住上次阅读位置

---

## ❓ 常见问题

**Q: 上传的小说会不会被别人看到？**
A: 不会。小说文件是在你的手机本地读取和处理的，不会上传到任何服务器。

**Q: 换手机了怎么办？**
A: 重新在新手机 Safari 打开网址，重新导入 TXT 文件即可。阅读偏好（主题/字号）会保存在本地。

**Q: 能不能设置密码保护？**
A: GitHub Pages 公开仓库无法加密，但你也可以把仓库设为 Private，用其他方式托管（如 Cloudflare Pages）。

---

*如有问题，可以重新让 AI 助手帮你操作。*
