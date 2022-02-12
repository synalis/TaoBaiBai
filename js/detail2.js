var str = localStorage.getItem("name")
var str2 = localStorage.getItem("name2")
var str3 = localStorage.getItem("name3")
var str4 = localStorage.getItem("name4")
var img_shadows = document.querySelector(".img-shadows")
var movie_container = document.querySelector(".movie-container")
var index_left = document.querySelector(".index-left")
var stone_font = document.querySelector(".stonefont")
img_shadows.innerHTML = str
movie_container.innerHTML = str2
index_left.innerHTML = str3
stone_font.innerHTML = str4
// stone_font1.innerHTML = str5

var tap_control = document.querySelector(".tap-control").querySelectorAll("a");
var movie = document.querySelectorAll(".movie")
for (i = 0; i < tap_control.length; i++) {
    tap_control[i].setAttribute("index", i);
    tap_control[i].onclick = function () {
        for (i = 0; i < tap_control.length; i++) {
            tap_control[i].className = "tap-control-item";
        }
        this.className = "current tap-control-item"
        var a1 = this.getAttribute("index");
        for (i = 0; i < movie.length; i++) {
            movie[i].style.display = "none";
        }
        movie[a1].style.display = "block";
    }
}
// 点击图片到达detail页面
var imm = document.querySelectorAll(".s1")
var bb3 = document.querySelectorAll(".bb3")
var gg3 = document.querySelectorAll(".movie_card_list")
var cc3 = document.querySelectorAll(".bt-r")
var dd3 = document.querySelectorAll(".bt-i")
var ss3 = document.querySelectorAll(".bt-ii")
for (i = 0; i < imm.length; i++) {
    dao(imm[i], bb3[i], gg3[i], cc3[i], dd3[i], ss3[i])
}

function dao(obj1, obj2, obj3, obj4, obj5, obj6) {
    var imm1 = obj1.innerHTML
    var imm2 = obj3.innerHTML
    var imm3 = obj4.innerHTML
    var imm4 = obj5.innerHTML
    var imm5 = obj6.innerHTML
    var in1 = 1
    obj2.onclick = function () {
        window.open("seat/index.html", "_blank")
        localStorage.setItem("name", imm1)
        localStorage.setItem("name2", imm2)
        localStorage.setItem("name3", imm3)
        localStorage.setItem("name4", imm4)
        localStorage.setItem("name5", imm5)
        localStorage.setItem("in",in1)
    }
}

