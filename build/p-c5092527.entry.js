/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as a,g as e}from"./p-687deef3.js";import{a as n,C as o}from"./p-52cc870b.js";import{g as s}from"./p-8a63221d.js";let r=class{constructor(a){t(this,a),this.calciteTileSelectChange=i(this,"calciteTileSelectChange",7),this.checked=!1,this.disabled=!1,this.hidden=!1,this.inputEnabled=!1,this.inputAlignment="start",this.type="radio",this.width="auto",this.guid=`calcite-tile-select-${s()}`,this.focused=!1}checkedChanged(t){this.input.checked=t}nameChanged(t){this.input.name=t}async setFocus(){this.input.setFocus()}checkboxChangeHandler(t){const i=t.target;i===this.input&&(this.checked=i.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}checkboxFocusBlurHandler(t){t.target===this.input&&(this.focused=t.detail),t.stopPropagation()}radioButtonChangeHandler(t){const i=t.target;i===this.input&&(this.checked=i.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}radioButtonCheckedChangeHandler(t){const i=t.target;i===this.input&&(this.checked=i.checked),t.stopPropagation()}radioButtonFocusBlurHandler(t){const i=t.target;i===this.input&&(this.focused=i.focused),t.stopPropagation()}click(t){["calcite-tile","calcite-tile-select"].includes(t.target.localName)&&this.input.click()}mouseenter(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!0),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!0)}mouseleave(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!1),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!1)}connectedCallback(){this.renderInput()}disconnectedCallback(){this.input.parentNode.removeChild(this.input)}renderInput(){this.input=document.createElement("radio"===this.type?"calcite-radio-button":"calcite-checkbox"),this.input.checked=this.checked,this.input.disabled=this.disabled,this.input.hidden=this.hidden,this.input.id=this.guid,this.input.label=this.heading||this.name||"",this.name&&(this.input.name=this.name),this.value&&(this.input.value=null!=this.value?this.value.toString():""),this.el.insertAdjacentElement("beforeend",this.input)}render(){const t=n(this.el);return a("div",{class:{focused:this.focused,root:!0,[o.rtl]:"rtl"===t}},a("calcite-tile",{active:this.checked,description:this.description,embed:!0,heading:this.heading,icon:this.icon}),a("slot",null))}get el(){return e(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};r.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.root{background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;height:100%;max-width:300px;padding:0.75rem;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;vertical-align:top;z-index:10}:host{display:block}:host(:hover) .root{z-index:20;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-1);box-shadow:0 0 0 1px var(--calcite-ui-border-1)}:host([checked]) .root{z-index:30;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}.root.focused{z-index:30}:host(:not([input-enabled]):hover) .root{-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host(:not([input-enabled])) .root.focused{-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand)}:host([width=full]) .root{max-width:none;display:-ms-flexbox;display:flex}:host([width=full]) calcite-tile{-ms-flex:1 1 auto;flex:1 1 auto}:host([input-alignment=start][width=full]) calcite-tile{-ms-flex-order:1;order:1;-webkit-margin-start:0.75rem;margin-inline-start:0.75rem}:host(:not([input-enabled])) ::slotted(calcite-checkbox),:host(:not([input-enabled])) ::slotted(calcite-radio-button){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([heading]:not([icon]):not([description])) .root{-ms-flex-align:center;align-items:center}:host([width=auto][input-enabled][input-alignment=start][icon][heading][description]) .root,:host([width=auto][input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) .root{display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([width=auto][input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-checkbox),:host([width=auto][input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-radio-button),:host([width=auto][input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-checkbox),:host([width=auto][input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-radio-button){-ms-flex-order:0;order:0}:host([width=auto][input-enabled][input-alignment=start][icon][heading][description]) calcite-tile,:host([width=auto][input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) calcite-tile{-ms-flex-order:1;order:1}:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;left:0.75rem}:host([input-enabled][input-alignment=start][icon][heading]:not([description])) .calcite--rtl ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading]:not([description])) .calcite--rtl ::slotted(calcite-radio-button){right:0.75rem;left:unset}:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;right:0.75rem}:host([input-enabled][input-alignment=end][icon][heading]) .calcite--rtl ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][icon][heading]) .calcite--rtl ::slotted(calcite-radio-button){right:unset;left:0.75rem}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) .root{display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-radio-button){justify-self:flex-end}:host([hidden]){display:none}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}";let c=class{constructor(i){t(this,i),this.layout="horizontal"}render(){return a("slot",null)}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host ::slotted(calcite-tile-select){margin-right:1px;margin-bottom:1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column}";export{r as calcite_tile_select,c as calcite_tile_select_group}