let R,N,D,L,z,O,M,j,P,H,B,Y,F,U,K,q,V,Z,W,G,Q,X,J,ee,ne,re,oe,le,te=[],ie=[],se=null;export class editor{#e=!0;constructor(t={}){const i=(t[r]||"")[Ge]()||e;document[Ke][ct]([ge._(`\n#${i}>div.inputFocus {background-color: ${t[Fe]||"#0000ff1a"}; color: ${t[He]||"#0000ffff"};}\n#${i}>div:nth-last-child(1):empty::after {content: "${t[Ye]||"Type here ..."}"; color: ${t|Le|"#bfbfbf"};}`)]),this[x]=(_e+"#"+i+"."+we)._({"data-fillMode":null==t[Me]?1:t[Me],"data-row":null==t[Oe]?1:t[Oe]});const n=this[x];this.#e=Boolean(null==t.hotKey||t.hotKey),null==se&&t[Pe]&&(se=window[je](dt,(e=>{e[Ue]()}))),n[Je]((e=>{this.#t()}))[rt]((e=>{this.#t()}))[tt]((e=>(this.#i((t=>{e[c][We](at,N),n[mt](D)[m]=(z+O)[lt],this.#r(),this.#o(n[mt](D),z[_])})),this.#n(!0),!1)))[it]((e=>(this.#i((t=>{const i=((e[c]||window[c])[qe]("Text")||"").$ary(/\n/),r=i[_],o=r-1,d=r>1,s=D+o,l=`${d?"":z}${i[o]}`[_],h=i[0],a=d?"":O;if(n[mt](D)[p]=z+h+a,this.#r(),d)for(let e=1;e<r;e++){const t=i[e];n[ct](w._(`${t}${e===o?O:""}`[lt])[Xe]((()=>this.#t())),n[mt](D+e))}this.#o(n[mt](s),l,l)})),this.#n(!0),!1)))[et]((e=>{let t,i;clearTimeout(R),e.inputType===st&&(t=H,i=B,n[Ze][Be]((e=>{if(e[o][g]()===w)return!1;e.remove(),n[ct](w._({index:t+1})[Xe]((e=>this.#t())),n[mt](t)),this.#o(n[mt](t),i)}))),e.inputType,this.#t(),R=setTimeout((()=>{this.#n(!0)}),300)}))[Qe]((e=>{const i=e.metaKey||e.ctrlKey,r=e.shiftKey,o=e.key.$$(/^b$/i),n=e.key.$$(/^i$/i),d=e.key.$$(/^s$/i),s=e.key.$$(/^u$/i),l=e.key.$$(/^m$/i),h=e.key.$$(/^z$/i),a=e.key.$$(/^r$/i),p=e.key.$$(/^k$/i),m="ArrowUp"===e.key,u="ArrowDown"===e.key,c="f5"===e.key||"F5"===e.key;return this.#e&&i&&r&&h?(this.goForward(),!1):this.#e&&i&&h?(this.goBack(),!1):!(this.#e&&(i&&a||c)&&t[Pe])&&(this.#e&&i&&o?(this.#d(e,$e,be),!1):this.#e&&i&&n?(this.#d(e,ye,ke),!1):this.#e&&i&&d?(this.#d(e,xe,Ae),!1):this.#e&&i&&s?(this.#d(e,Ee,Te),!1):this.#e&&i&&l?(this.#d(e,Ie,me),!1):this.#e&&i&&m?(this.#d(e,Ce,Se),!1):this.#e&&i&&u?(this.#d(e,De,Re),!1):this.#e&&i&&p?(this.#d(e,ze,pe),!1):(this.#t(),"Tab"===e.key?this.#s(e):"Enter"===e.key?this.#l(e):"Backspace"===e.key?this.#h(e):void 0))}))[ot]((e=>{n[E]&&1===n[E][_]&&n[T][o][g]()!==w&&this.init(null,!0,!1),this.#t(),this.viewer&&this.viewer.init()}))[nt]((e=>{(w+"."+v).$&&(w+"."+v).$[ht](v)}))}get viewer(){return this.md_viewer}set viewer(e){this.md_viewer=e}#t(t){function i(t){if(t)return t[r]===e||t[o][g]()===w&&t[l][r]===e?t:i(t[l])}(w+"."+v).$&&(w+"."+v).$[ht](v);const n=window[a]();if(n.rangeCount<1)return;const d=n.getRangeAt(0),s=t||i(d.commonAncestorContainer);if(null==s)return;s._class(v);let m="";var c,b;d.cloneContents()[S][Be](((e,t)=>{m+=(0==t?"":"\n")+e[p]})),s===this[x]&&(c=parseInt(i(n.baseNode).$attr("index"))-1,b=parseInt(i(n.focusNode).$attr("index"))-1);var T=Boolean(s===this[x]),y=!T&&Boolean(n[h]!==n[u]),O=Boolean(n[u]>n[h]),$=Boolean(c<b);M=!0,H=T?null:parseInt(s.$attr("index"))-1,B=T||y?null:parseInt(n[u]),Y=T||y?null:s[p][f](0,n[u]),F=T||y?null:s[p][f](n[u],s[p][_]),P=y,U=y?n.toString():m,K=y?O?n[h]:n[u]:null,q=y?O?n[u]:n[h]:null,V=y?s[p][f](0,K):null,Z=y?s[p][f](q,s[p][_]):null,j=T,W=T?$?c:b:null,G=T?$?n[h]:n[u]:null,Q=T?$?b:c:null,X=T?$?n[u]:n[h]:null,J=T?s[mt](W)[p][f](0,G):null,ee=T?s[mt](Q)[p][f](X,s[p][_]):null}#i(e){let t,i,r,o;j?(t=W,i=Q,r=J,o=ee):P?(t=H,i=H,r=V,o=Z):null!==H&&null!==B&&(t=H,i=H,r=Y,o=F),N=U,D=parseInt(t),L=parseInt(i),z=r.__(/&lt;/g,"<").__(/&gt;/g,">").__(/&nbsp;/g," "),O=o.__(/&lt;/g,"<").__(/&gt;/g,">").__(/&nbsp;/g," "),e()}#r(){for(let e=L;e>D;e--)this[x][mt](e).remove()}#o(e,t,i){this[x].$selAll(w)[Be](((e,t)=>{e._attr({index:t+1})})),window[a]?window[a]()[d]?window[a]()[d]():window[a]()[A]&&window[a]()[A]():document[s]&&document[s][d]();var r=window[a](),o=document.createRange(),n=t??e[S][0][_],l=i??n;o.selectNode(e),e[S][0]?(o[C](e[S][0],n>e[S][0][_]?e[S][0][_]:n),o[k](e[S][0],l>e[S][0][_]?e[S][0][_]:l)):(o[C](e,0),o[k](e,0)),r.addRange(o),this.#t(e)}#s(e){if(9!==e.keyCode)return;const t=this[x];return this.#i((e=>{t[mt](D)[m]=(z+"    "+O)[lt],this.#r();const i=z[_]+4;this.#o(t[mt](D),i)})),!1}#l(e){if(13!==e.keyCode)return;const t=this[x];return this.#i((e=>{t[mt](D)[m]=z[lt],this.#r(),t.$parent(1)[I]+=28,t[ct](w._(O[lt])[Xe]((()=>this.#t())),t[mt](D+1)),this.#o(t[mt](D+1),0)})),!1}#h(e){if(8!==e.keyCode)return!1;const t=this[x];return this.#i((e=>{if(j||P)t[mt](D)[m]=(z+O)[lt],this.#r(),this.#o(t[mt](D),z[_]);else if(z[_]){const e=z[f](0,z[_]-1);t[mt](D)[m]=(e+O)[lt],this.#o(t[mt](D),e[_])}else{if(0===D)return;t[mt](D-1)[m]+=O[lt],t[mt](D).$rm(),t.$parent(1)[I]-=28;const e=t[mt](D-1)[p][_]-O[_];this.#o(t[mt](D-1),e)}})),!1}#a(e){this[x][mt](-1)[p][Ge]()[_]<1?this[x][mt](-1)[m]=e[lt]:this[x][ct]([w._(e[lt])[Xe]((()=>this.#t()))]),this[x][I]=this[x].scrollHeight}#p(e,t){this[x][mt](D)[m]=e[lt],this.#r(),this.#o(this[x][mt](D),t),this.viewer&&this.viewer.init()}#d(e,t="",i=""){const r=e.metaKey||e.ctrlKey;M?this.#i((e=>{const o=O,n=`${z}${r?`<${i}>`:t}${N}${r?`</${i}>`:t}${o}`.__(/\n/g,""),d=n[_]-o[_]-(r?i[_]+3:t[_]);this.#p(n[lt],d),this.#n(!0)})):(this.#a((r?`<${i}></${i}>`:`${t}${t}`)[lt]),this.#o(this[x][mt](-1),r?i[_]+3:t[_]),this.#n(!0))}#m(e){M?this.#i((t=>{for(let t=D;t<=L;t++){const i=this[x][mt](t);i[m]=`${e} ${i[p]}`[lt]}const i=this[x][mt](L),r=i[p][_];this.#o(i,r),this.#n(!0),this.viewer&&this.viewer.init()})):(this.#a(e[lt]),this.#o(this[x][mt](-1),e[_]+1),this.#n(!0))}#u(e="",t="",i){if(M)return void this.#i((r=>{const o=O,n=`${z} ${null==i?"":"!"}[${e}](${t}) ${o}`.__(/\n/g,""),d=n[_]-o[_]-1;this.#p(n[lt],d),this.#n(!0)}));this.#a(`${null==i?"":"!"}[${e}](${t})`[lt]);const r=this[x][mt](-1),o=r[p][_];this.#o(r,o),this.#n(!0),this.viewer&&this.viewer.init()}#n(e){te.push(this.getTxt()),e&&(ie=[])}#c(e,t){let i=`PDMarkdownKit.${e}`,r=new Blob([t],{type:"application/octet-stream"}),o=URL.createObjectURL(r),n="a"._({href:o,download:i});_child(n),n.click()}init(e,t=!0,i=!0){if(this[x].contentEditable=!0,this[x][m]=null,null!=e){const i=e.__(/\n*$/,"").split("\n");i[Be](((e,t)=>{this[x][ct]([w._({index:t+1},e[lt])[Xe]((()=>this.#t()))])})),this[x][ct]([w._({index:i[_]+1})[Xe]((()=>this.#t()))]),t&&this.#o(this[x][mt](H||0),0)}else this[x][ct]([w._({index:1})[Xe]((()=>this.#t()))]),t&&this.#o(this[x][T],0);i&&this.#n(!0)}goBack(){const e=te.$(-2);if(null==e)return;let t=te.pop();ie.push(t),this.init(e[_]<1?null:e,!1,!1),this.viewer&&this.viewer.init()}goForward(){const e=ie.pop();null!=e&&(te.push(e),this.init(e,!1,!1),this.viewer&&this.viewer.init())}addHeading(e,t){const i=e.metaKey||e.ctrlKey,r=`${new Array(t).fill("#").join("")}${0===t?"":" "}`;M?this.#i((e=>{const o=z.__(/^\s*\#*\s*/,""),n=`${i?`<h${t}>`:r}${o}${N}${O}${i?`</h${t}>`:""}`.__(/\n/g,""),d=n[_]-(i?5:0);this.#p(n[lt],d),this.#n(!0)})):(this.#a((i?`<h${t}></h${t}>`:r)[lt]),this.#o(this[x][mt](-1),r[_]-(i?5:0)),this.#n(!0))}addBold(e){this.#d(e,$e,be)}addItalic(e){this.#d(e,ye,ke)}addStrikethrough(e){this.#d(e,xe,Ae)}addUnderline(e){this.#d(e,Ee,Te)}addMarker(e){this.#d(e,Ie,me)}addSup(e){this.#d(e,Ce,Se)}addSub(e){this.#d(e,De,Re)}addBlockquote(){M?this.#i((e=>{for(let e=D;e<=L;e++){const t=this[x][mt](e);t[m]=`> ${t[p]}`[lt]}const t=this[x][mt](L),i=t[p][_];this.#o(t,i),this.#n(!0),this.viewer&&this.viewer.init()})):(this.#a("> "[lt]),this.#o(this[x][mt](-1),2),this.#n(!0))}addUl(){this.#m("-")}addOl(){this.#m("1.")}addCode(e){M?this.#i((t=>{j?(this[x][ct](w._("```")[Xe]((()=>this.#t())),this[x][mt](L+1)),this[x][ct](w._("```")[Xe]((()=>this.#t())),this[x][mt](D)),this.#o(this[x][mt](L+1),this[x][mt](L+1)[p][_]),this.viewer&&this.viewer.init(),this.#n(!0)):this.#d(e,ze,pe)})):this.#d(e,ze,pe)}addLink(e="",t=""){t[Ge]()[_]<1&&e[Ge]()[_]<1||this.#u(e,t)}addImage(e="",t="",i=""){e[Ge]()[_]<1||this.#u(i,e,t)}clear(){this.init(),this.viewer&&this.viewer.init()}downloadMd(){this.#c("md",this.getTxt()[Ge]())}downloadHtml(){this.#c("html",`<!DOCTYPE html> <html lang="zh-hant"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Markdown Editor</title> <link rel="stylesheet" href="https://pardnchiu.github.io/PDMarkdownKit/css/PDMDEditor.css"> <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"><\/script> <style> body { display: flex; justify-content: center; align-item: flex-start; width: 100%; height: 100%; overflow: scroll; } * { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; touch-action: manipulation; background-color: ghostwhite; } *::-webkit-scrollbar { display: none; } body>section { padding: 1rem !important; width: 100%; background-color: #fff; box-sizing: border-box; box-shadow: 0 0.25rem 0.5rem #0000000d; transition: 0.3s; } @media screen and (min-width: 640px) { body>section { padding: 3rem !important; max-width: 800px; } } </style> </head> <body><section class="pd-md-viewer">${`\n${this.getTxt()}\n`.md_to_html()}</section></body> </html><!DOCTYPE html>`)}openfile(e){if(null==e)return void alert("請選擇檔案");const t=new FileReader;t.readAsText(e),t.onload=()=>{this[x][m]=null;const e=t.result[Ge]().__(/[\u0020\u00A0]/g," ");this.init(e[lt],!1),this.viewer&&this.viewer.init(e)}}getTxt(){return this[x].$childAll.map((e=>e[p])).join("\n")}}document.head._child(["link"._({rel:"preload",href:"https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",as:"script"}),"script"._({src:"https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"})]);export class viewer{#_;#f;#w;#v;constructor(e={}){const t=(e[r]||"").trim()||fe;var i;this.#_=(e.pre||"").trim(),this.#f=parseInt(e.delay)||300,this.#w=parseInt(e.scrollSync)||0,this.editor=e.editor instanceof editor?e.editor:null,ne=(e.tagPath||"").trim()||null,re=null==e.tagTarget?"_blank":e.tagTarget,document.head._child(["link"._({rel:"stylesheet",href:"data:text/css;base64,"+(i='\n                    .pd-md-editor{position:relative;display:flex;flex-flow:column;justify-content:flex-start;align-items:flex-start;gap:.5rem;margin:0;padding:1.5rem 0;overflow:hidden scroll}.pd-md-editor[data-fillMode="1"]{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.pd-md-editor[data-row="1"]::before{content:"";position:fixed;z-index:0;top:0;left:0;bottom:0;width:3rem;background-color:#efefef}.pd-md-editor[data-row="1"]>div{padding:0 1rem 0 0}.pd-md-editor[data-row="1"]>div::before{content:attr(index);margin-right:1rem;flex-shrink:0;width:3rem;line-height:1.5rem;min-height:1.5rem;font-family:monospace;font-size:.75rem;text-align:center}.pd-md-editor>div{z-index:1;display:flex;flex-shrink:0;padding:0 1rem;width:100%;min-height:1.5rem;line-height:1.5rem;font-size:.875rem;margin:0;transition:.3s}.pd-md-viewer{position:relative;margin:0;padding:0 0 5rem;overflow:hidden scroll;font-size:.875rem;word-break:break-word;word-wrap:break-word}.pd-md-viewer[data-fillMode="1"]{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.pd-md-viewer *{all:revert;margin:0 0 .75rem;padding:0;flex-shrink:0;max-width:100% !important;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:.875rem;letter-spacing:.5px;color:inherit;white-space:inherit;word-break:inherit;word-wrap:inherit;border:none;outline:none;object-fit:cover;appearance:unset;-webkit-appearance:unset;-moz-appearance:unset;overflow:visible}.pd-md-viewer * h1,.pd-md-viewer * h2,.pd-md-viewer * h3,.pd-md-viewer * h4,.pd-md-viewer * h5,.pd-md-viewer * h6{padding:.5rem 0 .25rem !important;margin:.25rem 0 .5rem !important}.pd-md-viewer * b,.pd-md-viewer * strong,.pd-md-viewer * i,.pd-md-viewer * em,.pd-md-viewer * u,.pd-md-viewer * s,.pd-md-viewer * a,.pd-md-viewer * mark{font-size:inherit !important;line-height:inherit !important}.pd-md-viewer *:nth-last-child(1){margin-bottom:0}.pd-md-viewer>*:nth-child(1){margin-top:1rem !important}.pd-md-viewer h1,.pd-md-viewer h2,.pd-md-viewer h3,.pd-md-viewer h4,.pd-md-viewer h5,.pd-md-viewer h6{font-weight:700;color:#000}.pd-md-viewer h1 code,.pd-md-viewer h2 code,.pd-md-viewer h3 code,.pd-md-viewer h4 code,.pd-md-viewer h5 code,.pd-md-viewer h6 code{line-height:inherit !important}.pd-md-viewer h1,.pd-md-viewer h2{padding:1.5rem 0 .5rem}.pd-md-viewer h3,.pd-md-viewer h4{padding:1.25rem 0 .25rem}.pd-md-viewer h5,.pd-md-viewer h6{padding:1rem 0 0}.pd-md-viewer h1,.pd-md-viewer h2,.pd-md-viewer hr{border:none;border-bottom:1px solid #ddd}.pd-md-viewer h1{font-size:2rem}.pd-md-viewer h1 code,.pd-md-viewer h1 sup,.pd-md-viewer h1 sub{font-size:calc(2rem - 1px)}.pd-md-viewer h2{font-size:1.5rem}.pd-md-viewer h2 code,.pd-md-viewer h2 sup,.pd-md-viewer h2 sub{font-size:calc(1.5rem - 1px)}.pd-md-viewer h3{font-size:1.375rem}.pd-md-viewer h3 code,.pd-md-viewer h3 sup,.pd-md-viewer h3 sub{font-size:calc(1.375rem - 1px)}.pd-md-viewer h4{font-size:1.25rem}.pd-md-viewer h4 code,.pd-md-viewer h4 sup,.pd-md-viewer h4 sub{font-size:calc(1.25rem - 1px)}.pd-md-viewer h5{font-size:1.125rem}.pd-md-viewer h5 code,.pd-md-viewer h5 sup,.pd-md-viewer h5 sub{font-size:calc(1.125rem - 1px)}.pd-md-viewer h6{font-size:1rem}.pd-md-viewer h6 code,.pd-md-viewer h6 sup,.pd-md-viewer h6 sub{font-size:calc(1rem - 1px)}.pd-md-viewer hr{margin:.75rem 0 !important}.pd-md-viewer b,.pd-md-viewer strong{font-weight:700}.pd-md-viewer p{line-height:1.75rem;min-height:1.75rem}.pd-md-viewer i,.pd-md-viewer em{font-style:italic}.pd-md-viewer mark{background-color:#ff0}.pd-md-viewer sup,.pd-md-viewer sub{font-size:.75rem}.pd-md-viewer a{position:relative;letter-spacing:1px;font-weight:500;color:blue}.pd-md-viewer a.tag::before{content:"#"}@media(hover: hover){.pd-md-viewer a:hover::after{top:-1.5rem;padding:0 .5rem;max-width:unset;opacity:1}}.pd-md-viewer a::after{content:attr(href);position:absolute;z-index:1;top:0;left:0;padding:0;max-width:100%;line-height:1.5rem;white-space:nowrap;font-size:.75rem;border-radius:.25rem;background-color:#777;color:#fff;opacity:0;transition:.3s;pointer-events:none}.pd-md-viewer figure{position:relative;display:inline-block;vertical-align:top}@media(hover: hover){.pd-md-viewer figure:hover figcaption{padding:0 .5rem;max-width:unset;opacity:1}}.pd-md-viewer figure img{margin-bottom:0;overflow:hidden}.pd-md-viewer figure figcaption{position:absolute;z-index:1;top:.5rem;left:.5rem;padding:0;max-width:100%;line-height:1.5rem;white-space:nowrap;font-size:.75rem;border-radius:.25rem;background-color:#777;color:#fff;opacity:0;transition:.3s}.pd-md-viewer img[src]:not([src=""]){background-color:rgba(0,0,0,.0509803922)}.pd-md-viewer video{background-color:rgba(0,0,0,.0509803922)}.pd-md-viewer table{table-layout:fixed;border-collapse:collapse}.pd-md-viewer table thead{background-color:rgba(0,0,0,.1019607843)}.pd-md-viewer table tbody tr:nth-child(2n){background-color:rgba(0,0,0,.0509803922)}.pd-md-viewer table th,.pd-md-viewer table td{padding:.375rem .75rem;border:1px solid rgba(0,0,0,.2039215686);border-collapse:collapse;border-radius:.125rem}.pd-md-viewer ul,.pd-md-viewer ol{margin:.5rem 0 .5rem 1.5rem;padding-left:.5rem;background-color:rgba(0,0,0,.0117647059)}.pd-md-viewer ul *,.pd-md-viewer ol *{margin-bottom:0}.pd-md-viewer ul li,.pd-md-viewer ol li{line-height:1.75rem;min-height:1.75rem;list-style-position:outside;letter-spacing:1px}.pd-md-viewer ul li::marker,.pd-md-viewer ol li::marker{font-family:"Roboto Mono",monospace;font-size:.75rem}.pd-md-viewer ul ul,.pd-md-viewer ul ol,.pd-md-viewer ol ul,.pd-md-viewer ol ol{margin-top:0}.pd-md-viewer ul>li{list-style-type:disc}.pd-md-viewer ul>li>ul>li{list-style-type:circle}.pd-md-viewer ul>li>ul>li>ul>li{list-style-type:square}.pd-md-viewer ul>li>ul>li>ul>li>ul>li{list-style-type:"+ "}.pd-md-viewer ul>li>ul>li>ul>li>ul>li>ul>li{list-style-type:"- "}.pd-md-viewer ul>li>ul>li>ul>li>ul>li>ul>li>ul>li{list-style-type:"> "}.pd-md-viewer ol>li{list-style-type:decimal}.pd-md-viewer ol>li>ol>li{list-style-type:upper-alpha}.pd-md-viewer ol>li>ol>li>ol>li{list-style-type:lower-alpha}.pd-md-viewer ol>li>ol>li>ol>li>ol>li{list-style-type:upper-roman}.pd-md-viewer ol>li>ol>li>ol>li>ol>li>ol>li{list-style-type:lower-roman}.pd-md-viewer ol>li>ol>li>ol>li>ol>li>ol>li>ol>li{list-style-type:"> "}.pd-md-viewer code{padding:0 .5rem;line-height:1.5rem;min-height:1.5rem;letter-spacing:1px;font-family:"Roboto Mono",monospace;font-size:.75rem;font-weight:400;background-color:#f7f7fa;border-radius:.25rem;border:1px solid rgba(0,0,0,.1019607843)}.pd-md-viewer code:has(ol),.pd-md-viewer code:has(ul){padding:0}.pd-md-viewer code *{letter-spacing:1px;font-family:"Roboto Mono",monospace;font-size:.75rem;font-weight:400;margin-bottom:0 !important}.pd-md-viewer code ol,.pd-md-viewer code ul{margin:0 !important;padding:.5rem 1rem;overflow:scroll}.pd-md-viewer code ol li,.pd-md-viewer code ul li{list-style-type:none;line-height:1.5rem;min-height:1.5rem;white-space:nowrap}.pd-md-viewer pre{position:relative;border:none !important}.pd-md-viewer pre.success code{background-color:#e0ffe1}.pd-md-viewer pre.success code[name]:not([name=""])::before{background-color:#e0ffe1;border-bottom:1px solid #e0ffe1}.pd-md-viewer pre.success button::after{content:"已複製"}.pd-md-viewer pre.error code{background-color:#ffd4d4}.pd-md-viewer pre.error code[name]:not([name=""])::before{background-color:#ffd4d4;border-bottom:1px solid #ffd4d4}.pd-md-viewer pre.error button::after{content:"無法複製"}.pd-md-viewer pre.success button,.pd-md-viewer pre.error button{opacity:1}.pd-md-viewer pre[name]:not([name=""]) button{top:calc(1.75rem - 1px)}@media(hover: hover){.pd-md-viewer pre:not(.success):not(.error):hover code{background-color:#ddd}.pd-md-viewer pre:not(.success):not(.error):hover code[name]:not([name=""])::before{background-color:#ddd;border-bottom:1px solid #ddd;color:#444}.pd-md-viewer pre:not(.success):not(.error):hover button{opacity:1}}.pd-md-viewer pre code{position:relative;display:block;margin-bottom:0 !important;background-color:#f7f7fa;border:1px solid rgba(0,0,0,.1019607843);transition:.3s}.pd-md-viewer pre code[name]:not([name=""]){margin-top:1rem;border-radius:0 .25rem .25rem .25rem}.pd-md-viewer pre code[name]:not([name=""])::before{content:attr(name);position:absolute;left:-1px;top:-1.25rem;padding:0 .5rem;height:1.25rem;line-height:1.25rem;min-height:1.25rem;font-size:.75rem;background-color:#f7f7fa;color:#777;border-radius:.25rem .25rem 0 0;border-top:1px solid rgba(0,0,0,.1019607843);border-left:1px solid rgba(0,0,0,.1019607843);border-bottom:1px solid #f7f7fa;border-right:1px solid rgba(0,0,0,.1019607843);transition:.3s}.pd-md-viewer pre button{position:absolute;top:calc(.75rem - 1px);right:.5rem;padding:0 .5rem;line-height:1.5rem;font-size:.75rem;background-color:#777 !important;color:#fff !important;border-radius:.25rem;opacity:0;transition:.3s;cursor:pointer}.pd-md-viewer pre button::after{content:"複製代碼";color:#fff !important}.pd-md-viewer blockquote{padding-left:1rem;line-height:1.75rem;min-height:1.75rem;font-style:italic;border-left:.25rem solid #ddd;color:#777;background-color:rgba(0,0,0,.0117647059)}.pd-md-viewer blockquote *{margin-bottom:0;color:inherit}.pd-md-viewer blockquote>br:nth-last-child(1){display:none}\n                '.trim(),window.btoa(encodeURIComponent(i).replace(/%([0-9A-F]{2})/g,((e,t)=>String.fromCharCode("0x"+t)))))})],document.head.firstElementChild),this.body=`section#${t}.pd-md-viewer`._({"data-fillMode":null==e.fillMode?1:e.fillMode})}get editor(){return this.#v}set editor(e){this.#v&&(this.#v.body.onwheel=null),null!=e&&(this.#v=e,this.#v.viewer=this,this.#w&&this.#v&&(this.#v.body.onwheel=e=>{this.body.scrollTop+=e.deltaY}))}#g(){this.body.$selAll("div").forEach(((e,t)=>{e._attr({index:t+1})}))}#b(){if(!this.#v)return"";var e="";return this.#v.body.$childAll.forEach(((t,i)=>{var r=t.innerText.__(/[\u00A0\u0020]/g," ");r.trim().length<1?e+="\n":e+=`${r}\n`})),`\n${e.trim()}\n`}init(e){this.#g();let t=this.#_,i=this.body.scrollTop;oe&&clearTimeout(oe),oe=setTimeout((()=>{if(clearTimeout(oe),oe=null,t&&this.body.innerHTML&&t===this.body.innerHTML)return;let r=e?`\n${e}`:"";r||(r=this.#v&&this.#v.body.innerText?this.#b():t),r=`\n${r}\n`,r=r.md_to_html();let o="temp"._();null!=r&&`${r}\n`.$$(/(.+\n)+/g)&&`${r}\n`.$fit(/(.+\n)+/g).forEach((e=>{if(e.trim().$$(/^[\u00A0\u0020]*\<(.+\n?)\>$/)){let t="template"._(e);o._child(t.content)}else e.split(/\n/).forEach((e=>{if(!(e.trim().length<1))if(e.trim().$$(/^[\u00A0\u0020]*\<(.+\n?)\>$/)){let t="template"._(e);o._child(t.content)}else o._child(["p"._(e)])}))})),this.body.__child(o),this.body.$selAll("button.copy").forEach((e=>{e._click((async function(){clearTimeout(le);let e=this.$pre(0).$child(0).innerText;try{await navigator.clipboard.writeText(e),this.$parent(0)._class("success"),le=setTimeout((()=>{this.$parent(0).class_("success")}),1e3)}catch(e){console.error(e),this.$parent(0)._class("error")}}))})),setTimeout((()=>{this.body.scrollTop=i,PR.prettyPrint()}),500)}),this.#f)}}const e="PDMDEditor",fe="PDMDViewer",we="pd-md-editor",r="id",o="nodeName",ce="nodeValue",l="parentNode",he="tagName",ge="style",Ke="head",We="setData",qe="getData",_e="section",s="selection",a="getSelection",d="empty",c="clipboardData",h="baseOffset",u="focusOffset",p="innerText",m="innerHTML",f="slice",g="toLowerCase",w="div",v="inputFocus",_="length",x="body",S="childNodes",C="setStart",k="setEnd",A="removeAllRanges",E="children",T="firstElementChild",je="addEventListener",Pe="preventRefresh",Ue="preventDefault",I="scrollTop",Ge="trim",pe="code",Me="fillMode",Oe="showRow",Fe="focusBackgroundColor",He="focusTextColor",Ye="placeholder",Le="placeholderColor",Be="forEach",dt="beforeunload",st="deleteCompositionText",$e="**",be="b",ye="*",ke="i",xe="~~",Ae="s",Ee="__",Te="u",Ie="==",me="mark",Ce="^",Se="sup",De="~",Re="sub",ze="`",pt="em",ut="a",_t="pre",ft="strong",wt="h",gt="button",vt="video",$t="img",bt="source",Tt="link",Et="list",Ot="tag",Dt="prettyprint",yt="copy",Nt="parentElement",It="lastChild",at="text/plain",xt="$ary",lt="$html",mt="$child",Ze="$childAll",ct="_child",Xe="_click",Je="_mouseup",Qe="_keydown",ot="_keyup",nt="_blur",et="_input",tt="_cut",it="_paste",rt="_touchend",ht="class_",At="$fit";((e,t)=>{const i="g",r=/[\"\']{0,1}([\u0020\u00A0\u0009]*)(mailto\:)?([\u0020\u00A0\u0009]*)(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)([\u0020\u00A0\u0009]*)[\"\']{0,1}/,o=/[\"\']{0,1}([\u0020\u00A0\u0009]*)(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))([\u0020\u00A0\u0009]*)[\"\']{0,1}/,n=/(\n[\u0020\u00A0\u0009]*|\n[\u0020\u00A0\u0009]*>[\u0020\u00A0\u0009]*|\n[\u0020\u00A0\u0009]*([\-\*\+]|\d+\.)[\u0020\u00A0\u0009]+)\\?(\#{1,6})[\u0020\u00A0\u0009]+([^\n]+)/,d=/\\\#/,s=/^['"].*['"]$/,l=/(\s*\|\s*)\\?(\#{1,6})\s+([^\n\|\s][^\n\|]*[^\s\|])(\s*)/,h=/(\n)([^\n]+)\n\={3,}([\u0020\u00A0\u0009]*\n)/,a=/(\n)([^\n]+)\n\-{3,}([\u0020\u00A0\u0009]*\n)/,p=/\[([^\]\n]+)?\]\(([^\)\n\u0020\u00A0\u0009]+)([\u0020\u00A0\u0009]*[\"\']([^\)\n]+)[\"\'])?\)/,u=/\!\[([^\]\n]+)?\]\(([^\)\n\u0020\u00A0\u0009]+)([\u0020\u00A0\u0009]*[\"\']([^\)\n]+)[\"\'])?\)(\(([0-9]+\%?)?[\u0020\u00A0\u0009\*x]+([0-9]+\%?)?\))?/,c=/^\s|\s$/g,f=/\*{2}([^\n\*]*)\*{2}/,w=/\_{2}([^\n\_]*)\_{2}/,v=/\~{2}([^\n\~]*)\~{2}/,b=/\={2}([^\n\=]*)\={2}/,T=/\*([^\n\*]*)\*/,y=/\_([^\n\_]*)\_/,O=/\^([^\n\^]*)\^/,$=/\~([^\n\~]*)\~/,E=/\`([^\n\`]*)\`/,D=/^\n|\n$/g,A=/\`{3}(\w*)([\s\S]*?)\s*\`{3}/,S=/((\n([\u0020\u00A0]{4,}|[\u0009]))[^\n]+)+/,N=/(\n[\u0020\u00A0\u0009]*)(\*{3,}|\-{3,})([\u0020\u00A0\u0009]*\n)/,I=/(\-[\u0020\u00A0\u0009]*[^\n]+)?([\u0020\u00A0\u0009]*\n[\u0020\u00A0\u0009]*\|((?:.*?\|)*.*)\|)+/,x=/(\n)(\>[\u00A0\u0020\u0009\>]+[^\n]*(\n)?)+/,R=/(([\-\*\+]|\d+\.)\s+(.+)(\n.*\S.*)*)+/,k=/^(([\-\*\+]|\d+\.)\s*[^\n]+)/,C=/^(([\-\*\+]|\d+\.)\s*[^\n]+)?\n/,F=/^\n([\u00A0\u0020]{4,}|\u0009)/,U=/\n/,L=/(\<[\u00A0\u0020\u0009\>]*\/?[\u00A0\u0020\u0009\>]*br[\u00A0\u0020\u0009\>]*\/?[\u00A0\u0020\u0009\>]*\>|\n)/,Y=/[A-Za-z\%]/,z=/\.mov$/,M=/\.mp4$/,P=/\.svg$/,K="table",G="thead",H="tbody",j="blockquote",B="temp",W="span",q="br",V="ul",Z="ol",X="li",J="\n",Q=["javascript","js","ts","html","css","xml","json","sql","java","python","ruby","php","cpp","csharp","swift","typescript","kotlin","go","rust","perl","bash"],ee="abcdefghijklmnopqrstuvwxyz0123456789"[xt]("");let te=new Map;function ie(e){return new RegExp(e,i)}function oe(e=""){let t="{{"+(e[Ge]()||"auto")+"-";for(let e=0;e<64;e++)t+=String(ee.sort((()=>Math.random()-.5))[0]);return t+="}}",te.has(t)?oe(e):t}function de(e,t="",i="",r="",o="",n=""){const d=oe(i),s=r instanceof HTMLElement?r:i._(r);return te.set(d,s[lt]),t.__(e,o+d+n)}function se(e=""){return(e[At](ie(n))||[])[Be]((t=>{if(t[At](d))return;const i=t[At](n);if(i[_]<1)return;const r=i[1]||"",o=(i[3]||"")[Ge]()[_],s=(i[4]||"")[Ge]();0!=Math.min(o,s[_])&&(e=de(t,e,wt+o,s,r))})),(e[At](ie(l))||[])[Be]((t=>{if(t[At](d))return;const i=t[At](l);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge]()[_],n=(i[3]||"")[Ge](),s=i[4]||"";0!=Math.min(o,n[_])&&(e=de(t,e,wt+o,n,r,s))})),(e[At](ie(h))||[])[Be]((t=>{const i=t[At](h);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge](),n=i[3]||"";o[_]<1||(e=de(t,e,wt+1,o,r,n))})),(e[At](ie(a))||[])[Be]((t=>{const i=t[At](a);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge](),n=i[3]||"";o[_]<1||(e=de(t,e,wt+2,o,r,n))})),e}function le(e=""){return[[pe,E],[ft,f],[Te,w],[Ae,v],[me,b],[pt,T],[pt,y],[Se,O],[Re,$]][Be]((t=>function(t){const i=t[0],r=t[1];(e[At](ie(r))||[])[Be]((t=>{const o=t[At](r);if((o[1]||"").$$(c))return;let n=(o[1]||"")[Ge]();return n[_]<1?void 0:i==pe?(n=n[lt],void(e=de(t,e,i,n))):void(e=e.__(t,i._(n)[lt]))}))}(t))),e}function ae(e=""){return(e[At](ie(u))||[])[Be]((t=>{const i=t[At](u);if(i[_]<1)return;const r=(i[1]||"")[Ge](),o=(i[2]||"")[Ge](),n=(i[4]||"")[Ge]();let d=(i[6]||"")[Ge](),s=(i[7]||"")[Ge]();if(o[_]<1)return;d[_]&&!d.$$(Y)&&(d+="px"),s[_]&&!s.$$(Y)&&(s+="px");const l=o.$$(z),h=o.$$(M),a=o.$$(P);let p;p=l?vt._({controls:"",title:n,style:{width:d,height:s}},[bt._({type:"video/quicktime"},o)]):h?vt._({controls:"",title:n,style:{width:d,height:s}},[bt._({type:"video/mp4"},o)]):a?$t._({alt:r,title:n,style:{width:d,height:s}},o):"figure"._([$t._({alt:r,title:n,style:{width:d,height:s}},o),"figcaption"._(n)]),null!=p&&(e=de(t,e,$t,p))})),e}function ue(e=""){return(e[At](ie(p))||[])[Be]((t=>{const i=t[At](p);if(i[_]<1)return;const r=(i[1]||"")[Ge](),o=(i[2]||"")[Ge](),n=(i[4]||"")[Ge]();if(0==Math.min(r[_],o[_]))return;const d=[ut,Tt].$str(".")._({title:n},r)._open(o);e=de(t,e,ut,d)})),(e[At](ie(o))||[])[Be]((t=>{if(t[At](s))return;const i=t[At](o);if(i[_]<1)return;const r=i[1]||"",n=(i[2]||"")[Ge](),d=i[5]||"";if(n[_]<1)return;const l=ut._(n)._open(n);e=de(t,e,ut,l,r,d)})),(e[At](ie(r))||[])[Be]((t=>{if(t[At](s))return;const i=t[At](r);if(i[_]<1)return;const o=(i[1]||"")+(i[2]||"")+(i[3]||""),n=(i[4]||"")[Ge](),d=i[8]||"";if(n[_]<1)return;const l=ut._(n)._open("mailto:"+n);e=de(t,e,ut,l,o,d)})),e}function _e(e=""){return(e[At](ie(R))||[])[Be]((t=>function(t){let r;if(t[Ge]().__(new RegExp(L,i),J)[xt](L)[Be](((e,t)=>{const i=e[At](R)||[],o=i[_]<1?null:(i[2]||"")[Ge]().$$(/\d+\./)?Z:V,n=i[_]<1?e.__(/^\s*([\-\*\+]|\d+\.)?\s*/g,""):(i[3]||"")[Ge](),d=(e[At](/\s{4}/g)||[])[_];if(0==t&&null==o)return;0==t&&(r=o._());let s=r;if(e.$$(/^\s{0,3}([\-\*\+]|\d+\.)/))s[ct]([X._(n)]);else if(e.$$(/^\s{4,}([\-\*\+]|\d+\.)/)){s=r[It];for(let e=0;e<d&&(null!=s&&null!=s[he]);e++)e==d-1&&s[he][g]()==X?s[It]instanceof HTMLElement&&(s[It][he][g]()==Z||s[It][he][g]()==V)?s[It][ct]([X._(n)]):s[ct]([o._([X._(n)])]):s=s[It][It]}else{for(s=r[It];null!=s[It];)s=s[It];if(s instanceof HTMLElement);else if(s[ce].$$(/^\{\{(h\d|img|pre)/));else{for(;"LI"!=s[Nt].tagName;)s=s[Nt];s[Nt][ct]([q._()])}s[Nt][m]+=n}})),null==r)return;e=de(t,e,Et,r)}(t))),e}function fe(e=""){return(e[At](ie(A))||[])[Be]((t=>{const i=t[At](A);if(i[_]<1)return;const r=null==i[2][At](D),o=r?"":(i[1]||"")[Ge]()[g](),n=r?i[1]||"":i[2]||"",d=-1!=Q.indexOf(o),s=n.__(D,"")[xt](U);let l;l=r?[pe,Dt].$str(".")._(n[lt]):[_t,Dt].$str(".")._({name:o},[(pe+(d?".language-"+o:""))._({name:o},[ve(s)]),[gt,yt].$str(".")._()]),e=de(t,e,r?pe:_t,l)})),e}function we(e=""){return(e[At](ie(S))||[])[Be]((t=>{const i=t[At](S);if(i[_]<1)return;const r=i[2]||"",o=t.__(D,"")[xt](U),n=[_t,Dt].$str(".")._([pe._([ve(o)]),[gt,yt].$str(".")._()]);e=de(t,e,_t,n,r)})),e}function ve(e){let t=0,i=Z._();return e[Be](((e,r)=>{0==r&&(t=Math.floor((e[At](/^\s*/)||[""])[0][_]/4));const o=new RegExp(`^\\s{0,${4*t}}`);i[ct]([X._(e.__(o,"")[lt])])})),i}function ge(e=""){let t,i="";return(e[At](ie(I))||[])[Be]((r=>{if(r.$$(k))r=r.__(C,"");else if(r.$$(F))return;!function(e){const r=e[Ge]()[xt](U);t=K._([G._(),H._()]);let o=!0;r[Be](((e,r)=>{const n=e[At](/((\s*)\|((?:.*?\|)*.*)\|)+/);if(n[_]<1)return;const d=(n[3]||"")[Ge](),s=e.$$(/^\s*\|(\s*\:?\s*\-*\s*\:?\s*\|)+/),l=d[xt](/\s*\|\s*/);0==r&&(i=n[2]||""),s?o=!1:function(e,i){const r=e?t.firstChild:t[It],o="tr"._();i[Be]((t=>{o[ct]([(e?"th":"td")._(t)])})),r[ct]([o])}(o,l)}))}(r),e=de(r,e,K,t,i)})),e}function be(e=""){let t;return(e[At](ie(x))||[])[Be]((r=>{t=j._();const o=r[At](x),n=o[1]||"",d=o[3]||"";!function(e){function r(e){let t=B._();const i=/^[\u00A0\u0020\u0009]*\>/,o=e.__(i,"");if(i.test(e)){let e=j._();e[ct]([r(o)]),t[ct]([e])}else e.$$(/^[\u00A0\u0020\u0009]*\{\{/)?t[ct](e):t[ct]([W._(e),q._()]);return t}_e(e[Ge]().__(/^\>[\u00A0\u0020\u0009]?/g,"").__(/\n\>[\u00A0\u0020\u0009]?/g,"\n").__(new RegExp(L,i),"\n"))[xt](U)[Be]((e=>{t[ct]([r(e)])}))}(r),e=de(r,e,j,t,n,d)})),e}function ye(e=""){return(e[At](ie(N))||[])[Be]((t=>{const i=t[At](N);if(i[_]<1)return;const r=i[1]||"",o=i[3]||"",n=oe("HR");te.set(n,"<hr>"),e=e.__(t,r+n+o)})),e}function Oe(e=""){if(String(ne||"")[Ge]()[_]<1)return e;const t=/(\s{1})\\?[\#＃]{1}([\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7a3a-zA-Z0-9_]+)/,r=new RegExp(t,i);let o=e[At](r)||[];for(let i=0,r=o[i];i<o[_];i++,r=o[i]){if(r[At](/^\\/))continue;const i=r[At](t);if(i[_]<1)continue;const o=i[1],n=(i[2]||"")[Ge](),d=oe(ut);if(n[_]<1)continue;const s=B._(["_blank"===re?[ut,Ot].$str(".")._(n)._open(ne+n):[ut,Ot].$str(".")._(n)._go(ne+n)]);te.set(d,s[lt]),e=e.__(r,o+d)}return e}function $e(e=""){e=e.__(/^\n*|\n*$/g,"");var t=/(&lt;br&gt;)/g;return t.test(this)?e.__(t,"\n"):e}e(t,"md_to_html",{value:function(){let e=this.toString().__(/[\u00A0\u0020]/g," "),t=[fe,ae,ue,le,se,ye,ge,be,_e,we,Oe,$e];for(let i=0,r=t[i];i<t[_];i++,r=t[i])e=r(e);for(;e.$$(/\{{2}\w*\-*\w{64}\}{2}/);)e[At](/\{{2}\w*\-*\w{64}\}{2}/g)[Be]((t=>{let i=new RegExp(t);e=e.__(i,te.get(t))}));return e}})})(Object.defineProperty,String.prototype);