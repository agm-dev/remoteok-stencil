System.register(["./p-d48257cd.system.js","./p-0f7c855e.system.js","./p-5ca1fea7.system.js"],(function(e){"use strict";var n,i,r,s,t,l,c,o,u;return{setters:[function(e){n=e.r;i=e.c;r=e.d;s=e.i;t=e.h;l=e.H;c=e.e},function(e){o=e.s},function(e){u=e.S}],execute:function(){var h=e("ion_refresher_content",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){if(this.pullingIcon===undefined){var e=i(this);var n=this.el.style.webkitOverflowScrolling!==undefined?"lines":"arrow-down";this.pullingIcon=r.get("refreshingIcon",e==="ios"&&s("mobile")?r.get("spinner",n):"circular")}if(this.refreshingSpinner===undefined){var e=i(this);this.refreshingSpinner=r.get("refreshingSpinner",r.get("spinner",e==="ios"?"lines":"circular"))}};e.prototype.render=function(){var e=this.pullingIcon;var n=e!=null&&u[e]!==undefined;var r=i(this);return t(l,{class:r},t("div",{class:"refresher-pulling"},this.pullingIcon&&n&&t("div",{class:"refresher-pulling-icon"},t("div",{class:"spinner-arrow-container"},t("ion-spinner",{name:this.pullingIcon,paused:true}),r==="md"&&this.pullingIcon==="circular"&&t("div",{class:"arrow-container"},t("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!n&&t("div",{class:"refresher-pulling-icon"},t("ion-icon",{icon:this.pullingIcon,lazy:false})),this.pullingText&&t("div",{class:"refresher-pulling-text",innerHTML:o(this.pullingText)})),t("div",{class:"refresher-refreshing"},this.refreshingSpinner&&t("div",{class:"refresher-refreshing-icon"},t("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&t("div",{class:"refresher-refreshing-text",innerHTML:o(this.refreshingText)})))};Object.defineProperty(e.prototype,"el",{get:function(){return c(this)},enumerable:true,configurable:true});return e}())}}}));