// 获取三个盒子
const small = document.querySelector('.small')
const middle = document.querySelector('.middle')
const large = document.querySelector('.large')

// 添加事件监听
small.addEventListener('mouseover', function(e) {
  if(e.target.tagName === 'IMG') {
    // 转移active样式
    document.querySelector('.small .active').classList.remove('active')
    e.target.parentNode.classList.add('active')   //注意父亲节点
    // 更换middle内容
    middle.querySelector('img').src = e.target.src
      // 修改大盒子内容
    large.style.backgroundImage = `url(${e.target.src})`
  }
})

// 对大盒子进行处理
middle.addEventListener('mouseenter', show)
middle.addEventListener('mouseleave', hide)
let timeId = 0

function show() {
  // 先停止定时器
  clearTimeout(timeId)
  large.style.display = 'block'
}

function hide() {
  // 鼠标离开0.2s后消失
  timeId = setTimeout(function() {
    large.style.display = 'none'
  }, 200)
}

// 鼠标在大盒子上时不消失,离开时消失
large.addEventListener('mouseenter', show)
large.addEventListener('mouseleave', hide)

// 鼠标在middle盒子上时显示黑色遮罩层
const layer = document.querySelector('.layer')
middle.addEventListener('mouseenter', function() {
  layer.style.display = 'block'
})
middle.addEventListener('mouseleave', function() {
  layer.style.display = 'none'
})

// 黑色遮罩层随鼠标移动
middle.addEventListener('mousemove', function(e) {
  // 获取相对移动的X值
  let x = e.pageX - middle.getBoundingClientRect().left
  // 获取相对移动的Y值
  let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

  // 限定黑色遮罩层位置
  if(x >= 0 && x <= 400 && y >= 0 && y <= 400) {
    let mx = 0, my = 0
    if(x < 100) mx = 0
    if(x >= 100 && x <= 300) mx = x - 100
    if(x > 300) mx = 200

    if(y < 100) my = 0
    if(y >= 100 && y <= 300) my = y - 100
    if(y > 300) my = 200

    layer.style.left = mx + 'px'
    layer.style.top = my + 'px'

    // 大盒子移动
    large.style.backgroundPositionX = -2 * mx + 'px'
    large.style.backgroundPositionY = -2 * my + 'px'
  }
})

