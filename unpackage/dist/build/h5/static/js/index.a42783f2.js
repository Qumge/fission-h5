(function(e){function n(n){for(var a,i,u=n[0],c=n[1],s=n[2],d=0,l=[];d<u.length;d++)i=u[d],t[i]&&l.push(t[i][0]),t[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);g&&g(n);while(l.length)l.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],a=!0,i=1;i<o.length;i++){var c=o[i];0!==t[c]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=o[0]))}return e}var a={},t={index:0},r=[];function i(e){return u.p+"static/js/"+({"pages-address-index":"pages-address-index","pages-articles-index":"pages-articles-index","pages-auth-index":"pages-auth-index","pages-game-golden":"pages-game-golden","pages-game-luck_wheel":"pages-game-luck_wheel","pages-game-scratch_card":"pages-game-scratch_card","pages-game-tiger":"pages-game-tiger","pages-index-index~pages-order-show~pages-product-index~pages-product-show":"pages-index-index~pages-order-show~pages-product-index~pages-product-show","pages-index-index":"pages-index-index","pages-order-show":"pages-order-show","pages-product-index":"pages-product-index","pages-product-show":"pages-product-show","pages-order-index":"pages-order-index","pages-order-new":"pages-order-new","pages-order-success":"pages-order-success","pages-voucher-voucher":"pages-voucher-voucher"}[e]||e)+"."+{"pages-address-index":"7615cef5","pages-articles-index":"645a7c0b","pages-auth-index":"033edea9","pages-game-golden":"57b0ddb8","pages-game-luck_wheel":"adc64043","pages-game-scratch_card":"6ff8669d","pages-game-tiger":"40c1c252","pages-index-index~pages-order-show~pages-product-index~pages-product-show":"2120cd12","pages-index-index":"11c683b8","pages-order-show":"a6c8d8d0","pages-product-index":"78c21c95","pages-product-show":"6dc5ca2b","pages-order-index":"3c7d85a4","pages-order-new":"911d29c1","pages-order-success":"495730f2","pages-voucher-voucher":"c0c48441"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o=t[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(function(n,a){o=t[e]=[n,a]});n.push(o[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),r=function(n){c.onerror=c.onload=null,clearTimeout(s);var o=t[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,o[1](i)}t[e]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(o,a,function(n){return e[n]}.bind(null,a));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var g=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("4423")},"18fa":function(e,n,o){"use strict";var a=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[];o.d(n,"a",function(){return a}),o.d(n,"b",function(){return t})},"1d49":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={onLaunch:function(){console.log("App Launch"),console.log(this.tui.wxAuthorize())},onShow:function(){console.log("App show")},onHide:function(){console.log("App Hide")}};n.default=a},4423:function(e,n,o){"use strict";var a=o("288e"),t=a(o("cebc"));o("4917"),o("28a5"),o("a481");var r=a(o("795b"));o("cadf"),o("551c"),o("097d"),o("ae8d"),o("1c31"),o("921b");var i=a(o("e143")),u=a(o("8554")),c=a(o("5fc1")),s=a(o("3fdd")),d=a(o("afea"));i.default.use(s.default),i.default.config.productionTip=!1;var g=o("8017");i.default.mixin({onShow:function(e){}});var l={toast:function(e,n,o){uni.showToast({title:e,icon:o?"success":"none",duration:n||2e3})},jssdk:function(){return new r.default(function(e,n){uni.getStorageSync("sessionToken")&&d.default.getJssdk().then(function(n){var o=["onMenuShareAppMessage","onMenuShareTimeline","hideOptionMenu","showOptionMenu","chooseWXPay","updateAppMessageShareData"],a={debug:!1,appId:i.default.prototype.appid,nonceStr:n.noncestr,timestamp:n.timestamp,signature:n.signature,jsApiList:o};g.config(a),g.error(function(e){console.log("config fail:",e)}),g.ready(function(n){e(g),console.log("配置成功")}),console.log(n)}).catch(function(e){console.log(e)})})},constNum:function(){var e=uni.getSystemInfoSync();return"android"==e.platform.toLocaleLowerCase()?300:0},px:function(e){return uni.upx2px(e)+"px"},interfaceUrl:function(){return"https://www.thorui.cn"},request:function(e,n,o,a,t){var i=this;return t||uni.showLoading({mask:!0,title:"请稍候..."}),new r.default(function(r,u){uni.request({url:i.interfaceUrl()+e,data:n,header:{"content-type":a?"application/x-www-form-urlencoded":"application/json",authorization:i.getToken(),security:1},method:o,dataType:"json",success:function(e){!t&&uni.hideLoading(),r(e.data)},fail:function(e){t||i.toast("网络不给力，请稍后再试~"),u(e)}})})},getUrlParams:function(e){e=e.replace(/#.*$/,"");var n,o=e.split(/[?&]/).slice(1),a={};for(n=0;n<o.length;n++){var t=o[n].match(/([^=]+)=([^=]+)/);null!==t&&(a[t[1]]=decodeURIComponent(t[2]))}return a},wxAuthorize:function(){var e=window.location.href,n=this.getUrlParams(e);if(!uni.getStorageSync("sessionToken"))if(n.code)d.default.wxAuth(n.code).then(function(e){uni.setStorageSync("sessionToken",e.authentication_token)}).catch(function(e){console.log(e)});else{var o=i.default.prototype.appid,a=encodeURIComponent(e),t="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(o,"&redirect_uri=").concat(a,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect");console.log(t),window.location.href=t}},uploadFile:function(e){var n=this;return uni.showLoading({title:"请稍候..."}),new r.default(function(o,a){uni.uploadFile({url:"https://abc.cc",filePath:e,name:"file",header:{"content-type":"multipart/form-data"},formData:{},success:function(e){uni.hideLoading();var a=JSON.parse(e.data);if(1===a.code){var t=JSON.parse(a.data)[0];o(t)}else n.toast(e.message)},fail:function(e){a(e),uni.hideLoading(),n.toast(e.message)}})})},setToken:function(e){uni.setStorageSync("token",e)},getToken:function(){return uni.getStorageSync("token")},isLogin:function(){return!!uni.getStorageSync("token")},webURL:function(){return"https://www.thorui.cn/wx"}};i.default.prototype.tui=l,i.default.prototype.$eventHub=i.default.prototype.$eventHub||new i.default,i.default.prototype.$store=c.default,u.default.mpType="app",i.default.prototype.apiUrl="/api",i.default.prototype.appid="wx202bddcd868b179f";var f=new i.default((0,t.default)({store:c.default},u.default));f.$mount()},"5fc1":function(e,n,o){"use strict";var a=o("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(o("795b"));o("96cf");var r=a(o("3b8d")),i=a(o("f499")),u=a(o("e143")),c=a(o("2f62")),s=a(o("b1ab"));u.default.use(c.default);var d=new c.default.Store({state:{version:"1.4.2",isLogin:!!uni.getStorageSync("thorui_mobile"),mobile:uni.getStorageSync("thorui_mobile")||"echo.",memberId:uni.getStorageSync("memberId")||0,openid:"",userInfo:{longitude:null,latitude:null,locationCity:""},appInfo:{commonDataVersion:"0",adVersion:"0",serviceVersion:"0"},adData:{homePageAdverts:[],carPageAdverts:[],servicePageAdverts:[]},modulesData:{serviceModules:[],productModules:[],serviceFuncVOList:[]}},mutations:{login:function(e,n){n&&(e.mobile=n.mobile,e.memberId=n.memberId),e.isLogin=!0},logout:function(e){e.mobile="",e.memberId=0,e.isLogin=!1},setOpenid:function(e,n){e.openid=n},setUserInfo:function(e,n){for(var o in n)for(var a in e.userInfo)o===a&&(e.userInfo[a]=n[o])},setAppInfo:function(e,n){for(var o in n)for(var a in e.appInfo)o===a&&(e.appInfo[a]=n[o])},updateAdData:function(e,n){uni.setStorageSync("carPageAdverts",(0,i.default)(n.adData.carPageAdverts)),e.adData=n.adData},updateModulesData:function(e,n){e.modulesData=n.modulesData}},actions:{checkModuleUpdate:function(){var e=(0,r.default)(regeneratorRuntime.mark(function e(n){var o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=n.commit,a=n.state,e.abrupt("return",new t.default(function(e,n){s.default.request("config/queryHasUpdates",{version:a.appInfo.commonDataVersion},"POST").then(function(n){if(200===n.code){if(!n.data)return;var t=n.data.versionData,r={updateAd:!1,updateService:!1};o("setAppInfo",{commonDataVersion:n.data.version}),t.advertVersion!==a.appInfo.adVersion&&(r.updateAd=!0),t.serviceVersion!==a.appInfo.serviceVersion&&(r.updateService=!0),e(r)}else s.default.toast(n.message)}).catch(function(e){})}));case 2:case"end":return e.stop()}},e,this)}));function n(n){return e.apply(this,arguments)}return n}(),getAds:function(e){e.dispatch;var n=e.commit,o=e.state;s.default.request("config/queryAdverts",{clientDictKey:1,version:o.appInfo.adVersion},"POST").then(function(e){200===e.code?(n("updateAdData",{adData:e.data}),n("setAppInfo",{adVersion:e.data.version})):s.default.toast(e.message)}).catch(function(e){})},getServices:function(e){var n=e.commit,o=e.state;s.default.request("serviceFunc/searchServiceFunc",{version:o.appInfo.serviceVersion},"POST").then(function(e){200===e.code?(n("updateModulesData",{modulesData:e.data.data}),n("setAppInfo",{serviceVersion:e.data.version})):s.default.toast(e.message)}).catch(function(e){})}}}),g=d;n.default=g},7613:function(e,n,o){"use strict";var a=o("cbc4"),t=o.n(a);t.a},8554:function(e,n,o){"use strict";o.r(n);var a=o("18fa"),t=o("c6ad");for(var r in t)"default"!==r&&function(e){o.d(n,e,function(){return t[e]})}(r);o("7613");var i=o("2877"),u=Object(i["a"])(t["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},8664:function(e,n,o){n=e.exports=o("2350")(!1),n.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */\n/*app.wxss*/uni-radio .uni-radio-input{width:10px!important;height:10px!important}uni-checkbox .uni-checkbox-input{width:10px!important;height:10px!important}uni-page-body{background:#fafafa;font-size:%?32?%}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.phcolor{color:#ccc;font-size:%?32?%}uni-button:after{border:none}.opcity{opacity:.5}.hover{background:#f7f7f9!important}.ellipsis{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}\n/*列表统一样式 */.list-item{position:relative}.list-item:after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:%?30?%}.last:after{border-bottom:0!important}\n/*按钮样式*/.btn-primary{width:100%;height:%?90?%;line-height:%?90?%;background:-webkit-gradient(linear,right top,left top,from(#5677fc),to(#5c8dff));background:-o-linear-gradient(right,#5677fc,#5c8dff);background:linear-gradient(-90deg,#5677fc,#5c8dff);border-radius:%?45?%;color:#fff;font-size:%?36?%}.btn-hover{color:#d5d4d9;background:-webkit-gradient(linear,right top,left top,from(#4a67d6),to(#4e77d9));background:-o-linear-gradient(right,#4a67d6,#4e77d9);background:linear-gradient(-90deg,#4a67d6,#4e77d9)}.btn-gray{background:#ededed;color:#999!important}.btn-gray-hover{background:#d5d5d5!important;color:#898989}.btn-white{background:#fff;color:#333!important}.tui-white-hover{background:#e5e5e5!important;color:#2e2e2e!important}.btn-disabled{color:#fafbfc!important;background:-webkit-gradient(linear,right top,left top,from(#cad8fb),to(#c9d3fb));background:-o-linear-gradient(right,#cad8fb,#c9d3fb);background:linear-gradient(-90deg,#cad8fb,#c9d3fb)}body.?%PAGE?%{background:#fafafa}',""])},a811:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={appid:""};n.default=a},ae8d:function(e,n,o){"use strict";(function(e){var n=o("288e"),a=n(o("5176")),t=n(o("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{backgroundTextStyle:"dark",navigationBarBackgroundColor:"#5677FC",navigationBarTitleText:"Thor UI",navigationBarTextStyle:"white",backgroundColor:"#fafafa",backgroundColorTop:"#fafafa",backgroundColorBottom:"#fafafa"},tabBar:{color:"#666666",selectedColor:"#5677FC",backgroundColor:"#FFFFFF",list:[]}},e.__uniConfig.router={mode:"history",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},t.default.component("pages-index-index",function(e){var n={component:Promise.all([o.e("pages-index-index~pages-order-show~pages-product-index~pages-product-show"),o.e("pages-index-index")]).then(function(){return e(o("1092"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-product-index",function(e){var n={component:Promise.all([o.e("pages-index-index~pages-order-show~pages-product-index~pages-product-show"),o.e("pages-product-index")]).then(function(){return e(o("e7ea"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-product-show",function(e){var n={component:Promise.all([o.e("pages-index-index~pages-order-show~pages-product-index~pages-product-show"),o.e("pages-product-show")]).then(function(){return e(o("a96d"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-order-new",function(e){var n={component:o.e("pages-order-new").then(function(){return e(o("d4a5"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-order-success",function(e){var n={component:o.e("pages-order-success").then(function(){return e(o("336a"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-order-index",function(e){var n={component:o.e("pages-order-index").then(function(){return e(o("d847b"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-order-show",function(e){var n={component:Promise.all([o.e("pages-index-index~pages-order-show~pages-product-index~pages-product-show"),o.e("pages-order-show")]).then(function(){return e(o("b2e2"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-address-index",function(e){var n={component:o.e("pages-address-index").then(function(){return e(o("2672"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-game-luck_wheel",function(e){var n={component:o.e("pages-game-luck_wheel").then(function(){return e(o("bf40"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-auth-index",function(e){var n={component:o.e("pages-auth-index").then(function(){return e(o("1fae"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-game-scratch_card",function(e){var n={component:o.e("pages-game-scratch_card").then(function(){return e(o("630d"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-game-tiger",function(e){var n={component:o.e("pages-game-tiger").then(function(){return e(o("b9e2"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-game-golden",function(e){var n={component:o.e("pages-game-golden").then(function(){return e(o("cd0a"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-articles-index",function(e){var n={component:o.e("pages-articles-index").then(function(){return e(o("8a92"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-voucher-voucher",function(e){var n={component:o.e("pages-voucher-voucher").then(function(){return e(o("9ec2"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"裂变商城",enablePullDownRefresh:!0,onReachBottomDistance:50})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/product/index",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"商品列表 ",onReachBottomDistance:50,navigationStyle:"custom",titleNView:!1})},[e("pages-product-index",{slot:"page"})])}},meta:{name:"pages-product-index",isNVue:!1,pagePath:"pages/product/index",windowTop:0}},{path:"/pages/product/show",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"商品详情 ",navigationStyle:"custom",titleNView:!1})},[e("pages-product-show",{slot:"page"})])}},meta:{name:"pages-product-show",isNVue:!1,pagePath:"pages/product/show",windowTop:0}},{path:"/pages/order/new",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"提交订单",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"})},[e("pages-order-new",{slot:"page"})])}},meta:{name:"pages-order-new",isNVue:!1,pagePath:"pages/order/new",windowTop:0}},{path:"/pages/order/success",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"支付成功",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"})},[e("pages-order-success",{slot:"page"})])}},meta:{name:"pages-order-success",isNVue:!1,pagePath:"pages/order/success",windowTop:0}},{path:"/pages/order/index",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"我的订单",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",enablePullDownRefresh:!0,onReachBottomDistance:50})},[e("pages-order-index",{slot:"page"})])}},meta:{name:"pages-order-index",isNVue:!1,pagePath:"pages/order/index",windowTop:0}},{path:"/pages/order/show",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"})},[e("pages-order-show",{slot:"page"})])}},meta:{name:"pages-order-show",isNVue:!1,pagePath:"pages/order/show",windowTop:0}},{path:"/pages/address/index",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"地址",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"})},[e("pages-address-index",{slot:"page"})])}},meta:{name:"pages-address-index",isNVue:!1,pagePath:"pages/address/index",windowTop:0}},{path:"/pages/game/luck_wheel",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"转盘抽奖"})},[e("pages-game-luck_wheel",{slot:"page"})])}},meta:{name:"pages-game-luck_wheel",isNVue:!1,pagePath:"pages/game/luck_wheel",windowTop:0}},{path:"/pages/auth/index",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"登录中"})},[e("pages-auth-index",{slot:"page"})])}},meta:{name:"pages-auth-index",isNVue:!1,pagePath:"pages/auth/index",windowTop:0}},{path:"/pages/game/scratch_card",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"刮刮卡"})},[e("pages-game-scratch_card",{slot:"page"})])}},meta:{name:"pages-game-scratch_card",isNVue:!1,pagePath:"pages/game/scratch_card",windowTop:0}},{path:"/pages/game/tiger",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"老虎机"})},[e("pages-game-tiger",{slot:"page"})])}},meta:{name:"pages-game-tiger",isNVue:!1,pagePath:"pages/game/tiger",windowTop:0}},{path:"/pages/game/golden",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"砸金蛋"})},[e("pages-game-golden",{slot:"page"})])}},meta:{name:"pages-game-golden",isNVue:!1,pagePath:"pages/game/golden",windowTop:0}},{path:"/pages/articles/index",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"文章"})},[e("pages-articles-index",{slot:"page"})])}},meta:{name:"pages-articles-index",isNVue:!1,pagePath:"pages/articles/index",windowTop:0}},{path:"/pages/voucher/voucher",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"问券"})},[e("pages-voucher-voucher",{slot:"page"})])}},meta:{name:"pages-voucher-voucher",isNVue:!1,pagePath:"pages/voucher/voucher",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,o("c8ba"))},afea:function(e,n,o){"use strict";var a=o("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(o("795b")),r=a(o("e143")),i=(a(o("8554")),{wxAuth:function(e){return new t.default(function(n,o){uni.request({url:r.default.prototype.apiUrl+"/v1/users/users/wx_login",method:"POST",data:{code:e},header:{},success:function(e){console.log(e),n(e.data)},fail:function(e){console.log(e),o(e)}})})},product:function(e){return new t.default(function(n,o){uni.request({url:r.default.prototype.apiUrl+"/v1/users/products/"+e,method:"GET",header:{"X-Auth-Token":uni.getStorageSync("sessionToken")},success:function(e){n(e.data)},fail:function(e){o(e)}})})},fission:function(e,n){return new t.default(function(o,a){uni.request({url:r.default.prototype.apiUrl+"/v1/users/fissions",method:"POST",data:{token:n,task_id:e},header:{"X-Auth-Token":uni.getStorageSync("sessionToken")},success:function(e){console.log(e.data),o(e.data)},fail:function(e){a(e)}})})},share:function(e){return new t.default(function(n,o){uni.request({url:r.default.prototype.apiUrl+"/v1/users/fissions/share",method:"POST",data:{token:e},header:{"X-Auth-Token":uni.getStorageSync("sessionToken")},success:function(e){n(e.data)},fail:function(e){o(e)}})})},getJssdk:function(){return new t.default(function(e,n){uni.request({url:r.default.prototype.apiUrl+"/v1/users/weixin/jssdk",method:"POST",data:{url:window.location.href},header:{"X-Auth-Token":uni.getStorageSync("sessionToken")},success:function(n){e(n.data)},fail:function(e){n(e)}})})}}),u=i;n.default=u},b1ab:function(e,n,o){"use strict";var a=o("288e"),t=a(o("795b")),r=a(o("f499")),i={interfaceUrl:function(){return"http://39.108.124.252:12000/"},toast:function(e){uni.showToast({title:e||"出错啦~",icon:"none",duration:2e3})},request:function(e,n,o,a,u){u&&uni.showLoading({mask:!0,title:"请稍候..."});var c=n.token||"";delete n["token"];var s={data:"POST"===o?n:(0,r.default)(n)};return new t.default(function(n,t){uni.request({url:i.interfaceUrl()+e,data:"POST"===o?(0,r.default)(s):s,header:{"content-type":a?"application/x-www-form-urlencoded":"application/json",authorization:c,security:"1"},method:o,dataType:"json",success:function(e){u&&uni.hideLoading(),n(e.data)},fail:function(e){i.toast("网络不给力，请稍后再试~"),t(e)}})})}};e.exports={request:i.request,toast:i.toast}},c1f5:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pages:{"pages/index/index":{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"裂变商城",enablePullDownRefresh:!0,onReachBottomDistance:50},"pages/product/index":{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"商品列表 ",onReachBottomDistance:50,navigationStyle:"custom",titleNView:!1},"pages/product/show":{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7",navigationBarTitleText:"商品详情 ",navigationStyle:"custom",titleNView:!1},"pages/order/new":{navigationBarTitleText:"提交订单",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"},"pages/order/success":{navigationBarTitleText:"支付成功",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"},"pages/order/index":{navigationBarTitleText:"我的订单",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black",enablePullDownRefresh:!0,onReachBottomDistance:50},"pages/order/show":{navigationBarTitleText:"订单详情",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"},"pages/address/index":{navigationBarTitleText:"地址",navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"},"pages/game/luck_wheel":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"转盘抽奖"},"pages/auth/index":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"登录中"},"pages/game/scratch_card":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"刮刮卡"},"pages/game/tiger":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"老虎机"},"pages/game/golden":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"砸金蛋"},"pages/articles/index":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"文章"},"pages/voucher/voucher":{navigationBarBackgroundColor:"#FC4034",navigationBarTitleText:"问券"}},globalStyle:{backgroundTextStyle:"dark",navigationBarBackgroundColor:"#5677FC",navigationBarTitleText:"Thor UI",navigationBarTextStyle:"white",backgroundColor:"#fafafa",backgroundColorTop:"#fafafa",backgroundColorBottom:"#fafafa"}};n.default=a},c6ad:function(e,n,o){"use strict";o.r(n);var a=o("1d49"),t=o.n(a);for(var r in a)"default"!==r&&function(e){o.d(n,e,function(){return a[e]})}(r);n["default"]=t.a},cbc4:function(e,n,o){var a=o("8664");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var t=o("4f06").default;t("f8b01be2",a,!0,{sourceMap:!1,shadowMode:!1})}});