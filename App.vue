
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//uni.setStorageSync('sessionToken', null);
			//alert(uni.getStorageSync('sessionToken'));
			this.tui.wxAuthorize()
			//util.wxAuthorize();
		},
		onShow: function() {
			//this.tui.jssdk()
			console.log('App show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/app.css";
	
</style>
