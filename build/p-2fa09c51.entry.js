/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as a,H as e,g as o}from"./p-687deef3.js";import{f as r,a as n,C as s}from"./p-52cc870b.js";import{g as c}from"./p-72563742.js";import{c as l,d as h,g as d}from"./p-3dae9da3.js";import{c as m,d as p,H as b}from"./p-695eee12.js";import"./p-8a63221d.js";let u=class{constructor(a){t(this,a),this.calciteSwitchChange=i(this,"calciteSwitchChange",7),this.disabled=!1,this.scale="m",this.switched=!1,this.checked=!1,this.keyDownHandler=t=>{const i=c(t.key);this.disabled||" "!==i&&"Enter"!==i||this.toggle()},this.clickHandler=()=>{this.toggle()},this.setSwitchEl=t=>{this.switchEl=t}}disabledWatcher(t){this.tabindex=t?-1:0}switchedWatcher(t){this.checked=t}async setFocus(){r(this.switchEl)}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}connectedCallback(){const t=this.checked||this.switched;t&&(this.switched=this.checked=t),l(this),m(this)}disconnectedCallback(){h(this),p(this)}componentWillLoad(){this.tabindex=this.el.getAttribute("tabindex")||this.disabled?-1:0}render(){const t=n(this.el);return a(e,{onKeyDown:this.keyDownHandler},a("div",{"aria-checked":this.checked.toString(),"aria-label":d(this),class:{container:!0,[s.rtl]:"rtl"===t},onClick:this.clickHandler,ref:this.setSwitchEl,role:"switch",tabindex:this.tabindex},a("div",{class:"track"},a("div",{class:"handle"})),a(b,{component:this})))}get el(){return o(this)}static get watchers(){return{disabled:["disabledWatcher"],switched:["switchedWatcher"]}}};u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{width:1.5rem;height:0.75rem}:host([scale=s]) .handle{width:0.5rem;height:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{width:2rem;height:1rem}:host([scale=m]) .handle{width:0.75rem;height:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{width:3rem;height:1.5rem}:host([scale=l]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([checked]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([checked]) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:focus) .calcite--rtl .handle{right:auto;left:-1px}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{u as calcite_switch}