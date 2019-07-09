import Vue from 'vue'
import Router from 'vue-router'
import HomeDownData from "../components/home-down-right-down/home-down-data.vue"
import HomeDownYuJing from "../components/home-down-right-down/home-down-yujing.vue"
import HomeDownDataGuanLi from "../components/home-down-right-down/home-down-dataguanli.vue"
import HomeDownTongJi from "../components/home-down-right-down/home-down-tongji.vue"
import HomeDownUser from "../components/home-down-right-down/home-down-user.vue"
import HomeDownJiaose from "../components/home-down-right-down/home-down-jiaose.vue"
import HomeDownIndex from "../components/home-down-right-down/home-down-index.vue"
import HomeDownOwn from "../components/home-down-right-down/home-down-own.vue"
import HomeDownNews from "../components/home-down-right-down/home-down-news.vue"
import HomeDownDownload from "../components/home-down-right-down/home-down-download.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
		  {
				path:"/",
				redirect:"/data"
			},
		  {
				path:"/data",
				name:"HomeDownData",
				component:HomeDownData
			},
			{
				path:"/yuJing",
				name:"home-down-yujing",
				component:HomeDownYuJing
			},
			{
				path:"/guanLi",
				name:"home-down-dataguanli",
				component:HomeDownDataGuanLi
			},
			{
				path:"/tongJi",
				name:"home-down-tongji",
				component:HomeDownTongJi
			},
			{
				path:"/user",
				name:"home-down-user",
				component:HomeDownUser
			},
			{
				path:"/jiaose",
				name:"home-down-jiaose",
				component:HomeDownJiaose
			},
			{
				path:"/index",
				name:"home-down-index",
				component:HomeDownIndex
			},
			{
				path:"/own",
				name:"home-down-own",
				component:HomeDownOwn
			},
			{
				path:"/news",
				name:"home-down-news",
				component:HomeDownNews
			},
			{
				path:"/download",
				name:"home-down-download",
				component:HomeDownDownload
			}
	]
})
