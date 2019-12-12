import Vue from 'vue'
import App from './App'
const api = {
	task_questionnaiire: function(id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_questionnaires/' + id, //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	},
	wxAuth: function(code) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/users/wx_login', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					code: code
				},
				header: {
					// 'Access-Control-Allow-Origin': '*'
				},
				success: (res) => {
					console.log(res)
					resolve(res.data)
				},
				fail: (res) => {
					console.log(res)
					reject(res)
				}
			});
		})
	},
	linkTasks: function(page, per_page) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_links', //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					// console.log(res.data);
					console.log(res);
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	},
	linkTask: function(id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_links/' + id, //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					// console.log(res.data);
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	},
	product: function(id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/products/' + id, //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	},
	fission: function(task_id, token) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/fissions',
				method: 'POST',
				data: {
					token: token,
					task_id: task_id
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
					console.log(res.data)
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})

	},
	share: function(token) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/fissions/share', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					token: token
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})

	},
	getJssdk: function() {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/weixin/jssdk', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					url: window.location.href,
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	},

}

export default api
