<template>
	
	<!-- https://github.com/ZENGzoe/vue-scratch-card -->
	<vue-scratch-card 
	    element-id='scratchWrap'
	    :ratio=0.5
	    :move-radius=50
	    :start-callback=startCallback
	    :clear-callback=clearCallback
	    cover-color='#caa'
	  />
</template>

<script>
	export default {
	  data() {
		  return {}
	  },
	  methods : {
		startCallback(){
		  console.log('抽奖成功！')
		},
		clearCallback(){
		  console.log('清除完毕！')
		}
	  },
	}
</script>

<style>
</style>
