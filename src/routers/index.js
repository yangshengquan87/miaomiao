import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
		movieRouter,
		mineRouter,
		cinemaRouter,
		{path:'/*',redirect:'/movie'}	//path:'/*' 是后面加了没有匹配的到路由，就跳转到 /movie ，而path:'/'，后面少了一个*，如果后面加了没有匹配的到路由就会显示空白，如果是跟域名就会跳转到 /movie
    ]
})