<template>
	<div class="ceBox">
	<ul class="layui-nav layui-nav-tree layui-inline" lay-filter="side" >
        <li class="layui-nav-item layui-nav-itemed">
        <a  href="javascript:;"><i class="layui-icon" style=" margin-right: 12px; font-size: 20px;">&#xe62d;</i>数据管理</a>
        <dl class="layui-nav-child">
          <dd><router-link tag="a" to="/yuJing" href="javascript:;">预警信息管理</router-link></dd>
          <dd><router-link tag="a" to="/guanLi" href="javascript:;">数据管理</router-link></dd>
          <dd><router-link tag="a" to="/tongJi" href="javascript:;">数据统计</router-link></dd>
        </dl>
        </li>
        <li class="layui-nav-item"><router-link tag="a" to="/user" ><i class="layui-icon" style=" margin-right: 12px; font-size: 20px;">&#xe613;</i>用户管理</router-link></li>
        <li class="layui-nav-item"><router-link tag="a" to="/jiaose" ><i class="layui-icon" style=" margin-right: 12px; font-size: 20px;">&#xe612;</i>角色管理</router-link></li>
        <li class="layui-nav-item">
          <a href="javascript:;"><i class="layui-icon" style=" margin-right: 12px; font-size: 20px;">&#xe629;</i>网站信息管理</a>
            <dl class="layui-nav-child">
              <dd><router-link tag="a" to="/index" >首页</router-link>
              <dd><router-link tag="a" to="/own" >关于我们</router-link></dd>
              <dd><router-link tag="a" to="/news" >心理新闻</router-link></dd>
	          <dd><router-link tag="a" to="/download" >资源下载</router-link></dd>
            </dl>
        </li>
    </ul>
    </div>	
</template>

<script>
	export default{
		name:"home-down-ce"
	}
</script>

<style scoped>
	.ceBox{
		background: #393D49;
	}
	.layui-inline{
		border-bottom: 0 !important;
	}
	.layui-inline .layui-nav-child dd a{
		margin-left: 30px;
	}
</style>
