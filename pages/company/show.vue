<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-header" :style="{ width: width + 'px', height: height + 'px' }">
				<view class="tui-back" :style="{ marginTop: arrowTop + 'px' }" @tap="back"><tui-icon name="arrowleft" color="#000"></tui-icon></view>
				<view class="tui-searchbox tui-search-mr" :style="{ marginTop: inputTop + 'px' }">
					<!-- #ifdef APP-PLUS || MP -->
					<icon type="search" :size="13" color="#999"></icon>
					<!-- #endif -->
					<input
						confirm-type="search"
						placeholder="商品名搜索"
						:focus="true"
						@confirm="confirmSearch"
						auto-focus
						placeholder-class="tui-input-plholder"
						class="tui-input"
						:value="search"
					/>
				</view>
			</view>
		</view>
		<!--header-->

		<!-- ComPany -->
		<view class="w69">
			<view class="FlexComPany">
				<view class="ComPany">
					<view class="ComPanyImg">
						<image v-if="!company.image" src="/static/images/basic/badge.png" mode=""></image>
						<image v-if="company.image"  :src="company.image.image_path" mode=""></image>
					</view>
					<view>
						<view class="ComPanyName">
							{{company.name}}
						</view>
						<!-- <view class="ComPanyTi">
							在售商品100件
						</view> -->
					</view>
				</view>
				<view v-if="company.follow == 0" class="ComPanyGZ" @tap="follow">
					+关注
				</view>
				<view v-if="company.follow == 1" class="ComPanyYGZ" @tap="cancelfollow">
					已关注
				</view>
			</view>
		</view>

		<!-- banner -->
		<swiper class="swiper">
			<swiper-item v-for="item in companyBanner">
				<image :data-id='item.task.image.id' @tap="_companyBanner" :src="item.task.image.image_path"></image>
			</swiper-item>
			<!-- <swiper-item><image  v-if="item.task.image==null" src="/static/images/mall/product/2.jpg"></image></swiper-item> -->
		</swiper>

		<!-- tab -->
		<view class="w69">
			<view class="TabFlex">
				<template v-for="item in Tab">
					<view class="Tab" :class="{ Tab_: Id == item.id }" :data-id="item.id" @click="_Tab">
					{{ item.name }}
						<view  :class="{ Tab_g: Id == item.id }"></view>
					</view>
				</template>
			</view>
		</view>

		<!--list-->
		
		<!-- <view class="tui-product-list" :style="{marginTop:px(dropScreenH+18)}"> -->
		<view v-show="Id == 1">
			<view style="width: 690rpx;margin: 0 auto;" class="tui-product-list">
				<view class="tui-product-container">
					<block v-for="(task, index) in tasks" :key="index" v-if="(index + 1) % 2 != 0 || isList">
						<!-- <template is="productItem" data="{{item,index:index,isList:isList}}" /> -->
						<!--任务列表-->
						<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail">
							<image v-if="!task.image" src="../../static/images/basic/badge.png" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
							<image v-else :src="task.image.image_path" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit">{{task.name}}</view>
								<view>
									<view class="tui-pro-price">
										<!-- <text class="tui-sale-price">￥{{ item.sale }}</text> -->
										<!-- <text class="tui-factory-price">￥{{ item.factory }}</text> -->
									</view>
									<!-- <view class="tui-pro-pay">{{item.payNum}}人付款</view> -->
								</view>
							</view>
						</view>
						<!--任务列表-->
					</block>
				</view>
			</view>
		</view>
		<!--list-->
		<view v-show="Id == 2">
			<view style="width: 690rpx;margin: 0 auto;" class="tui-product-list">
				<view class="tui-product-container">
					<block v-for="(product, index) in products" :key="index" v-if="(index + 1) % 2 != 0 || isList">
						<!-- <template is="productItem" data="{{item,index:index,isList:isList}}" /> -->
						<!--商品列表-->
						<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail">
							<image v-if="!product.default_image" src="../../static/images/basic/badge.png" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
							<image v-else :src="product.default_image" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit">{{ product.name }}</view>
								<view>
									<view class="tui-pro-price">
										<text class="tui-sale-price">￥{{ product.price }}</text>
										<text class="tui-factory-price">￥{{ product.price }}</text>
									</view>
									<view class="tui-pro-pay">{{ product.stock }}人付款</view>
								</view>
							</view>
						</view>
						<!--商品列表-->
					</block>
				</view>
			</view>
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn && isList" bgcolor="#f7f7f7"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import api from "../../api.js"
import tuiIcon from '@/components/icon/icon';
import tuiDrawer from '@/components/drawer/drawer';
import tuiLoadmore from '@/components/loadmore/loadmore';
import tuiNomore from '@/components/nomore/nomore';
import tuiTopDropdown from '@/components/top-dropdown/top-dropdown';
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
			searchKey: '', //搜索关键词
			width: 200, //header宽度
			height: 64, //header高度
			inputTop: 0, //搜索框距离顶部距离
			arrowTop: 0, //箭头距离顶部距离
			dropScreenH: 0, //下拉筛选框距顶部距离
			Id: 1, //切换tab
			Tab: [
				//切换tab
				{
					id: 1,
					name: '任务'
				},
				{
					id: 2,
					name: '商品'
				}
			],
			attrData: [],
			attrIndex: -1,
			dropScreenShow: false,
			scrollTop: 0,
			tabIndex: 0, //顶部筛选索引
			isList: true, //是否以列表展示  | 列表或大图
			drawer: false,
			drawerH: 0, //抽屉内部scrollview高度
			selectedName: '综合',
			selectH: 0,
			taskPageIndex: 1,
			productPageIndex: 1,
			loadding: false,
			pullUpOn: true,
			companyBanner:{},
			products: [],
			tasks:[],
			company_id: '',
			company: {},
			search: ''
		};
	},
	onLoad: function(options) {
		let that = this
		this.company_id = options.id
		api.company(this.company_id).then(function(data){
			console.log(data);
			if(data.id){
				that.company = data
			}
		}).catch(function(e){
			console.log(e)
		})
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
				this.dropScreenH = (this.height * 750) / res.windowWidth + 186;
				this.drawerH = res.windowHeight - uni.upx2px(100) - this.height;
			}
		});
		
		api.companyBanners(options.id).then(function(data){
			// console.log(data)
			that.companyBanner = data
		}).catch(function(){ })
		
		this.getTasks();
		this.getProducts();	
	},
	methods: {
		getTasks: function(){
			let that = this
			api.tasks(this.taskPageIndex, this.company_id, this.search).then(function(data){
				if(data==''){
					console.log("没了")
				}else{
					console.log(data)
					console.log(that.tasks)
					console.log(11111)
					that.tasks = that.tasks.concat(data);
					console.log(that.tasks)
				}
				that.loadding = false;
				that.pullUpOn = false;
			}).catch(function(){
				
			})
		},
		getProducts: function(){
			let that = this
			api.products('', this.search, '',this.productPageIndex, this.company_id).then(function(data){
				if(data==''){
					console.log("没了")
				}else{
					console.log(data)
					console.log(that.products)
					console.log(11111)
					that.products = that.products.concat(data);
					console.log(that.products)
				}
				that.loadding = false;
				that.pullUpOn = false;
			}).catch(function(){
				
			})
		},
		_companyBanner:function(e){
			let id = e.currentTarget.dataset.id;
			console.log(e.currentTarget.dataset.id)
			uni.navigateTo({
				url:'../task/index?id='+id
			})
		},
		//_Tab
		_Tab: function(e) {
			this.Id = e.currentTarget.dataset.id;
			// console.log(e.currentTarget.dataset.id)
			// console.log(this.Id)
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
			let arr = this.attrData;
			for (let item of arr) {
				item.selected = false;
			}
			this.attrData = arr;
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
			let arr = this.dropdownList;
			for (let i = 0; i < arr.length; i++) {
				if (i === index) {
					arr[i].selected = true;
				} else {
					arr[i].selected = false;
				}
			}
			this.dropdownList = arr;
			this.selectedName = index == 0 ? '综合' : '价格';
			this.selectH = 0;
		},
		screen: function(e) {
			let index = e.currentTarget.dataset.index;
			console.log(e.currentTarget.dataset.index);
			if (index == 0) {
				this.showDropdownList();
			} else if (index == 1) {
				this.tabIndex = 1;
			} else if (index == 2) {
				this.isList = !this.isList;
			} else if (index == 3) {
				this.drawer = true;
			}
		},
		closeDrawer: function() {
			this.drawer = false;
		},
		back: function() {
			if (this.drawer) {
				this.closeDrawer();
			} else {
				uni.navigateBack();
			}
		},
		confirmSearch: function(e) {
			this.search = e.detail.value;
			console.log(this.search)
			this.productPageIndex = 1
			this.products = []
			this.getProducts();
			
		},
		detail: function(e) {
			let id = e.currentTarget.dataset.id;
			console.log(e.currentTarget.dataset.id);
			uni.navigateTo({
				url: '../product/show?id='+id
			});
		},
		follow: function(e){
			let that = this
			api.follow_company(this.company_id).then(function(data){
				if(!data.error){
					that.company.follow = 1
				}
			})
		},
		cancelfollow: function(e){
			let that = this
			api.follow_company(this.company_id).then(function(data){
				if(!data.error){
					that.company.follow = 0
				}
			})
		}
	},
	onPullDownRefresh: function() {
		console.log(1)
		let loadData = JSON.parse(JSON.stringify(this.tasks));
		loadData = loadData.splice(0, 10);
		this.tasks = loadData;
		this.productPageIndex = 1;
		this.taskPageIndex = 1;
		this.pullUpOn = true;
		this.loadding = false;
		uni.stopPullDownRefresh();
	},
	onReachBottom: function() {
		let that = this
			// if (!this.pullUpOn) return;
		this.loadding = true;
		this.pullUpOn = true;
		if(this.Id == 1){
			this.taskPageIndex = this.taskPageIndex + 1;
			this.getTasks()
		}else{
			this.productPageIndex = this.productPageIndex + 1;
			this.getProducts()
		}
		
		
		console.log(1)
		console.log(this.pageIndex )
		
		
		
	}
};
</script>

<style>
image {
	width: 100%;
	height: 100%;
}
.FlexComPany{
	padding: 20rpx 0;
	margin: 10rpx auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}
.ComPanyName{
	font-weight: bold;
	font-size: 32rpx;
	color: #000000;
}
.ComPanyTi{
	font-size: 28rpx;
	color: #999999;
	margin-top: 20rpx;
}
.ComPany{
	width: 500rpx;
	display: flex;
	align-items: center;
}
.ComPanyImg{
	padding: 10rpx;
	border: 1rpx solid #eee;
	margin-right: 20rpx;
	width: 120rpx;
	height: 120rpx;
}
.ComPanyGZ{
	font-size: 28rpx;
	color: #fff;
	border-radius: 40rpx;
	letter-spacing: 3rpx;
	padding: 5rpx 20rpx;
	background: red;
}
.ComPanyYGZ{
	font-size: 28rpx;
	color: #fff;
	border-radius: 40rpx;
	letter-spacing: 3rpx;
	padding: 5rpx 20rpx;
	background: grey;
}
.w69 {
	width: 690rpx;
	margin: 0 auto;
}
.swiper {
	width: 690rpx;
	height: 380rpx;
	overflow: hidden;
	border-radius: 8rpx;
	margin: 0 auto;
}
.TabFlex {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 30rpx auto;
	padding: 20rpx 0;
	color: #222222;
}
.Tab {
	width: 50%;
	text-align: center;
	font-size: 32rpx;
}
.Tab_ {
	font-weight: bold;position: relative;
	color: red;
}
.Tab_g{background: red;width: 100rpx;height: 5rpx;margin: 5rpx auto;position: relative;}
page {
	background: #fff;
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
	border-bottom: 1rpx solid #ddd;
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
}

.tui-searchbox {
	width: 100%;
	height: 30px;
	margin-right: 30rpx;
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
	width: 90%;
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
}

.tui-product-container:last-child {
	margin-right: 0;
}

.tui-pro-item {
	width: 100%;
	margin-bottom: 10rpx;
	background: #fff;
	box-sizing: border-box;
	border-radius: 12rpx;
	overflow: hidden;
	transition: all 0.15s ease-in-out;
}

.tui-flex-list {
	display: flex;
	margin-bottom: 20rpx !important;
}

.tui-pro-img {
	width: 100%;
	display: block;
}

.tui-proimg-list {
	width: 240rpx;
	height: 240rpx !important;
	flex-shrink: 0;
	margin-right: 20rpx;
	/* border-radius: 12rpx; */
}

.tui-pro-content {
	width: 440rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20rpx 0;
	border-bottom: 1rpx solid #ddd;
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
