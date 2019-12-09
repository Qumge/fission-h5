<template>

	<scroll-view class="scrollList" scroll-y>
		<view class="tui-list search-result">
			<view class="tui-list-cell" hover-class="tui-list-cell-hover" v-for="(task,index) in tasks" :key="index" @tap="showTask"  :data-id=task.id
			 :hover-stay-time='150'>
				<view class="tui-list-cell-navigate">
					<image :src="'../../static/images/news/'+((index%2===0 && index!==0)?'avatar_2.jpg':'avatar_1.jpg')" class="img"></image>
					<view class="content">
						<view class="title">{{task.name}}</view>
						<!-- <view class="sub-title"></view> -->
					</view>
				</view>
			</view>
		</view>
	</scroll-view>

</template>

<script>
	import api from "../../api.js"
	export default {
		data() {
			return {
				tasks: [],
				page: 1,
				per_page: 100
			}

		},
		onLoad: function(options) {
			let that = this
			//uni.setStorageSync('sessionToken', 'f3RyaBP27affowFc54jv');
			api.linkTasks(that.page, that.per_page).then(function(data) {
				that.tasks = data
			}).catch(function(e){
				console.log(e)
			})

		},
		methods: {
			showTask: function(e) {
				uni.navigateTo({
					url: '/pages/task/show?id=' + e.currentTarget.dataset.id
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		overflow: hidden;
	}

	.page {
		height: 100%;
		overflow: hidden;
	}

	.scrollList {
		flex: 1;
	}

	.search-bar {
		display: flex;
		align-items: center;
		position: relative;
		padding: 30upx 30upx 30upx;
		background-color: #fff;
		/* box-shadow: 0 2px 2px #ccc;*/
	}

	.search-bar-form {
		flex: 1;
		position: relative;
		border-radius: 32upx;
		background: #f2f5f7;
	}

	.search-bar-box {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 20upx;
		padding-right: 20upx;
		height: 64upx;
		z-index: 1;
	}

	.search-bar-input {
		line-height: normal;
		width: 100%;
		padding-left: 20upx;
		font-size: 30upx;
		color: #333;
	}

	.phcolor {
		font-size: 30upx;
	}

	.icon-clear {
		height: 38upx;
	}

	.icon-search {
		position: relative;
		height: 26upx;
		margin-right: 20upx;
		font-size: inherit;
	}

	.cancel-btn {
		padding-left: 30upx;
	}

	.btn-primary {
		height: 62upx;
		width: 122upx;
		font-size: 30upx;
		line-height: 62upx;
		margin-left: 30upx;
	}

	.search-result::before {
		display: none;
	}

	.search-result::after {
		display: none;
	}

	.tui-list-cell {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.tui-list-cell-hover {
		background-color: #eee !important;
	}

	.tui-list-cell-navigate {
		width: 100%;
		position: relative;
		padding: 25upx 0 25upx 30upx;
		font-size: 28upx;
		color: #333;
		display: flex;
		align-items: center;
	}

	.tui-list-cell-navigate::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 30upx;
	}

	.img {
		width: 120upx;
		height: 120upx;
		/* border-radius: 50%; */
	}

	.content {
		width: 80%;
		padding-left: 30upx;
	}

	.title {
		width: 80%;
		font-size: 34upx;
		padding-bottom: 10upx;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}

	.sub-title {
		width: 80%;
		color: #7A7A7A;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28upx;
	}

	.tui-list {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-cell-divider {
		height: 66upx;
		padding-left: 30upx;
		font-size: 26upx;
		color: #999;
		background: #f2f5f7;
		padding: 0 30upx;
		display: flex;
		align-items: center;
	}

	.tui-indexed-list-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		z-index: 9999;
		position: absolute;
		top: 132upx;
		right: 0;
		padding-right: 10upx;
		width: 44upx;
	}

	.tui-indexed-list-text {
		font-size: 22upx;
	}

	.tui-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.tui-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 120upx;
		height: 120upx;
		right: 90upx;
		top: 50%;
		margin-top: -60upx;
		border-radius: 16upx;
		text-align: center;
		line-height: 120upx;
		font-size: 50upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
