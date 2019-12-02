<template>
	<view>
		<view class="title">
			问券标题
		</view>
		
		<view class="question">
			<view class="item" v-for="(item, index) in dataList" :key="item.value">
				<view class="sub-title">
					{{ index + 1 }}: {{ item.title }}
				</view>
				<radio-group @change="radioChange">
					<label v-for="(it, idx) in item.childrens" :key="idx">
						<view class="radio">
							<radio :value="it.name" :checked="index === current" />
							<text>{{it.name}}</text>
						</view>
					</label>
				</radio-group>
				<!-- <view class="sub-title">
					{{ index + 1 }}: {{ item.title }}
				</view>
				<view class="select">
					<radio-group :name="item.title">
						<label v-for="(it, idx) in item.childrens" :key='idx'>
							<radio :value="it.name" /><text>{{it.name}}</text>
						</label>
					</radio-group>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				dataList: [
					{ title: '标题1', childrens: 
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					},
					{ title: '标题2', childrens:
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					},
					{ title: '标题3', childrens:
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					},
					{ title: '标题4', childrens:
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					}
				]
			}
		},
		methods: {
			radioChange: function(evt) {
				console.log('radioChange', evt);
				// for (let i = 0; i < this.items.length; i++) {
				// 	if (this.items[i].value === evt.target.value) {
				// 		this.current = i;
				// 		break;
				// 	}
				// }
			}
		}
	}
</script>

<style scoped>
	.title {
		text-align: center;
		margin: 30rpx auto;
	}
	
	.question {
		padding: 0rpx 30rpx;
	}
	
	.question .item {
		margin-bottom: 30rpx;
	}
	
	.question .item .sub-title {
		margin-bottom: 15rpx;
	}
	
	.question .item .select {
		width: 100%;
		display: block;
		margin-bottom: 15rpx;
	}
	
	.question .item .radio {
		margin-bottom: 15rpx;
	}
</style>
