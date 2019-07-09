<template>
  <div id="app">
       <home></home>
  </div>
</template>

<script>
	import Home from "./views/Home.vue"
	export default{
			name:"App",
			components:{
				"home":Home
			},
			mounted() {
					layui.use('element', function(){
				  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
				  
				  //监听导航点击
				  element.on('nav(demo)', function(elem){
				    //console.log(elem)
				    layer.msg(elem.text());
				  });
				});
			}
		}
</script>

<style lang="scss">

</style>
