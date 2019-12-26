<template>
	<view class="container">
		<view class="tui-order-header">
			<view class="tui-text">物流单号：
				<text class="tui-bold">{{express.result.number}}</text>
			</view>
		</view>
		<view class="tui-order-tracking">
			<tui-time-axis>
				<tui-timeaxis-item bgcolor="none" v-for="(item,index) in express.result.list" :key="index">
					<template v-slot:node>
						<view class="tui-node">
							<tui-icon name="people" color="#fff" :size="13"></tui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="tui-order-desc tui-light-gray">
							{{item.status}}
						</view>
						<view class="tui-order-time tui-gray">{{item.time}}</view>
					</template>
				</tui-timeaxis-item>

			</tui-time-axis>
		</view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTimeAxis from "@/components/time-axis/time-axis"
	import tuiTimeaxisItem from "@/components/timeaxis-item/timeaxis-item"
	import api from "../../api.js"
	export default {
		components: {
			tuiIcon,
			tuiTimeAxis,
			tuiTimeaxisItem
		},
		data() {
			return {
				express: {}
			}
		},
		onLoad(options){
			let that = this
			api.express(options.id).then(function(data){
				that.express = data
			}).catch(function(e){
				
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	.tui-order-header {
		padding: 30upx;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-text {
		font-size: 28upx;
		color: #333;
		padding: 4upx;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-node {
		background: #ddd;
		height: 44upx;
		width: 44upx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		padding-top: 0;
	}

	.tui-node-small {
		height: 16upx !important;
		width: 16upx !important;
	}

	.tui-bg-primary {
		background: #EB0909 !important;
	}

	.tui-order-tracking {
		padding: 30upx 30upx 30upx 40upx;
		background: #fff;
		margin-top: 20upx;
		box-sizing: border-box;
	}

	.tui-order-title {
		color: #333;
		font-weight: bold;
		font-size: 32upx;
		font-family: "microsoft yahei";
	}

	.tui-order-desc {
		font-size: 28upx;
		color: #333;
		padding: 12upx 0;
	}

	.tui-ptop {
		display: flex;
		justify-content: flex-start;
		line-height: 28upx;
	}

	.tui-order-time {
		font-size: 24upx;
		font-weight: bold;
	}

	.tui-gray {
		color: #848484 !important;
	}

	.tui-light-gray {
		color: #888 !important;
	}

	.tui-primary {
		color: #5677fc;
	}
</style>
