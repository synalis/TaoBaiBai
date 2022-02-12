var select_tags = document.querySelector(".select-tags").querySelectorAll("a")
var sort_bar = document.querySelectorAll(".sort-bar")
for (i=0;i<select_tags.length-1;i++) {
    select_tags[i].setAttribute("index",i);
    select_tags[i].onclick = function () {
        for (i=0;i<select_tags.length-1;i++) {
            select_tags[i].className = "";
        }
        this.className = "current"
        var a1 = this.getAttribute("index");
        for (i=0;i<sort_bar.length;i++) {
            sort_bar[i].style.display = "none";
        }
        sort_bar[a1].style.display = "block";
    }
}
// 点击图片到达detail2页面
var imm = document.querySelectorAll(".ss1")
var bb3 = document.querySelectorAll(".sort-bar-li")
var gg3 = document.querySelectorAll(".movie_card_list")
var cc3 = document.querySelectorAll(".bt-r")
var dd3 = document.querySelectorAll(".bt-i")
for (i=0;i<imm.length;i++){
    dao(imm[i],bb3[i],gg3[i],cc3[i],dd3[i])
}
function dao(obj1,obj2,obj3,obj4,obj5){
    var imm1 = obj1.innerHTML
    var imm2 = obj3.innerHTML
    var imm3 = obj4.innerHTML
    var imm4 = obj5.innerHTML
    obj2.onclick = function (){
        window.open("detail2.html","_blank")
        localStorage.setItem("name",imm1)
        localStorage.setItem("name2",imm2)
        localStorage.setItem("name3",imm3)
        localStorage.setItem("name4",imm4)
    }
}

