System.register(["./p-d48257cd.system.js","./p-259c9482.system.js"],(function(n){"use strict";var t,r,e;return{setters:[function(n){t=n.r;r=n.h},function(n){e=n.S}],execute:function(){var o=n("app_job_card",function(){function n(n){t(this,n)}n.prototype.render=function(){var n=this;var t=this.jobs.find((function(t){return Number(t.id)===Number(n.name)}));return[r("ion-card",null,r("ion-card-header",null,r("ion-card-subtitle",null,t.company),r("ion-card-title",null,t.position)),t.logo.length?r("ion-img",{src:t.logo}):"",r("ion-card-content",null,t.tags.map((function(n){return r("ion-chip",null,n)}))),r("ion-card-content",null,t.description),r("ion-card-content",null,r("ion-button",{href:e+"/"},"Other jobs"),r("ion-button",{href:t.url,color:"success"},"Apply")))]};Object.defineProperty(n,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return n}())}}}));