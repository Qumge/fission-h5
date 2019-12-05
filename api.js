import Vue from 'vue'
import App from './App'
const api = {
	//http://liebian.natapp1.cc/api/v1/users/task_questionnaires/1
	task_questionnaiire: function(id) {
		
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + 'api/v1/users/task_questionnaires/'+ id, //仅为示例，并非真实接口地址。
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
				url: Vue.prototype.apiUrl + 'api/v1/users/users/wx_login', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					code: code
				},
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
				url: Vue.prototype.apiUrl + 'api/v1/users/fissions', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					token: token,
					task_id: task_id
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				success: (res) => {
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})

	},
	getJssdk: function(task_id, token) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + 'api/v1/users/fissions', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					task_id: task_id,
					token: token
				},
				header: {
					'X-Auth-Token': uni.getStorageSync('sessionToken')
				},
				success: (res) => {
					resolve(res.data)
				},
				fail: (res) => {
					reject(res)
				}
			});
		})
	}
}

export default api
