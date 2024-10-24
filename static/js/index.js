import { editor, viewer } from "../../dist/PDMarkdownKit.js";

let elm_editor, elm_viewer;

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

    const app = new PD({
        id: "app",
        event: {
            click_show: e => {
                const is_show = parseInt(document.body.dataset.show) === 1;

                document.body.dataset.show = is_show ? 0 : 1;
            },
            click_mode: e => {
                const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || elm_editor.body.dataset.mode === "dark" || elm_viewer.body.dataset.mode === "dark";

                "app".$.dataset.mode = isDarkMode ? "light" : "dark";
                elm_editor.changeMode(isDarkMode ? "light" : "dark")
                elm_viewer.changeMode(isDarkMode ? "light" : "dark")
            },
            click_html: e => {
                elm_editor.downloadHtml();
            },
            click_markdown: e => {
                elm_editor.downloadMd();
            },
            click_info: e => {
                alert("PDMarkdownKit\n還沒想好這一塊的設計\n也沒處理好暗色模式的配色")
            }
        },
        next: _ => {
            console.log("test")
        }
    });

    const keyword = (new URL(location.href)).searchParams.get("keyword");

    if (keyword) {
        alert("標籤:" + keyword)
    };

    elm_editor = new editor({
        placeholder: "Content",
        placeholderColor: "#ff000080",
        focusBackgroundColor: "#ff00001a",
        focusTextColor: "#ff0000",
        showRow: 0,
    });
    elm_viewer = new viewer({
        delay: 1000,
        editor: elm_editor,
        scrollSync: 1,
        tagPath: "?keyword=",
        tagTarget: "_blank"
    });

    "section.left".$._child([
        elm_editor.body
    ])

    "section.right".$._child([
        elm_viewer.body
    ])

    elm_editor.init(pre);
    elm_viewer.init();
});