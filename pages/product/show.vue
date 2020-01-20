<template>
	<view class="page">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
			<view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
				商品详情
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
				 @tap="back"></view>

			</view>
		</view>
		<!--header-->

		<!--banner-->
		<view class="tui-banner-swiper">
			<swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item :data-index="index" @tap.stop="previewImage">
						<image :src="item.image_path" class="tui-slide-image" :style="{height:scrollH+'px'}" />
					</swiper-item>
				</block>
			</swiper>
			<tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}/{{banner.length}}</tui-tag>
		</view>

		<!--banner-->

		<view class="tui-pro-detail">
			<view class="tui-product-title ">
				<view class="tui-padding">
					<view class="tui-pro-title">{{product.name}}</view>
				</view>

				<view class="tui-pro-titbox">
					<view class="tui-pro-pricebox ">
						<view class="tui-pro-price">
							<text class="tui-price">￥{{product.price}}起</text>
							<tui-tag size="small" :plain="true" type="high-green" shape="circle">购买返{{product.coin}}金币</tui-tag>
						</view>
					</view>
					<button open-type="share" v-if="shareShow" class="tui-share-btn tui-share-position" @tap="_showPop">
						<tui-tag type="gray" tui-tag-class="tui-tag-share tui-size" shape="circleLeft" size="small">
							<view class="tui-icon tui-icon-partake" style="color:#999;font-size:15px"></view>
							<text class="tui-share-text tui-gray">分享</text>
						</tui-tag>
					</button>
				</view>
				<!-- <view class="tui-padding">
					<view class="tui-sub-title tui-size tui-gray">此商品将于2019-06-28,10点结束闪购特卖，时尚美饰联合专场</view>
					<view class="tui-sale-info tui-size tui-gray">
						<view>快递：0.00</view>
						<view>月销2000</view>
						<view>浙江杭州</view>
					</view>
				</view> -->
			</view>


			<view class="tui-basic-info tui-mtop">
				<view class="tui-list-cell" @tap="showPopup">
					<view class="tui-bold tui-cell-title">已选</view>
					<view class="tui-selected-box">{{norm.spec_attr_names}}</view>
					<tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
				</view>

				<view class="tui-list-cell tui-last">
					<view class="tui-bold tui-cell-title">运费</view>
					<view class="tui-selected-box">在线支付免运费</view>
				</view>
				<!-- <view class="tui-list-cell tui-last">
					<view class="tui-bold tui-cell-title">运费</view>
					<view class="tui-selected-box">在线支付免运费</view>
				</view>
				<view class="tui-guarantee">
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">可配送海外</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">店铺发货&售后</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">7天无理由退货</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">闪电退款</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">极速审核</text>
					</view>
				</view>
			 -->
			</view>

			<!-- ComPany -->
			<view style="margin: 30rpx auto 0;border-bottom: 1rpx solid #ddd; background: #fff;">
				<view class="w69">
					<view class="FlexComPany">
						<view class="ComPany">
							<view class="ComPanyImg">
								<image v-if="!product.company.image" src="/static/images/basic/badge.png" mode=""></image>	
								<image v-else :src="product.company.image.image_path" mode=""></image>
							</view>
							<view>
								<view class="ComPanyName">
									{{product.company.name}}
								</view>
								<!-- <view class="ComPanyTi">
									在售商品100件
								</view> -->
							</view>
						</view>
						<view class="ComPanyGZ" :data-id="product.company.id" @tap="Actual">
							进店逛逛<text class="h" style="margin-left: 10rpx;">></text>
						</view>
					</view>
				</view>
			</view>

			<view class="tui-basic-info">
				<view class="tui-list-cell">
					<view class="tui-bold tui-cell-title">产品信息</view>
				</view>
			</view>
			<view class="tui-product-img" style="width:100%">
				<view class="" style="padding: 20rpx 0;background: #fff;">
					<rich-text :nodes="product.desc"></rich-text>
				</view>
				<!-- <image :src="'https://www.thorui.cn/img/detail/'+(index+1)+'.jpg'" v-for="(img,index) in 20" :key="index" mode="widthFix"></image> -->
			</view>
			<tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			<view class="tui-safearea-bottom"></view>
		</view>

		<!--底部操作栏-->
		<view class="tui-operation">
			<view class="tui-operation-left tui-col-3">
				<!-- <view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view> -->
				<view class="tui-operation-item" @tap="Actual" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">店铺</view>
				</view>
				<!-- <view class="tui-operation-item" @tap="_cart" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="cart" :size="22" color='#333x'></tui-icon>
					<view class="tui-operation-text tui-scale-small">购物车</view>
					<tui-badge type="danger" size="small" v-if="cart > 0">{{cart}}</tui-badge>
				</view> -->
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-9 tui-btnbox-4">
				<!-- <view class="tui-flex-1">
					<tui-button type="danger" shape="circle" size="mini" @click="showPopup">加入购物车</tui-button>
				</view> -->
				<view class="tui-flex-1">
					<tui-button type="danger" shape="circle" size="mini" @click="showPopup">立即购买</tui-button>
				</view>
			</view>
		</view>


		<!--底部操作栏-->

		<!--底部选择层-->
		<tui-bottom-popup :show="popupShow" @close="hidePopup">
			<view class="tui-popup-box">
				<view class="tui-product-box tui-padding">
					<!-- <image src="https://www.thorui.cn/img/product/11.jpg" class="tui-popup-img"></image> -->
					<image :src="product.default_image" class="tui-popup-img"></image>
					<view class="tui-popup-price">
						<view class="tui-amount tui-bold">￥<text v-show="norm.price">{{norm.price*value}}</text></view>
						<view class="tui-number">编号:{{product.no}}</view>
					</view>
				</view>
				<scroll-view scroll-y class="tui-popup-scroll">

					<view class="tui-scrollview-box">
						<block v-for="(spec,index) in product.specs">
							<view class="tui-bold tui-attr-title">{{spec.name}}</view>
							<view class="tui-attr-box">
								<block v-for="(spec_value) in spec.spec_values">
									<!-- <view class="tui-attr-item" :class="norm.spec_attrs.split('/').indexOf(String(spec_value.id)) >=0 ? 'tui-attr-active' : ''"> -->
									<view class="tui-attr-item" :class="{'tui-attr-active':ID2 == spec_value.id || ID1 == spec_value.id }" :data-id="spec_value.id" :data-index1="index" @tap="select_spec">
										{{spec_value.name}}
									</view>
								</block>
							</view>
						</block>

						<view class="tui-number-box tui-bold tui-attr-title">
							<view class="tui-attr-title">数量</view>
							<tui-numberbox :max="99" :min="1" :value="value" @change="change"></tui-numberbox>
						</view>
					</view>
				</scroll-view>
				<view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">
					<view class="tui-flex-1">
						<tui-button type="red" shape="circle" size="mini" @click="buy" :disabled="norm.id ? false : 'disabled'">立即购买</tui-button>
					</view>
					<!-- <view class="tui-flex-1">
						<tui-button type="warning" shape="circle" size="mini" @click="submit" :disabled="norm.id ? false : 'disabled'">立即购买</tui-button>
					</view> -->
				</view>
				<view class="tui-icon tui-icon-close-fill tui-icon-close" style="color: #999;font-size:20px" @tap="closeShop"></view>
				<!-- <tui-icon name="close-fill" color="#999" class="tui-icon-close" size="20" @tap="hidePopup"></tui-icon> -->
			</view>
		</tui-bottom-popup>
		<!--底部选择层-->
		<view v-show="ShowGuidance">
			<view class="Bg" @tap="_colse"></view>
			<view class="Guidance" @tap="_colse">
				<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>
<script></script>
<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import api from "../../api.js"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiNomore,
			tuiButton,
			tuiTopDropdown,
			tuiBottomPopup,
			tuiNumberbox
		},
		data() {
			return {
				cart:0,
				productid:'',
				ID1:null,
				ID2:null,
				ShowGuidance: false,
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				product: {
					company:{
						name:'',
						image:{
							image_path:'',
						}
					}
					
				},
				banner: [],
				norm: {
					price:null
				},
				norms: [
					{
						price:null
					}
				],
				bannerIndex: 0,
				topMenu: [],
				menuShow: false,
				popupShow: false,
				value: 1,
				collected: false,
				shareShow: false,
				from: 'h5'
			}
		},
		onReady: function(options) {

		},
		onLoad: function(options) {
			this.from = options.from
			let that = this;
			this.shareShow = this.tui.wechatBowser();
			api.product(options.id).then(function(data) {
				console.log(data);
				that.banner = data.images;
				that.product = data;
				that.norms = data.norms;
				that.norm = data.norms;
				if (!that.tui.wechatBowser()) return;
				if (!that.product.task_id) return;
				//查看
				console.log(that.product.task_id);
				api.view(that.product.task_id, options.token).then(function(data){
					console.log(data);
				}).catch(function(){
					
				})
				api.fission(that.product.task_id, options.token).then(function(fission_log) {
					console.log(fission_log);
					that.tui.jssdk().then(function(jweixin) {
						let image_path = ''
						if(fission_log.task.image){
							image_path = fission_log.task.image.image_path
						}
						jweixin.updateAppMessageShareData({ 
						    title: that.product.name, // 分享标题
						    desc: '分享链接赚金币,提现赢大奖', // 分享描述
						    link: (location.origin + location.pathname + '?id=' + that.product.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						    imgUrl: image_path, // 分享图标
						    success: function () {
						      // 设置成功
							  console.log('updateAppMessageShareData');
						    }
						  })
						// jweixin.onMenuShareAppMessage({
							
						// 	title: that.product.name, // 分享标题
						// 	desc: '分享链接赚金币,提现赢大奖', // 分享描述
						// 	link: (location.origin + location.pathname + '?id=' + that.product.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						// 	imgUrl: that.product.images[0].image_path, // 分享图标
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
			console.log(this.tui);
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						this.width = obj.left || res.windowWidth;
						this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
						this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
						this.scrollH = res.windowWidth
					}
				})
			}, 50)
		},
		onShow: function(options) {
			
		},
		methods: {
			select_spec:function(e){
				let that = this;
				let index1 = e.currentTarget.dataset.index1
				let id = e.currentTarget.dataset.id
				if(index1==0){this.ID1 = e.currentTarget.dataset.id}
				else if(index1==1){this.ID2 = e.currentTarget.dataset.id}
				// console.log(this.product.norm)
				var arr = this.product.norms
				let select_norm = this.product.norms.find(function(norm){
					if(norm.spec_attrs === that.ID1){
						return true
					}else if(norm.spec_attrs === that.ID1+'/'+that.ID2){
						return true
					}
				})
				if(select_norm){
					that.norm = select_norm
				}
				
			},
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			previewImage: function(e) {
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.banner[index],
					urls: this.banner
				})
			},
			back: function() {
				this.tui.goBack();
			},
			openMenu: function() {
				this.menuShow = true
			},
			closeMenu: function() {
				this.menuShow = false
			},
			closeShop:function(){
				this.popupShow = false
			},
			showPopup: function() {
				this.popupShow = true
			},
			hidePopup: function() {
				this.popupShow = false
			},
			buy: function(){
				if(this.norm.id){
					uni.navigateTo({
						url: '../order/new?id=' + this.norm.id + '&number=' + this.value
					})
				}
			},
			change: function(e) {
				this.value = e.value
			},
			collecting: function() {
				this.collected = !this.collected
			},
			common: function() {
				this.tui.toast("功能开发中~")
			},
			submit() {
				this.popupShow = false
				uni.navigateTo({
					url: '../order/new'
				})
			},
			coupon() {
				uni.navigateTo({
					url: '../coupon/index'
				})
			},
			share() {
				this.tui.share();
			},
			_showPop() {
				// 确认弹窗回调
				this.ShowGuidance = true
			},
			_colse: function() {
				this.ShowGuidance = false
			},
			Actual() {
				uni.navigateTo({
					url: '../company/show?id='+this.product.company.id
				})
			},
			_cart() {
				uni.navigateTo({
					url: '../cart/show'
				})
			},
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		}
	}
</script>

<style>
	/* icon 也可以使用组件*/
	@import "../../static/style/icon.css";

	image {
		width: 100%;
		height: 100%;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.Bg {
		position: fixed;
		left: 0;
		overflow: hidden;
		top: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0, 0.4);
	}

	.Guidance {
		position: absolute;
		top: -85rpx;
		left: 30rpx;
		z-index: 100;
		width: 690rpx;
		height: 500rpx;
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

	.FlexComPany {
		padding: 20rpx 0;
		margin: 10rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.ComPanyName {
		font-weight: bold;
		font-size: 32rpx;
		color: #000000;
	}

	.ComPanyTi {
		font-size: 28rpx;
		color: #999999;
		margin-top: 20rpx;
	}

	.ComPany {
		width: 500rpx;
		display: flex;
		align-items: center;
	}
	

	.ComPanyImg {
		padding: 10rpx;
		border: 1rpx solid #eee;
		margin-right: 20rpx;
		width: 120rpx;
		height: 120rpx;
	}

	.h {
		color: #666;
	}

	.ComPanyGZ {
		font-size: 28rpx;
		color: red;
		/* border-radius: 40rpx; */
		letter-spacing: 3rpx;
		/* padding: 5rpx 20rpx; */
		/* background: red; */
	}

	.w69 {
		width: 690rpx;
		margin: 0 auto;
	}

	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 110rpx;
	}

	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
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
		height: 32px;
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
		height: 32px !important;
		width: 32px !important;
		display: block !important;
	}

	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30rpx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.tui-menu-box {
		box-sizing: border-box;
	}

	.tui-menu-header {
		font-size: 34rpx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.tui-top-dropdown {
		z-index: 9999 !important;
	}

	.tui-menu-itembox {
		color: #fff;
		padding: 40rpx 10rpx 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26rpx;
	}

	.tui-menu-item {
		width: 22%;
		height: 160rpx;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	.tui-badge-box {
		position: relative;
	}

	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}

	.tui-msg-badge {
		top: -10px;
	}

	.tui-icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}

	.tui-menu-text {
		padding-top: 12rpx;
	}

	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.tui-padding {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	/* #ifdef H5 */
	.tui-ptop {
		padding-top: 44px;
	}

	/* #endif */

	.tui-size {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-gray {
		color: #999;
	}

	.tui-icon-red {
		color: #ff201f;
	}

	.tui-border-radius {
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
		overflow: hidden;
	}

	.tui-radius-all {
		border-radius: 24rpx;
		overflow: hidden;
	}

	.tui-mtop {
		margin-top: 26rpx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 30rpx 0;
	}

	.tui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 20rpx;
		/* font-weight: bold; */
		line-height: 44rpx;
	}

	.tui-pro-price {
		display: flex;
		align-items: center;
	}

	.tui-pro-price .tui-tag-class {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24rpx;
		font-weight: normal;
	}

	.tui-price {
		font-size: 30rpx;
	}

	.tui-original-price {
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-line-through {
		text-decoration: line-through;
	}

	.tui-collection {
		color: #333;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 44rpx;
	}

	.tui-scale {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24rpx;
		font-weight: normal;
	}

	.tui-icon-collection {
		line-height: 20px !important;
		margin-bottom: 0 !important;

	}

	.tui-pro-titbox {
		font-size: 32rpx;
		/* font-weight: 500; */
		position: relative;
		padding: 0 150rpx 0 30rpx;
		box-sizing: border-box;
	}

	.tui-pro-title {
		font-weight: bold;
		font-size: 38rpx;
		padding-bottom: 18rpx;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border-radius: 0;
	}

	.tui-tag-share {
		display: flex;
		align-items: center;
	}

	.tui-share-position {
		position: absolute;
		right: 0;
		top: 0rpx;
	}

	.tui-share-text {
		padding-left: 8rpx;
	}

	.tui-sub-title {
		padding: 20rpx 0;
	}

	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30rpx;
	}

	.tui-discount-box {
		background: #fff;
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 36rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-right {
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}

	.tui-top40 {
		top: 40rpx !important;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126rpx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}

	.tui-tag-coupon-box .tui-tag-class {
		margin-right: 20rpx;
	}


	.tui-cell-title {
		/* width: 66rpx; */
		padding-right: 30rpx;
		flex-shrink: 0;
	}

	.tui-promotion-box {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 10rpx 0;
		width: 74%;
	}

	.tui-promotion-box .tui-tag-class {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	}

	/* .tui-inline-block {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	} */

	.tui-basic-info {
		background: #fff;
	}

	.tui-addr-box {
		width: 76%;
	}

	.tui-addr-item {
		padding: 10rpx;
		line-height: 34rpx;
	}

	.tui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 30rpx 30rpx 30rpx;
		font-size: 24rpx;
	}

	.tui-guarantee-item {
		color: #999;
		padding-right: 30rpx;
		padding-top: 10rpx;
	}

	.tui-pl {
		padding-left: 4rpx;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-cmt-all {
		color: #ff201f;
		padding-right: 8rpx;
	}

	.tui-cmt-content {
		font-size: 26rpx;
	}

	.tui-cmt-user {
		display: flex;
		align-items: center;
	}

	.tui-acatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		display: block;
		margin-right: 16rpx;
	}

	.tui-cmt {
		padding: 14rpx 0;
	}

	.tui-attr {
		font-size: 24rpx;
		color: #999;
		padding: 6rpx 0;
	}

	.tui-cmt-btn {
		padding: 50rpx 0 30rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-tag-cmt {
		min-width: 130rpx;
		padding: 20rpx 52rpx !important;
		font-size: 26rpx !important;
		display: inline-block;
	}

	.tui-nomore-box {
		padding-top: 10rpx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	.tui-product-img image {
		width: 100%;
		display: block;
	}

	/*底部操作栏*/

	.tui-col-7 {
		width: 58.33333333%;
	}

	.tui-col-5 {
		width: 41.66666667%;
	}

	.tui-operation {
		width: 100%;
		height: 100rpx;
		/* box-sizing: border-box; */
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
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

	.tui-operation-text {
		font-size: 22rpx;
		color: #333;
	}

	.tui-opacity {
		opacity: 0.5;
	}

	.tui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}

	.tui-operation-right {
		height: 100rpx;
		/* box-sizing: border-box; */
		padding-top: 0;
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btnbox-4 .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28rpx !important;
	}

	.tui-operation .tui-badge-class {
		position: absolute;
		top: -6rpx;
		/* #ifdef H5 */
		transform: translateX(50%)
			/* #endif  */
	}

	.tui-flex-1 {
		flex: 1;
	}

	/*底部操作栏*/

	/*底部选择弹层*/

	.tui-popup-class {
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-popup-box {
		position: relative;
		padding: 30rpx 0 100rpx 0;
	}

	.tui-popup-btn {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.tui-popup-btn .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28rpx !important;
	}

	.tui-icon-close {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}

	.tui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24rpx;
		padding-bottom: 30rpx;
	}

	.tui-popup-img {
		height: 200rpx;
		width: 200rpx;
		border-radius: 24rpx;
		display: block;
	}

	.tui-popup-price {
		padding-left: 20rpx;
		padding-bottom: 8rpx;
	}

	.tui-amount {
		color: #ff201f;
		font-size: 36rpx;
	}

	.tui-number {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 12rpx;
		color: #999;
	}

	.tui-popup-scroll {
		height: 600rpx;
		font-size: 26rpx;
	}

	.tui-scrollview-box {
		padding: 0 30rpx 60rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-attr-title {
		padding: 10rpx 0;
		color: #333;
	}

	.tui-attr-box {
		font-size: 0;
		padding: 20rpx 0;
	}

	.tui-attr-item {
		max-width: 100%;
		min-width: 200rpx;
		height: 64rpx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26rpx;
		box-sizing: border-box;
		border-radius: 32rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		font-size: 26rpx;
	}

	.tui-attr-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}

	.tui-attr-active::after {
		content: "";
		position: absolute;
		border: 1rpx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
		left: 0;
		top: 0;
	}

	.tui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0 30rpx 0;
		box-sizing: border-box;
	}
	 .tui-col-9{
		 width: 75%
	 }
	 .tui-col-3{
	 		 width: 25%
	 }

	/*底部选择弹层*/
</style>
