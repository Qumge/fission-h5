(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-golden"],{"12f2":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-image[data-v-26f6c16c]{width:100%;height:100%}.Bg[data-v-26f6c16c]{position:fixed;left:0;top:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-26f6c16c]{position:relative;z-index:100;width:%?690?%;height:%?500?%;top:%?-120?%;text-align:center;margin:0 auto}",""])},"1c86":function(t,e,a){var i=a("12f2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8bfae0e8",i,!0,{sourceMap:!1,shadowMode:!1})},"2b7d":function(t,e,a){"use strict";a.r(e);var i=a("c749"),n=a("fc8d");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("35ff");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"26f6c16c",null,!1,i["a"],s);e["default"]=c.exports},"35ff":function(t,e,a){"use strict";var i=a("1c86"),n=a.n(i);n.a},3969:function(t,e,a){"use strict";a.r(e);var i=a("4c53"),n=a("83ab");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("bc9d");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"23cea10d",null,!1,i["a"],s);e["default"]=c.exports},"4c53":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[a("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("砸金蛋")]),a("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[a("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[a("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),t.showShare?a("v-uni-view",{staticStyle:{width:"180rpx",background:"#b3241b","z-index":"9",padding:"10rpx 30rpx","border-radius":"10rpx",position:"absolute",right:"0",top:"90rpx",display:"flex","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shows.apply(void 0,arguments)}}},[a("tui-icon",{attrs:{name:"partake",size:15,color:"#fff"}}),a("v-uni-text",{staticStyle:{color:"#fff","font-size":"28rpx","margin-left":"10rpx"}},[t._v("分享得金币")])],1):t._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[a("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"stage",staticStyle:{"margin-top":"40px"}},[a("img",{staticClass:"stage-img",staticStyle:{width:"100%",height:"400%"},attrs:{src:t.game.image.image_path,mode:"widthFix"}}),a("v-uni-view",{staticClass:"lanren",class:{pause:t.paursed}},t._l(t.golden,function(e,i){return a("v-uni-view",{staticClass:"egg",class:{eggPause:t.paursed}},[e.id==t.Ids?a("img",{staticClass:"hammer",attrs:{src:"/static/images/game/hammer.png",mode:"widthFix"}}):t._e(),e.id==t.Ids?a("img",{staticClass:"egg-item",attrs:{src:"/static/images/game/agg-puo.png",mode:"widthFix"}}):a("img",{staticClass:"egg-item",attrs:{src:"/static/images/game/agg.png",mode:"widthFix","data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openEgg.apply(void 0,arguments)}}})])}),1)],1),a("v-uni-view",{staticClass:"explain"},[a("v-uni-view",{staticClass:"ExplainTitle"},[t._v("游戏说明")]),a("v-uni-view",{staticClass:"ExplainTxt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thisShow.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"TxtTitle"},[t._v("我的金币："+t._s(t.userIntegral))])],1),a("v-uni-view",{staticClass:"ExplainTxt"},[a("v-uni-view",{staticClass:"TxtTitle"},[t._v("玩法说明")]),t.game.task_game_task?a("v-uni-view",{staticClass:"TxtCon"},[t._v("任务状态用户可以免费抽奖一次")]):a("v-uni-view",{staticClass:"TxtCon"},[t._v("每抽奖一次平台扣去"+t._s(t.game.cost)+"金币")]),a("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动奖品")]),t._l(t.game.sort_prizes,function(e,i){return["Prize::CoinPrize"==e.type?a("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(i+1)+"等奖："+t._s(e.coin)+"金币")]):t._e(),"Prize::ProductPrize"==e.type?a("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(i+1)+"等奖："+t._s(e.product.name))]):t._e()]}),t.game.task_game_task?[a("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动时间")]),a("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(t.game.task_game_task.valid_from)+" 至 "+t._s(t.game.task_game_task.valid_to))]),a("v-uni-view",{staticClass:"TxtZ"},[a("v-uni-text",{staticClass:"TZ"},[t._v("注：")]),t._v("本次活动奖品仅限在"+t._s(t.game.task_game_task.valid_to)+"日前有效，过期自动作废。")],1)]:t._e()],2)],1)],1)},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},"675d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{ShowGuidance:!1},methods:{colse:function(){this.ShowGuidance=!1}}};e.default=i},"83ab":function(t,e,a){"use strict";a.r(e);var i=a("af6a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},af6a:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("55dd");var n=i(a("38b7")),o=i(a("2b7d")),s=i(a("2047")),r={components:{GuidancePopup:o.default,tuiIcon:n.default},data:function(){return{game:{task_game_task:{valid_from:"",valid_to:""},image:{}},ShowGuidance:!1,from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5,golden:[{id:"1",name:"金蛋1"},{id:"2",name:"金蛋2"},{id:"3",name:"金蛋3"}],Ids:"",paursed:!1,flag:!1,userIntegral:0,DeductIntegral:500,Options:null,showShare:!1,prizes:[]}},computed:{range:function(){return this.prizes.sort(function(t,e){return t.id-e.id}).reverse()}},onLoad:function(t){t.from&&(this.from=t.from);var e=this;this.showShare=this.tui.wechatBowser(),s.default.me().then(function(t){console.log(t),e.userIntegral=t.coin}).catch(function(){}),s.default.game(t.id).then(function(a){e.game=a,console.log(a),e.tui.wechatBowser()&&e.game.task_game_task&&(console.log(e.game.task_game_task),s.default.view(e.game.task_game_task.id,t.token).then(function(t){console.log(t)}).catch(function(){}),s.default.fission(e.game.task_game_task.id,t.token).then(function(t){console.log(t),e.tui.jssdk().then(function(a){var i="";t.task.image&&(i=t.task.image.image_path),a.updateAppMessageShareData({title:e.game.name,desc:"分享链接赚金币,提现赢大奖",link:t.task.h5_link+"&token="+t.token,imgUrl:i,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(t){console.log(t)})},onShow:function(){console.log(this.rangeList)},methods:{back:function(){this.tui.goBack()},shows:function(){console.log(this.ShowGuidance),this.ShowGuidance=!0},colse:function(){this.ShowGuidance=!1},openEgg:function(t){var e=this;console.log(e.game.id),!e.game.task_game_task&&e.userIntegral<e.game.cost?uni.showModal({title:"温馨提示",content:"您的金币不足"}):s.default.playGame(e.game.id).then(function(a){if(console.log(a),a.error)return console.log(1),void uni.showModal({title:"温馨提示",content:a.message});e.paursed=!0,e.Ids=t.currentTarget.dataset.id,setTimeout(function(){setTimeout(function(){a.prize_log?"Prize::ProductPrize"===a.prize_log.prize.type?e.celebrate(a.prize_log.prize.product.name):e.celebrate("金币："+a.prize_log.prize.coin):e.celebrate("很遗憾您没有中奖，谢谢您的参与"),s.default.me().then(function(t){e.userIntegral=t.coin}).catch(function(){})},500)},50)}).catch(function(){})},celebrate:function(t){console.log(t);var e=this;uni.showModal({title:"恭喜中奖",content:t,success:function(){e.Ids="",e.revert()}})},Nocelebrate:function(t){console.log(t);var e=this;uni.showModal({title:"你没有中奖再接再厉吧",success:function(){e.Ids="",e.revert()}})},revert:function(){this.paursed=!1}}};e.default=r},bc9d:function(t,e,a){"use strict";var i=a("fec7"),n=a.n(i);n.a},c54a:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-image[data-v-23cea10d]{width:100%;height:100%}.Bg[data-v-23cea10d]{position:fixed;left:0;top:0;overflow:hidden;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-23cea10d]{position:absolute;z-index:100;width:%?690?%;height:%?500?%;top:%?-90?%;left:%?30?%;text-align:center;margin:0 auto}.stage[data-v-23cea10d]{width:100%;position:relative;overflow:hidden}.stage-img[data-v-23cea10d]{width:100%}.explain[data-v-23cea10d]{width:%?690?%;margin:%?60?% auto %?100?%}.ExplainTitle[data-v-23cea10d]{text-align:center;font-size:%?36?%;font-weight:700;color:#8a0a0a}.ExplainTxt[data-v-23cea10d]{text-align:left;margin:%?20?% auto}.TxtTitle[data-v-23cea10d]{font-size:%?30?%;color:#545454;font-weight:700;margin-top:%?30?%;margin-bottom:%?10?%}.TxtCon[data-v-23cea10d]{font-size:%?26?%;color:#999}.TxtZ[data-v-23cea10d]{color:#d20b0b;font-size:%?24?%;margin-top:%?10?%;letter-spacing:.5px}.TZ[data-v-23cea10d]{font-weight:700;font-size:%?26?%;color:#d20b0b}.lanren[data-v-23cea10d]{position:absolute;width:170px;height:160px;bottom:18%;left:0;right:0;margin:auto;border-radius:50%;animation:a-data-v-23cea10d 1000s linear;-webkit-animation:a-data-v-23cea10d 1000s linear}.egg[data-v-23cea10d]{width:100px;height:130px;transform-origin:center;-webkit-transform-origin:center;border-radius:100%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}.egg-item[data-v-23cea10d]{width:110%;z-index:9}.hammer[data-v-23cea10d]{position:absolute;z-index:10;left:-50%;top:-10%;width:100px;display:block;max-width:none;-webkit-animation:hammer-data-v-23cea10d .5s alternate;animation:hammer-data-v-23cea10d .5s alternate;transform-origin:bottom left;-webkit-transform-origin:bottom left}.lanren.pause[data-v-23cea10d]{-webkit-animation-play-state:paused;animation-play-state:paused}.eggPause[data-v-23cea10d]{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.egg[data-v-23cea10d]:first-child{margin-top:45%;animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s 0ms infinite linear;-webkit-animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s 0ms infinite linear}.egg[data-v-23cea10d]:nth-child(2){margin-top:-5%;margin-left:-5%;animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s -2.5s infinite linear;-webkit-animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s -2.5s infinite linear}.egg[data-v-23cea10d]:nth-child(3){margin-top:-5%;margin-right:-5%;animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s -5.5s infinite linear;-webkit-animation:b-data-v-23cea10d 1000s linear,zindex-data-v-23cea10d 10s -5.5s infinite linear}@keyframes a-data-v-23cea10d{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(100turn);-webkit-transform:rotate(100turn)}}@-webkit-keyframes a-data-v-23cea10d{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(100turn);-webkit-transform:rotate(100turn)}}@keyframes b-data-v-23cea10d{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(-100turn);-webkit-transform:rotate(-100turn)}}@-webkit-keyframes b-data-v-23cea10d{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(-100turn);-webkit-transform:rotate(-100turn)}}@keyframes zindex-data-v-23cea10d{0%{z-index:1}25%{z-index:-1}55%{z-index:-1}75%{z-index:1}}@-webkit-keyframes zindex-data-v-23cea10d{0%{z-index:1}25%{z-index:-1}55%{z-index:-1}75%{z-index:1}}@keyframes hammer-data-v-23cea10d{50%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}}@-webkit-keyframes hammer-data-v-23cea10d{50%{-webkit-transform:rotate(15deg)}}\n\t/* header*/.tui-header-box[data-v-23cea10d]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-23cea10d]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-23cea10d]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-23cea10d]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-23cea10d]{margin-left:%?20?%}.tui-icon[data-v-23cea10d]{border-radius:16px}.tui-icon-back[data-v-23cea10d]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-23cea10d]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n\t/* header*/",""])},c749:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[a("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1)],1)},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},fc8d:function(t,e,a){"use strict";a.r(e);var i=a("675d"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},fec7:function(t,e,a){var i=a("c54a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a269dbe",i,!0,{sourceMap:!1,shadowMode:!1})}}]);