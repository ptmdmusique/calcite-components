var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{f(r.next(t))}catch(t){a(t)}}function u(t){try{f(r["throw"](t))}catch(t){a(t)}}function f(t){t.done?n(t.value):i(t.value).then(o,u)}f((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return f([t,e])}}function f(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-4035444d.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.a},function(t){n=t.a}],execute:function(){t({a:c,b:f,c:y,d:s,e:w,f:h,g:o,h:g,i:u,l:p,n:v,p:d,s:l});function r(t){if(t===void 0){t=""}if(n.indexOf(t)>-1){return t}else{var e=t.split("-")[0];return n.indexOf(e)>-1?e:"en"}}var i={};var a={};function o(t){return __awaiter(this,void 0,void 0,(function(){var n,u;return __generator(this,(function(f){switch(f.label){case 0:n=r(t);if(i[n]){return[2,i[n]]}if(!a[n]){a[n]=fetch(e("./assets/calcite-date-picker/nls/"+n+".json")).then((function(t){return t.json()})).catch((function(){console.error('Translations for "'+n+'" not found or invalid, falling back to english');return o("en")}))}return[4,a[n]];case 1:u=f.sent();i[n]=u;return[2,u]}}))}))}function u(t,e,n){var r=t.getTime();var i=!(e instanceof Date)||r>=e.getTime();var a=!(n instanceof Date)||r<=n.getTime();return i&&a}function f(t,e,n){if(!(t instanceof Date)){return null}var r=t.getTime();var i=e instanceof Date&&r<e.getTime();var a=n instanceof Date&&r>n.getTime();if(i){return e}if(a){return n}return t}function c(t){if(t instanceof Date){return t}if(!t||typeof t!=="string"){return null}var e=t.split(/[: T-]/).map(parseFloat);var n=new Date(e[0],(e[1]||1)-1,e[2]||1);n.setFullYear(e[0]);if(isNaN(n.getTime())){throw new Error('Invalid ISO 8601 date: "'+t+'"')}return n}function s(t){if(typeof t==="string"){return t}if(t instanceof Date){return new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().split("T")[0]}return""}function l(t,e){return t instanceof Date&&e instanceof Date&&t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function h(t){var e=t.getMonth();var n=new Date(t);n.setMonth(e-1);if(e===n.getMonth()){return new Date(t.getFullYear(),e,0)}return n}function v(t){var e=t.getMonth();var n=new Date(t);n.setMonth(e+1);if((e+2)%7===n.getMonth()%7){return new Date(t.getFullYear(),e+2,0)}return n}function p(t,e){return String(t).split("").map((function(t){return e.numerals[t]})).join("")}function g(t,e){var n="0123456789";return parseInt(t.split("").map((function(t){return n[e.numerals.indexOf(t)]})).filter((function(t){return t})).join(""))}function d(t,e){var n=e.separator,r=e.unitOrder;var i=w(r);var a=m(t).split(n);return{day:parseInt(a[i.indexOf("d")]),month:parseInt(a[i.indexOf("m")])-1,year:parseInt(a[i.indexOf("y")])}}function m(t){if(t===void 0){t=""}return t.replace(/[\u0660-\u0669]/g,(function(t){return t.charCodeAt(0)-1632})).replace(/[\u06f0-\u06f9]/g,(function(t){return t.charCodeAt(0)-1776}))}function w(t){var e=["d","m","y"];var n=t.toLowerCase();return e.sort((function(t,e){return n.indexOf(t)-n.indexOf(e)}))}function y(t,e){var n=t.getTime();var r=e.getTime();return(n-r)/(1e3*3600*24)}var b=t("H",2);var D=t("T",{nextMonth:"Next month",prevMonth:"Previous month"})}}}));