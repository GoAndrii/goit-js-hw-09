var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequirea314;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequirea314=n);var r=n("iQIUW");const{delayValue:l,stepValue:a,amountValue:u,formEl:i}={delayValue:document.querySelector("[name='delay']"),stepValue:document.querySelector("[name='step']"),amountValue:document.querySelector("[name='amount']"),formEl:document.querySelector(".form")};function s(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t&&n({position:e,delay:o}),r({position:e,delay:o})}),o)}))}i.addEventListener("submit",(e=>{e.preventDefault();let o=Number(l.value);const t=Number(a.value);for(let e=1;e<=u.value;e++)s(e,o).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=t;i.reset()}));
//# sourceMappingURL=03-promises.261ff0fd.js.map
