// 空数组,对数组内容进行操作
const arr = []

// 获得对象
const uname = document.querySelector('.uname')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const number = document.querySelector('.number')
const city = document.querySelector('.city')
const tbody = document.querySelector('tbody')
const items = document.querySelectorAll('[name]')
// 录入模块
const info = document.querySelector('.info')
info.addEventListener('submit', function(e) {
    // 禁止表单跳转
    e.preventDefault()

    // 非空判断
    for(let i = 0;i < items.length; i ++){
        if(items[i].value === ''){
            return alert("禁止为空!")
        }
    }

    // 生成对象
    const obj = {
        id: arr.length + 1,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        number: number.value,
        city: city.value
    }
    // 加到数组中
    arr.push(obj)
    // 重置表单
    this.reset()
    render()
})

// 渲染函数
function render() {
    // 先清空tbody
    tbody.innerHTML = ''
    for(let i = 0; i < arr.length; i++) {
        // 新建一个tr对象
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${arr[i].id}</td>
            <td>${arr[i].uname}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].gender}</td>
            <td>${arr[i].number}</td>
            <td>${arr[i].city}</td>
            <td>
                <a href="javascript:" data-id="${i}">删除</a>
            </td>
        `
        // 插入
        tbody.appendChild(tr)
    }
}

// 删除
tbody.addEventListener('click', function(e) {
    if(e.target.tagName === 'A'){
        arr.splice(e.target.dataset.id, 1)
    }
    render()
})