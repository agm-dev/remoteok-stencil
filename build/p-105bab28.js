const t=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;const o=[],r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){o.push({priority:t,handler:n})}}});if(t.dispatchEvent(r),o.length>0){let t,r=Number.MIN_SAFE_INTEGER;o.forEach(({priority:n,handler:e})=>{n>=r&&(r=n,t=e)}),e=!0,n(t).then(()=>e=!1)}})},n=async t=>{try{if(t){const n=t();null!=n&&await n}}catch(n){console.error(n)}};export{t as startHardwareBackButton};