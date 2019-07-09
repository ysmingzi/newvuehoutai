<template>
	<div class="tongJiBox">
		    <form class="layui-form x-center" action="" style="width:500px">
		            <div class="layui-form-pane" style="margin-top: 15px;">
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
			<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
                <ul class="layui-tab-title">
                  <li class="layui-this">网站设置</li>
                  <li>用户管理</li>
                  <li>权限分配</li>
                  <li>商品管理</li>
                  <li>订单管理</li>
                </ul>
                <div class="layui-tab-content" style="height: 100px;">
                  <div class="layui-tab-item layui-show">内容不一样是要有，因为你可以监听tab事件（阅读下文档就是了）</div>
                  <div class="layui-tab-item">内容2</div>
                  <div class="layui-tab-item">内容3</div>
                  <div class="layui-tab-item">内容4</div>
                  <div class="layui-tab-item">内容5</div>
                </div>
            </div> 
	</div>	    

	
</template>
<script>
	export default{
		name:"home-down-download",
		mounted() {
					layui.use(['laypage', 'layer'], function(){
		          var laypage = layui.laypage
		          ,layer = layui.layer;
						laypage.render({
		            elem: 'demo3'
		            ,count: 1000
		            ,first: '首页'
		            ,last: '尾页'
		            ,prev: '<em>←</em>'
		            ,next: '<em>→</em>'
		          });
						laypage.render({
		              elem: 'demo20'
		              ,count: data.length
		              ,jump: function(obj){
		//模拟渲染
		                document.getElementById('biuuu_city_list').innerHTML = function(){
		                  var arr = []
		                  ,thisData = data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
		                  layui.each(thisData, function(index, item){
		                    arr.push('<li>'+ item +'</li>');
		                  });
		                  return arr.join('');
		                }();
		              }
		            });
				});	
		}
	}
</script>

<style scoped>
	.tongJiBox{
		padding: 20px;
	}
	.tongJiBox form{
		margin: 30px auto 0;
	}
	.tongJiBox .xBox{
		margin-bottom: 10px;
		padding: 5px;
		line-height: 22px;
		border-radius: 0 2px 2px 0;
		background-color: #f2f2f2;
	}
	.tongJiBox .layui-table th,.tongJiBox .layui-table td{
		padding: 9px 15px;
	    min-height: 20px;
	    line-height: 20px;
	    border: 1px solid #94bdd9;
	    font-size: 14px;
	}
	
	.tongJiBox .layui-table{
		width: 100%;
		margin: 10px 0;
		background-color: #D6EAF6; 
		border: 1px solid #94bdd9;
		font-size: 14px;
	}
</style>
