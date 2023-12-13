// 获取对象
const li1 = document.querySelector('.xtx_navs li:first-child')
const li2 = li1.nextElementSibling

function render() {
    const userName = localStorage.getItem('userName')
    if(userName) {
        li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user">${userName}</i></a>`
        li2.innerHTML = '<a href="javascript:;">退出登录</a>'
    } 
    else {
        li1.innerHTML = '<a href="./login.html">请先登录</a>'
        li2.innerHTML = '<a href="./register.html">免费注册</a>'
    }
}

render()

// 退出登陆
li2.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
        localStorage.removeItem('userName')
        render()
    }
})