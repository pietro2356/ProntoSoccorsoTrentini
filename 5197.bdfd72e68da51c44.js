"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5197],{5197:(K,k,a)=>{a.r(k),a.d(k,{ion_refresher:()=>H,ion_refresher_content:()=>U});var p=a(467),i=a(8393),C=a(3351),b=a(909),h=a(4920),E=a(1086),d=a(4921),u=a(9986),w=a(464),S=a(3992),_=a(7895);a(8438),a(8476);const R=s=>{const e=s.querySelector("ion-spinner"),t=e.shadowRoot.querySelector("circle"),r=s.querySelector(".spinner-arrow-container"),n=s.querySelector(".arrow-container"),f=n?n.querySelector("ion-icon"):null,l=(0,u.c)().duration(1e3).easing("ease-out"),c=(0,u.c)().addElement(r).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),o=(0,u.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),g=(0,u.c)().addElement(e).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(n&&f){const m=(0,u.c)().addElement(n).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),v=(0,u.c)().addElement(f).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);l.addAnimation([m,v])}return l.addAnimation([c,o,g])},x=(s,e,t=200)=>{if(!s)return Promise.resolve();const r=(0,h.t)(s,t);return(0,i.w)(()=>{s.style.setProperty("transition",`${t}ms all ease-out`),void 0===e?s.style.removeProperty("transform"):s.style.setProperty("transform",`translate3d(0px, ${e}, 0px)`)}),r},P=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),T=function(){var s=(0,p.A)(function*(e,t){const r=e.querySelector("ion-refresher-content");if(!r)return Promise.resolve(!1);yield new Promise(l=>(0,h.c)(r,l));const n=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),f=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==n&&null!==f&&("ios"===t&&P()||"md"===t)});return function(t,r){return s.apply(this,arguments)}}(),H=(()=>{let s=class{constructor(e){(0,i.r)(this,e),this.ionRefresh=(0,i.d)(this,"ionRefresh",7),this.ionPull=(0,i.d)(this,"ionPull",7),this.ionStart=(0,i.d)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.contentFullscreen=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){var e=this;return(0,p.A)(function*(){const t=yield T(e.el,(0,d.b)(e));if(t&&!e.nativeRefresher){const r=e.el.closest("ion-content");e.setupNativeRefresher(r)}else t||e.destroyNativeRefresher()})()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,t){var r=this;return(0,p.A)(function*(){r.state=t,"ios"===(0,d.b)(r)?yield x(e,void 0,300):yield(0,h.t)(r.el.querySelector(".refresher-refreshing-icon"),200),r.didRefresh=!1,r.needsCompletion=!1,r.pointerDown=!1,r.animations.forEach(n=>n.destroy()),r.animations=[],r.progress=0,r.state=1})()}setupiOSNativeRefresher(e,t){var r=this;return(0,p.A)(function*(){r.elementToTransform=r.scrollEl;const n=e.shadowRoot.querySelectorAll("svg");let f=.16*r.scrollEl.clientHeight;const l=n.length;(0,i.w)(()=>n.forEach(c=>c.style.setProperty("animation","none"))),r.scrollListenerCallback=()=>{!r.pointerDown&&1===r.state||(0,i.e)(()=>{const c=r.scrollEl.scrollTop,o=r.el.clientHeight;if(c>0){if(8===r.state){const y=(0,h.j)(0,c/(.5*o),1);return void(0,i.w)(()=>((s,e)=>{s.style.setProperty("opacity",e.toString())})(t,1-y))}return}r.pointerDown&&(r.didStart||(r.didStart=!0,r.ionStart.emit()),r.pointerDown&&r.ionPull.emit());const g=r.didStart?30:0,m=r.progress=(0,h.j)(0,(Math.abs(c)-g)/f,1);8===r.state||1===m?(r.pointerDown&&((s,e)=>{(0,i.w)(()=>{s.style.setProperty("--refreshing-rotation-duration",e>=1?"0.5s":"2s"),s.style.setProperty("opacity","1")})})(t,r.lastVelocityY),r.didRefresh||(r.beginRefresh(),r.didRefresh=!0,(0,E.d)({style:E.I.Light}),r.pointerDown||x(r.elementToTransform,`${o}px`))):(r.state=2,((s,e,t)=>{(0,i.w)(()=>{s.forEach((n,f)=>{const l=f*(1/e),g=(0,h.j)(0,(t-l)/(1-l),1);n.style.setProperty("opacity",g.toString())})})})(n,l,m))})},r.scrollEl.addEventListener("scroll",r.scrollListenerCallback),r.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:r.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{r.pointerDown=!0,r.didRefresh||x(r.elementToTransform,"0px"),0===f&&(f=.16*r.scrollEl.clientHeight)},onMove:c=>{r.lastVelocityY=c.velocityY},onEnd:()=>{r.pointerDown=!1,r.didStart=!1,r.needsCompletion?(r.resetNativeRefresher(r.elementToTransform,32),r.needsCompletion=!1):r.didRefresh&&(0,i.e)(()=>x(r.elementToTransform,`${r.el.clientHeight}px`))}}),r.disabledChanged()})()}setupMDNativeRefresher(e,t,r){var n=this;return(0,p.A)(function*(){const f=(0,h.g)(t).querySelector("circle"),l=n.el.querySelector("ion-refresher-content .refresher-pulling-icon"),c=(0,h.g)(r).querySelector("circle");null!==f&&null!==c&&(0,i.w)(()=>{f.style.setProperty("animation","none"),r.style.setProperty("animation-delay","-655ms"),c.style.setProperty("animation-delay","-655ms")}),n.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:n.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==n.state&&32!==n.state&&0===n.scrollEl.scrollTop,onStart:o=>{n.progress=0,o.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:o=>{if(o.velocityY<0&&0===n.progress&&!o.data.didStart||o.data.cancelled)o.data.cancelled=!0;else{if(!o.data.didStart){o.data.didStart=!0,n.state=2;const{scrollEl:g}=n,m=g.matches(b.I)?"overflow":"--overflow";(0,i.w)(()=>g.style.setProperty(m,"hidden"));const v=(s=>{const e=s.previousElementSibling;return null!==e&&"ION-HEADER"===e.tagName?"translate":"scale"})(e),y=((s,e,t)=>"scale"===s?((s,e)=>{const t=e.clientHeight,r=(0,u.c)().addElement(s).keyframes([{offset:0,transform:`scale(0) translateY(-${t}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return R(s).addAnimation([r])})(e,t):((s,e)=>{const t=e.clientHeight,r=(0,u.c)().addElement(s).keyframes([{offset:0,transform:`translateY(-${t}px)`},{offset:1,transform:"translateY(100px)"}]);return R(s).addAnimation([r])})(e,t))(v,l,n.el);return o.data.animation=y,y.progressStart(!1,0),n.ionStart.emit(),void n.animations.push(y)}n.progress=(0,h.j)(0,o.deltaY/180*.5,1),o.data.animation.progressStep(n.progress),n.ionPull.emit()}},onEnd:o=>{if(!o.data.didStart)return;n.gesture.enable(!1);const{scrollEl:g}=n,m=g.matches(b.I)?"overflow":"--overflow";if((0,i.w)(()=>g.style.removeProperty(m)),n.progress<=.4)return void o.data.animation.progressEnd(0,n.progress,500).onFinish(()=>{n.animations.forEach(W=>W.destroy()),n.animations=[],n.gesture.enable(!0),n.state=1});const v=(0,C.g)([0,0],[0,0],[1,1],[1,1],n.progress)[0],y=(s=>(0,u.c)().duration(125).addElement(s).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(l);n.animations.push(y),(0,i.w)((0,p.A)(function*(){l.style.setProperty("--ion-pulling-refresher-translate",100*v+"px"),o.data.animation.progressEnd(),yield y.play(),n.beginRefresh(),o.data.animation.destroy(),n.gesture.enable(!0)}))}}),n.disabledChanged()})()}setupNativeRefresher(e){var t=this;return(0,p.A)(function*(){if(t.scrollListenerCallback||!e||t.nativeRefresher||!t.scrollEl)return;t.setCss(0,"",!1,""),t.nativeRefresher=!0;const r=t.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=t.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,d.b)(t)?t.setupiOSNativeRefresher(r,n):t.setupMDNativeRefresher(e,r,n)})()}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){var e=this;return(0,p.A)(function*(){if("fixed"!==e.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const t=e.el.closest(b.b);t?(0,h.c)(t,(0,p.A)(function*(){const r=t.querySelector(b.I);e.scrollEl=yield(0,b.g)(null!=r?r:t),e.backgroundContentEl=yield t.getBackgroundElement(),e.contentFullscreen=t.fullscreen,(yield T(e.el,(0,d.b)(e)))?e.setupNativeRefresher(t):(e.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:t,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>e.canStart(),onStart:()=>e.onStart(),onMove:n=>e.onMove(n),onEnd:()=>e.onEnd()}),e.disabledChanged())})):(0,b.p)(e.el)})()}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){var e=this;return(0,p.A)(function*(){e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,32)))):e.close(32,"120ms")})()}cancel(){var e=this;return(0,p.A)(function*(){e.nativeRefresher?e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,16))):e.close(16,"")})()}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1,this.memoizeOverflowStyle(),this.contentFullscreen&&this.backgroundContentEl&&this.backgroundContentEl.style.setProperty("--offset-top","0px")}onMove(e){if(!this.scrollEl)return;const t=e.event;if(void 0!==t.touches&&t.touches.length>1||56&this.state)return;const r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*r;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(t.cancelable&&t.preventDefault(),this.setCss(n,"0ms",!0,""),0===n)return void(this.progress=0);const f=this.pullMin;this.progress=n/f,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<f?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state?this.cancel():1===this.state&&this.restoreOverflowStyle()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,t){setTimeout(()=>{var r;this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"",!0),this.contentFullscreen&&this.backgroundContentEl&&(null===(r=this.backgroundContentEl)||void 0===r||r.style.removeProperty("--offset-top"))},600),this.state=e,this.setCss(0,this.closeDuration,!0,t)}setCss(e,t,r,n,f=!1){this.nativeRefresher||(this.appliedStyles=e>0,(0,i.w)(()=>{if(this.scrollEl&&this.backgroundContentEl){const l=this.scrollEl.style,c=this.backgroundContentEl.style;l.transform=c.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",l.transitionDuration=c.transitionDuration=t,l.transitionDelay=c.transitionDelay=n,l.overflow=r?"hidden":""}f&&this.restoreOverflowStyle()}))}memoizeOverflowStyle(){if(this.scrollEl){const{overflow:e,overflowX:t,overflowY:r}=this.scrollEl.style;this.overflowStyles={overflow:null!=e?e:"",overflowX:null!=t?t:"",overflowY:null!=r?r:""}}}restoreOverflowStyle(){if(void 0!==this.overflowStyles&&void 0!==this.scrollEl){const{overflow:e,overflowX:t,overflowY:r}=this.overflowStyles;this.scrollEl.style.overflow=e,this.scrollEl.style.overflowX=t,this.scrollEl.style.overflowY=r,this.overflowStyles=void 0}}render(){const e=(0,d.b)(this);return(0,i.h)(i.f,{key:"3270f181a5141e7d886ec554a3e892974446b90e",slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,i.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};return s.style={ios:"ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}"},s})(),U=class{constructor(s){(0,i.r)(this,s),this.customHTMLEnabled=d.c.get("innerHTMLTemplatesEnabled",w.E),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(void 0===this.pullingIcon){const s=P(),e=(0,d.b)(this);this.pullingIcon=d.c.get("refreshingIcon","ios"===e&&s?d.c.get("spinner",s?"lines":S.i):"circular")}if(void 0===this.refreshingSpinner){const s=(0,d.b)(this);this.refreshingSpinner=d.c.get("refreshingSpinner",d.c.get("spinner","ios"===s?"lines":"circular"))}}renderPullingText(){const{customHTMLEnabled:s,pullingText:e}=this;return s?(0,i.h)("div",{class:"refresher-pulling-text",innerHTML:(0,w.a)(e)}):(0,i.h)("div",{class:"refresher-pulling-text"},e)}renderRefreshingText(){const{customHTMLEnabled:s,refreshingText:e}=this;return s?(0,i.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,w.a)(e)}):(0,i.h)("div",{class:"refresher-refreshing-text"},e)}render(){const s=this.pullingIcon,e=null!=s&&void 0!==_.S[s],t=(0,d.b)(this);return(0,i.h)(i.f,{key:"1bec5b4da221c69d856f3f5ddf40f2e03ebf2a4c",class:t},(0,i.h)("div",{key:"4fcc526c4f1881e9368d9cd16bd7030919bd3841",class:"refresher-pulling"},this.pullingIcon&&e&&(0,i.h)("div",{key:"a4e9e2e12c2d7faefc8303ec8c021f999ddf308e",class:"refresher-pulling-icon"},(0,i.h)("div",{key:"5a2d215feb7fb4b64d540d3a65c0f24b415a2433",class:"spinner-arrow-container"},(0,i.h)("ion-spinner",{key:"abef2621d671ac6ff0abac43a702cbd825b7f127",name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,i.h)("div",{key:"30087d672c3780672a05874cd93cd099b2855462",class:"arrow-container"},(0,i.h)("ion-icon",{key:"5e30333dee469aec0d8efc8c4e6dabb619c6f363",icon:S.h,"aria-hidden":"true"})))),this.pullingIcon&&!e&&(0,i.h)("div",{key:"48fe72b5ce8ded633c6ee799cebb520b9c8be528",class:"refresher-pulling-icon"},(0,i.h)("ion-icon",{key:"d8dfd5d42056b1c0a436c5006affb255407816c0",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),void 0!==this.pullingText&&this.renderPullingText()),(0,i.h)("div",{key:"c2cbfb94f157c82601ffe7bb815ff82ebc7c0a49",class:"refresher-refreshing"},this.refreshingSpinner&&(0,i.h)("div",{key:"17f3ebe6a31768d5e389f45a2c12f68600185db9",class:"refresher-refreshing-icon"},(0,i.h)("ion-spinner",{key:"e8e61f8d7189c9939bba184201c9509d1d5b0fad",name:this.refreshingSpinner})),void 0!==this.refreshingText&&this.renderRefreshingText()))}get el(){return(0,i.i)(this)}}}}]);