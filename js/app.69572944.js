(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],f=0,d=[];f<r.length;f++)o=r[f],a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/the-f2e-2019-week-1/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"002d":function(t,e,n){"use strict";var i=n("eb3f"),a=n.n(i);a.a},"00a8":function(t,e,n){},"0400":function(t,e,n){},"099e":function(t,e,n){"use strict";var i=n("cf14"),a=n.n(i);a.a},"09a9":function(t,e,n){"use strict";var i=n("352f"),a=n.n(i);a.a},"0e54":function(t,e,n){},"241a":function(t,e,n){"use strict";var i=n("8b5e"),a=n.n(i);a.a},"352f":function(t,e,n){},"561b":function(t,e,n){"use strict";var i=n("0400"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view",{attrs:{id:"app"}})},s=[],o=(n("7c55"),n("2877")),r={},c=Object(o["a"])(r,a,s,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:n("9ae1")}}),i("h1",{staticClass:"header"},[t._v("大衛就是小狐狸 - 精神時光屋 2019")]),i("div",{staticClass:"nav"},t._l(t.$router.options.routes,function(e,n){var a=e.name,s=e.text;return i("router-link",{key:"home-nav-"+n,attrs:{to:{name:a}}},[t._v(t._s(t.getName(s)))])}),1)])},d=[],m={name:"home",methods:{getName:function(t){return t}}},p=m,h=Object(o["a"])(p,f,d,!1,null,null,null),v=(h.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-all",[n("router-view",{staticClass:"week-1-wrapper"})],1)}),g=[],b=(n("7f7f"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t._t("default")],2)}),y=[],_=(n("7523"),{}),k=Object(o["a"])(_,b,y,!1,null,"bcde3f08",null),w=k.exports,O=function(){return["html"].forEach(function(t){return document.querySelector(t).classList.toggle("week-1-".concat(t))})},j={name:"week-1",beforeCreate:O,beforeDestroy:O,components:{"transition-all":w},beforeRouteUpdate:function(t,e,n){var i=t.name,a=e.name;"Week-1:main"===a&&console.log("離開 main","via",i),n()}},C=j,x=(n("5926"),Object(o["a"])(C,v,g,!1,null,null,null)),S=x.exports,E=S,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("main-fn"),n("nav-links")],1)},T=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-function"},[n("div",{staticClass:"countdown-num-and-listing"},[n("add-mission-input"),n("timer-num-countdown"),n("todo-listing",{attrs:{"more-shown":!0,"max-list-show":3}})],1),n("div",{staticClass:"timer-position"},[n("timer-process")],1)])},I=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-wrapper",class:[{processing:t.isProcessing},t.countFor]},[n("div",{staticClass:"timer-countdown-round",style:"--deg: "+t.deg+"deg;"},[n("i",{staticClass:"material-icons play",on:{click:t.processingToggle}},[t._v(t._s(t.playIcon))]),n("span",{staticClass:"dot"})])])},N=[],q={data:function(){return{deg:0,countFor:"",playIcon:"play_circle_filled",isProcessing:!1,processingNum:0,processingDelta:14.4/60/4}},mounted:function(){this.init()},methods:{init:function(){console.log("timer","輸入後 data 需要 init")},processingToggle:function(){this.isProcessing=!this.isProcessing},processingDeg:function(t){var e=this;if(!t)return clearInterval(this.processingNum),void(this.processingNum=0);this.processingNum=setInterval(function(){e.deg+=e.processingDelta},250)}},watch:{isProcessing:function(t){this.playIcon=t?"pause_circle_filled":"play_circle_filled",this.processingDeg(t)},playIcon:function(){}}},L=q,P=(n("241a"),Object(o["a"])(L,D,N,!1,null,"19cf9eb1",null)),R=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mission,expression:"mission"}],staticClass:"input-box",attrs:{type:"text",placeholder:"add a new mission…"},domProps:{value:t.mission},on:{input:function(e){e.target.composing||(t.mission=e.target.value)}}}),n("span",{staticClass:"input-submit material-icons"})])},F=[],J={data:function(){return{mission:""}}},A=J,K=(n("561b"),Object(o["a"])(A,M,F,!1,null,"724fcb00",null)),U=K.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-num-countdown",attrs:{title:t.todoItem.description}},[n("div",{staticClass:"massion-controller"},[n("div",{staticClass:"done-botton material-icons done"}),n("p",{staticClass:"massion-name"},[t._v(t._s(t.todoItem.name))]),n("div",{staticClass:"run-counting"},[t._l(t.todoItem.runTimes,function(t){return n("div",{key:""+t,staticClass:"run-times"})}),n("div",{staticClass:"counting-pie",style:"--deg: "+t.deg+"deg"})],2)]),n("p",{staticClass:"timer"},[t._v(t._s(t.timer))])])},V=[],z=(n("6b54"),n("f576"),n("d225")),G=n("b0b4"),H=n("308d"),Q=n("6bb5"),X=n("4e2b"),Y=n("f28b"),Z=n("bd86"),tt=(n("456d"),n("55dd"),n("75fc")),et=function(){function t(e){Object(z["a"])(this,t);var n={timeRegistered:Date.now(),isDone:!1,timer:1500,description:"",timeFinshed:null,runTimes:0};Object.assign(this,n,e)}return Object(G["a"])(t,[{key:"timerReset",value:function(){this.isDone=!1,this.timer=1500}},{key:"toString",value:function(){var t=this;return JSON.stringify(Object.assign.apply(Object,[{name:this.name}].concat(Object(tt["a"])(Object.keys(this).sort().filter(function(t){return"vName"!==t}).map(function(e){return Object(Z["a"])({},e,t[e])})))))}},{key:"name",get:function(){return this.vName},set:function(t){if(!t.length)throw new Error("no name");this.vName=t}}]),t}(),nt=function(t){function e(){return Object(z["a"])(this,e),Object(H["a"])(this,Object(Q["a"])(e).apply(this,arguments))}return Object(X["a"])(e,t),Object(G["a"])(e,[{key:"toTimerString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return"".concat(this.getMinutes().toString().padStart(2,0)).concat(t).concat(this.getSeconds().toString().padStart(2,0))}}]),e}(Object(Y["a"])(Date)),it={props:{todoItem:{required:!1,type:et,default:function(){return new et({name:"the First thing to do today",description:"what to do",runTimes:3,timer:634})}}},data:function(){return{deg:240}},computed:{timer:{get:function(){return new nt(1e3*this.todoItem.timer).toTimerString()}}}},at=it,st=(n("a1b4"),Object(o["a"])(at,B,V,!1,null,"0836ca6e",null)),ot=st.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"todo-listing"},[t._l(t.todoList.slice(0,t.maxListShow),function(e,i){return n("todo-item",{key:t.maxListShow+"-"+i,attrs:{item:e}})}),t.moreShown&&t.maxListShow<t.todoList.length?n("router-link",{staticClass:"more",attrs:{to:{name:"Week-1:Todo-List"}}},[t._v("more")]):t._e()],2)},ct=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo-item",attrs:{title:t.item.name+(t.item.description?"\n"+t.item.description:"")}},[n("span",{staticClass:"done-button"}),n("span",{staticClass:"item-title"},[t._v(t._s(t.item.name))]),n("i",{staticClass:"material-icons play"},[t._v("play_circle_outline")])])},lt=[],ft={props:{item:{required:!1,default:{name:"default name",isDone:!1,description:"default name description"}}}},dt=ft,mt=(n("09a9"),Object(o["a"])(dt,ut,lt,!1,null,"751b44f6",null)),pt=mt.exports,ht={components:{"todo-item":pt},props:{moreShown:{required:!1,default:!1},maxListShow:{required:!1,default:!1},todoList:{required:!1,default:function(){return[{name:"the second thing to do today",isDone:!1,description:"default name description"},{name:"the third thing to do today",isDone:!1,description:"default name description"},{name:"the forth thing to do today",isDone:!1,description:"default name description"},{name:"the more thing to do today",isDone:!1,description:"default name description"}]}}}},vt=ht,gt=(n("002d"),Object(o["a"])(vt,rt,ct,!1,null,"64b05ea9",null)),bt=gt.exports,yt={components:{"timer-process":R,"timer-num-countdown":ot,"add-mission-input":U,"todo-listing":bt}},_t=yt,kt=(n("a075"),Object(o["a"])(_t,W,I,!1,null,"6bd2a1d5",null)),wt=kt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav-of-main"},[n("ul",{staticClass:"nav-wrapper"},t._l(t.urls,function(e,i){var a=e.name,s=e.text;return n("li",{key:"nav-"+i,staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link material-icons",attrs:{to:{name:a}}},[t._v(t._s(s))])],1)}),0),n("pomodoro-logo",{staticClass:"pomodoro"})],1)},jt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pomodoro"})},xt=[],St=(n("cbed"),{}),Et=Object(o["a"])(St,Ct,xt,!1,null,"6a89785c",null),$t=Et.exports,Tt={name:"MainNav",components:{"pomodoro-logo":$t},data:function(){return{urls:[{name:"Week-1:Todo-List",text:"list"},{name:"Week-1:Analytics",text:"insert_chart_outlined"},{name:"Week-1:Ringtones",text:"library_music"}]}}},Wt=Tt,It=(n("8b61"),Object(o["a"])(Wt,Ot,jt,!1,null,"18826261",null)),Dt=It.exports,Nt={components:{"main-fn":wt,"nav-links":Dt}},qt=Nt,Lt=(n("c194"),Object(o["a"])(qt,$,T,!1,null,"20d1a85d",null)),Pt=Lt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list"},[t._v("\n  todo-list\n")])},Mt=[],Ft={},Jt=Object(o["a"])(Ft,Rt,Mt,!1,null,null,null),At=Jt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[t._v("\n  feature\n  "),n("router-link",{attrs:{to:{name:"Week-1:Todo-List"}}},[t._v("todo-list")]),n("router-link",{attrs:{to:{name:"Week-1:Analytics"}}},[t._v("ringtones")]),n("router-link",{attrs:{to:{name:"Week-1:Ringtones"}}},[t._v("analytics")]),n("transition-all",[n("router-view",{attrs:{name:"feature"}})],1),n("feature-countdown",{staticClass:"countdown"}),n("pomodoro-logo",{staticClass:"pomodoro"}),n("feature-exit",{staticClass:"exit"})],1)},Ut=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"feature-exit",attrs:{to:{name:"Week-1:main"}}},[n("i",{staticClass:"material-icons"},[t._v("close")])])},Vt=[],zt=(n("099e"),{}),Gt=Object(o["a"])(zt,Bt,Vt,!1,null,"774ff384",null),Ht=Gt.exports,Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature-countdown-position"},[n("div",{staticClass:"feature-countdown-wrapper"},[n("span",{staticClass:"play-button"},[t._v("play_arrow")]),n("div",{staticClass:"bottom-disk"},[n("div",{staticClass:"timer-process"})])])])}],Yt={components:{}},Zt=Yt,te=(n("bad8"),Object(o["a"])(Zt,Qt,Xt,!1,null,"450b5990",null)),ee=te.exports,ne={components:{"transition-all":w,"feature-countdown":ee,"pomodoro-logo":$t,"feature-exit":Ht}},ie=ne,ae=(n("6f0f"),Object(o["a"])(ie,Kt,Ut,!1,null,"c49c2424",null)),se=ae.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analytics"},[t._v("\n  analytics\n")])},re=[],ce={},ue=Object(o["a"])(ce,oe,re,!1,null,null,null),le=ue.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ringtones"},[t._v("\n  ringtones\n")])},de=[],me={},pe=Object(o["a"])(me,fe,de,!1,null,null,null),he=pe.exports,ve={path:"/",text:"Week-1: 第一關 - 番茄鐘",component:E,children:[{path:"",name:"Week-1",component:Pt},{path:"main",name:"Week-1:main",component:Pt},{path:"feature",component:se,children:[{path:"",name:"Week-1:feature-default",components:{feature:At}},{path:"todo-list",name:"Week-1:Todo-List",components:{feature:At}},{path:"analytics",name:"Week-1:Analytics",components:{feature:le}},{path:"ringtones",name:"Week-1:Ringtones",components:{feature:he}}]}]},ge=[ve],be=ge;i["a"].use(l["a"]);var ye=new l["a"]({mode:"history",base:"/the-f2e-2019-week-1/",routes:be}),_e=n("2f62"),ke=(n("20d6"),n("013f")),we=n("2a88"),Oe=function(t){function e(t){var n;return Object(z["a"])(this,e),n=Object(H["a"])(this,Object(Q["a"])(e).call(this)),Object.assign(Object(ke["a"])(n),{type:t}),window[n.type]=Object(ke["a"])(n),n.save(),n}return Object(X["a"])(e,t),Object(G["a"])(e,[{key:"push",value:function(t){Object(we["a"])(Object(Q["a"])(e.prototype),"push",this).call(this,t),this.refresh()}},{key:"save",value:function(){localStorage.setItem(this.storageKey,this.toString())}},{key:"load",value:function(){return localStorage.getItem(this.storageKey)}},{key:"wakeup",value:function(t){var n=this,i=JSON.parse(t),a=i.listType,s=i.items;return this.type=a,this.length=0,s&&s.length&&(s.forEach(function(t){return Object(we["a"])(Object(Q["a"])(e.prototype),"push",n).call(n,t)}),this.refresh()),this}},{key:"sleep",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.toString();return t&&this.save(),e}},{key:"delete",value:function(t){var e=this.findIndex(function(e){return e===t});return e>-1&&(this.slice(e,1),this.refresh()),t}},{key:"refresh",value:function(){this.sleep(),this.wakeup(this.load())}},{key:"recovery",value:function(){this.wakeup(this.load())}},{key:"toString",value:function(){var t=this.vTimeUsed;return JSON.stringify({listType:this.type,data:Object(tt["a"])(this.sort(function(e,n){var i=e[t],a=n[t];return i-a}))})}},{key:"storageKey",get:function(){return"hex-week-1:".concat(this.type)}},{key:"vTimeUsed",get:function(){return{queue:"timeRegistered",done:"timeFinshed"}[this.type]}}]),e}(Object(Y["a"])(Array)),je=function(){function t(){Object(z["a"])(this,t),this.queue=new Oe("queue"),this.done=new Oe("done"),this.queue.recovery(),this.done.recovery()}return Object(G["a"])(t,[{key:"add",value:function(t){this.queue.push(t)}},{key:"cancel",value:function(t){this.done.push(t),this.queue.delete(t)}},{key:"delete",value:function(t){this.queue.delete(t),this.done.delete(t)}}]),t}(),Ce={namespaced:!0,state:{item:new et({name:"input"}),listCollect:new je,takeBreak:new et({name:"takeBreak"})},getters:{},mutations:{},actions:{}};i["a"].use(_e["a"]);var xe=new _e["a"].Store({modules:{"week-1":Ce}});i["a"].config.productionTip=!1,new i["a"]({router:ye,store:xe,render:function(t){return t(u)}}).$mount("#app")},5926:function(t,e,n){"use strict";var i=n("0e54"),a=n.n(i);a.a},"5c48":function(t,e,n){},"5d23":function(t,e,n){},6375:function(t,e,n){},"6f0f":function(t,e,n){"use strict";var i=n("d1e3"),a=n.n(i);a.a},7523:function(t,e,n){"use strict";var i=n("5d23"),a=n.n(i);a.a},"7c55":function(t,e,n){"use strict";var i=n("5c48"),a=n.n(i);a.a},"8b5e":function(t,e,n){},"8b61":function(t,e,n){"use strict";var i=n("98d5"),a=n.n(i);a.a},"98d5":function(t,e,n){},"9ae1":function(t,e,n){t.exports=n.p+"img/logo.e35a6172.png"},a075:function(t,e,n){"use strict";var i=n("af62"),a=n.n(i);a.a},a1b4:function(t,e,n){"use strict";var i=n("d8f5"),a=n.n(i);a.a},af62:function(t,e,n){},bad8:function(t,e,n){"use strict";var i=n("cf95"),a=n.n(i);a.a},c194:function(t,e,n){"use strict";var i=n("6375"),a=n.n(i);a.a},cbed:function(t,e,n){"use strict";var i=n("00a8"),a=n.n(i);a.a},cf14:function(t,e,n){},cf95:function(t,e,n){},d1e3:function(t,e,n){},d8f5:function(t,e,n){},eb3f:function(t,e,n){}});