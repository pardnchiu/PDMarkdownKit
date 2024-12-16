> Starting from version `1.8.0`, `PDMarkdownKit` has been renamed to `NanoMD`<br>
> The functionality remains the same, but with a more concise and memorable name.

## Installation

- Install via npm
    ```bash
    npm i @pardnchiu/nanomd
    ```

- Include via CDN
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
