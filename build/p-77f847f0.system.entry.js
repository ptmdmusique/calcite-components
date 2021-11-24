var __awaiter=this&&this.__awaiter||function(t,e,n,a){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function o(t){try{c(a.next(t))}catch(t){r(t)}}function l(t){try{c(a["throw"](t))}catch(t){r(t)}}function c(t){t.done?n(t.value):i(t.value).then(o,l)}c((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return c([t,e])}}function c(o){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(o[0]===6&&n.label<r[1]){n.label=r[1];r=o;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(o);break}if(r[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];i=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-40b4e596.system.js","./p-db10485b.system.js","./p-6cc23c39.system.js","./p-c34c4414.system.js","./p-9c9eb8d2.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,n,a,i,r,o,l,c,s,p,m,u,f,d,h;return{setters:[function(t){e=t.r;n=t.c;a=t.h;i=t.g;r=t.F},function(t){o=t.c},function(t){l=t.f;c=t.C;s=t.a},function(t){p=t.c;m=t.d},function(t){u=t.c;f=t.d;d=t.a;h=t.H},function(){}],execute:function(){var b="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";var y=t("calcite_option",function(){function t(t){var a=this;e(this,t);this.calciteOptionChange=n(this,"calciteOptionChange",7);this.disabled=false;this.mutationObserver=o("mutation",(function(){a.ensureTextContentDependentProps();a.calciteOptionChange.emit()}))}t.prototype.handlePropChange=function(t,e,n){if(n==="label"||n==="value"){this.ensureTextContentDependentProps()}this.calciteOptionChange.emit()};t.prototype.ensureTextContentDependentProps=function(){var t=this.el.textContent;if(!this.label||this.label===this.internallySetLabel){this.label=t;this.internallySetLabel=t}if(!this.value||this.value===this.internallySetValue){this.value=t;this.internallySetValue=t}};t.prototype.connectedCallback=function(){var t;this.ensureTextContentDependentProps();(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,attributeFilter:["label","value"]})};t.prototype.disconnectedCallback=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()};t.prototype.render=function(){return a("slot",null,this.label)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}},enumerable:false,configurable:true});return t}());y.style=b;var v="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";var w=t("calcite_option_group",function(){function t(t){e(this,t);this.calciteOptionGroupChange=n(this,"calciteOptionGroupChange",7);this.disabled=false}t.prototype.handlePropChange=function(){this.calciteOptionGroupChange.emit()};t.prototype.render=function(){return a(r,null,a("div",null,this.label),a("slot",null))};Object.defineProperty(t,"watchers",{get:function(){return{disabled:["handlePropChange"],label:["handlePropChange"]}},enumerable:false,configurable:true});return t}());w.style=v;var g={icon:"icon",iconContainer:"icon-container",select:"select"};var k="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;position:relative;width:var(--select-width)}:host([scale=s]){height:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing:0 2rem 0 0.5rem;--calcite-select-spacing-rtl:0 0.5rem 0 2rem}:host([scale=s]) .icon-container{padding-left:0.5rem;padding-right:0.5rem}:host([scale=m]){height:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing:0 2.5rem 0 0.75rem;--calcite-select-spacing-rtl:0 0.75rem 0 2.5rem}:host([scale=m]) .icon-container{padding-left:0.75rem;padding-right:0.75rem}:host([scale=l]){height:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing:0 3rem 0 1rem;--calcite-select-spacing-rtl:0 1rem 0 3rem}:host([scale=l]) .icon-container{padding-left:1rem;padding-right:1rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-style:solid;border-right-width:0;background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-border-input);border-radius:0;color:var(--calcite-ui-text-2);cursor:pointer;font-family:inherit;margin:0;width:100%;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-select-font-size);padding:var(--calcite-select-spacing)}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}.select.calcite--rtl{border-width:1px;border-color:var(--calcite-ui-border-input);padding:var(--calcite-select-spacing-rtl)}select:disabled{border-color:var(--calcite-ui-border-input);--bg-opacity:1}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.icon-container{-ms-flex-align:center;align-items:center;background-color:transparent;border-width:0;border-right-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-left-width:0;color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;pointer-events:none;position:absolute;right:0;top:0;bottom:0}.icon-container.calcite--rtl{border-left-width:1px;border-right-width:0;left:0;right:unset}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";function D(t){return t.tagName==="CALCITE-OPTION"}function x(t){return t.tagName==="CALCITE-OPTION-GROUP"}var C=t("calcite_select",function(){function t(t){var a=this;e(this,t);this.calciteSelectChange=n(this,"calciteSelectChange",7);this.disabled=false;this.required=false;this.scale="m";this.value=null;this.width="auto";this.componentToNativeEl=new Map;this.mutationObserver=o("mutation",(function(){return a.populateInternalSelect()}));this.handleInternalSelectChange=function(){var t=a.selectEl.selectedOptions[0];a.selectFromNativeOption(t);requestAnimationFrame((function(){return a.emitChangeEvent()}))};this.populateInternalSelect=function(){var t=Array.from(a.el.children).filter((function(t){return t.tagName==="CALCITE-OPTION"||t.tagName==="CALCITE-OPTION-GROUP"}));a.clearInternalSelect();t.forEach((function(t){var e;return(e=a.selectEl)===null||e===void 0?void 0:e.append(a.toNativeElement(t))}))};this.storeSelectRef=function(t){a.selectEl=t;a.populateInternalSelect();var e=a.selectEl.selectedOptions[0];a.selectFromNativeOption(e)};this.emitChangeEvent=function(){a.calciteSelectChange.emit()}}t.prototype.valueHandler=function(t){var e=this.el.querySelectorAll("calcite-option");e.forEach((function(e){return e.selected=e.value===t}))};t.prototype.selectedOptionHandler=function(t){this.value=t===null||t===void 0?void 0:t.value};t.prototype.connectedCallback=function(){var t;var e=this.el;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(e,{subtree:true,childList:true});p(this);u(this)};t.prototype.disconnectedCallback=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();m(this);f(this)};t.prototype.componentDidLoad=function(){var t,e;d(this,(e=(t=this.selectedOption)===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:"")};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){l(this.selectEl);return[2]}))}))};t.prototype.handleOptionOrGroupChange=function(t){t.stopPropagation();var e=t.target;var n=this.componentToNativeEl.get(e);if(!n){return}this.updateNativeElement(e,n);if(D(e)&&e.selected){this.deselectAllExcept(e)}};t.prototype.onLabelClick=function(){this.setFocus()};t.prototype.updateNativeElement=function(t,e){e.disabled=t.disabled;e.label=t.label;if(D(t)){var n=e;n.selected=t.selected;n.value=t.value;n.innerText=t.label}};t.prototype.clearInternalSelect=function(){this.componentToNativeEl.forEach((function(t){return t.remove()}));this.componentToNativeEl.clear()};t.prototype.selectFromNativeOption=function(t){var e=this;if(!t){return}var n;this.componentToNativeEl.forEach((function(a,i){if(D(i)&&a===t){i.selected=true;n=i;e.deselectAllExcept(i)}}));if(n){requestAnimationFrame((function(){return e.selectedOption=n}))}};t.prototype.toNativeElement=function(t){var e=this;if(D(t)){var n=document.createElement("option");this.updateNativeElement(t,n);this.componentToNativeEl.set(t,n);return n}if(x(t)){var a=document.createElement("optgroup");this.updateNativeElement(t,a);Array.from(t.children).forEach((function(n){var i=e.toNativeElement(n);a.append(i);e.componentToNativeEl.set(t,i)}));this.componentToNativeEl.set(t,a);return a}throw new Error("unsupported element child provided")};t.prototype.deselectAllExcept=function(t){this.el.querySelectorAll("calcite-option").forEach((function(e){if(e===t){return}e.selected=false}))};t.prototype.renderChevron=function(t){var e;return a("div",{class:(e={},e[g.iconContainer]=true,e[c.rtl]=t==="rtl",e)},a("calcite-icon",{class:g.icon,icon:"chevron-down",scale:"s"}))};t.prototype.render=function(){var t;var e=s(this.el);return a(r,null,a("select",{"aria-label":this.label,class:(t={},t[g.select]=true,t[c.rtl]=e==="rtl",t),disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},a("slot",null)),this.renderChevron(e),a(h,{component:this}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}},enumerable:false,configurable:true});return t}());C.style=k}}}));