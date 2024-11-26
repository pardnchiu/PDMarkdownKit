# PDMarkdownKit

> PDMarkdownKit is a pure JavaScript-based Markdown editor, built with native APIs, and designed for seamless web integration.  <br>
> It supports standard Markdown syntax with various extended features, including real-time preview, scroll synchronization, automatic detection of YouTube videos, and more, catering to diverse editing needs.<br>
> Additionally, with its built-in virtual DOM technology, it updates only the modified parts, ensuring efficient rendering and smooth editing experiences, making it ideal for online editing scenarios.

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist%2FPDMarkdownKit.js) 
![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit) 
[![](https://img.shields.io/npm/v/pdmarkdownkit)](https://www.npmjs.com/package/pdmarkdownkit) 
[![](https://img.shields.io/jsdelivr/npm/hw/pdmarkdownkit)](https://www.jsdelivr.com/package/npm/pdmarkdownkit)<br>
[![](https://img.shields.io/badge/查閱-中文版本-ffffff)](https://github.com/pardnchiu/PDMarkdownKit/blob/main/README.zh.md)

## Features

- Separate editor and viewer modules with real-time preview and scroll synchronization support.
- Supports standard Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
- Extended features such as subscript/superscript syntax, image resizing, alignment, and automatic YouTube link detection with video embedding.
- Includes undo/redo functions, multiple hotkeys, and supports importing/exporting files in Markdown and HTML formats.
- Implements virtual DOM concepts for efficient rendering by updating the page on-demand.
- Integrated [Google Icon](https://fonts.google.com/icons) and [code-prettify](https://github.com/googlearchive/code-prettify) for syntax highlighting.
- Click here for a [preview](https://pardnchiu.github.io/PDMarkdownKit)。

## Installation

- **Install via npm**
    ```bash
    npm i pdmarkdownkit
    ```

- **Include via CDN**
    - **Include the `PDMarkdownKit` library**
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

## Usage

- **Initialize `editor` and `viewer`**
    ```Javascript
    const elm_editor = new PDMarkdownEditor({
        id: "",                                 // Default: PDMDEditor
        defaultContent: "",                     // Default content to display initially
        hotKey: 1,                              // Enable hotkeys, default: 1
        preventRefresh: 0,                      // Prevent page refresh, default: 0
        style: {
            mode: "",                           // auto | light | dark, default: auto
            fill: 1,                            // Adjust size to parent element, default: 1
            fontFamily: "",                     // Default: 'Noto Sans TC', sans-serif
            showRow: 0,                         // Show line numbers, default: 1
            placeholder: {
                text: "Content",                // Default: Type here ...
                color: "#ff000080"              // Default: #0000ff1a
            },
            focus: {
                backgroundColor: "#ff00001a",   // Default: #0000ffff
                color: "#ff0000"                // Default: #bfbfbf
            }
        }
    });

    const elm_viewer = new PDMarkdownViewer({
        id: "",                 // Default: PDMDViewer
        emptyContent: "",       // Default content when editor is empty
        style: {
            mode: "",           // auto | light | dark, default: auto
            fill: "",           // Adjust size to parent element, default: 1 | true
            fontFamily: "",     // Default: 'Noto Sans TC', sans-serif
        },
        sync: {
            editor: elm_editor, // Associated editor
            delay: 50,          // Update delay in ms, default: 300
            scrollSync: 1,      // Synchronize scrolling with editor, default: 0 | false
        },
        hashtag: {
            path: "?keyword=",  // Path for hashtags, converting # to links
            target: "_blank"    // Target for hashtag links, default: _blank
        }
    });

    // Add elements to DOM
    {DOM}.appendChild(elm_editor.body);
    {DOM}.appendChild(elm_viewer.body);

    // Initialize editor and viewer
    elm_editor.init(pre: string);
    elm_viewer.init(pre: string);

    ```

## Markdown Syntax Support

Supports standard Markdown syntax, including text styling, links, images, lists, tables, code blocks, and blockquotes. Additionally, extended features enhance functionality.

### Text Styling

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
<summary><strong>Extensions</strong></summary>

| Syntax | Output |
| - | - |
| `==Highlight==` | ==Highlight== |
| `x^2^` | x^2^ |
| `H~2~O` | H~2~O |

</details>

### Links

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Plain link<br>
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
<summary><strong>Extensions</strong></summary>

- Auto-detect Email<br>
    dev@pardn.io
- Auto-detect YouTube videos<br>
    - Plain link<br>
        `https://www.youtube.com/watch?v=zJ_w7Dix_f0`
        https://www.youtube.com/watch?v=zJ_w7Dix_f0
    - With Syntax<br>
        `[Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)`
        [Display text](https://www.youtube.com/watch?v=zJ_w7Dix_f0)

</details>

### Images

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Image: [Image Source](https://pixabay.com/photos/corn-harvest-fall-thanksgiving-9135131/)<br>
    `![](./static/image/corn-9135131_640.jpg)`<br>
    ![](./static/image/corn-9135131_640.jpg)
- Image with description: [Image Source](https://pixabay.com/photos/dog-irish-setter-mischievous-7128749/)<br>
    `![Example image from Pixabay](./static/image/dog-7128749_640.jpg)`<br>
    ![Example image from Pixabay](./static/image/dog-7128749_640.jpg)
- Image with title: [Image Source](https://pixabay.com/photos/stilt-bird-animal-feathers-plumage-8593487/)<br>
    `![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")`<br>
    ![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")
- Linked image: [Image Source](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)<br>
    `[![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)`<br>
    [![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)

</details>

<details open>
<summary><strong>Extensions</strong></summary>

- Video: [Video Source](https://pixabay.com/videos/ocean-sea-wave-water-sunset-233867/)<br>
    `![](./static/image/233867_tiny.mp4)`<br>
    ![](./static/image/233867_tiny.mp4)
- Image with size (width: 50%): [Image Source](https://pixabay.com/photos/flamingo-nature-bird-wildlife-9190160/)<br>
    `![](./static/image/flamingo-9190160_640.jpg)(50%*)`<br>
    ![](./static/image/flamingo-9190160_640.jpg)(50%*)

</details>

### Lists


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
<summary><strong>Todo List</strong></summary>

- [ ] Item 1
- [x] Item 2
    - [ ] Item 2-1
    - [x] Item 2-2

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
<summary><strong>Extensions</strong></summary>

- Four spaces indentation

    #Code-3
    #Code-3
    #Code-3

</details> 


### Blockquotes

<details open>
<summary><strong>Standard Syntax</strong></summary>

> Quote level 1<br>
> <br>
>> Quote level 2
>>> Quote level 3

</details> 

<details open>
<summary><strong>Extensions</strong></summary>

> [!NOTE]
> This is a NOTE

> [!TIP]
> This is a TIP

> [!IMPORTANT]
> This is IMPORTANT

> [!WARNING]
> This is a WARNING

> [!CAUTION]
> This is a CAUTION

</details> 

### Tables

<details open>
<summary><strong>Standard Syntax</strong></summary>

- Table 1
    | Left Align | Center Align | Right Align |
    | :- | :-: | -: |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
- 表格2 (不包含兩側 `|`)
    Left Align | Center Align | Right Align
    :- | :-: | -:
    Value | Value | Value
    Value | Value | Value
    Value | Value | Value
    Value | Value | Value
    
</details> 

### Horizontal Rules

`---` or `***`

<hr>

### Hashtag

#test1 #test2 #test3

## Hashtag

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
    - Highlight: `cmd/ctrl` + `m`
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

This project is licensed under [MIT](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE).

## Obtain Complete Source Code

[Contact me](mailto:dev@pardn.io) for the complete unobfuscated source code.<br>
Feel free to modify and use for commercial purposes with the following licensing options:
- Must retain `Powered by PDMarkdownKit` copyright notice: $7,500.
- Fully autonomous, no copyright notice required: $10,000.

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

***

