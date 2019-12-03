<template>
</template>

<script>
</script>

<style>
</style>
<script>
	import Vue from 'vue'
	export default {
		onLoad: function(options){
			console.log(2222);
			uni.request({
			    url: Vue.prototype.apiUrl + 'api/v1/users/users/wx_login', //仅为示例，并非真实接口地址。
				method: 'POST',
			    data: {
			        code: options.code
			    },
			    success: (res) => {
					console.log(res)
					uni.setStorageSync('sessionToken', res.data.authentication_token)
					console.log(options.state)
					location.href = options.state;
			        console.log(res.data);
			    }
			});
		}
	}
</script>


