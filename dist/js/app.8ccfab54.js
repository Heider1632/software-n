(function(t){function e(e){for(var s,n,l=e[0],c=e[1],o=e[2],d=0,m=[];d<l.length;d++)n=l[d],i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),i=a.n(s);i.a},"0f4d":function(t,e,a){},1518:function(t,e,a){t.exports=a.p+"img/5 Carnes.2ba9441c.svg"},"1a65":function(t,e,a){"use strict";var s=a("acf0"),i=a.n(s);i.a},"1a8a":function(t,e,a){"use strict";var s=a("b054"),i=a.n(s);i.a},"1f20":function(t,e,a){"use strict";var s=a("7382"),i=a.n(s);i.a},"2f25":function(t,e,a){"use strict";var s=a("644d"),i=a.n(s);i.a},5011:function(t,e,a){t.exports=a.p+"img/6 Comidas Rapida.1b328a54.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view"),a("vue-progress-bar")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav",[a("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"nav"}}),t._m(0),t._m(1),a("div",{staticClass:"nav-wrapper"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),a("li",[a("router-link",{attrs:{to:"/acerca"}},[t._v("Acerca")])],1),a("li",[a("a",{directives:[{name:"onclick",rawName:"v-onclick",value:t.atras(),expression:"atras()"}],attrs:{href:""}},[t._v("Atras")])])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"nav-btn",attrs:{for:"nav"}},[a("i"),a("i"),a("i")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("a",{attrs:{href:"#"}},[t._v("DiverSan")])])}],c={methods:{atras:function(){this.$router.go(-1)}}},o=c,u=(a("1a8a"),a("2877")),d=Object(u["a"])(o,n,l,!1,null,null,null);d.options.__file="navbar.vue";var m=d.exports,p={name:"app",components:{navbar:m},mounted:function(){this.$Progress.finish()},created:function(){var t=this;this.$Progress.start(),this.$router.beforeEach(function(e,a,s){if(void 0!==e.meta.progress){var i=e.meta.progress;t.$Progress.parseMeta(i)}t.$Progress.start(),s()}),this.$router.afterEach(function(e,a){t.$Progress.finish()})}},f=p,v=(a("034f"),Object(u["a"])(f,i,r,!1,null,null,null));v.options.__file="App.vue";var g=v.exports,h=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"container-fluid wrapper"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"main col-lg-12 col-sm-6"},[a("div",{staticClass:"iteraction"},[a("div",{staticClass:"nutricion"},[a("h1",[a("router-link",{attrs:{to:"/inicionutricion"}},[t._v("INICIO")])],1)])])])])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12 col-sm-8"},[s("img",{staticClass:"logo",attrs:{src:a("9b19"),alt:"logo"}})])}],_={name:"home"},y=_,x=(a("1f20"),Object(u["a"])(y,b,C,!1,null,"2899f298",null));x.options.__file="home.vue";var k=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"container"},[a("div",{staticClass:"row bg-g"},[a("div",{staticClass:"col-lg-8 col-sm-7"},[a("div",{staticClass:"alert sm-1"},[a("router-link",{staticClass:"alert-link",attrs:{to:"/conceptonutricion"}},[t._v("Conceptos")])],1)]),t._m(0)]),a("div",{staticClass:"row bg-g"},[t._m(1),a("div",{staticClass:"col-lg-8 col-sm-7"},[a("div",{staticClass:"alert sm-2",attrs:{role:"alert"}},[a("router-link",{staticClass:"alert-link",attrs:{to:"/comidanutricion"}},[t._v("Piramide Alimenticia")])],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-sm-7"},[a("div",{staticClass:"alert sm-3",attrs:{role:"alert"}},[a("router-link",{staticClass:"alert-link",attrs:{to:"/tipsnutricion"}},[t._v("Dieta Nutrición")])],1)]),t._m(2)]),a("div",{staticClass:"row"},[t._m(3),a("div",{staticClass:"col-lg-8 col-sm-7"},[a("div",{staticClass:"alert sm-4",attrs:{role:"alert"}},[a("router-link",{staticClass:"alert-link",attrs:{to:"/juegonutricion"}},[t._v("Juega")])],1)])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-sm-5"},[a("img",{attrs:{src:"",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-sm-5"},[a("img",{attrs:{src:"",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-sm-5"},[a("img",{attrs:{src:"",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-sm-5"},[a("img",{attrs:{src:"",alt:""}})])}],j={name:"homenutricion"},E=j,S=(a("1a65"),Object(u["a"])(E,w,$,!1,null,null,null));S.options.__file="home-n.vue";var O=S.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row bg-g"},[s("div",{staticClass:"col-lg-6 col-sm-6 bg-nu"},[s("h3",[t._v("Nutrición:")]),s("p",{staticClass:"lead-justify"},[t._v("\n                La nutrición es un proceso que tu cuerpo realiza diariamente.\n                A través de éste, él toma de los alimentos que consumes, unas sustancias muy necesarias llamadas nutrientes, las absorve, las transforma y las utiliza para brindarte energía, formar o reparar tus organos y tejidos, regular otros procesos en tu organismo y hasta prevenir o combatir enfermedades.\n            ")]),s("h3",[t._v("Alimentación:")]),s("p",{staticClass:"lead-justify"},[t._v("\n                Cuando tomas un producto y lo ingieres para adquirir de este energía y nutrientes, estás realizando el proceso de alimentación.\n                Alimentarse bien es uno de los caminos más importantes para proteger tu salud.\n                Así es, muchas enfermedades dañan tu organismo debido a que no te alimentas correctamente, ¡y por eso es muy importante que aprendas a elegir las sustancias que consumes a diario!\n            ")])]),s("div",{staticClass:"col-lg-5 col-sm-5"},[s("img",{staticClass:"doc",attrs:{src:a("b4bc"),alt:"doc"}})])])])}],A=(a("8338"),{}),G=Object(u["a"])(A,q,P,!1,null,null,null);G.options.__file="concept-n.vue";var I=G.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[t._m(0),s("div",{staticClass:"row bg-a"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"l1",on:{click:function(e){t.click()}}},[s("img",{attrs:{src:a("5011"),alt:"block-1"}})]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)]),s("div",{staticClass:"col-lg-4",class:[t.activeClass]},[s("p",{staticClass:"lead text-box",attrs:{id:"text-box"}},[t._v("\n                Hola\n            ")])])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-p"},[a("h1",{attrs:{align:"center"}},[t._v("Piramide Alimenticia")]),a("p",{staticClass:"lead",attrs:{align:"center"}},[t._v("\n            Para que tu alimentación sea correcta, es importante que incluya alimentos variados y en las cantidades adecuadas.\n            La pirámide alimenticia te ayuda a identificar con facilidad cuáles alimentos son necesarios y qué cantidad debes consumir en una dieta balanceada. Para esto, se divide en varios grupos:\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l2"},[s("img",{attrs:{src:a("1518"),alt:"block-2"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l3"},[s("img",{attrs:{src:a("d1c8"),alt:"block-3"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l4"},[s("img",{attrs:{src:a("5e6a"),alt:"block-4"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l5"},[s("img",{attrs:{src:a("948e"),alt:"block-5"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l6"},[s("img",{attrs:{src:a("d5d3"),alt:"block-6"}})])}],D={data:function(){return{activeClass:"active"}},methods:{click:function(){this.activeClass="false",console.log("hola")}}},M=D,N=(a("76af"),Object(u["a"])(M,L,T,!1,null,null,null));N.options.__file="comida-n.vue";var z=N.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-sm-8 bg-p"},[a("h3",[t._v("Dieta: ")]),a("p",{staticClass:"lead-justify"},[t._v("\n                la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.\n            ")])]),a("div",{staticClass:"col-lg-4 col-sm-4"})]),a("h1",{attrs:{align:"center"}},[t._v("Tips")]),a("div",{staticClass:"row"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])]),a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])])}],R=(a("2f25"),{}),F=Object(u["a"])(R,H,J,!1,null,null,null);F.options.__file="tips-n.vue";var U=F.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"container game-box"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-sm-12"},[a("div",{staticClass:"min-h-screen text-black bg-grey-lighter p-8"},[a("div",{staticClass:"bg-white rounded shadow-lg max-w-md mx-auto py-8 px-4"},[a("sortable-list",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.items;return a("ul",{staticClass:"list-reset"},t._l(s,function(e){return a("sortable-item",{key:e.id},[a("li",{staticClass:"bg-white px-4"},[a("div",{staticClass:"flex items-center border-b border-grey-lighter"},[a("div",{staticClass:"flex-grow flex items-center py-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.complete,expression:"todo.complete"}],staticClass:"mr-3",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.complete)?t._i(e.complete,null)>-1:e.complete},on:{change:function(a){var s=e.complete,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=null,l=t._i(s,n);i.checked?l<0&&t.$set(e,"complete",s.concat([n])):l>-1&&t.$set(e,"complete",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(e,"complete",r)}}}),a("span",[t._v(t._s(e.description))])]),a("sortable-handle",[a("svg")])],1)])])}))}}]),model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}})],1)])]),a("div",{staticClass:"col-lg-4"})])])])},K=[],Q=a("8afe"),V=a("4663");function W(t,e,a){var s=Object(Q["a"])(t.slice(0,e)).concat(Object(Q["a"])(t.slice(e+1,t.length)));return Object(Q["a"])(s.slice(0,a)).concat([t[e]],Object(Q["a"])(s.slice(a,s.length)))}var X,Y,Z={props:{value:{required:!0},itemClass:{default:"sortable-item"},handleClass:{default:"sortable-handle"}},provide:function(){return{itemClass:this.itemClass,handleClass:this.handleClass}},render:function(){return this.$scopedSlots.default({items:this.value})},mounted:function(){var t=this,e=new V["Sortable"](this.$el,{draggable:".".concat(this.itemClass),handle:".".concat(this.handleClass),mirror:{constrainDimensions:!0}}).on("sortable:stop",function(e){var a=e.oldIndex,s=e.newIndex;t.$emit("input",W(t.value,a,s))});this.$on("hook:destroyed",function(){e.destroy()})}},tt=Z,et=Object(u["a"])(tt,X,Y,!1,null,null,null);et.options.__file="SortableList.vue";var at,st,it=et.exports,rt={render:function(){return this.$slots.default[0]},inject:["itemClass"],mounted:function(){this.$el.classList.add(this.itemClass)}},nt=rt,lt=Object(u["a"])(nt,at,st,!1,null,null,null);lt.options.__file="SortableItem.vue";var ct,ot,ut=lt.exports,dt={render:function(){return this.$slots.default[0]},inject:["handleClass"],mounted:function(){this.$el.classList.add(this.handleClass)}},mt=dt,pt=Object(u["a"])(mt,ct,ot,!1,null,null,null);pt.options.__file="SortableHandle.vue";var ft=pt.exports,vt={components:{SortableList:it,SortableItem:ut,SortableHandle:ft},data:function(){return{todos:[{id:1,description:"Get travel insurance",complete:!1},{id:2,description:"Pay hydro bill",complete:!1},{id:3,description:"Record podcast with Taylor",complete:!1},{id:4,description:"Design Twitter card for new landing page",complete:!1},{id:5,description:"Update credit card for Typekit subscription",complete:!1}]}},methods:{}},gt=vt,ht=(a("d58f"),Object(u["a"])(gt,B,K,!1,null,null,null));ht.options.__file="game-n.vue";var bt=ht.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("p",{staticClass:"lead"},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aspernatur cumque doloremque doloribus esse pariatur debitis recusandae minus numquam nemo, dolore aut quo officia tempore. Eligendi, magni. Debitis, officiis nihil?\n    ")])])}],yt={},xt=Object(u["a"])(yt,Ct,_t,!1,null,null,null);xt.options.__file="about.vue";var kt=xt.exports;s["a"].use(h["a"]);var wt=new h["a"]({routes:[{path:"/",name:"home",component:k,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/inicionutricion",name:"inicionutricion",component:O,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/conceptonutricion",name:"conceptonutricion",component:I,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/comidanutricion",name:"comidanutricion",component:z,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/tipsnutricion",name:"tipsnutricion",component:U,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/juegonutricion",name:"juegonutricion",component:bt,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}},{path:"/acerca",name:"acerca",component:kt,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}}]}),$t=wt,jt=(a("ab8b"),a("3e48"),a("26b9")),Et=a.n(jt);s["a"].config.productionTip=!1;var St={color:"#bffaf3",failedColor:"#874b4b",thickness:"10px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"left",inverse:!1};s["a"].use(Et.a,St),new s["a"]({router:$t,render:function(t){return t(g)}}).$mount("#app")},"5e6a":function(t,e,a){t.exports=a.p+"img/3 Frutas.476e2878.svg"},"644d":function(t,e,a){},"6dfa":function(t,e,a){},"6f4f":function(t,e,a){},7382:function(t,e,a){},"76af":function(t,e,a){"use strict";var s=a("6dfa"),i=a.n(s);i.a},8338:function(t,e,a){"use strict";var s=a("6f4f"),i=a.n(s);i.a},"948e":function(t,e,a){t.exports=a.p+"img/2 Arinas.4b08b39b.svg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.7f0ea3fc.svg"},acf0:function(t,e,a){},b054:function(t,e,a){},b4bc:function(t,e,a){t.exports=a.p+"img/doctora.e30fcd24.svg"},c21b:function(t,e,a){},d1c8:function(t,e,a){t.exports=a.p+"img/4 Lacteos.0a874b56.svg"},d58f:function(t,e,a){"use strict";var s=a("0f4d"),i=a.n(s);i.a},d5d3:function(t,e,a){t.exports=a.p+"img/1 Agua.dac97b49.svg"}});
//# sourceMappingURL=app.8ccfab54.js.map