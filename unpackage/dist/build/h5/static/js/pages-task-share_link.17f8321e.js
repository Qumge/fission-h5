(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-share_link"],{"152b":function(n,t,e){"use strict";var o=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("7f7f");var a=o(e("afea")),i={data:function(){return{task:{}}},onLoad:function(n){var t=this;a.default.linkTasks(1,2).then(function(){}),a.default.linkTask(n.id).then(function(e){console.log(e),t.task=e,a.default.fission(e.id,n.token).then(function(n){console.log(n),t.tui.jssdk().then(function(e){console.log(222222222),console.log(3333),e.onMenuShareAppMessage({title:t.task.name,desc:"分享链接赚金币,提现赢大奖",link:location.origin+location.pathname+"?id="+t.task.id+"&token="+n.token,imgUrl:"",type:"",dataUrl:"",success:function(){console.log("share"),a.default.share(n.token).then(function(n){console.log(n)})}})}).catch(function(n){console.log(n)})}).catch(function(){})}).catch(function(n){console.log(n)})}};t.default=i},"1d2e":function(n,t,e){"use strict";e.r(t);var o=e("dbbd"),a=e("e2a1");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);var c=e("2877"),u=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"7c0b7b90",null);t["default"]=u.exports},dbbd:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-web-view",{attrs:{src:n.task.share_link}})},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},e2a1:function(n,t,e){"use strict";e.r(t);var o=e("152b"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a}}]);