<template>
	<div class="shengBei">
		<router-view></router-view>
	</div>
</template>

<script>
	import HomeDownData from "../components/home-down-right-down/home-down-data.vue"
	export default{
		name:"home-down-right-down",
		components:{
			"home-down-data":HomeDownData
		}
	}
</script>

<style>
	.shengBei{
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow-y: auto;
	}
</style>
