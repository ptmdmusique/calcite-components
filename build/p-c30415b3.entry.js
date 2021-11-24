/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as a,H as e,g as s}from"./p-687deef3.js";import{T as r,d as n,a as o,b as c,g as l,s as h,p,i as m}from"./p-1cbe6a0f.js";import{a as d}from"./p-52cc870b.js";import{g as u}from"./p-72563742.js";import{c as f,d as b,g as w}from"./p-3dae9da3.js";import{c as y,d as v,H as g}from"./p-695eee12.js";import{u as k,C as x,c as D}from"./p-d53cc958.js";import"./p-f07d3627.js";import"./p-b2ab0485.js";import"./p-8a63221d.js";let C=class{constructor(a){t(this,a),this.calciteDatePickerChange=i(this,"calciteDatePickerChange",7),this.calciteDatePickerRangeChange=i(this,"calciteDatePickerRangeChange",7),this.calciteInputDatePickerOpen=i(this,"calciteInputDatePickerOpen",7),this.calciteInputDatePickerClose=i(this,"calciteInputDatePickerClose",7),this.disabled=!1,this.active=!1,this.intlPrevMonth=r.prevMonth,this.intlNextMonth=r.nextMonth,this.locale=document.documentElement.lang||"en",this.scale="m",this.range=!1,this.required=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.focusedInput="start",this.activeTransitionProp="opacity",this.transitionEnd=t=>{t.propertyName===this.activeTransitionProp&&(this.active?this.calciteInputDatePickerOpen.emit():this.calciteInputDatePickerClose.emit())},this.setStartInput=t=>{this.startInput=t},this.setEndInput=t=>{this.endInput=t},this.deactivate=()=>{this.active=!1},this.keyUpHandler=t=>{"Escape"===u(t.key)&&(this.active=!1)},this.inputBlur=t=>{this.blur(t.detail)},this.startInputFocus=()=>{this.active=!0,this.focusedInput="start"},this.endInputFocus=()=>{this.active=!0,this.focusedInput="end"},this.inputInput=t=>{this.input(t.detail.value)},this.setMenuEl=t=>{t&&(this.menuEl=t,this.createPopper())},this.setStartWrapper=t=>{this.startWrapper=t,this.setReferenceEl()},this.setEndWrapper=t=>{this.endWrapper=t,this.setReferenceEl()},this.handleDateChange=t=>{this.range||(this.value=n(t.detail))},this.handleDateRangeChange=t=>{var i,a;if(!this.range||!t.detail)return;const{startDate:e,endDate:s}=t.detail;this.start=n(e),this.end=n(s),this.value=[this.start,this.end],this.shouldFocusRangeEnd()?null===(i=this.endInput)||void 0===i||i.setFocus():this.shouldFocusRangeStart()&&(null===(a=this.startInput)||void 0===a||a.setFocus())}}valueHandler(t){Array.isArray(t)?(this.valueAsDate=t.map((t=>o(t))),this.start=t[0],this.end=t[1]):t?(this.valueAsDate=o(t),this.start="",this.end=""):(this.valueAsDate=void 0,this.start=void 0,this.end=void 0)}activeHandler(){this.reposition()}calciteDaySelectHandler(){this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()||(this.active=!1)}async setFocus(){var t;null===(t=this.startInput)||void 0===t||t.setFocus()}async reposition(){const{popper:t,menuEl:i}=this,a=this.getModifiers();t?await k({el:i,modifiers:a,placement:"bottom-leading",popper:t}):this.createPopper()}connectedCallback(){Array.isArray(this.value)?(this.valueAsDate=this.value.map((t=>o(t))),this.start=this.value[0],this.end=this.value[1]):this.value&&(this.valueAsDate=o(this.value),this.start="",this.end=""),this.start&&(this.startAsDate=o(this.start)),this.end&&(this.endAsDate=o(this.end)),this.min&&(this.minAsDate=o(this.min)),this.max&&(this.maxAsDate=o(this.max)),this.createPopper(),f(this),y(this)}async componentWillLoad(){await this.loadLocaleData()}disconnectedCallback(){this.destroyPopper(),b(this),v(this)}render(){var t,i;const{disabled:s}=this,r=c(this.range?this.startAsDate:this.valueAsDate,this.minAsDate,this.maxAsDate),n=this.range?c(this.endAsDate,this.minAsDate,this.maxAsDate):null,o=n?n.toLocaleDateString(this.locale):"",l=r?r.toLocaleDateString(this.locale):"",h=d(this.el);return a(e,{onBlur:this.deactivate,onKeyUp:this.keyUpHandler,role:"application"},this.localeData&&a("div",{"aria-expanded":this.active.toString(),class:"input-container",dir:h,role:"application"},a("div",{class:"input-wrapper",ref:this.setStartWrapper},a("calcite-input",{class:"input "+("vertical"===this.layout&&this.range?"no-bottom-border":""),disabled:s,icon:"calendar",label:w(this),"number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.startInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(t=this.localeData)||void 0===t?void 0:t.placeholder,ref:this.setStartInput,scale:this.scale,type:"text",value:l})),a("div",{"aria-hidden":(!this.active).toString(),class:"menu-container",ref:this.setMenuEl},a("div",{class:{"calendar-picker-wrapper":!0,"calendar-picker-wrapper--end":"end"===this.focusedInput,[x.animation]:!0,[x.animationActive]:this.active},onTransitionEnd:this.transitionEnd},a("calcite-date-picker",{activeRange:this.focusedInput,endAsDate:this.endAsDate,headingLevel:this.headingLevel,intlNextMonth:this.intlNextMonth,intlPrevMonth:this.intlPrevMonth,locale:this.locale,max:this.max,maxAsDate:this.maxAsDate,min:this.min,minAsDate:this.minAsDate,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,scale:this.scale,startAsDate:this.startAsDate,tabIndex:0,valueAsDate:this.valueAsDate}))),this.range&&"horizontal"===this.layout&&a("div",{class:"horizontal-arrow-container"},a("calcite-icon",{flipRtl:!0,icon:"arrow-right",scale:"s"})),this.range&&"vertical"===this.layout&&"s"!==this.scale&&a("div",{class:"vertical-arrow-container"},a("calcite-icon",{icon:"arrow-down",scale:"s"})),this.range&&a("div",{class:"input-wrapper",ref:this.setEndWrapper},a("calcite-input",{class:{input:!0,"border-t-color-1":"vertical"===this.layout&&this.range},disabled:s,icon:"calendar","number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.endInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(i=this.localeData)||void 0===i?void 0:i.placeholder,ref:this.setEndInput,scale:this.scale,type:"text",value:o}))),a(g,{component:this}))}setReferenceEl(){const{focusedInput:t,layout:i,endWrapper:a,startWrapper:e}=this;this.referenceEl="end"===t||"vertical"===i?a||e:e||a,this.createPopper()}onLabelClick(){this.setFocus()}getModifiers(){return[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}}]}createPopper(){this.destroyPopper();const{menuEl:t,referenceEl:i,overlayPositioning:a}=this;if(!t||!i)return;const e=this.getModifiers();this.popper=D({el:t,modifiers:e,overlayPositioning:a,placement:"bottom-leading",referenceEl:i})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}startWatcher(t){this.startAsDate=o(t)}endWatcher(t){this.endAsDate=o(t)}async loadLocaleData(){const{locale:t}=this;this.localeData=await l(t)}clearCurrentValue(){if(!this.range)return void(this.value="");const{focusedInput:t}=this;"start"===t?(this.value=Array.isArray(this.value)?["",this.value[1]||""]:[""],this.start=void 0):"end"===t&&(this.value=Array.isArray(this.value)?[this.value[0]||"",""]:["",""],this.end=void 0)}input(t){const i=this.getDateFromInput(t);if(!i)return void this.clearCurrentValue();if(!this.range)return void(this.value=n(i));const{focusedInput:a}=this;if("start"===a){if(!this.startAsDate||!h(i,this.startAsDate)){const t=n(i);this.value=Array.isArray(this.value)?[t,this.value[1]||""]:[t],this.start=t,this.calciteDatePickerRangeChange.emit({startDate:i,endDate:this.endAsDate})}}else if(!("end"!==a||this.endAsDate&&h(i,this.endAsDate))){const t=n(i);this.value=Array.isArray(this.value)?[this.value[0]||"",t]:["",t],this.end=t,this.calciteDatePickerRangeChange.emit({startDate:this.startAsDate,endDate:i})}}blur(t){const{locale:i,focusedInput:a,endAsDate:e,range:s,startAsDate:r,valueAsDate:n}=this;this.getDateFromInput(t.value)||(!s&&n?t.value=Array.isArray(n)?n["end"===a?1:0].toLocaleDateString(i):n.toLocaleDateString(i):"start"===a&&r?t.value=r.toLocaleDateString(i):"end"===a&&e&&(t.value=e.toLocaleDateString(i)))}shouldFocusRangeStart(){return!(!this.endAsDate||this.startAsDate||"end"!==this.focusedInput||!this.startInput)}shouldFocusRangeEnd(){return!(!this.startAsDate||this.endAsDate||"start"!==this.focusedInput||!this.endInput)}getDateFromInput(t){if(!this.localeData)return!1;const{separator:i}=this.localeData,{day:a,month:e,year:s}=p(t,this.localeData),r=a>0,n=e>-1,o=new Date(s,e,a);o.setFullYear(s);const c=!isNaN(o.getTime()),l=t.split(i).filter((t=>t)).length>2,h=s.toString().length>0;return!!(r&&n&&c&&l&&h&&m(o,this.min,this.max))&&o}get el(){return s(this)}static get watchers(){return{value:["valueHandler"],active:["activeHandler"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"],start:["startWatcher"],end:["endWatcher"],locale:["loadLocaleData"]}}};C.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-box-shadow:none;box-shadow:none;display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible}:host .menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host .menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host .menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host .menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.calendar-picker-wrapper{-webkit-box-shadow:none;box-shadow:none;position:static;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}:host([range]) .input-container{display:-ms-flexbox;display:flex}:host([range]) .input-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-left-width:0;border-right-width:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{top:1.5rem;left:0;padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px;position:absolute;z-index:10;background-color:var(--calcite-ui-foreground-1)}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}.menu-container{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}:host([active]) .menu-container{visibility:visible;pointer-events:auto}.input .calcite-input__wrapper{margin-top:0}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{top:1.5rem;padding-left:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{width:0.75rem;height:0.75rem;min-width:0}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:2.25rem;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{C as calcite_input_date_picker}