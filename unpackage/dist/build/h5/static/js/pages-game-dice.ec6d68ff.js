(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-dice"],{"12f2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-26f6c16c]{width:100%;height:100%}.Bg[data-v-26f6c16c]{position:fixed;left:0;top:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-26f6c16c]{position:relative;z-index:100;width:%?690?%;height:%?500?%;top:%?-120?%;text-align:center;margin:0 auto}",""])},"1c86":function(t,e,i){var a=i("12f2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8bfae0e8",a,!0,{sourceMap:!1,shadowMode:!1})},"2b7d":function(t,e,i){"use strict";i.r(e);var a=i("c749"),n=i("fc8d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("35ff");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"26f6c16c",null,!1,a["a"],s);e["default"]=c.exports},"2f31":function(t,e,i){"use strict";i.r(e);var a=i("c866"),n=i("4fc4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("4144");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4d446ef1",null,!1,a["a"],s);e["default"]=c.exports},"35ff":function(t,e,i){"use strict";var a=i("1c86"),n=i.n(a);n.a},4144:function(t,e,i){"use strict";var a=i("912c"),n=i.n(a);n.a},"4fc4":function(t,e,i){"use strict";i.r(e);var a=i("cc40"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"675d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{ShowGuidance:!1},methods:{colse:function(){this.ShowGuidance=!1}}};e.default=a},"912c":function(t,e,i){var a=i("e434");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("23c54992",a,!0,{sourceMap:!1,shadowMode:!1})},c749:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[i("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},c866:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.headerHeight+"px;"}},[i("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("骰子")]),i("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[i("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),t.showShare?i("v-uni-view",{staticStyle:{width:"180rpx",background:"#b3241b",padding:"10rpx 30rpx","border-radius":"10rpx",position:"absolute",right:"0",display:"flex","align-items":"center",top:"205rpx","z-index":"10"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shows.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"partake",size:15,color:"#fff"}}),i("v-uni-text",{staticStyle:{color:"#fff","font-size":"28rpx","margin-left":"10rpx"}},[t._v("分享得金币")])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[i("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-image",{staticClass:"Imgs",attrs:{src:"../../static/images/game/bg.jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{attrs:{id:"tu"}},[i("v-uni-image",{attrs:{src:t.png1}}),i("v-uni-image",{attrs:{src:t.png2}}),i("v-uni-image",{attrs:{src:t.png3}})],1),i("v-uni-view",{staticStyle:{clear:"both"}}),i("v-uni-view",{staticClass:"kaishi"},[t.can_play?i("v-uni-image",{attrs:{src:"../../static/images/game/start.png",id:"start"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play.apply(void 0,arguments)}}}):t._e(),t.can_play?t._e():i("v-uni-image",{attrs:{src:"../../static/images/game/start2.png",id:"end1"}})],1),i("v-uni-view",{staticClass:"winner",attrs:{id:"share"}},[i("v-uni-view",{staticClass:"winner-main"},[i("h3",{attrs:{id:"p1"}}),i("p",[t._v("恭喜您获得了"),i("span",{attrs:{id:"p2"}})]),i("a",{staticClass:"but",attrs:{href:"#",id:"but"}},[t._v("确定")])])],1)],1)],1),i("v-uni-view",{staticStyle:{position:"relative","margin-left":"25px"}},[i("v-uni-view",{staticClass:"explain"},[i("v-uni-view",{staticClass:"ExplainTitle"},[t._v("游戏说明")]),i("v-uni-view",{staticClass:"ExplainTxt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thisShow.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"TxtTitle"},[t._v("我的金币："+t._s(t.userIntegral))])],1),i("v-uni-view",{staticClass:"ExplainTxt"},[i("v-uni-view",{staticClass:"TxtTitle"},[t._v("玩法说明")]),t.game.task_game_task?i("v-uni-view",{staticClass:"TxtCon"},[t._v("任务状态用户可以免费抽奖一次")]):i("v-uni-view",{staticClass:"TxtCon"},[t._v("每抽奖一次平台扣去"+t._s(t.game.cost)+"金币")]),i("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动奖品")]),t._l(t.game.sort_prizes,function(e,a){return["Prize::CoinPrize"==e.type?i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(a+1)+"等奖："+t._s(e.coin)+"金币 对应数字："+t._s(t.prize_numbers[a]))]):t._e(),"Prize::ProductPrize"==e.type?i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(a+1)+"等奖："+t._s(e.product.name)+" 对应数字："+t._s(t.prize_numbers[a]))]):t._e()]}),t.game.task_game_task?[i("v-uni-view",{staticClass:"TxtTitle"},[t._v("活动时间")]),i("v-uni-view",{staticClass:"TxtCon"},[t._v(t._s(t.game.task_game_task.valid_from)+" 至 "+t._s(t.game.task_game_task.valid_to))]),i("v-uni-view",{staticClass:"TxtZ"},[i("v-uni-text",{staticClass:"TZ"},[t._v("注：")]),t._v("本次活动奖品仅限在"+t._s(t.game.task_game_task.valid_to)+"日前有效，过期自动作废。")],1)]:t._e()],2)],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},cc40:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("20d6"),i("c5f6");var n=a(i("bd86")),o=a(i("2047")),s=a(i("38b7")),r=a(i("2b7d")),c={components:{GuidancePopup:r.default,tuiIcon:s.default},data:function(){var t;return t={game:{task_game_task:{valid_from:"",valid_to:""},image:{}},userIntegral:0,from:"h5",changeColor:1,headerHeight:0,top:0,scrollH:0,height:0},(0,n.default)(t,"top",0),(0,n.default)(t,"scrollH",0),(0,n.default)(t,"opcity",1),(0,n.default)(t,"iconOpcity",.5),(0,n.default)(t,"awardList",{}),(0,n.default)(t,"indexSelect",0),(0,n.default)(t,"showShare",!1),(0,n.default)(t,"ShowGuidance",!1),(0,n.default)(t,"can_play",!0),(0,n.default)(t,"timer",""),(0,n.default)(t,"png1","../../static/images/game/1.png"),(0,n.default)(t,"png2","../../static/images/game/2.png"),(0,n.default)(t,"png3","../../static/images/game/3.png"),(0,n.default)(t,"prize_numbers",["【666】","【111】","【其他三连数字】"]),(0,n.default)(t,"prizeNumbers",[[6,6,6],[1,1,1],[3,3,3]]),t},onLoad:function(t){var e=this;t.from&&(this.from=t.from),this.showShare=this.tui.wechatBowser(),o.default.me().then(function(t){console.log(t),e.userIntegral=t.coin}).catch(function(){}),o.default.game(t.id).then(function(i){e.game=i,console.log(i);var a=i.sort_prizes;a.push({id:0,coin:"",type:"thanks"}),console.log(a),e.awardList=e.coverArr(a,3),console.log(e.awardList),e.tui.wechatBowser()&&e.game.task_game_task&&(console.log(e.game.task_game_task.id),o.default.view(e.game.task_game_task.id,t.token).then(function(t){console.log(t)}).catch(function(){}),o.default.fission(e.game.task_game_task.id,t.token).then(function(t){console.log(t),e.tui.jssdk().then(function(i){var a="";t.task.image&&(a=t.task.image.image_path),i.updateAppMessageShareData({title:e.game.name,desc:"分享链接赚金币,提现赢大奖",link:t.task.h5_link+"&token="+t.token,imgUrl:a,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(t){console.log(t)})},methods:{shows:function(){console.log(this.ShowGuidance),this.ShowGuidance=!0},colse:function(){this.ShowGuidance=!1},back:function(){this.tui.goBack()},coverArr:function(t,e){for(var i=Math.ceil(e/t.length),a=0;a<i;a++)t=t.concat(t);return t.slice(0,8)},getRandomArrayElements:function(t,e){var i,a,n=t.slice(0),o=t.length,s=o-e;while(o-- >s)a=Math.floor((o+1)*Math.random()),i=n[a],n[a]=n[o],n[o]=i;return n.slice(s)},play:function(){var t=this;console.log(this.game),!this.game.task_game_task&&this.userIntegral<this.game.cost?uni.showModal({title:"温馨提示",content:"您的金币不足"}):o.default.playGame(t.game.id).then(function(e){if(console.log(e),e.error)return console.log(1),void uni.showModal({title:"温馨提示",content:e.message});var i=[];if(e.prize_log){var a=t.game.sort_prizes.findIndex(function(t){return t.id==e.prize_log.prize.id});console.log(a),i=t.prizeNumbers[a]}else i=t.getRandomArrayElements([1,2,3,4,5,6],3);console.log(i);var n=0;clearInterval(t.timer),t.timer=setInterval(function(){if(t.png1="../../static/images/game/"+Math.ceil(6*Math.random())+".png",t.png2="../../static/images/game/"+Math.ceil(6*Math.random())+".png",t.png3="../../static/images/game/"+Math.ceil(6*Math.random())+".png",n++,n>50){t.png1="../../static/images/game/"+i[0]+".png",t.png2="../../static/images/game/"+i[1]+".png",t.png3="../../static/images/game/"+i[2]+".png",clearInterval(t.timer);var a="";e.prize_log?"thanks"==e.prize_log.prize.type?a="谢谢参与":("Prize::ProductPrize"==e.prize_log.prize.type&&(a="恭喜您中奖了："+prize.product.name),"Prize::CoinPrize"==pdata.prize_log.rize.type&&(a="获得了金币"+prize.coin+"个")):a="谢谢参与",uni.showModal({title:"提示",content:a,confirmColor:"#5677FC",showCancel:!1,success:function(e){e.confirm&&(t.isRunning=!1)}}),o.default.me().then(function(e){t.userIntegral=e.coin}).catch(function(){})}},30)}).catch(function(t){console.log(t)})}}};e.default=c},e434:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".container[data-v-4d446ef1]{background-color:#c13535}.Imgs[data-v-4d446ef1]{position:absolute;left:0;width:100%;height:100%}.main[data-v-4d446ef1]{width:100%;margin-top:86%;padding-bottom:10%}.body[data-v-4d446ef1]{display:-webkit-box;display:-webkit-flex;display:flex}.main-a[data-v-4d446ef1]{width:90%;margin:0 auto}.main-a a[data-v-4d446ef1]{display:block;width:30%;line-height:30px;font-size:16px;text-decoration:none;color:#f7e077;border:2px solid #f7e077;border-radius:8px;-webkit-border-radius:8px;text-align:center;margin-bottom:7%}.left-a[data-v-4d446ef1]{float:left}.right-a[data-v-4d446ef1]{float:right}#tu[data-v-4d446ef1]{width:100%;clear:both}#tu uni-image[data-v-4d446ef1]{margin-left:10%;width:20%;float:left;max-height:64px}.kaishi[data-v-4d446ef1]{text-align:center;display:block;margin-top:30px}.kaishi uni-image[data-v-4d446ef1]{width:30%;margin:0 auto;height:96px}.winner[data-v-4d446ef1]{width:100%;height:100%;position:fixed;z-index:90;top:0;left:0;background-color:#000;background-color:rgba(0,0,0,.85);text-align:center;display:none}.winner-main[data-v-4d446ef1]{position:absolute;top:50%;left:50%;margin:-100px 0 0 -40%;width:80%;height:200px;background-color:#c5283b;border-radius:5%;overflow:hidden}.winner-main h3[data-v-4d446ef1]{margin-top:60px;font-size:18px;color:#fff}.winner-main p[data-v-4d446ef1]{font-size:16px;color:#fff}.winner-main p span[data-v-4d446ef1]{color:#fff74a}.but[data-v-4d446ef1]{display:block;width:100%;background-color:#f7e077;color:#d6384c;font-size:16px;text-align:center;text-decoration:none;position:absolute;bottom:0;left:0;line-height:40px;font-size:18px}.share_list[data-v-4d446ef1]{position:absolute;top:1em;right:10px;width:50%}.share_list img[data-v-4d446ef1]{width:100%}.activity-amin[data-v-4d446ef1]{width:94%;margin:0 auto}.activity-amin2[data-v-4d446ef1]{width:88%;margin:0 auto}.activity-amin h2[data-v-4d446ef1]{margin:0 auto .4rem auto;width:40%;height:30px;background-color:#feb934;text-align:center;line-height:30px;font-size:.9rem;color:#d6384c;border-radius:50px;letter-spacing:.2rem}.tb0[data-v-4d446ef1]{width:100%;margin-bottom:6%}.tb0 tr th[data-v-4d446ef1]{width:26%;background-color:#fad950;line-height:30px;text-align:center;color:#30302f;font-size:12px}.tb0 tr th[data-v-4d446ef1]:first-child{width:40%}.tb0 tr th[data-v-4d446ef1]:nth-child(2){width:34%}.tb0 tr td[data-v-4d446ef1]{width:20%;font-size:12px;line-height:30px;text-align:center;color:#434342;background-color:#f8dd6e}a.a-main2[data-v-4d446ef1]{display:block;color:#d6384c;margin:0 auto;width:100%;padding:10px 0;text-align:center;font-size:1rem;border-radius:10px;letter-spacing:2px;background-color:#feb934;text-decoration:none;font-weight:700}.wt1[data-v-4d446ef1]{width:94%;display:block;border:none;background-color:#fff;padding:5% 3%;border-radius:.34666667rem;font-size:.9rem;margin-bottom:6%}.wt2[data-v-4d446ef1]{width:50%;float:left}.wt3[data-v-4d446ef1]{width:40%;float:right;background-color:#efc84d;color:#fff}.wt4[data-v-4d446ef1]{width:100%;background-color:#fc8209;color:#fff;font-size:.6rem;text-align:center}.prompt1[data-v-4d446ef1]{clear:both;width:100%;text-align:center;font-size:.4rem;margin-bottom:6%;color:#ffe66f;display:non}.text-main[data-v-4d446ef1]{width:88%;margin:0 auto}.text-main h1[data-v-4d446ef1]{text-align:center;font-size:14px;margin-bottom:3%;color:#fff}.text-main p[data-v-4d446ef1]{color:#fff;font-size:12px}.text-main uni-image[data-v-4d446ef1]{width:100%;padding:5px 0}\n/* header*/.tui-header-box[data-v-4d446ef1]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-4d446ef1]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-4d446ef1]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-4d446ef1]{background:#e41f19!important;position:absolute;right:-4px}.Bg[data-v-4d446ef1]{position:fixed;left:0;top:0;z-index:99;overflow:hidden;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-4d446ef1]{position:absolute;z-index:100;width:%?690?%;height:%?500?%;top:%?-45?%;left:%?30?%;text-align:center;margin:0 auto}",""])},fc8d:function(t,e,i){"use strict";i.r(e);var a=i("675d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);