interface MDEditor {
    // HTML元件，用於添加至視圖
    body: HTMLElement;
    // 連接的檢視器
    viewer: MDViewer | null;
    // 初始化編輯器
    init: (pre?: string) => void;
    // 上一步
    goBack: () => void;
    // 下一步
    goForward: () => void;
    // 添加標題
    addHeading: (event: KeyboardEvent, num: number) => void;
    /**
     * 添加粗體
     * 按住 cmd/ctrl 執行則添加 <b></b>
     * 快捷鍵 cmd/ctrl + b
     */
    addBold: (event: KeyboardEvent) => void;
    /**
     * 添加斜體
     * 按住 cmd/ctrl 執行則添加 <i></i>
     * 快捷鍵 cmd/ctrl + i
     */
    addItalic: (event: KeyboardEvent) => void;
    /**
     * 添加刪除線
     * 按住 cmd/ctrl 執行則添加 <s></s>
     * 快捷鍵 cmd/ctrl + s
     */
    addStrikethrough: (event: KeyboardEvent) => void;
    /**
     * 添加下劃線
     * 按住 cmd/ctrl 執行則添加 <u></u>
     * 快捷鍵 cmd/ctrl + u
     */
    addUnderline: (event: KeyboardEvent) => void;
    /**
     * 添加標記
     * 按住 cmd/ctrl 執行則添加 <mark></mark>
     * 快捷鍵 cmd/ctrl + m
     */
    addMarker: (event: KeyboardEvent) => void;
    /**
     * 添加上標
     * 按住 cmd/ctrl 執行則添加 <sup></sup>
     * 快捷鍵 cmd/ctrl + ArrowUp
     */
    addSup: (event: KeyboardEvent) => void;
    /**
     * 添加下標
     * 按住 cmd/ctrl 執行則添加 <sub></sub>
     * 快捷鍵 cmd/ctrl + ArrowDown
     */
    addSub: (event: KeyboardEvent) => void;
    // 添加引用塊
    addBlockquote: () => void;
    // 添加無序列表
    addUl: () => void;
    // 添加有序列表
    addOl: () => void;
    /**
     * 添加代碼塊
     * 按住 cmd/ctrl 執行則添加 <code></code> (非多行選取)
     * 快捷鍵 cmd/ctrl + k
     */
    addCode: (event: KeyboardEvent) => void;
    // 添加超鏈接
    addLink: (title: string, href: string) => void;
    // 添加圖片
    addImage: (src: string, alt?: string, title?: string) => void;
    // 清除編輯器內容
    clear: () => void;
    // 以 Markdown 文件格式輸出
    downloadMd: () => void;
    // 以 HTML 文件格式輸出
    downloadHtml: () => void;
    // 打開 .md 文件
    openfile: (file: any) => void
    // 輸出純文字
    getTxt: () => void
}

interface MDViewer {
    // HTML元件，用於添加至視圖中
    body: HTMLElement;
    // 連接的編輯器。
    editor: MDEditor | null;
    // 初始化檢視器。
    init: (pre?: string) => void;
};