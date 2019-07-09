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
          <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>详细信息</button>
          <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/tongji.png" width="15" height="15"></i>统计</button>
          <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/daochu.png" width="15" height="15"></i>批量导出</button>
          <button class="layui-btn layui-btn-danger"><i class="layui-icon"><img src="../../../public/img/daochu1.png" width="15" height="15"></i>导出</button>
          <span class="x-right" style="line-height:40px; font-size: 17px;float: right;" >共有数据：88 条</span>
		  </div>
            <table class="layui-table">
                <thead >
                    <tr style="background: #30a9f1;">
                        <th>
                            <input type="checkbox" name="" value="">
                        </th>
                        <th>
                            用户名
                        </th>
                        <th>
                            唯一标识
                        </th>
                        <th>
                            年龄
                        </th>
                        <th>
                            性别
                        </th>
                        <th>
                            所属
                        </th>
                        <th>
                            测试用时
                        </th>
                        <th>
                            预警等级
                        </th>
                        <th>
                            测试时间
                        </th>
                        <th>
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
                            宋加加
                        </td>
                        <td>
                            <u style="cursor:pointer" onclick="question_show()">
                                a
                            </u>
                        </td>
                        <td>
                            24
                        </td>
                        <td>
                            男
                        </td>
                        <td>
                            公司名称
                        </td>
                        <td>00时00分50秒</td>
                        <td>
                            等级一
                        </td>
                        <td>2017年7月09日16时00分00秒</td>
                        <td class="td-manage">
                            <a title="查看" href="javascript:;" onclick="person_look('查看','sjtj_person_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="person_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            张三
                        </td>
                        <td>
                            <u style="cursor:pointer" onclick="question_show()">
                                b
                            </u>
                        </td>
                        <td>
                            20
                        </td>
                        <td>
                            男
                        </td>
                        <td>
                            公司名称
                        </td>
                        <td>
                            00时10分10秒</td>
                        <td>
                            等级二
                        </td>
                        <td>2017年7月09日19时09分01秒</td>
                        <td class="td-manage">
                            <a title="查看" href="javascript:;" onclick="person_look('查看','sjtj_person_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="person_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            李四
                        </td>
                        <td>
                            <u style="cursor:pointer" onclick="question_show()">
                                c
                            </u>
                        </td>
                        <td>
                            40
                        </td>
                        <td>
                            男
                        </td>
                        <td>
                            公司名称
                        </td>
                        <td>00时39分29秒</td>
                        <td>
                            等级三
                        </td>
                        <td>2017年7月11日11时54分34秒</td>
                        <td class="td-manage">
                            <a title="查看" href="javascript:;" onclick="person_look('查看','sjtj_person_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="person_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            丽丽
                        </td>
                        <td>
                            <u style="cursor:pointer" onclick="question_show()">
                                d
                            </u>
                        </td>
                        <td>
                            20
                        </td>
                        <td>
                            女
                        </td>
                        <td>
                            公司名称
                        </td>
                        <td>01时00分09秒</td>
                        <td>
                            等级四
                        </td>
                        <td>2017年7月18日15时50分05秒</td>
                        <td class="td-manage">
                            <a title="查看" href="javascript:;" onclick="person_look('查看','sjtj_person_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="person_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>
                            王五
                        </td>
                        <td>
                            <u style="cursor:pointer" onclick="question_show()">
                                c
                            </u>
                        </td>
                        <td>
                            45
                        </td>
                        <td>
                            男
                        </td>
                        <td>
                            公司名称
                        </td>
                        <td>00时45分45秒</td>
                        <td>
                            等级四
                        </td>
                        <td>2017年7月18日17时03分56秒</td>
                        <td class="td-manage">
                            <a title="查看" href="javascript:;" onclick="person_look('查看','sjtj_person_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"><img src="../../../public/img/look2.png" width="15" height="15"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="person_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
           <!-- <div id="page">
				<div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-0">
					<span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span>
					<a href="javascript:;" data-page="2">2</a><a href="javascript:;" data-page="3">3</a>
					<a href="javascript:;" data-page="4">4</a><a href="javascript:;" data-page="5">5</a>
					<span>…</span><a href="javascript:;" class="layui-laypage-last" title="尾页" data-page="100">100</a>
					<a href="javascript:;" class="layui-laypage-next" data-page="2"><em>&gt;</em>
					</a>
				</div>
			</div> -->
			<div id="demo3"></div>
	</div>
</template>

<script>
	export default{
		name:"home-down-tongji",
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
