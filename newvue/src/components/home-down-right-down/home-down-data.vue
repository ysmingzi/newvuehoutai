<template>
	<div class="dataBox">
			<form class="layui-form x-center" action="" style="width:500px">
                <div class="layui-form-pane">
                  <div class="layui-form-item">
                    <div class="layui-input-inline" style="width:400px">
                      <input type="text" name="username" placeholder="搜索内容" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-input-inline" style="width:80px">
                        <button class="layui-btn" lay-submit="" lay-filter="sreach"><i class="layui-icon"></i></button>
                    </div>
                  </div>
                </div> 
            </form>
	</div>
</template>

<script>
	export default{
		name:"home-down-data"
	}
</script>

<style>
	.dataBox{
		width: 100%;
		height: 100%;
	}
	.dataBox form{
		margin: 30px auto 0;
	}
</style>
