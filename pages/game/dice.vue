<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box" :style="{ height: headerHeight + 'px;' }" style="color:#fff">
			<view class="tui-header" :style="{ paddingTop: top + 'px' }">骰子</view>
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" @tap="back"><tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon></view>
			</view>
		</view>
		<!--header-->
		
		<view
			@click="shows"
			v-if="showShare"
			style="width: 180rpx;background: #b3241b; padding: 10rpx 30rpx;border-radius: 10rpx ;position: absolute;right: 0; display: flex;align-items: center;top: 205rpx;z-index:10"
		>
			<tui-icon name="partake" :size="15" color="#fff"></tui-icon>
			<text style="color: #fff;font-size: 28rpx;margin-left: 10rpx;">分享得金币</text>
		</view>
		<view v-show="ShowGuidance">
			<view class="Bg" @click="colse"></view>
			<view class="Guidance" @click="colse"><image src="/static/images/index/zhidaole.png" mode="widthFix"></image></view>
		</view>
		<view class="body">
			<image class="Imgs" src="../../static/images/game/bg.jpg" mode="widthFix"></image>
			<view class="main">
				<view id="tu">
					<image :src="png1"></image>
					<image :src="png2"></image>
					<image :src="png3"></image>
				</view>
				<view style="clear:both"></view>
				<view class="kaishi">
					<image src="../../static/images/game/start.png" id="start" @click="play" v-if="can_play">
						<image src="../../static/images/game/start2.png" id="end1" v-if="!can_play">
				</view>

				<view id="share" class="winner">
					<view class="winner-main">
						<h3 id="p1"></h3>
						<p>恭喜您获得了<span id="p2"></span></p>
						<a href="#" class="but" id="but">确定</a>
					</view>
				</view>
			</view>

		</view>
		<view style="position: relative;margin-left: 25px;">
			<view class="explain">
				<view class="ExplainTitle">游戏说明</view>
				<view class="ExplainTxt" @tap="thisShow">
					<text class="TxtTitle">我的金币：{{ userIntegral }}</text>
				</view>
				<view class="ExplainTxt">
					<view class="TxtTitle">玩法说明</view>
					<view class="TxtCon" v-if="!game.task_game_task">每抽奖一次平台扣去{{ game.cost }}金币</view>
					<view class="TxtCon" v-else>任务状态用户可以免费抽奖一次</view>
					<view class="TxtTitle">活动奖品</view>
					<template v-for="(prize, index) in game.sort_prizes">
						<view class="TxtCon" v-if="prize.type == 'Prize::CoinPrize'">{{ index + 1 }}等奖：{{ prize.coin }}金币 对应数字：{{ prize_numbers[index] }}</view>
						<view class="TxtCon" v-if="prize.type == 'Prize::ProductPrize'">{{ index + 1 }}等奖：{{ prize.product.name }} 对应数字：{{ prize_numbers[index] }}</view>
					</template>
					<block v-if="game.task_game_task">
						<view class="TxtTitle">活动时间</view>
						<view class="TxtCon">{{ game.task_game_task.valid_from }} 至 {{ game.task_game_task.valid_to }}</view>
						<view class="TxtZ">
							<text class="TZ">注：</text>
							本次活动奖品仅限在{{ game.task_game_task.valid_to }}日前有效，过期自动作废。
						</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../api.js';
	import tuiIcon from '@/components/icon/icon';
	import GuidancePopup from '@/components/GuidancePopup/GuidancePopup';
	export default {
		components: {
			GuidancePopup,
			tuiIcon
		},
		data() {
			return {
				game: {
					task_game_task: {
						valid_from: '',
						valid_to: ''
					},
					image: {}
				},
				userIntegral: 0,
				from: 'h5',
				changeColor: 1,
				headerHeight: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 1,
				iconOpcity: 0.5,
				awardList: {}, //奖品数组
				indexSelect: 0, //被选中的奖品index
				showShare: false,
				ShowGuidance: false,
				can_play: true,
				timer: '',
				png1: '../../static/images/game/1.png',
				png2: '../../static/images/game/2.png',
				png3: '../../static/images/game/3.png',
				prize_numbers: ['【666】', '【111】', '【其他三连数字】'],
				prizeNumbers: [[6,6,6], [1,1,1], [3, 3, 3]]
			}
		},
		onLoad: function(options) {
			let that = this;
			if (options.from) {
				this.from = options.from;
			}
			this.showShare = this.tui.wechatBowser();
			api.me()
				.then(function(data) {
					console.log(data);
					that.userIntegral = data.coin;
				})
				.catch(function() {});

			api.game(options.id)
				.then(function(data) {
					that.game = data;
					console.log(data);
					let prizes = data.sort_prizes;
					prizes.push({
						id: 0,
						coin: '',
						type: 'thanks'
					});
					console.log(prizes);
					that.awardList = that.coverArr(prizes, 8);
					console.log(that.awardList);
					if (!that.tui.wechatBowser()) return;
					if (!that.game.task_game_task) return;
					//查看
					console.log(that.game.task_game_task.id);
					api.view(that.game.task_game_task.id, options.token)
						.then(function(data) {
							console.log(data);
						})
						.catch(function() {});
					api.fission(that.game.task_game_task.id, options.token)
						.then(function(fission_log) {
							console.log(fission_log);
							that.tui
								.jssdk()
								.then(function(jweixin) {
									let image_path = '';
									if (fission_log.task.image) {
										image_path = fission_log.task.image.image_path;
									}
									jweixin.updateAppMessageShareData({
										title: that.game.name, // 分享标题
										desc: '分享链接赚金币,提现赢大奖', // 分享描述
										link: (fission_log.task.h5_link + '&token=' + fission_log.token),
										imgUrl: image_path, // 分享图标
										success: function() {
											// 设置成功
											console.log('updateAppMessageShareData');
										}
									});
								})
								.catch(function(e) {
									console.log(e);
								});
						})
						.catch(function() {});
				})
				.catch(function(e) {
					console.log(e);
					//跳转到回上一页
				});
		},
		methods: {
			shows: function() {
				console.log(this.ShowGuidance);
				this.ShowGuidance = true;
			},
			colse: function() {
				this.ShowGuidance = false;
			},
			back: function() {
				this.tui.goBack();
			},
			coverArr: function(arr, size) {
				let num = Math.ceil(size / arr.length);
				for (var i = 0; i < num; i++) {
					arr = arr.concat(arr);
				}
				return arr.slice(0, 8);
			},
			getRandomArrayElements: function(arr, count) {
			    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			    while (i-- > min) {
			        index = Math.floor((i + 1) * Math.random());
			        temp = shuffled[index];
			        shuffled[index] = shuffled[i];
			        shuffled[i] = temp;
			    }
			    return shuffled.slice(min);
			},
			play: function() {
				let that = this;
				//获取随机数
				let getRandom = function(u) {
					// let rnd = Math.random() > 0.5 ? "2" : "1";
					let rnd = Math.random() > 0 ? '3' : '1';
					u = u || 3;
					for (var i = 0; i < u; i++) {
						// rnd += Math.floor(Math.random() * 10);
						rnd += Math.floor(Math.random() * 10);
					}
					return Number(rnd);
				};
				console.log(this.game);
				if (!this.game.task_game_task && this.userIntegral < this.game.cost) {
					uni.showModal({
						title: '温馨提示',
						content: '您的金币不足'
					});
				} else {
					api.playGame(that.game.id)
						.then(function(data) {
							console.log(data);
							if (data.error) {
								console.log(1);
								uni.showModal({
									title: '温馨提示',
									content: data.message
								});
								return;
							}
							let arr = []
							if(data.prize_log){
								let index = that.game.sort_prizes.findIndex(sort_prize => sort_prize.id == data.prize_log.prize.id)
								console.log(index);
								arr = that.prizeNumbers[index]
							}else{
								arr = that.getRandomArrayElements([1,2,3,4,5,6], 3)
							}
							console.log(arr);
							var temp = 0
							clearInterval(that.timer);
							that.timer = setInterval(function() {
								that.png1 = '../../static/images/game/' + Math.ceil(Math.random() * 6) + '.png'
								that.png2 = '../../static/images/game/' + Math.ceil(Math.random() * 6) + '.png'
								that.png3 = '../../static/images/game/' + Math.ceil(Math.random() * 6) + '.png'
								temp++;
								if (temp > 50) {
									that.png1 = '../../static/images/game/' + arr[0] + '.png'
									that.png2 = '../../static/images/game/' + arr[1] + '.png'
									that.png3 = '../../static/images/game/' + arr[2] + '.png'
									clearInterval(that.timer);
									//抽奖结果
								}
							}, 30)
						})
						.catch(function(e) {
							console.log(e);
						});
				}
			}
		}
	}
</script>

<style>
	.container{
		background-color: #c13535;
	}
	.Imgs {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.main {
		width: 100%;
		margin-top: 86%;
		padding-bottom: 10%;
	}

	.body {
		display: flex;
	}

	.main-a {
		width: 90%;
		margin: 0px auto;
	}

	.main-a a {
		display: block;
		width: 30%;
		line-height: 30px;
		font-size: 16px;
		text-decoration: none;
		color: #f7e077;
		border: 2px solid #f7e077;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		text-align: center;
		margin-bottom: 7%
	}

	.left-a {
		float: left
	}

	.right-a {
		float: right
	}

	#tu {
		width: 100%;
		clear: both
	}

	#tu image {
		margin-left: 10%;
		width: 20%;
		float: left;
		max-height: 64px;
	}


	.kaishi {
		text-align: center;
		display: block;
		margin-top: 30px;
	}

	.kaishi image {
		width: 30%;
		margin: 0 auto;
		height: 96px;
	}

	.winner {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 90;
		top: 0px;
		left: 0px;
		background-color: #000;
		background-color: rgba(0, 0, 0, 0.85);
		text-align: center;
		display: none
	}

	.winner-main {
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -100px 0px 0px -40%;
		width: 80%;
		height: 200px;
		background-color: #c5283b;
		border-radius: 5%;
		overflow: hidden
	}

	.winner-main h3 {
		margin-top: 60px;
		font-size: 18px;
		color: #FFF;
	}

	.winner-main p {
		font-size: 16px;
		color: #FFF;
	}

	.winner-main p span {
		color: #fff74a
	}

	.but {
		display: block;
		width: 100%;
		background-color: #f7e077;
		color: #d6384c;
		font-size: 16px;
		text-align: center;
		text-decoration: none;
		position: absolute;
		bottom: 0px;
		left: 0px;
		line-height: 40px;
		font-size: 18px
	}

	.share_list {
		position: absolute;
		top: 1em;
		right: 10px;
		width: 50%;
	}

	.share_list img {
		width: 100%;
	}

	.activity-amin {
		width: 94%;
		margin: 0rem auto;
	}

	.activity-amin2 {
		width: 88%;
		margin: 0rem auto;
	}

	.activity-amin h2 {
		margin: 0rem auto 0.4rem auto;
		width: 40%;
		height: 30px;
		background-color: #feb934;
		text-align: center;
		line-height: 30px;
		font-size: 0.9rem;
		color: #d6384c;
		border-radius: 50px;
		letter-spacing: 0.2rem
	}

	.tb0 {
		width: 100%;
		margin-bottom: 6%;
	}

	.tb0 tr th {
		width: 26%;
		background-color: #fad950;
		line-height: 30px;
		text-align: center;
		color: #30302f;
		font-size: 12px
	}

	.tb0 tr th:nth-child(1) {
		width: 40%;
	}

	.tb0 tr th:nth-child(2) {
		width: 34%;
	}

	.tb0 tr td {
		width: 20%;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
		color: #434342;
		background-color: #f8dd6e
	}

	a.a-main2 {
		display: block;
		color: #d6384c;
		margin: 0px auto;
		width: 100%;
		padding: 10px 0rem;
		text-align: center;
		font-size: 1rem;
		border-radius: 10px;
		letter-spacing: 2px;
		background-color: #feb934;
		text-decoration: none;
		font-weight: bold
	}

	.wt1 {
		width: 94%;
		display: block;
		border: none;
		background-color: #FFF;
		padding: 5% 3%;
		border-radius: 0.34666667rem;
		font-size: 0.9rem;
		margin-bottom: 6%
	}

	.wt2 {
		width: 50%;
		float: left
	}

	.wt3 {
		width: 40%;
		float: right;
		background-color: #efc84d;
		color: #FFF
	}

	.wt4 {
		width: 100%;
		background-color: #fc8209;
		color: #FFF;
		font-size: 0.6rem;
		text-align: center;
	}

	.prompt1 {
		clear: both;
		width: 100%;
		text-align: center;
		font-size: 0.4rem;
		margin-bottom: 6%;
		color: #ffe66f;
		display: non
	}

	.text-main {
		width: 88%;
		margin: 0px auto;
	}

	.text-main h1 {
		text-align: center;
		font-size: 14px;
		margin-bottom: 3%;
		color: #FFF
	}

	.text-main p {
		color: #FFF;
		font-size: 12px;
	}

	.text-main image {
		width: 100%;
		padding: 5px 0px;
	}
	/* header*/
	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
		background-color: #fc4034;
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
		top: -45rpx;
		left: 30rpx;
		text-align: center;
		margin: 0 auto;
	}
</style>
