(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[516],{516:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var n=t(784),o=t(378),l=t.n(o);const s=[];function u(e,r,t,n=0,o=!1){for(const e of r)if(l()(t,e.args)){if(o)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const s={args:t,promise:e(...t).then((e=>s.response=null==e||e)).catch((e=>s.error=null!=e?e:"unknown error")).then((()=>{n>0&&setTimeout((()=>{const e=r.indexOf(s);-1!==e&&r.splice(e,1)}),n)}))};if(r.push(s),!o)throw s.promise}function i(e,...r){if(void 0===r||0===r.length)e.splice(0,e.length);else{const t=e.find((e=>l()(r,e.args)));if(t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}}function a(e,...r){return u(e,s,r,a.lifespan)}a.lifespan=0,a.clear=(...e)=>i(s,...e),a.preload=(e,...r)=>{u(e,s,r,a.lifespan,!0)},a.peek=(...e)=>{var r;return null==(r=s.find((r=>l()(e,r.args))))?void 0:r.response};const c=()=>n.createElement("span",null,"Loading..."),f=function(e,r=0){const t=[];return{read:(...n)=>u(e,t,n,r),preload:(...n)=>{u(e,t,n,r,!0)},clear:(...e)=>i(t,...e),peek:(...e)=>{var r;return null==(r=t.find((r=>l()(e,r.args))))?void 0:r.response}}}((async e=>{const r=await fetch(`/api/hello.json?name=${e}`);return await r.json()}));function p({children:e}){const{greeting:r}=f.read(e);return n.createElement("div",null,r)}function g(){const[e,r]=(0,n.useState)("World"),t=(0,n.useCallback)((e=>r(e.target.value)));return n.createElement("div",null,n.createElement("div",null,n.createElement("input",{value:e,onChange:t})),n.createElement(n.Suspense,{fallback:n.createElement(c,null)},n.createElement(p,null,e)))}},378:e=>{"use strict";e.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;var n,o,l;if(Array.isArray(r)){if((n=r.length)!=t.length)return!1;for(o=n;0!=o--;)if(!e(r[o],t[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((n=(l=Object.keys(r)).length)!==Object.keys(t).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,l[o]))return!1;for(o=n;0!=o--;){var s=l[o];if(!e(r[s],t[s]))return!1}return!0}return r!=r&&t!=t}}}]);