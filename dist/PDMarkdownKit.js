let R,N,D,L,z,O,M,j,P,H,B,Y,F,U,K,q,V,Z,W,G,Q,X,J,ee,ne,re,oe,le,te=[],ie=[],se=null;export class editor{#e=!0;constructor(t={}){const i=(t[r]||"")[Ge]()||e;en(),document[Ke][ct]([ge._(`\n#${i} {font-family: ${t.fontFamily||"'Roboto Mono', monospace"}}\n#${i}>div {font-size: ${t.fontSize||"0.75rem"}}\n#${i}>div.inputFocus {background-color: ${t[Fe]||"#0000ff1a"}; color: ${t[He]||"#0000ffff"};}\n#${i}>div:nth-last-child(1):empty::after {content: "${t[Ye]||"Type here ..."}"; color: ${t|Le|"#bfbfbf"};}`)]);const d=(t.mode||"auto").toLowerCase();this[x]=(_e+"#"+i+"."+we)._({"data-mode":tn&&"auto"===d||"dark"===d?"dark":"","data-fillMode":null==t[Me]?1:t[Me],"data-row":null==t[Oe]?1:t[Oe]});const n=this[x];this.#e=Boolean(null==t.hotKey||t.hotKey),null==se&&t[Pe]&&(se=window[je](dt,(e=>{e[Ue]()}))),n[Je]((e=>{this.#t()}))[rt]((e=>{this.#t()}))[tt]((e=>(this.#i((t=>{e[c][We](at,N),n[mt](D)[m]=(z+O)[lt],this.#r(),this.#o(n[mt](D),z[_])})),this.#d(!0),!1)))[it]((e=>(this.#i((t=>{const i=((e[c]||window[c])[qe]("Text")||"").$ary(/\n/),r=i[_],o=r-1,d=r>1,s=D+o,l=`${d?"":z}${i[o]}`[_],a=i[0],m=d?"":O;if(n[mt](D)[p]=z+a+m,this.#r(),d)for(let e=1;e<r;e++){const t=i[e];n[ct](w._(`${t}${e===o?O:""}`[lt])[Xe]((()=>this.#t())),n[mt](D+e))}this.#o(n[mt](s),l,l)})),this.#d(!0),!1)))[et]((e=>{let t,i;clearTimeout(R),e.inputType===st&&(t=H,i=B,n[Ze][Be]((e=>{if(e[o][g]()===w)return!1;e.remove(),n[ct](w._({index:t+1})[Xe]((e=>this.#t())),n[mt](t)),this.#o(n[mt](t),i)}))),e.inputType,this.#t(),R=setTimeout((()=>{this.#d(!0)}),300)}))[Qe]((e=>{const i=e.metaKey||e.ctrlKey,r=e.shiftKey,o=e.key.$$(/^b$/i),d=e.key.$$(/^i$/i),n=e.key.$$(/^s$/i),s=e.key.$$(/^u$/i),l=e.key.$$(/^m$/i),a=e.key.$$(/^z$/i),m=e.key.$$(/^r$/i),p=e.key.$$(/^k$/i),c="ArrowUp"===e.key,h="ArrowDown"===e.key,u="f5"===e.key||"F5"===e.key;return this.#e&&i&&r&&a?(this.goForward(),!1):this.#e&&i&&a?(this.goBack(),!1):!(this.#e&&(i&&m||u)&&t[Pe])&&(this.#e&&i&&o?(this.#n(e,$e,be),!1):this.#e&&i&&d?(this.#n(e,ye,ke),!1):this.#e&&i&&n?(this.#n(e,xe,Ae),!1):this.#e&&i&&s?(this.#n(e,Te,Te),!1):this.#e&&i&&l?(this.#n(e,Ie,me),!1):this.#e&&i&&c?(this.#n(e,Ce,Se),!1):this.#e&&i&&h?(this.#n(e,De,Re),!1):this.#e&&i&&p?(this.#n(e,ze,pe),!1):(this.#t(),"Tab"===e.key?this.#s(e):"Enter"===e.key?this.#l(e):"Backspace"===e.key?this.#a(e):void 0))}))[ot]((e=>{n[E]&&1===n[E][_]&&n[T][o][g]()!==w&&this.init(null,!0,!1),this.#t(),this.viewer&&this.viewer.init()}))[nt]((e=>{(w+"."+v).$&&(w+"."+v).$[ht](v)}))}get viewer(){return this.md_viewer}set viewer(e){this.md_viewer=e}#t(t){function i(t){if(t)return t[r]===e||t[o][g]()===w&&t[l][r]===e?t:i(t[l])}(w+"."+v).$&&(w+"."+v).$[ht](v);const d=window[a]();if(d.rangeCount<1)return;const n=d.getRangeAt(0),s=t||i(n.commonAncestorContainer);if(null==s)return;s._class(v);let m="";var c,b;n.cloneContents()[S][Be](((e,t)=>{m+=(0==t?"":"\n")+e[p]})),s===this[x]&&(c=parseInt(i(d.baseNode).$attr("index"))-1,b=parseInt(i(d.focusNode).$attr("index"))-1);var y=Boolean(s===this[x]),T=!y&&Boolean(d[h]!==d[u]),O=Boolean(d[u]>d[h]),$=Boolean(c<b);M=!0,H=y?null:parseInt(s.$attr("index"))-1,B=y||T?null:parseInt(d[u]),Y=y||T?null:s[p][f](0,d[u]),F=y||T?null:s[p][f](d[u],s[p][_]),P=T,U=T?d.toString():m,K=T?O?d[h]:d[u]:null,q=T?O?d[u]:d[h]:null,V=T?s[p][f](0,K):null,Z=T?s[p][f](q,s[p][_]):null,j=y,W=y?$?c:b:null,G=y?$?d[h]:d[u]:null,Q=y?$?b:c:null,X=y?$?d[u]:d[h]:null,J=y?s[mt](W)[p][f](0,G):null,ee=y?s[mt](Q)[p][f](X,s[p][_]):null}#i(e){let t,i,r,o;j?(t=W,i=Q,r=J,o=ee):P?(t=H,i=H,r=V,o=Z):null!==H&&null!==B&&(t=H,i=H,r=Y,o=F),N=U,D=parseInt(t),L=parseInt(i),z=r.__(/&lt;/g,"<").__(/&gt;/g,">").__(/&nbsp;/g," "),O=o.__(/&lt;/g,"<").__(/&gt;/g,">").__(/&nbsp;/g," "),e()}#r(){for(let e=L;e>D;e--)this[x][mt](e).remove()}#o(e,t,i){this[x].$selAll(w)[Be](((e,t)=>{e._attr({index:t+1})})),window[a]?window[a]()[d]?window[a]()[d]():window[a]()[A]&&window[a]()[A]():document[s]&&document[s][d]();var r=window[a](),o=document.createRange(),n=t??e[S][0][_],l=i??n;o.selectNode(e),e[S][0]?(o[C](e[S][0],n>e[S][0][_]?e[S][0][_]:n),o[k](e[S][0],l>e[S][0][_]?e[S][0][_]:l)):(o[C](e,0),o[k](e,0)),r.addRange(o),this.#t(e)}#s(e){if(9!==e.keyCode)return;const t=this[x];return this.#i((e=>{t[mt](D)[m]=(z+"    "+O)[lt],this.#r();const i=z[_]+4;this.#o(t[mt](D),i)})),!1}#l(e){if(13!==e.keyCode)return;const t=this[x];return this.#i((e=>{t[mt](D)[m]=z[lt],this.#r(),t.$parent(1)[I]+=28,t[ct](w._(O[lt])[Xe]((()=>this.#t())),t[mt](D+1)),this.#o(t[mt](D+1),0)})),!1}#a(e){if(8!==e.keyCode)return!1;const t=this[x];return this.#i((e=>{if(j||P)t[mt](D)[m]=(z+O)[lt],this.#r(),this.#o(t[mt](D),z[_]);else if(z[_]){const e=z[f](0,z[_]-1);t[mt](D)[m]=(e+O)[lt],this.#o(t[mt](D),e[_])}else{if(0===D)return;t[mt](D-1)[m]+=O[lt],t[mt](D).$rm(),t.$parent(1)[I]-=28;const e=t[mt](D-1)[p][_]-O[_];this.#o(t[mt](D-1),e)}})),!1}#m(e){this[x][mt](-1)[p][Ge]()[_]<1?this[x][mt](-1)[m]=e[lt]:this[x][ct]([w._(e[lt])[Xe]((()=>this.#t()))]),this[x][I]=this[x].scrollHeight}#p(e,t){this[x][mt](D)[m]=e[lt],this.#r(),this.#o(this[x][mt](D),t),this.viewer&&this.viewer.init()}#n(e,t="",i=""){const r=e.metaKey||e.ctrlKey||t===i;M?this.#i((e=>{const o=O,d=`${z}${r?`<${i}>`:t}${N}${r?`</${i}>`:t}${o}`.__(/\n/g,""),n=d[_]-o[_]-(r?i[_]+3:t[_]);this.#p(d[lt],n),this.#d(!0)})):(this.#m((r?`<${i}></${i}>`:`${t}${t}`)[lt]),this.#o(this[x][mt](-1),r?i[_]+3:t[_]),this.#d(!0))}#c(e){M?this.#i((t=>{for(let t=D;t<=L;t++){const i=this[x][mt](t);i[m]=`${e} ${i[p]}`[lt]}const i=this[x][mt](L),r=i[p][_];this.#o(i,r),this.#d(!0),this.viewer&&this.viewer.init()})):(this.#m(e[lt]),this.#o(this[x][mt](-1),e[_]+1),this.#d(!0))}#h(e="",t="",i){if(M)return void this.#i((r=>{const o=O,d=`${z} ${null==i?"":"!"}[${e}](${t}) ${o}`.__(/\n/g,""),n=d[_]-o[_]-1;this.#p(d[lt],n),this.#d(!0)}));this.#m(`${null==i?"":"!"}[${e}](${t})`[lt]);const r=this[x][mt](-1),o=r[p][_];this.#o(r,o),this.#d(!0),this.viewer&&this.viewer.init()}#d(e){te.push(this.getTxt()),e&&(ie=[])}#u(e,t){let i=`PDMarkdownKit.${e}`,r=new Blob([t],{type:"application/octet-stream"}),o=URL.createObjectURL(r),d="a"._({href:o,download:i});_child(d),d.click()}init(e,t=!0,i=!0){if(this[x].contentEditable=!0,this[x][m]=null,null!=e){const i=e.__(/\n*$/,"").split("\n");i[Be](((e,t)=>{this[x][ct]([w._({index:t+1},e[lt])[Xe]((()=>this.#t()))])})),this[x][ct]([w._({index:i[_]+1})[Xe]((()=>this.#t()))]),t&&this.#o(this[x][mt](H||0),0)}else this[x][ct]([w._({index:1})[Xe]((()=>this.#t()))]),t&&this.#o(this[x][T],0);i&&this.#d(!0)}goBack(){const e=te.$(-2);if(null==e)return;let t=te.pop();ie.push(t),this.init(e[_]<1?null:e,!1,!1),this.viewer&&this.viewer.init()}goForward(){const e=ie.pop();null!=e&&(te.push(e),this.init(e,!1,!1),this.viewer&&this.viewer.init())}addHeading(e,t){const i=e.metaKey||e.ctrlKey,r=`${new Array(t).fill("#").join("")}${0===t?"":" "}`;M?this.#i((e=>{const o=z.__(/^\s*\#*\s*/,""),d=`${i?`<h${t}>`:r}${o}${N}${O}${i?`</h${t}>`:""}`.__(/\n/g,""),n=d[_]-(i?5:0);this.#p(d[lt],n),this.#d(!0)})):(this.#m((i?`<h${t}></h${t}>`:r)[lt]),this.#o(this[x][mt](-1),r[_]-(i?5:0)),this.#d(!0))}addBold(e){this.#n(e,$e,be)}addItalic(e){this.#n(e,ye,ke)}addStrikethrough(e){this.#n(e,xe,Ae)}addUnderline(e){this.#n(e,Te,Te)}addMarker(e){this.#n(e,Ie,me)}addSup(e){this.#n(e,Ce,Se)}addSub(e){this.#n(e,De,Re)}addBlockquote(){M?this.#i((e=>{for(let e=D;e<=L;e++){const t=this[x][mt](e);t[m]=`> ${t[p]}`[lt]}const t=this[x][mt](L),i=t[p][_];this.#o(t,i),this.#d(!0),this.viewer&&this.viewer.init()})):(this.#m("> "[lt]),this.#o(this[x][mt](-1),2),this.#d(!0))}addUl(){this.#c("-")}addOl(){this.#c("1.")}addCode(e){M?this.#i((t=>{j?(this[x][ct](w._("```")[Xe]((()=>this.#t())),this[x][mt](L+1)),this[x][ct](w._("```")[Xe]((()=>this.#t())),this[x][mt](D)),this.#o(this[x][mt](L+1),this[x][mt](L+1)[p][_]),this.viewer&&this.viewer.init(),this.#d(!0)):this.#n(e,ze,pe)})):this.#n(e,ze,pe)}addLink(e="",t=""){t[Ge]()[_]<1&&e[Ge]()[_]<1||this.#h(e,t)}addImage(e="",t="",i=""){e[Ge]()[_]<1||this.#h(i,e,t)}clear(){this.init(),this.viewer&&this.viewer.init()}downloadMd(){this.#u("md",this.getTxt()[Ge]())}downloadHtml(){this.#u("html",`<!DOCTYPE html> <html lang="zh-hant"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Markdown Editor</title> <link rel="stylesheet" href="https://pardnchiu.github.io/PDMarkdownKit/dist/PDMarkdownKit.css"> <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"><\/script> <style> body { display: flex; justify-content: center; align-item: flex-start; width: 100%; height: 100%; overflow: scroll; } * { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; touch-action: manipulation; box-sizing: border-box;} body { background-color: ghostwhite; } *::-webkit-scrollbar { display: none; } body>section { padding: 1rem !important; width: 100%; background-color: #fff; box-sizing: border-box; box-shadow: 0 0.25rem 0.5rem #0000000d; transition: 0.3s; } @media screen and (min-width: 640px) { body>section { padding: 3rem !important; max-width: 800px; } } </style> </head> <body><section class="pd-md-viewer">${`\n${this.getTxt()}\n`.md_to_html()}</section></body> </html><!DOCTYPE html>`)}openfile(e){if(null==e)return void alert("請選擇檔案");const t=new FileReader;t.readAsText(e),t.onload=()=>{this[x][m]=null;const e=t.result[Ge]().__(/[\u0020\u00A0]/g," ");this.init(e[lt],!1),this.viewer&&this.viewer.init(e)}}getTxt(){return this[x].$childAll.map((e=>e[p])).join("\n")}}let nn=!1;function en(){var e;nn||(nn=!0,document.head._child(["link"._({rel:"stylesheet",href:"data:text/css;base64,"+(e='.pd-md-editor,.pd-md-viewer{overflow:hidden scroll;position:relative}.pd-md-editor :not(code),.pd-md-viewer *{font-family:inherit}.pd-md-editor>div,.pd-md-viewer,.pd-md-viewer *{margin:0;font-size:.875rem}.pd-md-editor{display:flex;flex-flow:column;justify-content:flex-start;align-items:flex-start;gap:.5rem;margin:0;padding:1.5rem 0}.pd-md-editor[data-fillMode="1"],.pd-md-viewer section.more img.cover,.pd-md-viewer[data-fillMode="1"]{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.pd-md-editor[data-row="1"]::before{content:"";position:fixed;z-index:0;top:0;left:0;bottom:0;width:3rem;background-color:#efefef}.pd-md-editor[data-row="1"]>div{padding:0 1rem 0 0}.pd-md-editor[data-row="1"]>div::before{content:attr(index);margin-right:1rem;flex-shrink:0;width:3rem;line-height:1.5rem;min-height:1.5rem;font-family:monospace;font-size:.75rem;text-align:center}.pd-md-editor>div{z-index:1;display:flex;flex-shrink:0;padding:0 1rem;width:100%;min-height:1.5rem;line-height:1.5rem;letter-spacing:1px;transition:.3s}.pd-md-viewer{padding:0 0 5rem;word-break:break-word;word-wrap:break-word}.pd-md-viewer *{padding:0;flex-shrink:0;max-width:100%!important;font-style:inherit;font-weight:inherit;letter-spacing:.5px;color:inherit;white-space:inherit;word-break:inherit;word-wrap:inherit;border:none;outline:0;object-fit:cover;appearance:unset;-webkit-appearance:unset;-moz-appearance:unset;overflow:visible}.pd-md-viewer * h1,.pd-md-viewer * h2,.pd-md-viewer * h3,.pd-md-viewer * h4,.pd-md-viewer * h5,.pd-md-viewer * h6{padding:.5rem 0 .25rem!important;margin:.25rem 0 .5rem!important}.pd-md-viewer * a,.pd-md-viewer * b,.pd-md-viewer * em,.pd-md-viewer * i,.pd-md-viewer * mark,.pd-md-viewer * s,.pd-md-viewer * strong,.pd-md-viewer * u{font-size:inherit!important;line-height:inherit!important}.pd-md-viewer :last-child,.pd-md-viewer ol *,.pd-md-viewer ul *{margin-bottom:0}.pd-md-viewer>:first-child{margin-top:1rem!important}.pd-md-viewer h1,.pd-md-viewer h2,.pd-md-viewer h3,.pd-md-viewer h4,.pd-md-viewer h5,.pd-md-viewer h6{margin-bottom:1rem;font-weight:700;color:#000}.pd-md-viewer h1 code,.pd-md-viewer h2 code,.pd-md-viewer h3 code,.pd-md-viewer h4 code,.pd-md-viewer h5 code,.pd-md-viewer h6 code{line-height:inherit!important}.pd-md-viewer h1,.pd-md-viewer h2{padding:1.5rem 0 .5rem}.pd-md-viewer h3,.pd-md-viewer h4{padding:1.25rem 0 .25rem}.pd-md-viewer h5,.pd-md-viewer h6{padding:1rem 0 0}.pd-md-viewer h1,.pd-md-viewer h2,.pd-md-viewer hr{border:none;border-bottom:1px solid #ddd}.pd-md-viewer h1{font-size:2.125rem}.pd-md-viewer h1 code,.pd-md-viewer h1 sub,.pd-md-viewer h1 sup{font-size:calc(2.125rem - 1px)}.pd-md-viewer h2{font-size:1.625rem}.pd-md-viewer h2 code,.pd-md-viewer h2 sub,.pd-md-viewer h2 sup{font-size:calc(1.625rem - 1px)}.pd-md-viewer h3{font-size:1.375rem}.pd-md-viewer h3 code,.pd-md-viewer h3 sub,.pd-md-viewer h3 sup{font-size:calc(1.375rem - 1px)}.pd-md-viewer h4{font-size:1.125rem}.pd-md-viewer h4 code,.pd-md-viewer h4 sub,.pd-md-viewer h4 sup{font-size:calc(1.125rem - 1px)}.pd-md-viewer h5{font-size:1rem}.pd-md-viewer h5 code,.pd-md-viewer h5 sub,.pd-md-viewer h5 sup{font-size:calc(1rem - 1px)}.pd-md-viewer h6{font-size:.875rem}.pd-md-viewer h6 code,.pd-md-viewer h6 sub,.pd-md-viewer h6 sup{font-size:calc(.875rem - 1px)}.pd-md-viewer hr{margin:.75rem 0!important}.pd-md-viewer b,.pd-md-viewer strong{font-weight:700}.pd-md-viewer details,.pd-md-viewer details summary,.pd-md-viewer p{line-height:1.75rem;min-height:1.75rem}.pd-md-viewer em,.pd-md-viewer i{font-style:italic}.pd-md-viewer mark{background-color:#ff0}.pd-md-viewer a.tag,.pd-md-viewer button.more,.pd-md-viewer img[src]:not([src=""]),.pd-md-viewer video{background-color:#0000000d}.pd-md-viewer sub,.pd-md-viewer sup{font-size:.75rem}.pd-md-viewer a{position:relative;letter-spacing:1px;font-weight:500;color:#00f}.pd-md-viewer code,.pd-md-viewer code *{letter-spacing:1px;font-family:"Roboto Mono",monospace;font-weight:400;font-size:.75rem}.pd-md-viewer a.tag{padding:0 .5rem;text-decoration:none;font-size:.75rem;color:#000;border:1px solid #0000000d;border-radius:.25rem}.pd-md-viewer a.tag::before{content:"#"}.pd-md-viewer button.more{margin-left:.5rem;padding:0 .5rem;font-size:.75rem;border:1px solid #0000000d;border-radius:.25rem}.pd-md-viewer section.more{position:relative;display:flex;justify-content:center;align-items:center;width:300px;max-width:100%;aspect-ratio:2/1;border:.5px solid #00000003;border-radius:.125rem;overflow:hidden}.pd-md-viewer section.more img.icon{z-index:1;width:60px;height:60px;cursor:pointer}.pd-md-viewer a::after{content:attr(href);position:absolute;z-index:1;top:100%;left:0;padding:0;max-width:100%;line-height:1.25rem;white-space:nowrap;font-size:.625rem;border-radius:.25rem;background-color:#777;color:#fff;opacity:0;transition:.3s;pointer-events:none}.pd-md-viewer img{margin-bottom:0;border:.5px solid #00000003;border-radius:.125rem;overflow:hidden}.pd-md-viewer code,.pd-md-viewer table tbody tr:nth-child(2n),.pd-md-viewer table thead{background-color:#f7f7fa}.pd-md-viewer table{table-layout:fixed;border-collapse:collapse}.pd-md-viewer table td,.pd-md-viewer table th{padding:.375rem .75rem;border:1px solid #0000000d;border-collapse:collapse;border-radius:.125rem}.pd-md-viewer ol,.pd-md-viewer ul{margin:.5rem 0 .5rem 1.5rem;padding-left:.5rem}.pd-md-viewer ol li,.pd-md-viewer ul li{line-height:1.75rem;min-height:1.75rem;list-style-position:outside;letter-spacing:1px}.pd-md-viewer ol li::marker,.pd-md-viewer ul li::marker{font-family:"Roboto Mono",monospace;font-size:.75rem}.pd-md-viewer ol ol,.pd-md-viewer ol ul,.pd-md-viewer ul ol,.pd-md-viewer ul ul{margin-top:0}.pd-md-viewer ul>li{list-style-type:disc}.pd-md-viewer ul>li>ul>li{list-style-type:circle}.pd-md-viewer ul>li>ul>li>ul>li{list-style-type:square}.pd-md-viewer ul>li>ul>li>ul>li>ul>li{list-style-type:"+ "}.pd-md-viewer ul>li>ul>li>ul>li>ul>li>ul>li{list-style-type:"- "}.pd-md-viewer ol>li>ol>li>ol>li>ol>li>ol>li>ol>li,.pd-md-viewer ul>li>ul>li>ul>li>ul>li>ul>li>ul>li{list-style-type:"> "}.pd-md-viewer ol>li{list-style-type:decimal}.pd-md-viewer ol>li>ol>li{list-style-type:upper-alpha}.pd-md-viewer ol>li>ol>li>ol>li{list-style-type:lower-alpha}.pd-md-viewer ol>li>ol>li>ol>li>ol>li{list-style-type:upper-roman}.pd-md-viewer ol>li>ol>li>ol>li>ol>li>ol>li{list-style-type:lower-roman}.pd-md-viewer label{display:block;margin-top:.5rem}.pd-md-viewer li label{display:inline-block;vertical-align:middle;margin-bottom:0}.pd-md-viewer input[type=checkbox]{vertical-align:middle;margin-right:.5rem;width:1.25rem;height:1.25rem;appearance:auto;-webkit-appearance:auto;-moz-appearance:auto}.pd-md-viewer code{padding:.125rem .5rem;line-height:1.5rem;min-height:1.5rem;border-radius:.25rem;border:.5px solid #0000000d}.pd-md-viewer code:has(ol),.pd-md-viewer code:has(ul){padding:0}.pd-md-viewer code *{margin-bottom:0!important}.pd-md-viewer code ol,.pd-md-viewer code ul{margin:0!important;padding:.5rem 1rem;overflow:scroll}.pd-md-viewer code ol li,.pd-md-viewer code ul li{list-style-type:none;line-height:1.25rem;min-height:1.25rem;white-space:nowrap}.pd-md-viewer pre{position:relative;border:none!important}.pd-md-viewer pre.success code{background-color:#e0ffe1}.pd-md-viewer pre.success code[name]:not([name=""])::before{background-color:#e0ffe1;border-bottom:1px solid #e0ffe1}.pd-md-viewer pre.success button::after{content:"已複製"}.pd-md-viewer pre.error code{background-color:#ffd4d4}.pd-md-viewer pre.error code[name]:not([name=""])::before{background-color:#ffd4d4;border-bottom:1px solid #ffd4d4}.pd-md-viewer pre.error button::after{content:"無法複製"}.pd-md-viewer pre.error button,.pd-md-viewer pre.success button{opacity:1}.pd-md-viewer pre[name]:not([name=""]) button{top:calc(2.375rem - 1px)}.pd-md-viewer pre code{position:relative;display:block;padding:0;margin-bottom:.5rem!important;background-color:#f7f7fa;border:.5px solid #0000000d;transition:.3s}.pd-md-viewer pre code[name]:not([name=""]){margin-top:1.75rem;border-radius:0 .25rem .25rem}.pd-md-viewer pre code[name]:not([name=""])::before{content:attr(name);position:absolute;left:-1px;top:-1.25rem;padding:0 .5rem;height:1.25rem;line-height:1.25rem;min-height:1.25rem;font-size:.75rem;background-color:#f7f7fa;color:#777;border-radius:.25rem .25rem 0 0;border-top:.5px solid #0000000d;border-left:.5px solid #0000000d;border-right:.5px solid #0000000d;transition:.3s}.pd-md-viewer pre button{position:absolute;top:calc(.75rem - 1px);right:.5rem;padding:0 .5rem;line-height:1.5rem;font-size:.75rem;background-color:#777!important;color:#fff!important;border-radius:.25rem;opacity:0;transition:.3s;cursor:pointer}.pd-md-viewer pre button::after{content:"複製代碼";color:#fff!important}.pd-md-viewer blockquote{margin-bottom:1rem;padding-left:1rem;line-height:1.75rem;min-height:1.75rem;font-style:italic;border-left:.25rem solid #ddd;color:#777;background-color:#f9f9f9}.pd-md-viewer blockquote *{margin-bottom:0;color:inherit}.pd-md-viewer blockquote>br:last-child{display:none}.pd-md-viewer iframe{max-width:100%;aspect-ratio:16/9}.pd-md-editor[data-mode=dark],.pd-md-viewer[data-mode=dark]{background-color:#272832}.pd-md-editor[data-mode=dark] *,.pd-md-viewer[data-mode=dark] *{color:#fff}.pd-md-viewer[data-mode=dark] mark{color:#000}.pd-md-viewer[data-mode=dark] a.tag{background-color:#1b1c19;color:#fff;border:1px solid #1b1c19}.pd-md-viewer[data-mode=dark] code{background-color:#1b1c19;border:.5px solid #1b1c19}.pd-md-viewer[data-mode=dark] pre code[name]:not([name=""])::before{background-color:#1b1c19;color:#777;border-top:.5px solid #0000000d;border-left:.5px solid #0000000d;border-right:.5px solid #0000000d;border-bottom:1px solid transparent}.pd-md-viewer[data-mode=dark] table tbody tr:nth-child(2n),.pd-md-viewer[data-mode=dark] table thead{background-color:#00000034}.pd-md-viewer[data-mode=dark] table td,.pd-md-viewer[data-mode=dark] table th{border:1px solid #ffffff34}@media(hover:hover){.pd-md-viewer a:hover::after{padding:0 .25rem;max-width:unset;opacity:1}.pd-md-viewer pre:not(.success):not(.error):hover code{background-color:#ddd}.pd-md-viewer pre:not(.success):not(.error):hover code[name]:not([name=""])::before{background-color:#ddd;border-bottom:1px solid #ddd;color:#444}.pd-md-viewer pre:not(.success):not(.error):hover button,.pd-md-viewer[data-mode=dark] pre:not(.success):not(.error):hover button{opacity:1}.pd-md-viewer[data-mode=dark] pre:not(.success):not(.error):hover code{background-color:#111}.pd-md-viewer[data-mode=dark] pre:not(.success):not(.error):hover code[name]:not([name=""])::before{background-color:#111;border-bottom:1px solid transparent;color:#fff}}.pd-md-viewer[data-mode=dark] blockquote{background-color:#222;border-left:.25rem solid #2b4d74}\n'.trim(),window.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,((e,t)=>String.fromCharCode("0x"+t)))))})],document.head.firstElementChild))}document.head._child(["link"._({rel:"preload",href:"https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",as:"script"}),"script"._({src:"https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"})]);export class viewer{#_;#w;#f;#v;constructor(e={}){const t=(e[r]||"").trim()||fe;this.#_=(e.pre||"").trim(),this.#w=parseInt(e.delay)||300,this.#f=parseInt(e.scrollSync)||0,this.editor=e.editor instanceof editor?e.editor:null,ne=(e.tagPath||"").trim()||null,re=null==e.tagTarget?"_blank":e.tagTarget,en();const i=(e.mode||"auto").toLowerCase();document[Ke][ct]([ge._(`\n#${t} {font-family: ${e.fontFamily||"'Noto Sans TC', sans-serif"}}`)]),this.body=`section#${t}.pd-md-viewer`._({"data-mode":tn&&"auto"===i||"dark"===i?"dark":"","data-fillMode":null==e.fillMode?1:e.fillMode})}get editor(){return this.#v}set editor(e){this.#v&&(this.#v.body.onwheel=null),null!=e&&(this.#v=e,this.#v.viewer=this,this.#f&&this.#v&&(this.#v.body.onwheel=e=>{this.body.scrollTop+=e.deltaY}))}#g(){this.body.$selAll("div").forEach(((e,t)=>{e._attr({index:t+1})}))}#b(){if(!this.#v)return"";var e="";return this.#v.body.$childAll.forEach(((t,i)=>{var r=t.innerText.__(/[\u00A0\u0020]/g," ");r.trim().length<1?e+="\n":e+=`${r}\n`})),`\n${e.trim()}\n`}init(e){this.#g();let t=this.#_,i=this.body.scrollTop;oe&&clearTimeout(oe),oe=setTimeout((()=>{if(clearTimeout(oe),oe=null,t&&this.body.innerHTML&&t===this.body.innerHTML)return;let r=e?`\n${e}`:"";r||(r=this.#v&&this.#v.body.innerText?this.#b():t),r=`\n${r}\n`,r=r.md_to_html();let o="template"._(r);this.body.__child(o.content),this.body.$selAll("button.copy").forEach((e=>{e._click((async function(){clearTimeout(le);let e=this.$pre(0).$child(0).innerText;try{await navigator.clipboard.writeText(e),this.$parent(0)._class("success"),le=setTimeout((()=>{this.$parent(0).class_("success")}),1e3)}catch(e){console.error(e),this.$parent(0)._class("error")}}))})),setTimeout((()=>{this.body.scrollTop=i,PR.prettyPrint()}),500)}),this.#w)}}const tn=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e="PDMDEditor",fe="PDMDViewer",we="pd-md-editor",r="id",o="nodeName",ce="nodeValue",l="parentNode",he="tagName",ge="style",Ke="head",We="setData",qe="getData",_e="section",s="selection",a="getSelection",d="empty",c="clipboardData",h="baseOffset",u="focusOffset",p="innerText",m="innerHTML",f="slice",g="toLowerCase",w="div",v="inputFocus",_="length",x="body",S="childNodes",C="setStart",k="setEnd",A="removeAllRanges",E="children",T="firstElementChild",je="addEventListener",Pe="preventRefresh",Ue="preventDefault",I="scrollTop",Ge="trim",pe="code",Me="fillMode",Oe="showRow",Fe="focusBackgroundColor",He="focusTextColor",Ye="placeholder",Le="placeholderColor",Be="forEach",dt="beforeunload",st="deleteCompositionText",$e="**",be="b",ye="*",ke="i",xe="~~",Ae="s",Te="u",Ie="==",me="mark",Ce="^",Se="sup",De="~",Re="sub",ze="`",pt="em",ut="a",_t="pre",ft="strong",wt="h",gt="button",vt="video",$t="img",bt="source",Tt="link",Et="list",Ot="tag",Dt="prettyprint",yt="copy",Nt="parentElement",It="lastChild",at="text/plain",xt="$ary",lt="$html",mt="$child",Ze="$childAll",ct="_child",Xe="_click",Je="_mouseup",Qe="_keydown",ot="_keyup",nt="_blur",et="_input",tt="_cut",it="_paste",rt="_touchend",ht="class_",At="$fit";((e,t)=>{const i="g",r=/[\"\']{0,1}([\u0020\u00A0\u0009]*)(mailto\:)?([\u0020\u00A0\u0009]*)(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)([\u0020\u00A0\u0009]*)[\"\']{0,1}/,o=/[\"\']{0,1}([\u0020\u00A0\u0009]*)(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))([\u0020\u00A0\u0009]*)[\"\']{0,1}/,d=/(\n[\u0020\u00A0\u0009]*|\n[\u0020\u00A0\u0009]*>[\u0020\u00A0\u0009]*|\n[\u0020\u00A0\u0009]*([\-\*\+]|\d+\.)[\u0020\u00A0\u0009]+)\\?(\#{1,6})[\u0020\u00A0\u0009]+([^\n]+)/,n=/\\\#/,s=/^['"].*['"]$/,l=/(\s*\|\s*)\\?(\#{1,6})\s+([^\n\|\s][^\n\|]*[^\s\|])(\s*)/,a=/(\n)([^\n]+)\n\={3,}([\u0020\u00A0\u0009]*\n)/,p=/(\n)([^\n]+)\n\-{3,}([\u0020\u00A0\u0009]*\n)/,c=/\[([^\]\n]+)?\]\(([^\)\n\u0020\u00A0\u0009]+)([\u0020\u00A0\u0009]*[\"\']([^\)\n]+)[\"\'])?\)/,h=/\!\[([^\]\n]+)?\]\(([^\)\n\u0020\u00A0\u0009]+)([\u0020\u00A0\u0009]*[\"\']([^\)\n]+)[\"\'])?\)(\(([0-9]+\%?)?[\u0020\u00A0\u0009\*x]+([0-9]+\%?)?(\s+(left|right))?\))?/,u=/^\s|\s$/g,f=/\*{2}([^\n\*]*)\*{2}/,v=/\_{2}([^\n\_]*)\_{2}/,b=/\~{2}([^\n\~]*)\~{2}/,y=/\={2}([^\n\=]*)\={2}/,T=/\*([^\n\*]*)\*/,O=/\_([^\n\_]*)\_/,$=/\^([^\n\^]*)\^/,E=/\~([^\n\~]*)\~/,D=/\`([^\n\`]*)\`/,A=/^\n|\n$/g,S=/\`{3}(\w*)([\s\S]*?)\s*\`{3}/,k=/((\n([\u0020\u00A0]{4,}|[\u0009]))[^\n]+)+/,N=/(\n[\u0020\u00A0\u0009]*)(\*{3,}|\-{3,})([\u0020\u00A0\u0009]*\n)/,x=/(\-[\u0020\u00A0\u0009]*[^\n]+)?([\u0020\u00A0\u0009]*\n[\u0020\u00A0\u0009]*\|((?:.*?\|)*.*)\|)+/,I=/(\n)(\>[^\n]*(\n)?)+/,R=/[\-\*\+]\s+\[\s*(x)?\s*\]\s+(.+)/,C=/(([\-\*\+]|\d+\.)\s+(.+)(\n.*\S.*)*)+/,F=/^(([\-\*\+]|\d+\.)\s*[^\n]+)/,U=/^(([\-\*\+]|\d+\.)\s*[^\n]+)?\n/,L=/^\n([\u00A0\u0020]{4,}|\u0009)/,z=/\n/,Y=/(\<[\u00A0\u0020\u0009\>]*\/?[\u00A0\u0020\u0009\>]*br[\u00A0\u0020\u0009\>]*\/?[\u00A0\u0020\u0009\>]*\>|\n)/,M=/[A-Za-z\%]/,K=/\.mov$/,P=/\.mp4$/,G=/\.svg$/,H=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?/,j="table",B="thead",W="tbody",q="blockquote",V="temp",Z="span",X="br",J="ul",Q="ol",ee="li",te="\n",ie=["javascript","js","ts","html","css","xml","json","sql","java","python","ruby","php","cpp","csharp","swift","typescript","kotlin","go","rust","perl","bash"],oe="abcdefghijklmnopqrstuvwxyz0123456789"[xt]("");let de=new Map;function se(e){return new RegExp(e,i)}function le(e=""){let t="{{"+(e[Ge]()||"auto")+"-";for(let e=0;e<64;e++)t+=String(oe.sort((()=>Math.random()-.5))[0]);return t+="}}",de.has(t)?le(e):t}function ae(e=""){if(e.trim().length<1)return"";const t=e.match(H);return t&&11===t[1].length?t[1]:""}function ue(e,t="",i="",r="",o="",d=""){const n=le(i),s=r instanceof HTMLElement?r:i._(r);return de.set(n,s[lt]),t.__(e,o+n+d)}function _e(e=""){return(e[At](se(d))||[])[Be]((t=>{if(t[At](n))return;const i=t[At](d);if(i[_]<1)return;const r=i[1]||"",o=(i[3]||"")[Ge]()[_],s=(i[4]||"")[Ge]();0!=Math.min(o,s[_])&&(e=ue(t,e,wt+o,s,r))})),(e[At](se(l))||[])[Be]((t=>{if(t[At](n))return;const i=t[At](l);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge]()[_],d=(i[3]||"")[Ge](),s=i[4]||"";0!=Math.min(o,d[_])&&(e=ue(t,e,wt+o,d,r,s))})),(e[At](se(a))||[])[Be]((t=>{const i=t[At](a);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge](),d=i[3]||"";o[_]<1||(e=ue(t,e,wt+1,o,r,d))})),(e[At](se(p))||[])[Be]((t=>{const i=t[At](p);if(i[_]<1)return;const r=i[1]||"",o=(i[2]||"")[Ge](),d=i[3]||"";o[_]<1||(e=ue(t,e,wt+2,o,r,d))})),e}function we(e=""){return[[pe,D]][Be]((t=>function(t){const i=t[0],r=t[1];(e[At](se(r))||[])[Be]((t=>{const o=t[At](r);if((o[1]||"").$$(u))return;let d=(o[1]||"")[Ge]();return d[_]<1?void 0:i==pe?(d=d[lt],void(e=ue(t,e,i,d))):void(e=e.__(t,i._(d)[lt]))}))}(t))),e}function fe(e=""){return[[ft,f],[ft,v],[Ae,b],[me,y],[pt,T],[pt,O],[Se,$],[Re,E]][Be]((t=>function(t){const i=t[0],r=t[1];(e[At](se(r))||[])[Be]((t=>{const o=t[At](r);if((o[1]||"").$$(u))return;let d=(o[1]||"")[Ge]();return d[_]<1?void 0:i==pe?(d=d[lt],void(e=ue(t,e,i,d))):void(e=e.__(t,i._(d)[lt]))}))}(t))),e}function ve(e=""){return(e[At](se(h))||[])[Be]((t=>{const i=t[At](h);if(i[_]<1)return;const r=(i[1]||"")[Ge](),o=(i[2]||"")[Ge](),d=(i[4]||"")[Ge]();let n=(i[6]||"")[Ge](),s=(i[7]||"")[Ge](),l=(i[9]||"")[Ge]();if(o[_]<1)return;n[_]&&!n.$$(M)&&(n+="px"),s[_]&&!s.$$(M)&&(s+="px");const a=o.$$(K),m=o.$$(P),p=o.$$(G);let c;c=a?vt._({controls:"",title:d,style:{width:n,height:s}},[bt._({type:"video/quicktime"},o)]):m?vt._({controls:"",title:d,style:{width:n,height:s}},[bt._({type:"video/mp4"},o)]):$t._(p?{alt:r,title:d,style:{width:n,height:s}}:{alt:r,title:d,style:{width:n,height:s,float:l[_]?l:null}},o),null!=c&&(e=ue(t,e,$t,c))})),e}function ge(e=""){return(e[At](se(c))||[])[Be]((t=>{const i=t[At](c);if(i[_]<1)return;const r=(i[1]||"")[Ge](),o=(i[2]||"")[Ge](),d=(i[4]||"")[Ge](),n=ae(o),s=(n||"")[Ge]();if(0!=Math.min(r[_],o[_]))if(s[_]){let i=V._();i[ct]([[ut,Tt].$str(".")._({title:d},r)._open(o),"section.more"._(["img.cover"._("https://i.ytimg.com/vi/"+n+"/mqdefault.jpg"),"img.icon"._({onclick:"this.parentElement.nextElementSibling.style.display='block';this.parentElement.style.display='none'"},"https://pardnchiu.github.io/PDMarkdownKit/static/image/icon-play.svg")]),"iframe"._({loading:"lazy",width:"640",src:"https://www.youtube.com/embed/"+s,frameborder:0,allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",style:{display:"none"}})]),e=ue(t,e,w,i.$html)}else{const i=[ut,Tt].$str(".")._({title:d},r)._open(o);e=ue(t,e,ut,i)}})),(e[At](se(o))||[])[Be]((t=>{if(t[At](s))return;const i=t[At](o);if(i[_]<1)return;const r=i[1]||"",d=(i[2]||"")[Ge](),n=i[5]||"",l=ae(d),a=(l||"")[Ge]();if(!(d[_]<1))if(a[_]){let i=V._();i[ct]([ut._(d)._open(d),"section.more"._(["img.cover"._("https://i.ytimg.com/vi/"+l+"/mqdefault.jpg"),"img.icon"._({onclick:"this.parentElement.nextElementSibling.style.display='block';this.parentElement.style.display='none'"},"https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.3.0/static/image/icon-play.svg")]),"iframe"._({loading:"lazy",width:"640",src:"https://www.youtube.com/embed/"+a,frameborder:0,allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",style:{display:"none"}})]),e=ue(t,e,w,i.$html,r,n)}else{const i=ut._(d)._open(d);e=ue(t,e,ut,i,r,n)}})),(e[At](se(r))||[])[Be]((t=>{if(t[At](s))return;const i=t[At](r);if(i[_]<1)return;const o=(i[1]||"")+(i[2]||"")+(i[3]||""),d=(i[4]||"")[Ge](),n=i[8]||"";if(d[_]<1)return;const l=ut._(d)._open("mailto:"+d);e=ue(t,e,ut,l,o,n)})),e}function be(e=""){return(e[At](se(R))||[])[Be]((t=>function(t){let i;const r=t[Ge]()[At](R),o=null!=r[1],d=(r[2]||"")[Ge]();i="label"._(["input@checkbox "._({checked:o?"":null,onclick:"return false;"}),d]),e=ue(t,e,"CHECKBOX",i)}(t))),e}function ye(e=""){return(e[At](se(C))||[])[Be]((t=>function(t){let r;if(t[Ge]().__(new RegExp(Y,i),te)[xt](Y)[Be](((e,t)=>{const i=e[At](C)||[],o=i[_]<1?null:(i[2]||"")[Ge]().$$(/\d+\./)?Q:J,d=i[_]<1?e.__(/^\s*([\-\*\+]|\d+\.)?\s*/g,""):(i[3]||"")[Ge](),n=(e[At](/\s{4}/g)||[])[_];if(0==t&&null==o)return;0==t&&(r=o._());let s=r;if(e.$$(/^\s{0,3}([\-\*\+]|\d+\.)/))s[ct]([ee._(d)]);else if(e.$$(/^\s{4,}([\-\*\+]|\d+\.)/)){s=r[It];for(let e=0;e<n&&(null!=s&&null!=s[he]);e++)e==n-1&&s[he][g]()==ee?s[It]instanceof HTMLElement&&(s[It][he][g]()==Q||s[It][he][g]()==J)?s[It][ct]([ee._(d)]):s[ct]([o._([ee._(d)])]):s=s[It][It]}else{for(s=r[It];null!=s[It];)s=s[It];if(s instanceof HTMLElement);else if(s[ce].$$(/^\{\{(h\d|img|pre)/));else{for(;"LI"!=s[Nt].tagName;)s=s[Nt];s[Nt][ct]([X._()])}s[Nt][m]+=d}})),null==r)return;e=ue(t,e,Et,r)}(t))),e}function Te(e=""){return(e[At](se(S))||[])[Be]((t=>{const i=t[At](S);if(i[_]<1)return;const r=null==i[2][At](A),o=r?"":(i[1]||"")[Ge]()[g](),d=r?i[1]||"":i[2]||"",n=-1!=ie.indexOf(o),s=d.__(A,"")[xt](z);let l;l=r?[pe,Dt].$str(".")._(d[lt]):[_t,Dt].$str(".")._({name:o},[(pe+(n?".language-"+o:""))._({name:o},[$e(s)]),[gt,yt].$str(".")._()]),e=ue(t,e,r?pe:_t,l)})),e}function Oe(e=""){return(e[At](se(k))||[])[Be]((t=>{const i=t[At](k);if(i[_]<1)return;const r=i[2]||"",o=t.__(A,"")[xt](z),d=[_t,Dt].$str(".")._([pe._([$e(o)]),[gt,yt].$str(".")._()]);e=ue(t,e,_t,d,r)})),e}function $e(e){let t=0,i=Q._();return e[Be](((e,r)=>{0==r&&(t=Math.floor((e[At](/^\s*/)||[""])[0][_]/4));const o=new RegExp(`^\\s{0,${4*t}}`);i[ct]([ee._(e.__(o,"")[lt])])})),i}function Ee(e=""){let t,i="";return(e[At](se(x))||[])[Be]((r=>{if(r.$$(F))r=r.__(U,"");else if(r.$$(L))return;!function(e){const r=e[Ge]()[xt](z);t=j._([B._(),W._()]);let o=!0;r[Be](((e,r)=>{const d=e[At](/((\s*)\|((?:.*?\|)*.*)\|)+/);if(d[_]<1)return;const n=(d[3]||"")[Ge](),s=e.$$(/^\s*\|(\s*[\-\:]+\s*\|)+\s*$/),l=n[xt](/\s*\|\s*/);0==r&&(i=d[2]||""),s?o=!1:function(e,i){const r=e?t.firstChild:t[It],o="tr"._();i[Be]((t=>{o[ct]([(e?"th":"td")._(t)])})),r[ct]([o])}(o,l)}))}(r),e=ue(r,e,j,t,i)})),e}function De(e=""){let t;return(e[At](se(I))||[])[Be]((r=>{t=q._();const o=r[At](I),d=o[1]||"",n=o[3]||"";!function(e){function r(e){let t=V._();const i=/^[\u00A0\u0020\u0009]*\>/,o=e.__(i,"");if(i.test(e)){let e=q._();e[ct]([r(o)]),t[ct]([e])}else e.$$(/^[\u00A0\u0020\u0009]*\{\{/)?t[ct](e):t[ct]([Z._(e),X._()]);return t}ye(e[Ge]().__(/^\>[\u00A0\u0020\u0009]?/g,"").__(/\n\>[\u00A0\u0020\u0009]?/g,"\n").__(new RegExp(Y,i),"\n"))[xt](z)[Be]((e=>{t[ct]([r(e)])}))}(r),e=ue(r,e,q,t,d,n)})),e}function ke(e=""){return(e[At](se(N))||[])[Be]((t=>{const i=t[At](N);if(i[_]<1)return;const r=i[1]||"",o=i[3]||"",d=le("HR");de.set(d,"<hr>"),e=e.__(t,r+d+o)})),e}function Ne(e=""){if(String(ne||"")[Ge]()[_]<1)return e;const t=/(\s{1})\\?[\#＃]{1}([\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7a3a-zA-Z0-9_]+)/,r=new RegExp(t,i);let o=e[At](r)||[];for(let i=0,r=o[i];i<o[_];i++,r=o[i]){if(r[At](/^\\/))continue;const i=r[At](t);if(i[_]<1)continue;const o=i[1],d=(i[2]||"")[Ge](),n=le(ut);if(d[_]<1)continue;const s=V._(["_blank"===re?[ut,Ot].$str(".")._(d)._open(ne+d):[ut,Ot].$str(".")._(d)._go(ne+d)]);de.set(n,s[lt]),e=e.__(r,o+n)}return e}function xe(e=""){e=e.__(/^\n*|\n*$/g,"");var t=/(&lt;br&gt;)/g;return t.test(this)?e.__(t,"\n"):e}e(t,"md_to_html",{value:function(){let e=this.toString().__(/[\u00A0\u0020]/g," "),t=[Te,we,ve,ge,fe,_e,ke,Ee,De,be,ye,Oe,Ne,xe];for(let i=0,r=t[i];i<t[_];i++,r=t[i])e=r(e);for(;e.$$(/\{{2}\w*\-*\w{64}\}{2}/);)e[At](/\{{2}\w*\-*\w{64}\}{2}/g)[Be]((t=>{let i=new RegExp(t);e=e.__(i,de.get(t))}));return e}})})(Object.defineProperty,String.prototype);