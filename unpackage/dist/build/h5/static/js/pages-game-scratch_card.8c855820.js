(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-scratch_card"],{"2e95":function(t,i,e){var a=e("8978");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("04a002bd",a,!0,{sourceMap:!1,shadowMode:!1})},"630d":function(t,i,e){"use strict";e.r(i);var a=e("f701"),n=e("705e");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("a67d");var s=e("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"901f7d84",null);i["default"]=c.exports},"705e":function(t,i,e){"use strict";e.r(i);var a=e("8686"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},8686:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("afea")),o=a(e("90d9")),s={components:{tuiIcon:o.default},data:function(){return{game:{task_game_task:{valid_from:"",valid_to:""}},from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5}},onLoad:function(t){t.from&&(this.from=t.from);var i=this;this.showShare=this.tui.wechatBowser(),n.default.me(t.id).then(function(t){console.log(t),i.UserIntegral=t.coin}).catch(function(){}),n.default.game(t.id).then(function(e){i.game=e,console.log(e),i.tui.wechatBowser()&&i.game.task_id&&(console.log(i.game.task_id),n.default.view(i.game.task_id,t.token).then(function(t){console.log(t)}).catch(function(){}),n.default.fission(i.game.task_id,t.token).then(function(t){console.log(t),i.tui.jssdk().then(function(e){var a="";t.task.image&&(a=t.task.image.image_path),e.updateAppMessageShareData({title:i.game.name,desc:"分享链接赚金币,提现赢大奖",link:location.origin+location.pathname+"?id="+i.game.id+"&token="+t.token,imgUrl:a,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(t){console.log(t)})},methods:{back:function(){this.tui.goBack(this.from)},startCallback:function(){console.log("抽奖成功！"),n.default.playGame(this.game.id).then(function(t){console.log(t)}).catch(function(){})},clearCallback:function(){console.log("清除完毕！")}}};i.default=s},8978:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".explain[data-v-901f7d84]{width:%?690?%;margin:%?60?% auto %?100?%}.ExplainTitle[data-v-901f7d84]{text-align:center;font-size:%?36?%;font-weight:700;color:#8a0a0a}.ExplainTxt[data-v-901f7d84]{text-align:left;margin:%?20?% auto}.TxtTitle[data-v-901f7d84]{font-size:%?30?%;color:#545454;font-weight:700;margin-top:%?30?%;margin-bottom:%?10?%}.TxtCon[data-v-901f7d84]{font-size:%?26?%;color:#999}.TxtZ[data-v-901f7d84]{color:#d20b0b;font-size:%?24?%;margin-top:%?10?%;letter-spacing:.5px}.TZ[data-v-901f7d84]{font-weight:700;font-size:%?26?%;color:#d20b0b}.vue-scratch-card[data-v-901f7d84]{background:#e42121;color:#fff;text-align:center;font-size:20px;font-weight:700;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.scratchCard .pic[data-v-901f7d84]{display:none}\n/* header*/.tui-header-box[data-v-901f7d84]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-901f7d84]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-901f7d84]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-901f7d84]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-901f7d84]{margin-left:%?20?%}.tui-icon[data-v-901f7d84]{border-radius:16px}.tui-icon-back[data-v-901f7d84]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-901f7d84]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n/* header*/",""])},a67d:function(t,i,e){"use strict";var a=e("2e95"),n=e.n(a);n.a},f701:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[e("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("刮刮卡")]),e("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[e("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[e("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),e("v-uni-view",{staticStyle:{background:"url(../../static/images/game/stage.png) no-repeat center bottom","background-size":"contain",padding:"50% 0"},style:{marginTop:"21px"}},[e("vue-scratch-card",{attrs:{"element-id":"scratchWrap",ratio:.5,"move-radius":20,"start-callback":t.startCallback,"clear-callback":t.clearCallback,"cover-color":"#fff"}},[e("div",{staticClass:"vue-scratch-card ",attrs:{slot:"result"},slot:"result"},[t._v("再接再厉~~")])])],1),e("v-uni-view",{staticClass:"explain"},[e("v-uni-view",{staticClass:"ExplainTitle"},[t._v("游戏说明")]),e("v-uni-view",{staticClass:"ExplainTxt"},[e("v-uni-view",{staticClass:"TxtTitle"},[t._v("玩法说明")]),t.game.task_game_task?e("v-uni-view",{staticClass:"TxtCon"},[t._v("任务状态用户可以免费抽奖一次")]):e("v-uni-view",{staticClass:"TxtCon"},[t._v("每抽奖一次平台扣去"+t._s(t.game.cost)+"积分")]),e("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动奖品")]),t._l(t.game.prizes,function(i,a){return[e("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(a)+" 等奖："+t._s(i.number)+"金币")])]}),e("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动时间")]),e("v-uni-view",{staticClass:"TxtCon"},[t._v("shij")]),e("v-uni-view",{staticClass:"TxtZ"},[e("v-uni-text",{staticClass:"TZ"},[t._v("注：")]),t._v("本次活动奖品仅限在shij日前有效，过期自动作废。")],1),e("v-uni-view",{staticClass:"TxtTitle"},[t._v("主办方")]),e("v-uni-view",{staticClass:"TxtCon"},[t._v("趣图美业有限公司提供")])],2)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})}}]);