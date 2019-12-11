<template>
	<view class="">
		
		<view v-show="ShowGuidance">
			<view class="Bg" @click="colse"></view>
			<view class="Guidance"  @click="colse">
				<image src="/static/images/index/zhidaole.png" mode="widthFix"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				// ShowGuidance:false
			}
		},
		props:{
			ShowGuidance:false
		},
		methods:{
			colse:function(){
				this.ShowGuidance = false
			}
		}
	}
</script>

<style>
	image{width: 100%;height: 100%;}
	.Bg{position: fixed;left: 0;top: 0;z-index: 99; width: 100%;height: 100%;background: rgb(0, 0, 0,0.4);}
	.Guidance{position: relative;z-index: 100;width: 690rpx;height: 500rpx;top: -120rpx; text-align: center; margin: 0 auto;}
</style>
