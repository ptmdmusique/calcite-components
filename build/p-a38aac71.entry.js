/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as e,h as i,H as n,g as o}from"./p-687deef3.js";import{T as r,s as a,d as s,a as l,C as c}from"./p-52cc870b.js";import{g as h,n as u}from"./p-72563742.js";import{c as d,d as m,g as p}from"./p-3dae9da3.js";import{c as b,d as f,H as g}from"./p-695eee12.js";import{d as x,g as w,l as v}from"./p-f07d3627.js";import{i as y,p as k,s as z}from"./p-b2ab0485.js";import{d as D}from"./p-2d09cc25.js";import"./p-8a63221d.js";const j={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"};let I=class{constructor(i){t(this,i),this.calciteInputFocus=e(this,"calciteInputFocus",7),this.calciteInputBlur=e(this,"calciteInputBlur",7),this.calciteInputInput=e(this,"calciteInputInput",7),this.calciteInputChange=e(this,"calciteInputChange",7),this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.groupSeparator=!1,this.hidden=!1,this.intlLoading=r.loading,this.iconFlipRtl=!1,this.loading=!1,this.locale=document.documentElement.lang||"en",this.localeFormat=!1,this.numberButtonType="vertical",this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.editingEnabled=!1,this.type="text",this.childElType="input",this.keyDownHandler=t=>{"ArrowUp"===t.key&&t.preventDefault(),this.readOnly||this.disabled||this.isClearable&&"Escape"===h(t.key)&&(this.clearInputValue(t),t.preventDefault())},this.clearInputValue=t=>{this.setValue(null,t,!0)},this.inputBlurHandler=()=>{"number"===this.type&&this.setLocalizedValue(this.value),this.calciteInputBlur.emit({element:this.childEl,value:this.value}),this.preFocusValue!==this.value&&this.calciteInputChange.emit()},this.inputFocusHandler=t=>{t.target!==this.slottedActionEl&&this.setFocus(),this.calciteInputFocus.emit({element:this.childEl,value:this.value}),this.preFocusValue=this.value},this.inputInputHandler=t=>{this.disabled||this.readOnly||this.setValue(t.target.value,t)},this.inputKeyDownHandler=t=>{this.disabled||this.readOnly||"Enter"===t.key&&this.calciteInputChange.emit()},this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly)return;const e=t.target.value,i=x(e,this.locale);"insertFromPaste"===t.inputType?(y(i)||t.preventDefault(),this.setValue(k(i),t),this.childNumberEl.value=this.localizedValue):this.setValue(x(e,this.locale),t)},this.inputNumberKeyDownHandler=t=>{if("number"!==this.type||this.disabled||this.readOnly)return;if("ArrowUp"===t.key)return void this.nudgeNumberValue("up",t);if("ArrowDown"===t.key)return void this.nudgeNumberValue("down",t);const e=[...u,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab","-"];if(t.altKey||t.ctrlKey||t.metaKey)return;const i=t.shiftKey&&"Tab"===t.key;if(e.includes(t.key)&&(!t.shiftKey||i))return void("Enter"===t.key&&this.calciteInputChange.emit());const n=w(this.locale);if(t.key===n){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(n))return}t.preventDefault()},this.nudgeNumberValue=(t,e)=>{if(e instanceof KeyboardEvent&&e.repeat||"number"!==this.type)return;const i=this.maxString?parseFloat(this.maxString):null,n=this.minString?parseFloat(this.minString):null;this.incrementOrDecrementNumberValue(t,i,n,e);let o=0;this.nudgeNumberValueIntervalId=setInterval((()=>{0!==o&&this.incrementOrDecrementNumberValue(t,i,n,e),o++}),100)},this.numberButtonMouseUpAndMouseOutHandler=()=>{clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonMouseDownHandler=t=>{t.preventDefault(),this.nudgeNumberValue(t.target.dataset.adjustment,t)},this.setChildElRef=t=>{this.childEl=t},this.setChildNumberElRef=t=>{this.childNumberEl=t},this.setLocalizedValue=t=>{this.localizedValue=v(t,this.locale,this.groupSeparator)},this.setValue=(t,e,i=!1)=>{const n=this.value;if(this.value="number"===this.type?z(t):t,"number"===this.type&&this.setLocalizedValue(this.value),e){if("number"===this.type&&(null==t?void 0:t.endsWith(".")))return;this.calciteInputInput.emit({element:this.childEl,nativeEvent:e,value:t}).defaultPrevented?(this.value=n,this.setLocalizedValue(n)):i&&this.calciteInputChange.emit()}},this.inputKeyUpHandler=()=>{clearInterval(this.nudgeNumberValueIntervalId)}}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=(null===(t=this.max)||void 0===t?void 0:t.toString())||null}minWatcher(){var t;this.minString=(null===(t=this.min)||void 0===t?void 0:t.toString())||null}valueWatcher(t){"number"===this.type&&this.localizedValue!==v(t,this.locale)?this.setLocalizedValue(t):this.childEl&&this.childEl.value!==t&&(this.childEl.value=t)}updateRequestedIcon(){this.requestedIcon=a(j,this.icon,this.type)}get isClearable(){var t;return!this.isTextarea&&(this.clearable||"search"===this.type)&&(null===(t=this.value)||void 0===t?void 0:t.length)>0}get isTextarea(){return"textarea"===this.childElType}connectedCallback(){var t;this.scale=s(this.el,"scale",this.scale),this.status=s(this.el,"status",this.status),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.editingEnabled=null===(t=this.inlineEditableEl)||void 0===t?void 0:t.editingEnabled,"number"===this.type&&this.value&&(y(this.value)?this.localizedValue=v(this.value,this.locale,this.groupSeparator):this.value=void 0),d(this),b(this)}disconnectedCallback(){m(this),f(this)}componentWillLoad(){var t,e;this.childElType="textarea"===this.type?"textarea":"input",this.maxString=null===(t=this.max)||void 0===t?void 0:t.toString(),this.minString=null===(e=this.min)||void 0===e?void 0:e.toString(),this.requestedIcon=a(j,this.icon,this.type)}componentDidLoad(){this.slottedActionEl=this.el.querySelector("[slot=action]"),this.setDisabledAction()}componentShouldUpdate(t,e,i){return!("number"===this.type&&"value"===i&&t&&!y(t)&&(this.value=e,1))}async setFocus(){var t,e;"number"===this.type?null===(t=this.childNumberEl)||void 0===t||t.focus():null===(e=this.childEl)||void 0===e||e.focus()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,e,i,n){const{value:o}=this,r="any"===this.step?1:Math.abs(this.step||1),a=o&&""!==o?parseFloat(o):0,s=a+r*("up"===t?1:-1),l="number"==typeof i&&!isNaN(i)&&s<i||"number"==typeof e&&!isNaN(e)&&s>e?a:s,c=D(a),h=D(r);this.setValue(l.toFixed(Math.max(c,h)),n,!0)}onFormReset(){this.setValue(this.defaultValue)}syncHiddenFormInput(t){var e,i,n,o;"number"===this.type?(t.type="number",t.min=null!==(i=null===(e=this.min)||void 0===e?void 0:e.toString(10))&&void 0!==i?i:"",t.max=null!==(o=null===(n=this.max)||void 0===n?void 0:n.toString(10))&&void 0!==o?o:""):"text"===this.type?(t.type="text",null!=this.minLength&&(t.minLength=this.minLength),null!=this.maxLength&&(t.maxLength=this.maxLength)):"password"===this.type&&(t.type="password")}setDisabledAction(){if(!this.slottedActionEl)return;const t=this.slottedActionEl;this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")}render(){const t=l(this.el),e=i("div",{class:"loader"},i("calcite-progress",{label:this.intlLoading,type:"indeterminate"})),o=i("button",{class:"clear-button",disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:this.disabled?-1:0,type:"button"},i("calcite-icon",{icon:"x",scale:"s"})),r=i("calcite-icon",{class:"icon",dir:t,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"}),a="horizontal"===this.numberButtonType,s=i("button",{class:{"number-button-item":!0,"number-button-item--horizontal":a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onMouseDown:this.numberButtonMouseDownHandler,onMouseOut:this.numberButtonMouseUpAndMouseOutHandler,onMouseUp:this.numberButtonMouseUpAndMouseOutHandler,tabIndex:-1,type:"button"},i("calcite-icon",{icon:"chevron-up",scale:"s"})),h=i("button",{class:{"number-button-item":!0,"number-button-item--horizontal":a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onMouseDown:this.numberButtonMouseDownHandler,onMouseOut:this.numberButtonMouseUpAndMouseOutHandler,onMouseUp:this.numberButtonMouseUpAndMouseOutHandler,tabIndex:-1,type:"button"},i("calcite-icon",{icon:"chevron-down",scale:"s"})),u=i("div",{class:"number-button-wrapper"},s,h),d=i("div",{class:"prefix"},this.prefixText),m=i("div",{class:"suffix"},this.suffixText),b="number"===this.type?i("input",{"aria-label":p(this),autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,tabIndex:this.disabled?-1:0,type:"text",value:this.localizedValue}):null,f="number"!==this.type?[i(this.childElType,{"aria-label":p(this),autofocus:!!this.autofocus||null,class:{"editing-enabled":this.editingEnabled,"inline-child":!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?i("div",{class:"resize-icon-wrapper"},i("calcite-icon",{icon:"chevron-down",scale:"s"})):null]:null;return i(n,{onClick:this.inputFocusHandler,onKeyDown:this.keyDownHandler},i("div",{class:{wrapper:!0,[c.rtl]:"rtl"===t},dir:t},"number"===this.type&&"horizontal"===this.numberButtonType?h:null,this.prefixText?d:null,i("div",{class:"element-wrapper"},b,f,this.isClearable?o:null,this.requestedIcon?r:null,this.loading?e:null),i("div",{class:"action-wrapper"},i("slot",{name:"action"})),"number"===this.type&&"vertical"===this.numberButtonType?u:null,this.suffixText?m:null,"number"===this.type&&"horizontal"===this.numberButtonType?s:null,i(g,{component:this})))}get el(){return o(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}}};I.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{font-size:var(--calcite-font-size--2);line-height:1rem;padding:0.5rem;height:1.5rem}:host([scale=s]) textarea{height:1.5rem;min-height:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{height:1.5rem}:host([scale=s]) input[type=file]{height:1.5rem}:host([scale=s]) .clear-button{min-height:1.5rem;min-width:1.5rem}:host([scale=s]) textarea{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;height:auto}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{font-size:var(--calcite-font-size--1);line-height:1rem;padding:0.75rem;height:2rem}:host([scale=m]) textarea{min-height:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{height:2rem}:host([scale=m]) input[type=file]{height:2rem}:host([scale=m]) .clear-button{min-height:2rem;min-width:2rem}:host([scale=m]) textarea{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;height:auto}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding:1rem;height:2.75rem}:host([scale=l]) textarea{min-height:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{height:2.75rem}:host([scale=l]) input[type=file]{height:2.75rem}:host([scale=l]) .clear-button{min-height:2.75rem;min-width:2.75rem}:host([scale=l]) textarea{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;height:auto}:host([disabled]){pointer-events:none}:host([disabled]) .wrapper{pointer-events:none;--text-opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) button,:host([disabled]) textarea,:host([disabled]) input{pointer-events:none}:host([disabled]) textarea{resize:none}:host textarea,:host input{-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-appearance:none;width:100%;border-radius:0;position:relative;max-height:100%;max-width:100%;margin:0;font-weight:var(--calcite-font-weight-normal);font-family:inherit;-ms-flex:1 1 0%;flex:1 1 0%;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-1);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{color:var(--calcite-ui-text-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input)}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{left:0.5rem}:host([scale=s]) .calcite--rtl .icon{left:unset;right:0.5rem}:host([scale=m]) .icon{left:0.75rem}:host([scale=m]) .calcite--rtl .icon{left:unset;right:0.75rem}:host([scale=l]) .icon{left:1rem}:host([scale=l]) .calcite--rtl .icon{left:unset;right:1rem}:host([icon][scale=s]) input{padding-left:2rem}:host([icon][scale=s]) .calcite--rtl input{padding-right:2rem;padding-left:0.5rem}:host([icon][scale=m]) input{padding-left:2.5rem}:host([icon][scale=m]) .calcite--rtl input{padding-right:2.5rem;padding-left:0.5rem}:host([icon][scale=l]) input{padding-left:3rem}:host([icon][scale=l]) .calcite--rtl input{padding-right:3rem;padding-left:0.5rem}.element-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%;position:relative;-ms-flex-order:3;order:3}.icon{display:block;position:absolute;pointer-events:none;z-index:10;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;width:0;height:0}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-ms-flex-order:4;order:4;margin:0}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.calcite--rtl .clear-button{border-left-color:var(--calcite-ui-border-input);border-width:1px;border-right-width:0}.loader{top:1px;left:1px;right:1px;display:block;pointer-events:none;position:absolute}.action-wrapper{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.prefix,.suffix{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:var(--calcite-font-weight-medium);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1;word-wrap:break-word;overflow-wrap:break-word}.prefix{-ms-flex-order:2;order:2;border-right-width:0}.suffix{-ms-flex-order:5;order:5;border-left-width:0}.calcite--rtl .prefix{border-right-width:1px;border-left-width:0}.calcite--rtl .suffix{border-left-width:1px;border-right-width:0}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:left}:host([alignment=start]) .calcite--rtl textarea,:host([alignment=start]) .calcite--rtl input{text-align:right}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:right}:host([alignment=end]) .calcite--rtl textarea,:host([alignment=end]) .calcite--rtl input{text-align:left}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.number-button-wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:none;-ms-flex-order:6;order:6;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([number-button-type=vertical]) .wrapper{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{-ms-flex-order:2;order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:stretch;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{-ms-flex-order:5;order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}.calcite--rtl .number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-left-width:0;border-color:var(--calcite-ui-border-input)}.calcite--rtl .number-button-item.number-button-item--horizontal[data-adjustment=up]{border-width:1px;border-right-width:0;border-color:var(--calcite-ui-border-input)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down],:host([number-button-type=vertical]) .calcite--rtl .number-button-item[data-adjustment=down]{border-top-width:0}.number-button-item{max-height:50%;min-height:50%;pointer-events:initial;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;padding-top:0;padding-bottom:0;padding-left:0.5rem;padding-right:0.5rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;margin:0}.number-button-item calcite-icon{pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}:host([number-button-type=vertical]) .calcite--rtl .number-button-item{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;position:relative}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.resize-icon-wrapper{display:none}}.resize-icon-wrapper{bottom:2px;right:2px;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:10;pointer-events:none;width:0.75rem;height:0.75rem}.resize-icon-wrapper calcite-icon{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.calcite--rtl textarea::-webkit-resizer{right:unset;left:0}.calcite--rtl .resize-icon-wrapper{left:2px;right:unset}.calcite--rtl .resize-icon-wrapper calcite-icon{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{background-color:var(--calcite-ui-foreground-1);cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);text-align:center}:host([type=file][scale=s]) input{padding-top:1px;padding-bottom:1px;padding-left:0.5rem;padding-right:0.5rem}:host([type=file][scale=m]) input{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem}:host([type=file][scale=l]) input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}:host(.no-bottom-border) input{border-bottom-width:0}:host(.border-t-color-1) input{border-top-color:var(--calcite-ui-border-1)}:host .inline-child{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;background-color:transparent}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:-ms-flexbox;display:flex;cursor:pointer;border-color:transparent;-webkit-padding-start:0;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{I as calcite_input}