<template>
	<view class="container">
		<view class="tui-order-header">
			<image :src="webURL + 'img_detail_bg.png'" mode="widthFix" class="tui-img-bg"></image>
			<view class="tui-header-content">
				<view>
					<view class="tui-status-text">{{ order.get_status }}</view>
					<view class="tui-reason">
						<text class="tui-reason-text">{{ order.get_status_desc }}</text>
						<tui-countdown
							:time="1800"
							color="rgba(254,254,254,0.75)"
							colonColor="rgba(254,254,254,0.75)"
							bcolor="transparent"
							bgcolor="transparent"
							v-if="status === 1"
						></tui-countdown>
					</view>
				</view>
				<!-- <image :src="getImg(status)" class="tui-status-img" mode="widthFix"></image> -->
			</view>
		</view>
		<tui-list-cell :arrow="true" bgcolor="#fefefe">
			<view class="tui-flex-box" @tap="_express" v-if="order.address">
				<image :src="webURL + 'img_order_logistics3x.png'" class="tui-icon-img"></image>
				<view class="tui-logistics">
					<view class="tui-logistics-text">
						<text class="tui-name" style="font-size:14px;">{{ order.address.name }}</text>
						{{ order.address.phone }}
					</view>
					<view class="tui-logistics-time">{{ order.address.content }}</view>
				</view>
			</view>
		</tui-list-cell>
		<!-- <tui-list-cell :last="true" :hover="false">
			<view class="tui-flex-box">
				<image :src="webURL+'img_order_address3x.png'" class="tui-icon-img"></image>
				<view class="tui-addr">
					<view class="tui-addr-userinfo">张一<text class="tui-addr-tel">17788849992</text></view>
					<view class="tui-addr-text">广东省广州市海珠区阅江西路222号鲜卑路16巷吉安花园 2栋106</view>
				</view>
			</view>
		</tui-list-cell> -->

		<view class="tui-order-item">
			<tui-list-cell :hover="false" :lineLeft="false"><view class="tui-goods-title">商品信息</view></tui-list-cell>
			<block v-for="(order_product, index) in order.order_products" :key="index">
				<tui-list-cell padding="0">
					<view class="tui-goods-item">
						<image :src="`/static/images/mall/product/${index + 3}.jpg`" class="tui-goods-img"></image>
						<view class="tui-goods-center">
							<view class="tui-goods-name">{{ order_product.product.name }}</view>
							<view class="tui-goods-attr" v-if="order.type == 'Order::MoneyOrder'">{{ order_product.norm.spec_attr_names }}</view>
						</view>
						<view class="tui-price-right">
							<view v-if="order.type == 'Order::MoneyOrder'">￥{{ order_product.norm.price }}</view>
							<view v-if="order.type == 'Order::CoinOrder'">{{ order_product.product.price }}金币</view>
							<view>x{{ order_product.number }}</view>
						</view>
					</view>
				</tui-list-cell>
			</block>
			<view class="tui-goods-info">
				<view class="tui-price-flex tui-size24" v-if="order.type == 'Order::MoneyOrder'">
					<view>返金币</view>
					<view>{{ order.coin }}</view>
				</view>
				<!-- <view class="tui-price-flex  tui-size24">
					<view>优惠券</view>
					<view>无	</view>
				</view> -->
				<view class="tui-price-flex  tui-size24">
					<view>配送费</view>
					<view>包邮</view>
				</view>
				<view class="tui-price-flex  tui-size24">
					<view>配送方式</view>
					<view>快递</view>
				</view>
				<!-- <view class="tui-price-flex tui-size32 tui-pbtm20">
					<view class="tui-flex-shrink">合计</view>
					<view class="tui-goods-price">
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">1192</view>
						<view class="tui-size-24">.00</view>
					</view>
				</view> -->
				<view class="tui-price-flex tui-size32">
					<!-- <view class="tui-flex-shrink">实付款</view> -->
					<view class="tui-goods-price tui-primary-color">
						<view v-if="order.type == 'Order::MoneyOrder'">￥{{ order.view_amount }}</view>
						<view v-if="order.type == 'Order::CoinOrder'">{{ order.view_amount }} 金币</view>
					</view>
				</view>
			</view>
		</view>

		<view class="tui-order-info">
			<tui-list-cell :hover="false"><view class="tui-order-title">订单信息</view></tui-list-cell>
			<view class="tui-order-content">
				<view class="tui-order-flex">
					<view class="tui-item-title">订单号:</view>
					<view class="tui-item-content">{{ order.no }}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">物流单号:</view>
					<view class="tui-item-content">{{ order.express_no }}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">创建时间:</view>
					<view class="tui-item-content">{{ order.created_at }}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">付款时间:</view>
					<view class="tui-item-content">{{ order.payment_at }}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">配送方式:</view>
					<view class="tui-item-content">包邮</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">订单备注:</view>
					<view class="tui-item-content">{{order.desc}}</view>
				</view>
			</view>
		</view>
		<view class="tui-order-info" v-if="order.after_order">
			<tui-list-cell :hover="false"><view class="tui-order-title">售后信息</view></tui-list-cell>
			<view class="tui-order-content">
				<view class="tui-order-flex">
					<view class="tui-item-title">物流单号:</view>

					<view class="tui-item-content">
						<input
							confirm-type="search"
							placeholder="请输入退款单物流"
							:focus="true"
							@confirm="express"
							auto-focus
							placeholder-class="tui-input-plholder"
							class="tui-input"
							style="font-size:12px"
							:value="order.after_order.express_no ? order.after_order.express_no : ''"
						/>
					</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">收货地址:</view>
					<view class="tui-item-content">{{ receive_address.content}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">收货人:</view>
					<view class="tui-item-content">{{ receive_address.name}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">联系人:</view>
					<view class="tui-item-content">{{receive_address.phone}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">申请时间:</view>
					<view class="tui-item-content">{{ order.after_order.created_at }}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">状态:</view>
					<view class="tui-item-content">{{ order.after_order.get_status }}</view>
				</view>
			</view>
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar tui-order-btn">
			<!-- <view class="tui-btn-mr">
				<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle">取消订单</tui-button>
			</view> -->
			<view class="tui-btn-mr">
				<tui-button type="danger" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @tap="afterSale" v-if="!order.prize_log && !order.after_order">
					申请售后
				</tui-button>
			</view>
			<view class="tui-btn-mr">
				<tui-button type="green" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @tap="receive" v-if="order.status == 'send'">签收</tui-button>
			</view>
			<view class="tui-btn-mr"><tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @tap="back">返回</tui-button></view>
		</view>
		<tui-loading :visible="loading"></tui-loading>
	</view>
</template>

<script>
import tuiIcon from '@/components/icon/icon';
import tuiButton from '@/components/extend/button/button';
import tuiCountdown from '@/components/countdown/countdown';
import tuiListCell from '@/components/list-cell/list-cell';
import api from '../../api.js';
import tuiLoading from '@/components/loading/loading';
export default {
	components: {
		tuiIcon,
		tuiButton,
		tuiCountdown,
		tuiListCell,
		tuiLoading
	},
	data() {
		return {
			webURL: 'https://www.thorui.cn/wx/static/images/mall/order/',
			//1-待付款 2-付款成功 3-待收货 4-订单已完成 5-交易关闭
			status: 2,
			order: { order_products: [], address: {} },
			disabled: false,
			loading: false,
			receive_address: {}
		};
	},
	onLoad(options) {
		let that = this;
		api.order(options.id)
			.then(function(data) {
				that.order = data;
			})
			.catch(function(e) {});
		api.receiveAddress(options.id)
			.then(function(data) {
				that.receive_address = data;
			})
			.catch(function(e) {});
	},
	methods: {
		_express: function() {
			uni.navigateTo({
				url: '../order/express?id=' + this.order.id
			});
		},
		afterSale: function() {
			let that = this;
			uni.showModal({
				title: '确认申请售后（退款）吗？',
				content: '商户同意申请之后，如需要寄回已发货商品，请在寄出之后填写物流单号',
				success: function(res) {
					if (res.confirm) {
						console.log(1111);
						that.loading = true;
						that.disabled = true;
						api.afterSale(that.order.id)
							.then(function(data) {
								if (data.id) {
									that.order.after_order = data;
								}
								that.loading = false;
								that.disabled = false;
							})
							.catch(function(e) {
								console.log(e);
							});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		express: function(e) {
			let that = this;
			let express_no = e.detail.value;
			that.loading = true;
			that.disabled = true;
			api.setExpress(this.order.id, express_no, '')
				.then(function(data) {
					if (data.id) {
						that.order.after_order = data;
						that.loading = false;
						that.disabled = false;
					}
				})
				.catch(function(e) {
					console.log(e);
				});
		},
		receive: function() {
			let that = this;
			that.loading = true;
			that.disabled = true;
			api.receive(this.order.id)
				.then(function(data) {
					that.order = data;
					that.loading = false;
					that.disabled = false;
				})
				.catch(function(e) {
					console.log(e);
				});
		},
		back: function() {
			this.tui.goBack()
		}
	}
};
</script>

<style>
.container {
	padding-bottom: 118rpx;
}

.tui-order-header {
	width: 100%;
	height: 160rpx;
	position: relative;
}

.tui-img-bg {
	width: 100%;
	height: 160rpx;
}

.tui-header-content {
	width: 100%;
	height: 160rpx;
	position: absolute;
	z-index: 10;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 70rpx;
	box-sizing: border-box;
}

.tui-status-text {
	font-size: 36rpx;
	line-height: 36rpx;
	color: #fefefe;
}

.tui-reason {
	font-size: 24rpx;
	line-height: 24rpx;
	color: rgba(254, 254, 254, 0.75);
	padding-top: 15rpx;
	display: flex;
	align-items: center;
}

.tui-reason-text {
	padding-right: 12rpx;
}

.tui-status-img {
	width: 80rpx;
	height: 80rpx;
	display: block;
}

.tui-flex-box {
	width: 100%;
	display: flex;
	align-items: center;
}

.tui-icon-img {
	width: 44rpx;
	height: 44rpx;
	flex-shrink: 0;
}

.tui-logistics {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 24rpx 0 20rpx;
	box-sizing: border-box;
}

.tui-logistics-text {
	font-size: 28rpx;
	line-height: 32rpx;
}

.tui-logistics-time {
	font-size: 24rpx;
	line-height: 24rpx;
	padding-top: 16rpx;
	color: #666;
}

.tui-addr {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20rpx;
	box-sizing: border-box;
}

.tui-addr-userinfo {
	font-size: 30rpx;
	line-height: 30rpx;
	font-weight: bold;
}

.tui-addr-text {
	font-size: 24rpx;
	line-height: 30rpx;
	padding-top: 16rpx;
}

.tui-addr-tel {
	padding-left: 40rpx;
}

.tui-order-item {
	margin-top: 20rpx;
	border-radius: 10rpx;
	overflow: hidden;
}

.tui-goods-title {
	width: 100%;
	font-size: 28rpx;
	line-height: 28rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
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

.tui-color-red {
	color: #e41f19;
	padding-right: 30rpx;
}

.tui-goods-price {
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	font-size: 24rpx;
}

.tui-size-24 {
	font-size: 24rpx;
	line-height: 24rpx;
}

.tui-price-large {
	font-size: 32rpx;
	line-height: 30rpx;
}

.tui-goods-info {
	width: 100%;
	padding: 30rpx;
	box-sizing: border-box;
	background: #fff;
}

.tui-price-flex {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tui-size24 {
	padding-bottom: 20rpx;
	font-size: 24rpx;
	line-height: 24rpx;
	color: #888;
}

.tui-size32 {
	font-size: 32rpx;
	line-height: 32rpx;
	font-weight: 500;
}

.tui-pbtm20 {
	padding-bottom: 20rpx;
}

.tui-flex-shrink {
	flex-shrink: 0;
}

.tui-primary-color {
	color: #eb0909;
}

.tui-order-info {
	margin-top: 20rpx;
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
	border-left: 4rpx solid #eb0909;
	height: 100%;
}

.tui-order-content {
	width: 100%;
	padding: 24rpx 30rpx;
	box-sizing: border-box;
	background: #fff;
	font-size: 24rpx;
	line-height: 30rpx;
}

.tui-order-flex {
	display: flex;
	padding-top: 18rpx;
}

.tui-order-flex:first-child {
	padding-top: 0;
}

.tui-item-title {
	width: 132rpx;
	flex-shrink: 0;
}

.tui-item-content {
	color: #666;
}

.tui-safe-area {
	height: 1rpx;
	padding-bottom: env(safe-area-inset-bottom);
}

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
	box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
	padding-bottom: env(safe-area-inset-bottom);
	z-index: 999;
}

.tui-btn-mr {
	margin-right: 30rpx;
}
</style>
