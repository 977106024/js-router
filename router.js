var app = document.getElementById('app')
var wrap = document.getElementsByClassName('wrap-p')[0]

 //获取路由#
let hash = location.hash.substr(1) || 1 //给个默认路由

//获取界面
var p = document.querySelector(`.p${hash}`)

//路由是否存在
if(p){
    //更新dom
    app.appendChild(p)
}else{
    let p404 = document.querySelector('.p404')
    console.log(p404)
    app.appendChild(p404)
}


//监听hash改变
window.addEventListener('hashchange',function(){
    //获取路由#
    let hash = location.hash.substr(1)

    //获取界面
    var p = document.querySelector(`.p${hash}`)
    

    //路由是否存在
    if(p){
        //更新dom
        wrap.appendChild(app.children[0]) //把东西再放回去 不能删除了
        app.appendChild(p)
    }else{
        let p404 = document.querySelector('.p404')
        console.log(p404)
        app.appendChild(p404)
    }
})
