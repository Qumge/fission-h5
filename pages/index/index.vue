<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-header" :style="{ width: width + 'px', height: height + 'px' }">
				<!-- <view class="tui-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<tui-icon name="arrowleft" color="#000"></tui-icon>
				</view> -->
				<view class="tui-searchbox tui-search-mr" :style="{ marginTop: inputTop + 'px' }">
					<!-- #ifdef APP-PLUS || MP -->
					<icon type="search" :size="13" color="#999"></icon>
					<!-- #endif -->
					<input
						confirm-type="search"
						placeholder="商品名搜索"
						@confirm="confirmSearch"
						placeholder-class="tui-input-plholder"
						class="tui-input"
						:value="search"
					/>
				</view>

				<view class="tui-back" @tap="screen" data-index="4" :style="{ marginTop: arrowTop + 'px' }">
					<tui-icon :name="isList ? 'manage' : 'listview'" :size="isList ? 25 : 23" :bold="isList ? false : true" color="#333"></tui-icon>
				</view>
			</view>
		</view>
		<!--header-->
		<!--screen-->
		<view class="tui-header-screen" :style="{ top: height + 'px' }">
			<view class="tui-screen-top">
				<view class="tui-top-item tui-icon-ml" :class="[[0, 5, 6].indexOf(tabIndex) >= 0 ? 'tui-active tui-bold' : '']" data-index="0" @tap="screen">
					<view>{{ selectedName }}</view>
					<tui-icon :name="selectH > 0 ? 'arrowup' : 'arrowdown'" :size="14" :color="tabIndex == 0 ? '#e41f19' : '#444'" tui-icon-class="tui-ml"></tui-icon>
				</view>
				<view class="tui-top-item" :class="[tabIndex == 1 ? 'tui-active tui-bold' : '']" @tap="screen" data-index="1">销量</view>
				<view class="tui-top-item" :class="[tabIndex == 2 ? 'tui-active tui-bold' : '']" @tap="screen" data-index="2">新品</view>
				<view class="tui-top-item tui-icon-ml" @tap="screen" data-index="3">
					<text>筛选</text>
					<tui-icon name="screen" :size="12" color="#333" tui-icon-class="tui-ml" :bold="true"></tui-icon>
				</view>

				<!--下拉选择列表--综合-->
				<view class="tui-dropdownlist" :class="[selectH > 0 ? 'tui-dropdownlist-show' : '']" :style="{ height: selectH + 'rpx' }">
					<view
						class="tui-dropdownlist-item tui-icon-middle"
						:class="[item.tabIndex == tabIndex ? 'tui-bold' : '']"
						v-for="(item, index) in dropdownList"
						:key="index"
						@tap.stop="dropdownItem"
						:data-index="item.tabIndex"
					>
						<text class="tui-ml tui-middle">{{ item.name }}</text>
						<tui-icon name="check" :size="16" color="#e41f19" :bold="true" v-if="item.tabIndex == tabIndex" tui-icon-class="tui-middle"></tui-icon>
					</view>
				</view>
				<view class="tui-dropdownlist-mask" :class="[selectH > 0 ? 'tui-mask-show' : '']" @tap.stop="hideDropdownList"></view>
				<!--下拉选择列表--综合-->
			</view>
		</view>
		<!--screen-->

		<!--list-->
		<view class="tui-product-list" :style="{ marginTop: px(dropScreenH + 18) }">
			<view class="tui-product-container">
				<block v-for="(product, index) in products" :key="index" v-if="(index + 1) % 2 != 0 || isList">
					<!-- <template is="productItem" data="{{item,index:index,isList:isList}}" /> -->
					<!--商品列表-->
					<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail" :data-id="product.id">
						<image :src="product.default_image" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{ product.name }}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{ product.price }}</text>
								</view>
								<view class="tui-pro-pay">{{ product.sale }}人购买</view>
							</view>
						</view>
					</view>
					<!--商品列表-->
				</block>
			</view>
			<view class="tui-product-container" v-if="!isList">
				<block v-for="(product, index) in products" :key="index" v-if="(index + 1) % 2 == 0">
					<!-- <template is="productItem" data="{{item,index:index}}" /> -->
					<!--商品列表-->
					<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail" :data-id="product.id">
						<image :src="product.default_image" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{ product.name }}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{ product.price }}</text>
								</view>
								<view class="tui-pro-pay">{{ product.sale }}人购买</view>
							</view>
						</view>
					</view>
					<!--商品列表-->
				</block>
			</view>
		</view>

		<!--list-->
		<!--左抽屉弹层 筛选 -->
		<tui-drawer mode="right" :visible="drawer" @close="closeDrawer">
			<view class="tui-drawer-box" :style="{ paddingTop: height + 'px' }">
				<scroll-view class="tui-drawer-scroll" scroll-y :style="{ height: drawerH + 'px' }">
					<view class="tui-drawer-title"><text class="tui-title-bold">大分类</text></view>
					<view class="tui-drawer-content tui-flex-attr">
						<block v-for="(category, index) in categories1" :key="index">
							<view class="tui-attr-item" :class="category1 == category.id ? 'tui-btmItem-active' : ''" :data-id="category.id" @tap="select1">
								<view class="tui-attr-ellipsis">{{ category.name }}</view>
							</view>
						</block>
					</view>

					<view class="tui-drawer-title"><text class="tui-title-bold">小分类</text></view>
					<view class="tui-drawer-content tui-flex-attr">
						<block v-for="(category, index) in categories2" :key="index">
							<view class="tui-attr-item" :class="category2 == category.id ? 'tui-btmItem-active' : ''" :data-id="category.id" @tap="select2">
								<view class="tui-attr-ellipsis">{{ category.name }}</view>
							</view>
						</block>
					</view>
					<view class="tui-safearea-bottom"></view>
				</scroll-view>
				<view class="tui-attr-btnbox">
					<view class="tui-attr-safearea">
						<view class="tui-drawer-btn tui-drawerbtn-black" hover-class="tui-white-hover" :hover-stay-time="150" @tap="reset">重置</view>
						<view class="tui-drawer-btn tui-drawerbtn-primary" hover-class="tui-red-hover" :hover-stay-time="150" @tap="closeDrawer">确定</view>
					</view>
				</view>
			</view>
		</tui-drawer>
		<!--左抽屉弹层 筛选-->

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#f7f7f7"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
import tuiIcon from '@/components/icon/icon';
import tuiDrawer from '@/components/drawer/drawer';
import tuiLoadmore from '@/components/loadmore/loadmore';
import tuiNomore from '@/components/nomore/nomore';
import tuiTopDropdown from '@/components/top-dropdown/top-dropdown';
import api from '../../api.js';
export default {
	components: {
		tuiIcon,
		tuiDrawer,
		tuiLoadmore,
		tuiNomore,
		tuiTopDropdown
	},
	data() {
		return {
			from: 'h5',
			searchKey: '', //搜索关键词
			width: 200, //header宽度
			height: 64, //header高度
			inputTop: 0, //搜索框距离顶部距离
			arrowTop: 0, //箭头距离顶部距离
			dropScreenH: 0, //下拉筛选框距顶部距离
			attrData: [],
			attrIndex: -1,
			dropScreenShow: false,
			scrollTop: 0,
			tabIndex: 0, //顶部筛选索引
			isList: false, //是否以列表展示  | 列表或大图
			drawer: false,
			drawerH: 0, //抽屉内部scrollview高度
			selectedName: '综合',
			selectH: 0,
			dropdownList: [
				{
					name: '综合',
					tabIndex: 0
				},
				{
					name: '价格升序',
					tabIndex: 5
				},
				{
					name: '价格降序',
					tabIndex: 6
				}
			],
			categories1: [],
			categories2: [],
			category1: '',
			category2: '',
			sorts: {
				0: '',
				1: 'sale desc',
				2: 'created_at desc',
				3: '',
				4: '',
				5: 'price asc',
				6: 'price desc'
			},
			search: '',
			products: [],
			pageIndex: 1,
			loadding: false,
			pullUpOn: true,
			page: 1
		};
	},
	onLoad: function(options) {
		let that = this;
		if (options.from) {
			this.from = options.from;
		}

		this.getData(options);
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
		uni.getSystemInfo({
			success: res => {
				this.width = obj.left || res.windowWidth;
				this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
				this.inputTop = obj.top ? obj.top + (obj.height - 30) / 2 : res.statusBarHeight + 7;
				this.arrowTop = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
				this.searchKey = options.searchKey || '';
				//略小，避免误差带来的影响
				this.dropScreenH = (this.height * 750) / res.windowWidth;
				this.drawerH = res.windowHeight - uni.upx2px(100) - this.height;
			}
		});
	},
	methods: {
		confirmSearch: function(e) {
			this.search = e.detail.value;
			this.getData(e);
		},
		getData: function(options) {
			let that = this;
			this.page = 1;
			this.pullUpOn = true;
			api.categories()
				.then(function(data) {
					that.categories1 = data;
				})
				.catch(function() {});
			let selectCategory = this.category1;
			if (this.category2) {
				selectCategory = this.category2;
			}
			api.products(selectCategory, this.search, this.sorts[this.tabIndex], this.page, '')
				.then(function(data) {
					that.products = data;
				})
				.catch(function() {});
		},
		select1: function(e) {
			this.category2 = null;
			this.category1 = e.currentTarget.dataset.id;
			let category = this.categories1.find(category => category.id == this.category1);
			if (category) {
				this.categories2 = category.children;
			}
		},
		select2: function(e) {
			this.category2 = e.currentTarget.dataset.id;
		},
		px(num) {
			return uni.upx2px(num) + 'px';
		},
		btnDropChange: function(e) {
			let index = e.currentTarget.dataset.index;
			let arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
			if (arr.length === 0) {
				this.$set(this.attrArr[index], 'isActive', !this.attrArr[index].isActive);
			} else {
				this.attrData = arr;
				this.attrIndex = index;
				this.dropScreenShow = true;
				this.$set(this.attrArr[index], 'isActive', false);
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0;
				});
			}
		},
		btnSelected: function(e) {
			let index = e.currentTarget.dataset.index;
			this.$set(this.attrData[index], 'selected', !this.attrData[index].selected);
		},
		reset() {
			this.category1 = '';
			this.category2 = '';
			this.categories2 = [];
		},
		btnCloseDrop() {
			this.scrollTop = 1;
			this.$nextTick(() => {
				this.scrollTop = 0;
			});
			this.dropScreenShow = false;
			this.attrIndex = -1;
		},
		btnSure: function() {
			let index = this.attrIndex;
			let arr = this.attrData;
			let active = false;
			let attrName = '';
			//这里只是为了展示选中效果,并非实际场景
			for (let item of arr) {
				if (item.selected) {
					active = true;
					attrName += attrName ? ';' + item.name : item.name;
				}
			}
			let obj = this.attrArr[index];
			this.btnCloseDrop();
			this.$set(obj, 'isActive', active);
			this.$set(obj, 'selectedName', attrName);
		},
		showDropdownList: function() {
			this.selectH = 246;
			this.tabIndex = 0;
		},
		hideDropdownList: function() {
			this.selectH = 0;
		},
		dropdownItem: function(e) {
			let index = e.currentTarget.dataset.index;
			console.log(index);
			let selectDropDown = this.dropdownList.find(element => element.tabIndex == index);
			this.selectedName = selectDropDown.name;
			this.tabIndex = selectDropDown.tabIndex;
			this.selectH = 0;
			this.getData(e);
		},
		screen: function(e) {
			let index = e.currentTarget.dataset.index;
			if (index == 0) {
				this.showDropdownList();
			} else if (index == 1) {
				this.tabIndex = 1;
				this.getData(e);
			} else if (index == 2) {
				this.tabIndex = 2;
				this.getData(e);
			} else if (index == 3) {
				this.drawer = true;
			} else if (index == 4) {
				this.isList = !this.isList;
			}
		},
		closeDrawer: function(e) {
			this.drawer = false;
			this.getData(e);
		},
		back: function() {
			if (this.drawer) {
				this.closeDrawer();
			} else {
				window.parent.postMessage(
					{
						event: 'backEvent',
						params: {}
					},
					'*'
				);
			}
		},
		// search: function() {
		// 	uni.navigateTo({
		// 		url: '../news-search/news-search'
		// 	})
		// },
		detail: function(e) {
			console.log(e);
			uni.navigateTo({
				url: '../product/show?id=' + e.currentTarget.dataset.id
			});
		}
	},
	onPullDownRefresh: function() {
		// let loadData = JSON.parse(JSON.stringify(this.productList));
		// loadData = loadData.splice(0, 10);
		// this.productList = loadData;
		// this.pageIndex = 1;
		// this.pullUpOn = true;
		// this.loadding = false;
		// uni.stopPullDownRefresh();
	},
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true;
		this.pullUpOn = true;

		let that = this;
		this.page = this.page + 1;
		let selectCategory = this.category1;
		if (this.category2) {
			selectCategory = this.category2;
		}
		api.products(selectCategory, this.search, this.sorts[this.tabIndex], this.page, '')
			.then(function(data) {
				if(data == []){
					that.pullUpOn = true;
				}else{
					that.products = that.products.concat(data);
					that.loadding = false;
					that.pullUpOn = false;
				}
				
			})
			.catch(function() {});
	}
};
</script>

<style>
page {
	background: #f7f7f7;
}

.container {
	padding-bottom: env(safe-area-inset-bottom);
}

/* 隐藏scroll-view滚动条*/

::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}

.tui-header-box {
	width: 100%;
	background: #fff;
	position: fixed;
	z-index: 99998;
	left: 0;
	top: 0;
}

.tui-header {
	display: flex;
	align-items: flex-start;
}

.tui-back {
	margin-left: 8rpx;
	height: 32px !important;
	width: 32px !important;
	line-height: 32px;
}

.tui-searchbox {
	width: 100%;
	height: 30px;
	margin-right: 5rpx;
	margin-left: 15rpx;
	border-radius: 15px;
	font-size: 12px;
	background: #f7f7f7;
	padding: 3px 10px;
	box-sizing: border-box;
	color: #999;
	display: flex;
	align-items: center;
	overflow: hidden;
}

/* #ifdef MP-WEIXIN */
.tui-search-mr {
	margin-right: 20rpx !important;
}

/* #endif */
/* #ifdef MP-BAIDU */
.tui-search-mr {
	margin-right: 20rpx !important;
}

/* #endif */

.tui-search-text {
	padding-left: 16rpx;
}

.tui-search-key {
	max-width: 80%;
	height: 100%;
	padding: 0 16rpx;
	margin-left: 12rpx;
	display: flex;
	align-items: center;
	border-radius: 15px;
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
}

.tui-key-text {
	box-sizing: border-box;
	padding-right: 12rpx;
	font-size: 12px;
	line-height: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/*screen*/

.tui-header-screen {
	width: 100%;
	box-sizing: border-box;
	background: #fff;
	position: fixed;
	z-index: 1000;
}

.tui-screen-top,
.tui-screen-bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
	color: #333;
}

.tui-screen-top {
	height: 88rpx;
	position: relative;
	background: #fff;
}

.tui-top-item {
	height: 28rpx;
	line-height: 28rpx;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-topitem-active {
	color: #e41f19;
}

.tui-screen-bottom {
	height: 100rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	font-size: 24rpx;
	align-items: center;
	overflow: hidden;
}

.tui-bottom-text {
	line-height: 26rpx;
	max-width: 82%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.tui-bottom-item {
	flex: 1;
	width: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 12rpx;
	box-sizing: border-box;
	background: #f7f7f7;
	margin-right: 20rpx;
	white-space: nowrap;
	height: 60rpx;
	border-radius: 40rpx;
}

.tui-bottom-item:last-child {
	margin-right: 0;
}

.tui-btmItem-active {
	background: #fcedea !important;
	color: #e41f19;
	font-weight: bold;
	position: relative;
}

.tui-btmItem-active::after {
	content: '';
	position: absolute;
	border: 1rpx solid #e41f19;
	width: 100%;
	height: 100%;
	border-radius: 40rpx;
	left: 0;
	top: 0;
}

.tui-btmItem-tap {
	position: relative;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.tui-btmItem-tap::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 22rpx;
	background: #f7f7f7;
	left: 0;
	top: 58rpx;
}

.tui-bold {
	font-weight: bold;
}

.tui-active {
	color: #e41f19;
}

.tui-icon-ml .tui-icon-class {
	margin-left: 6rpx;
}

.tui-ml {
	margin-left: 6rpx;
}

.tui-seizeaseat-20 {
	height: 20rpx;
}

.tui-seizeaseat-30 {
	height: 30rpx;
}

.tui-icon-middle .tui-icon-class {
	vertical-align: middle;
}

.tui-middle {
	vertical-align: middle;
}

/*screen*/

/*顶部下拉选择 属性*/

.tui-scroll-box {
	width: 100%;
	height: 480rpx;
	box-sizing: border-box;
	position: relative;
	z-index: 99;
	color: #fff;
	font-size: 30rpx;
	word-break: break-all;
}

.tui-drop-item {
	color: #333;
	height: 80rpx;
	font-size: 28rpx;
	padding: 20rpx 40rpx 20rpx 40rpx;
	box-sizing: border-box;
	display: inline-block;
	width: 50%;
}

.tui-drop-btnbox {
	width: 100%;
	height: 100rpx;
	position: absolute;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	display: flex;
}

.tui-drop-btn {
	width: 50%;
	font-size: 32rpx;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
	border: 0;
}

.tui-btn-red {
	background: #e41f19;
	color: #fff;
}

.tui-red-hover {
	background: #c51a15 !important;
	color: #e5e5e5;
}

.tui-btn-white {
	background: #fff;
	color: #333;
}

.tui-white-hover {
	background: #e5e5e5;
	color: #2e2e2e;
}

/*顶部下拉选择 属性*/

/*顶部下拉选择 综合*/

.tui-dropdownlist {
	width: 100%;
	position: absolute;
	background: #fff;
	border-bottom-left-radius: 24rpx;
	border-bottom-right-radius: 24rpx;
	overflow: hidden;
	box-sizing: border-box;
	padding-top: 10rpx;
	padding-bottom: 26rpx;
	left: 0;
	top: 88rpx;
	visibility: hidden;
	transition: all 0.2s ease-in-out;
	z-index: 999;
}

.tui-dropdownlist-show {
	visibility: visible;
}

.tui-dropdownlist-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: -1;
	transition: all 0.2s ease-in-out;
	opacity: 0;
	visibility: hidden;
}

.tui-mask-show {
	opacity: 1;
	visibility: visible;
}

.tui-dropdownlist-item {
	color: #333;
	height: 70rpx;
	font-size: 28rpx;
	padding: 0 40rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

/*顶部下拉选择 综合*/

.tui-drawer-box {
	width: 686rpx;
	font-size: 24rpx;
	overflow: hidden;
	position: relative;
	padding-bottom: 100rpx;
}

.tui-drawer-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	box-sizing: border-box;
	height: 80rpx;
}

.tui-title-bold {
	font-size: 26rpx;
	font-weight: bold;
	flex-shrink: 0;
}

.tui-location {
	margin-right: 6rpx;
}

.tui-attr-right {
	width: 70%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: right;
}

.tui-all-box {
	width: 90%;
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.tui-drawer-content {
	padding: 16rpx 30rpx 30rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
}

.tui-input {
	border: 0;
	height: 64rpx;
	border-radius: 32rpx;
	width: 100%;
	background: #f7f7f7;
	text-align: center;
	font-size: 24rpx;
	color: #333;
}

.tui-phcolor {
	text-align: center;
	color: #b2b2b2;
	font-size: 24rpx;
}

.tui-flex-attr {
	flex-wrap: wrap;
	justify-content: flex-start;
}

.tui-attr-item {
	width: 30%;
	height: 64rpx;
	background: #f7f7f7;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 4rpx;
	box-sizing: border-box;
	border-radius: 32rpx;
	margin-right: 5%;
	margin-bottom: 5%;
}

.tui-attr-ellipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 96%;
	text-align: center;
}

.tui-attr-item:nth-of-type(3n) {
	margin-right: 0%;
}

.tui-attr-btnbox {
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	padding: 0 30rpx;
	background: #fff;
}

.tui-attr-safearea {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-attr-btnbox::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	border-top: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-drawer-btn {
	width: 47%;
	text-align: center;
	height: 60rpx;
	border-radius: 30rpx;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}

.tui-drawerbtn-black {
	border: 1rpx solid #555;
}

.tui-drawerbtn-primary {
	background: #e41f19;
	color: #fff;
}

/* 商品列表*/

.tui-product-list {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
}

.tui-product-container {
	flex: 1;
	margin-right: 10rpx;
	background-color: #f7f7f7;
}

.tui-product-container:last-child {
	margin-right: 0;
}

.tui-pro-item {
	width: 100%;
	margin-bottom: 20rpx;
	background: #fff;
	box-sizing: border-box;
	border-radius: 12rpx;
	overflow: hidden;
	transition: all 0.15s ease-in-out;
}

.tui-flex-list {
	display: flex;
	margin-bottom: 1rpx !important;
}

.tui-pro-img {
	width: 100%;
	display: block;
}

.tui-proimg-list {
	width: 260rpx;
	height: 260rpx !important;
	flex-shrink: 0;
	border-radius: 12rpx;
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

/* 商品列表*/
</style>
