
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//uni.setStorageSync('newSessionToken', null);
			//alert(uni.getStorageSync('newSessionToken'));
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
	.List uni-checkbox .uni-checkbox-input,uni-radio .uni-radio-input{
		width: 11px !important;height: 11px !important;
	}
	.List uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{background: #fff; color: #16AB60 !important;}
	.List uni-radio .uni-radio-input{border-color:#d1d1d1 !important; background-color:#fff !important;}
	.List uni-radio .uni-radio-input.uni-radio-input-checked:before{color: #16AB60 !important;font-size: 23px;}
</style>
