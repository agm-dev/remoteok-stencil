System.register(["./p-d48257cd.system.js","./p-2294249a.system.js"],(function(t){"use strict";var e,r,n,i,o,s,u,c;return{setters:[function(t){e=t.r;r=t.h;n=t.c;i=t.H;o=t.f;s=t.e},function(t){u=t.o;c=t.c}],execute:function(){var a=t("ion_card",function(){function t(t){e(this,t);this.button=false;this.type="button";this.disabled=false;this.routerDirection="forward"}t.prototype.isClickable=function(){return this.href!==undefined||this.button};t.prototype.renderCard=function(t){var e=this.isClickable();if(!e){return[r("slot",null)]}var n=this,i=n.href,o=n.routerDirection;var s=e?i===undefined?"button":"a":"div";var c=s==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return r(s,Object.assign({},c,{class:"card-native",disabled:this.disabled,onClick:function(t){return u(i,t,o)}}),r("slot",null),e&&t==="md"&&r("ion-ripple-effect",null))};t.prototype.render=function(){var t;var e=n(this);return r(i,{class:Object.assign(Object.assign((t={},t[e]=true,t),c(this.color)),{"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(e))};Object.defineProperty(t,"style",{get:function(){return":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background,var(--ion-background-color,#fff));--color:var(--ion-color-step-550,#737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"},enumerable:true,configurable:true});return t}());var l=t("ion_card_content",function(){function t(t){e(this,t)}t.prototype.render=function(){var t;var e=n(this);return r(i,{class:(t={},t[e]=true,t["card-content-"+e]=true,t)})};Object.defineProperty(t,"style",{get:function(){return"ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"},enumerable:true,configurable:true});return t}());var d=t("ion_card_header",function(){function t(t){e(this,t);this.translucent=false}t.prototype.render=function(){var t;var e=n(this);return r(i,{class:Object.assign(Object.assign({},c(this.color)),(t={"card-header-translucent":this.translucent,"ion-inherit-color":true},t[e]=true,t))},r("slot",null))};Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}"},enumerable:true,configurable:true});return t}());var h=t("ion_card_subtitle",function(){function t(t){e(this,t)}t.prototype.render=function(){var t;var e=n(this);return r(i,{role:"heading","aria-level":"3",class:Object.assign(Object.assign({},c(this.color)),(t={"ion-inherit-color":true},t[e]=true,t))},r("slot",null))};Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550,#737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"},enumerable:true,configurable:true});return t}());var f=t("ion_card_title",function(){function t(t){e(this,t)}t.prototype.render=function(){var t;var e=n(this);return r(i,{role:"heading","aria-level":"2",class:Object.assign(Object.assign({},c(this.color)),(t={"ion-inherit-color":true},t[e]=true,t))},r("slot",null))};Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"},enumerable:true,configurable:true});return t}());var b=t("ion_chip",function(){function t(t){e(this,t);this.outline=false}t.prototype.render=function(){var t;var e=n(this);return r(i,{class:Object.assign(Object.assign({},c(this.color)),(t={},t[e]=true,t["chip-outline"]=this.outline,t["ion-activatable"]=true,t))},r("slot",null),e==="md"&&r("ion-ripple-effect",null))};Object.defineProperty(t,"style",{get:function(){return":host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.12);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb),.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb),.16)}:host(.chip-outline){border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb),.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0,0,0,.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(0,0,0,.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0,0,0,.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none;--background:rgba(var(--ion-text-color-rgb,0,0,0),0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb,0,0,0),0.2)}\@media (any-hover:hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb,0,0,0),0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb),.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb,0,0,0),.04)}}"},enumerable:true,configurable:true});return t}());var p=t("ion_img",function(){function t(t){var r=this;e(this,t);this.onLoad=function(){r.ionImgDidLoad.emit()};this.onError=function(){r.ionError.emit()};this.ionImgWillLoad=o(this,"ionImgWillLoad",7);this.ionImgDidLoad=o(this,"ionImgDidLoad",7);this.ionError=o(this,"ionError",7)}t.prototype.srcChanged=function(){this.addIO()};t.prototype.componentDidLoad=function(){this.addIO()};t.prototype.addIO=function(){var t=this;if(this.src===undefined){return}if("IntersectionObserver"in window){this.removeIO();this.io=new IntersectionObserver((function(e){if(e[0].isIntersecting){t.load();t.removeIO()}}));this.io.observe(this.el)}else{setTimeout((function(){return t.load()}),200)}};t.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.ionImgWillLoad.emit()};t.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};t.prototype.render=function(){return r(i,{class:n(this)},r("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:true,configurable:true});return t}())}}}));