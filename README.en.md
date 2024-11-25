# PDMarkdownKit (JavaScript)

> A lightweight Markdown editor that provides easy-to-integrate editing and viewing modules for websites, supporting real-time editing and previewing.

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=44bb44) ![](https://img.shields.io/badge/creator-邱敬幃-4444bb)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=bbbb44)](https://github.com/pardnchiu/PDMarkdownKit) [![](https://img.shields.io/npm/v/pdmarkdownkit?color=44bbbb)](https://www.npmjs.com/package/pdmarkdownkit) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist/PDMarkdownKit.js?color=bb44bb)<br>
[![](https://img.shields.io/badge/點擊查看-中文版本-ffffff)](https://github.com/pardnchiu/PDMarkdownKit/blob/main/README.md)

## Features

- Provides standalone editing and viewing modules, supporting real-time preview and scroll synchronization.
- Supports standard Markdown syntax, including headings, bold, italics, links, images, code blocks, etc.
- Additional features like subscript, superscript syntax, adjusting image size and alignment, and detecting YouTube links for video insertion.
- Undo and redo functionality, multiple keyboard shortcuts, and supports importing and exporting Markdown and HTML files.
- Integrated with [Font Awesome 6](https://fontawesome.com/v6/search) icons.
- Code syntax highlighting powered by [code-prettify](https://github.com/googlearchive/code-prettify).
- Click here to [Preview](https://pardnchiu.github.io/PDMarkdownKit).

## Installation

- **From npm**
    ```bash
    npm i pdmarkdownkit
    ```

- **From CDN**
    - **Include the `PDMarkdownKit` package**
        ```html
        <!-- Version 1.6.0 and above -->
        <script src="https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js"></script>
        ```
    - **Module version**
        ```javascript
        // Version 1.6.0 and above
        import { editor as PDMarkdownEditor, viewer as PDMarkdownViewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.module.js";
        
        // Version 1.5.2 and below
        import { editor as PDMarkdownEditor, viewer as PDMarkdownViewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js";
        ```

## How to use

- **Initialize `editor` and `viewer`**
    ```Javascript
    const elm_editor = new PDMarkdownEditor({
        id: "",                             // Default: PDMDEditor
        defaultContent: "",                 // Initial content display
        hotKey: 1,                          // Enable hotkeys, default is 1
        preventRefresh: 0,                  // Prevent page refresh, default value: 0
        style: {
            mode: "",                       // auto | light | dark, Default: auto
            fill: 1,                        // Adjust to parent element size, Default: 1
            fontFamily: "",                 // Default: 'Noto Sans TC', sans-serif
            showRow: 0,                     // Show row count, Default: 1
            placeholder: {
                text: "Content",            // Default: Type here...
                color: "#ff000080"          // Default: #0000ff1a
            },
            focus: {
                backgroundColor: "ff00001a",// Default: #0000ffff
                color: "#ff0000"            // Default: #bfbfbf
            }
        }
    });

    const elm_viewer = new PDMarkdownViewer({
        id: "",                 // Default: PDMDViewer
        emptyContent: "",       // Default content shown when editor is empty
        style: {
            mode: "",           // auto | light | dark, Default: auto
            fill: "",           // Adjust to parent element size, Default: 1 | true
            fontFamily: "",     // Default: 'Noto Sans TC', sans-serif
        },
        sync: {
            editor: elm_editor, // Associated editor
            delay: 50,          // Update delay in ms, Default 300
            scrollSync: 1,      // Scroll sync with editor, Default: 0 | false
        },
        hashtag: {
            path: "?keyword=",  // Hashtag path for # detection and conversion to links
            target: "_blank"    // Hashtag link opening method, Default: _blank
        }
    });

    // Append elements to DOM
    {DOM}.appendChild(elm_editor.body);
    {DOM}.appendChild(elm_viewer.body);

    // Initialize editor and viewer
    elm_editor.init(pre: string);
    elm_viewer.init(pre: string);
    ```

## Markdown Syntax

Supports standard Markdown syntax, including text, links, images, lists, tables, code blocks, and quotes. Additionally, extended features are included to enhance functionality.

### Font style

<details open>
<summary><strong>Standard Syntax</strong></summary>

| Syntax | Output |
| - | - |
| `# H1`<br>`H1\n===`<br>`<h1>H1</h1>`  | <h1>H1</h1> |
| `## H2`<br>`H2\n---`<br>`<h2>H2</h2>` | <h2>H2</h2> |
| `### H3`<br>`<h3>H3</h3>` | <h3>H3</h3> |
| `#### H4`<br>`<h4>H4</h4>` | <h4>H4</h4> |
| `##### H5`<br>`<h5>H5</h5>` | <h5>H5</h5> |
| `###### H6`<br>`<h6>H6</h6>` | <h6>H6</h6> |
| `**Bold**`<br>`__Bold__`<br>`<b>Bold</b>`<br>`<strong>Bold</strong>` | <b>Bold</b> |
| `*Italic*`<br>`_Italic_`<br>`<i>Italic</i>`<br>`<em>Italic</em>` | <i>Italic</i> |
| `~~Strikethrough~~`<br>`<s>Strikethrough</s>` | <s>Strikethrough</s> |
| `<u>Underline</u>` | <u>Underline</u> |
| `<mark>Highlight</mark>` | <mark>Highlight</mark> |
| `x<sup>2</sup>` | x<sup>2</sup> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |

</details>

<details open>
<summary><strong>Extended</strong></summary>

| Syntax | Output |
| - | - |
| `==Highlight==` | ==Highlight== |
| `x^2^` | x^2^ |
| `H~2~O` | H~2~O |

</details>

### Link

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Bare link<br>
    `https://github.com/pardnchiu/PDMarkdownKit/`
    https://github.com/pardnchiu/PDMarkdownKit/
- Link with custom text<br>
    `[Display text](https://github.com/pardnchiu/PDMarkdownKit/)`
    [Display text](https://github.com/pardnchiu/PDMarkdownKit/)
- Link with custom title<br>
    `[Display text](https://github.com/pardnchiu/PDMarkdownKit/ "Link title")`
    [Display text](https://github.com/pardnchiu/PDMarkdownKit/ "Link title")

</details>

<details open>
<summary><strong>Extended</strong></summary>

- Auto-detect Email<br>
    dev@pardn.io
- Auto-detect YouTube videos<br>
    `https://www.youtube.com/watch?v=zJ_w7Dix_f0`
    https://www.youtube.com/watch?v=zJ_w7Dix_f0
    `[Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)`
    [Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)

</details>

### Image

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Image<br>
    `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)`<br>
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- Image with description<br>
    `![Image description](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)`<br>
    ![Image description](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- Image with title<br>
    `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "Image title")`<br>
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "Image title")
- Image with link<br>
    `[![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)`<br>
    [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)

</details>

<details open>
<summary><strong>Extended</strong></summary>

- Video<br>
    `![](static/image/youtube.mov)`<br>
    ![](static/image/youtube.mov)
- Image with size<br>
    `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)`<br>
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
- Image with alignment<br>
    `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 left)`<br>
    `![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 right)`<br>
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 left)
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*240 right)

</details>

### List

<details open>
<summary><strong>Ordered List</strong></summary>

1. ol List 0
2. ol List 0
3. ol List 0
    1. ol List 1
        1. ol List 2
            1. ol List 3
                1. ol List 4

</details> 

<details open>
<summary><strong>Unordered List</strong></summary>

- ul List 0
- ul List 0
- ul List 0
    - ul List 1
        - ul List 2
            - ul List 3
                - ul List 4

</details> 

<details open>
<summary><strong>Mixed List</strong></summary>

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

</details> 

<details open>
<summary><strong>Task List</strong></summary>

- [ ] Task 1
- [x] Task 2
    - [ ] Task 1
    - [x] Task 2

</details> 

### Code Blocks

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Single line 
    `#Code-1`
- Multi-line 
    ```Language
    #Code-2
    #Code-2
    #Code-2
    ```

</details>

<details open>
<summary><strong>Extended</strong></summary>

- Indentation with 4 spaces

    #Code-3
    #Code-3
    #Code-3

</details> 

### Blockquotes

<details open>
<summary><strong>Standard Syntax</strong></summary>

> Blockquote Level 1<br>
> <br>
>> Blockquote Level 2
>>> Blockquote Level 3

</details> 

<details open>
<summary><strong>Extended</strong></summary>

> [!NOTE]
> This is a NOTE

> [!TIP]
> This is a TIP

> [!IMPORTANT]
> This is IMPORTANT

> [!WARNING]
> This is a WARNING

> [!CAUTION]
> This is CAUTION

</details> 

### Tables

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Table 1
    | Left align | Center align | Right align |
    | :- | :-: | -: |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
- Table 2 (without `|` on the sides)
    Left align | Center align | Right align 
    :- | :-: | -:
    Value | Value | Value
    Value | Value | Value
    Value | Value | Value
    Value | Value | Value
    
</details> 

### Horizontal Lines

`---` or `***`

<hr>

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

## Obtain the Complete Source Code

[Contact Me](mailto:dev@pardn.io) to obtain the full, unobfuscated source code.<br>
Freely modify and use for commercial purposes. Choose a licensing option based on your needs:
- Requires a `Powered by PDMarkdownKit` copyright attribution: $7,500
- Fully autonomous, no copyright attribution required: $10,000

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)