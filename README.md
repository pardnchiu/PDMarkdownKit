<img src="./static/image/logo.png" width=80>

# NanoMD

*(Formerly known as PDMarkdownKit, renamed to NanoMD starting from version `1.8.0`)*

> A pure JavaScript-based Markdown editor, built with native APIs, supports standard Markdown syntax with various extended features, including real-time preview, scroll synchronization, automatic detection of YouTube videos, and more.<br>
> Additionally, with its built-in virtual DOM technology, it updates only the modified parts, ensuring efficient rendering and smooth editing experiences, making it ideal for online editing scenarios.

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![](https://img.shields.io/github/size/pardnchiu/NanoMD/dist%2FNanoMD.js) 
![](https://img.shields.io/github/license/pardnchiu/NanoMD)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/NanoMD)](https://github.com/pardnchiu/NanoMD) 
[![](https://img.shields.io/npm/v/@pardnchiu/nanomd)](https://www.npmjs.com/package/@pardnchiu/nanomd) 
[![](https://img.shields.io/jsdelivr/npm/hw/@pardnchiu/nanomd)](https://www.jsdelivr.com/package/npm/@pardnchiu/nanomd)<br>
[![](https://img.shields.io/badge/查閱-中文版本-ffffff)](https://github.com/pardnchiu/NanoMD/blob/main/README.zh.md)

## Features

- Separate editor and viewer modules with real-time preview and scroll synchronization support.
- Supports standard Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
- Extended features such as subscript/superscript syntax, image resizing, alignment, and automatic YouTube / Vimeo link detection with video embedding.
- Includes undo/redo functions, multiple hotkeys, and supports importing/exporting files in Markdown and HTML formats.
- Implements virtual DOM concepts for efficient rendering by updating the page on-demand.
- Integrated [Google Icon](https://fonts.google.com/icons) and [code-prettify](https://github.com/googlearchive/code-prettify) for syntax highlighting.
- Click here for a [preview](https://pardnchiu.github.io/NanoMD)。

## Installation

- **Install via npm**
    ```bash
    npm i @pardnchiu/nanomd
    ```

- **Include via CDN**
    - **Include the `NanoMD` library**
        ```html
        <!-- Version 1.8.0 and above -->
        <script src="https://cdn.jsdelivr.net/npm/@pardnchiu/nanomd@[VERSION]/dist/NanoMD.js"></script>

        <!-- Version 1.6.0-1.7.1 -->
        <script src="https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js"></script>
        ```
    - **Module version**
        ```javascript
        // Version 1.8.0 and above
        import { MDEditor, MDViewer } from "https://cdn.jsdelivr.net/npm/@pardnchiu/nanomd@[VERSION]/dist/NanoMD.esm.js";

        // Version 1.6.0-1.7.1
        import { editor, viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.module.js";
        
        // Version 1.5.2 and below
        import { editor, viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@[VERSION]/dist/PDMarkdownKit.js";
        ```

## Usage

- **Initialize `editor` and `viewer`**
    ```Javascript
    // Version 1.8.0 and above
    // Unified: MDEditor, MDViewer

    // Version 1.7.1 and below
    // IIFE: PDMarkdownEditor, PDMarkdownViewer
    // ESM: editor, viewer

    const domEditor = new MDEditor({
        id: "",                                 // Default: PDMDEditor
        defaultContent: "",                     // Default content to display initially
        hotKey: 1,                              // Enable hotkeys, default: 1
        preventRefresh: 0,                      // Prevent page refresh, default: 0
        tabPin: 0,                              // 1 | 0 | true | false
        wrap: 1,                                // 1 | 0 | true | false
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

    const domViewer = new MDViewer({
        id: "",                 // Default: PDMDViewer
        emptyContent: "",       // Default content when editor is empty
        style: {
            mode: "",           // auto | light | dark, default: auto
            fill: "",           // Adjust size to parent element, default: 1 | true
            fontFamily: "",     // Default: 'Noto Sans TC', sans-serif
        },
        sync: {
            editor: domEditor,  // Associated editor
            delay: 50,          // Update delay in ms, default: 300
            scrollSync: 1,      // Synchronize scrolling with editor, default: 0 | false
        },
        hashtag: {
            path: "?keyword=",  // Path for hashtags, converting # to links
            target: "_blank"    // Target for hashtag links, default: _blank
        }
    });

    // If no element is specified, the player must be manually added to the DOM
    (...).appendChild(domEditor.body);
    (...).appendChild(domViewer.body);

    ```

## Markdown Syntax Support

Supports standard Markdown syntax, including text styling, links, images, lists, tables, code blocks, and blockquotes. Additionally, extended features enhance functionality.

### Text Styling

<details>
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

<details>
<summary><strong>Extensions</strong></summary>

| Syntax | Output |
| - | - |
| `==Highlight==` | ==Highlight== |
| `x^2^` | x^2^ |
| `H~2~O` | H~2~O |

</details>

### Links

<details>
<summary><strong>Standard Syntax</strong></summary>

- Plain link: https://github.com/pardnchiu/NanoMD/
    ```
    https://github.com/pardnchiu/NanoMD/
    ```
- Link with custom text: [Display text](https://github.com/pardnchiu/NanoMD/)
    ```
    [Display text](https://github.com/pardnchiu/NanoMD/)
    ```
- Link with custom title: [Display text](https://github.com/pardnchiu/NanoMD/ "Link title")
    ```
    [Display text](https://github.com/pardnchiu/NanoMD/ "Link title")
    ```

</details>

<details>
<summary><strong>Extensions</strong></summary>

- Auto-detect Email: dev@pardn.io
- Auto-detect YouTube videos: https://www.youtube.com/watch?v=O5O3yK8DJCc
- Auto-detect Vimeo videos: https://vimeo.com/458695734

</details>

### Images

<details>
<summary><strong>Standard Syntax</strong></summary>

- Image: [Image Source](https://pixabay.com/photos/corn-harvest-fall-thanksgiving-9135131/)
    ```
    ![](./static/image/corn-9135131_640.jpg)
    ```
    ![](./static/image/corn-9135131_640.jpg)
- Image with description: [Image Source](https://pixabay.com/photos/dog-irish-setter-mischievous-7128749/)
    ```
    ![Example image from Pixabay](./static/image/dog-7128749_640.jpg)
    ```
    ![Example image from Pixabay](./static/image/dog-7128749_640.jpg)
- Image with title: [Image Source](https://pixabay.com/photos/stilt-bird-animal-feathers-plumage-8593487/)
    ```
    ![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")
    ```
    ![](./static/image/stilt-8593487_640.jpg "Example image from Pixabay")
- Linked image: [Image Source](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)
    ```
    [![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)
    ```
    [![](./static/image/hippopotamus-9147023_640.jpg)](https://pixabay.com/photos/hippopotamus-hippo-baby-hippo-9147023/)

</details>

<details>
<summary><strong>Extensions</strong></summary>

- Video: [Video Source](https://pixabay.com/videos/ocean-sea-wave-water-sunset-233867/)
    ```
    ![](./static/image/233867_tiny.mp4)
    ```
    ![](./static/image/233867_tiny.mp4)
- Image with size (width: 50%): [Image Source](https://pixabay.com/photos/flamingo-nature-bird-wildlife-9190160/)
    ```
    ![](./static/image/flamingo-9190160_640.jpg)(50%*)
    ```
    ![](./static/image/flamingo-9190160_640.jpg)(50%*)

</details>

### Lists


<details>
<summary><strong>Ordered List</strong></summary>

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
<summary><strong>Unordered List</strong></summary>

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
<summary><strong>Todo List</strong></summary>

- [ ] Item 1
- [x] Item 2
    - [ ] Item 2-1
    - [x] Item 2-2

```
- [ ] Item 1
- [x] Item 2
    - [ ] Item 2-1
    - [x] Item 2-2
```

</details> 

### Code Blocks

<details>
<summary><strong>Standard Syntax</strong></summary>

- Single line: `#Code-1`
- Multi-line
    ```Language
    #Code-2
    #Code-2
    #Code-2
    ```

</details>

<details>
<summary><strong>Extensions</strong></summary>

- Four spaces indentation

    #Code-3
    #Code-3
    #Code-3

</details> 


### Blockquotes

<details>
<summary><strong>Standard Syntax</strong></summary>

> Quote level 1<br>
> <br>
>> Quote level 2
>>> Quote level 3

```
> Quote level 1<br>
> <br>
>> Quote level 2
>>> Quote level 3
```

</details> 

<details>
<summary><strong>Extensions</strong></summary>

> [!NOTE]
> This is a NOTE

```
> [!NOTE]
> This is a NOTE
```

> [!TIP]
> This is a TIP

```
> [!TIP]
> This is a TIP
```

> [!IMPORTANT]
> This is IMPORTANT

```
> [!IMPORTANT]
> This is IMPORTANT
```

> [!WARNING]
> This is a WARNING

```
> [!WARNING]
> This is a WARNING
```

> [!CAUTION]
> This is a CAUTION

```
> [!CAUTION]
> This is a CAUTION
```

</details> 

### Tables

<details>
<summary><strong>Standard Syntax</strong></summary>

- Table 1
    | Left Align | Center Align | Right Align |
    | :- | :-: | -: |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
    | Value | Value | Value |
- Table 2
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

```
#test1 #test2 #test3
```

#test1 #test2 #test3

## Shortcut

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

This project is licensed under a **Proprietary License**.  
You may use, install, and run this software only under the terms specified in the [End-User License Agreement (EULA)](https://github.com/pardnchiu/NanoMD/blob/main/LICENSE).

## Obtain Complete Source Code

[Contact me](mailto:dev@pardn.io) for the complete unobfuscated source code.<br>
Feel free to modify and use for commercial purposes with the following licensing options:
- Must retain `Powered by @pardnchiu/nanomd` copyright notice: $7,500.
- Fully autonomous, no copyright notice required: $10,000.

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

***

