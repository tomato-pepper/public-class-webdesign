# public-class-webdesign

## 项目简介

本项目是一个基于 HTML、CSS 和 JavaScript 的静态网页，提供了多个功能模块，包括搜索功能、统计信息展示、表单提交等。同时，页面还带有蜘蛛网点击特效，为用户提供更好的交互体验。

## 运行方法

1. **下载或克隆本项目**

   ```sh
   git clone https://github.com/z-zanez/public-class-webdesign.git
   ```

2. **打开项目目录**

   ```sh
   cd website
   ```

3. **运行网页** 直接打开 `index.html` 文件，即可访问网站。

## 功能展示

### 1. 主页

- 背景图片覆盖整个屏幕，带有半透明白色遮罩。
- 采用 `linear-gradient` 透明叠加，使背景更清晰可读。

### 2. 搜索功能

- 点击搜索图标可展开搜索框。
- 输入关键词后，系统会在页面内容中进行匹配，并高亮显示。
- 搜索结果可点击跳转至对应内容。

### 3. 统计信息展示

- 采用 `table` 方式展示数据，支持不同屏幕尺寸的响应式调整。
- 可选的 `stat-logo` 图片展示，增强视觉效果。

### 4. 表单提交

- 提供一个留言表单，用户填写姓名、邮箱和留言内容。
- 通过 JavaScript 进行简单验证，并弹窗提示提交结果。

### 5. 蜘蛛网点击特效

- 页面背景随鼠标移动产生动态蜘蛛网特效。
- 采用 HTML5 Canvas 进行绘制，实现炫酷交互。

### 6. 多语言切换
- 网页支持多语言内容显示，初始支持中文和英文。
- 用户可通过页面顶部的下拉菜单选择语言，页面将实时更新为所选语言的内容。
- 采用JavaScript和Web存储来记忆用户的语言选择，优化用户体验。

### 7. 评论/点赞功能
- 用户可以对页面内容进行评论和点赞。
- 评论区允许用户输入文字消息，并显示在页面相应部分。
- 点赞按钮会记录用户的点赞次数，并实时显示更新。

### 8. 回到顶部按钮
- 网页提供了一个回到顶部的快速按钮，方便用户在长页面中快速回到顶部。
- 此按钮在用户向下滚动一定距离后显示，点击即可平滑滚动到页面顶端。
- 通过CSS和JavaScript实现平滑滚动效果。


## 代码结构

```
project/
│── index.html          # 主页面
│── styles.css          # 样式表
│── script.js           # JavaScript 交互逻辑
│── images/             # 存放图片资源
│── README.md           # 项目说明文件
```

### `styles.css` - 主要样式说明

- `body`：定义了全局背景和字体样式。
- `header`：设置顶部导航栏的背景图片和文本颜色。
- `.search-container`：搜索栏的定位与样式。
- `.stat-container`：统计信息区域的布局。

### `script.js` - 主要功能说明

- `蛛网点击特效`：使用 HTML5 Canvas 生成动态背景效果。
- `搜索功能`：监听搜索框输入，动态显示匹配内容。
- `表单提交`：监听留言表单，提供前端验证。