var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{u(i.next(e))}catch(t){a(t)}}function s(e){try{u(i["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):r(e.value).then(o,s)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(s){o=[6,s];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-d48257cd.system.js","./p-53a4b83d.system.js","./p-4e1706df.system.js","./p-4670c1ef.system.js","./p-4ae599ad.system.js"],(function(e,t){"use strict";var n,i,r,a,o,s,u,c,l,f;return{setters:[function(e){n=e.r;i=e.c;r=e.f;a=e.d;o=e.h;s=e.e},function(e){u=e.g},function(){},function(e){c=e.t},function(e){l=e.a;f=e.d}],execute:function(){var h=e("ion_router_outlet",function(){function e(e){n(this,e);this.animationEnabled=true;this.mode=i(this);this.animated=true;this.ionNavWillLoad=r(this,"ionNavWillLoad",7);this.ionNavWillChange=r(this,"ionNavWillChange",3);this.ionNavDidChange=r(this,"ionNavDidChange",3)}e.prototype.swipeHandlerChanged=function(){if(this.gesture){this.gesture.enable(this.swipeHandler!==undefined)}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(i){switch(i.label){case 0:e=this;return[4,t.import("./p-67cd7394.system.js")];case 1:e.gesture=i.sent().createSwipeBackGesture(this.el,(function(){return!!n.swipeHandler&&n.swipeHandler.canStart()&&n.animationEnabled}),(function(){return n.swipeHandler&&n.swipeHandler.onStart()}),(function(e){return n.ani&&n.ani.progressStep(e)}),(function(e,t,i){if(n.ani){n.animationEnabled=false;n.ani.onFinish((function(){n.animationEnabled=true;if(n.swipeHandler){n.swipeHandler.onEnd(e)}}),{oneTimeCallback:true});var r=e?-.001:.001;if(!e){n.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");r+=u([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{r+=u([0,0],[.32,.72],[0,1],[1,1],t)[0]}n.ani.progressEnd(e?1:0,r,i)}}));this.swipeHandlerChanged();return[2]}}))}))};e.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()};e.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.commit=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var i,r,a;return __generator(this,(function(o){switch(o.label){case 0:return[4,this.lock()];case 1:i=o.sent();r=false;o.label=2;case 2:o.trys.push([2,4,,5]);return[4,this.transition(e,t,n)];case 3:r=o.sent();return[3,5];case 4:a=o.sent();console.error(a);return[3,5];case 5:i();return[2,r]}}))}))};e.prototype.setRouteId=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(r){switch(r.label){case 0:return[4,this.setRoot(e,t,{duration:n==="root"?0:undefined,direction:n==="back"?"back":"forward"})];case 1:i=r.sent();return[2,{changed:i,element:this.activeEl}]}}))}))};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.activeEl;return[2,e?{id:e.tagName,element:e}:undefined]}))}))};e.prototype.setRoot=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var i,r;return __generator(this,(function(a){switch(a.label){case 0:if(this.activeComponent===e){return[2,false]}i=this.activeEl;return[4,l(this.delegate,this.el,e,["ion-page","ion-page-invisible"],t)];case 1:r=a.sent();this.activeComponent=e;this.activeEl=r;return[4,this.commit(r,i,n)];case 2:a.sent();return[4,f(this.delegate,i)];case 3:a.sent();return[2,true]}}))}))};e.prototype.transition=function(e,t,n){if(n===void 0){n={}}return __awaiter(this,void 0,void 0,(function(){var i,r,o,s,u;var l=this;return __generator(this,(function(f){switch(f.label){case 0:if(t===e){return[2,false]}this.ionNavWillChange.emit();i=this,r=i.el,o=i.mode;s=this.animated&&a.getBoolean("animated",true);u=this.animation||n.animationBuilder||a.get("navAnimation");return[4,c(Object.assign({mode:o,animated:s,animationBuilder:u,enteringEl:e,leavingEl:t,baseEl:r,progressCallback:n.progressAnimation?function(e){return l.ani=e}:undefined},n))];case 1:f.sent();this.ionNavDidChange.emit();return[2,true]}}))}))};e.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){switch(n.label){case 0:e=this.waitPromise;this.waitPromise=new Promise((function(e){return t=e}));if(!(e!==undefined))return[3,2];return[4,e];case 1:n.sent();n.label=2;case 2:return[2,t]}}))}))};e.prototype.render=function(){return o("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:true,configurable:true});return e}())}}}));