// var initMdEditor, setMdPreview, getMdTxt, getMdHtml;

import { editor, viewer } from "../../dist/PDMarkdownKit.js";

// const pre = `# PDMarkdownKit (JavaScript Library)

// > PDMarkdownKit is a lightweight Markdown editor and viewer library based on JavaScript. It offers rich features to edit and preview Markdown content in real-time.

// ![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=bb4444) ![](https://img.shields.io/npm/v/pdmarkdownkit?color=44bb44) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist%2FPDMarkdownKit.js?color=4444bb) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=bbbb44)<br>
// ![](https://img.shields.io/badge/tag-JavaScript%20Library-44bbbb) ![](https://img.shields.io/badge/creator-邱敬幃%20Pardn%20Chiu-bb44bb)

// ## Feature

// - Provide standalone editor and viewer modules, supporting real-time preview and scroll synchronization.
// - Support various Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
// - Offer undo and redo functionality, and support file import and export (.md and .html formats).
// - Rendered using [PDRenderKit](https://github.com/pardnchiu/PDRenderKit).
// - Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
// - Use [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.

// ## Creator

// <img src="https://pardn.io/image/head-s.jpg" style="float: left; margin-right: 0.5rem; width: 128px; height: 128px;">

// ### 邱敬幃 Pardn Chiu

// [![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 
// <br><br>

// ## License

// This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

// ## How to use
// - ### Add dependency \`PDRenderKit\`
//     \`\`\`Html
//     <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd"></script>
//     \`\`\`
// - ### Directly download the package
//     \`\`\`Shell
//     npm i pdmarkdownkit
//     \`\`\`
// - ### Or include via \`cdn.jsdelivr.net\`
//     \`\`\`JAVASCRIPT
//     import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

//     const elm_editor = new editor({
//         id: "",                             // Default PDMDEditor
//         placeholder: "Content",             // Default Type here ..
//         placeholderColor: "#ff000080",      // Default #0000ff1a
//         focusBackgroundColor: "#ff00001a",  // Default #0000ffff
//         focusTextColor: "#ff0000",          // Default bfbfbf
//         showRow: 1,                         // Show number of rows, default 1
//         fillMode: 1,                        // Fill mode, resizes with parent element, default 1
//         preventRefresh: 0                   // Prevent refresh, default 0
//     });

//     const elm_viewer = new viewer({
//         id: "",                 // Default PDMDViewer
//         pre: "",                // Default content. Displayed when PDEditor is empty
//         delay: 50,              // Update delay, default 300ms, minimum 1
//         editor: elm_editor,     // Link to editor
//         scrollSync: 1,          // Synchronize scrolling with editor
//         tagPath: "?keyword=",   // Hashtag path, required to detect hashtags
//         tagTarget: "_blank",    // Open hashtags in, default _blank
//         fillMode: 1             // Fill mode, resizes with parent element, default 1
//     });

//     // Add elements to the view
//     {DOM}.appendChild(elm_editor.body);
//     {DOM}.appendChild(elm_viewer.body);

//     // Initialize editor and viewer.
//     elm_editor.init(pre: string);
//     elm_viewer.init(pre: string);
//     \`\`\`

// ## Heading

// H1
// ===
// \`\`\`
// H1
// ===
// \`\`\`

// H2
// ---
// \`\`\`
// H2
// ---
// \`\`\`

// - # H1 → \`# H1\`
// - ## H2 → \`## H2\`
// - ### H3 → \`### H3\`
// - #### H4 → \`#### H4\`
// - ##### H5 → \`##### H5\`
// - ###### H6 → \`##### H6\`

// ## Font Style

// - ### Bold
//     1. **Bold 1** → \`**Bold 1**\`
//     2. <b>Bold 2</b> → \`<b>Bold 2</b>\`
//     3. <strong>Bold 3</strong> → \`<strong>Bold 3</strong>\`
// - ### Italic
//     1. *Italic 1* → \`*Italic 1*\`
//     2. _Italic 2_ → \`_Italic 2_\`
//     3. <i>Italic 3</i> → \`<i>Italic 3</i>\`
//     4. <em>Italic 4</em> → \`<em>Italic 4</em>\`
// - ### Strile Through
//     1. ~~Strile Through 1~~ → \`~~Strile Through 1~~\`
//     2. <s>Strile Through 2</s> → \`<s>Strile Through 2</s>\`
// - ### Under Line
//     1. __Under Line 1__ → \`__Under Line 1__\` 
//     2. <u>Under Line 2</u> → \`<u>Under Line 2</u>\`
// - ### Mark
//     1. ==Mark 1== → \`==Mark 1==\`
//     2. <mark>Mark 2</mark> → \`<mark>Mark 2</mark>\`
// - ### Superscripts / Subscripts
//     1. x^2^ → \`x^2^\`
//     2. H~2~O → \`H~2~O\`

// ## Horizontal Rule

// - \`---\` ↓

// ---

// - \`***\` ↓

// ***

// ## Blockquote

// > Blockquote-1
// > 
// >> Blockquote-2
// >>> Blockquote-3

// ## Table

// | Title | Title |
// | - | - |
// | Value | Value |
// | Value | Value |
// | Value | Value |
// | Value | Value |

// ## List

// - Ordered List
//     1. ol List 0
//     2. ol List 0
//     3. ol List 0
//         1. ol List 1
//             1. ol List 2
//                 1. ol List 3
//                     1. ol List 4
// - Unordered List
//     - ul List 0
//     - ul List 0
//     - ul List 0
//         - ul List 1
//             - ul List 2
//                 - ul List 3
//                     - ul List 4
// - Mixed List
//     - ul List 0
//     - ul List 0
//     - ul List 0
//         1. ol List 1
//         1. ol List 1
//         1. ol List 1
//             - ul List 2
//             - ul List 2
//             - ul List 2
//                 1. ol List 3
//                     - ul List 4

// ## Code Block

// - ### inline: 
//     \`#Code-1\`
// - ### Block: 
//     \`\`\`
//     #Code-2
//     #Code-2
//     #Code-2
//     \`\`\`
// - ### Block by Space*4: 

//     #Code-3
//     #Code-3
//     #Code-3

// ## Link

// - ### Link-1 https://github.com/pardnchiu/PDMarkdownKit/
// - ### [Link-2](https://github.com/pardnchiu/PDMarkdownKit/)
// - ### [Link-3](https://github.com/pardnchiu/PDMarkdownKit/ "Github")

// ## Image

// - ### Image-1 
//     ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
// - ### Image-2 
//     ![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
// - ### Image-3 
//     ![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "title")
// - ### Image-4 (width: 50%, height: 360) 
//     ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
// - ### Image + Link 
//     [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
// - ### Video
//     ![](static/image/youtube.mov)

// ### Hashtag

// #test1 #test2 #test3

// ## Shortcut Keys

// - Supported
//     - Copy: \`cmd/ctrl\` + \`c\`
//     - Cut: \`cmd/ctrl\` + \`x\`
//     - Paste: \`cmd/ctrl\` + \`v\`
//     - Undo: \`cmd/ctrl\` + \`z\`
//     - Redo: \`cmd/ctrl\` + \`shift\` + \`z\`
//     - Bold: \`cmd/ctrl\` + \`b\`
//     - Italic: \`cmd/ctrl\` + \`i\`
//     - Strikethrough: \`cmd/ctrl\` + \`s\`
//     - Underline: \`cmd/ctrl\` + \`u\`
//     - Mark: \`cmd/ctrl\` + \`m\`
//     - Superscript: \`cmd/ctrl\` + \`ArrowUp\`
//     - Subscript: \`cmd/ctrl\` + \`ArrowDown\`
//     - Code block: \`cmd/ctrl\` + \`k\`
// - Disabled
//     - Refresh: \`cmd/ctrl\` + \`r\` or \`F5\`

// ***

// *All translations powered by ChatGPT*

// ***

// ©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)`;

function onclickPreview(e) {
    var isEditor = document.body.$$class('preview');
    if (isEditor) {
        document.body.class_('preview');
        this.__class(["fas", "fa-eye"]);
    }
    else {
        document.body._class('preview');
        this.__class(["fas", "fa-eye-slash"]);
    };
};
function onclickFull(e) {
    var isPreview = document.body.$$class('full-preview');
    if (isPreview) {
        document.body.class_('full-preview');
        this.parentElement.previousElementSibling.firstElementChild.className = "fas fa-eye";
        this.parentElement.previousElementSibling.$child(1).innerText = "顯示預覽";
        this.nextElementSibling.innerText = "全屏顯示";
        this.__class(["fas", "fa-tv"]);
    }
    else {
        document.body.className = "full-preview";
        this.parentElement.previousElementSibling.firstElementChild.className = "fas fa-eye-slash";
        this.parentElement.previousElementSibling.$child(1).innerText = "關閉預覽";
        this.nextElementSibling.innerText = "返回編輯";
        this.__class(["fas", "fa-keyboard"]);
    }
};

document.addEventListener("DOMContentLoaded", async _ => {
    let pre = "";

    await fetch('./README.md')
        .then(response => response.text())
        .then(data => {
            pre = data;
        })
        .catch(error => {
            console.error(error);
        });

    if (document.body.clientWidth < 1024) {
        document.body.class_('preview');
    };

    const keyword = (new URL(location.href)).searchParams.get("keyword");

    if (keyword) {
        alert("標籤:" + keyword)
    };

    const elm_editor = new editor({
        placeholder: "Content",
        placeholderColor: "#ff000080",
        focusBackgroundColor: "#ff00001a",
        focusTextColor: "#ff0000",
        showRow: 0,
    });
    const elm_viewer = new viewer({
        delay: 50,
        editor: elm_editor,
        scrollSync: 1,
        tagPath: "?keyword=",
        tagTarget: "_blank"
    });

    _child([
        "section#md-nav"._([
            "h1"._("Markdown"),
            "i"._({ class: ["fas", document.body.$$class("preview") ? "fa-eye-slash" : "fa-eye"].join("."), onclick: onclickPreview }),
            "ul"._([
                "li"._([
                    "i.fa-solid.fa-reply"._()._click((e) => elm_editor.goBack()),
                    "p"._("上一步")
                ]),
                "li"._([
                    "i.fa-solid.fa-share"._()._click((e) => elm_editor.goForward()),
                    "p"._("下一步")
                ]),
                "li"._([
                    "b"._(["H", "i"._(1)])._click((e) => elm_editor.addHeading(e, 1)),
                    "p"._("標題1")
                ]),
                "li"._([
                    "b"._(["H", "i"._(2)])._click((e) => elm_editor.addHeading(e, 2)),
                    "p"._("標題2")
                ]),
                "li"._([
                    "b"._(["H", "i"._(3)])._click((e) => elm_editor.addHeading(e, 3)),
                    "p"._("標題3")
                ]),
                "li"._([
                    "b"._(["H", "i"._(4)])._click((e) => elm_editor.addHeading(e, 4)),
                    "p"._("標題4")
                ]),
                "li"._([
                    "b"._(["H", "i"._(5)])._click((e) => elm_editor.addHeading(e, 5)),
                    "p"._("標題5")
                ]),
                "li"._([
                    "b"._(["H", "i"._(6)])._click((e) => elm_editor.addHeading(e, 6)),
                    "p"._("標題6")
                ]),
                "li"._([
                    "i.fa-solid.fa-bold"._()._click((e) => elm_editor.addBold(e)),
                    "p"._("粗體")
                ]),
                "li"._([
                    "i.fa-solid.fa-italic"._()._click((e) => elm_editor.addItalic(e)),
                    "p"._("斜體")
                ]),
                "li"._([
                    "i.fa-solid.fa-strikethrough"._()._click((e) => elm_editor.addStrikethrough(e)),
                    "p"._("刪除線")
                ]),
                "li"._([
                    "i.fa-solid.fa-underline"._()._click((e) => elm_editor.addUnderline(e)),
                    "p"._("底線")
                ]),
                "li"._([
                    "i.fa-solid.fa-marker"._()._click((e) => elm_editor.addMarker(e)),
                    "p"._("標記")
                ]),
                "li"._([
                    "i.fa-solid.fa-superscript"._()._click((e) => elm_editor.addSup(e)),
                    "p"._("上標")
                ]),
                "li"._([
                    "i.fa-solid.fa-subscript"._()._click((e) => elm_editor.addSub(e)),
                    "p"._("下標")
                ]),
                "li"._([
                    "i.fa-solid.fa-quote-left"._()._click((e) => elm_editor.addBlockquote(e)),
                    "p"._("引用")
                ]),
                "li"._([
                    "i.fa-solid.fa-list-ul"._()._click((e) => elm_editor.addUl(e)),
                    "p"._("無序列表")
                ]),
                "li"._([
                    "i.fa-solid.fa-list-ol"._()._click((e) => elm_editor.addOl(e)),
                    "p"._("有序列表")
                ]),
                "li"._([
                    "i.fa-solid.fa-code"._()._click((e) => elm_editor.addCode(e)),
                    "p"._("代碼")
                ]),
                "li"._([
                    "i.fa-solid.fa-link"._()._click((e) => {
                        const dom = "section#pop"._([
                            "div"._([
                                "section"._([
                                    "h6"._("插入連結"),
                                    "fas fa-times-circle"._fa._click(() => dom.$rm()),
                                ]),
                                "p"._("請依序輸入資料"),
                                "input 名稱"._(),
                                "input 網址 (不可為空)"._(),
                                "ul"._([
                                    "li"._({ sel: 0 }, [
                                        "fa-solid fa-link"._fa,
                                        "確認"
                                    ])._click((e) => {
                                        const inputs = dom.$selAll("input");
                                        const title = inputs.$(0).value.trim();
                                        const src = inputs.$(1).value.trim();
                                        dom.$rm();
                                        elm_editor.addLink(title, src);
                                    }),
                                    "li"._({ sel: 0 }, [
                                        "fa-solid fa-ban"._fa,
                                        "取消"
                                    ])._click(() => dom.$rm())
                                ])
                            ])
                        ]);
                        _child(dom);
                    }),
                    "p"._("連結")
                ]),
                "li"._([
                    "i.fa-solid.fa-image"._()._click((e) => {
                        const dom = "section#pop"._([
                            "div"._([
                                "section"._([
                                    "h6"._("插入圖片"),
                                    "fas fa-times-circle"._fa._click(() => dom.$rm()),
                                ]),
                                "p"._("請依序輸入資料"),
                                "input 名稱"._(),
                                "input 網址 (不可為空)"._(),
                                "input 標題"._(),
                                "ul"._([
                                    "li"._({ sel: 0 }, [
                                        "fa-solid fa-image"._fa,
                                        "確認"
                                    ])._click((e) => {
                                        const inputs = dom.$selAll("input");
                                        const alt = inputs.$(0).value.trim();
                                        const src = inputs.$(1).value.trim();
                                        const title = inputs.$(2).value.trim();
                                        dom.$rm();
                                        elm_editor.addImage(src, alt, title);
                                    }),
                                    "li"._({ sel: 0 }, [
                                        "fa-solid fa-ban"._fa,
                                        "取消"
                                    ])._click(() => dom.$rm())
                                ])
                            ])
                        ]);
                        _child(dom);
                    }),
                    "p"._("圖片")
                ]),
                "li"._([
                    "i.fa-solid.fa-eraser"._()._click((e) => {
                        const dom = "section#pop"._([
                            "div"._([
                                "section"._([
                                    "h6"._("清除整頁內容?"),
                                    "fa-solid fa-circle-xmark"._fa._click(() => dom.$rm()),
                                ]),
                                "p"._("確定要清除整頁內容?"),
                                "ul"._([
                                    "li"._([
                                        "fa-solid fa-eraser"._fa,
                                        "清空內容"
                                    ])._click((e) => {
                                        dom.$rm();
                                        elm_editor.clear();
                                    }),
                                    "li"._({ sel: 0 }, [
                                        "fa-solid fa-ban"._fa,
                                        "取消"
                                    ])._click(() => dom.$rm())
                                ])
                            ])
                        ]);
                        _child(dom);
                    }),
                    "p"._("清除")
                ]),
                "li.mobile"._([
                    (document.body.$$class("preview") ? "fa-solid fa-eye-slash" : "fa-solid fa-eye")._fa._click(onclickPreview),
                    "p"._("關閉預覽")
                ]),
                // "li.mobile"._([
                // 	"i.fa-solid.fa-tv"._()._click(onclickFull),
                // 	"p"._("全屏顯示")
                // ]),
                "li"._([
                    "i.fa-solid.fa-download"._()._click((e) => {
                        const dom = "section#pop"._([
                            "div"._([
                                "section"._([
                                    "h6"._("你要下載的類型?"),
                                    "fa-solid fa-circle-xmark"._fa._click(() => dom.$rm()),
                                ]),
                                "p"._("Markdown 副檔名 (.md)\nHtml 副檔名 (.html)"),
                                "ul"._({ row: 2 }, [
                                    "li"._([
                                        "i.fab.fa-markdown"._(),
                                        "md"
                                    ])._click((e) => {
                                        dom.$rm();
                                        elm_editor.downloadMd();
                                    }),
                                    "li"._([
                                        "i.fa-solid.fa-code"._(),
                                        "html"
                                    ])._click((e) => {
                                        dom.$rm();
                                        elm_editor.downloadHtml();
                                    })
                                ])
                            ])
                        ]);
                        _child(dom);
                    }),
                    "p"._("下載檔案")
                ]),
                "li"._([
                    "label"._([
                        "input"._({ type: "file", accept: ".md" })._change(function () { elm_editor.openfile(this.files[0]); }),
                        "i.fa-solid.fa-folder-open"._(),
                    ]),
                    "p"._("開啟檔案")
                ]),
                "li"._([
                    "i.fa-solid.fa-exclamation-circle"._()._click(function () {
                        var dom = "section#pop"._([
                            "div"._([
                                "h6"._("關於我"),
                                "i.fa-solid.fa-circle-xmark"._()._click(() => dom.remove()),
                                "p"._(`為 <a href="https://joball.tw">JOBALL找專家</a> / <a href="https://umd.tw">UMD你的博客</a> 需求所開發<br>
								用來提供給用戶們撰寫內容的編輯器<br>
								md語法未完全適配, 會持續更新<br>
								<br>
								開發者: <a href="mailto:chiuchingwei@icloud.com">Pardn Chiu</a>`),
                                "ul"._([
                                    "li"._({ sel: "false" }, [
                                        "i.fa-solid.fa-ban"._(),
                                        "取消"
                                    ])._click(() => dom.remove())
                                ])
                            ])
                        ]);
                        document.body.appendChild(dom);
                    }),
                    "p"._("關於我")
                ]),
            ])
        ]),
        "section.left"._([
            elm_editor.body
        ]),
        "section.right"._([
            elm_viewer.body
        ])
    ]);

    elm_editor.init(pre);
    elm_viewer.init();
});