// 下拉菜单功能
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// 自动轮播图功能
var main = document.querySelector(".main");
var swiper1 = document.querySelector(".swiper-button-next");
var swiper2 = document.querySelector(".swiper-button-prev");
var mainWidth = main.offsetWidth;
// 1.鼠标经过，显示隐藏左右按钮
main.addEventListener('mouseenter', function () {
    swiper1.style.display = 'block';
    swiper2.style.display = 'block';
    clearInterval(timer);
    timer = null;
})
main.addEventListener('mouseleave', function () {
    swiper1.style.display = 'none';
    swiper2.style.display = 'none';
    timer = setInterval(function () {
        //手动调用点击事件
        swiper1.click();
    }, 5000)
})
// 自动播放轮播图
var timer = setInterval(function () {
    //手动调用点击事件
    swiper1.click();
}, 5000)
var fuyuan = setInterval(function () {
    for (i=0;i<5;i++) {
        swiper2.click()
    }
},25000)

// 切换热映
var set = document.querySelector(".set").querySelectorAll("a");
var movie = document.querySelectorAll(".movie")
for (i=0;i<set.length;i++) {
    set[i].setAttribute("index",i);
    set[i].onclick = function () {
        for (i=0;i<set.length;i++) {
            set[i].className = "";
        }
        this.className = "current"
        var a1 = this.getAttribute("index");
        for (i=0;i<movie.length;i++) {
            movie[i].style.display = "none";
        }
        movie[a1].style.display = "block";
    }

}
//切换排行榜
var pul_li = document.querySelector(".pul").querySelectorAll("li");
var pul_li_div = document.querySelector(".pul").querySelectorAll("div")
for (i=0;i<pul_li.length;i++) {
        pul_li[i].onmouseover = function () {
            //因为div的GG和a的GG所以所有的的a和div都应该隐藏，但是因为cur.a和cur.div的display为block 所以层级更高，
            // 把GG的display=block压住，但转换为ncur，没有了cur.a和cur.div，所以GG的层级高所以隐藏
            this.className = "cur";
            this.style.display = "block"
        }
            pul_li[i].onmouseout = function () {
                this.className = "ncur"
                // this.style.display = "none"
            }

            // pul_li_div.style.display = "block"

}
// 点击图片到达detail页面
var imm = document.querySelectorAll(".s1")
var bb3 = document.querySelectorAll(".bb3")
var gg3 = document.querySelectorAll(".movie_card_list")
var cc3 = document.querySelectorAll(".bt-r")
var dd3 = document.querySelectorAll(".bt-i")
var ss3 = document.querySelectorAll(".bt-ii")
for (i=0;i<imm.length;i++){
    dao(imm[i],bb3[i],gg3[i],cc3[i],dd3[i],ss3[i])
}
function dao(obj1,obj2,obj3,obj4,obj5,obj6){
    var imm1 = obj1.innerHTML
    var imm2 = obj3.innerHTML
    var imm3 = obj4.innerHTML
    var imm4 = obj5.innerHTML
    var imm5 = obj6.innerHTML
    obj2.onclick = function (){
        window.open("detail.html","_blank")
        localStorage.setItem("name",imm1)
        localStorage.setItem("name2",imm2)
        localStorage.setItem("name3",imm3)
        localStorage.setItem("name4",imm4)
        localStorage.setItem("name5",imm5)
    }
}

