(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98a8d048"],{"0a6e":function(t,e,n){},2381:function(t,e,n){},"3b42":function(t,e,n){},"4d75":function(t,e,n){},"75f4":function(t,e,n){"use strict";var i=n("cc2c"),o=n.n(i);o.a},"9b7e":function(t,e,n){},a3e2:function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),a=n("d282"),c=n("ba31"),r=n("b1d2"),s=n("ad06"),l=Object(a["a"])("tag"),u=l[0],d=l[1];function h(t,e,n,i){var a,l,u=e.type,h=e.mark,f=e.plain,b=e.color,p=e.round,v=e.size,m=f?"color":"backgroundColor",g=(a={},a[m]=b,a);e.textColor&&(g.color=e.textColor);var y={mark:h,plain:f,round:p};v&&(y[v]=v);var k=e.closeable&&t(s["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(c["a"])(i,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",o()([{key:"content",style:g,class:[d([y,u]),(l={},l[r["c"]]=f,l)]},Object(c["b"])(i,!0)]),[null==n.default?void 0:n.default(),k])])}h.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(h)},a71a:function(t,e,n){},ade3:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},b258:function(t,e,n){},cc2c:function(t,e,n){},d399:function(t,e,n){"use strict";var i=n("c31d"),o=n("2b0e"),a=n("d282"),c=n("a142"),r=0;function s(t){t?(r||document.body.classList.add("van-toast--unclickable"),r++):(r--,r||document.body.classList.remove("van-toast--unclickable"))}var l={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},u=n("2638"),d=n.n(u),h=n("ba31"),f=n("1325"),b=Object(a["a"])("overlay"),p=b[0],v=b[1];function m(t){Object(f["c"])(t,!0)}function g(t,e,n,o){var a=Object(i["a"])({zIndex:e.zIndex},e.customStyle);return Object(c["b"])(e.duration)&&(a.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",d()([{directives:[{name:"show",value:e.show}],style:a,class:[v(),e.className],on:{touchmove:e.lockScroll?m:c["f"]}},Object(h["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}g.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var y=p(g);function k(t){var e=t.parentNode;e&&e.removeChild(t)}var O={className:"",customStyle:{}};function S(t){return Object(h["c"])(y,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function x(t){var e=l.find(t);if(e){var n=t.$el,o=e.config,a=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(a.$el,n),Object(i["a"])(a,O,o,{show:!0})}}function C(t,e){var n=l.find(t);if(n)n.config=e;else{var i=S(t);l.stack.push({vm:t,config:e,overlay:i})}x(t)}function j(t){var e=l.find(t);e&&(e.overlay.show=!1)}function $(t){var e=l.find(t);e&&k(e.overlay.$el)}var w=/scroll|auto/i;function B(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),o=i.overflowY;if(w.test(o)){if("BODY"!==n.tagName)return n;var a=window.getComputedStyle(n.parentNode),c=a.overflowY;if(w.test(c))return n}n=n.parentNode}return e}var L=n("3875");function T(t){return"string"===typeof t?document.querySelector(t):t()}function z(t){var e=t.ref,n=t.afterPortal;return o["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,i=this.getContainer,o=e?this.$refs[e]:this.$el;i?t=T(i):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),n&&n.call(this)}}})}var N=n("5fbe"),P={mixins:[Object(N["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){var e=this;if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var n=t?f["b"]:f["a"];n(window,"popstate",(function(){e.close(),e.shouldReopen=!1}))}}}},I={value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function D(t){return void 0===t&&(t={}),{mixins:[L["a"],P,z({afterPortal:function(){this.overlay&&x()}})],props:I,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){this.removeLock(),$(this),this.getContainer&&k(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(l.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(f["b"])(document,"touchstart",this.touchStart),Object(f["b"])(document,"touchmove",this.onTouchMove),l.lockCount||document.body.classList.add("van-overflow-hidden"),l.lockCount++)},removeLock:function(){this.lockScroll&&(l.lockCount--,Object(f["a"])(document,"touchstart",this.touchStart),Object(f["a"])(document,"touchmove",this.onTouchMove),l.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(j(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=B(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,a=n.scrollTop,c="11";0===a?c=o>=i?"00":"01":a+o>=i&&(c="10"),"11"===c||"vertical"!==this.direction||parseInt(c,2)&parseInt(e,2)||Object(f["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?C(t,{zIndex:l.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):j(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++l.zIndex+t}}}}var A=n("ad06"),E=n("543e"),_=Object(a["a"])("toast"),G=_[0],M=_[1],R=G({mixins:[D()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,s(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType,a=e||"success"===n||"fail"===n;return a?t(A["a"],{class:M("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(E["a"],{class:M("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(c["b"])(n)&&""!==n)return"html"===e?t("div",{class:M("text"),domProps:{innerHTML:n}}):t("div",{class:M("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[M([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),F={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},H={},Y=[],V=!1,Z=Object(i["a"])({},F);function J(t){return Object(c["d"])(t)?t:{message:t}}function q(){if(c["e"])return{};if(!Y.length||V){var t=new(o["a"].extend(R))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),Y.push(t)}return Y[Y.length-1]}function W(t){return Object(i["a"])(Object(i["a"])({},t),{},{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function K(t){void 0===t&&(t={});var e=q();return e.value&&e.updateZIndex(),t=J(t),t=Object(i["a"])(Object(i["a"])(Object(i["a"])({},Z),H[t.type||Z.type]),t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),V&&!c["e"]&&e.$on("closed",(function(){clearTimeout(e.timer),Y=Y.filter((function(t){return t!==e})),k(e.$el),e.$destroy()}))},Object(i["a"])(e,W(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var Q=function(t){return function(e){return K(Object(i["a"])({type:t},J(e)))}};["loading","success","fail"].forEach((function(t){K[t]=Q(t)})),K.clear=function(t){Y.length&&(t?(Y.forEach((function(t){t.clear()})),Y=[]):V?Y.shift().clear():Y[0].clear())},K.setDefaultOptions=function(t,e){"string"===typeof t?H[t]=e:Object(i["a"])(Z,t)},K.resetDefaultOptions=function(t){"string"===typeof t?H[t]=null:(Z=Object(i["a"])({},F),H={})},K.allowMultiple=function(t){void 0===t&&(t=!0),V=t},K.install=function(){o["a"].use(R)},o["a"].prototype.$toast=K;e["a"]=K},da2a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"购物车","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(e){t.checkedGoods=e},expression:"checkedGoods"}},t._l(t.goods,(function(e){return n("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[n("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)})),1),n("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)},o=[],a=(n("e7e5"),n("d399")),c=n("ade3"),r=(n("68ef"),n("0a6e"),n("d282")),s={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}},l=n("9884"),u=Object(r["a"])("checkbox-group"),d=u[0],h=u[1],f=d({mixins:[Object(l["b"])("vanCheckbox"),s],props:{max:[Number,String],disabled:Boolean,direction:String,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggleAll:function(t){if(!1!==t){var e=this.children;t||(e=e.filter((function(t){return!t.checked})));var n=e.map((function(t){return t.name}));this.$emit("input",n)}else this.$emit("input",[])}},render:function(){var t=arguments[0];return t("div",{class:h([this.direction])},[this.slots()])}}),b=(n("9d70"),n("3743"),n("e3b3"),n("bc1b"),n("3b42"),n("2638")),p=n.n(b),v=n("ba31"),m=n("ad06"),g=n("b650"),y=Object(r["a"])("submit-bar"),k=y[0],O=y[1],S=y[2];function x(t,e,n,i){var o=e.tip,a=e.price,c=e.tipIcon;function r(){if("number"===typeof a){var n=(a/100).toFixed(e.decimalLength).split("."),i=e.decimalLength?"."+n[1]:"";return t("div",{style:{textAlign:e.textAlign?e.textAlign:""},class:O("text")},[t("span",[e.label||S("label")]),t("span",{class:O("price")},[e.currency,t("span",{class:O("price","integer")},[n[0]]),i]),e.suffixLabel&&t("span",{class:O("suffix-label")},[e.suffixLabel])])}}function s(){if(n.tip||o)return t("div",{class:O("tip")},[c&&t(m["a"],{class:O("tip-icon"),attrs:{name:c}}),o&&t("span",{class:O("tip-text")},[o]),n.tip&&n.tip()])}return t("div",p()([{class:O({unfit:!e.safeAreaInsetBottom})},Object(v["b"])(i)]),[n.top&&n.top(),s(),t("div",{class:O("bar")},[n.default&&n.default(),r(),t(g["a"],{attrs:{round:!0,type:e.buttonType,loading:e.loading,disabled:e.disabled,text:e.loading?"":e.buttonText},class:O("button",e.buttonType),on:{click:function(){Object(v["a"])(i,"submit")}}})])])}x.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,suffixLabel:String,safeAreaInsetBottom:{type:Boolean,default:!0},decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}};var C=k(x),j=(n("2381"),n("ea8e")),$=function(t){var e=t.parent,n=t.bem,i=t.role;return{mixins:[Object(l["a"])(e),s],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===i&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,n=t.target,i=this.$refs.icon,o=i===n||i.contains(n);this.isDisabled||!o&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,i=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(j["a"])(i)}},[this.slots("icon",{checked:e})||t(m["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:i,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}},w=Object(r["a"])("checkbox"),B=w[0],L=w[1],T=B({mixins:[$({bem:L,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,n=e.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var i=n.indexOf(this.name);-1!==i&&(n.splice(i,1),e.$emit("input",n))}}}}),z=(n("09fe"),n("9b7e"),n("ea82"),n("a142")),N=n("a3e2"),P=n("44bf"),I=Object(r["a"])("card"),D=I[0],A=I[1];function E(t,e,n,i){var o,a=e.thumb,c=n.num||Object(z["b"])(e.num),r=n.price||Object(z["b"])(e.price),s=n["origin-price"]||Object(z["b"])(e.originPrice),l=c||r||s||n.bottom;function u(t){Object(v["a"])(i,"click-thumb",t)}function d(){if(n.tag||e.tag)return t("div",{class:A("tag")},[n.tag?n.tag():t(N["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function h(){if(n.thumb||a)return t("a",{attrs:{href:e.thumbLink},class:A("thumb"),on:{click:u}},[n.thumb?n.thumb():t(P["a"],{attrs:{src:a,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),d()])}function f(){return n.title?n.title():e.title?t("div",{class:[A("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function b(){return n.desc?n.desc():e.desc?t("div",{class:[A("desc"),"van-ellipsis"]},[e.desc]):void 0}function m(){var n=e.price.toString().split(".");return t("div",[t("span",{class:A("price-currency")},[e.currency]),t("span",{class:A("price-integer")},[n[0]]),".",t("span",{class:A("price-decimal")},[n[1]])])}function g(){if(r)return t("div",{class:A("price")},[n.price?n.price():m()])}function y(){if(s){var i=n["origin-price"];return t("div",{class:A("origin-price")},[i?i():e.currency+" "+e.originPrice])}}function k(){if(c)return t("div",{class:A("num")},[n.num?n.num():"x"+e.num])}function O(){if(n.footer)return t("div",{class:A("footer")},[n.footer()])}return t("div",p()([{class:A()},Object(v["b"])(i,!0)]),[t("div",{class:A("header")},[h(),t("div",{class:A("content",{centered:e.centered})},[t("div",[f(),b(),null==n.tags?void 0:n.tags()]),l&&t("div",{class:"van-card__bottom"},[null==(o=n["price-top"])?void 0:o.call(n),g(),y(),k(),null==n.bottom?void 0:n.bottom()])])]),O()])}E.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}};var _,G=D(E),M={components:(_={},Object(c["a"])(_,G.name,G),Object(c["a"])(_,T.name,T),Object(c["a"])(_,C.name,C),Object(c["a"])(_,f.name,f),_),data:function(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口香蕉",desc:"约250g，2根",price:200,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"2",title:"陕西蜜梨",desc:"约600g",price:690,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"3",title:"美国伽力果",desc:"约680g/3个",price:2680,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"}]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"(".concat(t,")"):"")},totalPrice:function(){var t=this;return this.goods.reduce((function(e,n){return e+(-1!==t.checkedGoods.indexOf(n.id)?n.price:0)}),0)}},methods:{onClickLeft:function(){this.$router.back()},formatPrice:function(t){return(t/100).toFixed(2)},onSubmit:function(){Object(a["a"])("点击结算")}}},R=M,F=(n("75f4"),n("2877")),H=Object(F["a"])(R,i,o,!1,null,null,null);e["default"]=H.exports},e7e5:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("b258")},ea82:function(t,e,n){}}]);
//# sourceMappingURL=chunk-98a8d048.9385456d.js.map