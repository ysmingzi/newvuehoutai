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
	      <button class="layui-btn" onclick="role_management_add('添加用户','role_management_add.html','900','500')"><i class="layui-icon"></i>添加</button>
	      <button class="layui-btn" onclick="role_management_edit('编辑','role_management_edit.html','900','500')"><i class="layui-icon"></i>编辑</button>
	      <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/daochu1.png" width="15" height="15"></i>批量导出</button>
		  <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/daochu.png" width="15" height="15"></i>导入</button>
	      <span class="x-right" style="line-height:40px; font-size: 17px;float: right;" >共有数据：88 条</span>
		  </div>
	       <table class="layui-table">
                <thead>
                    <tr style="background: #30a9f1;">
                        <th width="8%">
                            <input type="checkbox" name="" value="">
                        </th>
                        <th width="9%">
                            ID
                        </th>
                        <th width="16%">
                            用户名
                        </th>
                        <th width="22%">
                            角色职称</th>
                        <th width="34%">备注</th>
                        <th width="11%">
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            1
                        </td>
                         <td>
                            张三</td>
                        <td>
                            管理员
                        </td>
                        <td>更改权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                            <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            2</td>
                             <td>
                            李四</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            3</td>
                             <td>
                            王五</td>
                        <td>
                            管理员
                        </td>
                        <td>更改权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            4</td>
                             <td>
                            赵六</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                            
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            5</td>
                             <td>宋加加</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            6</td>
                             <td>
                            小青</td>
                        <td>
                            管理员
                        </td>
                        <td>更改权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            7</td>
                             <td>小强</td>
                        <td>
                            用户</td>
                        <td>浏览权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            8</td>
                             <td>
                            胖子</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            9</td>
                             <td>
                            丽丽</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            10</td>
                             <td>
                            name1</td>
                        <td>
                            超级管理员
                        </td>
                        <td>至高无上的权利</td>
                        <td class="td-manage">
                            <a title="分配权限" href="javascript:;" onclick="role_management_permissions('分配权限','role_management_permissions.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/quanxian.png" width="15" height="15"></i>
                            </a>
                             <a title="查看" href="javascript:;" onclick="role_management_look('查看','role_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look3.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="role_del(this,'1')" style="text-decoration:none">
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
		name:"home-down-jiaose",
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
