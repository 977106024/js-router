function route(){
    var app = document.getElementById('app')
    var wrap = document.getElementsByClassName('wrap-p')[0]

    //获取路由#
    let pathname = location.pathname.substr(1) || 1

    //获取界面
    var p = document.querySelector(`.p${pathname}`)

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


var links = document.querySelectorAll('a')
for(let a of links){
    a.addEventListener('click',function(e){
        e.preventDefault()
        const href = a.getAttribute('href')
        history.pushState(null,`p${href}页面`,href)

        onStateChange()
    })
}

function onStateChange(){
    route()
}