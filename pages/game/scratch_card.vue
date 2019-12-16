<template>
	<view>
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}">
				刮刮卡
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" @tap="back">
					<tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				</view>
			</view>
		</view>
		<!--header-->
		<view style="margin-top: 44px;">
			<vue-scratch-card element-id='scratchWrap' :ratio=0.5 :move-radius=50 :start-callback=startCallback :clear-callback=clearCallback
			 cover-color='#caa' />
		</view>

	</view>
	<!-- https://github.com/ZENGzoe/vue-scratch-card -->

</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon,
		},
		data() {
			return {
				from: 'h5',
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
			}
		},
		onLoad(options) {
			if (options.from) {
				this.from = options.from
			}
		},
		methods: {
			back: function() {
				this.tui.goBack(this.from);
			},
			startCallback() {
				console.log('抽奖成功！')
			},
			clearCallback() {
				console.log('清除完毕！')
			}
		},
	}
</script>

<style>
	/* header*/
	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
		background-color: #FC4034;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 44px;
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
		height: 44px;
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
		height: 44px !important;
		width: 44px !important;
		display: block !important;
	}

	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	/* header*/
</style>
