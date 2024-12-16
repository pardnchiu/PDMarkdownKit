// import { MDEditor, MDViewer } from "../../dist/NanoMD.esm.js"

let elm_editor, elm_viewer;

document.addEventListener("DOMContentLoaded", async _ => {
    const url = new URL(location.href);
    const currentLanguage = navigator.language || navigator.userLanguage;
    const lang = url.searchParams.get("lang");
    let isZh = /^zh/i.test(currentLanguage);

    if (lang != null) {
        isZh = /^zh/i.test(lang);
    };

    let pre = "";

    await fetch("./static/md/" + (isZh ? "zh" : "en") + "/live.md")
        .then(response => response.text())
        .then(data => {
            pre = data;
        })
        .catch(error => {
            console.error(error);
        });

    const app = new QUI({
        id: "app",
        data: {
            lang: isZh ? "zh" : "en"
        },
        event: {
            click_show: e => {
                const is_show = parseInt(document.body.dataset.show) === 1;

                document.body.dataset.show = is_show ? 0 : 1;
            },
            click_mode: e => {
                const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || elm_editor.body.dataset.mode === "dark" || elm_viewer.body.dataset.mode === "dark";

                document.getElementById("app").dataset.mode = isDarkMode ? "light" : "dark";
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
                alert("NanoMD\n還沒想好這一塊的設計\n也沒處理好暗色模式的配色")
            }
        },
        when: {
            rendered: _ => {
                const keyword = (new URL(location.href)).searchParams.get("keyword");

                if (keyword) {
                    alert("標籤:" + keyword)
                };

                elm_editor = new MDEditor({
                    id: "editor",
                    defaultContent: pre,
                    tabPin: 1,
                    wrap: 1,
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
                elm_viewer = new MDViewer({
                    id: "viewer",
                    sync: {
                        editor: elm_editor,
                        scroll: 1,
                    },
                    hashtag: {
                        path: "?keyword=",
                        target: "_blank"
                    }
                });
            }
        }
    });
});
