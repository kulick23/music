(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const u="/simo/assets/logo.svg",h=()=>{const o=document.createElement("header");o.classList.add("header");const e=document.createElement("img");e.classList.add("header__logo"),e.src=u,e.alt="Logo";const i=document.createElement("ul");i.classList.add("header__links");const c=document.createElement("li");c.textContent="Simo";const t=document.createElement("li");t.classList.add("header__li");const n=document.createElement("a");n.href="#",n.textContent="Discover",t.appendChild(n);const s=document.createElement("li");s.classList.add("header__li");const d=document.createElement("a");d.href="#",d.textContent="Join",s.appendChild(d);const a=document.createElement("li");a.classList.add("header__li");const l=document.createElement("a");return l.href="#",l.textContent="Sign In",a.appendChild(l),i.appendChild(c),i.appendChild(t),i.appendChild(s),i.appendChild(a),o.appendChild(e),o.appendChild(i),{header:o,discovera:n,joina:d,signupa:l}};const C=()=>{const o=document.createElement("div");o.classList.add("join");const e=document.createElement("h1");e.textContent="Feel the music";const i=document.createElement("p");i.textContent="Stream over 10 million songs with one click";const c=document.createElement("button");return c.classList.add("join__button--size"),c.textContent="Join Now",o.appendChild(e),o.appendChild(i),o.appendChild(c),o};const g="/simo/assets/music-titles.png",f=()=>{const o=document.createElement("div");o.classList.add("discover");const e=document.createElement("div");e.classList.add("discoverblock");const i=document.createElement("h1");i.textContent="Discover new music";const c=document.createElement("div");c.classList.add("discover__button");const t=document.createElement("button");t.textContent="Charts";const n=document.createElement("button");n.textContent="Songs";const s=document.createElement("button");s.textContent="Artists",c.appendChild(t),c.appendChild(n),c.appendChild(s);const d=document.createElement("p");d.textContent="Stream over 10 million songs with one click",e.appendChild(i),e.appendChild(c),e.appendChild(d);const a=document.createElement("img");return a.classList.add("discover__img"),a.src=g,a.alt="Music",o.appendChild(e),o.appendChild(a),o};const E=()=>{const o=document.createElement("div");o.classList.add("sign");const e=document.createElement("div");e.classList.add("sign__box");const i=document.createElement("p");i.classList.add("sign__text"),i.textContent="Name:";const c=document.createElement("input");c.classList.add("sign__input");const t=document.createElement("p");t.classList.add("sign__text"),t.textContent="Password:";const n=document.createElement("input");n.classList.add("sign__input");const s=document.createElement("p");s.classList.add("sign__text"),s.textContent="e-mail:";const d=document.createElement("input");d.classList.add("sign__input");const a=document.createElement("button");return a.textContent="Join now",e.appendChild(i),e.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(d),o.appendChild(e),o.appendChild(a),o},L="/simo/assets/background-page-landing.png",v="/simo/assets/background-page-sign-up.png",_=C(),x=f(),b=E(),k=(o,e,i)=>{function c(d){s.innerHTML="",n=d}function t(){s.innerHTML="";var d=document.documentElement;n==="discover"?(s.appendChild(x),d.style.backgroundImage="none"):n==="join"?(s.appendChild(_),d.style.backgroundImage=`url(${L})`):n==="sign"&&(s.appendChild(b),d.style.backgroundImage=`url(${v})`);const a=document.createElement("p");a.classList.add("content__text"),a.textContent="Wlodzimierz Simon © 2022",s.appendChild(a)}let n="discover";o.addEventListener("click",function(){c("discover"),console.log(n),t()}),e.addEventListener("click",function(){c("join"),console.log(n),t()}),i.addEventListener("click",function(){c("sign"),console.log(n),t()});const s=document.createElement("div");return s.classList.add("content"),t(),s};const y=()=>{const o=document.createElement("footer");o.classList.add("footer");const e=document.createElement("ul");e.classList.add("footer__links");const i=document.createElement("li"),c=document.createElement("a");c.href="#",c.textContent="About us",i.appendChild(c);const t=document.createElement("li"),n=document.createElement("a");n.href="#",n.textContent="Contact",t.appendChild(n);const s=document.createElement("li"),d=document.createElement("a");d.href="#",d.textContent="Cr Info",s.appendChild(d);const a=document.createElement("li"),l=document.createElement("a");l.href="#",l.textContent="Twitter",a.appendChild(l);const p=document.createElement("li"),r=document.createElement("a");return r.href="#",r.textContent="Facebook",p.appendChild(r),e.appendChild(i),e.appendChild(t),e.appendChild(s),e.appendChild(a),e.appendChild(p),o.appendChild(e),o},m=document.querySelector("body"),{header:j,discovera:w,joina:I,signupa:S}=h(),$=k(w,I,S),M=y();m.appendChild(j);m.appendChild($);m.appendChild(M);