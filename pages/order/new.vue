<template>
	<view class="container">
		<view class="tui-box">
			<tui-list-cell :arrow="true" :last="true" :radius="true" @click="chooseAddr">
				<view class="tui-address">
					<view v-if="address.id">
						<view class="tui-userinfo">
							<text class="tui-name">{{address.name}}</text> {{address.phone}}
						</view>
						<view class="tui-addr">
							<view class="tui-addr-tag" v-if="address.tag && address.tag =='default'">默认</view>
							<text>{{address.content}}</text>
						</view>
					</view>
					<view class="tui-none-addr" v-else>
						<image src="/static/images/index/map.png" class="tui-addr-img" mode="widthFix"></image>
						<text>选择收货地址</text>
					</view>
				</view>
				<view class="tui-bg-img"></view>
			</tui-list-cell>
			<view class="tui-top tui-goods-info">
					<tui-list-cell :hover="false" :lineLeft="true">
						<view class="tui-goods-title">
							<image :src="norm.product.company.image ? norm.product.company.image.image_path : ''" mode="widthFix" style="width: 40rpx;height: 40rpx;margin-right: 10rpx; "></image>
							{{norm.product.company.name}}
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false" padding="0" >
						<view class="tui-goods-item">
							<image :src="norm.product.default_image" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">{{norm.product.name}}</view>
								<view class="tui-goods-attr">{{norm.spec_attr_names}}</view>
							</view>
							<view class="tui-price-right">
								<view>￥{{norm.price}}</view>
								<view>x{{number}}</view>
							</view>
						</view>
					</tui-list-cell>

					<tui-list-cell :hover="false">
						<view class="tui-padding tui-flex">
							<view>商品总额：</view>
							<view>￥{{norm.price * number}}</view>
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false" :lineLeft="false" padding="0">
						<view class="tui-remark-box tui-padding tui-flex">
							<view>订单备注</view>
							<input type="text" class="tui-remark" placeholder="选填: 请先和商家协商一致" placeholder-class="tui-phcolor" @input="onKeyInput"></input>
						</view>
					</tui-list-cell>
				<!-- <tui-list-cell :arrow="hasCoupon" :hover="hasCoupon" >
					<view class="tui-padding tui-flex">
						<view>优惠券</view>
						<view :class="{'tui-color-red':hasCoupon}">{{hasCoupon?"满5减1":'没有可用优惠券'}}</view>
					</view>
				</tui-list-cell> -->
				<!-- <tui-list-cell :hover="true" :arrow="true">
					<view class="tui-padding tui-flex">
						<view>发票</view>
						<view class="tui-invoice-text">不开发票</view>
					</view>
				</tui-list-cell> -->
				<tui-list-cell :hover="false">
					<view class="tui-padding tui-flex">
						<view>配送费</view>
						<view>包邮</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false">
					<view class="tui-padding tui-flex">
						<view>返还金币：</view>
						<view>{{norm.product.coin * number}}</view>
					</view>
				</tui-list-cell>
				
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-padding tui-flex tui-total-flex">
						<view class="tui-flex-end tui-color-red">
							<view class="tui-black">合计： </view>
							<view class="tui-size-26">￥</view>
							<view class="tui-price-large">{{norm.price * number}}</view>
						</view>
					</view>
				</tui-list-cell>
			</view>

			<!-- <view class="tui-top">
				<tui-list-cell :last="true" :hover="insufficient" :radius="true" :arrow="insufficient">
					<view class="tui-flex">
						<view class="tui-balance">余额支付<text class="tui-gray">(￥2019.00)</text></view>
						<switch color="#30CC67" class="tui-scale-small" v-show="!insufficient" />
						<view class="tui-pr-30 tui-light-dark" v-show="insufficient">余额不足, 去充值</view>
					</view>
				</tui-list-cell>
			</view> -->
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar">
			<view class="tui-flex-end tui-color-red tui-pr-20">
				<view class="tui-black">实付金额: </view>
				<view class="tui-size-26">￥</view>
				<view class="tui-price-large">{{number * norm.price}}</view>
			</view>
			<view class="tui-pr25">
				<tui-button width="200rpx" height="70rpx" type="danger" shape="circle" @click="btnPay" :disabled="applied">确认支付</tui-button>
			</view>
		</view>
		<tui-loading :visible="loading"></tui-loading>
	</view>
</template>

<script>
	import tuiButton from "@/components/extend/button/button"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import api from "../../api.js"
	import tuiLoading from "@/components/loading/loading"
	export default {
		components: {
			tuiButton,
			tuiListCell,
			tuiBottomPopup,
			tuiLoading
		},
		data() {
			return {
				hasCoupon: true,
				insufficient: false,
				orders: [],
				amount: 0,
				norm: {product: {company: {image: {}}}},
				address: {},
				ids: '',
				desc: '',
				number: 1,
				applied: false,
				loading: false
			}
		},
		onShow(){
			let that = this
			let id = uni.getStorageSync('addressId')
			console.log('show')
			if(id){
				console.log(1)
				api.address(id).then(function(data){
					console.log(data)
					that.address = data
				}).catch(function(e){
					console.log(e)
				})
			}else{
				api.defaultAddress().then(function(data){
					console.log(data)
					that.address = data
				}).catch(function(e){
					console.log(e)
				})
			}
		},
		onLoad(options){
			let intervalID = setInterval(function(){
				console.log(1);
				clearInterval(intervalID);
			}, 2000);
			console.log('load')
			let that = this
			if(options.number){
				that.number = options.number
			}
			api.norm(options.id).then(function(norm){
				if(norm.id){
					that.norm = norm
				}
			}).catch(function(e){
				console.log(e)
			})
		},
		methods: {
			chooseAddr() {
				uni.navigateTo({
					url: "../address/index"
				})
			},
			onKeyInput: function(event) {
				this.desc = event.target.value
			},
			btnPay() {
				let that = this
				if(!that.address.id){
					this.tui.toast('请填写收件人信息', 2000, false)
					return
				}
				this.applied = true
				this.loading = true
				let norms = [{id: that.norm.product.id, norm: {id: that.norm.id, number: that.number}}]
				if(this.tui.wechatBowser()){
					console.log('wechat')
					this.tui.jssdk().then(function(jweixin){
						api.applyOrder(JSON.stringify(norms), that.address.id, that.desc, 'web').then(function(data){
							console.log(data)
							let js_pay = data[0].current_payment.js_pay
							jweixin.chooseWXPay({
							  appId: js_pay.appId,
							  timestamp: js_pay.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
							  nonceStr: js_pay.nonceStr, // 支付签名随机串，不长于 32 位
							  package: js_pay.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
							  signType: js_pay.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
							  paySign: js_pay.paySign, // 支付签名
							  success: function (res) {
							    // 支付成功后的回调函数
								let intervalID = setInterval(function(){
									console.log(1);
									api.queryOrder(data[0].id).then(function(order){
										if(order.status == 'pay'){
											clearInterval(intervalID);
											uni.navigateTo({
												url: '../order/success?id=' + order.id
											})
										}
									}).catch(function(e){
										alert(e)
									})
								}, 2000);
							  }
							});
						}).catch(function(e){
							console.log(e)
						})
						
					}).catch(function(e){
						
					})
				}else{
					console.log('app')
					api.applyOrder(JSON.stringify(norms), that.address.id, that.desc, 'app').then(function(data){
						if(data[0].id){
							console.log(data)
							window.parent.postMessage({
								event: 'pay',
								params: {
									payment: data
								}
							}, '*')
						}
					}).catch(function(e){
						
					})
					
				}
				// uni.navigateTo({
				// 	url: "../order/success"
				// })
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 98rpx;
	}

	.tui-box {
		padding: 20rpx 0 118rpx;
		box-sizing: border-box;
	}

	.tui-address {
		min-height: 80rpx;
		padding: 10rpx 0;
		box-sizing: border-box;
		position: relative;
	}

	.tui-userinfo {
		font-size: 30rpx;
		font-weight: 500;
		line-height: 30rpx;
		padding-bottom: 12rpx;
	}

	.tui-name {
		padding-right: 40rpx;
	}

	.tui-addr {
		font-size: 24rpx;
		word-break: break-all;
		padding-right: 25rpx;
	}

	.tui-addr-tag {
		padding: 5rpx 8rpx;
		flex-shrink: 0;
		background: #EB0909;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		line-height: 25rpx;
		transform: scale(0.8);
		transform-origin: 0 center;
		border-radius: 6rpx;
	}

	.tui-bg-img {
		position: absolute;
		width: 100%;
		height: 8rpx;
		left: 0;
		bottom: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAECAMAAADszM6/AAAAOVBMVEUAAAAVqfH/fp//vWH/vWEVqfH/fp8VqfH/fp//vWEVqfH/fp8VqfH/fp//vWH/vWEVqfH/fp//vWHpE7b6AAAAEHRSTlMA6urqqlVVFRUVq6upqVZUDT4vVAAAAEZJREFUKM/t0CcOACAQRFF6r3v/w6IQJGwyDsPT882IQzQE0E3chToByjG5LwMgLZN3TQATmdypCciBya0cgOT3/h//9PgF49kd+6lTSIIAAAAASUVORK5CYII=") repeat;
	}

	.tui-top {
		margin-top: 20rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}

	.tui-padding {
		box-sizing: border-box;
	}

	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-flex {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
	}
	.tui-total-flex{
		justify-content: flex-end;
	}

	.tui-color-red,
	.tui-invoice-text {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-balance {
		font-size: 28rpx;
		font-weight: 500;
	}

	.tui-black {
		color: #222;
		line-height: 30rpx;
	}

	.tui-gray {
		color: #888888;
		font-weight: 400;
	}

	.tui-light-dark {
		color: #666;
	}

	.tui-goods-price {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
	}

	.tui-size-26 {
		font-size: 26rpx;
		line-height: 26rpx;
	}

	.tui-price-large {
		font-size: 34rpx;
		line-height: 32rpx;
		font-weight: 600;
	}

	.tui-flex-end {
		display: flex;
		align-items: flex-end;
		padding-right: 0;
	}

	.tui-phcolor {
		color: #B3B3B3;
		font-size: 26rpx;
	}

	/* #ifndef H5 */
	.tui-remark-box {
		padding: 22rpx 30rpx;
	}

	/* #endif */
	/* #ifdef H5 */
	.tui-remark-box {
		padding: 26rpx 30rpx;
	}

	/* #endif */

	.tui-remark {
		flex: 1;
		font-size: 26rpx;
		padding-left: 64rpx;
	}

	.tui-scale-small {
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.tui-scale-small .wx-switch-input {
		margin: 0 !important;
	}

	/* #ifdef H5 */
	>>>uni-switch .uni-switch-input {
		margin-right: 0 !important;
	}

	/* #endif */
	.tui-tabbar {
		width: 100%;
		height: 98rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 26rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3);
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 999;
	}

	.tui-pr-30 {
		padding-right: 30rpx;
	}

	.tui-pr-20 {
		padding-right: 20rpx;
	}

	.tui-none-addr {
		height: 80rpx;
		padding-left: 5rpx;
		display: flex;
		align-items: center;
	}

	.tui-addr-img {
		width: 36rpx;
		height: 46rpx;
		display: block;
		margin-right: 15rpx;
	}


	.tui-pr25 {
		padding-right: 25rpx;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}
	.tui-order-title {
		position: relative;
		font-size: 28rpx;
		line-height: 28rpx;
		padding-left: 12rpx;
		box-sizing: border-box;
	}
	
	.tui-order-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		border-left: 4rpx solid #EB0909;
		height: 100%;
	}
</style>
