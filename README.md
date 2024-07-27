# PDMarkdownKit (JavaScript Library)

> PDMarkdownKit 是一個基於 JavaScript 的輕量級 Markdown 編輯器和檢視器庫。提供了豐富的功能來編輯和即時預覽 Markdown 內容。<br>
> PDMarkdownKit is a lightweight Markdown editor and viewer library based on JavaScript. It offers rich features to edit and preview Markdown content in real-time.

![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=red) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist%2FPDMarkdownKit.js?color=green) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=blue) ![](https://img.shields.io/badge/creator-Pardn%20Chiu%20邱敬幃-A374BF)

## 特點 / Feature

- 提供獨立使用的編輯器和檢視器模組，並支持實時預覽和滾動同步。<br>
    Provide standalone editor and viewer modules, supporting real-time preview and scroll synchronization.
  
- 支持多種 Markdown 標記語法，包括標題、加粗、斜體、鏈接、圖片、代碼塊等。<br>
    Support various Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
  
- 提供撤銷和重做功能，並支持文件的導入和導出（.md 和 .html 格式）。<br>
    Offer undo and redo functionality, and support file import and export (.md and .html formats).
  
- 使用 [PDExtension-js](https://github.com/pardnchiu/PDExtension-js) 進行渲染。<br>
    Rendered using [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).
  
- 使用 [Font Awesome 6](https://fontawesome.com/v6/search) 圖標。<br>
    Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
  
- 使用 [code-prettify](https://github.com/googlearchive/code-prettify) 進行代碼高亮顯示。<br>
    Use [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.
  
- 可在 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽。<br>
    Preview available [Here](https://pardnchiu.github.io/PDMarkdownKit).

## 開發者 / Creator

<a href="https://pardn.io">
<img src=https://pardn.io/image/head-s.jpg align=left width=100 height=100>
</a>

### Pardn Chiu 邱敬幃

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權 / License

此源代碼項目採用 [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) 許可證授權。<br>
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

## 下載 / Download

```Shell
npm i pdmarkdownkit
```

## 如何使用 / How to use

- 添加依賴 `PDExtension-js`
```Html
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDExtension-js@[VERSION]/js/PDExtension.min.js" copyright="Pardn Ltd"></script>
```

- 導入 `editor`、`viewer`
```Javascript
import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

const elm_editor = new editor({
    id: "",                             // 預設 PDMDEditor
    placeholder: "Content",             // 預設 Type here ..
    placeholderColor: "#ff000080",      // 預設 #0000ff1a
    focusBackgroundColor: "#ff00001a",  // 預設 #0000ffff
    focusTextColor: "#ff0000",          // 預設 bfbfbf
    showRow: 1,                         // 顯示行數，預設 1
    fillMode: 1                         // 填滿模式，隨著父元素的大小變化，預設 1
});

const elm_viewer = new viewer({
    id: "",                 // 預設 PDMDViewer
    pre: "",                // 預設內容。當 PDEditor 為空時顯示
    delay: 50,              // 更新延遲，預設 300ms，最低只能 1
    editor: elm_editor,     // 連結 PDEditor
    scrollSync: 1,          // 是否跟著 PDEditor 一起滑動
    tagPath: "?keyword=",   // Hashtag 指向，需設定才會偵測 Hashtag
    tagTarget: "_blank",    // 開啟 Hashtag 方式，預設 _blank
    fillMode: 1             // 填滿模式，隨著父元素的大小變化，預設 1
});

/* 將元素添加到視圖中。 */
{DOM}.appendChild(elm_editor.body);
{DOM}.appendChild(elm_viewer.body);

/* 初始化編輯器和檢視器。 */
elm_editor.init(pre: string);
elm_viewer.init(pre: string);
```

## 標題 / Heading
H1
===
```
H1
===
```
H2
---
```
H2
---
```
- # H1 ← `# H1`
- ## H2 ← `## H2`
- ### H3 ← `### H3`
- #### H4 ← `#### H4`
- ##### H5 ← `##### H5`
- ###### H6 ← `##### H6`

## 文字 / Text

- 粗體 / Bold
    1. `**Bold 1**` → **Bold 1**
    2. `<b>Bold 2</b>` → <b>Bold 2</b>
    3. `<strong>Bold 3</strong>` → <strong>Bold 3</strong> 
- 斜體 / Italic
    1. `*Italic 1*` → *Italic 1* 
    2. `_Italic 2_` → _Italic 2_ 
    3. `<i>Italic 3</i>` → <i>Italic 3</i> 
    4. `<em>Italic 4</em>` → <em>Italic 4</em> 
- 刪除線 / Strile Through
    1. `~~Strile Through 1~~` ~~Strile Through 1~~
    2. `<s>Strile Through 2</s>` → <s>Strile Through 2</s>
- 底線 / Under Line
    1. `__Under Line 1__` →【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】
    2. `<u>Under Line 2</u>` →【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】
- 標示 / Mark
    1. `==Mark 1==` →【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】
    2. `<mark>Mark 2</mark>` → <mark>Mark 2</mark>
- 上標 / Superscripts<br>
    `x^2^` →【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】
- 下標 / Subscripts<br>
    `H~2~O` →【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】

## 水平線 / Horizontal Rule

- `---` ↓
---
- `***` ↓
***

## 引用 / Blockquote
> Blockquote-1
> 
>> Blockquote-2
>>> Blockquote-3

## 表格 / Table

| 標題 | 標題 |
| - | - |
| 內容 | 內容 |
| 內容 | 內容 |
| 內容 | 內容 |
| 內容 | 內容 |

## 列表 / List

- 有序列表
    1. ol List 0
    2. ol List 0
    3. ol List 0
        1. ol List 1
            1. ol List 2
                1. ol List 3
                    1. ol List 4
- 無序列表
    - ul List 0
    - ul List 0
    - ul List 0
        - ul List 1
            - ul List 2
                - ul List 3
                    - ul List 4
- 混合列表
    - ul List 0
    - ul List 0
    - ul List 0
        1. ol List 1
        1. ol List 1
        1. ol List 1
            - ul List 2
            - ul List 2
            - ul List 2
                1. ol List 3
                    - ul List 4

## 代碼 / Code

- inline: `#Code-1`
- Block: 
    ```
    #Code-2
    #Code-2
    #Code-2
    ```
- Block by Space*4:【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】

## 連結 / Link

1. Link-1 https://github.com/pardnchiu/PDMarkdownKit/
2. [Link-2](https://github.com/pardnchiu/PDMarkdownKit/)
3. [Link-3](https://github.com/pardnchiu/PDMarkdownKit/ "Github")
4. Image-1 
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
5. Image-2 
    ![名稱](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
6. Image-3 
    ![名稱](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "標題")
7. Image-4 (width: 50%, height: 360)
    【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】
8. Image + Link 
    [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
9. Video
    【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】

## 範例 / Example

- [https://pardn.io/blog/bing-dall-e-3](https://pardn.io/blog/bing-dall-e-3)

## Hashtag

【GitHub未支援，請前往 [此處](https://pardnchiu.github.io/PDMarkdownKit) 預覽】


## 快捷按鈕

- 支持
    - 複製: `cmd/ctrl` + `c`
    - 剪下: `cmd/ctrl` + `x`
    - 貼上: `cmd/ctrl` + `v`
    - 上一步: `cmd/ctrl` + `z`
    - 下一步: `cmd/ctrl` + `shift` + `z`
    - 粗體: `cmd/ctrl` + `b`
    - 斜體: `cmd/ctrl` + `i`
    - 刪除線: `cmd/ctrl` + `s`
    - 下劃線: `cmd/ctrl` + `u`
    - 標記: `cmd/ctrl` + `m`
    - 上標: `cmd/ctrl` + `ArrowUp`
    - 下標: `cmd/ctrl` + `ArrowDown`
    - 代碼塊: `cmd/ctrl` + `k`
- 禁止
    - 重新整理: `cmd/ctrl` + `r` 與 `F5`

***

*翻譯皆靠 ChatGPT*

***

©️ 2023 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)
