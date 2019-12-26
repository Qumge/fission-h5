import Vue from 'vue'
import App from './App'
const api = {
	wxPay: function(ids, desc){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/wx_pay', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					ids: ids,
					desc: desc
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	address: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/addresses/' + id, //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	defaultAddress: function(){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/addresses/default', //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	addresses: function(){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/addresses', //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	createAddress: function(data){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/addresses', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: data,
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	updateAddress: function(id, data){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/addresses/' + id, //仅为示例，并非真实接口地址。
				method: 'PUT',
				data: data,
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	orders: function(type, page){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/my', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					page: page,
					type: type
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	receive: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id+ '/receive', //仅为示例，并非真实接口地址。
				method: 'POST',
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	express: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id+ '/express', //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	order: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id, //仅为示例，并非真实接口地址。
				method: 'GET',
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	applyOrder: function(product_norms, addressId, desc, platform){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					product_norms: product_norms,
					desc: desc,
					address_id: addressId,
					platform: platform
				},
				success: (res) => {
					if (res.data.error && res.data.error === "401 Unauthorized") {
						uni.setStorageSync('sessionToken', null)
					}
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
	cart: function(id,number, reset){
		// return new Promise(function(resolve, reject) {
			// uni.setStorageSync('cart', null)
			//查
			var norms = uni.getStorageSync('cart')
			// console.log(norms);
			if(norms){
				console.log(111)
				console.log(id);
				var flag = true
				let norm_index  = norms.findIndex(function(norm, index, arr){
					return norm.id == id
				})
				console.log(norm_index);
				if(norm_index >= 0){
					if(reset){
						if(number > 0){
							norms[norm_index] = {id: id, number: number}
						}else{
							console.log(33);
							norms.splice(norm_index, 1)
						}
					}else{
						norms[norm_index] = {id: id, number: norms[norm_index].number + number}
					}
				}else{
					if(number > 0){
						norms.push({id: id, number: number})
					}
				}
			}else{
				norms = [{id: id, number: number}]
			}
			// 存
			uni.setStorageSync('cart', norms);
		// })
	},
	//问卷
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
	categories: function() {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/categories', //仅为示例，并非真实接口地址。
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
	view: function(task_id, token){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/users/view',
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
	categories: function() {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/categories', //仅为示例，并非真实接口地址。
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
	products: function(category_id, search, sort, page) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/products', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					category_id: category_id,
					sort: sort,
					search: search,
					page: page
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
	norms: function(ids, page) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/products/norms', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					ids: ids,
					page: page
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
	norm: function(id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/products/norm', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					id: id,
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
