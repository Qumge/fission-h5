(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-scratch_card"],{"0657":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header*/.tui-header-box[data-v-0f4437b6]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-0f4437b6]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tui-header-icon[data-v-0f4437b6]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-0f4437b6]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-0f4437b6]{margin-left:%?20?%}.tui-icon[data-v-0f4437b6]{border-radius:16px}.tui-icon-back[data-v-0f4437b6]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-0f4437b6]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n/* header*/",""])},"630d":function(t,n,e){"use strict";e.r(n);var i=e("ea5b"),a=e("705e");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("820a");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"0f4437b6",null);n["default"]=c.exports},"705e":function(t,n,e){"use strict";e.r(n);var i=e("8686"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},7651:function(t,n,e){var i=e("0657");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("07a79538",i,!0,{sourceMap:!1,shadowMode:!1})},"820a":function(t,n,e){"use strict";var i=e("7651"),a=e.n(i);a.a},8686:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("90d9")),o={components:{tuiIcon:a.default},data:function(){return{from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5}},onLoad:function(t){t.from&&(this.from=t.from)},methods:{back:function(){this.tui.goBack(this.from)},startCallback:function(){console.log("抽奖成功！")},clearCallback:function(){console.log("清除完毕！")}}};n.default=o},ea5b:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[e("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("刮刮卡")]),e("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[e("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(n){n=t.$handleEvent(n),t.back(n)}}},[e("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),e("v-uni-view",{staticStyle:{"margin-top":"44px"}},[e("vue-scratch-card",{attrs:{"element-id":"scratchWrap",ratio:.5,"move-radius":50,"start-callback":t.startCallback,"clear-callback":t.clearCallback,"cover-color":"#caa"}})],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}}]);