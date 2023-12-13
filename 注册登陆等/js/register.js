(function() {
    // 发送验证码模块
    const code = document.querySelector('.code')
    let flag = true //通过一个变量来控制按钮的点击
    code.addEventListener('click', function() {
        if(flag) {
            let i = 5
            flag = false
            code.innerHTML = `0${i}秒后重新获取`
            let timeId = setInterval(function() {
                i--
                code.innerHTML = `0${i}秒后重新获取`

                if(i === 0) {
                    clearInterval(timeId)
                    code.innerHTML = '重新获取'
                    flag = true
                }
            }, 1000)
        }
    })
})();

// 用户名称模块
const username = document.querySelector('[name=username]')
username.addEventListener('change', verifyName)
function verifyName() {
    const span = username.nextElementSibling
    // 定义规则
    const reg = /^[a-zA-Z0-9-_]{6,10}$/

    if(!reg.test(username.value)) {
        span.innerHTML = '输入错误!输入格式为6~10位数字字母-_!'
        return false
    }   
    span.innerHTML = ''
    return true
}

// 手机号模块
const phone = document.querySelector('[name=phone]')
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
    const span = phone.nextElementSibling
    // 定义规则
    const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

    if(!reg.test(phone.value)) {
        span.innerHTML = '输入错误!输入格式为11位数字!'
        return false
    }   
    span.innerHTML = ''
    return true
}

// 验证码模块
const code = document.querySelector('[name=code]')
code.addEventListener('change', verifyCode)
function verifyCode() {
    const span = code.nextElementSibling
    // 定义规则
    const reg = /^\d{6}$/

    if(!reg.test(code.value)) {
        span.innerHTML = '输入错误!输入格式为6位数字!'
        return false
    }   
    span.innerHTML = ''
    return true
}

// 密码模块
const password = document.querySelector('[name=password]')
password.addEventListener('change', verifyPwd)
function verifyPwd() {
    const span = password.nextElementSibling
    // 定义规则
    const reg = /^[a-zA-Z0-9-_]{6,20}$/

    if(!reg.test(password.value)) {
        span.innerHTML = '输入错误!输入格式为6~20位数字字母-_!'
        return false
    }   
    span.innerHTML = ''
    return true
}

// 再次输入密码模块
const confirm = document.querySelector('[name=confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    const span = confirm.nextElementSibling

    if(confirm.value !== password.value) {
        span.innerHTML = '两次密码输入不一致!'
        return false
    }   
    span.innerHTML = ''
    return true
}

// 同意模块
const agree = document.querySelector('.icon-queren')
agree.addEventListener('click', function() {
    agree.classList.toggle('icon-queren2')
})

// 提交模块
const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    
    if(!agree.classList.contains('icon-queren2')){
        alert('请同意用户协议！')
        e.preventDefault()
    }

    if(!verifyName()) e.preventDefault()
    if(!verifyPhone()) e.preventDefault()
    if(!verifyCode()) e.preventDefault()
    if(!verifyPwd()) e.preventDefault()
    if(!verifyConfirm()) e.preventDefault()
})