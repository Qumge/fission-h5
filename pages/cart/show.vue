<template>
	<view class="container">
		<!-- #ifdef MP || H5-->
		<view class="tui-edit-goods">
			<view>购物车共<text class="tui-goods-num">{{productCart.length}}</text>件商品</view>
			<!-- <view>
				<tui-button type="gray" :plain="true" shape="circle" width="160rpx" height="60rpx" :size="24" @click="editGoods">{{isEdit?"完成":"编辑商品"}}</tui-button>
			</view> -->
		</view>
		<!-- #endif -->
		<!-- <form @submit="formSubmit" @reset="formReset"> -->
		<view class="tui-cart-cell  tui-mtop" v-for="(item,index) in productCart" :key="index">
			<checkbox-group @tap="CheckboxChange">
				<!-- <view class="tui-activity" v-if="index%2==0">
					<view class="tui-bold">满3件享受优惠</view>
					<view class="tui-buy">去凑单<tui-icon name="arrowright" :size="18" color="#333"></tui-icon>
					</view>
				</view> -->
				<tui-swipe-action :actions="actions" @click="handlerButton" :params="item" >
				<!-- <tui-swipe-action > -->
					<template v-slot:content>
						<view class="tui-goods-item">
							<label class="tui-checkbox">
								<checkbox :data-id="item.id" :checked="checkedIds.includes(item.id)" color="#fff"></checkbox>
							</label>
							<image :src="item.product.default_image" class="tui-goods-img" />
							<view class="tui-goods-info">
								<view class="tui-goods-title">
									{{item.product.name}}
								</view>
								<view class="tui-goods-model">
									<view class="tui-model-text">{{item.spec_attr_names}}</view>
									<!-- <tui-icon name="arrowdown" :size="16" color="#333"></tui-icon> -->
								</view>
								<view class="tui-price-box">
									<view class="tui-goods-price">￥{{item.product.price*norms.find(function(norm){return norm.id == item.id}).number}}</view>
									<view class="tui-scale"> 
										<tui-numberbox :value="norms.find(function(norm){return norm.id == item.id}).number" :height="40" :width="74" :min="1" :index="item.id" @change="changeNum"></tui-numberbox>
									</view>
								</view>
							</view>
						</view>
					</template>
				</tui-swipe-action>
				<!-- <view class="tui-sub-info" v-if="index%2==0">赠品：柔色尽情丝柔口红唇膏1支柔色尽情丝柔口红唇膏1支</view> -->
			</checkbox-group>
		</view>


		<!--tabbar-->
		<view class="tui-tabbar">
			<view class="tui-checkAll">
				<checkbox-group>
					<label class="tui-checkbox" @tap="_checked">
						<checkbox color="#fff" :checked="checkIds.filter(v => checkedIds.includes(v)).length == checkIds.length"></checkbox>
						<text class="tui-checkbox-pl">全选</text>
					</label>
				</checkbox-group>
				<view class="tui-total-price" v-if="!isEdit">合计:<text class="tui-bold">￥{{totalPrice}}</text> </view>
			</view>
			<view>
				<!-- <button form-type="submit">去结算</button> -->
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" v-if="!isEdit"  @click="btnPay">去结算</tui-button>
				<!-- <tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" :plain="true" v-else>删除</tui-button> -->
			</view>
		</view>
		<!-- </form> -->
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
	</view>
</template>

<script>
	import tuiSwipeAction from "@/components/swipe-action/swipe-action"
	import tuiButton from "@/components/extend/button/button"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiIcon from "@/components/icon/icon"
	import tuiDivider from "@/components/divider/divider"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import api from "../../api.js"
	export default {
		components: {
			tuiSwipeAction,
			tuiButton,
			tuiNumberbox,
			tuiIcon,
			tuiDivider,
			tuiLoadmore
		},
		data() {
			return {
				normsnumber:1,
				cartNumber:1,
				productCart:[],
				TotalPrice:null,
				checkeds:false,
				checked:false,
				checkIds: [],
				checkedIds: [],
				norms: [],
				totalPrice: 0,
				actions: [
					{
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				actions2: [{
						name: '看相似',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#FF7035'
					},
					{
						name: '删除',
						color: '#fff',
						fontsize: 28,
						width: 64,
						background: '#F82400'
					}
				],
				isEdit: false,
				productList: [
				],
				page: 1,
				loadding: false,
				pullUpOn: true
			}
		},
		onLoad() {
			let that = this;
			//查
			var norms = uni.getStorageSync('cart')
			console.log(norms);
			if(norms){
				this.norms = norms;
				this.checkIds = this.getCheckIds()
				let ids = norms.map(function(norm){
					return norm.id
				})
				api.norms(JSON.stringify(ids), this.page).then(function(data) {
					console.log(data)
					that.productCart = data
				});
			}
			
			
		},
		methods: {
			getCheckIds: function(){
				var norms = uni.getStorageSync('cart')
				return norms.map(function(norm){ return norm.id})
			},
			computePrice: function(e){
				let that = this;
				let selectNorms = this.selectNorms();
				console.log(selectNorms)
				if(selectNorms.length == 0){
					this.totalPrice = 0
				}else{
					let total = 0
					selectNorms.forEach(function(val, idx, arr) {
					        total += val.number * that.getPrice(val.id);
					    }, 0);
					console.log(total);
					this.totalPrice = total;
				}
				
			},
			getPrice: function(id){
				let norm = this.productCart.find(norm => (norm.id === id))
				return norm.price
			},
			selectNorms: function(e){
				return this.norms.filter(norm => (this.checkedIds.findIndex(id => (id == norm.id)) >= 0 ))
			},
			CheckboxChange:function(e){
				console.log(e);
				let that = this;
				let checkId = +e.target.dataset.id
				console.log(checkId);
				let index = this.checkedIds.findIndex(id => (id == checkId))
				console.log(index);
				if(index >= 0){
					this.checkedIds.splice(index, 1);
				}else{
					this.checkedIds.push(checkId);
				}
				console.log(this.checkedIds);
				console.log(this.checkIds);
				this.computePrice()
				var norms = uni.getStorageSync('cart')
			},
			_checked:function(e){
				console.log(e);
				if(this.checkIds.filter(v => this.checkedIds.includes(v)).length == this.checkIds.length){
					this.checkedIds = []
				}else{
					this.checkedIds = this.getCheckIds();
				}
				this.computePrice();
			},
			changeNum: function(e) {
				this.norms.find(function(norm){
					console.log(norm.id)
					return norm.id == e.index
				}).number = e.value
					
				if(e.index!="" && e.value!=""){
					api.cart(e.index,e.value, true)
				}
				else{
					uni.showToast({
						icon:'none',
						title:'不能为空',
					})
					console.log("不能为空")
				}
			},
			handlerButton: function(e) {
				api.cart(e.item.id, 0, true);
				var norms = uni.getStorageSync('cart')
				let index = this.productCart.findIndex(function(norm){return norm.id== e.item.id})
				console.log(index);
				if(index >= 0){
					this.productCart.splice(index, 1);
				}
			},
			editGoods: function() {
				this.isEdit = !this.isEdit;
			},
			
			detail: function() {
				uni.navigateTo({
					url: '../../productDetail/productDetail'
				})
			},
			productNorms: function(){
				let selectNorms = this.selectNorms();
				var productArr = []
				let that = this
				selectNorms.forEach(function(val, idx, arr) {
				        let normProduct  = that.productCart.find(norm => (norm.id == val.id))
						let norm = that.norms.find(norm => (norm.id == val.id))
						console.log(norm);
						productArr.push({id: normProduct.product.id, norm: {id: norm.id, number: norm.number}})
				    }, 0);
					console.log(productArr);
				return productArr
			},
			btnPay(){
				let that = this
				api.applyOrder(JSON.stringify(this.productNorms())).then(function(orders){
					if(orders && orders[0].id){
						console.log(orders)
						that.selectNorms().forEach(function(norm){
							api.cart(norm.id, 0, true)
						})
						var ids = ''
						orders.forEach(function(order){
							ids += order.id
							ids += ','
						})
						console.log(ids);
						uni.navigateTo({
							url: '../order/new?ids=' + ids
						})
					}
				}).catch(function(e){
					console.log(e)
				})
				
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200)
		},
		// onPullDownRefresh: function() {
		// 	let loadData = JSON.parse(JSON.stringify(this.productList));
		// 	loadData = loadData.splice(0, 10)
		// 	this.productList = loadData;
		// 	this.pageIndex = 1;
		// 	this.pullUpOn = true;
		// 	this.loadding = false
		// 	uni.stopPullDownRefresh()
		// },
		// onReachBottom: function() {
		// 	if (!this.pullUpOn) return;
		// 	this.loadding = true;
		// 	if (this.pageIndex == 4) {
		// 		this.loadding = false;
		// 		this.pullUpOn = false
		// 	} else {
		// 		let loadData = JSON.parse(JSON.stringify(this.productList));
		// 		loadData = loadData.splice(0, 10)
		// 		if (this.pageIndex == 1) {
		// 			loadData = loadData.reverse();
		// 		}
		// 		this.productList = this.productList.concat(loadData);
		// 		this.pageIndex = this.pageIndex + 1;
		// 		this.loadding = false
		// 	}
		// },
		onNavigationBarButtonTap(e) {
			this.isEdit = !this.isEdit;
			let text = this.isEdit ? "完成" : "编辑";
			// #ifdef APP-PLUS
			let webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewButtonStyle(0, {
				text: text
			});
			// #endif
		}
	}
</script>

<style scoped>
	.ui-swipeout-item{transform:translate(0px, 0px);}
</style>
<style>
	
	.container {
		padding-bottom: 120rpx;
	}

	.tui-mtop {
		margin-top: 24rpx;
	}

	.tui-edit-goods {
		width: 100%;
		border-radius: 12rpx;
		overflow: hidden;
		padding: 24rpx 30rpx 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333;
		font-size: 24rpx;
	}

	.tui-goods-num {
		font-weight: bold;
		color: #e41f19;
	}

	.tui-cart-cell {
		width: 100%;
		border-radius: 12rpx;
		background: #FFFFFF;
		padding: 40rpx 0;
		overflow: hidden;
	}

	.tui-goods-item {
		display: flex;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.tui-checkbox {
		/* width: 40rpx; */
		padding-right: 30rpx;
		display: flex;
		align-items: center;
	}

	/* #ifdef APP-PLUS || MP */
	.tui-checkbox .wx-checkbox-input {
		width: 36rpx;
		height: 36rpx;
		border-radius: 50%;
		margin: 0;
	}

	.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #F82400;
		width: 40rpx;
		height: 40rpx;
		border: none;
	}
	/* #endif */
	/* #ifdef H5 */
	>>>.tui-checkbox .uni-checkbox-input {
		width: 36rpx;
		height: 36rpx;
		border-radius: 50% !important;
		margin: 0;
	}

	>>>.tui-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #F82400;
		width: 40rpx;
		height: 40rpx;
		border: none;
	}
	/* #endif */
	.tui-goods-img {
		width: 180rpx;
		height: 180rpx !important;
		border-radius: 12rpx;
		flex-shrink: 0;
		display: block;
	}

	.tui-goods-info {
		width: 100%;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-goods-title {
		white-space: normal;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #333;
	}

	.tui-goods-model {
		max-width: 100%;
		color: #333;
		background: #F5F5F5;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16rpx;
		box-sizing: border-box;
	}

	.tui-model-text {
		max-width: 100%;
		transform: scale(0.9);
		transform-origin: 0 center;
		font-size: 24rpx;
		line-height: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-price-box {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.tui-goods-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-scale {
		transform: scale(0.8);
		transform-origin: 100% 100%;
	}

	.tui-activity {
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx 20rpx 100rpx;
		box-sizing: border-box;
	}

	.tui-buy {
		display: flex;
		align-items: center
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-sub-info {
		max-width: 532rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		padding: 20rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;
		color: #333;
		transform: scale(0.8);
		transform-origin: 100% center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: auto
	}

	.tui-invalid-text {
		width: 66rpx;
		margin-right: 4rpx;
		text-align: center;
		font-size: 24rpx;
		color: #fff;
		background: rgba(0, 0, 0, .3);
		transform: scale(0.8);
		transform-origin: center center;
		border-radius: 4rpx;
		flex-shrink: 0;
	}

	.tui-invalid-pr {
		padding-right: 0 !important;
	}

	.tui-gray {
		color: #B2B2B2 !important;
	}

	.tui-goods-invalid {
		color: #555;
		font-size: 24rpx;
	}

	.tui-flex-center {
		align-items: center !important;
	}

	.tui-invalid-ptop {
		padding-top: 40rpx;
	}

	.tui-tabbar {
		width: 100%;
		height: 100rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		z-index: 99999;
	}

	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-checkAll {
		display: flex;
		align-items: center;
	}

	.tui-checkbox-pl {
		padding-left: 12rpx;
	}

	.tui-total-price {
		font-size: 30rpx !important;
	}

	/*猜你喜欢*/
	.tui-youlike {
		padding-left: 12rpx
	}

	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.tui-product-container {
		flex: 1;
		margin-right: 2%;
	}

	.tui-product-container:last-child {
		margin-right: 0;
	}

	.tui-pro-item {
		width: 100%;
		margin-bottom: 4%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12rpx;
		overflow: hidden;
	}

	.tui-pro-img {
		width: 100%;
		display: block;
	}

	.tui-pro-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.tui-pro-tit {
		color: #2e2e2e;
		font-size: 26rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-pro-price {
		padding-top: 18rpx;
	}

	.tui-sale-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-factory-price {
		font-size: 24rpx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
	}

	.tui-pro-pay {
		padding-top: 10rpx;
		font-size: 24rpx;
		color: #656565;
	}
</style>
