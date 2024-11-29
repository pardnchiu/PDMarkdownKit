# NanoMD

*(原名：PDMarkdownKit，自 `1.8.0` 版本起更名為 NanoMD)*

> 一個純 JavaScript 實現的 Markdown 編輯器，使用原生 API，支援標準 Markdown 語法並擴展多種功能，包括即時預覽、滾動同步、自動檢測 YouTube 視頻等功能。<br>
> 同時，內建虛擬 DOM 技術，僅更新變動部分，確保即時編輯中的高效渲染與流暢體驗，適合在線編輯場景。

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![](https://img.shields.io/github/size/pardnchiu/NanoMD/dist%2FNanoMD.js) 
![](https://img.shields.io/github/license/pardnchiu/NanoMD)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/NanoMD)](https://github.com/pardnchiu/NanoMD) 
[![](https://img.shields.io/npm/v/@pardnchiu/ndnomd)](https://www.npmjs.com/package/@pardnchiu/ndnomd) 
[![](https://img.shields.io/jsdelivr/npm/hw/@pardnchiu/ndnomd)](https://www.jsdelivr.com/package/npm/@pardnchiu/ndnomd)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/NanoMD/blob/main/README.md)

## 特點

- 提供獨立的編輯與顯示模組，支持即時預覽和滾動同步。
- 支持標準的 Markdown 語法，包括標題、粗體、斜體、連結、圖片、代碼區塊等。
- 擴展功能如增加上下標語法，調整圖片大小、對齊，以偵測 Youtube 連結與影片插入。
- 提供撤銷與重做功能，以及多項快捷鍵，並支持 Markdown 和 HTML 格式的檔案匯入與匯出。
- 引入虛擬 DOM 概念，按需更新頁面，減少渲染所需資源。
- 集成 [Google Icon](https://fonts.google.com/icons) 圖示與 [code-prettify](https://github.com/googlearchive/code-prettify) 語法高亮。
- 點擊這裡 [預覽](https://pardnchiu.github.io/NanoMD)。

## 安裝方式

- **從 npm 安裝**
    ```bash
    npm i @pardnchiu/ndnomd
    ```

- **從 CDN 引入**
    - **引入 `NanoMD` 套件**
        ```html
        <!-- Version 1.8.0 and above -->
        <script src="https://cdn.jsdelivr.net/npm/@pardnchiu/nanomd@[VERSION]/dist/NanoMD.js"></script>

        <!-- Version 1.6.0-1.7.1 -->
        <script src="https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js"></script>
        ```
    - **Module 版本**
        ```javascript
        // Version 1.8.0 and above
        import { MDEditor, MDViewer } from "https://cdn.jsdelivr.net/npm/@pardnchiu/nanomd@[VERSION]/dist/NanoMD.esm.js";

        // Version 1.6.0-1.7.1
        import { editor, viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.module.js";
        
        // Version 1.5.2 and below
        import { editor, viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js";
        ```

## 使用方法

- **初始化 `MDEditor` 和 `MDViewer`**
    ```Javascript
    // Version 1.8.0 and above
    // Unified: MDEditor, MDViewer

    // Version 1.7.1 and below
    // IIFE: PDMarkdownEditor, PDMarkdownViewer
    // ESM: editor, viewer

    const domEditor = new MDEditor({
        id: "",                                 // 指定元素取代元件
        defaultContent: "",                     // 預設內容，初始顯示
        hotKey: 1,                              // 啟用快捷鍵，預設為 1
        preventRefresh: 0,                      // 防止頁面重整，預設值：0
        tabPin: 0,                              // 1 | 0 | true | false
        wrap: 1,                                // 1 | 0 | true | false
        style: {
            mode: "",                           // auto | light | dark, 預設： auto
            fill: 1,                            // 隨父元素大小調整，預設值：1
            fontFamily: "",                     // 預設：'Noto Sans TC', sans-serif
            showRow: 0,                         // 顯示行數，預設：1
            placeholder: {
                text: "Content",                // 預設：Type here ...
                color: "#ff000080"              // 預設：#0000ff1a
            },
            focus: {
                backgroundColor: "#ff00001a",   // 預設：#0000ffff
                color: "#ff0000"                // 預設：#bfbfbf
            }
        }
    });

    const domViewer = new MDViewer({
        id: "",                 // 指定元素取代元件
        emptyContent: "",       // 預設內容，當編輯器為空時顯示
        style: {
            mode: "",           // auto | light | dark, 預設： auto
            fill: "",           // 隨父元素大小調整，預設值：1 | true
            fontFamily: "",     // 預設：'Noto Sans TC', sans-serif
        },
        sync: {
            editor: elm_editor, // 關聯的編輯器
            delay: 50,          // 更新延遲，單位ms，預設 300
            scrollSync: 1,      // 與編輯器同步滾動，預設值：0 | false
        },
        hashtag: {
            path: "?keyword=",  // 標籤路徑，用於檢測 # 並轉換為Link
            target: "_blank"    // 標籤打開方式，預設 _blank
        }
    });

    // 若無指定元件，需手動將播放器加入至 DOM 中
    (...).appendChild(domEditor.body);
    (...).appendChild(domViewer.body);
    ```

## Markdown 語法支持

支持標準 Markdown 語法，包括字體、連結、圖片、列表、表格、代碼塊和引用等。此外，還包含擴展功能以增強功能性。

### 字體

<details>
<summary><strong>標準語法</strong></summary>

| 語法 | 輸出 |
| - | - |
| `# H1`<br>`H1\n===`<br>`<h1>H1</h1>`  | <h1>H1</h1> |
| `## H2`<br>`H2\n---`<br>`<h2>H2</h2>` | <h2>H2</h2> |
| `### H3`<br>`<h3>H3</h3>` | <h3>H3</h3> |
| `#### H4`<br>`<h4>H4</h4>` | <h4>H4</h4> |
| `##### H5`<br>`<h5>H5</h5>` | <h5>H5</h5> |
| `###### H6`<br>`<h6>H6</h6>` | <h6>H6</h6> |
| `**粗體**`<br>`__粗體__`<br>`<b>粗體</b>`<br>`<strong>粗體</strong>` | <b>粗體</b> |
| `*斜體*`<br>`_斜體_`<br>`<i>斜體</i>`<br>`<em>斜體</em>` | <i>斜體</i> |
| `~~刪除線~~`<br>`<s>刪除線</s>` | <s>刪除線</s> |
| `<u>下劃線</u>` | <u>下劃線</u> |
| `<mark>標記</mark>` | <mark>標記</mark> |
| `x<sup>2</sup>` | x<sup>2</sup> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |

</details>

<details>
<summary><strong>擴展</strong></summary>

| 語法 | 輸出 |
| - | - |
| `==標記==` | ==標記== |
| `x^2^` | x^2^ |
| `H~2~O` | H~2~O |

</details>

### 連結

<details>
<summary><strong>標準語法</strong></summary>

- 純連結: https://github.com/pardnchiu/NanoMD/
    ```
    https://github.com/pardnchiu/NanoMD/
    ```
- 連結搭配自訂文字: [顯示文字](https://github.com/pardnchiu/NanoMD/)
    ```
    [顯示文字](https://github.com/pardnchiu/NanoMD/)
    ```
- 連結搭配自訂標題: [顯示文字](https://github.com/pardnchiu/NanoMD/ "連結標題")
    ```
    [顯示文字](https://github.com/pardnchiu/NanoMD/ "連結標題")
    ```

</details>

<details>
<summary><strong>擴展</strong></summary>

- 自動偵測 Email: dev@pardn.io
- 自動偵測 Youtube 影片: https://www.youtube.com/watch?v=O5O3yK8DJCc
- 自動偵測 Vimeo 影片: https://vimeo.com/458695734

</details>

### 圖片

<details>
<summary><strong>標準語法</strong></summary>

- 圖片: [Image Source](https://pixabay.com/photos/corn-harvest-fall-thanksgiving-9135131/)
    ```
    ![](./static/image/corn-9135131_640.jpg)
    ```
    ![](./static/image/corn-9135131_640.jpg)
- 圖片搭配描述: [Image Source](https://pixabay.com/photos/dog-irish-setter-mischievous-7128749/)
    ```
    ![Example image from Pixabay](./static/image/dog-7128749_640.jpg)
    ```
    ![Example image from Pixabay](./static/image/dog-7128749_640.jpg)
- 圖片搭配標題: [Image Source](https://pixabay.com/photos/stilt-bird-animal-feathers-plumage-8593487/)
    ```
    ![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")
    ```
    ![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")
- 圖片搭配連結: [Image Source](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)
    ```
    [![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)
    ```
    [![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)

</details>

<details>
<summary><strong>擴展</strong></summary>

- 影片: [Video Source](https://pixabay.com/videos/ocean-sea-wave-water-sunset-233867/)
    ```
    ![](./static/image/233867_tiny.mp4)
    ```
    ![](./static/image/233867_tiny.mp4)
- 圖片搭配尺寸: [Image Source](https://pixabay.com/photos/flamingo-nature-bird-wildlife-9190160/)
    ```
    ![](./static/image/flamingo-9190160_640.jpg)(50%*)
    ```
    ![](./static/image/flamingo-9190160_640.jpg)(50%*)

</details>

### 列表


<details>
<summary><strong>有序列表</strong></summary>

1. ol List 0
2. ol List 0
3. ol List 0
    1. ol List 1
        1. ol List 2
            1. ol List 3
                1. ol List 4

```
1. ol List 0
2. ol List 0
3. ol List 0
    1. ol List 1
        1. ol List 2
            1. ol List 3
                1. ol List 4
```

</details> 

<details>
<summary><strong>無序列表</strong></summary>

- ul List 0
- ul List 0
- ul List 0
    - ul List 1
        - ul List 2
            - ul List 3
                - ul List 4

```
- ul List 0
- ul List 0
- ul List 0
    - ul List 1
        - ul List 2
            - ul List 3
                - ul List 4
```

</details> 

<details>
<summary><strong>混合列表</strong></summary>

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

```
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
```

</details> 

<details>
<summary><strong>待辦事項</strong></summary>

- [ ] 項目1
- [x] 項目2
    - [ ] 項目1
    - [x] 項目2

```
- [ ] 項目1
- [x] 項目2
    - [ ] 項目1
    - [x] 項目2
```

</details> 

### 代碼塊

<details>
<summary><strong>標準語法</strong></summary>

- 單行: `#Code-1`
- 多行
    ```
    #Code-2
    #Code-2
    #Code-2
    ```

</details>

<details>
<summary><strong>擴展</strong></summary>

- 空白鍵*4

    #Code-3
    #Code-3
    #Code-3

</details> 


### 引用

<details>
<summary><strong>標準語法</strong></summary>

> 引用層 1<br>
> <br>
>> 引用層 2
>>> 引用層 3

```
> 引用層 1<br>
> <br>
>> 引用層 2
>>> 引用層 3
```

</details> 

<details>
<summary><strong>擴展</strong></summary>

> [!NOTE]
> 這是NOTE

```
> [!NOTE]
> 這是NOTE
```

> [!TIP]
> 這是TIP

```
> [!TIP]
> 這是TIP
```

> [!IMPORTANT]
> 這是IMPORTANT

```
> [!IMPORTANT]
> 這是IMPORTANT
```

> [!WARNING]
> 這是WARNING

```
> [!WARNING]
> 這是WARNING
```

> [!CAUTION]
> 這是CAUTION

```
> [!CAUTION]
> 這是CAUTION
```

</details> 

### 表格

<details>
<summary><strong>標準語法</strong></summary>

- 表格1
    | 向左對齊 | 置中對齊 | 向右對齊 |
    | :- | :-: | -: |
    | 值 | 值 | 值 |
    | 值 | 值 | 值 |
    | 值 | 值 | 值 |
    | 值 | 值 | 值 |
- 表格2 (不包含兩側 `|`)
    向左對齊 | 置中對齊 | 向右對齊 
    :- | :-: | -:
    值 | 值 | 值
    值 | 值 | 值
    值 | 值 | 值
    值 | 值 | 值
    
</details> 

### 水平線

`---` 或 `***`

<hr>

### Hashtag

```
#test1 #test2 #test3
```

#test1 #test2 #test3

## 快捷鍵

- 支持
    - 複製: `cmd/ctrl` + `c`
    - 剪下: `cmd/ctrl` + `x`
    - 貼上: `cmd/ctrl` + `v`
    - 撤銷: `cmd/ctrl` + `z`
    - 重做: `cmd/ctrl` + `shift` + `z`
    - 粗體: `cmd/ctrl` + `b`
    - 斜體: `cmd/ctrl` + `i`
    - 刪除線: `cmd/ctrl` + `s`
    - 下劃線: `cmd/ctrl` + `u`
    - 標記: `cmd/ctrl` + `m`
    - 上標: `cmd/ctrl` + `ArrowUp`
    - 下標: `cmd/ctrl` + `ArrowDown`
    - 代碼塊k: `cmd/ctrl` + `k`
- 禁用
    - 重新整理: `cmd/ctrl` + `r` or `F5`


## 開發者

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權條款

本專案依據 [MIT](https://github.com/pardnchiu/NanoMD/blob/main/LICENSE) 授權使用。

## 獲取完整原始碼

[聯絡我](mailto:dev@pardn.io) 獲取完整未混淆源碼<br>
可隨意修改、商業使用，根據需求選擇授權版本：
- 需保留 `Powered by NanoMD` 的版權聲明：$7,500
- 完全自主，無需添加版權聲明：$10,000

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

***

