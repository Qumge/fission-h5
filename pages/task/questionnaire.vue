<template>
	<view >
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px;'}" style="color:#fff">
			<view class="tui-header" :style="{paddingTop:top+'px'}" >
				调查问卷
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" 
				 @tap="back">
				 <tui-icon name="arrowleft" color="#fff" style="line-height:44px;"></tui-icon>
				 </view>
			</view>
		</view>
		<!--header-->
		<view>
			<view class="title">
				{{TopTile.name}}
			</view>
		</view>
		<view class="question">
			
			<form @submit="formSubmit">
				<view class="List" style="font-size: 18rpx;color: #c11d1d;letter-spacing: 2rpx;">
					{{Forms.desc}}
				</view>
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
							<textarea class="radio_Name sinput" :name="String(item.id)" placeholder="请输入..."></textarea>
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
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon
		},
		data() {
			return {
				optionsId:'',
				from: 'h5',
				showShare: false,
				height: 0, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				current: 0,
				Forms:[],
				taskQuestionnaire:{},
				TopTile:'问卷',
			}
		},
		onLoad: function(options){
			let that = this
			that.optionsId = options.id
			console.log(options.id)
			if (options.from) {
				this.from = options.from
			}
			this.showShare = this.tui.wechatBowser();
			api.task_questionnaiire(options.id).then(function(data){
				that.Forms = data.questionnaire.questions
				that.TopTile = data.questionnaire
				that.taskQuestionnaire = data
				console.log(data)
				if (!that.tui.wechatBowser()) return;
				if (!that.taskQuestionnaire.id) return;
				//查看
				console.log(that.taskQuestionnaire.id);
				api.view(that.taskQuestionnaire.id, options.token).then(function(data){
					console.log(data);
				}).catch(function(){
					
				})
				api.fission(that.taskQuestionnaire.id, options.token).then(function(fission_log) {
					console.log(fission_log);
					that.tui.jssdk().then(function(jweixin) {
						let image_path = ''
						if(fission_log.task.image){
							image_path = fission_log.task.image.image_path
						}
						jweixin.updateAppMessageShareData({ 
							title: that.taskQuestionnaire.name, // 分享标题
							desc: '分享链接赚金币,提现赢大奖', // 分享描述
							link: (that.taskQuestionnaire.h5_link + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: image_path, // 分享图标
							success: function () {
							  // 设置成功
							  console.log('updateAppMessageShareData');
							}
						  })
						// jweixin.onMenuShareAppMessage({
							
						// 	title: that.taskQuestionnaire.name, // 分享标题
						// 	desc: '分享链接赚金币,提现赢大奖', // 分享描述
						// 	link: (location.origin + location.pathname + '?id=' + that.taskQuestionnaire.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						// 	imgUrl: that.taskQuestionnaire.images[0].image_path, // 分享图标
						// 	type: '', // 分享类型,music、video或link，不填默认为link
						// 	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						// 	success: function() {
						// 		// 用户点击了分享后执行的回调函数
						// 		console.log('share')
						// 		api.share(fission_log.token).then(function(data) {
						// 			console.log(data);
						// 		})
						// 	}
						// });
					}).catch(function(e) {
						console.log(e);
					})
				}).catch(function() {
							
				})
				
				
			}).catch(function(e){
				console.log(e)
			})
		},
		methods: {
			formSubmit: function(e) {
				// console.log(e.detail.value)
				var formdata = JSON.stringify(e.detail.value)
                console.log('携带数据为：' + JSON.stringify(e.detail.value))
				api.task_FormQuestionnaires(formdata,this.optionsId).then(function(data){
					console.log(data)
					if(!data.error){
						uni.showToast({
							icon:"success",
							title:"感谢您的参与！"
						})						
					}else{
						uni.showToast({
							icon:"none",
							title:data.message
						})
					}
				}).catch(function(e){
				console.log(e)
			})
				
			},
			radioChange: function(evt) {
				console.log('radioChange', evt);
				// for (let i = 0; i < this.items.length; i++) {
				// 	if (this.items[i].value === evt.target.value) {
				// 		this.current = i;
				// 		break;
				// 	}
				// }
			},
			back: function(){
				this.tui.goBack(this.from);
			}
		}
	}
</script>

<style>
	
</style>
<style scoped>
	.FormTitle{font-size: 32rpx;color: #1A1A1A;font-weight: 400;margin-bottom: 30rpx;}
	.FormName{}
	.List{padding: 60rpx 0 30rpx;margin-top: 20rpx;margin-bottom: 30rpx; border-top: 1rpx dashed #e6e6e6;}
	.question .List:first-child{border-top: none;}
	.Lists{border-bottom: none;}
	.Name{padding: 3rpx 0;margin: 5rpx 0;}
	.radio_Name {font-size: 28rpx;color: #6f6e6e;padding: 2rpx 0;margin: 3rpx 0 3rpx 5rpx;}
	.radio_radio{width: 22px !important;height: 22px !important;}
	.Btn{margin: 90rpx auto 150rpx;background: #16AB60;color: #fff;letter-spacing: 2px; font-size: 26rpx;width: 410rpx;}
	.FormNames{border: 1px solid #dcdcdc;height: 200rpx;border-radius:5rpx;}
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
