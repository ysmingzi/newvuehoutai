<template>
	<div class="bigBox">
		<home-down-ce></home-down-ce>
		<home-down-right></home-down-right>
	</div>
	    
	
</template>

<script>
	import HomeDownCe from "./home-down-ce.vue"
	import HomeDownRight from "./home-down-right.vue"
	export default{
		name:"home-down",
		components:{
			"home-down-ce":HomeDownCe,
			"home-down-right":HomeDownRight
		},

	}
</script>

<style scoped>
	.bigBox{
		display: flex;
	}
</style>
