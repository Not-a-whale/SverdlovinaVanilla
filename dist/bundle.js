!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4)},function(e,t){const n=document.querySelector(".navbar__languages"),r=document.querySelector(".navbar__languages--container"),o=(document.querySelectorAll(".option"),document.querySelectorAll(".flagLabel"));n.addEventListener("click",()=>{r.classList.toggle("option-active"),console.log("flagblock")}),o.forEach(e=>{e.addEventListener("click",()=>{r.classList.toggle("option-active"),console.log("flag")})})},function(e,t){const n=document.querySelector(".navbar"),r=document.querySelector(".navbar__right"),o=document.querySelector(".link"),l=document.querySelector(".link__hamburger--1"),c=document.querySelector(".link__hamburger--2"),i=document.querySelector(".link__hamburger--3");window.addEventListener("scroll",(function(){n.classList.toggle("sticky",window.scrollY>0)})),o.addEventListener("click",(function(){r.classList.toggle("list-active"),o.classList.toggle("link-active"),l.classList.toggle("list-active-plank-1"),c.classList.toggle("list-active-plank-2"),i.classList.toggle("list-active-plank-3")}))},function(e,t){const n=Array.from(document.querySelectorAll(".slider__slide")),r=document.querySelector(".slider"),o=Array.from(document.querySelectorAll(".arrow")),l=Array.from(document.querySelectorAll(".numbers__line")),c=Array.from(document.querySelectorAll(".numbers__number"));function i(){const e=document.querySelector(".active-slide"),t=n.indexOf(e);let r,o;return r=t===n.length-1?n[0]:n[t+1],o=0===t?n[n.length-1]:n[t-1],[r,o]}function s(){const e=document.querySelector(".active-slide"),[t,o]=i(),l=n.indexOf(e),s=n.indexOf(t);r.style.marginLeft=`-${100*s}%`,e.classList.remove("active-slide"),c[l].classList.remove("numbers__number-active"),t.classList.add("active-slide"),c[s].classList.add("numbers__number-active")}o.forEach(e=>{e.addEventListener("click",()=>{e.classList.contains("arrow__right")?s():e.classList.contains("arrow__left")&&function(){const e=document.querySelector(".active-slide"),[t,o]=i(),l=n.indexOf(e),s=n.indexOf(o),a=n.indexOf(t);console.log("something"),r.style.marginLeft=100*a+"%",o.classList.remove("active-slide"),c[l].classList.remove("numbers__number-active"),o.classList.add("active-slide"),c[s].classList.add("numbers__number-active")}()})}),window.addEventListener("DOMContentLoaded",()=>{l.forEach(e=>{e.style.width="0px"}),setInterval(()=>{s()},4e3)})},function(e,t,n){}]);