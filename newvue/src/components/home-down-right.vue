<template>
	<div class="right">
		<home-down-right-top></home-down-right-top>
		<home-down-right-down></home-down-right-down>
	</div>
</template>

<script>
	import HomeDownRightDown from "./home-down-right-down.vue"
	import HomeDownRightTop from "./home-down-right-top.vue"
	export default{
		name:"home-down-right",
		components:{
			"home-down-right-top":HomeDownRightTop,
			"home-down-right-down":HomeDownRightDown
		}
	}
</script>

<style scoped>
	.right{
	    display: flex;
		flex-direction: column;
		height: 880px;
		width: 100%;
	}
</style>
