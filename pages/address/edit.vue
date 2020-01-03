<template>
	<view class="evan-form-show">
		
		<view class="evan-form-show">
		<evan-form :hideRequiredAsterisk="hideRequiredAsterisk" ref="form" :model="info">
			<evan-form-item label="姓名：" prop="name">
				<input class="form-input" placeholder-class="form-input-placeholder" v-model="info.name" placeholder="请输入姓名" />
			</evan-form-item>
			<evan-form-item label="手机号码：" prop="phone">
				<input class="form-input" placeholder-class="form-input-placeholder" v-model="info.phone" placeholder="请输入联系电话" />
			</evan-form-item>
			<evan-form-item label="收货地址：" prop="content">
				<input class="form-input" placeholder-class="form-input-placeholder" v-model="info.content" placeholder="请输入详细收货地址" />
			</evan-form-item>
			
			<tui-list-cell :hover="false" padding="0">
				<view class="tui-swipe-cell">
					<view>设为默认地址</view>
					<switch :checked="info.default === 1" color="#30CC67" class="tui-switch-small"  @change="tt"/>
				</view>
			</tui-list-cell>
			
		
		</evan-form>
		<view style="margin-top: 50px;">
			<button @click="save" style="background: #EB0909 !important" class="evan-form-show__button" :disabled="disabled">保存</button>
		</view>
		<tui-loading :visible="loading"></tui-loading>
		
	</view>

	</view>
</template>

<script>
	const cityData = require('../../utils/picker.city.js')

	import tuiButton from "@/components/extend/button/button"
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
	import EvanForm from '@/components/evan-form/evan-form.vue'
	import EvanFormItem from '@/components/evan-form/evan-form-item.vue'
	import api from "../../api.js"
	import tuiLoading from "@/components/loading/loading"
	export default {
		components: {
			tuiButton,
			tuiListView,
			tuiListCell,
			EvanForm,
			EvanFormItem,
			tuiLoading
		},
		data() {
			return {
				selectList: cityData, //接口返回picker数据,此处就直接使用本地测试数据
				multiArray: [], //picker数据
				value: [0, 0, 0],
				text: "",
				id: "",
				hideRequiredAsterisk: false,
				loading: false,
				disabled: false,
				id: null,
				info: {
					name: '',
					content: '',
					phone: '',
					default: 0
				},
				rules: {
					name: {
						required: true,
						message: '请输入姓名'
					},
					content: [{
							required: true,
							message: '请输入收货地址'
						}
					],
					phone: [{
							required: true,
							message: '请输入手机号'
						},
						{
							validator: (rule, value, callback) => {
								// 注意这里如果用的是methods里的isMobilePhone将不生效
								const reg = /^1[3|4|5|7|8][0-9]{9}$/
								if (reg.test(value)) {
									callback()
								} else {
									callback(new Error('手机号格式不正确'))
								}
							}
						}
					]
				}
			}
		},
		onLoad: function(options) {
			let that = this
			this.$nextTick(() => {
				this.$refs.form.setRules(this.rules)
			})
			api.address(options.id).then(function(data){
				that.info.name = data.name
				that.info.phone = data.phone
				that.info.content = data.content
				that.id = options.id
				if(data.tag == 'default'){
					that.info.default = 1
				}else{
					that.info.default = 0
				}
			}).catch(function(e){
				
			})
			// this.multiArray = [
			// 	this.toArr(this.selectList),
			// 	this.toArr(this.selectList[0].children),
			// 	this.toArr(this.selectList[0].children[0].children)
			// ]
			// console.log(this.selectList[0].name)
			// console.log(this.selectList[0].children[0])
			// // console.log(this.selectList[0].children[0].name)
			// // console.log(this.selectList[0].children[0].children[0].name)

			// let provice = this.selectList[0].name
			// let city = this.selectList[0].children[0].name
			// let district = this.selectList[0].children[0].children[0].name
			// this.text = provice + " " + city + " " + district;
		},
		methods: {
			tt(e){
				if(e.target.value){
					this.info.default = 1
				}else{
					this.info.default = 0
				}
				console.log(e.target.value);
			},
			save() {
				let that = this
				this.$refs.form.validate((res) => {
					if (res) {
						that.loading = true
						that.disabled = true
						api.updateAddress(this.id, this.info).then(function(address){
							if(address.id){
								uni.navigateBack({
									
								})
							}
						}).catch(function(e){
							console.log(e)
						})
					}
				})
			},
			isMobilePhone() {
				const reg = /^1[3|4|5|7|8][0-9]{9}$/
				if (reg.test(value)) {
					return true
				}
				return false
			},
			picker: function(e) {
				let value = e.detail.value;
				console.log(e)
				if (this.selectList.length > 0) {
					let provice = this.selectList[value[0]].name
					let city = this.selectList[value[0]].children[value[1]].name
					let district = this.selectList[value[0]].children[value[1]].children[value[2]].name
					this.text = provice + " " + city + " " + district;
					this.id = this.selectList[value[0]].children[value[1]].children[value[2]].id
				}
			},
			toArr(object) {
				let arr = [];
				for (let i in object) {
					arr.push(object[i].name);
				}
				return arr;
			},
			columnPicker: function(e) {

				console.log(e)
				//第几列 下标从0开始
				let column = e.detail.column;
				//第几行 下标从0开始
				let value = e.detail.value;
				if (column === 0) {
					this.multiArray = [
						this.multiArray[0],
						this.toArr(this.selectList[value].children),
						this.toArr(this.selectList[value].children[0].children)
					];
					this.value = [value, 0, 0]
				} else if (column === 1) {
					this.multiArray = [
						this.multiArray[0],
						this.multiArray[1],
						this.toArr(this.selectList[this.value[0]].children[value].children)
					];
					this.value = [this.value[0], value, 0]
				}
			}
		}
	}
</script>

<style lang="scss">
	.tui-swipe-cell {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		padding: 10rpx 24rpx;
		border-radius: 6rpx;
		overflow: hidden;
		font-size: 28rpx;
	}
	.evan-form-item-container{
		background: #fff;
	}
	.evan-form-show {
		padding: 0 30rpx;
		.form-input {
			font-size: 28rpx;
			color: #333;
			text-align: right;
			padding-right: 30rpx;
		}
		.form-input-placeholder {
			font-size: 28rpx;
			color: #999
		}
		&__button {
			width: 100%;
			height: 88rpx;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			font-size: 36rpx;
			color: #fff;
			margin-top: 20rpx;
			background-color: #2D87D5;
			&::before,
			&::after {
				border: none;
			}
		}
	}
</style>
