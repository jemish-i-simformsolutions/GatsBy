(self.webpackChunklearn_at_most_capacity=self.webpackChunklearn_at_most_capacity||[]).push([[976],{3723:function(e,t,r){"use strict";r.d(t,{G:function(){return I},L:function(){return g},M:function(){return _},P:function(){return w},_:function(){return i},a:function(){return s},b:function(){return c},c:function(){return u},g:function(){return p},h:function(){return l}});var n=r(7294),o=(r(2369),r(5697)),a=r.n(o);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const u=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,r,n,o){return void 0===o&&(o={}),s({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},o,{opacity:t?1:0})})}function p(e,t,r,n,o,a,i,l){const u={};a&&(u.backgroundColor=a,"fixed"===r?(u.width=n,u.height=o,u.backgroundColor=a,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),i&&(u.objectFit=i),l&&(u.objectPosition=l);const c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c}const d=["children"],f=function(e){let{layout:t,width:r,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=i(e,d);return n.createElement(n.Fragment,null,n.createElement(f,s({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:r,loading:o,alt:a="",shouldLoad:l}=e,u=i(e,m);return n.createElement("img",s({},u,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:a}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:o=!0}=e,a=i(e,y);const l=a.sizes||(null==t?void 0:t.sizes),u=n.createElement(h,s({},a,t,{sizes:l,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:a}=e;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,sizes:l})})),u):u};var x;h.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,r=i(e,v);return t?n.createElement(b,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},r))};w.displayName="Placeholder",w.propTypes={fallback:o.string,sources:null==(x=b.propTypes)?void 0:x.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const _=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};_.displayName="MainImage",_.propTypes=b.propTypes;const O=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),s=3;s<n;s++)o[s-3]=arguments[s];return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat(o)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:a().object.isRequired,alt:O},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set;let j,M;const k=function(e){let{as:t="div",image:o,style:a,backgroundColor:u,className:c,class:p,onStartLoad:d,onLoad:f,onError:g}=e,m=i(e,S);const{width:y,height:h,layout:b}=o,x=function(e,t,r){const n={};let o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}(y,h,b),{style:v,className:w}=x,_=i(x,C),O=(0,n.useRef)(),E=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(c=p);const k=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,h);return(0,n.useEffect)((()=>{j||(j=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==d||d({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(E);if(M&&L.has(E))return;let t,n;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:i}=e;O.current&&(O.current.innerHTML=r(s({isLoading:!0,isLoaded:L.has(E),image:o},m)),L.has(E)||(t=requestAnimationFrame((()=>{O.current&&(n=i(O.current,E,L,a,d,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{L.has(E)&&M&&(O.current.innerHTML=M(s({isLoading:L.has(E),isLoaded:L.has(E),image:o},m)),null==d||d({wasCached:!0}),null==f||f({wasCached:!0}))}),[o]),(0,n.createElement)(t,s({},_,{style:s({},v,a,{backgroundColor:u}),className:w+(c?" "+c:""),ref:O,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(k,e):null}));I.propTypes=E,I.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:a().string.isRequired,alt:O,width:T,height:T,sizes:a().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(D=I,function(e){let{src:t,__imageData:r,__error:o}=e,a=i(e,P);return o&&console.warn(o),r?n.createElement(D,s({image:r},a)):(console.warn("Image not loaded",t),null)});var D;q.displayName="StaticImage",q.propTypes=R},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,n=!1;for(let o=0;o<e.length;o++){const a=e[o];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,n=r,r=!0,o++):r&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,o-1)+"-"+e.slice(o-1),n=r,r=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,n=r,r=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},1955:function(e,t,r){const n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),a=r(8416),s=r(215);const i=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const c=r(7294),{mdx:p}=r(4983),{useMDXScope:d}=r(2174);e.exports=function(e){let{scope:t,children:r}=e,a=s(e,i);const l=d(t),f=c.useMemo((()=>{if(!r)return null;const e=u({React:c,mdx:p},l),t=Object.keys(e),a=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return c.createElement(f,u({},a))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,s){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),s=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=dd833c054ac44fc065c1430e4e13dd9714f600e2-8b1ae83977a9dc7302a9.js.map