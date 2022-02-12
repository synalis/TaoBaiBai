var uname = document.querySelector("#uname")
var upass = document.querySelector("#upass")
var error = document.querySelector(".error")
var error2 = document.querySelector(".error2")
var isError = true;
var ty = document.querySelector(".ty")
var btn = document.querySelector(".btn")
var verifyCode = new GVerify("v_container");
// var reg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
var pass = 123456
var name = 15622135574
btn.onclick = function () {
    if (uname.value !== name) {
        error.innerHTML = "<i class=\"error_icon\"></i>用户名不存在";
        isError = false;
        console.log(1)
        return;
    }
    else if (parseFloat(upass.value) !== pass) {
        error.innerHTML = "<i class=\"success_icon\"></i>"
        error2.innerHTML = "<i class=\"error_icon\"></i>密码错误请重新输入";
        return;
    }
    error.innerHTML = "<i class=\"success_icon\"></i>"
    error2.innerHTML = "<i class=\"success_icon\"></i>"

    var res = verifyCode.validate(document.getElementById("yzm").value);
    if (ty.checked === true) {
        if(!res){
            alert("验证码错误");
        }
        else {

            window.setTimeout("alert(\"注册成功\")",500)
            window.setTimeout("window.location.href = \"index.html\"",500)
        }
    }
    else{
        window.setTimeout("alert(\"请先阅读协议\")",500)
    }
}


