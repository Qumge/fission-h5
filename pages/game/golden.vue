<template>
	<view class="page">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}" >
				砸金蛋
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" 
				 @tap="back">
				 <tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				 </view>
			</view>
		</view>
		<!--header-->
	   <view @click="shows" v-if="showShare" style="width: 180rpx;background: #b3241b;z-index: 9; padding: 10rpx 30rpx;border-radius: 10rpx ;position: absolute;right: 0;top: 90rpx; display: flex;align-items: center;">
			<tui-icon name="partake" :size="15" color="#fff"></tui-icon>
			<text style="color: #fff;font-size: 28rpx;margin-left: 10rpx;">分享得金币</text>
	   </view>
	   <view v-show="ShowGuidance">
	   	<view class="Bg" @click="colse"></view>
	   	<view class="Guidance"  @click="colse">
	   		<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
	   	</view>
	   </view>
		<view class="stage" style="margin-top: 40px;">
			<!-- 背景图 -->
			
			<img :src="game.image.image_path"  class="stage-img" mode="widthFix" style="width:100%;height:400%;" />
			<view class="lanren" :class="{ pause: paursed }">
				<view class="egg" :class="{ eggPause: paursed }" v-for="(item,index) in golden">
					<!-- 锤子 -->
					<img v-if="item.id==Ids" src="/static/images/game/hammer.png" mode="widthFix" class="hammer" />
					<!-- 砸开的蛋 -->
					<img v-if="item.id==Ids" src="/static/images/game/agg-puo.png" mode="widthFix" class="egg-item" />
					<!-- 没砸开的蛋 -->
					<img v-else src="/static/images/game/agg.png" mode="widthFix" class="egg-item" :data-id="item.id" @click="openEgg" />
				</view>
			</view>
		</view>
		<view class="TxtZ TxtTitle" style="padding-left: 10px;" @tap="thisShow">
			<text class="">我的金币：</text> {{userIntegral}}
		</view>
		<!-- 说明 -->
		<view class="explain">
			<view class="ExplainTitle">游戏说明</view>
			<view class="ExplainTxt">
				<view class="TxtTitle">玩法说明</view>
				<view class="TxtCon" v-if="!game.task_game_task">每抽奖一次平台扣去{{game.cost}}金币</view>
				<view class="TxtCon" v-else>任务状态用户可以免费抽奖一次</view>
				<view class="TxtTitle">活动奖品</view>
				<template v-for="(prize,index) in game.sort_prizes">
					<view class="TxtCon" v-if="prize.type == 'Prize::CoinPrize'" >{{index+1}}等奖：{{prize.coin}}金币</view>
					<view class="TxtCon" v-if="prize.type == 'Prize::ProductPrize'" >{{index+1}}等奖：{{prize.product.name}}</view>
				</template>
				
				<block v-if="game.task_game_task">
					<view class="TxtTitle">活动时间</view>
					<view class="TxtCon">{{game.task_game_task.valid_from}} 至 {{game.task_game_task.valid_to}}</view>
					<view class="TxtZ">
						<text class="TZ">注：</text>
						本次活动奖品仅限在{{game.task_game_task.valid_to}}日前有效，过期自动作废。
					</view>
				</block>
			</view>
		</view>
		
	</view>
</template>

<script>
import tuiIcon from "@/components/icon/icon"
import GuidancePopup from "@/components/GuidancePopup/GuidancePopup"
import api from "../../api.js"
export default {
	components: {
		GuidancePopup,
		tuiIcon,
	},
	data() {
		return {
			game:{
				task_game_task:{
					valid_from:'',
					valid_to:'',
				},
				image: {}
			},
			ShowGuidance:false,
			from: 'h5',
			height: 0, //header高度
			top: 0, //标题图标距离顶部距离
			scrollH: 0, //滚动总高度
			opcity: 0,
			iconOpcity: 0.5,
			golden:[
				{
					id:'1',
					name:'金蛋1',
				},
				{
					id:'2',
					name:'金蛋2',
				},
				{
					id:'3',
					name:'金蛋3',
				}
			],
			Ids:'', //砸蛋下标
			paursed: false, // 初始没有蛋被砸开
			flag: false, // 提示积分不够
			userIntegral:0, //用户积分
			DeductIntegral:500, // 扣除积分
			// ShareIntegral:0, // 分享积分
			Options: null,
			showShare: false,
			prizes:[],
		};
	},
	computed: {
	    range: function() {
	      return this.prizes.sort((a,b)=>a.id-b.id).reverse();//升序
		  // console.log(this.prizes.sort((a,b)=>a.id-b.id)())
	    }
	  },
	onLoad(options) {
		// 19
		// uni.setStorageSync('sessionToken', 'oyLjzFWnnhA2FJddMJM4')
		if (options.from) {
			this.from = options.from
		}
		let that = this
		this.showShare = this.tui.wechatBowser();
		api.me().then(function(data){
			console.log(data)
			that.userIntegral = data.coin
		}).catch(function(){ })
		
		api.game(options.id).then(function(data) {
				that.game = data;
				// that.prizes = data.prizes
				console.log(data);
				
				if (!that.tui.wechatBowser()) return;
				if (!that.game.task_game_task) return;
				//查看
				console.log(that.game.task_game_task);
				api.view(that.game.task_game_task.id, options.token).then(function(data){
					console.log(data);
				}).catch(function(){
					
				})
				api.fission(that.game.task_game_task.id, options.token).then(function(fission_log) {
					console.log(fission_log);
					that.tui.jssdk().then(function(jweixin) {
						let image_path = ''
						if(fission_log.task.image){
							image_path = fission_log.task.image.image_path
						}
						jweixin.updateAppMessageShareData({ 
							title: that.game.name, // 分享标题
							desc: '分享链接赚金币,提现赢大奖', // 分享描述
							link: (fission_log.task.h5_link + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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
	onShow() {
		let that = this
		//请求抽奖是否开始 获取用户信息
		console.log(this.rangeList)
	},
	methods: {
		back: function() {
			this.tui.goBack();
		},
		shows:function(){
			console.log(this.ShowGuidance)
			this.ShowGuidance = true
		},
		colse:function(){
			this.ShowGuidance = false
		},
		// 点击砸蛋
		openEgg(s) {
			let that = this;
			console.log(that.game.id)
			if(!that.game.task_game_task && that.userIntegral < that.game.cost){
				uni.showModal({
					title:'温馨提示',
					content: '您的金币不足'
				})
			}else{
				api.playGame(that.game.id).then(function(data){
					console.log(data)
					if(data.error){
						console.log(1)
						uni.showModal({
							title:'温馨提示',
							content: data.message
						})
						return
					}
					// 有蛋被砸开
					that.paursed = true;
					that.Ids = s.currentTarget.dataset.id;
					setTimeout(function() {
						setTimeout(function() {
							if(data.prize_log){
								if(data.prize_log.prize.type === 'Prize::ProductPrize'){
									that.celebrate(data.prize_log.prize.product.name); // 提示中奖信息
								}else{
									that.celebrate("金币：" + data.prize_log.prize.coin)
								}
							}else{
								that.celebrate("很遗憾您没有中奖，谢谢您的参与")
							}
							// that.Nocelebrate()// 提示未中奖信息
						}, 500); // *秒后中奖提示出现
					}, 50); // 0.6秒后开花的蛋出现
					
				}).catch(function(){
					
				})
			}

		},
		// 恭喜中奖提示
		celebrate(s) {
			console.log(s)
			let that = this;
			uni.showModal({
				title:'恭喜中奖',
				content: s,
				success() {
					that.Ids = ''
					that.revert()
				}
			})
		},
		// 没有中奖
		Nocelebrate(s) {
			console.log(s)
			let that = this;
			uni.showModal({
				title:'你没有中奖再接再厉吧',
				success() {
					that.Ids = ''
					that.revert()
				}
			})
		},
		// 重置蛋状态
		revert() {
			this.paursed = false;
		}
	}
};
</script>

<style scoped>
	image{width: 100%;height: 100%;}
	.Bg{position: fixed;left: 0;top: 0;overflow: hidden;z-index: 99; width: 100%;height: 100%;background: rgb(0, 0, 0,0.4);}
	.Guidance{position: absolute;z-index: 100;width: 690rpx;height: 500rpx;top: -90rpx;left: 30rpx; text-align: center; margin: 0 auto;}
	
.stage {
	width: 100%;
	position: relative;
	overflow: hidden;
}
.stage-img {
	width: 100%;
}

.explain{width: 690rpx;margin: 60rpx auto 100rpx;}
.ExplainTitle{text-align: center;font-size: 36rpx;font-weight: bold;color: #8a0a0a;}
.ExplainTxt{text-align: left;margin: 20rpx auto;}
.TxtTitle{font-size: 30rpx;color: #545454;font-weight: bold;margin-top: 30rpx;margin-bottom: 10rpx;}
.TxtCon{font-size: 26rpx;color: #999;}
.TxtZ{color: #d20b0b;font-size: 24rpx;margin-top: 10rpx;letter-spacing: 0.5px;}
.TZ{font-weight: bold;font-size: 26rpx; color: #d20b0b;}

.lanren {
	position: absolute;
	width: 170px;
	height: 160px;
	bottom: 18%;
	left: 0;
	right: 0;
	margin: auto;
	border-radius: 50%;
	animation: a 1000s linear;
	-webkit-animation: a 1000s linear;
}
.egg {
	width: 100px;
	height: 130px;
	transform-origin: center;
	-webkit-transform-origin: center;
	border-radius: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
}
.egg-item {
	width: 110%;
	z-index: 9;
}
.hammer {
	position: absolute;
	z-index: 10;
	left: -50%;
	top: -10%;
	width: 100px;
	display: block;
	max-width: none;
	-webkit-animation: hammer 0.5s alternate;
	animation: hammer 0.5s alternate;
	transform-origin: bottom left;
	-webkit-transform-origin: bottom left;
}
.lanren.pause {
	-webkit-animation-play-state: paused;
	animation-play-state: paused;
}
.eggPause {
	-webkit-animation-play-state: paused !important;
	animation-play-state: paused !important;
}

.egg:nth-child(1) {
	margin-top: 45%;
	animation: b 1000s linear, zindex 10000ms 0ms infinite linear;
	-webkit-animation: b 1000s linear, zindex 10000ms 0ms infinite linear;
}
.egg:nth-child(2) {
	margin-top: -5%;
	margin-left: -5%;

	animation: b 1000s linear, zindex 10000ms -2500ms infinite linear;
	-webkit-animation: b 1000s linear, zindex 10000ms -2500ms infinite linear;
}
.egg:nth-child(3) {
	margin-top: -5%;
	margin-right: -5%;
	animation: b 1000s linear, zindex 10000ms -5500ms infinite linear;
	-webkit-animation: b 1000s linear, zindex 10000ms -5500ms infinite linear;
}
@keyframes a {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	to {
		transform: rotate(36000deg);
		-webkit-transform: rotate(36000deg);
	}
}
@-webkit-keyframes a {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	to {
		transform: rotate(36000deg);
		-webkit-transform: rotate(36000deg);
	}
}
@keyframes b {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	to {
		transform: rotate(-36000deg);
		-webkit-transform: rotate(-36000deg);
	}
}
@-webkit-keyframes b {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	to {
		transform: rotate(-36000deg);
		-webkit-transform: rotate(-36000deg);
	}
}

@keyframes zindex {
	0% {
		z-index: 1;
	}
	25% {
		z-index: -1;
	}
	55% {
		z-index: -1;
	}
	75% {
		z-index: 1;
	}
}
@-webkit-keyframes zindex {
	0% {
		z-index: 1;
	}
	25% {
		z-index: -1;
	}
	55% {
		z-index: -1;
	}
	75% {
		z-index: 1;
	}
}
@keyframes hammer {
	50% {
		transform: rotate(15deg);
	}
}
@-webkit-keyframes hammer {
	50% {
		-webkit-transform: rotate(15deg);
	}
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
