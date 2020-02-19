var __awaiter=this&&this.__awaiter||function(e,t,r,n){function s(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(t){i(t)}}function a(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):s(e.value).then(o,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,s&&(i=o[0]&2?s["return"]:o[0]?s["throw"]||((i=s["return"])&&i.call(s),0):s.next)&&!(i=i.call(s,o[1])).done)return i;if(s=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;s=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(a){o=[6,a];s=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-d48257cd.system.js","./p-53a4b83d.system.js","./p-35047b4c.system.js","./p-4e1706df.system.js","./p-e6aac26a.system.js","./p-b8889409.system.js","./p-59502d8d.system.js","./p-a06584ba.system.js"],(function(e,t){"use strict";var r,n,s,i,o,a,l,f,u,c,h,d;return{setters:[function(e){r=e.i;n=e.w;s=e.r;i=e.f;o=e.c;a=e.j;l=e.h;f=e.e;u=e.H},function(e){c=e.g},function(e){h=e.c},function(){},function(){},function(e){d=e.c},function(){},function(){}],execute:function(){var p={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){var e=window;return!!e.Capacitor},impact:function(e){var t=this.getEngine();if(!t){return}var r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification:function(e){var t=this.getEngine();if(!t){return}var r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();if(!e){return}if(this.isCapacitor()){e.selectionStart()}else{e.gestureSelectionStart()}},selectionChanged:function(){var e=this.getEngine();if(!e){return}if(this.isCapacitor()){e.selectionChanged()}else{e.gestureSelectionChanged()}},selectionEnd:function(){var e=this.getEngine();if(!e){return}if(this.isCapacitor()){e.selectionChanged()}else{e.gestureSelectionChanged()}}};var v=function(e){p.impact(e)};var y=function(e){var t=e.previousElementSibling;var r=t!==null&&t.tagName==="ION-HEADER";return r?"translate":"scale"};var m=function(e,t){return e==="scale"?b(t):E(t)};var g=function(e){var t=e.querySelector("ion-spinner");var r=t.shadowRoot.querySelector("circle");var n=e.querySelector(".spinner-arrow-container");var s=e.querySelector(".arrow-container");var i=s?s.querySelector("ion-icon"):null;var o=d().duration(1e3).easing("ease-out");var a=d().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]);var l=d().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]);var f=d().addElement(t).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(s&&i){var u=d().addElement(s).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]);var c=d().addElement(i).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([u,c])}return o.addAnimation([a,l,f])};var b=function(e){var t=e.clientHeight;var r=d().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-"+(t+20)+"px)"},{offset:1,transform:"scale(1) translateY(100px)"}]);return g(e).addAnimation([r])};var E=function(e){var t=e.clientHeight;var r=d().addElement(e).keyframes([{offset:0,transform:"translateY(-"+(t+20)+"px)"},{offset:1,transform:"translateY(100px)"}]);return g(e).addAnimation([r])};var S=function(e){return d().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")};var w=function(e,t){e.style.setProperty("opacity",t.toString())};var R=function(e,t,r,s){n((function(){w(e,r);t.forEach((function(e,t){return e.style.setProperty("opacity",t<=s?"0.99":"0")}))}))};var C=function(e,t){n((function(){e.style.setProperty("--refreshing-rotation-duration",t>=1?"0.5s":"2s");e.style.setProperty("opacity","1")}))};var _=function(e,t){if(!e){return Promise.resolve()}var r=k(e);n((function(){e.style.setProperty("transition","0.2s all ease-out");if(t===undefined){e.style.removeProperty("transform")}else{e.style.setProperty("transform","translate3d(0px, "+t+", 0px)")}}));return r};var x=function(e,t){var n=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner");var s=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return n!==null&&s!==null&&(t==="ios"&&r("mobile")&&e.style.webkitOverflowScrolling!==undefined||t==="md")};var k=function(e){return new Promise((function(t){P(e,t)}))};var P=function(e,t){var r;var n={passive:true};var s=function(){if(r){r()}};var i=function(r){if(e===r.target){s();t(r)}};if(e){e.addEventListener("webkitTransitionEnd",i,n);e.addEventListener("transitionend",i,n);r=function(){e.removeEventListener("webkitTransitionEnd",i,n);e.removeEventListener("transitionend",i,n)}}return s};var D=e("ion_refresher",function(){function e(e){s(this,e);this.appliedStyles=false;this.didStart=false;this.progress=0;this.pointerDown=false;this.needsCompletion=false;this.didRefresh=false;this.lastVelocityY=0;this.animations=[];this.nativeRefresher=false;this.state=1;this.pullMin=60;this.pullMax=this.pullMin+60;this.closeDuration="280ms";this.snapbackDuration="280ms";this.pullFactor=1;this.disabled=false;this.ionRefresh=i(this,"ionRefresh",7);this.ionPull=i(this,"ionPull",7);this.ionStart=i(this,"ionStart",7)}e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.checkNativeRefresher=function(){var e=x(this.el,o(this));if(e&&!this.nativeRefresher){var t=this.el.closest("ion-content");this.setupNativeRefresher(t)}else if(!e){this.destroyNativeRefresher()}};e.prototype.destroyNativeRefresher=function(){if(this.scrollEl&&this.scrollListenerCallback){this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback);this.scrollListenerCallback=undefined}this.nativeRefresher=false};e.prototype.resetNativeRefresher=function(e,t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:this.state=t;if(!(o(this)==="ios"))return[3,2];return[4,_(e,undefined)];case 1:r.sent();return[3,4];case 2:return[4,k(this.el.querySelector(".refresher-refreshing-icon"))];case 3:r.sent();r.label=4;case 4:this.didRefresh=false;this.needsCompletion=false;this.pointerDown=false;this.animations.forEach((function(e){return e.destroy()}));this.animations=[];this.progress=0;this.state=1;return[2]}}))}))};e.prototype.setupiOSNativeRefresher=function(e,r){return __awaiter(this,void 0,void 0,(function(){var s,i,o,l;var f=this;return __generator(this,(function(u){switch(u.label){case 0:this.elementToTransform=this.scrollEl;s=e.shadowRoot.querySelectorAll("svg");i=this.scrollEl.clientHeight*.16;o=s.length;n((function(){return s.forEach((function(e){return e.style.setProperty("animation","none")}))}));this.scrollListenerCallback=function(){if(!f.pointerDown&&f.state===1){return}a((function(){var t=f.scrollEl.scrollTop;var a=f.el.clientHeight;if(t>0){if(f.state===8){var l=h(0,t/(a*.5),1);n((function(){return w(r,1-l)}));return}n((function(){return w(e,0)}));return}if(f.pointerDown){if(!f.didStart){f.didStart=true;f.ionStart.emit()}if(f.pointerDown){f.ionPull.emit()}}var u=h(0,Math.abs(t)/a,.99);var c=f.progress=h(0,(Math.abs(t)-30)/i,1);var d=h(0,Math.floor(c*o),o-1);var p=f.state===8||d===o-1;if(p){if(f.pointerDown){C(r,f.lastVelocityY)}if(!f.didRefresh){f.beginRefresh();f.didRefresh=true;v({style:"light"});if(!f.pointerDown){_(f.elementToTransform,a+"px")}}}else{f.state=2;R(e,s,u,d)}}))};this.scrollEl.addEventListener("scroll",this.scrollListenerCallback);l=this;return[4,t.import("./p-59502d8d.system.js")];case 1:l.gesture=u.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,onStart:function(){f.pointerDown=true;if(!f.didRefresh){_(f.elementToTransform,"0px")}},onMove:function(e){f.lastVelocityY=e.velocityY},onEnd:function(){f.pointerDown=false;f.didStart=false;if(f.needsCompletion){f.resetNativeRefresher(f.elementToTransform,32);f.needsCompletion=false}else if(f.didRefresh){a((function(){return _(f.elementToTransform,f.el.clientHeight+"px")}))}}});this.disabledChanged();return[2]}}))}))};e.prototype.setupMDNativeRefresher=function(e,r,s){return __awaiter(this,void 0,void 0,(function(){var i,o,a,l;var f=this;return __generator(this,(function(u){switch(u.label){case 0:i=r.shadowRoot.querySelector("circle");o=this.el.querySelector("ion-refresher-content .refresher-pulling-icon");a=s.shadowRoot.querySelector("circle");if(i!==null&&a!==null){n((function(){i.style.setProperty("animation","none");s.style.setProperty("animation-delay","-655ms");a.style.setProperty("animation-delay","-655ms")}))}l=this;return[4,t.import("./p-59502d8d.system.js")];case 1:l.gesture=u.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,canStart:function(){return f.state!==8&&f.state!==32&&f.scrollEl.scrollTop===0},onStart:function(e){e.data={animation:undefined,didStart:false,cancelled:false}},onMove:function(t){if(t.velocityY<0&&f.progress===0&&!t.data.didStart||t.data.cancelled){t.data.cancelled=true;return}if(!t.data.didStart){t.data.didStart=true;f.state=2;n((function(){var r=y(e);var n=m(r,o);t.data.animation=n;f.scrollEl.style.setProperty("--overflow","hidden");n.progressStart(false,0);f.ionStart.emit();f.animations.push(n)}));return}f.progress=h(0,t.deltaY/180*.5,1);t.data.animation.progressStep(f.progress);f.ionPull.emit()},onEnd:function(e){if(!e.data.didStart){return}n((function(){return f.scrollEl.style.removeProperty("--overflow")}));if(f.progress<=.4){f.gesture.enable(false);e.data.animation.progressEnd(0,f.progress,500).onFinish((function(){f.animations.forEach((function(e){return e.destroy()}));f.animations=[];f.gesture.enable(true);f.state=1}));return}var t=c([0,0],[0,0],[1,1],[1,1],f.progress)[0];var r=S(o);f.animations.push(r);n((function(){return __awaiter(f,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:o.style.setProperty("--ion-pulling-refresher-translate",t*100+"px");e.data.animation.progressEnd();return[4,r.play()];case 1:n.sent();this.beginRefresh();e.data.animation.destroy();return[2]}}))}))}))}});this.disabledChanged();return[2]}}))}))};e.prototype.setupNativeRefresher=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl){return[2]}this.nativeRefresher=true;t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");r=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");if(o(this)==="ios"){this.setupiOSNativeRefresher(t,r)}else{this.setupMDNativeRefresher(e,t,r)}return[2]}))}))};e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,n;var s=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.el.getAttribute("slot")!=="fixed"){console.error('Make sure you use: <ion-refresher slot="fixed">');return[2]}e=this.el.closest("ion-content");if(!e){console.error("<ion-refresher> must be used inside an <ion-content>");return[2]}r=this;return[4,e.getScrollElement()];case 1:r.scrollEl=i.sent();this.backgroundContentEl=e.shadowRoot.querySelector("#background-content");if(!x(this.el,o(this)))return[3,2];this.setupNativeRefresher(e);return[3,4];case 2:n=this;return[4,t.import("./p-59502d8d.system.js")];case 3:n.gesture=i.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:false,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(e){return s.onMove(e)},onEnd:function(){return s.onEnd()}});this.disabledChanged();i.label=4;case 4:return[2]}}))}))};e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher();this.scrollEl=undefined;if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.nativeRefresher){this.needsCompletion=true;if(!this.pointerDown){this.resetNativeRefresher(this.elementToTransform,32)}}else{this.close(32,"120ms")}return[2]}))}))};e.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.nativeRefresher){if(!this.pointerDown){this.resetNativeRefresher(this.elementToTransform,16)}}else{this.close(16,"")}return[2]}))}))};e.prototype.getProgress=function(){return Promise.resolve(this.progress)};e.prototype.canStart=function(){if(!this.scrollEl){return false}if(this.state!==1){return false}if(this.scrollEl.scrollTop>0){return false}return true};e.prototype.onStart=function(){this.progress=0;this.state=1};e.prototype.onMove=function(e){if(!this.scrollEl){return}var t=e.event;if(t.touches&&t.touches.length>1){return}if((this.state&56)!==0){return}var r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor;var n=e.deltaY*r;if(n<=0){this.progress=0;this.state=1;if(this.appliedStyles){this.setCss(0,"",false,"");return}return}if(this.state===1){var s=this.scrollEl.scrollTop;if(s>0){this.progress=0;return}this.state=2}if(t.cancelable){t.preventDefault()}this.setCss(n,"0ms",true,"");if(n===0){this.progress=0;return}var i=this.pullMin;this.progress=n/i;if(!this.didStart){this.didStart=true;this.ionStart.emit()}this.ionPull.emit();if(n<i){this.state=2;return}if(n>this.pullMax){this.beginRefresh();return}this.state=4;return};e.prototype.onEnd=function(){if(this.state===4){this.beginRefresh()}else if(this.state===2){this.cancel()}};e.prototype.beginRefresh=function(){this.state=8;this.setCss(this.pullMin,this.snapbackDuration,true,"");this.ionRefresh.emit({complete:this.complete.bind(this)})};e.prototype.close=function(e,t){var r=this;setTimeout((function(){r.state=1;r.progress=0;r.didStart=false;r.setCss(0,"0ms",false,"")}),600);this.state=e;this.setCss(0,this.closeDuration,true,t)};e.prototype.setCss=function(e,t,r,s){var i=this;if(this.nativeRefresher){return}this.appliedStyles=e>0;n((function(){if(i.scrollEl&&i.backgroundContentEl){var n=i.scrollEl.style;var o=i.backgroundContentEl.style;n.transform=o.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)";n.transitionDuration=o.transitionDuration=t;n.transitionDelay=o.transitionDelay=s;n.overflow=r?"hidden":""}}))};e.prototype.render=function(){var e;var t=o(this);return l(u,{slot:"fixed",class:(e={},e[t]=true,e["refresher-"+t]=true,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=this.state!==1,e["refresher-pulling"]=this.state===2,e["refresher-ready"]=this.state===4,e["refresher-refreshing"]=this.state===8,e["refresher-cancelling"]=this.state===16,e["refresher-completing"]=this.state===32,e)})};Object.defineProperty(e.prototype,"el",{get:function(){return f(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary,#3880ff)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary,#3880ff);font-size:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.1);box-shadow:0 1px 6px rgba(0,0,0,.1)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"},enumerable:true,configurable:true});return e}())}}}));