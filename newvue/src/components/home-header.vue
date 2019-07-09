<template>
	<div>
        <ul class="layui-nav">
					<h1>Your Logo</h1>
					<div class="navRightBox">
						<li class="layui-nav-item">
						  <img src="../../public/img/0.jpg" class="layui-circle" style="border: 2px solid #A9B7B7;" width="35px" alt="">
						</li>   
						<li class="layui-nav-item" lay-unselect="">
						  <a href="javascript:;">admin</a>
						  <dl class="layui-nav-child">
						    <dd><a href="javascript:;">个人信息</a></dd>
						    <dd><a href="javascript:;">切换账号</a></dd>
						    <dd><a href="javascript:;">退出</a></dd>
						  </dl>
						</li>		 
						<li class="layui-nav-item">
						  <a href="">前台首页</a>
						</li>
						
					</div>
        </ul>
	</div>
</template>

<script>
	export default{
		name:"home-header",
		mounted() {
	  }
	}
</script>

<style>
     .layui-nav{
			    height: 94px;
          border-bottom: 5px solid #5FB878;
          background: #FFFFFF ;
					display: flex;
					align-items: center;
					justify-content: space-between;
		 } 
		 .layui-nav h1{
			 font-size: 60px;
			 color: #007DDB;
		 }
</style>
