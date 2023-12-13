// 登陆模式切换
const tab_nav = document.querySelector('.tab-nav')
const tab_panes = document.querySelectorAll('.tab-pane')
tab_nav.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
        // 1.切换上方登陆样式
        // 移除前一个的active样式
        document.querySelector('.tab-nav .active').classList.remove('active')
        // 为点击的添加active样式
        e.target.classList.add('active')

        // 2.切换下方内容
        // 获取全部tab-pane,将所有隐藏
        for(let i = 0; i < tab_panes.length; i ++) {
            tab_panes[i].style.display = 'none'
        }
        // 点击的显示
        tab_panes[e.target.dataset.id].style.display = 'block'
    }
})

// 表单登陆
const form = document.querySelector('form')
const agree = document.querySelector('[name=agree]')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // 判断是否勾选同意
    if(!agree.checked) {
        return alert("请先同意协议！")
    }

    // 本地存储用户名
    localStorage.setItem('userName', document.querySelector('[name=username]').value)
    // 跳转首页
    location.href = './index.html'
})


