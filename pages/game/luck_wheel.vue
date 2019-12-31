<template>
	<view class="page">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}" >
				大转盘
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" 
				 @tap="back">
				 <tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				 </view>
			</view>
		</view>
		<!--header-->
		<view class="stage" style="margin-top: -6px;">
			<image class='Imgs' src="/static/images/game/stage.png" mode="widthFix"></image>
			<view @click="shows" v-if="showShare" style="width: 180rpx;background: #b3241b; padding: 10rpx 30rpx;border-radius: 10rpx ;position: absolute;right: 0; display: flex;align-items: center;">
				<tui-icon name="partake" :size="15" color="#fff"></tui-icon>
				<text style="color: #fff;font-size: 28rpx;margin-left: 10rpx;">分享得金币</text>
			</view>
			<view v-show="ShowGuidance">
				<view class="Bg" @click="colse"></view>
				<view class="Guidance" @click="colse">
					<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="container">
				<view class="tui-dot" :class="['tui-dot-'+(index+1)]" v-for="(item,index) in circleList" :key="index"></view>
				<view class="tui-container-in">
					<view class="tui-content-out" :class="['tui-award-'+(index+1),index==indexSelect?'tui-awardSelect':'']" v-for="(item,index) in awardList"
					 :key="index">
						<view>{{item.id}}金币</view>
						<!-- <image class="tui-award-image" :src="'../../static/images/luck/'+item.img"></image> -->
					</view>
					<view class="tui-btn-start" :class="[isRunning?'tui-ative':'']" @tap="startDrawing">立即抽奖</view>
				</view>
			</view>
			
			
			<view style="position: relative;top: 340rpx;">
				
				<view class="explain">
					<view class="ExplainTitle">游戏说明</view>
					<view class="ExplainTxt">
						<view class="TxtTitle">活动时间</view>
						<view class="TxtCon">2019年09月09日 - 2019年09月09日</view>
						<view class="TxtTitle">活动奖品</view>
						<view class="TxtCon">一等奖：Iphone XS 一台</view>
						<view class="TxtCon">二等奖：HUAWEI 手机一台</view>
						<view class="TxtCon">三等奖：空气进化器一个</view>
						<view class="TxtZ">
							<text class="TZ">注：</text>
							本次活动奖品仅限在2019年09月09日前有效，过期自动作废。
						</view>
						<view class="TxtTitle">主办方</view>
						<view class="TxtCon">趣图美业有限公司提供</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from "../../api.js"
	import tuiIcon from "@/components/icon/icon"
	import GuidancePopup from "@/components/GuidancePopup/GuidancePopup"
	export default {
		components: {
			GuidancePopup,
			tuiIcon,
		},
		data() {
			return {
				game:{},
				userIntegral:null,
				ShowGuidance: false,
				circleList: 24, //圆点
				from: 'h5',
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 1,
				iconOpcity: 0.5,
				awardList:{}, //奖品数组
				indexSelect: 0, //被选中的奖品index
				isRunning: false, //是否正在抽奖
				showShare: false
			}
		},
		onLoad: function(options) {
			// 16
			let that = this
			if (options.from) {
				this.from = options.from
			}
			this.showShare = this.tui.wechatBowser();
			api.me().then(function(data){
				console.log(data)
				that.userIntegral = data.coin
			}).catch(function(){ })
			
			api.game(options.id).then(function(data) {
					that.game = data;
					that.awardList = data.prizes;
					console.log(data);
					// 判断奖品多少
					let prizes = data.prizes.length
					if(prizes!=8){
							that.awardList = that.game.prizes
						for (let i = prizes; i < 8; i++) {
							that.awardList.push({id:0,coin:'很遗憾'})
							// console.log(that.awardList)
						}
					}
							
					
					
					
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
			shows: function() {
				console.log(this.ShowGuidance)
				this.ShowGuidance = true
			},
			colse: function() {
				this.ShowGuidance = false
			},
			//获取随机数
			// getRandom: function(u) {
			// 	// let rnd = Math.random() > 0.5 ? "2" : "1";
			// 	let rnd = Math.random() > 0.5 ? "4" : "1";
			// 	u = u || 3;
			// 	for (var i = 0; i < u; i++) {
			// 		// rnd += Math.floor(Math.random() * 10);
			// 		rnd += Math.floor(Math.random());
			// 	}
			// 	return Number(rnd);
			// },
			//开始抽奖
			startDrawing: function() {
				let that = this;
				
				
				//获取随机数
				let getRandom = function(u) {
					// let rnd = Math.random() > 0.5 ? "2" : "1";
					let rnd = Math.random() > 0 ? "3" : "1";
					u = u || 3;
					for (var i = 0; i < u; i++) {
						// rnd += Math.floor(Math.random() * 10);
						rnd += Math.floor(Math.random());
					}
					return Number(rnd);
				}
				console.log(this.game)
				if(!this.game.task_game_task && this.userIntegral < this.game.coin){
					uni.showModal({
						title:'温馨提示',
						content: '您的金币不足'
					})
				}else{
					if (this.isRunning) return
					this.isRunning = true;
					let indexSelect = 0;
					let i = 0;
					let randomNum = getRandom(3);
					// let randomNum = this.getRandom(3);
					console.log(randomNum)
					let timer = setInterval(() => {
						++indexSelect;
						//这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
						indexSelect = indexSelect % 8;
						this.indexSelect = indexSelect;
						i += 40;
						if (i > randomNum) {
							//去除循环
							clearInterval(timer)
							timer = null;
							if(this.awardList[indexSelect].id==0){
								var con = '很遗憾'
							}else{
								var con = '获得了金币' + this.awardList[indexSelect].id + '个'
							}
							//获奖提示
							uni.showModal({
								title: '提示',
								content: con,
								confirmColor: '#5677FC',
								showCancel: false, //去掉取消按钮
								success: (res) => {
									if (res.confirm) {
										this.isRunning = false
									}
								}
							})
						}
					}, (70 + i))
				}
			
			}
		}
	}
</script>

<style>
	image {
		width: 100%;
		height: 100%;
	}

	.Bg {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0, 0.4);
	}

	.Guidance {
		position: absolute;
		z-index: 100;
		width: 690rpx;
		height: 500rpx;
		top: -180rpx;
		left: 30rpx;
		text-align: center;
		margin: 0 auto;
	}

	.Imgs {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.explain {
		width: 690rpx;
		margin: 60rpx auto 100rpx;
	}

	.ExplainTitle {
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
		color: #8a0a0a;
	}

	.ExplainTxt {
		text-align: left;
		margin: 20rpx auto;
	}

	.TxtTitle {
		font-size: 30rpx;
		color: #545454;
		font-weight: bold;
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}

	.TxtCon {
		font-size: 26rpx;
		color: #999;
	}

	.TxtZ {
		color: #d20b0b;
		font-size: 24rpx;
		margin-top: 10rpx;
		letter-spacing: 0.5px;
	}

	.TZ {
		font-weight: bold;
		font-size: 26rpx;
		color: #d20b0b;
	}

	.container {
		height: 600rpx;
		width: 650rpx;
		background-color: #b3241b;
		margin: 100rpx auto;
		border-radius: 40rpx;
		box-shadow: 0 10rpx 0 #d80014;
		position: relative;
		top: 100rpx;
	}

	.tui-container-in {
		width: 580rpx;
		height: 530rpx;
		background-color: #de4339;
		border-radius: 40rpx;
		/* position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0; */
		margin: 35rpx auto;
	}

	/**小圆点 start*/

	.tui-dot {
		position: absolute;
		display: block;
		border-radius: 50%;
		height: 20rpx;
		width: 20rpx;
	}

	.tui-dot:nth-child(odd) {
		background: #fff;
		animation: 0.5s odd linear infinite;
	}

	.tui-dot:nth-child(even) {
		background: #fcf400;
		animation: 0.5s even linear infinite;
	}

	.tui-dot-1 {
		left: 15upx;
		top: 15upx;
	}

	.tui-dot-2 {
		left: 117.5upx;
		top: 7.5upx;
	}

	.tui-dot-3 {
		left: 220upx;
		top: 7.5upx;
	}

	.tui-dot-4 {
		left: 322.5upx;
		top: 7.5upx;
	}

	.tui-dot-5 {
		left: 425upx;
		top: 7.5upx;
	}

	.tui-dot-6 {
		left: 527.5upx;
		top: 7.5upx;
	}

	.tui-dot-7 {
		left: 620upx;
		top: 15upx;
	}

	.tui-dot-8 {
		left: 622upx;
		top: 109upx;
	}

	.tui-dot-9 {
		left: 622upx;
		top: 203upx;
	}

	.tui-dot-10 {
		left: 622upx;
		top: 297upx;
	}

	.tui-dot-11 {
		left: 622upx;
		top: 391upx;
	}

	.tui-dot-12 {
		left: 622upx;
		top: 485upx;
	}

	.tui-dot-13 {
		left: 620upx;
		top: 565upx;
	}

	.tui-dot-14 {
		left: 517.5upx;
		top: 572upx;
	}

	.tui-dot-15 {
		left: 415upx;
		top: 572upx;
	}

	.tui-dot-16 {
		left: 312.5upx;
		top: 572upx;
	}

	.tui-dot-17 {
		left: 210upx;
		top: 572upx;
	}

	.tui-dot-18 {
		left: 107.5upx;
		top: 572upx;
	}

	.tui-dot-19 {
		left: 15upx;
		top: 565upx;
	}

	.tui-dot-20 {
		left: 7.5upx;
		top: 471upx;
	}

	.tui-dot-21 {
		left: 7.5upx;
		top: 377upx;
	}

	.tui-dot-22 {
		left: 7.5upx;
		top: 283upx;
	}

	.tui-dot-23 {
		left: 7.5upx;
		top: 189upx;
	}

	.tui-dot-24 {
		left: 7.5upx;
		top: 95upx;
	}

	@-webkit-keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@-webkit-keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	@keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	/**小圆点 end*/

	.tui-content-out {
		position: absolute;
		height: 150upx;
		width: 168upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fcecec;
		color: #666;
		font-size: 28rpx;
		border-radius: 15upx;
		box-shadow: 0 4px 0 #fcc8d0;
	}

	/* 580 530  */

	.tui-award-1 {
		left: 65rpx;
		top: 55rpx;
	}

	.tui-award-2 {
		left: 243rpx;
		top: 55rpx;
	}

	.tui-award-3 {
		left: 423rpx;
		top: 55rpx;
	}

	.tui-award-4 {
		left: 423rpx;
		top: 220rpx;
	}

	.tui-award-5 {
		left: 423rpx;
		top: 386rpx;
	}

	.tui-award-6 {
		left: 243rpx;
		top: 386rpx;
	}

	.tui-award-7 {
		left: 65rpx;
		top: 386rpx;
	}

	.tui-award-8 {
		left: 65rpx;
		top: 220rpx;
	}

	/**居中 加粗*/

	.tui-btn-start {
		position: absolute;
		top: 220rpx;
		left: 243rpx;
		border-radius: 15upx;
		height: 150upx;
		width: 168upx;
		background-color: #d80014;
		box-shadow: 0 4px 0 #fcc8d0;
		color: #fcf400;
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
		line-height: 150upx;
	}

	.tui-ative {
		opacity: 0.6 !important;
	}

	.tui-award-image {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 134upx;
		width: 134upx;
	}

	.tui-awardSelect {
		font-weight: bold;
		color: red !important;
		background-color: #fcf400 !important;
		box-shadow: 0 4px 0 rgb(240, 208, 12) !important;
	}
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
