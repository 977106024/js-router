
	* 路由hash 与  history

	1. 地址栏有#号 因为浏览器会忽略#后面的内容 不会发送给服务器 
    vue就是利用#后面的内容来做路由 #号后面变动会触发onhashchange事件 location.hash获取hash
	2. history 使用 pushState（），replaceState（）对浏览器历史记录做修改也不会发送，
    （需要后端支持 因为页面刷新的时候（没有#号）会把地址+路由都发送给服务器 服务器没有这个地址就会404 所以后端把所有路由都重定向到index.html 让前端来处理）location.pathname获取路由
	3. 优缺点 hash seo不友好 忽略#后面 搜索引擎怎么收录页面 history ie8不支持

