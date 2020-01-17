import Vue from 'vue'
import App from './App'
const api = {
	follow_company: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/users/follow_company', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					company_id: id
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
	unfollow_company: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/users/unfollow_company', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					company_id: id
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
	company: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/companies/' + id, //仅为示例，并非真实接口地址。
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
	tasks: function(page,company_id, search){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/tasks', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					page: page,
					per_page: '15',
					company_id: company_id,
					search: search,
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
	taskProducts: function(page,per_page,status){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_products', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					page: '1',
					per_page: '15',
					status: 'success',
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
	companyBanners: function(company_id, page,per_page){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/tasks/company_banners', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					company_id: company_id,
					page: '1',
					per_page: '15'
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
	me: function(){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/users/me', //仅为示例，并非真实接口地址。
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
	playGame: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/games/' + id + '/play', //仅为示例，并非真实接口地址。
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
	game: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/games/' + id, //仅为示例，并非真实接口地址。
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
	receiveAddress: function(order_id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + order_id + '/address', //仅为示例，并非真实接口地址。
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
	setExpress: function(id, express_no, express_type){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id+ '/set_express', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					express_no: express_no,
					express_type: express_type
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
	afterSale: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id+ '/after_order', //仅为示例，并非真实接口地址。
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
	queryOrder: function(id){
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/orders/' + id + '/query_order', //仅为示例，并非真实接口地址。
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
	//推文
	task_article: function(id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_articles/' + id, //仅为示例，并非真实接口地址。
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
	//问卷调查提交
	task_FormQuestionnaires: function(answer,id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/task_questionnaires/' + id + '/answer', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					answer: answer,
					id: id
				},
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
	products: function(category_id, search, sort, page, company_id) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: Vue.prototype.apiUrl + '/v1/users/products', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					category_id: category_id,
					sort: sort,
					search: search,
					page: page,
					company_id: company_id
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
			console.log(Vue.prototype.apiUrl)
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
