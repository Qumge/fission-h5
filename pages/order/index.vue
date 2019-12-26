<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :isFixed="scrollTop>=0" :currentTab="currentTab" selectedColor="#E41F19" sliderBgColor="#E41F19"
		 @change="change"></tui-tabs>
		<!--选项卡逻辑自己实现即可，此处未做处理-->
		<view :class="{'tui-order-list':scrollTop>=0}">
			<view class="tui-order-item" v-for="(order,orderIndex) in orders" :key="orderIndex">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>
							下单时间
							：{{order.created_at}}
						</view>
		
						<view class="tui-order-status" :style="'color:'+ getColor(order.status)">{{order.get_status}}</view>
					</view>
				</tui-list-cell>
				<block v-for="(order_product,index) in order.order_products" :key="index">
					<tui-list-cell padding="0">
						<view class="tui-goods-item">
							<image :src="order_product.product.default_image" class="tui-goods-img"></image>
							<view class="tui-goods-center">
								<view class="tui-goods-name">{{order_product.product.name}}）</view>
								<view class="tui-goods-attr" v-if="order.type == 'Order::MoneyOrder'">{{order_product.norm.spec_attr_names}}</view>
							</view>
							<view class="tui-price-right">
								<view v-if="order.type == 'Order::MoneyOrder'">￥{{order_product.norm.price}}</view>
								<view v-if="order.type == 'Order::CoinOrder'">{{order_product.product.price}}金币</view>
								<view>x{{order_product.number}}</view>
							</view>
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>共{{order.number}}件商品 合计：</view>
						
						<view class="tui-size-24" v-if="order.type == 'Order::MoneyOrder'">￥</view>
						<view class="tui-price-large">{{order.view_amount}}</view>
						<view v-if="order.type == 'Order::CoinOrder'">金币</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view class="tui-btn-ml">
						<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle"  @click="detail(order.id)">查看详情</tui-button>
					</view>
				</view>
			</view>
		</view>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
		<!--加载loadding-->

	</view>
</template>

<script>
	import tuiTabs from "@/components/tui-tabs/tui-tabs"
	import tuiButton from "@/components/extend/button/button"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiSticky from "@/components/sticky/sticky"
	import api from "../../api.js"
	export default {
		components: {
			tuiTabs,
			tuiButton,
			tuiLoadmore,
			tuiNomore,
			tuiListCell,
			tuiSticky
		},
		data() {
			return {
				tabs: [{
					name: "全部订单"
				}, {
					name: "交易订单"
				}, {
					name: "换购订单"
				}, {
					name: "游戏订单"
				}],
				orders: [],
				currentTab: 0,
				types: ['', 'Order::MoneyOrder', 'Order::CoinOrder', 'Order::GameOrder'],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0,
				page: 1,
			}
		},
		onLoad(){
			this.getData();
		},
		methods: {
			getColor: function(status){
				if(status){
					if(status == 'pay'){
						return 'red'
					}
					if(status == 'send'){
						return 'green'
					}
					if(status == 'receive'){
						return 'red'
					}
					if(status == 'receive'){
						return 'green'
					}
					if(status == 'after_sale'){
						return 'red'
					}
				}
				return 'red'
			},
			getData: function() {
				let that = this;
				this.page = 1;
				api.orders(this.types[this.currentTab], this.page).then(function(data) {
					console.log(data);
					that.orders = data
				}).catch(function() {
					
				})
			},
			change(e) {
				this.currentTab = e.index
				this.getData();
			},
			detail(id) {
				uni.navigateTo({
					url: '../order/show?id=' + id
				})
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200);
		},
		onReachBottom() {
			//只是测试效果，逻辑以实际数据为准
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.pullUpOn = true;
			let that = this;
			this.page = this.page + 1;
			let selectCategory = this.category1;
			api.orders(this.types[this.currentTab], this.page)
				.then(function(data) {
					that.orders = that.orders.concat(data);
					this.loadding = false;
					this.pullUpOn = false;
				})
				.catch(function() {});
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-order-list {
		margin-top: 80rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: 26rpx;
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
		color: #E41F19;
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
		font-weight: 500;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}
</style>
