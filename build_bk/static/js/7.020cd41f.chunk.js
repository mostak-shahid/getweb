/*! For license information please see 7.020cd41f.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-pack"]=this["webpackJsonpreact-pack"]||[]).push([[7,14],{118:function(t,e,n){"use strict";var r=n(18),i=(n(119),n(0));e.a=function(t){return Object(i.jsx)("div",{className:"btn-wrapper",children:(null===t||void 0===t?void 0:t.url)?Object(i.jsxs)(r.c,{className:["btn position-relative border-0 rounded-pill d-flex align-items-center justify-content-center",t.className,(null===t||void 0===t?void 0:t.alt)&&"btn-alt",t.url.match("#")&&"link-to-id"].join(" "),to:t.url,onClick:t.url.match("#")&&function(t){t.preventDefault();var e=t.target.getAttribute("data-target"),n=document.querySelector(e).offsetTop;window.scrollTo({left:0,top:n})},"data-target":t.url,children:[Object(i.jsx)("span",{className:"mr-8","data-target":t.url,children:t.title}),Object(i.jsx)("span",{className:"btn-arrow"})]}):Object(i.jsxs)("button",{type:"button",className:["btn position-relative border-0 rounded-pill d-flex align-items-center justify-content-center"].join(" "),children:[Object(i.jsx)("span",{className:"mr-8",children:t.title}),Object(i.jsx)("span",{className:"btn-arrow"})]})})}},119:function(t,e,n){},120:function(t,e,n){"use strict";var r=n(45),i=n(14),a=(n(121),n(0));e.a=function(t){return Object(a.jsxs)("div",{className:["position-fixed top-0 start-0 bottom-0 end-0 bgClrDark d-flex h-100hv justify-content-center align-items-center bgClrDark z-index-999",t.cls].join(" "),children:[Object(a.jsx)(i.a,{src:r.a,alt:""}),Object(a.jsx)("div",{className:"rotating-border"}),Object(a.jsx)("div",{className:"text-center text-white",children:t.text})]})}},121:function(t,e,n){},122:function(t,e,n){"use strict";var r=n(123),i=n(19),a=n(0);e.a=function(t){var e,n,o,c,l,s,d,u,m,v,h,p,j,f,g,b,x,y,_,O,w=t.pageData;return Object(a.jsxs)(r.a,{children:[Object(a.jsx)("title",{children:(null===w||void 0===w||null===(e=w.meta)||void 0===e?void 0:e.rank_math_title)?null===w||void 0===w||null===(n=w.meta)||void 0===n?void 0:n.rank_math_title:null===w||void 0===w?void 0:w.title}),(null===w||void 0===w||null===(o=w.meta)||void 0===o?void 0:o.rank_math_description)&&Object(a.jsx)("meta",{name:"description",content:null===w||void 0===w||null===(c=w.meta)||void 0===c?void 0:c.rank_math_description}),(null===w||void 0===w||null===(l=w.meta)||void 0===l?void 0:l.rank_math_description)&&Object(a.jsx)("meta",{name:"keywords",content:null===(s=w.meta)||void 0===s?void 0:s.rank_math_focus_keyword}),Object(a.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(a.jsx)("meta",{property:"og:type",content:"article"}),Object(a.jsx)("meta",{property:"og:title",content:(null===w||void 0===w||null===(d=w.meta)||void 0===d?void 0:d.rank_math_title)?null===w||void 0===w||null===(u=w.meta)||void 0===u?void 0:u.rank_math_title:null===w||void 0===w?void 0:w.title}),(null===w||void 0===w||null===(m=w.meta)||void 0===m?void 0:m.rank_math_description)&&Object(a.jsx)("meta",{property:"og:description",content:null===w||void 0===w||null===(v=w.meta)||void 0===v?void 0:v.rank_math_description}),(null===w||void 0===w?void 0:w.slug)&&Object(a.jsx)("meta",{property:"og:url",content:[i.SITE_DOMAIN,"blog",null===w||void 0===w?void 0:w.slug].join("/")}),Object(a.jsx)("meta",{property:"og:site_name",content:i.SITE_TITLE}),(null===w||void 0===w||null===(h=w.taxonomy)||void 0===h?void 0:h.post_tag)&&w.taxonomy.post_tag.map((function(t,e){return Object(a.jsx)("meta",{property:"article:tag",content:t.name},e)})),(null===w||void 0===w||null===(p=w.taxonomy)||void 0===p?void 0:p.category)&&w.taxonomy.category.map((function(t,e){return Object(a.jsx)("meta",{property:"article:section",content:t.name},e)})),Object(a.jsx)("meta",{property:"og:updated_time",content:null===w||void 0===w?void 0:w.modified_date}),(null===w||void 0===w?void 0:w.image)&&Object(a.jsx)("meta",{property:"og:image",content:null===w||void 0===w?void 0:w.image}),(null===w||void 0===w?void 0:w.image)&&Object(a.jsx)("meta",{property:"og:image:secure_url",content:null===w||void 0===w?void 0:w.image}),Object(a.jsx)("meta",{property:"og:image:width",content:null===w||void 0===w||null===(j=w.featured_image)||void 0===j?void 0:j.image_attributes[1]}),Object(a.jsx)("meta",{property:"og:image:height",content:null===w||void 0===w||null===(f=w.featured_image)||void 0===f?void 0:f.image_attributes[2]}),Object(a.jsx)("meta",{property:"og:image:alt",content:null===w||void 0===w||null===(g=w.featured_image)||void 0===g?void 0:g.image_alt}),Object(a.jsx)("meta",{property:"article:published_time",content:null===w||void 0===w?void 0:w.date}),Object(a.jsx)("meta",{property:"article:modified_time",content:null===w||void 0===w?void 0:w.modified_date}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(a.jsx)("meta",{name:"twitter:title",content:(null===w||void 0===w||null===(b=w.meta)||void 0===b?void 0:b.rank_math_title)?null===w||void 0===w||null===(x=w.meta)||void 0===x?void 0:x.rank_math_title:null===w||void 0===w?void 0:w.title}),(null===w||void 0===w||null===(y=w.meta)||void 0===y?void 0:y.rank_math_description)&&Object(a.jsx)("meta",{name:"twitter:description",content:null===w||void 0===w||null===(_=w.meta)||void 0===_?void 0:_.rank_math_description}),(null===w||void 0===w?void 0:w.image)&&Object(a.jsx)("meta",{name:"twitter:image",content:null===w||void 0===w?void 0:w.image}),Object(a.jsx)("meta",{name:"twitter:label1",content:"Written by"}),Object(a.jsx)("meta",{name:"twitter:data1",content:null===w||void 0===w||null===(O=w.author)||void 0===O?void 0:O.name}),Object(a.jsx)("meta",{name:"twitter:label2",content:"Time to read"}),Object(a.jsx)("meta",{name:"twitter:data2",content:[null===w||void 0===w?void 0:w.reading_time,"minutes"].join(" ")})]})}},124:function(t,e,n){},126:function(t,e,n){"use strict";var r=n(4),i=n.p+"static/media/go-to-btn.23481f10.svg",a=n(118),o=n(14),c=(n(124),n(0));e.a=function(t){var e=Object(r.e)().pathname.replaceAll("/","_")+"-pageBanner",n=t.tagline,l=t.title,s=t.intro,d=t.bgImg,u=t.btn,m=t.featureImage,v=t.alt,h=t.attributes,p=t.btn2;return Object(c.jsxs)("section",{className:["subPageBanner position-relative bgClrDarkLight",e].join(" "),style:{backgroundImage:"url(".concat(d,")")},children:[Object(c.jsx)("div",{className:"container-lg",children:Object(c.jsx)("div",{className:"bannerContent d-flex align-items-center",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsxs)("div",{className:"bannerInfo col-lg-6",children:[Object(c.jsx)("h6",{className:"banner-tag-line textClrGreen fs-6 fwBold",dangerouslySetInnerHTML:{__html:n}}),Object(c.jsx)("div",{className:"banner-heading fs-48 fw-normal",dangerouslySetInnerHTML:{__html:l}}),Object(c.jsx)("div",{className:"banner-desc",dangerouslySetInnerHTML:{__html:s}}),(null===u||void 0===u?void 0:u.url)&&Object(c.jsx)(a.a,{title:u.title?u.title:"Work with Us",url:u.url})]}),m&&Object(c.jsx)("div",{className:"bannerImage col-lg-6 text-center text-lg-end",children:Object(c.jsx)(o.a,{src:m,alt:v,className:"img-fluid img-banner",width:[h[1],"px"].join(""),height:[h[2],"px"].join("")})})]})})}),(null===p||void 0===p?void 0:p.title)&&(null===p||void 0===p?void 0:p.url)&&Object(c.jsx)("div",{className:"banner-go-to text-center",children:Object(c.jsxs)("a",{href:p.url,children:[Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:p.title}}),Object(c.jsx)(o.a,{src:i,height:"50px",width:"50px"})]})})]})}},142:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var r=n(11),i=n(3),a=n(23),o=n.n(a),c=n(1),l=n(4),s=n(129),d=n(120),u=n(125),m=n(122),v=n(126),h=n(19),p=(n(142),n(0));function j(){j=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof u?e:u,a=Object.create(i.prototype),o=new w(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var c=y(o,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,o),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var d={};function u(){}function m(){}function v(){}var h={};c(h,i,(function(){return this}));var p=Object.getPrototypeOf,f=p&&p(p(k([])));f&&f!==e&&n.call(f,i)&&(h=f);var g=v.prototype=u.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,a,o,c){var l=s(t[i],t,a);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(u).then((function(t){d.value=t,o(d)}),(function(t){return r("throw",t,o,c)}))}c(l.arg)}var i;this._invoke=function(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}}function y(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=v,c(g,"constructor",v),c(v,"constructor",m),m.displayName=c(v,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,o,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new x(l(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(g),c(g,o,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}e.default=function(t){var e,n,a,f,g,b,x,y,_,O,w,k=Object(l.g)(),N=Object(c.useState)(h.BLOG_ID),L=Object(i.a)(N,2),E=L[0],S=L[1],I=Object(c.useState)([]),T=Object(i.a)(I,2),B=T[0],C=T[1],G=Object(c.useState)([]),P=Object(i.a)(G,2),M=P[0],A=P[1],D=Object(c.useState)([]),W=Object(i.a)(D,2),F=W[0],H=W[1],J=Object(c.useState)(!0),U=Object(i.a)(J,2),Y=U[0],q=U[1],z=Object(c.useState)(0),K=Object(i.a)(z,2),Q=K[0],R=K[1],V=Object(c.useState)(1),X=Object(i.a)(V,2),Z=X[0],$=X[1];Object(c.useEffect)((function(){S(h.BLOG_ID)}),[]),Object(c.useEffect)((function(){var t="".concat(h.API_BASE,"data-single/").concat(E),e="".concat(h.API_BASE,"data-taxonomy/category/").concat(k.slug),n=function(){var n=Object(r.a)(j().mark((function n(){return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.all([o.a.get(t),o.a.get(e)]).then(o.a.spread((function(t,e,n){C(t.data),A(e.data)})));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[E,k.slug]),Object(c.useEffect)((function(){0!==B.length&&0!==E&&q(!1)}),[B,E]),Object(c.useEffect)((function(){M.length?H(M.slice(Q,Q+6)):H([])}),[M,Q,6]);for(var tt=Math.ceil(M.length/6),et=[],nt=function(t){it="",it=Z===t?"active":"",et.push(Object(p.jsx)("li",{className:"page-item",onClick:function(){R(6*(t-1)),$(t)},children:Object(p.jsx)("span",{className:["page-link","bg-transparent",it].join(" "),children:t})},t))},rt=1;rt<=tt;rt++){var it;nt(rt)}return Y?Object(p.jsx)(d.a,{cls:"page-loader"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{pageData:B}),!(null===B||void 0===B||null===(e=B.meta)||void 0===e?void 0:e._mosacademy_banner_hide)&&Object(p.jsx)(v.a,{tagline:null===B||void 0===B||null===(n=B.meta)||void 0===n?void 0:n._mosacademy_page_banner_tagline,title:null===B||void 0===B||null===(a=B.meta)||void 0===a?void 0:a._mosacademy_page_banner_title,intro:null===B||void 0===B||null===(f=B.meta)||void 0===f?void 0:f._mosacademy_page_banner_intro,bgImg:null===B||void 0===B||null===(g=B.meta)||void 0===g?void 0:g._mosacademy_page_banner_image,btn:null===B||void 0===B||null===(b=B.meta)||void 0===b?void 0:b._mosacademy_page_banner_button,btn2:null===B||void 0===B||null===(x=B.meta)||void 0===x?void 0:x._mosacademy_page_banner_button_2,featureImage:null===B||void 0===B||null===(y=B.meta)||void 0===y?void 0:y._mosacademy_page_banner_feature_image,alt:null===B||void 0===B||null===(_=B.meta)||void 0===_?void 0:_._mosacademy_page_banner_feature_image_alt,attributes:null===B||void 0===B||null===(O=B.meta)||void 0===O?void 0:O._mosacademy_page_banner_feature_image_attributes}),Object(p.jsxs)("section",{id:"blogWrapper",className:"blogWrapper secPadding",children:[Object(p.jsx)("div",{className:"blog-wrapper isBgBorder",children:Object(p.jsxs)("div",{className:"container-lg position-relative",children:[Object(p.jsx)("div",{className:"position-absolute top-0 start-0 bottom-0 end-0 bg-primary d-flex justify-content-center align-items-center text-white d-none",children:Object(p.jsx)("i",{className:"fad fa-arrows-spin rotate fs-48"})}),Object(p.jsx)("div",{className:"row",children:F.length?F.map((function(t,e){return Object(p.jsx)("div",{className:"col-sm-6 col-lg-4 singleBlogWrapper",children:Object(p.jsx)(s.a,{data:t})},e)})):Object(p.jsx)("div",{className:"textClrGreen text-center",children:"No post found"})})]})}),tt>1&&Object(p.jsx)("div",{className:"blog-pagination-wrapper",children:Object(p.jsx)("div",{className:"pagination-box",children:Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"pagination justify-content-center gap-3",children:[Object(p.jsx)("li",{className:"page-item",onClick:function(){Z>1&&$(Z-1),R(6*(Z-2))},children:Object(p.jsx)("span",{className:"page-link bg-transparent","aria-label":"Previous",children:Object(p.jsx)("span",{"aria-hidden":"true",children:Object(p.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M11.3184 14.94L6.42836 10.05C5.85086 9.4725 5.85086 8.5275 6.42836 7.95L11.3184 3.06",stroke:"#6B6E78",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),et,Object(p.jsx)("li",{className:"page-item",onClick:function(){Z<tt&&$(Z+1),R(6*Z)},children:Object(p.jsx)("span",{className:"page-link bg-transparent","aria-label":"Next",children:Object(p.jsx)("span",{"aria-hidden":"true",children:Object(p.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M6.68164 14.94L11.5716 10.05C12.1491 9.4725 12.1491 8.5275 11.5716 7.95L6.68164 3.06",stroke:"#6B6E78",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]})})})})]}),null===B||void 0===B||null===(w=B.meta)||void 0===w?void 0:w._mosacademy_page_group_details_group.map((function(t,e){return Object(p.jsx)(u.default,{data:t},e)}))]})}}}]);
//# sourceMappingURL=7.020cd41f.chunk.js.map