(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1748:function(t,e,n){"use strict";(function(t,e,o){n("17f2"),n("921b");var a=u(n("66fd")),i=u(n("e016")),s=u(n("c658")),r=u(n("3e09")),c=u(n("2047"));function u(t){return t&&t.__esModule?t:{default:t}}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.use(r.default),a.default.config.productionTip=!1;var f=n("8639");a.default.mixin({onLaunch:function(t){if(t&&"app"===t.query.from){var e={path:t.path,from:t.query.from};this.tui.setOption(e)}},onLoad:function(e){console.log(t("onLoad111"," at main.js:23"))},onShow:function(){if(window.addEventListener("message",function(n){console.log(t("h5-addEventListener",JSON.stringify(n.data),n," at main.js:28")),n&&n.data&&"toHome"===n.data.app&&(e.navigateTo({url:"/pages/index/index"}),this.tui.postMessage(!1))}),this.route){var n=this.tui.getOption();n.currentPath=this.route,this.tui.setOption(n);var o="pages/index/index"!==this.route;this.tui.postMessage(o)}}});var d={option:{},setOption:function(t){this.option=Object.assign({},this.option,t)},getOption:function(){return this.option},postMessage:function(t){window.parent.postMessage({event:"hideTabs",params:{hide:t}},"*")},toast:function(t,n,o){e.showToast({title:t,icon:o?"success":"none",duration:n||2e3})},jssdk:function(){return new Promise(function(n,o){e.getStorageSync("sessionToken")&&c.default.getJssdk().then(function(e){console.log(t(e," at main.js:75"));var o=["onMenuShareAppMessage","onMenuShareTimeline","hideOptionMenu","showOptionMenu","chooseWXPay","updateAppMessageShareData"],i={debug:!1,appId:a.default.prototype.appid,nonceStr:e.noncestr,timestamp:e.timestamp,signature:e.signature,jsApiList:o};f.config(i),f.error(function(e){console.log(t("config fail:",e," at main.js:94"))}),f.ready(function(e){n(f),console.log(t("配置成功"," at main.js:98"))}),console.log(t(e," at main.js:101"))}).catch(function(e){console.log(t(e," at main.js:103"))})})},constNum:function(){var t=e.getSystemInfoSync();return"android"==t.platform.toLocaleLowerCase()?300:0},px:function(t){return e.upx2px(t)+"px"},interfaceUrl:function(){return"https://www.thorui.cn"},request:function(t,n,o,a,i){var s=this;return i||e.showLoading({mask:!0,title:"请稍候..."}),new Promise(function(r,c){e.request({url:s.interfaceUrl()+t,data:n,header:{"content-type":a?"application/x-www-form-urlencoded":"application/json",authorization:s.getToken(),security:1},method:o,dataType:"json",success:function(t){!i&&e.hideLoading(),r(t.data)},fail:function(t){i||s.toast("网络不给力，请稍后再试~"),c(t)}})})},getUrlParams:function(t){t=t.replace(/#.*$/,"");var e,n=t.split(/[?&]/).slice(1),o={};for(e=0;e<n.length;e++){var a=n[e].match(/([^=]+)=([^=]+)/);null!==a&&(o[a[1]]=decodeURIComponent(a[2]))}return o},wechatBowser:function(){return this.browser("wechat")},browser:function(t){var e=!1,n=navigator.userAgent.toLowerCase();return"wechat"==t&&(e=n.search("micromessenger")>-1),e},wxAuthorize:function(){var n=window.location.href,o=this.getUrlParams(n);if(console.log(t(e.getStorageSync("sessionToken")," at main.js:179")),o.session&&o.from&&"app"==o.from&&e.setStorageSync("sessionToken",o.session),!e.getStorageSync("sessionToken")&&this.wechatBowser())if(o.code)c.default.wxAuth(o.code).then(function(o){e.setStorageSync("sessionToken",o.authentication_token),console.log(t(n," at main.js:192")),window.location.href=n}).catch(function(e){console.log(t(e," at main.js:195"))});else{var i=a.default.prototype.appid,s=encodeURIComponent(n),r="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(i,"&redirect_uri=").concat(s,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect");console.log(t(r," at main.js:204")),window.location.href=r}},uploadFile:function(t){var n=this;return e.showLoading({title:"请稍候..."}),new Promise(function(o,a){e.uploadFile({url:"https://abc.cc",filePath:t,name:"file",header:{"content-type":"multipart/form-data"},formData:{},success:function(t){e.hideLoading();var a=JSON.parse(t.data);if(1===a.code){var i=JSON.parse(a.data)[0];o(i)}else n.toast(t.message)},fail:function(t){a(t),e.hideLoading(),n.toast(t.message)}})})},setToken:function(t){e.setStorageSync("token",t)},getToken:function(){return e.getStorageSync("token")},isLogin:function(){return!!e.getStorageSync("token")},webURL:function(){return"https://www.thorui.cn/wx"},goBack:function(){console.log(t(this.option," at main.js:254"));var n=this.option;if(n&&n.currentPath===n.path&&"app"===n.from)console.log(t("返回到app"," at main.js:257")),window.parent.postMessage({event:"backEvent",params:{}},"*");else{var o=getCurrentPages();o.length>1?(console.log(t("h5返回到上一页"," at main.js:266")),e.navigateBack({delta:1})):(console.log(t("h5返回到首页"," at main.js:271")),e.reLaunch({url:"/pages/index/index"}))}}};a.default.prototype.tui=d,a.default.prototype.$eventHub=a.default.prototype.$eventHub||new a.default,a.default.prototype.$store=s.default,i.default.mpType="app",a.default.prototype.apiUrl="https://api.shjietui.com/api",a.default.prototype.appid="wx202bddcd868b179f";var h=new a.default(p({store:s.default},i.default));o(h).$mount()}).call(this,n("0de9")["default"],n("6e42")["default"],n("6e42")["createApp"])},"6d5c":function(t,e,n){"use strict";n.r(e);var o=n("ce68"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},cb45:function(t,e,n){},ce68:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:5")),this.tui.wxAuthorize()},onShow:function(){console.log(t("App show"," at App.vue:13"))},onHide:function(){console.log(t("App Hide"," at App.vue:16"))}};e.default=n}).call(this,n("0de9")["default"])},e016:function(t,e,n){"use strict";n.r(e);var o=n("6d5c");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("e49a");var i,s,r,c,u=n("f0c5"),p=Object(u["a"])(o["default"],i,s,!1,null,null,null,!1,r,c);e["default"]=p.exports},e49a:function(t,e,n){"use strict";var o=n("cb45"),a=n.n(o);a.a}},[["1748","common/runtime","common/vendor"]]]);