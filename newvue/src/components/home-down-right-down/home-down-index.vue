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
                    <tr style="background: #30a9f1;">
                        <th width="5%">
                            <input type="checkbox" name="" value="">
                        </th>
                        <th width="5%">序号</th>
                        <th width="9%">模块</th>
                        <th width="5%">标题</th>
                        <th width="8%">图片</th>
                        <th width="9%">上传时间</th>
                        <th width="40%">内容</th>
                        <th width="9%">显示状态</th>
                        <th width="10%">操作</th>
                    </tr>
                </thead>
                <tbody id="x-img">
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>1</td>
                        <td>轮播图片</td>
                        <td>pic1</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="0">
                        </td>
                        <td>2017-07-19</td>
                        <td>简述...</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>轮播图片</td>
                        <td>pic2</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="1">
                        </td>
                        <td>2017-07-19</td>
                        <td>简述...</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>产品图片</td>
                        <td>product1</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="2">
                        </td>
                        <td>2017-07-15</td>
                        <td>专用个人沙盘游戏设备（箱庭疗法）老师：181542342492老师：1875435345493</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>4</td>
                        <td>产品图片</td>
                        <td>product2</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="3">
                        </td>
                        <td>2017-07-15</td>
                        <td>心理工作平台（自助系统）1.15寸5:3红外防爆触摸屏，具有高透明度，高强度，高透光率特点。</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>5</td>
                        <td>咨询师图片</td>
                        <td>teacher1</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="4">
                        </td>
                        <td>2017-07-15</td>
                        <td>老师1</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>6</td>
                        <td>咨询师图片</td>
                        <td>teacher2</td>
                        <td align="left">
                            <img src="../../../public/img/banner1.jpg" alt="" width="56" height="56" layer-index="5">
                        </td>
                        <td>2017-07-15</td>
                        <td>老师2</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="home_edit('修改','home_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
		name:"home-down-index",
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
