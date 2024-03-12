jQuery(document).ready(function(e){var n=e(".eael-content-timeline-block");function t(n,t){n.each(function(){e(this).offset().top<=e(window).scrollTop()+e(window).height()*t&&e(this).find(".eael-content-timeline-img").hasClass("is-hidden")&&e(this).find(".eael-content-timeline-img, .eael-content-timeline-content").removeClass("is-hidden").addClass("")})}!function(n,t){n.each(function(){e(this).offset().top>e(window).scrollTop()+e(window).height()*t&&e(this).find(".eael-content-timeline-img, .eael-content-timeline-content").addClass("is-hidden")})}(n,.8),e(window).on("scroll",function(){window.requestAnimationFrame?window.requestAnimationFrame(function(){t(n,.8)}):setTimeout(function(){t(n,.8)},100)});var i,o,l=(i=document.documentElement,o=i.clientHeight,function(e,n){var t,l=[];for(e&&"resize"==e.type&&(o=i.clientHeight),t=n.elements.length;t--;){var s=n.elements[t],c=s.getBoundingClientRect(),d=(c.top/o*100+c.bottom/o*100)/2,a=d>n.zone[1]&&d<100-n.zone[1];s.classList.toggle(n.markedClass,a),a&&l.push(s)}});function s(e){l(e,{elements:document.querySelectorAll(".eael-content-timeline-block"),markedClass:"eael-highlight",zone:[15,15]})}window.addEventListener("scroll",s),window.addEventListener("resize",s)});!function(e){var t={};function i(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}({5:function(e,t){var i=function(e,t){e.find(".eael-timeline");var i,n,l,o,a,r,s,d,c=e.find(".horizontal-timeline-wrapper"),h=e.find(".eael-horizontal-timeline-track"),f=e.find(".eael-next-arrow"),m=e.find(".eael-prev-arrow"),u=e.find(".eael-arrow"),v=e.find(".eael-horizontal-timeline-list--middle .eael-horizontal-timeline-item").length,p=0,g=0,b={desktop:100/3,tablet:100/3,mobile:100/3},w={desktop:Math.max(0,v-3),tablet:Math.max(0,v-3),mobile:Math.max(0,v-3)},C=elementorFrontend.getCurrentDeviceMode(),x=c.data("slide_to_scroll"),_={desktop:3,tablet:3,mobile:3},k=t(".eael-content-timeline-block"),y=e.find(".eael-horizontal-timeline-track").length,z=t(".eael-content-timeline-container",e).width(),M=t(".eael-content-timeline-container",e).offset().left;if(y&&t(".eael-horizontal-timeline-track",e).on("scroll",(function(i){var n=i.currentTarget.scrollLeft;t(".eael-horizontal-timeline-item",e).each((function(){var e=t(this).offset().left;e>-50&&e<M+z+n-100?t(this).addClass("is-active"):t(this).hasClass("is-active")&&t(this).removeClass("is-active")}))})),t(window).on("scroll",(function(){k.each((function(){if(t(this).find(".eael-highlight")){var e=.15*k.height()+window.innerHeight/2,i=t(this).offset().top,n=window.scrollY+1.3*e-i;t(this).find(".eael-content-timeline-inner").css("height",n+"px")}})),this.oldScroll>this.scrollY==0?(this.oldScroll=this.scrollY,t(".eael-content-timeline-block.eael-highlight").prev().find(".eael-content-timeline-inner").removeClass("eael-muted").addClass("eael-highlighted")):this.oldScroll>this.scrollY==1&&(this.oldScroll=this.scrollY,t(".eael-content-timeline-block.eael-highlight").find(".eael-content-timeline-inner").addClass("eael-prev-highlighted"),t(".eael-content-timeline-block.eael-highlight").next().find(".eael-content-timeline-inner").removeClass("eael-highlighted").removeClass("eael-prev-highlighted").addClass("eael-muted"))})),l=e.find(".eael-horizontal-timeline__line"),o=e.find(".eael-horizontal-timeline-item__point-content:first"),a=e.find(".eael-horizontal-timeline-item__point-content:last"),r=(null===(i=o.position())||void 0===i?void 0:i.left)+parseInt(o.css("marginLeft")),s=(null===(n=a.position())||void 0===n?void 0:n.left)+parseInt(a.css("marginLeft")),d=o.outerWidth(),r&&s&&d&&l.css({left:"45px",width:Math.abs(s-r)}),f[0]&&0===w[C]&&f.addClass("eael-arrow-disabled"),u[0]){var S=void 0!==x[C]?parseInt(x[C]):1;u.on("click",(function(i){var n=t(this),l=elementorFrontend.getCurrentDeviceMode(),o=n.hasClass("eael-next-arrow")?"next":"prev";S>_[l]&&(S=_[l]),"next"===o&&g<w[l]&&(g+=S)>w[l]&&(g=w[l]),"prev"===o&&g>0&&(g-=S)<0&&(g=0),g>0?m.removeClass("eael-arrow-disabled"):m.addClass("eael-arrow-disabled"),g===w[l]?f.addClass("eaek-arrow-disabled"):f.removeClass("eaek-arrow-disabled"),p=0===g?0:g*b[l],h.css({transform:"translateX("+-1*p+"%)"}),t(".eael-horizontal-timeline-item",e).each((function(){t(this).offset().left<M+z?t(this).addClass("is-active"):t(this).hasClass("is-active")&&t(this).removeClass("is-active")}))}))}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-content-timeline.default",i)}))}});