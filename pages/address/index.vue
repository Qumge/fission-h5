<template>
	<view class="tui-safe-area">
		<view class="tui-address">
			<block v-for="(address,index) in addresses" :key="index">
				<tui-list-cell padding="0">
					<view class="tui-address-flex">
						<view class="tui-address-left" @tap="selectAddress(address.id)" >
							<view class="tui-address-main">
								<view class="tui-address-name tui-ellipsis">{{address.name}}</view>
								<view class="tui-address-tel">{{address.phone}}</view>
							</view>
							<view class="tui-address-detail">
								<view class="tui-address-label" v-if="address.tag==='default'">默认</view>
								<text>{{address.content}}</text>
							</view>
						</view>
						<view class="tui-address-imgbox" @tap="editAddress(address.id)" :data-id="address.id">
							<image class="tui-address-img" src="/static/images/mall/my/icon_addr_edit.png" />
						</view>
					</view>
				</tui-list-cell>
			</block>
		</view>
		<!-- 新增地址 -->
		<view class="tui-address-new">
			<tui-button type="danger" height="88rpx" @click="newAddress">+ 新增收货地址</tui-button>
		</view>
	</view>
</template>

<script>
	import tuiButton from "@/components/extend/button/button"
	import tuiListCell from "@/components/list-cell/list-cell"
	import api from "../../api.js"
	export default {
		components: {
			tuiButton,
			tuiListCell
		},
		data() {
			return {
				addresses: []
			}
		},
		onLoad: function(options) {
			let that = this
			api.addresses().then(function(data){
				console.log(data)
				that.addresses = data
			}).catch(function(e){
				
			})
		},
		onShow: function() {},
		methods: {
			newAddress() {
				console.log(1);
				uni.navigateTo({
					url: '../address/new'
				})
			},
			editAddress(id){
				uni.navigateTo({
					url: '../address/edit?id=' + id
				})
				console.log(id)
			},
			selectAddress(id){
				if(id){
					uni.setStorageSync('addressId', id)
					uni.navigateBack({
						
					})
				}
			}
		}
	}
</script>

<style>
	.tui-address {
		width: 100%;
		padding-top: 20rpx;
		padding-bottom: 160rpx;
	}
	.tui-address-flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tui-address-main {
		width: 600rpx;
		height: 70rpx;
		display: flex;
		font-size: 30rpx;
		line-height: 86rpx;
		padding-left: 30rpx;
	}

	.tui-address-name {
		width: 120rpx;
		height: 60rpx;
	}

	.tui-address-tel {
		margin-left: 10rpx;
	}

	.tui-address-detail {
		font-size: 24rpx;
		word-break: break-all;
		padding-bottom: 25rpx;
		padding-left: 25rpx;
		padding-right: 120rpx;
	}

	.tui-address-label {
		padding: 5rpx 8rpx;
		flex-shrink: 0;
		background: #e41f19;
		border-radius: 6rpx;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		line-height: 25rpx;
		transform: scale(0.8);
		transform-origin: center center;
		margin-right: 6rpx;
	}

	.tui-address-imgbox {
		width: 80rpx;
		height: 100rpx;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 10rpx;
	}

	.tui-address-img {
		width: 36rpx;
		height: 36rpx;
	}

	.tui-address-new {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		padding: 20rpx 25rpx 30rpx;
		box-sizing: border-box;
		background: #fafafa;
	}

	.tui-safe-area {
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
