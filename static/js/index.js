// var initMdEditor, setMdPreview, getMdTxt, getMdHtml;

import { editor, viewer } from "../../dist/PDMarkdownKit.js";

const pre = `# Markdown Editor (JavaScript Library)

> A web-based Markdown editor with real-time preview designed for editing of md files online. 
> Through modular design, it is easy to integrate into websites for use.
> Must be used in conjunction with [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).

## 特點 / Feature

- 提供獨立使用的編輯器和檢視器模組。
    Provides separate editor and viewer modules for independent use.
  
- 當編輯器和檢視器一起使用時能實現即時預覽。
    Achieves real-time preview when the editor and viewer are used together.
  
- 使用純 JavaScript / CSS 開發。
    Built using pure JavaScript and CSS.
  
- 使用 [PDExtension-js](https://github.com/pardnchiu/PDExtension-js) 進行渲染。
    Rendered using [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).
  
- 使用 [Font Awesome 6](https://fontawesome.com/v6/search) 圖標。
    Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
  
- 使用 [code-prettify](https://github.com/googlearchive/code-prettify) 進行代碼高亮顯示。
    Use [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.

## 開發者 / Creator

<img src="https://pardn.io/image/head-s.jpg" style="float: left; margin-right: 0.5rem; width: 128px; height: 128px;">

### Pardn Chiu 邱敬幃

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 
<br><br>

## 授權 / License

此源代碼項目採用 [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) 許可證授權。
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

## 如何使用 / How to use

- 添加依賴 \`PDExtension-js\`
\`\`\`HTML
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDExtension-js@[VERSION]/js/PDExtension.min.js" copyright="Pardn Ltd"></script>
\`\`\`

- 導入 \`MDEditor\`、\`MDViewer\`
\`\`\`JAVASCRIPT
import { editor, viewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

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
\`\`\`

## 標題 / Heading

H1
===
\`\`\`
H1
===
\`\`\`

H2
---
\`\`\`
H2
---
\`\`\`

- # H1 ← \`# H1\`
- ## H2 ← \`## H2\`
- ### H3 ← \`### H3\`
- #### H4 ← \`#### H4\`
- ##### H5 ← \`##### H5\`
- ###### H6 ← \`##### H6\`

## 文字 / Text

- 粗體 / Bold
    1. \`**Bold 1**\` → **Bold 1**
    2. \`<b>Bold 2</b>\` → <b>Bold 2</b>
    3. \`<strong>Bold 3</strong>\` → <strong>Bold 3</strong> 
- 斜體 / Italic
    1. \`*Italic 1*\` → *Italic 1* 
    2. \`_Italic 2_\` → _Italic 2_ 
    3. \`<i>Italic 3</i>\` → <i>Italic 3</i> 
    4. \`<em>Italic 4</em>\` → <em>Italic 4</em> 
- 刪除線 / Strile Through
    1. \`~~Strile Through 1~~\` ~~Strile Through 1~~
    2. \`<s>Strile Through 2</s>\` → <s>Strile Through 2</s>
- 底線 / Under Line
    1. \`__Under Line 1__\` → __Under Line 1__ 
    2. \`<u>Under Line 2</u>\` → <u>Under Line 2</u>
- 標示 / Mark
    1. \`==Mark 1==\` → ==Mark 1== 
    2. \`<mark>Mark 2</mark>\` → <mark>Mark 2</mark>
- 上標 / Superscripts
    \`x^2^\` → x^2^
- 下標 / Subscripts
    \`H~2~O\` → H~2~O

## 水平線 / Horizontal Rule

- \`---\` ↓

---

- \`***\` ↓

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

- inline: \`#Code-1\`
- Block: 
    \`\`\`
    #Code-2
    #Code-2
    #Code-2
    \`\`\`
- Block by Space*4: 

    #Code-3
    #Code-3
    #Code-3

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
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
8. Image + Link 
    [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
9. Video
    ![](static/image/youtube.mov)

### Hashtag

#test1 #test2 #test3

## 快捷按鈕

- 支持
    - 複製: \`cmd/ctrl\` + \`c\`
    - 剪下: \`cmd/ctrl\` + \`x\`
    - 貼上: \`cmd/ctrl\` + \`v\`
    - 上一步: \`cmd/ctrl\` + \`z\`
    - 下一步: \`cmd/ctrl\` + \`shift\` + \`z\`
    - 粗體: \`cmd/ctrl\` + \`b\`
    - 斜體: \`cmd/ctrl\` + \`i\`
    - 刪除線: \`cmd/ctrl\` + \`s\`
    - 下劃線: \`cmd/ctrl\` + \`u\`
    - 標記: \`cmd/ctrl\` + \`m\`
    - 上標: \`cmd/ctrl\` + \`ArrowUp\`
    - 下標: \`cmd/ctrl\` + \`ArrowDown\`
    - 代碼塊: \`cmd/ctrl\` + \`k\`
- 禁止
    - 重新整理: \`cmd/ctrl\` + \`r\` 與 \`F5\`

***

©️ 2023 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)`;

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

document.addEventListener("DOMContentLoaded", function () {
    console.log(location.href.$queryAll)
    if (document.body.clientWidth < 1024) document.body.class_('preview');

    const keyword = (new URL(location.href)).searchParams.get("keyword");

    if (keyword) {
        alert("標籤:" + keyword)
    };

    const elm_editor = new editor({
        id: "",                             // 預設 PDMDEditor
        placeholder: "Content",             // 預設 Type here ..
        placeholderColor: "#ff000080",      // 預設 #0000ff1a
        focusBackgroundColor: "#ff00001a",  // 預設 #0000ffff
        focusTextColor: "#ff0000",          // 預設 bfbfbf
        fillMode: 1                         // 填滿模式，隨著父元素的大小變化，預設 1
    });
    const elm_viewer = new viewer({
        id: "",                 // 預設 PDMDViewer
        pre: "",                // 預設內容。當 PDEditor 為空時顯示
        delay: 50,              // 預設 300ms，最低只能 1
        editor: elm_editor,     // 連結 PDEditor
        scrollSync: 1,          // 是否跟著 PDEditor 一起滑動
        tagPath: "?keyword=",   // Hashtag 指向，需設定才會偵測 Hashtag
        tagTarget: "_blank",    // 開啟 Hashtag 方式，預設為 _blank
        fillMode: 1             // 填滿模式，隨著父元素的大小變化，預設 1
    });

    _child([
        "section#md-nav"._([
            "h1"._("Markdown"),
            "i"._({ class: ["fas", document.body.$$class("preview") ? "fa-eye-slash" : "fa-eye"].join("."), onclick: onclickPreview }),
            "ul"._([
                "li"._([
                    "i.fa-solid.fa-reply"._()._click((e) => editor.goBack()),
                    "p"._("上一步")
                ]),
                "li"._([
                    "i.fa-solid.fa-share"._()._click((e) => editor.goForward()),
                    "p"._("下一步")
                ]),
                "li"._([
                    "b"._(["H", "i"._(1)])._click((e) => editor.addHeading(e, 1)),
                    "p"._("標題1")
                ]),
                "li"._([
                    "b"._(["H", "i"._(2)])._click((e) => editor.addHeading(e, 2)),
                    "p"._("標題2")
                ]),
                "li"._([
                    "b"._(["H", "i"._(3)])._click((e) => editor.addHeading(e, 3)),
                    "p"._("標題3")
                ]),
                "li"._([
                    "b"._(["H", "i"._(4)])._click((e) => editor.addHeading(e, 4)),
                    "p"._("標題4")
                ]),
                "li"._([
                    "b"._(["H", "i"._(5)])._click((e) => editor.addHeading(e, 5)),
                    "p"._("標題5")
                ]),
                "li"._([
                    "b"._(["H", "i"._(6)])._click((e) => editor.addHeading(e, 6)),
                    "p"._("標題6")
                ]),
                "li"._([
                    "i.fa-solid.fa-bold"._()._click((e) => editor.addBold(e)),
                    "p"._("粗體")
                ]),
                "li"._([
                    "i.fa-solid.fa-italic"._()._click((e) => editor.addItalic(e)),
                    "p"._("斜體")
                ]),
                "li"._([
                    "i.fa-solid.fa-strikethrough"._()._click((e) => editor.addStrikethrough(e)),
                    "p"._("刪除線")
                ]),
                "li"._([
                    "i.fa-solid.fa-underline"._()._click((e) => editor.addUnderline(e)),
                    "p"._("底線")
                ]),
                "li"._([
                    "i.fa-solid.fa-marker"._()._click((e) => editor.addMarker(e)),
                    "p"._("標記")
                ]),
                "li"._([
                    "i.fa-solid.fa-superscript"._()._click((e) => editor.addSup(e)),
                    "p"._("上標")
                ]),
                "li"._([
                    "i.fa-solid.fa-subscript"._()._click((e) => editor.addSub(e)),
                    "p"._("下標")
                ]),
                "li"._([
                    "i.fa-solid.fa-quote-left"._()._click((e) => editor.addBlockquote(e)),
                    "p"._("引用")
                ]),
                "li"._([
                    "i.fa-solid.fa-list-ul"._()._click((e) => editor.addUl(e)),
                    "p"._("無序列表")
                ]),
                "li"._([
                    "i.fa-solid.fa-list-ol"._()._click((e) => editor.addOl(e)),
                    "p"._("有序列表")
                ]),
                "li"._([
                    "i.fa-solid.fa-code"._()._click((e) => editor.addCode(e)),
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
                                        editor.addLink(title, src);
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
                                        editor.addImage(src, alt, title);
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
                                        editor.clear();
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
                                        editor.downloadMd();
                                    }),
                                    "li"._([
                                        "i.fa-solid.fa-code"._(),
                                        "html"
                                    ])._click((e) => {
                                        dom.$rm();
                                        editor.downloadHtml();
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
                        "input"._({ type: "file", accept: ".md" })._change(function () { editor.openfile(this.files[0]); }),
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