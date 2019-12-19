<template>
	<view>
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}">
				链接任务
			</view>
			<view class="tui-header-icon" >
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" @tap="back">
					<tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				</view>
			</view>
		</view>
		<!--header-->
		<view style="marginTop:44px">
			<web-view :src="task.share_link"></web-view>
		</view>
	</view>

</template>

<script>
	import api from "../../api.js"
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon
		},
		data() {
			return {
				task: {},
				from: 'h5',
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
			}
		},
		onLoad: function(options) {
			let that = this
			if (options.from) {
				this.from = options.from
			}
			api.linkTask(options.id).then(function(data) {
				that.task = data;
				api.view(that.task.id, options.token).then(function(data){
					console.log(data);
				}).catch(function(){
					
				})
				api.fission(data.id, options.token).then(function(fission_log) {
					console.log(111);
					that.tui.jssdk().then(function(jweixin) {
						let image_path = ''
						if(that.task.image){
							image_path = task.image.image_path
						}
						jweixin.updateAppMessageShareData({
							title: that.task.name, // 分享标题
							desc: '分享链接赚金币,提现赢大奖', // 分享描述
							link: (location.origin + location.pathname + '?id=' + that.task.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: image_path, // 分享图标
							success: function() {
								// 用户点击了分享后执行的回调函数
								console.log('updateAppMessageShareData');
							}
						});
					}).catch(function(e) {
						console.log(e);
					})
				}).catch(function() {

				})
			}).catch(function(e) {
				console.log(e);
				//跳转到回上一页
			})
		},
		methods: {
			back: function() {
				this.tui.goBack(this.from);
			}
		}
	}
</script>

<style>
	/* header*/
	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
		background-color: #FC4034;
	}
	
	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 44px;
		transform: translateZ(0);
		z-index: 99999;
	}
	
	
	
	.tui-header-icon .tui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}
	
	.tui-icon-ml {
		margin-left: 20rpx;
	}
	
	.tui-icon {
		border-radius: 16px;
	}
	
	
	.tui-icon-back {
		height: 44px !important;
		width: 44px !important;
		display: block !important;
	}
	
	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}
	
	/* header*/
</style>
