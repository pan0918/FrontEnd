// 获取对象
tbody = document.querySelector('tbody')
info = document.querySelector('.info')
uname = document.querySelector('.uname')
age = document.querySelector('.age')
gender = document.querySelector('.gender')
number = document.querySelector('.number')
city = document.querySelector('.city')

// 将本地存储数据变换成数组
const arr = JSON.parse(localStorage.getItem('data')) || []

// 渲染函数
function render() {
  // map获取新tr数组
  const newAr = arr.map(function(ele, index) {
    return `
      <tr>
        <td>${ele.stuId}</td>
        <td>${ele.uname}</td>
        <td>${ele.age}</td>
        <td>${ele.gender}</td>
        <td>${ele.number}</td>
        <td>${ele.city}</td>
        <td>
          <a href="javascript:" data-id="${index}">删除</a>
        </td>
      </tr> 
    `
  })

  // 利用join将数据传给tbody
  tbody.innerHTML = newAr.join('')
}

render()

info.addEventListener('submit', function(e) {
  // 禁止页面跳转
  e.preventDefault();
  
  // 判断非空
  if(!uname.value || !age.value || !number.value){
    return alert('输入数据不能为空！')
  }

  arr.push(
    {
      // 注意学号的处理
       stuId: arr.length != 0 ? arr[arr.length - 1].stuId + 1 : 1,
       uname: uname.value,
       age: age.value,
       gender: gender.value,
       number: number.value,
       city: city.value,
     }
  )

  render()
  this.reset()

  // 将数据存储到本地
  localStorage.setItem('data', JSON.stringify(arr))

})

tbody.addEventListener('click', function(e) {
  // 判断是否为按钮
  if(e.target.tagName === 'A'){
    if(confirm('确定要删除嘛')) {
      // 从数组中将数据删除
      arr.splice(e.target.dataset.id, 1)

      // 重新渲染
      render()
      // 重新本地存储
      localStorage.setItem('data', JSON.stringify(arr))
    }
  }
})
