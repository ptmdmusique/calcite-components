/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,h as i,c as a,H as e,g as n}from"./p-687deef3.js";import{g as o}from"./p-8a63221d.js";import{a as r,f as s}from"./p-52cc870b.js";import{c,d as l,g as d}from"./p-3dae9da3.js";import{c as h,d as m,H as p}from"./p-695eee12.js";import{g as b}from"./p-72563742.js";import{g as u}from"./p-accdb0ce.js";let f=class{constructor(i){t(this,i),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.scale="m"}render(){return i("div",{class:"radio"})}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host .radio{background-color:var(--calcite-ui-foreground-1);border-radius:9999px;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]) .radio{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([hovered][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{height:var(--calcite-radio-size);max-width:var(--calcite-radio-size);min-width:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([hidden]){display:none}";let w=class{constructor(i){t(this,i),this.calciteInternalRadioButtonBlur=a(this,"calciteInternalRadioButtonBlur",7),this.calciteRadioButtonChange=a(this,"calciteRadioButtonChange",7),this.calciteInternalRadioButtonCheckedChange=a(this,"calciteInternalRadioButtonCheckedChange",7),this.calciteInternalRadioButtonFocus=a(this,"calciteInternalRadioButtonFocus",7),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.selectItem=(t,i)=>{t[i].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((t=>t.name===this.name)),this.isDefaultSelectable=()=>{const t=this.queryButtons();return!t.some((t=>t.checked))&&t[0]===this.el},this.check=()=>{this.disabled||(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit(),this.setFocus())},this.clickHandler=()=>{this.check()},this.setContainerEl=t=>{this.containerEl=t},this.handleKeyDown=t=>{const i=b(t.key),{el:a}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(i))return;if(" "===i)return void this.check();let e=i;"rtl"===r(a)&&("ArrowRight"===i&&(e="ArrowLeft"),"ArrowLeft"===i&&(e="ArrowRight"));const n=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((t=>t.name===this.name));let o=0;const s=n.length;switch(n.some(((t,i)=>{if(t.checked)return o=i,!0})),e){case"ArrowLeft":case"ArrowUp":return t.preventDefault(),void this.selectItem(n,u(Math.max(o-1,-1),s));case"ArrowRight":case"ArrowDown":return t.preventDefault(),void this.selectItem(n,u(o+1,s));default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.focused=!0,this.calciteInternalRadioButtonFocus.emit()}}checkedChanged(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit(t)}nameChanged(){this.checkLastRadioButton();const t=this.rootNode.querySelector(`input[name="${this.name}"]:checked`);(null==t?void 0:t.value)||this.uncheckAllRadioButtonsInGroup()}async setFocus(){s(this.containerEl)}onLabelClick(t){if(!this.disabled&&!this.hidden){this.uncheckOtherRadioButtonsInGroup();const i=t.currentTarget,a=i.for?this.rootNode.querySelector(`calcite-radio-button[id="${i.for}"]`):i.querySelector(`calcite-radio-button[name="${this.name}"]`);a&&(a.checked=!0,a.focused=!0),this.calciteRadioButtonChange.emit(),this.setFocus()}}checkLastRadioButton(){const t=this.queryButtons().filter((t=>t.checked));if((null==t?void 0:t.length)>1){const i=t[t.length-1];t.filter((t=>t!==i)).forEach((t=>{t.checked=!1,t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter((t=>t.guid!==this.guid)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}mouseenter(){this.hovered=!0}mouseleave(){this.hovered=!1}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${o()}`,this.name&&this.checkLastRadioButton(),c(this),h(this)}componentDidLoad(){this.focused&&this.setFocus()}disconnectedCallback(){l(this),m(this)}render(){return i(e,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},i("div",{"aria-checked":this.checked.toString(),"aria-label":d(this),class:"container",onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:this.checked||this.isDefaultSelectable()?0:-1},i("calcite-radio",{checked:this.checked,disabled:this.disabled,focused:this.focused,hidden:this.hidden,hovered:this.hovered,scale:this.scale})),i(p,{component:this}))}get el(){return n(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{cursor:pointer;display:block}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host([disabled]){cursor:pointer}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{f as calcite_radio,w as calcite_radio_button}