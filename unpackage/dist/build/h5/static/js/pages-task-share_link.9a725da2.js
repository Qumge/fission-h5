(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-share_link"],{"09cb":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:n.height+"px;"}},[i("v-uni-view",{staticClass:"tui-header",style:{paddingTop:n.top+"px"}},[n._v("链接任务")]),i("v-uni-view",{staticClass:"tui-header-icon"},[i("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}},[i("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),i("v-uni-view",{staticStyle:{marginTop:"44px"}},[i("v-uni-web-view",{attrs:{src:n.task.share_link}})],1)],1)},a=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return a})},"152b":function(n,t,i){"use strict";var e=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("afea")),o=e(i("90d9")),c={components:{tuiIcon:o.default},data:function(){return{task:{},from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5}},onLoad:function(n){var t=this;n.from&&(this.from=n.from),a.default.linkTask(n.id).then(function(i){t.task=i,a.default.view(t.task.id,n.token).then(function(n){console.log(n)}).catch(function(){}),a.default.fission(i.id,n.token).then(function(n){console.log(111),t.tui.jssdk().then(function(i){var e="";t.task.image&&(e=task.image.image_path),i.updateAppMessageShareData({title:t.task.name,desc:"分享链接赚金币,提现赢大奖",link:t.task.h5_link+"&token="+n.token,imgUrl:e,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(n){console.log(n)})}).catch(function(){})}).catch(function(n){console.log(n)})},methods:{back:function(){this.tui.goBack()}}};t.default=c},"1d2e":function(n,t,i){"use strict";i.r(t);var e=i("09cb"),a=i("e2a1");for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);i("d64d");var c=i("2877"),s=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,"cc8270bc",null);t["default"]=s.exports},7018:function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header*/.tui-header-box[data-v-cc8270bc]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-cc8270bc]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-cc8270bc]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-cc8270bc]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-cc8270bc]{margin-left:%?20?%}.tui-icon[data-v-cc8270bc]{border-radius:16px}.tui-icon-back[data-v-cc8270bc]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-cc8270bc]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n/* header*/",""])},d64d:function(n,t,i){"use strict";var e=i("ff3f"),a=i.n(e);a.a},e2a1:function(n,t,i){"use strict";i.r(t);var e=i("152b"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=a.a},ff3f:function(n,t,i){var e=i("7018");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("7187f316",e,!0,{sourceMap:!1,shadowMode:!1})}}]);