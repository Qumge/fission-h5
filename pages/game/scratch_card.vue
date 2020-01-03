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
			:move-radius= moveRadius
			:start-callback=startCallback 
			:clear-callback=clearCallback
			cover-color='#fff'>
			    <div slot='result' class="vue-scratch-card ">
			        <!-- 恭喜您中大奖啦～～ -->
					{{prizeName(award)}}
					<!-- 再接再厉～～ -->
			    </div>
			</vue-scratch-card >
			<!-- <vue-scratch-card cover-color='#fff' :move-radius= 0 v-else="true"></vue-scratch-card> -->
			 
		</view>
		<view v-show="ShowGuidance" style="top: 45rpx;">
			<view class="Bg" @click="colse"></view>
			<view class="Guidance"  @click="colse">
				<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
			</view>
		</view>
		<view @click="shows" v-if="showShare" style="width: 180rpx;background: #b3241b;z-index: 9; padding: 10rpx 30rpx;border-radius: 10rpx ;position: absolute;right: 0;top: 90rpx; display: flex;align-items: center;">
					<tui-icon name="partake" :size="15" color="#fff"></tui-icon>
					<text style="color: #fff;font-size: 28rpx;margin-left: 10rpx;">分享得金币</text>
		</view>
		<!-- 说明 -->
		<view class="TxtZ TxtTitle" style="padding-left: 10px;" @tap="thisShow">
			<text class="">我的金币：</text> {{userIntegral}}
		</view>
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
				},
				showShare: false,
				userIntegral:0,
				moveRadius:20,
				from: 'h5',
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				award: {name: '', type: 'thanks'},
				ShowGuidance: false
			}
		},
		onLoad(options) {
			// 15
			this.showShare = this.tui.wechatBowser();
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
					console.log(data);
					
					if (!that.tui.wechatBowser()) return;
					if (!that.game.task_game_task.id) return;
					//查看
					console.log(that.game.task_game_task.id);
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
								link: (fission_log.task.h5_link + '&token=' + fission_log.token),
								imgUrl: image_path, // 分享图标
								success: function () {
								  // 设置成功
								  console.log('updateAppMessageShareData');
								}
							  })
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
			prizeName: function(prize){
				if(prize.type == 'thanks'){
					return prize.name
				}else if(prize.type == 'Prize::CoinPrize'){
					return prize.coin + '金币'
				}else if(prize.type == 'Prize::ProductPrize'){
					return prize.product.name
				}
			},
			shows:function(){
				console.log(this.ShowGuidance)
				this.ShowGuidance = true
			},
			colse:function(){
				this.ShowGuidance = false
			},
			startCallback() {
				let that = this;
				console.log('抽奖成功！')
				this.apiMe()
				
				api.me(that.game.id).then(function(data){
					console.log(data)
					that.userIntegral = data.coin
				}).catch(function(){ })
				console.log(that.game.id)
				
				if(!that.game.task_game_task && that.userIntegral < that.game.cost){
					uni.showModal({
						title:'温馨提示',
						content: '您的金币不足'
					})
				}else{
					api.playGame(that.game.id).then(function(data){
						console.log(data)
						if(data.message == "您已经玩过这个游戏了"){
							uni.showModal({
								title:'温馨提示',
								content: data.message
							})
							return
						}else{
							if(data.prize_log){
								that.award = data.prize_log.prize
							}
						}
					}).catch(function(){
						
					})
				}
			},
			clearCallback() {
				console.log('清除完毕！')
			},
			thisShow(){
				
			},
			apiMe(){
				api.me(this.game.id).then(function(data){
					console.log(data)
					that.userIntegral = data.coin
				}).catch(function(){ })
			},
		},
	}
</script>

<style>
	image{width: 100%;height: 100%;}
	.Bg{position: fixed;left: 0;top: 0;overflow: hidden;z-index: 99; width: 100%;height: 100%;background: rgb(0, 0, 0,0.4);}
	.Guidance{position: absolute;z-index: 100;width: 690rpx;height: 500rpx;top: 0rpx;left: 30rpx; text-align: center; margin: 0 auto;}
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
