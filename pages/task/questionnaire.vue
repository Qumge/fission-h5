<template>
	<view >
		<view>
			<view class="title">
				{{TopTile.name}}
			</view>
		</view>
		<view class="question">
			<form @submit="formSubmit">
				<template v-for="(item,index) in Forms" >
					<view class="List" v-if="item.type == 'Question::Single' ">
						<!--  单选 -->
						<view class="FormTitle">{{index+1}}、{{item.name}}</view>
						<view class="FormName">
							<radio-group :name='String(item.id)'>
								<label v-for="option in item.options">
									<view class="Name">
										<radio class="radio_radio" :value="String(option.id)"  />
										<text class="radio_Name">{{option.name}}</text>
									</view>
								</label>
							</radio-group>
						</view>
						
					</view>
					<view class="List" v-if="item.type=='Question::Multiple' ">
						<!-- 答案 多选 -->
						<view class="FormTitle">{{index+1}}、{{item.name}}</view>
						<view class="FormName">
							<checkbox-group :name='String(item.id)'>
								<label v-for="option in item.options">
									<view class="Name">
										<checkbox :value="String(option.id)" />
										<text class="radio_Name">{{option.name}}</text>
									</view>
								</label>
							</checkbox-group>
						</view>
					</view>
					<view class="List" v-if="item.type=='Question::Completion' ">
						<!-- 答案 问答 -->
						<view class="FormTitle">{{index+1}}、{{item.name}}</view>
						<view class="FormName FormNames">
							<!-- <input class="radio_Name sinput" :name="String(item.id)" value='' placeholder="请输入" /> -->
							<textarea class="radio_Name sinput" :name="String(item.id)" placeholder="请输入"></textarea>
						</view>
					</view>
					
				</template>
				<button class="Btn" form-type="submit">提交</button>
			</form>
			
			
		</view>
	</view>
</template>

<script>
	import api from '../../api.js'
	export default {
		data() {
			return {
				showShare: false,
				current: 0,
				Forms:[],
				TopTile:'问卷',
				dataList: [
					// 问答
					{ title: '问答', type:'Question::Completion',childrens: 
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					},
					// 单选/
					{ title: '单选',type:'Question::Multiple', childrens:
						[
							{ name: 'value1', selected: false },
							{ name: 'value2', selected: false },
							{ name: 'value3', selected: false },
							{ name: 'value4', selected: false },
							{ name: '自定义', selected: false }
						] 
					},
					// 多选
					{ title: '多选',type:'Question::Single', childrens:
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
		onLoad: function(){
			this.showShare = this.tui.wechatBowser();
			let _this = this
			api.task_questionnaiire(1).then(function(data){
				// console.log(data.questionnaire)
				// console.log(data.questionnaire.questions)
				_this.Forms = data.questionnaire.questions
				_this.TopTile = data.questionnaire
			}).catch(function(e){
				console.log(e)
			})
		},
		methods: {
			formSubmit: function(e) {
				// console.log(e.detail.value)
				var formdata = e.detail.value
                console.log('携带数据为：' + JSON.stringify(e.detail.value))
				
			},
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
	.FormTitle{font-size: 28rpx;color: #1A1A1A;font-weight: bold;margin-bottom: 10rpx;}
	.FormName{}
	.List{padding: 30rpx 0;border-bottom: 1rpx solid #ddd;}
	.List:last-child{border-bottom: none;background: #FF201F;}
	.Lists{border-bottom: none;}
	.Name{padding: 2rpx 0;margin: 3rpx 0;}
	.radio_Name {font-size: 26rpx;color: #222222;padding: 2rpx 0;margin: 3px 0 3px 5px;}
	.radio_radio{width: 22px !important;height: 22px !important;}
	.Btn{margin: 90rpx auto 150rpx;background: #16AB60;color: #fff;font-size: 26rpx;width: 410rpx;}
	.FormNames{border: 1px solid #ccc;height: 200rpx;}
	.sinput{padding: 10rpx 10rpx;}
	
	
	
	
	.title {
		font-weight: 32rpx;
		font-weight: bold;
		width: 690rpx;
		text-align: left;
		margin: 30rpx auto;
	}
	
	.question {
		padding: 0rpx 30rpx;
	}
	
</style>
