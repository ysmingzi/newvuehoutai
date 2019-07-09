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
	    <div class="xBox" style="margin: 0 auto; display: block;">
	      <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
	      <button class="layui-btn" onclick="home_add('添加用户','home_add.html','600','500')"><i class="layui-icon"></i>添加</button>
	      <span class="x-right" style="line-height:40px; font-size: 17px;float: right;" >共有数据：88 条</span>
		  </div>
		 <table class="layui-table">
                <thead>
                    <tr style="background:#30a9f1 ;">
                        <th width="5%">
                            <input type="checkbox" name="" value="">
                        </th>
                        <th width="5%">序号</th>
                        <th width="8%">模块</th>
                        <th width="5%">标题</th>
                        <th width="8%">图片</th>
                        <th width="9%">发表时间</th>
                        <th width="44%">内容</th>
                        <th width="8%">显示状态</th>
                        <th width="9%">操作</th>
                    </tr>
                </thead>
                <tbody id="x-img">
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>1</td>
                        <td>新闻</td>
                        <td>新闻标题</td>
                        <td align="left">
                            <img src="../../../public/img/img1.jpg" alt="" width="56" height="56" layer-index="0">
                        </td>
                        <td>2017-07-15</td>
                        <td>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="new_edit('修改','new_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="banner_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>2</td>
                        <td>媒体报道</td>
                        <td>不要被谣“盐”利用</td>
                        <td align="left">
                            <img src="../../../public/img/img1.jpg" alt="" width="56" height="56" layer-index="1">
                        </td>
                        <td>2017-07-15</td>
                        <td>几乎是一夜之间，一场食盐抢购风席卷了全国各地，如同地震引发的海啸一般，这场突如其来的抢购让很多人猝不及防。
 抢购现象最早从浙江和广东等地开始。</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="new_edit('修改','new_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="banner_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>3</td>
                        <td>心理新闻</td>
                        <td>心理新闻标题</td>
                        <td align="left">
                            <img src="../../../public/img/img1.jpg" alt="" width="56" height="56" layer-index="2">
                        </td>
                        <td>2017-07-15</td>
                        <td>建设中</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="new_edit('修改','new_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="banner_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
			<div id="demo3"></div>
	</div>
</template>

<script>
	export default{
		name:"home-down-news",
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
