<template>
	<div class="page">
		   
		<div class="stage">
			<!-- 背景图 -->
			<img src="/static/images/game/stage.png" class="stage-img" mode="widthFix" />
			<div class="lanren" :class="{ pause: paursed }">
				<div class="egg" :class="{ eggPause: paursed }" v-for="(item,index) in golden">
					<!-- 锤子 -->
					<img v-if="item.id==Ids" src="/static/images/game/hammer.png" mode="widthFix" class="hammer" />
					<!-- 砸开的蛋 -->
					<img v-if="item.id==Ids" src="/static/images/game/agg-puo.png" mode="widthFix" class="egg-item" />
					<!-- 没砸开的蛋 -->
					<img v-else src="/static/images/game/agg.png" mode="widthFix" class="egg-item" :data-id="item.id" @click="openEgg" />
				</div>
			</div>
		</div>
		<!-- 说明 -->
		<view class="explain">
			<view class="ExplainTitle">活动说明</view>
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
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			Ids:'',
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
			paursed: false, // 初始没有蛋被砸开
		};
	},
	onLoad() {},
	onShow() {},
	methods: {
		// 蛋被砸开
		openEgg(s) {
			console.log(s.currentTarget.dataset.id)
			let that = this;
			that.paursed = true; // 有蛋被砸开
			that.Ids = s.currentTarget.dataset.id;
			// 请求中奖信息
			
			setTimeout(function() {
				setTimeout(function() {
					// that.celebrate(); // 提示中奖信息
					that.Nocelebrate()// 提示未中奖信息
				}, 800); // 1秒后中奖提示出现
			}, 200); // 0.6秒后开花的蛋出现
		},
		// 恭喜中奖提示
		celebrate() {
			let that = this;
			uni.showModal({
				title:'恭喜中奖',
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
</style>
