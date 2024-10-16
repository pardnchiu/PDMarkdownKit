# PDMarkdownKit (JavaScript)

> A lightweight Markdown editor based on JavaScript, providing a convenient module for website integration, supporting real-time editing and preview of Markdown content.

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=44bb44) ![](https://img.shields.io/badge/creator-邱敬幃-4444bb)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=bbbb44)](https://github.com/pardnchiu/PDMarkdownKit) [![](https://img.shields.io/npm/v/pdmarkdownkit?color=44bbbb)](https://www.npmjs.com/package/pdmarkdownkit) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist/PDMarkdownKit.js?color=bb44bb)<br>
[![](https://img.shields.io/badge/點擊查看-中文版本-ffffff)](https://github.com/pardnchiu/PDMarkdownKit/blob/main/README.zh.md)

## Features

- Provides independent editor and viewer modules, supporting real-time preview and scroll synchronization
- Supports standard Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
- Provides undo and redo functionality, supports import and export of Markdown and HTML format files
- Uses [PDRenderKit](https://github.com/pardnchiu/PDRenderKit) for rendering, ensuring rendering effect and efficiency
- Integrates [Font Awesome 6](https://fontawesome.com/v6/search) icons, enriching UI presentation
- Relies on [code-prettify](https://github.com/googlearchive/code-prettify) for code syntax highlighting
- Click here for [preview](https://pardnchiu.github.io/PDMarkdownKit).

## Installation

- **Install from npm**
    ```Shell
    npm i pdmarkdownkit
    ```
- **Import from CDN**
    ```Javascript
    import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";
    ```

## How to use

- **Import `PDRenderKit` dependency**
    ```Html
    <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd"></script>
    ```
- **Initialize `editor` and `viewer`**
    ```Javascript
    import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

     const elm_editor = new editor({
        mode: "",                           // auto | light | dark, Default: auto
        id: "",                             // Default: PDMDEditor
        placeholder: "Content",             // Default: Type here ...
        placeholderColor: "#ff000080",      // Default: #0000ff1a
        focusBackgroundColor: "#ff00001a",  // Default: #0000ffff
        focusTextColor: "#ff0000",          // Default: #bfbfbf
        showRow: 1,                         // Show line numbers, Default: 1
        fillMode: 1,                        // Adjust with parent element size, Default: 1
        preventRefresh: 0,                  // Prevent page refresh, Default: 0
        fontFamily: ""                      // Default: 'Noto Sans TC', sans-serif
    });

     const elm_viewer = new viewer({
        mode: "",               // auto | light | dark, Default: auto
        id: "",                 // Default: PDMDViewer
        pre: "",                // Default content, shown when editor is empty
        delay: 50,              // Update delay, Default 300ms, Minimum 1ms
        editor: elm_editor,     // Associated editor
        scrollSync: 1,          // Sync scroll with editor
        tagPath: "?keyword=",   // Tag path, used for tag detection
        tagTarget: "_blank",    // Tag opening method, Default _blank
        fillMode: 1,            // Adjust with parent element size, Default: 1
        fontFamily: ""          // Default: 'Noto Sans TC', sans-serif
    });

    // Add elements to DOM
    {DOM}.appendChild(elm_editor.body);
    {DOM}.appendChild(elm_viewer.body);

    // Initialize editor and viewer
    elm_editor.init(pre: string);
    elm_viewer.init(pre: string);
    ```

## Markdown Syntax

Supports standard Markdown syntax, including fonts, links, images, lists, tables, code blocks, and quotes. Additionally, it includes extended syntax features to enhance functionality.

### Font style

- **Standard**
    | Syntax | Output |
    | - | - |
    | `# H1`<br>`<h1>H1</h1>`<br>`H1\n===`  | <h1>H1</h1> |
    | `## H2`<br>`<h2>H2</h2>`<br>`H2\n---` | <h2>H2</h2> |
    | `### H3`<br>`<h3>H3</h3>` | <h3>H3</h3> |
    | `#### H4`<br>`<h4>H4</h4>` | <h4>H4</h4> |
    | `##### H5`<br>`<h5>H5</h5>` | <h5>H5</h5> |
    | `###### H6`<br>`<h6>H6</h6>` | <h6>H6</h6> |
    | `**Bold**`<br>`__Bold__`<br>`<b>Bold</b>`<br>`<strong>Bold</strong>` | <b>Bold</b> |
    | `*Italic*`<br>`_Italic_`<br>`<i>Italic</i>`<br>`<em>Italic</em>` | <i>Italic</i> |
    | `~~Strikethrough~~`<br>`<s>Strikethrough</s>` | <s>Strikethrough</s> |
    | `<u>Underline</u>` | <u>Underline</u> |
    | `<mark>Mark</mark>` | <mark>Mark</mark> |
    | `x<sup>2</sup>` | x<sup>2</sup> |
    | `H<sub>2</sub>O` | H<sub>2</sub>O |
- **Extension**
    | Syntax | Output |
    | - | - |
    | `==Mark==` | ==Mark== |
    | `x^2^` | x^2^ |
    | `H~2~O` | H~2~O |

### Link

- **Standard**
    - Link<br>
        `https://github.com/pardnchiu/PDMarkdownKit/`
        https://github.com/pardnchiu/PDMarkdownKit/
    - Link with custom text<br>
        `[Display text](https://github.com/pardnchiu/PDMarkdownKit/)`
        [Display text](https://github.com/pardnchiu/PDMarkdownKit/)
    - Link with title<br>
        `[Display text](https://github.com/pardnchiu/PDMarkdownKit/ "Link title")`
        [Display text](https://github.com/pardnchiu/PDMarkdownKit/ "Link title")
- **Extension**
    - Auto-detect YouTube videos<br>
        `https://www.youtube.com/watch?v=zJ_w7Dix_f0`
        https://www.youtube.com/watch?v=zJ_w7Dix_f0
        `[Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)`
        [Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)

### Image

- **Standard**
    - Image<br>
        `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)`
        ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
    - Image with description<br>
        `![Image description](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)`
        ![Image description](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
    - Image with title<br>
        `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "Image title")`
        ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "Image title")
    - Image with link<br>
        `[![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)`
        [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
- **Extension**
    - Video<br>
        ![](static/image/youtube.mov)
    - Image with size<br>
        `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)`
        ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
    - Image with alignment<br>
        `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 left)`
        `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 right)`
        ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 left)
        ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 right)

### List

- **Ordered**
    1. ol List 0
    2. ol List 0
    3. ol List 0
        1. ol List 1
            1. ol List 2
                1. ol List 3
                    1. ol List 4
- **Unordered**
    - ul List 0
    - ul List 0
    - ul List 0
        - ul List 1
            - ul List 2
                - ul List 3
                    - ul List 4
- **Mixed**
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
- **Task**
    - [ ] Item 1
    - [x] Item 2

### Table

| Title | Title |
| - | - |
| Value | Value |
| Value | Value |
| Value | Value |
| Value | Value |

### Code Block

- **Code inline** 
    `#Code-1`
- **Code block** 
    ```
    #Code-2
    #Code-2
    #Code-2
    ```
- <b>Code block by Space*4</b><br>
    
    #Code-3
    #Code-3
    #Code-3


### Blockquote

> Blockquote 1
>
>> Blockquote 2
>>> Blockquote 3

### Horizontal Lines

`---`

---

`***`

***

### Hashtag

#test1 #test2 #test3

## Shortcut Keys

- Supported
    - Copy: `cmd/ctrl` + `c`
    - Cut: `cmd/ctrl` + `x`
    - Paste: `cmd/ctrl` + `v`
    - Undo: `cmd/ctrl` + `z`
    - Redo: `cmd/ctrl` + `shift` + `z`
    - Bold: `cmd/ctrl` + `b`
    - Italic: `cmd/ctrl` + `i`
    - Strikethrough: `cmd/ctrl` + `s`
    - Underline: `cmd/ctrl` + `u`
    - Mark: `cmd/ctrl` + `m`
    - Superscript: `cmd/ctrl` + `ArrowUp`
    - Subscript: `cmd/ctrl` + `ArrowDown`
    - Code block: `cmd/ctrl` + `k`
- Disabled
    - Refresh: `cmd/ctrl` + `r` or `F5`


## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## License

This source code project is licensed under the [MIT](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
