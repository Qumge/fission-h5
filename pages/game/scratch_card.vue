<template>
	<view >
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}">
				刮刮卡
			</view>
			<view class="tui-header-icon"  :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" @tap="back">
					<tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				</view>
			</view>
		</view>
		<!--header-->
		<!--  -->
		<view :style="{marginTop:21+'px'}"  style="background: url(../../static/images/game/stage.png) no-repeat center bottom;background-size: contain;padding: 50% 0;">
			<vue-scratch-card 
			element-id='scratchWrap'
			:ratio=0.5
			:move-radius=20 
			:start-callback=startCallback 
			:clear-callback=clearCallback
			cover-color='#fff'>
			    <div slot='result' class="vue-scratch-card ">
			        <!-- 恭喜您中大奖啦～～ -->
					再接再厉~~
			    </div>
			</vue-scratch-card >
			 
		</view>
		<!-- 说明 -->
		<view class="explain">
			<view class="ExplainTitle">游戏说明</view>
			<view class="ExplainTxt">
				<view class="TxtTitle">玩法说明</view>
				<view class="TxtCon" v-if="!game.task_game_task">每抽奖一次平台扣去{{game.cost}}积分</view>
				<view class="TxtCon" v-else>任务状态用户可以免费抽奖一次</view>
				<view class="TxtTitle">活动奖品</view>
				<template v-for="(item,index) in game.prizes">
					<view class="TxtCon" >
						{{index}} 等奖：{{item.number}}金币</view>
					
				</template>
				
				<view class="TxtTitle">活动时间</view>
				<view class="TxtCon">shij</view>
				<view class="TxtZ">
					<text class="TZ">注：</text>
					本次活动奖品仅限在shij日前有效，过期自动作废。
				</view>
				<view class="TxtTitle">主办方</view>
				<view class="TxtCon">趣图美业有限公司提供</view>
				
			</view>
		</view>

	</view>
	<!-- https://github.com/ZENGzoe/vue-scratch-card -->

</template>

<script>
	import api from "../../api.js"
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon,
		},
		data() {
			return {
				game:{
					task_game_task:{
						valid_from:'',
						valid_to:'',
					}
				},
				from: 'h5',
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
			}
		},
		onLoad(options) {
			// 15
			if (options.from) {
				this.from = options.from
			}
			let that = this
			this.showShare = this.tui.wechatBowser();
			api.me(options.id).then(function(data){
				console.log(data)
				// that.MeCoin = data
				that.UserIntegral = data.coin
			}).catch(function(){ })
			
			api.game(options.id).then(function(data) {
					that.game = data;
					console.log(data);
					
					if (!that.tui.wechatBowser()) return;
					if (!that.game.task_id) return;
					//查看
					console.log(that.game.task_id);
					api.view(that.game.task_id, options.token).then(function(data){
						console.log(data);
					}).catch(function(){
						
					})
					api.fission(that.game.task_id, options.token).then(function(fission_log) {
						console.log(fission_log);
						that.tui.jssdk().then(function(jweixin) {
							let image_path = ''
							if(fission_log.task.image){
								image_path = fission_log.task.image.image_path
							}
							jweixin.updateAppMessageShareData({ 
								title: that.game.name, // 分享标题
								desc: '分享链接赚金币,提现赢大奖', // 分享描述
								link: (location.origin + location.pathname + '?id=' + that.game.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: image_path, // 分享图标
								success: function () {
								  // 设置成功
								  console.log('updateAppMessageShareData');
								}
							  })
							// jweixin.onMenuShareAppMessage({
								
							// 	title: that.game.name, // 分享标题
							// 	desc: '分享链接赚金币,提现赢大奖', // 分享描述
							// 	link: (location.origin + location.pathname + '?id=' + that.game.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							// 	imgUrl: that.game.images[0].image_path, // 分享图标
							// 	type: '', // 分享类型,music、video或link，不填默认为link
							// 	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
							// 	success: function() {
							// 		// 用户点击了分享后执行的回调函数
							// 		console.log('share')
							// 		api.share(fission_log.token).then(function(data) {
							// 			console.log(data);
							// 		})
							// 	}
							// });
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
			},
			
			startCallback() {
				console.log('抽奖成功！')
				api.playGame(this.game.id).then(function(data){
					console.log(data)
					
					
				}).catch(function(){
					
				})
			},
			clearCallback() {
				console.log('清除完毕！')
			}
		},
	}
</script>

<style>
	.explain{width: 690rpx;margin: 60rpx auto 100rpx;}
	.ExplainTitle{text-align: center;font-size: 36rpx;font-weight: bold;color: #8a0a0a;}
	.ExplainTxt{text-align: left;margin: 20rpx auto;}
	.TxtTitle{font-size: 30rpx;color: #545454;font-weight: bold;margin-top: 30rpx;margin-bottom: 10rpx;}
	.TxtCon{font-size: 26rpx;color: #999;}
	.TxtZ{color: #d20b0b;font-size: 24rpx;margin-top: 10rpx;letter-spacing: 0.5px;}
	.TZ{font-weight: bold;font-size: 26rpx; color: #d20b0b;}
	
	
	
	.vue-scratch-card{background: #e42121;color: #fff;text-align: center;font-size: 20px;font-weight: bold;position: absolute;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;}
	.scratchCard .pic{display: none;}
	
	
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
