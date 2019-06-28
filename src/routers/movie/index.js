export default{
	path : '/movie',component : () => import('@/views/Movie'),		// @ 符号指的是src目录
	children:[	//子路由
		{
			'path':'city',	// city不要加斜杠 
			component : () => import('@/components/City')
		},
		{
			'path':'nowPlaying',
			component : () => import('@/components/NowPlaying')
		},
		{
			'path':'comingSoon',
			component : () => import('@/components/ComingSoon')
		},
		{
			'path':'search',
			component : () => import('@/components/Search')
		},
		{//当路由跳转到 /movie 的时候重定向到 movie/nowPlaying
			'path':'/movie',
			'redirect':'movie/nowPlaying'
		}
	]
}


