var __awaiter=this&&this.__awaiter||function(e,n,r,t){function i(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{s(t.next(e))}catch(n){a(n)}}function u(e){try{s(t["throw"](e))}catch(n){a(n)}}function s(e){e.done?r(e.value):i(e.value).then(o,u)}s((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=n.call(e,r)}catch(u){o=[6,u];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var t=Array(e),i=0,n=0;n<r;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)t[i]=a[o];return t};System.register(["./p-d48257cd.system.js"],(function(e){"use strict";var n;return{setters:[function(e){n=e.d}],execute:function(){var r=this;var t=0;var i=e("c",new WeakMap);var a=function(e){return{create:function(n){return l(e,n)},dismiss:function(n,r,t){return v(document,n,r,e,t)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,h(document,e)]}))}))}}};var o=e("h",a("ion-alert"));var u=e("g",a("ion-action-sheet"));var s=e("b",a("ion-picker"));var c=e("f",a("ion-popover"));var f=e("p",(function(e){var n=document;d(n);var r=t++;e.overlayIndex=r;if(!e.hasAttribute("id")){e.id="ion-overlay-"+r}}));var l=function(e,n){return customElements.whenDefined(e).then((function(){var r=document;var t=r.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,n);b(r).appendChild(t);return t.componentOnReady()}))};var d=function(e){if(t===0){t=1;e.addEventListener("focusin",(function(n){var r=h(e);if(r&&r.backdropDismiss&&!A(r,n.target)){var t=r.querySelector("input,button");if(t){t.focus()}}}));e.addEventListener("ionBackButton",(function(n){var r=h(e);if(r&&r.backdropDismiss){n.detail.register(100,(function(){return r.dismiss(undefined,D)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var r=h(e);if(r&&r.backdropDismiss){r.dismiss(undefined,D)}}}))}};var v=function(e,n,r,t,i){var a=h(e,t,i);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(n,r)};var p=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var h=function(e,n,r){var t=p(e,n);return r===undefined?t[t.length-1]:t.find((function(e){return e.id===r}))};var m=e("a",(function(e,t,i,a,o){return __awaiter(r,void 0,void 0,(function(){var r,u;return __generator(this,(function(s){switch(s.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();r=e.enterAnimation?e.enterAnimation:n.get(t,e.mode==="ios"?i:a);return[4,_(e,r,e.el,o)];case 1:u=s.sent();if(u){e.didPresent.emit()}return[2]}}))}))}));var y=e("d",(function(e,t,a,o,u,s,c){return __awaiter(r,void 0,void 0,(function(){var r,f;return __generator(this,(function(l){switch(l.label){case 0:if(!e.presented){return[2,false]}e.presented=false;l.label=1;case 1:l.trys.push([1,4,,5]);e.willDismiss.emit({data:t,role:a});r=e.leaveAnimation?e.leaveAnimation:n.get(o,e.mode==="ios"?u:s);if(!(r!==undefined))return[3,3];return[4,_(e,r,e.el,c)];case 2:l.sent();l.label=3;case 3:e.didDismiss.emit({data:t,role:a});i.delete(e);return[3,5];case 4:f=l.sent();console.error(f);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var b=function(e){return e.querySelector("ion-app")||e.body};var _=function(e,t,a,o){return __awaiter(r,void 0,void 0,(function(){var r,u,s;return __generator(this,(function(c){switch(c.label){case 0:a.classList.remove("overlay-hidden");r=a.shadowRoot||e.el;u=t(r,o);if(!e.animated||!n.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=a.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=i.get(e)||[];i.set(e,__spreadArrays(s,[u]));return[4,u.play()];case 1:c.sent();return[2,true]}}))}))};var w=e("e",(function(e,n){var r;var t=new Promise((function(e){return r=e}));g(e,n,(function(e){r(e.detail)}));return t}));var g=function(e,n,r){var t=function(i){e.removeEventListener(n,t);r(i)};e.addEventListener(n,t)};var k=e("i",(function(e){return e==="cancel"||e===D}));var A=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var E=function(e){return e()};var x=e("s",(function(e,r){if(typeof e==="function"){var t=n.get("_zoneGate",E);return t((function(){try{return e(r)}catch(n){console.error(n)}}))}return undefined}));var D=e("B","backdrop")}}}));