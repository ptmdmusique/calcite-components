/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-40b4e596.system.js","./p-6cc23c39.system.js","./p-378ffa38.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,a,i,n,r,s,o;return{setters:[function(t){e=t.r;a=t.h;i=t.g},function(t){n=t.a;r=t.b},function(t){s=t.h;o=t.i},function(){}],execute:function(){function c(t){var e=0;for(var a=0;a<t.length;a++){e=t.charCodeAt(a)+((e<<5)-e)}var i="#";for(var n=0;n<3;n++){var r=e>>n*8&255;i+=("00"+r.toString(16)).substr(-2)}return i}function l(t){var e=t.r,a=t.g,i=t.b;e/=255;a/=255;i/=255;var n=Math.max(e,a,i);var r=Math.min(e,a,i);var s=n-r;if(n===r){return 0}var o=(n+r)/2;switch(n){case e:o=(a-i)/s+(a<i?6:0);break;case a:o=(i-e)/s+2;break;case i:o=(e-a)/s+4;break}return Math.round(o*60)}function m(t){return l(s(t))}var f="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.75rem;height:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";var u=t("calcite_avatar",function(){function t(t){e(this,t);this.scale="m";this.error=false}t.prototype.render=function(){return this.determineContent()};t.prototype.determineContent=function(){var t=this;var e=n(this.el);if(this.thumbnail&&!this.error){return a("img",{alt:"",class:"thumbnail",dir:e,onError:function(){return t.error=true},src:this.thumbnail})}var i=this.generateInitials();var r=this.generateFillColor();return a("span",{class:"background",dir:e,style:{backgroundColor:r}},i?a("span",{"aria-hidden":"true",class:"initials"},i):a("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))};t.prototype.generateFillColor=function(){var t=this,e=t.userId,a=t.username,i=t.fullName,n=t.el;var s=r(n);var l=e&&"#"+e.substr(e.length-6);var f=a||i||"";var u=l&&o(l)?l:c(f);if(!e&&!f||!o(u)){return"var(--calcite-ui-foreground-2)"}var p=m(u);var h=s==="dark"?20:90;return"hsl("+p+", 60%, "+h+"%)"};t.prototype.generateInitials=function(){var t=this,e=t.fullName,a=t.username;if(e){return e.trim().split(" ").map((function(t){return t.substring(0,1)})).join("")}else if(a){return a.substring(0,2)}return false};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.style=f}}}));