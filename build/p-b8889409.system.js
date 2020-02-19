var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,r=0,e=arguments.length;r<e;r++)n+=arguments[r].length;for(var t=Array(n),i=0,r=0;r<e;r++)for(var a=arguments[r],f=0,o=a.length;f<o;f++,i++)t[i]=a[f];return t};System.register(["./p-35047b4c.system.js"],(function(n){"use strict";var r;return{setters:[function(n){r=n.r}],execute:function(){var e=function(n){n.forEach((function(n){for(var r in n){if(n.hasOwnProperty(r)){var e=n[r];if(r==="easing"){var i="animation-timing-function";n[i]=e;delete n[r]}else{var i=t(r);if(i!==r){n[i]=e;delete n[r]}}}}}));return n};var t=function(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()};var i;var a=function(n){if(i===undefined){var r=n.style.animationName!==undefined;var e=n.style.webkitAnimationName!==undefined;i=!r&&e?"-webkit-":""}return i};var f=function(n,r,e){var t=r.startsWith("animation")?a(n):"";n.style.setProperty(t+r,e)};var o=function(n,r){var e=r.startsWith("animation")?a(n):"";n.style.removeProperty(e+r)};var u=function(n,r){var e;var t={passive:true};var i=function(){if(e){e()}};var a=function(e){if(n===e.target){i();r(e)}};if(n){n.addEventListener("webkitAnimationEnd",a,t);n.addEventListener("animationend",a,t);e=function(){n.removeEventListener("webkitAnimationEnd",a,t);n.removeEventListener("animationend",a,t)}}return i};var c=function(n){if(n===void 0){n=[]}return n.map((function(n){var r=n.offset;var e=[];for(var t in n){if(n.hasOwnProperty(t)&&t!=="offset"){e.push(t+": "+n[t]+";")}}return r*100+"% { "+e.join(" ")+" }"})).join(" ")};var v=[];var s=function(n){var r=v.indexOf(n);if(r<0){r=v.push(n)-1}return"ion-animation-"+r};var l=function(n){var r=n.getRootNode();return r.head||r};var d=function(n,r,e){var t=l(e);var i=a(e);var f=t.querySelector("#"+n);if(f){return f}var o=(e.ownerDocument||document).createElement("style");o.id=n;o.textContent="@"+i+"keyframes "+n+" { "+r+" } @"+i+"keyframes "+n+"-alt { "+r+" }";t.appendChild(o);return o};var m=function(n,r){if(n===void 0){n=[]}if(r!==undefined){var e=Array.isArray(r)?r:[r];return __spreadArrays(n,e)}return n};var h=n("c",(function(n){var t;var i;var a;var v;var l;var h;var p=[];var g=[];var y=[];var E=false;var A;var b={};var C=[];var w=[];var S={};var k=0;var T=false;var _=false;var D;var L;var P;var F;var I=true;var N=false;var O=true;var R;var W;var x=n;var j=[];var M=[];var $=[];var q=[];var z=[];var K=[];var Z=[];var B=[];var G=[];var H=[];var J=typeof AnimationEffect==="function"||typeof window.AnimationEffect==="function";var Q=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&J;var U=100;var V=function(){return H};var X=function(){q.forEach((function(n){n.destroy()}));Y();$.length=0;q.length=0;p.length=0;rn();E=false;O=true;return W};var Y=function(){en();tn()};var nn=function(n,r){var e=r&&r.oneTimeCallback?M:j;e.push({c:n,o:r});return W};var rn=function(){j.length=0;M.length=0;return W};var en=function(){if(Q){H.forEach((function(n){n.cancel()}));H.length=0}else{var n=$.slice();r((function(){n.forEach((function(n){o(n,"animation-name");o(n,"animation-duration");o(n,"animation-timing-function");o(n,"animation-iteration-count");o(n,"animation-delay");o(n,"animation-play-state");o(n,"animation-fill-mode");o(n,"animation-direction")}))}))}};var tn=function(){z.forEach((function(n){if(n&&n.parentNode){n.parentNode.removeChild(n)}}));z.length=0};var an=function(n){K.push(n);return W};var fn=function(n){Z.push(n);return W};var on=function(n){B.push(n);return W};var un=function(n){G.push(n);return W};var cn=function(n){g=m(g,n);return W};var vn=function(n){y=m(y,n);return W};var sn=function(n){if(n===void 0){n={}}b=n;return W};var ln=function(n){if(n===void 0){n=[]}for(var r=0,e=n;r<e.length;r++){var t=e[r];b[t]=""}return W};var dn=function(n){C=m(C,n);return W};var mn=function(n){w=m(w,n);return W};var hn=function(n){if(n===void 0){n={}}S=n;return W};var pn=function(n){if(n===void 0){n=[]}for(var r=0,e=n;r<e.length;r++){var t=e[r];S[t]=""}return W};var gn=function(){if(l!==undefined){return l}if(A){return A.getFill()}return"both"};var yn=function(){if(L!==undefined){return L}if(h!==undefined){return h}if(A){return A.getDirection()}return"normal"};var En=function(){if(T){return"linear"}if(a!==undefined){return a}if(A){return A.getEasing()}return"linear"};var An=function(){if(_){return 0}if(P!==undefined){return P}if(i!==undefined){return i}if(A){return A.getDuration()}return 0};var bn=function(){if(v!==undefined){return v}if(A){return A.getIterations()}return 1};var Cn=function(){if(F!==undefined){return F}if(t!==undefined){return t}if(A){return A.getDelay()}return 0};var wn=function(){return p};var Sn=function(n){h=n;Kn(true);return W};var kn=function(n){l=n;Kn(true);return W};var Tn=function(n){t=n;Kn(true);return W};var _n=function(n){a=n;Kn(true);return W};var Dn=function(n){if(!Q&&n===0){n=1}i=n;Kn(true);return W};var Ln=function(n){v=n;Kn(true);return W};var Pn=function(n){A=n;return W};var Fn=function(n){if(n!=null){if(n.nodeType===1){$.push(n)}else if(n.length>=0){for(var r=0;r<n.length;r++){$.push(n[r])}}else{console.error("Invalid addElement value")}}return W};var In=function(n){if(n!=null){if(Array.isArray(n)){for(var r=0,e=n;r<e.length;r++){var t=e[r];t.parent(W);q.push(t)}}else{n.parent(W);q.push(n)}}return W};var Nn=function(n){p=n;return W};var On=function(){K.forEach((function(n){return n()}));Z.forEach((function(n){return n()}));var n=g;var r=y;var e=b;$.forEach((function(t){var i=t.classList;n.forEach((function(n){return i.add(n)}));r.forEach((function(n){return i.remove(n)}));for(var a in e){if(e.hasOwnProperty(a)){f(t,a,e[a])}}}))};var Rn=function(){Un();B.forEach((function(n){return n()}));G.forEach((function(n){return n()}));var n=I?1:0;var r=C;var e=w;var t=S;$.forEach((function(n){var i=n.classList;r.forEach((function(n){return i.add(n)}));e.forEach((function(n){return i.remove(n)}));for(var a in t){if(t.hasOwnProperty(a)){f(n,a,t[a])}}}));j.forEach((function(r){return r.c(n,W)}));M.forEach((function(r){return r.c(n,W)}));M.length=0;O=true;if(I){N=true}I=true};var Wn=function(){if(k===0){return}k--;if(k===0){Rn();if(A){A.animationFinish()}}};var xn=function(t){if(t===void 0){t=true}tn();var i=e(p);$.forEach((function(e){if(i.length>0){var a=c(i);R=n!==undefined?n:s(a);var o=d(R,a,e);z.push(o);f(e,"animation-duration",An()+"ms");f(e,"animation-timing-function",En());f(e,"animation-delay",Cn()+"ms");f(e,"animation-fill-mode",gn());f(e,"animation-direction",yn());var u=bn()===Infinity?"infinite":bn().toString();f(e,"animation-iteration-count",u);f(e,"animation-play-state","paused");if(t){f(e,"animation-name",o.id+"-alt")}r((function(){f(e,"animation-name",o.id||null)}))}}))};var jn=function(){$.forEach((function(n){var r=n.animate(p,{id:x,delay:Cn(),duration:An(),easing:En(),iterations:bn(),fill:gn(),direction:yn()});r.pause();H.push(r)}));if(H.length>0){H[0].onfinish=function(){Wn()}}};var Mn=function(n){if(n===void 0){n=true}On();if(p.length>0){if(Q){jn()}else{xn(n)}}E=true};var $n=function(n){n=Math.min(Math.max(n,0),.9999);if(Q){H.forEach((function(r){r.currentTime=r.effect.getComputedTiming().delay+An()*n;r.pause()}))}else{var r="-"+An()*n+"ms";$.forEach((function(n){if(p.length>0){f(n,"animation-delay",r);f(n,"animation-play-state","paused")}}))}};var qn=function(n){H.forEach((function(n){n.effect.updateTiming({delay:Cn(),duration:An(),easing:En(),iterations:bn(),fill:gn(),direction:yn()})}));if(n!==undefined){$n(n)}};var zn=function(n,e){if(n===void 0){n=true}r((function(){$.forEach((function(t){f(t,"animation-name",R||null);f(t,"animation-duration",An()+"ms");f(t,"animation-timing-function",En());f(t,"animation-delay",e!==undefined?"-"+e*An()+"ms":Cn()+"ms");f(t,"animation-fill-mode",gn()||null);f(t,"animation-direction",yn()||null);var i=bn()===Infinity?"infinite":bn().toString();f(t,"animation-iteration-count",i);if(n){f(t,"animation-name",R+"-alt")}r((function(){f(t,"animation-name",R||null)}))}))}))};var Kn=function(n,r,e){if(n===void 0){n=false}if(r===void 0){r=true}if(n){q.forEach((function(t){t.update(n,r,e)}))}if(Q){qn(e)}else{zn(r,e)}return W};var Zn=function(n,r){if(n===void 0){n=false}q.forEach((function(e){e.progressStart(n,r)}));Hn();T=n;if(!E){Mn()}else{Kn(false,true,r)}return W};var Bn=function(n){q.forEach((function(r){r.progressStep(n)}));$n(n);return W};var Gn=function(n,r,e){T=false;q.forEach((function(t){t.progressEnd(n,r,e)}));if(e!==undefined){P=e}N=false;I=true;if(n===0){L=yn()==="reverse"?"normal":"reverse";if(L==="reverse"){I=false}if(Q){Kn();$n(1-r)}else{F=(1-r)*An()*-1;Kn(false,false)}}else if(n===1){if(Q){Kn();$n(r)}else{F=r*An()*-1;Kn(false,false)}}if(n!==undefined){nn((function(){P=undefined;L=undefined;F=undefined}),{oneTimeCallback:true});if(!A){rr()}}return W};var Hn=function(){if(E){if(Q){H.forEach((function(n){n.pause()}))}else{$.forEach((function(n){f(n,"animation-play-state","paused")}))}}};var Jn=function(){q.forEach((function(n){n.pause()}));Hn();return W};var Qn=function(){D=undefined;Wn()};var Un=function(){if(D){clearTimeout(D)}};var Vn=function(){Un();r((function(){$.forEach((function(n){if(p.length>0){f(n,"animation-play-state","running")}}))}));if(p.length===0||$.length===0){Wn()}else{var n=Cn()||0;var e=An()||0;var t=bn()||1;if(isFinite(t)){D=setTimeout(Qn,n+e*t+U)}u($[0],(function(){Un();r((function(){Xn();r(Wn)}))}))}};var Xn=function(){$.forEach((function(n){o(n,"animation-duration");o(n,"animation-delay");o(n,"animation-play-state")}))};var Yn=function(){H.forEach((function(n){n.play()}));if(p.length===0||$.length===0){Wn()}};var nr=function(){if(Q){$n(0);qn()}else{zn()}};var rr=function(n){return new Promise((function(r){if(n&&n.sync){_=true;nn((function(){return _=false}),{oneTimeCallback:true})}if(!E){Mn()}if(N){nr();N=false}if(O){k=q.length+1;O=false}nn((function(){return r()}),{oneTimeCallback:true});q.forEach((function(n){n.play()}));if(Q){Yn()}else{Vn()}}))};var er=function(){q.forEach((function(n){n.stop()}));if(E){en();E=false}};var tr=function(n,r){var e;var t=p[0];if(t!==undefined&&(t.offset===undefined||t.offset===0)){t[n]=r}else{p=__spreadArrays([(e={offset:0},e[n]=r,e)],p)}return W};var ir=function(n,r){var e;var t=p[p.length-1];if(t!==undefined&&(t.offset===undefined||t.offset===1)){t[n]=r}else{p=__spreadArrays(p,[(e={offset:1},e[n]=r,e)])}return W};var ar=function(n,r,e){return tr(n,r).to(n,e)};return W={parentAnimation:A,elements:$,childAnimations:q,id:x,animationFinish:Wn,from:tr,to:ir,fromTo:ar,parent:Pn,play:rr,pause:Jn,stop:er,destroy:X,keyframes:Nn,addAnimation:In,addElement:Fn,update:Kn,fill:kn,direction:Sn,iterations:Ln,duration:Dn,easing:_n,delay:Tn,getWebAnimations:V,getKeyframes:wn,getFill:gn,getDirection:yn,getDelay:Cn,getIterations:bn,getEasing:En,getDuration:An,afterAddRead:on,afterAddWrite:un,afterClearStyles:pn,afterStyles:hn,afterRemoveClass:mn,afterAddClass:dn,beforeAddRead:an,beforeAddWrite:fn,beforeClearStyles:ln,beforeStyles:sn,beforeRemoveClass:vn,beforeAddClass:cn,onFinish:nn,progressStart:Zn,progressStep:Bn,progressEnd:Gn}}))}}}));