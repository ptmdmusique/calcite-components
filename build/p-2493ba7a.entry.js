/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as e,H as n,g as a}from"./p-687deef3.js";import{g as o}from"./p-72563742.js";import{a as r,C as s,f as c,d as l}from"./p-52cc870b.js";import{C as m,u as d,c as p}from"./p-d53cc958.js";import{c as h}from"./p-e4acb5a8.js";import"./p-8a63221d.js";let f=class{constructor(e){t(this,e),this.calciteDropdownSelect=i(this,"calciteDropdownSelect",7),this.calciteDropdownOpen=i(this,"calciteDropdownOpen",7),this.calciteDropdownClose=i(this,"calciteDropdownClose",7),this.active=!1,this.disableCloseOnSelect=!1,this.disabled=!1,this.maxItems=0,this.overlayPositioning="absolute",this.placement="bottom-leading",this.scale="m",this.selectedItems=[],this.type="click",this.width="m",this.items=[],this.activeTransitionProp="opacity",this.mutationObserver=h("mutation",(()=>this.updateItems())),this.updateItems=()=>{this.updateSelectedItems(),this.triggers=Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]")),this.items=Array.from(this.el.querySelectorAll("calcite-dropdown-item")),this.reposition()},this.setMaxScrollerHeight=()=>{const{scrollerEl:t}=this;if(t){const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:""}},this.setScrollerEl=t=>{this.scrollerEl=t},this.transitionEnd=t=>{t.propertyName===this.activeTransitionProp&&(this.active?this.calciteDropdownOpen.emit():this.calciteDropdownClose.emit())},this.setReferenceEl=t=>{this.referenceEl=t},this.setMenuEl=t=>{this.menuEl=t},this.keyDownHandler=t=>{const i=t.target,e=o(t.key);if(this.triggers.includes(i)||this.triggers.some((t=>t.contains(i))))if("BUTTON"!==i.nodeName&&"CALCITE-BUTTON"!==i.nodeName)switch(e){case" ":case"Enter":this.openCalciteDropdown();break;case"Escape":this.closeCalciteDropdown()}else this.active&&("Escape"===e||t.shiftKey&&"Tab"===e)&&this.closeCalciteDropdown()},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((t=>t.active))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.active=!this.active,this.active&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)}}activeHandler(){this.reposition()}maxItemsHandler(){this.reposition()}placementHandler(){this.reposition()}connectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.createPopper(),this.updateItems()}componentDidLoad(){this.reposition()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.destroyPopper()}render(){const{active:t}=this,i=r(this.el);return e(n,{tabIndex:this.disabled?-1:null},e("div",{class:{"calcite-dropdown-trigger-container":!0,[s.rtl]:"rtl"===i},onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},e("slot",{"aria-expanded":t.toString(),"aria-haspopup":"true",name:"dropdown-trigger"})),e("div",{"aria-hidden":(!t).toString(),class:"calcite-dropdown-wrapper",ref:this.setMenuEl},e("div",{class:{"calcite-dropdown-content":!0,[m.animation]:!0,[m.animationActive]:t},onTransitionEnd:this.transitionEnd,ref:this.setScrollerEl},e("slot",null))))}async reposition(){const{popper:t,menuEl:i,placement:e}=this;this.setMaxScrollerHeight();const n=this.getModifiers();t?await d({el:i,modifiers:n,placement:e,popper:t}):this.createPopper()}closeCalciteDropdownOnClick(t){this.active&&!t.composedPath().includes(this.el)&&this.closeCalciteDropdown()}closeCalciteDropdownOnEvent(){this.closeCalciteDropdown()}closeCalciteDropdownOnOpenEvent(t){t.composedPath().includes(this.el)||(this.active=!1)}mouseEnterHandler(){"hover"===this.type&&this.openCalciteDropdown()}mouseLeaveHandler(){"hover"===this.type&&this.closeCalciteDropdown()}calciteDropdownItemKeyEvent(t){const{keyboardEvent:i}=t.detail,e=i.target,n="A"!==e.nodeName?e:e.parentNode,a=0===this.itemIndex(n),r=this.itemIndex(n)===this.items.length-1;switch(o(i.key)){case"Tab":r&&!i.shiftKey||a&&i.shiftKey?this.closeCalciteDropdown():i.shiftKey?this.focusPrevItem(n):this.focusNextItem(n);break;case"ArrowDown":this.focusNextItem(n);break;case"ArrowUp":this.focusPrevItem(n);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}t.stopPropagation()}handleItemSelect(t){this.updateSelectedItems(),t.stopPropagation(),this.calciteDropdownSelect.emit(),this.disableCloseOnSelect&&"none"!==t.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown()}getModifiers(){return[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}}]}createPopper(){this.destroyPopper();const{menuEl:t,referenceEl:i,placement:e,overlayPositioning:n}=this,a=this.getModifiers();this.popper=p({el:t,modifiers:a,overlayPositioning:n,placement:e,referenceEl:i})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}updateSelectedItems(){const t=Array.from(this.el.querySelectorAll("calcite-dropdown-item"));this.selectedItems=t.filter((t=>t.active))}getMaxScrollerHeight(){const t=Array.from(this.el.querySelectorAll("calcite-dropdown-group")),{maxItems:i}=this;let e,n=0,a=0;return t.forEach((t=>{i>0&&n<i&&Array.from(t.children).forEach(((t,o)=>{0===o&&(isNaN(e)&&(e=t.offsetTop),a+=e),n<i&&(a+=t.offsetHeight,n+=1)}))})),a}closeCalciteDropdown(){this.active=!1,c(this.triggers[0])}focusFirstItem(){this.getFocusableElement(this.items[0])}focusLastItem(){this.getFocusableElement(this.items[this.items.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.getFocusableElement(this.items[i+1]||this.items[0])}focusPrevItem(t){const i=this.itemIndex(t);this.getFocusableElement(this.items[i-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}getFocusableElement(t){if(!t)return;const i=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;c(i)}get el(){return a(this)}static get watchers(){return{active:["activeHandler"],maxItems:["maxItemsHandler"],placement:["placementHandler"]}}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 1 auto;flex:0 1 auto}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-dropdown-wrapper{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.calcite-dropdown-wrapper .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.calcite-dropdown-wrapper[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.calcite-dropdown-wrapper[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.calcite-dropdown-wrapper[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.calcite-dropdown-wrapper[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.calcite-dropdown-wrapper[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .calcite-dropdown-wrapper{pointer-events:initial;visibility:visible}:host .calcite-dropdown-content{background-color:var(--calcite-ui-foreground-1);overflow:hidden;overflow-y:auto;width:auto;max-height:90vh;width:var(--calcite-dropdown-width)}.calcite-dropdown-trigger-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;position:relative}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.25rem 0.75rem 0.25rem 1.5rem}:host([scale=m]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.5rem 0.75rem 0.5rem 1.5rem}:host([scale=l]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 0.75rem 0.5rem 1.5rem}:host([scale=s]) .calcite--rtl{--calcite-dropdown-item-padding:0.25rem 1.5rem 0.25rem 0.75rem}:host([scale=m]) .calcite--rtl{--calcite-dropdown-item-padding:0.5rem 1.5rem 0.5rem 0.75rem}:host([scale=l]) .calcite--rtl{--calcite-dropdown-item-padding:0.5rem 1.5rem 0.5rem 0.75rem}";let w=class{constructor(e){t(this,e),this.calciteDropdownItemChange=i(this,"calciteDropdownItemChange",7),this.selectionMode="single"}componentWillLoad(){this.groupPosition=this.getGroupPosition()}render(){const t=r(this.el),i=this.scale||l(this.el,"scale","m"),a=this.groupTitle?e("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,o=this.groupPosition>0?e("div",{class:"dropdown-separator",role:"separator"}):null;return e(n,{role:"menu"},e("div",{class:{container:!0,"container--s":"s"===i,"container--m":"m"===i,"container--l":"l"===i},dir:t,title:this.groupTitle},o,a,e("slot",null)))}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}get el(){return a(this)}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{display:block;border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;overflow-wrap:break-word;cursor:default;margin-bottom:-1px}.dropdown-separator{display:block;height:1px;background-color:var(--calcite-ui-border-3)}";let b=class{constructor(e){t(this,e),this.calciteDropdownItemSelect=i(this,"calciteDropdownItemSelect",7),this.calciteDropdownItemKeyEvent=i(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownCloseRequest=i(this,"calciteDropdownCloseRequest",7),this.active=!1}async setFocus(){this.el.focus()}connectedCallback(){this.selectionMode=l(this.el,"selection-mode","single"),this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.active=!1)}render(){const t=r(this.el),i=l(this.el,"scale","m"),a=e("calcite-icon",{class:"dropdown-item-icon-start",dir:t,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),o=e("span",{class:"dropdown-item-content"},e("slot",null)),c=e("calcite-icon",{class:"dropdown-item-icon-end",dir:t,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"}),m=this.iconStart&&this.iconEnd?[a,o,c]:this.iconStart?[a,e("slot",null)]:this.iconEnd?[o,c]:o,d=this.href?e("a",{"aria-label":this.label,class:"dropdown-link",href:this.href,ref:t=>this.childLink=t,rel:this.rel,target:this.target},m):m,p=this.href?null:"single"===this.selectionMode?"menuitemradio":"multi"===this.selectionMode?"menuitemcheckbox":"menuitem",h="none"!==this.selectionMode?this.active.toString():null;return e(n,{"aria-checked":h,role:p,tabindex:"0"},e("div",{class:{container:!0,[s.rtl]:"rtl"===t,"container--link":!!this.href,"container--s":"s"===i,"container--m":"m"===i,"container--l":"l"===i,"container--multi-selection":"multi"===this.selectionMode,"container--single-selection":"single"===this.selectionMode,"container--none-selection":"none"===this.selectionMode}},"none"!==this.selectionMode?e("calcite-icon",{class:"dropdown-item-icon",icon:"multi"===this.selectionMode?"check":"bullet-point",scale:"s"}):null,d))}onClick(){this.emitRequestedItem()}keyDownHandler(t){switch(o(t.key)){case" ":this.emitRequestedItem(),this.href&&(t.preventDefault(),this.childLink.click());break;case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click();break;case"Escape":this.calciteDropdownCloseRequest.emit();break;case"Tab":case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteDropdownItemKeyEvent.emit({keyboardEvent:t})}t.preventDefault()}updateActiveItemOnChange(t){t.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem())}determineActiveItem(){switch(this.selectionMode){case"multi":this.el===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.el===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.active=!1);break;case"none":this.active=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return a(this)}};b.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem;padding-right:0.5rem;padding-left:1.5rem;padding-top:0.25rem;padding-bottom:0.25rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem;padding-right:0.75rem;padding-left:2rem;padding-top:0.5rem;padding-bottom:0.5rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-right:1rem;padding-left:2.5rem;padding-top:0.75rem;padding-bottom:0.75rem}.container--s.calcite--rtl{padding-right:1.5rem;padding-left:0.5rem}.container--m.calcite--rtl{padding-right:2rem;padding-left:0.75rem}.container--l.calcite--rtl{padding-right:2.5rem;padding-left:1rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;position:relative}.container{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative}.dropdown-item-content{margin-right:auto;margin-left:0.25rem}.calcite--rtl .dropdown-item-content{margin-left:auto;margin-right:0}:host,.container--link a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.container--link{padding:0}.container--link a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative}.container--s .dropdown-link{font-size:var(--calcite-font-size--2);line-height:1rem;padding-right:0.5rem;padding-left:1.5rem;padding-top:0.25rem;padding-bottom:0.25rem}.container--m .dropdown-link{font-size:var(--calcite-font-size--1);line-height:1rem;padding-right:0.75rem;padding-left:2rem;padding-top:0.5rem;padding-bottom:0.5rem}.container--l .dropdown-link{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-right:1rem;padding-left:2.5rem;padding-top:0.75rem;padding-bottom:0.75rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}.calcite--rtl:before{left:unset;right:1rem}.calcite--rtl .dropdown-link{padding-right:0;padding-left:0}:host([active]) .container:not(.container--none-selection),:host([active]) .container--link .dropdown-link{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}:host([active]) .container:not(.container--none-selection):before,:host([active]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([active]) .container:not(.container--none-selection) calcite-icon,:host([active]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{left:0.5rem}.container--m:before{left:0.75rem}.container--l:before{left:1rem}.calcite--rtl:before{left:unset}.container--s.calcite--rtl:before{right:0.5rem}.container--m.calcite--rtl:before{right:0.75rem}.container--l.calcite--rtl:before{right:1rem}.dropdown-item-icon{position:absolute;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(0.9);transform:scale(0.9)}.container--s .dropdown-item-icon{left:0.25rem}.container--m .dropdown-item-icon{left:0.5rem}.container--l .dropdown-item-icon{left:0.75rem}.calcite--rtl .dropdown-item-icon{left:unset;margin-left:0}.container--s.calcite--rtl .dropdown-item-icon{right:0.25rem}.container--m.calcite--rtl .dropdown-item-icon{right:0.5rem}.container--l.calcite--rtl .dropdown-item-icon{right:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-right:0.5rem;margin-left:0.25rem}.container--s .dropdown-item-icon-end{margin-left:0.5rem}.container--m .dropdown-item-icon-start{margin-right:0.75rem;margin-left:0.25rem}.container--m .dropdown-item-icon-end{margin-left:0.75rem}.container--l .dropdown-item-icon-start{margin-right:1rem;margin-left:0.25rem}.container--l .dropdown-item-icon-end{margin-left:1rem}.calcite--rtl .dropdown-item-icon-start{margin-right:0}.calcite--rtl .dropdown-item-icon-end{margin-left:0}.container--s.calcite--rtl .dropdown-item-icon-start{margin-left:0.5rem}.container--s.calcite--rtl .dropdown-item-icon-end{margin-right:0.5rem}.container--m.calcite--rtl .dropdown-item-icon-start{margin-left:0.75rem}.container--m.calcite--rtl .dropdown-item-icon-end{margin-right:0.75rem}.container--l.calcite--rtl .dropdown-item-icon-start{margin-left:1rem}.container--l.calcite--rtl .dropdown-item-icon-end{margin-right:1rem}.calcite--rtl calcite-icon{margin-right:0;margin-left:0.75rem}";export{f as calcite_dropdown,w as calcite_dropdown_group,b as calcite_dropdown_item}