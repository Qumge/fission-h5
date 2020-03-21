<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}">
				推文
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" @tap="back">
					<tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				</view>
			</view>
		</view>
		<!--header-->
		<view style="margin-top: 44px;">
			<view class="tui-news-title">
				{{articleTask.article.subject}}
			</view>
			<view class="tui-sub-info">
				<view class="tui-sub-left">
					<!-- <text class="tui-author">{{article.name}}</text> -->
					<text>{{articleTask.article.created_at}}</text>
					
				</view>
				<view class="tui-countdown" v-if="showCountdown">
					<tui-countdown :time="15" color="#fff" bcolor="#e41f19" bgcolor="#e41f19" colonColor="#e41f19" :hours="false" :scale="true"  @end="endOfTime"></tui-countdown>
				</view>
				<view class="tui-sub-right">阅读 {{articleTask.article.view_num}}</view>
				<view @click="showPop" v-if="showShare" style="padding: 10rpx 30rpx;border-radius: 10rpx; display: flex;align-items: center;">
					<tui-icon name="partake" :size="15" color="#333"></tui-icon>
					<text class="tui-black">分享得金币</text>
				</view>
			</view>
			<view class="tui-news-content">
				<view class="tui-article">
					<!-- <text>{{articleTask.article.content}}</text> -->
					<rich-text :nodes="articleTask.article.content"></rich-text>
					<!-- 北京时间6月22日，重庆斯威队召开了赛前新闻发布会，主教练小克鲁伊夫和球员彭欣力出席。 -->
				</view>
		
			</view>

			<!-- <view class="tui-news-source">消息参考来源：体坛大精汇</view> -->

			<view class="w69">
				<view class="x">
					<view class="Mode" @tap="product" :data-id="articleTask.article.product.id">
						<view class="ModeImg">
							<image :src="articleTask.article.product.default_image"></image>
						</view>
						<view class="ModeName">
							<view class="name1">{{articleTask.article.product.name}}</view>
							<view class="name2">￥&nbsp;{{articleTask.article.product.price}}</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<!-- <tui-nomore :visible="!pullUpOn" bgcolor="#fff" text="没有更多评论"></tui-nomore> -->
		<!--加载loadding-->
		<view class="tui-safearea-bottom"></view>
		<!-- <GuidancePopup :show='show' ></GuidancePopup> -->
		<view v-show="ShowGuidance">
			<view class="Bg" @click="colse"></view>
			<view class="Guidance" @click="colse">
				<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import GuidancePopup from "@/components/GuidancePopup/GuidancePopup"
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiBadge from "@/components/badge/badge"
	import api from "../../api.js"
	import tuiCountdown from "@/components/countdown/countdown"
	export default {
		components: {
			GuidancePopup,
			tuiIcon,
			tuiTag,
			tuiListCell,
			tuiLoadmore,
			tuiNomore,
			tuiBadge,
			tuiCountdown
		},
		data() {
			return {
				date:'2019-12-30 11:05:27',
				articleTask:{
					article:{
						subject:'',
						product:{
							default_image:null
						}
					}
				},
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				from: 'h5',
				fabulous: 123,
				ShowGuidance: false,
				isFabulous: false,
				isCollection: false,
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
				showShare: false,
				showCountdown: true
			}
		},
		onShow() {
			
		},
		computed: {
			iconColor() {
				return this.isFabulous ? '#5677fc' : '#333'
			},
			itemIconColor() {
				return function(isFabulous) {
					return isFabulous ? '#5677fc' : '#9a9a9a'
				}
			},
			iconName() {
				return function(isFabulous) {
					return isFabulous ? 'agree-fill' : 'agree'
				}
			}
		},
		onLoad: function(options) {
			// 5
			let that = this
			if (options.from) {
				this.from = options.from
			}
			this.showShare = this.tui.wechatBowser();
			
			api.task_article(options.id).then(function(data) {
				console.log(data)
				that.articleTask = data
				that.articleTask.article.content = that.articleTask.article.content.replace(/<section/g, '<div').replace(/\/section>/g, '/div>');
				that.articleTask.article.content = that.articleTask.article.content.replace(/<img/g, '<img style="max-width: 100%" ');
				if (!that.tui.wechatBowser()) return;
				if (!that.articleTask.id) return;
				//查看
				console.log(that.articleTask.id);
				api.view(that.articleTask.id, options.token).then(function(data){
					console.log(data);
				}).catch(function(){
					
				})
				api.fission(that.articleTask.id, options.token).then(function(fission_log) {
					console.log(fission_log);
					that.tui.jssdk().then(function(jweixin) {
						let image_path = ''
						if(fission_log.task.image){
							image_path = fission_log.task.image.image_path
						}
						jweixin.updateAppMessageShareData({ 
							title: that.articleTask.name, // 分享标题
							desc: '分享链接赚金币,提现赢大奖', // 分享描述
							link: (that.articleTask.h5_link + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: image_path, // 分享图标
							success: function () {
							  // 设置成功
							  console.log('updateAppMessageShareData');
							}
						  })
						// jweixin.onMenuShareAppMessage({
							
						// 	title: that.articleTask.name, // 分享标题
						// 	desc: '分享链接赚金币,提现赢大奖', // 分享描述
						// 	link: (location.origin + location.pathname + '?id=' + that.articleTask.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						// 	imgUrl: that.articleTask.images[0].image_path, // 分享图标
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
				
			}).catch(function(){ })
		},
		methods: {
			product:function(e){
				
				console.log(e.currentTarget.dataset.id)
				uni.navigateTo({
					url:"../product/show?id="+e.currentTarget.dataset.id
				})
			},
			showPop() {
				// 确认弹窗回调
				this.ShowGuidance = true
			},
			colse: function() {
				this.ShowGuidance = false
			},
			btnFabulous: function() {
				this.fabulous = this.isFabulous ? 123 : 124;
				this.isFabulous = !this.isFabulous
			},
			cmtFabulous: function(e) {
				let index = e.currentTarget.id;
				let fabulousObj = this.cmtList[index];
				let isFabulous = this.cmtList[index].isFabulous;
				let fabulous = this.cmtList[index].fabulous;
				let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
				this.$set(fabulousObj, "fabulous", fabulousNum);
				this.$set(fabulousObj, "isFabulous", !isFabulous);
			},
			collection: function() {
				this.isCollection = !this.isCollection
				if (this.isCollection) {
					this.tui.toast("收藏成功！");
				}
			},
			endOfTime: function(){
				this.showCountdown = false
				api.commission(this.articleTask.id).then(function(data){
					console.log(data)
				}).catch(function(e){
					console.log(e)
				})
			},
			btnCmt: function() {
				uni.navigateTo({
					url: '../news-cmt/news-cmt'
				})
			},
			cmtAll: function() {
				uni.navigateTo({
					url: '../news-cmt-list/news-cmt-list'
				})
			},
			cmtReply: function() {
				uni.navigateTo({
					url: '../news-cmt-reply/news-cmt-reply'
				})
			},
			back: function() {
				this.tui.goBack();
			},
		},
		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				let arr = JSON.parse(JSON.stringify(this.cmtList));
				this.cmtList = this.cmtList.concat(arr);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
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
		overflow: hidden;
		z-index: 99;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0, 0.4);
	}

	.Guidance {
		position: absolute;
		z-index: 100;
		width: 690rpx;
		height: 500rpx;
		top: -90rpx;
		text-align: center;
		margin: 0 auto;
	}

	.w69 {
		width: 690rpx;
		margin: 50rpx auto 40rpx;
	}

	.x {
		border-bottom: 1rpx solid #eee;
		padding: 30rpx 20rpx;
		box-shadow: 0rpx 0rpx 9rpx 1rpx #ddd;
	}

	.x:last-child {
		border-bottom: none;
	}

	.Mode {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.ModeImg {
		width: 150rpx;
		height: 150rpx;
	}

	.ModeName {
		margin-left: 20rpx;
		width: 450rpx;
	}

	.name1 {
		font-weight: bold;
		font-size: 30rpx;
		color: #1A1A1A;
		margin-bottom: 10rpx;
	}

	.name2 {
		font-size: 28rpx;
		color: #545454;
	}

	page {
		background: #fff;
		color: #333;
	}

	.container {
		padding: 40rpx 30rpx 110rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-news-title {
		font-size: 48rpx;
		font-weight: 500;
		letter-spacing: 2px;
		text-align: justify;
	}

	.tui-sub-info {
		padding-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #999;
	}

	.tui-author {
		color: #5677fc;
		padding-right: 20rpx;
	}

	.tui-news-content {
		padding-top: 40rpx;
		width: 100%
	}

	.tui-article {
		/* text-indent: 2em; */
		font-size: 34rpx;
		color: #585555;
		padding-bottom: 40rpx;
		line-height: 60rpx;
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-article-pic {
		width: 100%;
		display: block;
		margin-bottom: 40rpx;
	}

	.tui-news-source {
		font-size: 24rpx;
		color: #999;
	}

	.tui-operate-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 60rpx 40rpx;
		box-sizing: border-box;
	}

	.tui-tag-class {
		min-width: 130rpx;
		padding: 20rpx 52rpx !important;
		font-size: 26rpx !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-black {
		color: #333;
		padding-left: 12rpx;
	}

	.tui-cmt-title {
		font-size: 30rpx;
		font-weight: bold;
		position: relative;
	}

	.tui-cmt-title::after {
		content: '';
		position: absolute;
		left: -18rpx;
		top: 18%;
		width: 6rpx;
		height: 64%;
		background: #5677fc;
	}

	.tui-cmtbox {
		padding-bottom: 20rpx;
	}

	.tui-cmt-cell {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding-top: 44rpx;
	}

	.tui-avatar {
		width: 64rpx;
		height: 64rpx;
		border-radius: 32rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-cmt-detail {
		width: 100%;
		padding-left: 16rpx;
		box-sizing: border-box;
	}

	.tui-header-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		font-size: 30rpx;
	}

	.tui-cmt-nickname {
		color: #5677fc;
	}

	.tui-fabulous {
		color: #9a9a9a;
	}

	.tui-fabulous text {
		padding-right: 4rpx;
		font-size: 24rpx
	}

	.tui-cmt-content {
		font-size: 32rpx;
		color: #333;
		text-align: justify;
		padding-top: 8rpx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-reply-box {
		border-radius: 8rpx;
		overflow: hidden;
		margin-top: 16rpx;
	}

	.tui-cell-class {
		flex-direction: column;
		justify-content: flex-start !important;
		padding: 20rpx !important;
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-cell-last {
		color: #5677fc;
	}

	.tui-flex-1 {
		flex: 1;
		width: 100%;
	}

	.tui-reply-nickname {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-bottom: 8rpx;
	}

	.tui-footer {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		margin-top: 16rpx;
		color: #9a9a9a;
	}

	.tui-primary {
		color: #5677fc !important;
	}

	.tui-ml {
		margin-left: 16rpx;
	}

	.tui-cell-last .tui-icon-class {
		width: 40rpx !important;
		margin-left: -10rpx;
	}

	.tui-operation {
		width: 100%;
		height: 100rpx;
		overflow: hidden;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99999;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-operation-left {
		display: flex;
		align-items: center;
	}

	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.tui-operation-right {
		height: 100rpx;
		box-sizing: border-box;
		padding-top: 0;
	}

	.tui-badge-class {
		color: #5677fc !important;
		position: absolute;
		top: -6rpx;
		padding: 2px 4px !important;
		/* #ifdef H5 */
		transform: translateX(50%) scale(0.8);
		/* #endif */
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btn-comment {
		height: 64rpx;
		width: 84%;
		background: #ededed;
		color: #999;
		border-radius: 8rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		box-sizing: border-box;
		padding-top: 0;
		margin-left: 30rpx;
	}

	.tui-col-7 {
		width: 58.33333333%;
	}

	.tui-col-5 {
		width: 41.66666667%;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
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
