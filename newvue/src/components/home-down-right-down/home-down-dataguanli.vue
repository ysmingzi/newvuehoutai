<template>
	<div class="guanLiBox">
		<div class="guanLiBoxTop">
			<button class="layui-btn layui-btn-danger" onclick="delAll()">
				<i class="layui-icon"></i>批量删除
			</button>
				<span class="x-right" style="font-size: 18px;">共有数据：88 条</span>
		</div>
		<table class="layui-table">
                <thead>
                    <tr style="background: #30a9f1;">
                        <th>
                            <input type="checkbox" name="" value="">
                        </th>
                        <th>编号</th>
                        <th>
                            处理人</th>
                        <th>
                            处理类型
                        </th>
                        <th>时间</th>
                        <th>处理状态</th>
                        <th>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody id="x-link">
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>1</td>
                        <td>管理员3</td>
                        <td>上传新闻</td>
                        <td>2017-01-10 16:33:45</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>2</td>
                        <td>管理员1</td>
                        <td>上传简介</td>
                        <td>2017-02-12 16:12:11</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>3</td>
                        <td>管理员4</td>
                        <td>上传图片</td>
                        <td>2017-02-18 10:09:31</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>4</td>
                        <td>管理员2</td>
                        <td>上传视频</td>
                        <td>2017-03-14 14:12:56</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>5</td>
                        <td>管理员1</td>
                        <td>上传人员信息介绍</td>
                        <td>2017-06-24 17:45:43</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>6</td>
                        <td>管理员2</td>
                        <td>上传问题</td>
                        <td>2017-06-25 19:09:05</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>7</td>
                        <td>管理员1</td>
                        <td>上传新闻</td>
                        <td>2017-07-01 07:45:09</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>8</td>
                        <td>管理员1</td>
                        <td>上传文字信息</td>
                        <td>2017-07-03 15:45:54</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核</span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>9</td>
                        <td>管理员16</td>
                        <td>上传新闻</td>
                        <td>2017-07-08 16:34:36</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已浏览
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" value="1" name="">
                        </td>
                        <td>10</td>
                        <td>管理员1</td>
                        <td>上传新闻</td>
                        <td>2017-07-12 18:23:23</td>
                        <td>
                            <span class="layui-btn layui-btn-normal layui-btn-mini">
                                已审核
                            </span>
                        </td>
                        <td class="td-manage">
                            <a title="处理" href="javascript:;" onclick="data_management_look('查看','data_management_look.html','4','','510')" class="ml-5" style="text-decoration:none">
                                <i class="layui-icon"></i>
                            </a>
                            <a title="删除" href="javascript:;" onclick="data_management_del(this,'1')" style="text-decoration:none">
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
		name:"home-down-dataguanli",
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
	.guanLiBox{
		padding: 20px;
		margin-top: 20px;
	}
	.guanLiBox .guanLiBoxTop{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #00F7DE;
	}
	.guanLiBox .layui-table{
		 width: 100%;
		margin: 10px 0;
		background-color: #D6EAF6;
	}
	.guanLiBox .layui-table td ,.guanLiBox .layui-table th{
		padding: 9px 15px;
        min-height: 20px;
        line-height: 20px;
        border: 1px solid #94bdd9;
        font-size: 14px;
	}
	.guanLiBox .layui-table .layui-laypage{
		display: inline-block;
        vertical-align: middle;
        margin: 10px 0;
        font-size: 0;
	}  
</style>
