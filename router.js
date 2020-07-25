function route(){
    var app = document.getElementById('app')
    var wrap = document.getElementsByClassName('wrap-p')[0]

    //获取路由#
    let hash = location.hash.substr(1) || 1 //给个默认路由

    //获取界面
    var p = document.querySelector(`.p${hash}`)

    if(app.children.length>0){
        wrap.appendChild(app.children[0])
    }

    //路由是否存在
    if(!p){
        p = document.querySelector('.p404')
    }

    //更新dom
    app.appendChild(p)
}

route()

//监听hash改变
window.addEventListener('hashchange',function(){
   route()
})


