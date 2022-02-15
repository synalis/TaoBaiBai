var arrow_icon = document.querySelector(".arrow_icon");
var xia = document.querySelector(".xia");
arrow_icon.onmouseover = function () {
    xia.style.display = "block"
}
arrow_icon.onmouseout = function () {
    xia.style.display = "none"
}
//遮罩层
// var movie_card = document.querySelectorAll(".movie_card")
// var movie_card_info = document.querySelectorAll(".movie_card_info")
// for (i=0;i<movie_card.length;i++) {
//     gg(movie_card[i],movie_card_info[i])
// }
// function gg(obj1,obj2){
//     obj1.onmouseenter = function (){
//         this.className = "movie_card aa2"
//         animate(obj2,0,function () {
//             obj1.onmouseleave = function (){
//                 animate(obj2,-10,function () {
//                     obj1.className = "movie_card aa1"
//                 })
//             }
//         })
//     }
// }
$(".movie_card").mouseenter(function () {
    var v1 = $(".movie_card").index($(this));
    $(".movie_card_info").eq(v1).fadeIn(700)
})
$(".movie_card").mouseleave(function () {
    var v2 = $(".movie_card").index($(this));
    $(".movie_card_info").eq(v2).fadeOut(700)
})


// 缓动动画函数封装obj目标对象 target 目标位置
// 思路：
// 1. 让盒子每次移动的距离慢慢变小， 速度就会慢慢落下来。
// 2. 核心算法：(目标值 - 现在的位置) / 10 做为每次移动的距离 步长
// 3. 停止的条件是： 让当前盒子位置等于目标位置就停止定时器
function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把步长改为整数  不出现小数的情况
        var step = (target - obj.offsetTop) / 10;
        // 如果前进小数则往上补  负数则往下取
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetTop == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.top = obj.offsetTop + step + 'px';
    }, 15);
}

// var angle = document.querySelector(".angle")
// document.addEventListener("mousemove",function (e) {
//     var sl = document.body.scrollTop || document.documentElement.scrollTop
//     var st = document.body.scrollLeft || document.documentElement.scrollLeft
//     var x = e.clientX
//     var y = e.clientY
//     angle.style.top = y + sl - 50 + "px"
//     angle.style.left = x + st - 40 + "px"
// })

let data = [
    {name: "黑客帝国"},
    {name: "李茂扮太子"},
    {name: "穿过寒冬拥抱你"},
    {name: "汪汪队立大功"},
    {name: "魔法满屋"},
    {name: "狙击手"},
    {name: "喜羊羊与灰太狼之筐出未来"},
    {name: "长津湖之水门桥"},
    {name: "小虎墩大英雄"},
    {name: "这个杀手不太冷静"},
    {name: "爱情神话"},
]
function isExist(data,va1) {
     return data.findIndex((item) => item.name.includes(va1))
}
$(".ss").click(function () {
    let key = $(".sr").val()
    console.log(key)
    var findData = isExist(data,key)
    console.log(findData)
    $(".bb3").eq(findData).trigger("click")
})
$(".hotwords").on('click', "a" ,function (){
    var x = $(".hotwords").find("a").index($(this))
    $(".bb3").eq(x).trigger("click")
})
// let key = "狙"
    // 根据关键词查找出来的数据

// let data = [
//     {name: "狙击手"},
//     {name: "笨小孩"},
//     {name: "四海"},
//     {name: "海洋"},
//     {name: "长津湖"},
//     {name: "笨小孩"},
// ]
// function isExist(data,va1) {
//     return data.indexOf(va1)
// }
// $(".ss").click(function () {
//     let key = $(".sr").val()
//     console.log(key)
//     let findData = isExist(data,key)
//     console.log(findData)
// })
// console.log($(".bb3"))