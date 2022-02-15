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
    obj2.onclick = function () {
        window.open("detail.html", "_blank")
        localStorage.setItem("name", imm1)
        localStorage.setItem("name2", imm2)
        localStorage.setItem("name3", imm3)
        localStorage.setItem("name4", imm4)
        localStorage.setItem("name5", imm5)
    }
}
