var __awaiter=this&&this.__awaiter||function(t,n,i,e){function a(t){return t instanceof i?t:new i((function(n){n(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{l(e.next(t))}catch(t){r(t)}}function s(t){try{l(e["throw"](t))}catch(t){r(t)}}function l(t){t.done?i(t.value):a(t.value).then(o,s)}l((e=e.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,a,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return l([t,n])}}function l(o){if(e)throw new TypeError("Generator is already executing.");while(i)try{if(e=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;a=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=n.call(t,i)}catch(t){o=[6,t];a=0}finally{e=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-6cc23c39.system.js","./p-e020662f.system.js"],(function(t){"use strict";var n,i,e,a,r,o,s;return{setters:[function(t){n=t.r;i=t.h;e=t.H;a=t.g},function(t){r=t.a;o=t.C;s=t.f},function(){}],execute:function(){var l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host a,:host span{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0;border-style:none;font-family:inherit;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-icon{width:1em;height:1em;min-width:unset;min-height:unset}.calcite-link--icon{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;vertical-align:text-top;margin-top:0.125rem}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-link--icon.icon-start{margin-right:0.5rem}.calcite--rtl .calcite-link--icon.icon-start{margin-right:0;margin-left:0.5rem}:host .calcite-link--icon.icon-end{margin-left:0.5rem}.calcite--rtl .calcite-link--icon.icon-end{margin-left:0;margin-right:0.5rem}:host span,:host a{display:inline;padding:0;border-style:none;background-color:transparent;position:relative;color:var(--calcite-ui-text-link);line-height:inherit;white-space:initial;background-image:-webkit-gradient(linear, left top, left bottom, from(currentColor), to(currentColor)), -webkit-gradient(linear, left top, left bottom, from(var(--calcite-link-blue-underline)), to(var(--calcite-link-blue-underline)));background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position:0% 100%, 100% 100%;background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px;-webkit-transition:all 0.15s ease-in-out, background-size 0.3s ease-in-out;transition:all 0.15s ease-in-out, background-size 0.3s ease-in-out}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}span.calcite--rtl,a.calcite--rtl{background-position:100% 100%, 100% 100%}";var c=t("calcite_link",function(){function t(t){var i=this;n(this,t);this.disabled=false;this.childElType="span";this.storeTagRef=function(t){i.childEl=t}}t.prototype.hrefHandler=function(t){this.childElType=t?"a":"span"};t.prototype.connectedCallback=function(){this.childElType=this.href?"a":"span"};t.prototype.render=function(){var t;var n=r(this.el);var a=i("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"});var s=i("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"});var l=this.childElType;var c=this.childElType==="span"?"link":null;var u=this.disabled?-1:this.childElType==="span"?0:null;return i(e,{role:"presentation"},i(l,{class:(t={},t[o.rtl]=n==="rtl",t),dir:n,href:l==="a"&&this.href,ref:this.storeTagRef,rel:l==="a"&&this.rel,role:c,tabIndex:u,target:l==="a"&&this.target},this.iconStart?a:null,i("slot",null),this.iconEnd?s:null))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){s(this.childEl);return[2]}))}))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{href:["hrefHandler"]}},enumerable:false,configurable:true});return t}());c.style=l}}}));