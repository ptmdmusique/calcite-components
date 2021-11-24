/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-40b4e596.system.js","./p-6cc23c39.system.js","./p-56b352bf.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,i,a,n,r,o,l;return{setters:[function(t){e=t.r;i=t.c;a=t.h;n=t.g},function(t){r=t.a;o=t.C},function(t){l=t.g},function(){}],execute:function(){var c={container:"container",header:"header",footer:"footer",title:"title",subtitle:"subtitle",thumbnailWrapper:"thumbnail-wrapper",checkboxWrapper:"checkbox-wrapper"};var s={thumbnail:"thumbnail",title:"title",subtitle:"subtitle",footerLeading:"footer-leading",footerTrailing:"footer-trailing"};var d={select:"Select",deselect:"Deselect",loading:"Loading"};var m="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{max-width:100%;display:block}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);position:relative;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:none;box-shadow:none}:host .calcite-card-container:hover{-webkit-box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;bottom:0;left:0}.header,.footer{padding-top:0.75rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem;display:-ms-flexbox;display:flex}.header{-ms-flex-direction:column;flex-direction:column}.footer{padding-top:0.25rem;padding-bottom:0.75rem;padding-left:0.75rem;padding-right:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto}.card-content{padding:0.75rem;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--2);line-height:1.375}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);margin:0;font-size:var(--calcite-font-size--1);line-height:1.375}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin:0;margin-top:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;-webkit-margin-end:auto;margin-inline-end:auto}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.thumbnail-wrapper{font-size:var(--calcite-font-size-0);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0;padding:0;top:0.5rem;right:0.5rem}.calcite--rtl .checkbox-wrapper{right:auto;left:0.5rem}";var p=t("calcite_card",function(){function t(t){var a=this;e(this,t);this.calciteCardSelect=i(this,"calciteCardSelect",7);this.loading=false;this.selected=false;this.selectable=false;this.intlLoading=d.loading;this.intlSelect=d.select;this.intlDeselect=d.deselect;this.cardSelectClick=function(){a.selectCard()};this.cardSelectKeyDown=function(t){switch(l(t.key)){case" ":case"Enter":a.selectCard();t.preventDefault();break}}}t.prototype.render=function(){var t,e;var i=r(this.el);return a("div",{class:(t={"calcite-card-container":true},t[o.rtl]=i==="rtl",t)},this.loading?a("div",{class:"calcite-card-loader-container"},a("calcite-loader",{active:true,label:this.intlLoading})):null,a("section",{"aria-busy":this.loading.toString(),class:(e={},e[c.container]=true,e)},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),a("div",{class:"card-content"},a("slot",null)),this.renderFooter()))};t.prototype.selectCard=function(){this.selected=!this.selected;this.calciteCardSelect.emit()};t.prototype.renderThumbnail=function(){var t=this.el.querySelector("[slot="+s.thumbnail+"]");return t?a("div",{class:c.thumbnailWrapper},a("slot",{name:s.thumbnail})):null};t.prototype.renderCheckbox=function(){var t=this.selected?this.intlDeselect:this.intlSelect;return a("calcite-label",{class:c.checkboxWrapper,onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},a("calcite-checkbox",{checked:this.selected,label:t}))};t.prototype.renderHeader=function(){var t=this.el.querySelector("[slot="+s.title+"]");var e=this.el.querySelector("[slot="+s.subtitle+"]");var i=t||e;return i?a("header",{class:c.header},a("slot",{name:s.title}),a("slot",{name:s.subtitle})):null};t.prototype.renderFooter=function(){var t=this.el.querySelector("[slot="+s.footerLeading+"]");var e=this.el.querySelector("[slot="+s.footerTrailing+"]");var i=t||e;return i?a("footer",{class:c.footer},a("slot",{name:s.footerLeading}),a("slot",{name:s.footerTrailing})):null};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());p.style=m}}}));