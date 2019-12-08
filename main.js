import Vue from 'vue'
import App from './App'
import store from './store'
import ScratchCard from 'vue-scratch-card0'
import api from './api'
Vue.use(ScratchCard)
Vue.config.productionTip = false

let jweixin = require('jweixin-module')

Vue.mixin({
	onShow: function(options) {
		
	}
});

const tui = {
	toast: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	jssdk: function(){
		return new Promise(function(resolve, reject){
			if (!uni.getStorageSync('sessionToken')) return;
			api.getJssdk().then(function(data) {
				let apiList = [ // 可能需要用到的能力
					'onMenuShareAppMessage',
					'onMenuShareTimeline',
					'hideOptionMenu',
					'showOptionMenu',
					'chooseWXPay',
					'updateAppMessageShareData'
				];
				let info = {
					debug: false, // 调试，发布的时候改为false
					appId: Vue.prototype.appid,
					nonceStr: data.noncestr,
					timestamp: data.timestamp,
					signature: data.signature,
					jsApiList: apiList
				};
				jweixin.config(info);
				jweixin.error(err => {
					console.log('config fail:', err);
				});
				jweixin.ready(res => {
					resolve(jweixin);
					console.log('配置成功')
					//jweixin.onMenuShareAppMessage(shareParams);
				});
				console.log(data)
			}).catch(function(e){
				console.log(e)
			})
		})
	},
	constNum: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
	},
	px: function(num) {
		return uni.upx2px(num) + 'px';
	},
	interfaceUrl: function() {
		//接口地址
		return "https://www.thorui.cn";
	},
	request: function(url, postData, method, type, hideLoading) {
		//接口请求
		if (!hideLoading) {
			uni.showLoading({
				mask: true,
				title: '请稍候...'
			})
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
					'authorization': this.getToken(),
					'security': 1
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					!hideLoading && uni.hideLoading()
					resolve(res.data)
				},
				fail: (res) => {
					if (!hideLoading) {
						this.toast("网络不给力，请稍后再试~")
					}
					reject(res)
				}
			})
		})
	},
	getUrlParams: function(url) {
		url = url.replace(/#.*$/, '');
		var queryArray = url.split(/[?&]/).slice(1);
		var i;
		var args = {};
		for (i = 0; i < queryArray.length; i++) {
			var match = queryArray[i].match(/([^=]+)=([^=]+)/);
			if (match !== null) {
				args[match[1]] = decodeURIComponent(match[2]);
			}
		}
		return args;
	},
	wxAuthorize: function() {
		let link = window.location.href;
		let params = this.getUrlParams(link); // 地址解析
		// 已经授权登录过的就不用再授权了
		//uni.setStorageSync('sessionToken', null)
		if (uni.getStorageSync('sessionToken')) return;
		// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
		if (params.code) {
			//api.wxAuth(params.code); // 调用后台接口，授权
			api.wxAuth(params.code).then(function(data) {
				uni.setStorageSync('sessionToken', data.authentication_token)
			}).catch(function(e) {
				console.log(e)
			});
		} else {
			let appid = Vue.prototype.appid;
			let uri = encodeURIComponent(link);
			//uri = encodeURIComponent('http://h5.shjietui.com');
			let authURL =
				`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
			console.log(authURL);
			window.location.href = authURL;
		}
	},
	uploadFile: function(src) {
		const that = this
		uni.showLoading({
			title: '请稍候...'
		})
		return new Promise((resolve, reject) => {
			const uploadTask = uni.uploadFile({
				url: 'https://abc.cc',
				filePath: src,
				name: 'file',
				header: {
					'content-type': 'multipart/form-data'
				},
				formData: {},
				success: function(res) {
					uni.hideLoading()
					let d = JSON.parse(res.data)
					if (d.code === 1) {
						let fileObj = JSON.parse(d.data)[0];
						//文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
						resolve(fileObj)
					} else {
						that.toast(res.message);
					}
				},
				fail: function(res) {
					reject(res)
					uni.hideLoading();
					that.toast(res.message);
				}
			})
		})
	},
	setToken: function(token) {
		uni.setStorageSync("token", token)
	},
	getToken() {
		return uni.getStorageSync("token")
	},
	isLogin: function() {
		return uni.getStorageSync("token") ? true : false
	},
	webURL: function() {
		return "https://www.thorui.cn/wx"
	}
}
//uni.setStorageSync('sessionToken', '555')
Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
App.mpType = 'app'
Vue.prototype.apiUrl = '/dpc/api'
//Vue.prototype.apiUrl = 'http://liebian.natapp1.cc'
Vue.prototype.appid = 'wx202bddcd868b179f'
const app = new Vue({
	store,
	...App
})
app.$mount()
