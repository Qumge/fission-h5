<template>
	<web-view :src="task.share_link"></web-view>
</template>

<script>
	import api from "../../api.js"
	export default{
		data(){
			return {
				task: {}
			}
		},
		onLoad: function(options){
			let that = this
			api.linkTasks(1,2).then(function(){
				
			});
			api.linkTask(options.id).then(function(data){
				console.log(data);
				that.task = data;
				api.fission(data.id, options.token).then(function(fission_log){
					console.log(fission_log);
					that.tui.jssdk().then(function(jweixin){
						console.log(222222222)
						console.log(3333);
						jweixin.onMenuShareAppMessage({
						  title: that.task.name, // 分享标题
						  desc: '分享链接赚金币,提现赢大奖', // 分享描述
						  link: (location.origin + location.pathname + '?id=' + that.task.id + '&token=' + fission_log.token), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						  imgUrl: '', // 分享图标
						  type: '', // 分享类型,music、video或link，不填默认为link
						  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						  success: function () {
						    // 用户点击了分享后执行的回调函数
							console.log('share')
							api.share(fission_log.token).then(function(data){
								console.log(data);
							})
						  }
						});
					}).catch(function(e){
						console.log(e);
					})
				}).catch(function(){
					
				})
			}).catch(function(e){
				console.log(e);
				//跳转到回上一页
			})
		}
	}
</script>

<style>
</style>
