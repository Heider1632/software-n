(function(t){function a(a){for(var i,s,o=a[0],c=a[1],l=a[2],u=0,m=[];u<o.length;u++)s=o[u],n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(i=!1)}i&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var i={},n={app:0},r=[];function s(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)s.d(e,i,function(a){return t[a]}.bind(null,i));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var i=e("c21b"),n=e.n(i);n.a},"0f4d":function(t,a,e){},"1a65":function(t,a,e){"use strict";var i=e("acf0"),n=e.n(i);n.a},"1a8a":function(t,a,e){"use strict";var i=e("b054"),n=e.n(i);n.a},"2f25":function(t,a,e){"use strict";var i=e("644d"),n=e.n(i);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("navbar"),e("router-view"),e("vue-progress-bar")],1)},r=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("nav",[e("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"nav"}}),t._m(0),t._m(1),e("div",{staticClass:"nav-wrapper"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),e("li",[e("router-link",{attrs:{to:"/acerca"}},[t._v("Acerca")])],1),e("li",[e("a",{attrs:{href:""},on:{click:function(a){t.atras()}}},[t._v("Atras")])])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"nav-btn",attrs:{for:"nav"}},[e("i"),e("i"),e("i")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"#"}},[t._v("DiverSan")])])}],c={methods:{atras:function(){this.$router.go(-1)}}},l=c,d=(e("1a8a"),e("2877")),u=Object(d["a"])(l,s,o,!1,null,null,null);u.options.__file="navbar.vue";var m=u.exports,f={name:"app",components:{navbar:m},mounted:function(){this.$Progress.finish()},created:function(){var t=this;this.$Progress.start(),this.$router.beforeEach(function(a,e,i){if(void 0!==a.meta.progress){var n=a.meta.progress;t.$Progress.parseMeta(n)}t.$Progress.start(),i()}),this.$router.afterEach(function(a,e){t.$Progress.finish()})}},p=f,v=(e("034f"),Object(d["a"])(p,n,r,!1,null,null,null));v.options.__file="App.vue";var g=v.exports,h=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"container-fluid wrapper"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"main col-lg-12 col-md-12 col-sm-12"},[e("div",{staticClass:"iteraction"},[e("div",{staticClass:"nutricion"},[e("h1",[e("router-link",{attrs:{to:"/inicionutricion"}},[t._v("INICIO")])],1)])])])])]),e("audio",{attrs:{src:"../avicii-heybrother.mp3",autoplay:""}})])},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[e("div",{staticClass:"centrador"})])}],C={name:"home"},y=C,k=(e("7f41"),Object(d["a"])(y,b,_,!1,null,"0b8fe038",null));k.options.__file="home.vue";var x=k.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"container"},[e("div",{staticClass:"row bg-g"},[e("div",{staticClass:"col-lg-8 col-sm-7"},[e("div",{staticClass:"alert sm-1"},[e("router-link",{staticClass:"alert-link",attrs:{to:"/conceptonutricion"}},[t._v("Conceptos")])],1)]),t._m(0)]),e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col-lg-8 col-sm-7"},[e("div",{staticClass:"alert sm-2",attrs:{role:"alert"}},[e("router-link",{staticClass:"alert-link",attrs:{to:"/comidanutricion"}},[t._v("Piramide Alimenticia")])],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-sm-7"},[e("div",{staticClass:"alert sm-3",attrs:{role:"alert"}},[e("router-link",{staticClass:"alert-link",attrs:{to:"/tipsnutricion"}},[t._v("Dieta Nutrición")])],1)]),t._m(2)]),e("div",{staticClass:"row"},[t._m(3),e("div",{staticClass:"col-lg-8 col-sm-7"},[e("div",{staticClass:"alert sm-4",attrs:{role:"alert"}},[e("router-link",{staticClass:"alert-link",attrs:{to:"/juegonutricion"}},[t._v("Juega")])],1)])])])])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 col-sm-5"},[e("img",{attrs:{src:"",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 col-sm-5"},[e("img",{attrs:{src:"",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 col-sm-5"},[e("img",{attrs:{src:"",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 col-sm-5"},[e("img",{attrs:{src:"",alt:""}})])}],w={name:"homenutricion"},j=w,E=(e("1a65"),Object(d["a"])(j,$,O,!1,null,null,null));E.options.__file="home-n.vue";var q=E.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row bg-g"},[e("div",{staticClass:"col-lg-6 col-sm-6 bg-nu"},[e("h3",[t._v("Nutrición:")]),e("p",{staticClass:"lead text-justify"},[t._v("\n                La nutrición es un proceso que tu cuerpo realiza diariamente.\n                A través de éste, él toma de los alimentos que consumes, unas sustancias muy necesarias llamadas nutrientes, las absorve, las transforma y las utiliza para brindarte energía, formar o reparar tus organos y tejidos, regular otros procesos en tu organismo y hasta prevenir o combatir enfermedades.\n            ")]),e("h3",[t._v("Alimentación:")]),e("p",{staticClass:"lead text-justify"},[t._v("\n                Cuando tomas un producto y lo ingieres para adquirir de este energía y nutrientes, estás realizando el proceso de alimentación.\n                Alimentarse bien es uno de los caminos más importantes para proteger tu salud.\n                Así es, muchas enfermedades dañan tu organismo debido a que no te alimentas correctamente, ¡y por eso es muy importante que aprendas a elegir las sustancias que consumes a diario!\n            ")])]),e("div",{staticClass:"col-lg-5 col-sm-4"},[e("div",{staticClass:"doc"})])])])}],A=(e("8338"),{}),I=Object(d["a"])(A,P,N,!1,null,null,null);I.options.__file="concept-n.vue";var S=I.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"bg-p"},[e("h1",{attrs:{align:"center"}},[t._v("Piramide Alimenticia\n            "),e("span",[e("b-btn",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Haz click sobre cualquier nivel de la piramide",expression:"'Haz click sobre cualquier nivel de la piramide'",modifiers:{hover:!0}}],attrs:{title:"Importante"}},[t._v("\n                    Ayuda\n                ")])],1)]),e("p",{staticClass:"lead",attrs:{align:"center"}},[t._v("\n            Para que tu alimentación sea correcta, es importante que incluya alimentos variados y en las cantidades adecuadas.\n            La pirámide alimenticia te ayuda a identificar con facilidad cuáles alimentos son necesarios y qué cantidad debes consumir en una dieta balanceada. Para esto, se divide en varios grupos:\n        ")])]),e("div",{staticClass:"row bg-a"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"l1",on:{click:function(a){t.click()}}}),e("div",{staticClass:"l2",on:{click:function(a){t.click()}}}),e("div",{staticClass:"l3",on:{click:function(a){t.click()}}}),e("div",{staticClass:"l4",on:{click:function(a){t.click()}}}),e("div",{staticClass:"l5",on:{click:function(a){t.click()}}}),e("div",{staticClass:"l6",on:{click:function(a){t.click()}}})]),e("div",{staticClass:"col-lg-4",class:[t.activeClass]},[e("p",{staticClass:"lead text-box",attrs:{id:"text-box"},on:{click:function(a){t.hidden()}}},[t._v("\n                "+t._s(t.info)+"\n            ")])])])])},z=[],M={data:function(){return{activeClass:"active",info:"hola"}},methods:{click:function(){this.activeClass="false"},hidden:function(){this.activeClass="active"}}},T=M,J=(e("76af"),Object(d["a"])(T,D,z,!1,null,null,null));J.options.__file="comida-n.vue";var L=J.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("h1",{attrs:{align:"center"}},[t._v("Tips")]),e("div",{staticClass:"row"},[e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("p",{staticClass:"card-text"},[t._v("\n            Some quick example text to build on the card title and make up the bulk of the card's content.\n            ")])])],1)])])},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-sm-8 bg-p"},[e("h3",[t._v("Dieta: ")]),e("p",{staticClass:"lead text-justify"},[t._v("\n                la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.\n            ")])]),e("div",{staticClass:"col-lg-4 col-sm-4"})])}],B=(e("2f25"),{}),F=Object(d["a"])(B,H,R,!1,null,null,null);F.options.__file="tips-n.vue";var G=F.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"container"},[e("div",{staticClass:"row bg-g"},[e("div",{staticClass:"col-lg-8 col-sm-8"},[e("div",{staticClass:"boxes-game"},[e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}}),e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}}),e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}}),e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}}),e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}}),e("div",{class:[t.className],on:{dragenter:function(a){t.dragenter(a)},dragleave:function(a){t.dragleave(a)},dragover:function(a){t.dragover(a)},drop:function(a){t.dragdrop(a)}}})]),e("div",{staticClass:"boxes-player"},[e("div",{class:[t.classOn],attrs:{id:"l1",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}}),e("div",{class:[t.classOn],attrs:{id:"l2",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}}),e("div",{class:[t.classOn],attrs:{id:"l3",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}}),e("div",{class:[t.classOn],attrs:{id:"l4",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}}),e("div",{class:[t.classOn],attrs:{id:"l5",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}}),e("div",{class:[t.classOn],attrs:{id:"l6",draggable:"true"},on:{dragstart:function(a){t.dragstart(a)},dragend:function(a){t.dragend(a)}}})])]),e("div",{staticClass:"col-lg-4 col-sm-4"})])])])},Q=[],U={components:{},data:function(){return{draggingItem:void 0,dragged:void 0,className:"empty",classOn:"fill",id:null}},methods:{dragstart:function(t){this.className="hold",this.draggingItem=t.target.id,this.dragged=t.target,t.target.style.opacity=.5},dragend:function(t){t.target.style.opacity=1},dragenter:function(t){t.preventDefault(),this.className="hovered"},dragleave:function(t){this.className="empty"},dragdrop:function(t){this.classOn="enter",this.dragged.parentNode.removeChild(this.dragged),event.target.appendChild(this.dragged)},dragover:function(t){t.preventDefault()}}},V=U,W=(e("d58f"),Object(d["a"])(V,K,Q,!1,null,null,null));W.options.__file="game-n.vue";var X=W.exports,Y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("p",{staticClass:"lead"},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aspernatur cumque doloremque doloribus esse pariatur debitis recusandae minus numquam nemo, dolore aut quo officia tempore. Eligendi, magni. Debitis, officiis nihil?\n    ")])])}],tt={},at=Object(d["a"])(tt,Y,Z,!1,null,null,null);at.options.__file="about.vue";var et=at.exports;i["a"].use(h["a"]);var it=new h["a"]({mode:"history",routes:[{path:"/",name:"home",component:x,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/inicionutricion",name:"inicionutricion",component:q,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/conceptonutricion",name:"conceptonutricion",component:S,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/comidanutricion",name:"comidanutricion",component:L,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/tipsnutricion",name:"tipsnutricion",component:G,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/juegonutricion",name:"juegonutricion",component:X,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/acerca",name:"acerca",component:et,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}}]}),nt=it,rt=(e("ab8b"),e("3e48"),e("26b9")),st=e.n(rt),ot=e("9f7b");i["a"].config.productionTip=!1;var ct={color:"#bffaf3",failedColor:"#874b4b",thickness:"10px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"left",inverse:!1};i["a"].use(st.a,ct),i["a"].use(ot["a"]),new i["a"]({router:nt,render:function(t){return t(g)}}).$mount("#app")},"644d":function(t,a,e){},"6dfa":function(t,a,e){},"6f4f":function(t,a,e){},"76af":function(t,a,e){"use strict";var i=e("6dfa"),n=e.n(i);n.a},7733:function(t,a,e){},"7f41":function(t,a,e){"use strict";var i=e("7733"),n=e.n(i);n.a},8338:function(t,a,e){"use strict";var i=e("6f4f"),n=e.n(i);n.a},acf0:function(t,a,e){},b054:function(t,a,e){},c21b:function(t,a,e){},d58f:function(t,a,e){"use strict";var i=e("0f4d"),n=e.n(i);n.a}});
//# sourceMappingURL=app.b9741af6.js.map