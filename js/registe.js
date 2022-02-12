var uname = document.querySelector("#uname")
var upass = document.querySelector("#upass")
var uupass = document.querySelector("#uupass")
var error = document.querySelector(".error")
var error1 = document.querySelector(".error1")
var error2 = document.querySelector(".error2")
var error3 = document.querySelector('.error3')
var ty = document.querySelector(".ty")
var isError = true;
var btn = document.querySelector(".btn")
var verifyCode = new GVerify("v_container");
var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

btn.onclick = function () {
    if (uname.value.length !== 11) {
        error.innerHTML = "<i class=\"error_icon\"></i>用户名请输入11位手机号码";
        isError = false;
        console.log(1)
        return;
    }else if(!reg.test(uname.value)){
        error.innerHTML = "<i class=\"error_icon\"></i>用户名必须为数字";
        return;
    }
    error.innerHTML = "<i class=\"success_icon\"></i>"


    if (upass.value.length > 20 || upass.value.length < 6) {
        error1.innerHTML = "<i class=\"error_icon\"></i>密码请输入6-20位字符"
        isError = false;
        return;
    }
    error1.innerHTML = "<i class=\"success_icon\"></i>"
    if (uupass.value !== upass.value) {
        error2.innerHTML = "<i class=\"error_icon\"></i>两次密码不一致，请重新操作"
        return;
    }
    else {
        error2.innerHTML = "<i class=\"success_icon\"></i>"
    }
    var res = verifyCode.validate(document.getElementById("yzm").value);
    if (ty.checked === true) {
        if(!res){
            alert("验证码错误");
        }
        else {
            error3.innerHTML = "<i class=\"success_icon\"></i>"
            window.setTimeout("alert(\"注册成功\")",500)
            window.setTimeout("window.location.href = \"login.html\"",500)
        }
    }
    else{
        window.setTimeout("alert(\"请先阅读协议\")",500)
    }
}
