import { editor, viewer } from "../../dist/PDMarkdownKit.js";

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