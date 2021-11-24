var __awaiter=this&&this.__awaiter||function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function r(t){try{s(n.next(t))}catch(t){o(t)}}function c(t){try{s(n["throw"](t))}catch(t){o(t)}}function s(t){t.done?i(t.value):a(t.value).then(r,c)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,r;return r={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return s([t,e])}}function s(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(o=r[0]&2?a["return"]:r[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;if(a=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;a=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(r[0]===6&&i.label<o[1]){i.label=o[1];o=r;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(r);break}if(o[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t];a=0}finally{n=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-e020662f.system.js","./p-9c9eb8d2.system.js","./p-c34c4414.system.js","./p-6cc23c39.system.js"],(function(t){"use strict";var e,i,n,a,o,r,c,s,l,u,h,p;return{setters:[function(t){e=t.r;i=t.c;n=t.h;a=t.H;o=t.g},function(t){r=t.g},function(t){c=t.c;s=t.d;l=t.H},function(t){u=t.c;h=t.d;p=t.g},function(){}],execute:function(){var f="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{overflow:hidden;display:block;background-color:var(--calcite-ui-foreground-1);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);stroke:currentColor;stroke-width:1;fill:currentColor;width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host .toggle:focus .check-svg,:host .toggle:active .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";var b=t("calcite_checkbox",function(){function t(t){var n=this;e(this,t);this.calciteInternalCheckboxBlur=i(this,"calciteInternalCheckboxBlur",7);this.calciteCheckboxChange=i(this,"calciteCheckboxChange",7);this.calciteInternalCheckboxFocus=i(this,"calciteInternalCheckboxFocus",7);this.checked=false;this.disabled=false;this.hovered=false;this.indeterminate=false;this.required=false;this.scale="m";this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";this.indeterminatePath="M13 8v1H3V8z";this.getPath=function(){return n.indeterminate?n.indeterminatePath:n.checked?n.checkedPath:""};this.toggle=function(){if(!n.disabled){n.checked=!n.checked;n.setFocus();n.indeterminate=false;n.calciteCheckboxChange.emit()}};this.keyDownHandler=function(t){if(t.key===" "||t.key==="Enter"){n.toggle();t.preventDefault()}};this.clickHandler=function(){n.toggle()};this.onToggleBlur=function(){n.calciteInternalCheckboxBlur.emit(false)};this.onToggleFocus=function(){n.calciteInternalCheckboxFocus.emit(true)};this.onLabelClick=function(){n.toggle()}}t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.toggleEl)===null||t===void 0?void 0:t.focus();return[2]}))}))};t.prototype.connectedCallback=function(){this.guid=this.el.id||"calcite-checkbox-"+r();u(this);c(this)};t.prototype.disconnectedCallback=function(){h(this);s(this)};t.prototype.render=function(){var t=this;return n(a,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n("div",{"aria-checked":this.checked.toString(),"aria-label":p(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:function(e){return t.toggleEl=e},role:"checkbox",tabIndex:0},n("svg",{class:"check-svg",viewBox:"0 0 16 16"},n("path",{d:this.getPath()})),n("slot",null)),n(l,{component:this}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());b.style=f}}}));