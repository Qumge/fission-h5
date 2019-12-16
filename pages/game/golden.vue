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
		<view class="stage">
			<!-- 背景图 -->
			<img src="/static/images/game/stage.png" class="stage-img" mode="widthFix" />
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
		<!-- 说明 -->
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
</template>

<script>
import tuiIcon from "@/components/icon/icon"
import GuidancePopup from "@/components/GuidancePopup/GuidancePopup"
export default {
	components: {
		GuidancePopup,
		tuiIcon,
	},
	data() {
		return {
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
			UserIntegral:10, //用户积分
			DeductIntegral:3, // 扣除积分
			// ShareIntegral:0, // 分享积分
			Options: null,
			showShare: false
		};
	},
	onLoad(options) { 
		if (options.from) {
			this.from = options.from
		}
		let that = this
		this.showShare = this.tui.wechatBowser();
		that.Options = options
	},
	onShow() {
		let that = this
		console.log(that.Options.id)
		//请求抽奖是否开始 获取用户信息
		
	},
	methods: {
		back: function() {
			this.tui.goBack(this.from);
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
			// console.log(s.currentTarget.dataset.id)
			
			//  扣除每次抽奖积分
			that.UserIntegral = that.UserIntegral - that.DeductIntegral;
			if(that.UserIntegral>0 || that.UserIntegral==0){
				console.log("ok可以抽奖")
			}else{
				console.log("积分不够")
				return false;
			}
			console.log(that.UserIntegral)
			
			that.paursed = true; // 有蛋被砸开
			that.Ids = s.currentTarget.dataset.id;
			// 请求中奖信息 
			
				setTimeout(function() {
					setTimeout(function() {
						
						that.celebrate(); // 提示中奖信息
						// that.Nocelebrate()// 提示未中奖信息
					}, 800); // 1秒后中奖提示出现
				}, 200); // 0.6秒后开花的蛋出现
		},
		// 恭喜中奖提示
		celebrate() {
			let that = this;
			uni.showModal({
				title:'恭喜中奖',
				content:"二等奖",
				success() {
					that.Ids = ''
					that.revert()
				}
			})
		},
		// 没有中奖
		Nocelebrate() {
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
