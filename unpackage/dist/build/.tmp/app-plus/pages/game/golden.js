(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/game/golden"],{1829:function(e,t,n){"use strict";(function(e){n("17f2"),n("921b");o(n("66fd"));var t=o(n("3969"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3969:function(e,t,n){"use strict";n.r(t);var o=n("9b25"),a=n("83ab");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("6586");var c,i=n("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"934df770",null,!1,o["a"],c);t["default"]=s.exports},"3e36":function(e,t,n){},6586:function(e,t,n){"use strict";var o=n("3e36"),a=n.n(o);a.a},"6d5c":function(e,t,n){"use strict";n.r(t);var o=n("ce68"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},"83ab":function(e,t,n){"use strict";n.r(t);var o=n("cc28"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},"9b25":function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return o})},cb45:function(e,t,n){},cc28:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("2047"));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){return n.e("components/icon/icon").then(n.bind(null,"38b7"))},i=function(){return n.e("components/GuidancePopup/GuidancePopup").then(n.bind(null,"2b7d"))},s={components:{GuidancePopup:i,tuiIcon:c},data:function(){return{game:{task_game_task:{valid_from:"",valid_to:""},image:{}},ShowGuidance:!1,from:"h5",height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5,golden:[{id:"1",name:"金蛋1"},{id:"2",name:"金蛋2"},{id:"3",name:"金蛋3"}],Ids:"",paursed:!1,flag:!1,userIntegral:0,DeductIntegral:500,Options:null,showShare:!1,prizes:[]}},computed:{range:function(){return this.prizes.sort(function(e,t){return e.id-t.id}).reverse()}},onLoad:function(t){t.from&&(this.from=t.from);var n=this;this.showShare=this.tui.wechatBowser(),a.default.me().then(function(t){console.log(e(t," at pages/game/golden.vue:136")),n.userIntegral=t.coin}).catch(function(){}),a.default.game(t.id).then(function(o){n.game=o,console.log(e(o," at pages/game/golden.vue:143")),n.tui.wechatBowser()&&n.game.task_game_task&&(console.log(e(n.game.task_game_task," at pages/game/golden.vue:148")),a.default.view(n.game.task_game_task.id,t.token).then(function(t){console.log(e(t," at pages/game/golden.vue:150"))}).catch(function(){}),a.default.fission(n.game.task_game_task.id,t.token).then(function(t){console.log(e(t," at pages/game/golden.vue:155")),n.tui.jssdk().then(function(o){var a="";t.task.image&&(a=t.task.image.image_path),o.updateAppMessageShareData({title:n.game.name,desc:"分享链接赚金币,提现赢大奖",link:t.task.h5_link+"&token="+t.token,imgUrl:a,success:function(){console.log(e("updateAppMessageShareData"," at pages/game/golden.vue:168"))}})}).catch(function(t){console.log(e(t," at pages/game/golden.vue:188"))})}).catch(function(){}))}).catch(function(t){console.log(e(t," at pages/game/golden.vue:194"))})},onShow:function(){console.log(e(this.rangeList," at pages/game/golden.vue:205"))},methods:{back:function(){this.tui.goBack()},shows:function(){console.log(e(this.ShowGuidance," at pages/game/golden.vue:212")),this.ShowGuidance=!0},colse:function(){this.ShowGuidance=!1},openEgg:function(t){var n=this;console.log(e(n.game.id," at pages/game/golden.vue:221")),!n.game.task_game_task&&n.userIntegral<n.game.cost?o.showModal({title:"温馨提示",content:"您的金币不足"}):a.default.playGame(n.game.id).then(function(a){if(console.log(e(a," at pages/game/golden.vue:229")),a.error)return console.log(e(1," at pages/game/golden.vue:231")),void o.showModal({title:"温馨提示",content:a.message});n.paursed=!0,n.Ids=t.currentTarget.dataset.id,setTimeout(function(){setTimeout(function(){a.prize_log?"Prize::ProductPrize"===a.prize_log.prize.type?n.celebrate(a.prize_log.prize.product.name):n.celebrate("金币："+a.prize_log.prize.coin):n.celebrate("很遗憾您没有中奖，谢谢您的参与")},500)},50)}).catch(function(){})},celebrate:function(t){console.log(e(t," at pages/game/golden.vue:264"));var n=this;o.showModal({title:"恭喜中奖",content:t,success:function(){n.Ids="",n.revert()}})},Nocelebrate:function(t){console.log(e(t," at pages/game/golden.vue:277"));var n=this;o.showModal({title:"你没有中奖再接再厉吧",success:function(){n.Ids="",n.revert()}})},revert:function(){this.paursed=!1}}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},ce68:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:5")),this.tui.wxAuthorize()},onShow:function(){console.log(e("App show"," at App.vue:13"))},onHide:function(){console.log(e("App Hide"," at App.vue:16"))}};t.default=n}).call(this,n("0de9")["default"])},e016:function(e,t,n){"use strict";n.r(t);var o=n("6d5c");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("e49a");var u,c,i,s,l=n("f0c5"),r=Object(l["a"])(o["default"],u,c,!1,null,null,null,!1,i,s);t["default"]=r.exports},e49a:function(e,t,n){"use strict";var o=n("cb45"),a=n.n(o);a.a}},[["1829","common/runtime","common/vendor"]]]);