(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-scratch_card"],{"0f0b":function(t,e,i){"use strict";var a=i("3ba8"),n=i.n(a);n.a},"3ba8":function(t,e,i){var a=i("db79");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e4dc172a",a,!0,{sourceMap:!1,shadowMode:!1})},"41e5":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[i("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("刮刮卡")]),i("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[i("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),i("v-uni-view",{staticStyle:{background:"url(../../static/images/game/stage.png) no-repeat center bottom","background-size":"contain",padding:"50% 0"},style:{marginTop:"21px"}},[i("vue-scratch-card",{attrs:{"element-id":"scratchWrap",ratio:.5,"move-radius":t.moveRadius,"start-callback":t.startCallback,"clear-callback":t.clearCallback,"cover-color":"#fff"}},[i("div",{staticClass:"vue-scratch-card ",attrs:{slot:"result"},slot:"result"},[t._v(t._s(t.prizeName(t.award)))])])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}],staticStyle:{top:"45rpx"}},[i("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1),t.showShare?i("v-uni-view",{staticStyle:{width:"180rpx",background:"#b3241b","z-index":"9",padding:"10rpx 30rpx","border-radius":"10rpx",position:"absolute",right:"0",top:"90rpx",display:"flex","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shows.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"partake",size:15,color:"#fff"}}),i("v-uni-text",{staticStyle:{color:"#fff","font-size":"28rpx","margin-left":"10rpx"}},[t._v("分享得金币")])],1):t._e(),i("v-uni-view",{staticClass:"TxtZ TxtTitle",staticStyle:{"padding-left":"10px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thisShow.apply(void 0,arguments)}}},[i("v-uni-text",{},[t._v("我的金币：")]),t._v(t._s(t.userIntegral))],1),i("v-uni-view",{staticClass:"explain"},[i("v-uni-view",{staticClass:"ExplainTitle"},[t._v("游戏说明")]),i("v-uni-view",{staticClass:"ExplainTxt"},[i("v-uni-view",{staticClass:"TxtTitle"},[t._v("玩法说明")]),t.game.task_game_task?i("v-uni-view",{staticClass:"TxtCon"},[t._v("任务状态用户可以免费抽奖一次")]):i("v-uni-view",{staticClass:"TxtCon"},[t._v("每抽奖一次平台扣去"+t._s(t.game.cost)+"金币")]),i("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动奖品")]),t._l(t.game.sort_prizes,function(e,a){return["Prize::CoinPrize"==e.type?i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(a+1)+"等奖："+t._s(e.coin)+"金币")]):t._e(),"Prize::ProductPrize"==e.type?i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(a+1)+"等奖："+t._s(e.product.name))]):t._e()]}),t.game.task_game_task?[i("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动时间")]),i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(t.game.task_game_task.valid_from)+" 至 "+t._s(t.game.task_game_task.valid_to))]),i("v-uni-view",{staticClass:"TxtZ"},[i("v-uni-text",{staticClass:"TZ"},[t._v("注：")]),t._v("本次活动奖品仅限在"+t._s(t.game.task_game_task.valid_to)+"日前有效，过期自动作废。")],1)]:t._e()],2)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"630d":function(t,e,i){"use strict";i.r(e);var a=i("41e5"),n=i("705e");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("0f0b");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"04ed23cf",null);e["default"]=c.exports},"705e":function(t,e,i){"use strict";i.r(e);var a=i("8686"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},8686:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("afea")),o=a(i("90d9")),s={components:{tuiIcon:o.default},data:function(){return{game:{},showShare:!1,userIntegral:0,moveRadius:20,from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5,award:{name:"",type:"thanks"},ShowGuidance:!1}},onLoad:function(t){this.showShare=this.tui.wechatBowser(),t.from&&(this.from=t.from);var e=this;this.showShare=this.tui.wechatBowser(),n.default.me().then(function(t){console.log(t),e.userIntegral=t.coin}).catch(function(){}),n.default.game(t.id).then(function(i){e.game=i,console.log(i),e.tui.wechatBowser()&&e.game.task_game_task.id&&(console.log(e.game.task_game_task.id),n.default.view(e.game.task_game_task.id,t.token).then(function(t){console.log(t)}).catch(function(){}),n.default.fission(e.game.task_game_task.id,t.token).then(function(t){console.log(t),e.tui.jssdk().then(function(i){var a="";t.task.image&&(a=t.task.image.image_path),i.updateAppMessageShareData({title:e.game.name,desc:"分享链接赚金币,提现赢大奖",link:t.task.h5_link+"&token="+t.token,imgUrl:a,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(t){console.log(t)})},methods:{back:function(){this.tui.goBack(this.from)},prizeName:function(t){return"thanks"==t.type?t.name:"Prize::CoinPrize"==t.type?t.coin+"金币":"Prize::ProductPrize"==t.type?t.product.name:void 0},shows:function(){console.log(this.ShowGuidance),this.ShowGuidance=!0},colse:function(){this.ShowGuidance=!1},startCallback:function(){var t=this;console.log("抽奖成功！"),this.apiMe(),n.default.me(t.game.id).then(function(e){console.log(e),t.userIntegral=e.coin}).catch(function(){}),console.log(t.game.id),!t.game.task_game_task&&t.userIntegral<t.game.cost?uni.showModal({title:"温馨提示",content:"您的金币不足"}):n.default.playGame(t.game.id).then(function(e){console.log(e),"您已经玩过这个游戏了"!=e.message?e.prize_log&&(t.award=e.prize_log.prize):uni.showModal({title:"温馨提示",content:e.message})}).catch(function(){})},clearCallback:function(){console.log("清除完毕！")},thisShow:function(){},apiMe:function(){n.default.me(this.game.id).then(function(t){console.log(t),that.userIntegral=t.coin}).catch(function(){})}}};e.default=s},db79:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-04ed23cf]{width:100%;height:100%}.Bg[data-v-04ed23cf]{position:fixed;left:0;top:0;overflow:hidden;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-04ed23cf]{position:absolute;z-index:100;width:%?690?%;height:%?500?%;top:%?0?%;left:%?30?%;text-align:center;margin:0 auto}.explain[data-v-04ed23cf]{width:%?690?%;margin:%?60?% auto %?100?%}.ExplainTitle[data-v-04ed23cf]{text-align:center;font-size:%?36?%;font-weight:700;color:#8a0a0a}.ExplainTxt[data-v-04ed23cf]{text-align:left;margin:%?20?% auto}.TxtTitle[data-v-04ed23cf]{font-size:%?30?%;color:#545454;font-weight:700;margin-top:%?30?%;margin-bottom:%?10?%}.TxtCon[data-v-04ed23cf]{font-size:%?26?%;color:#999}.TxtZ[data-v-04ed23cf]{color:#d20b0b;font-size:%?24?%;margin-top:%?10?%;letter-spacing:.5px}.TZ[data-v-04ed23cf]{font-weight:700;font-size:%?26?%;color:#d20b0b}.vue-scratch-card[data-v-04ed23cf]{background:#e42121;color:#fff;text-align:center;font-size:20px;font-weight:700;position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.scratchCard .pic[data-v-04ed23cf]{display:none}\n/* header*/.tui-header-box[data-v-04ed23cf]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-04ed23cf]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-04ed23cf]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-04ed23cf]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-04ed23cf]{margin-left:%?20?%}.tui-icon[data-v-04ed23cf]{border-radius:16px}.tui-icon-back[data-v-04ed23cf]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-04ed23cf]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n/* header*/",""])}}]);