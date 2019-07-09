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
                        <th width="9%">
                            标题
                        </th>
                        <th width="13%">
                            图片
                        </th>
                        <th width="57%">
                            文字信息
                        </th>
                        <th width="8%">
                            显示状态
                        </th>
                        <th width="8%">
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody id="x-img">
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            公司简介
                        </td>
                        <td align="center">
                            <img src="../../../public/img/img1.jpg" width="100" alt="" layer-index="0">
                        </td>
                        <td>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="about_us_edit('修改','about_us_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>
                            企业资质
                        </td>
                        <td align="center">
                            <img src="../../../public/img/img1.jpg" width="100" alt="" layer-index="1">
                        </td>
                        <td>
                              拥有多项产品专利。多年来推出具有独立产品特点的系列心理产品，形成自己的心理专业机构核心竞争力。
                        </td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="about_us_edit('修改','about_us_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>
                            企业文化
                        </td>
                        <td align="center">
                            <img src="../../../public/img/img1.jpg" width="100" alt="" layer-index="2">
                        </td>
                        <td>
                            建设中
                        </td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="about_us_edit('修改','about_us_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>专家团队</td>
                        <td align="center">
                            <img src="../../../public/img/img1.jpg" width="100" alt="" layer-index="3">
                        </td>
                        <td>
                            清华大学、北京大学、等众多专家，组成中坚力量。
                        </td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="about_us_edit('修改','about_us_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
                        <td>合作伙伴</td>
                        <td align="center">
                            <img src="../../../public/img/img1.jpg" width="100" alt="" layer-index="4">
                        </td>
                        <td>
                           建设中
                        </td>
                        <td class="td-status">
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已显示
                            </span>
                        </td>
                        <td class="td-manage">
                            <a style="text-decoration:none" onclick="banner_stop(this,'10001')" href="javascript:;" title="不显示">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="修改" href="javascript:;" onclick="about_us_edit('修改','about_us_edit.html','4','','510')" class="ml-5" style="text-decoration:none">
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
		name:"home-down-own",
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
