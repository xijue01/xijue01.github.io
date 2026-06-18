# X Personal Link Page

一个模仿 Linktree 的个人定制化静态导航页，带右下角独立悬浮的头像立体动态人物。

## 使用方式

直接把本目录推送到 GitHub Pages 仓库即可，例如：

- 用户主页：`your-name.github.io`
- 项目主页：仓库 Settings -> Pages -> Deploy from a branch

主要可编辑内容：

- `index.html`：修改昵称、简介、链接、邮箱和社交入口
- `styles.css`：调整颜色、间距、按钮和响应式样式
- `script.js`：调整 3D 人物的跟随、漂浮和点击动作
- `assets/avatar.png`：替换个人头像
- `assets/xijue-chibi-3d.png`：右下角 3D 卡通人物透明素材

本地预览：

```bash
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。
