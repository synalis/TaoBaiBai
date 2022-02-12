/**
 * js的封装ajax请求
 * @param url 请求接口地址
 * @param data 请求的参数
 * @param method 请求方式get post
 * @param success 回调函数
 */
function ajax_method(url, method, success, data) {
    var ajax = new XMLHttpRequest();

    // get请求
    if (method == 'get') {
        if (data) {
            url += '?';
            url += data;
        }
        ajax.open(method, url);
        ajax.send();
    } else {
        // post请求
        ajax.open(method, url);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (data) {
            ajax.send(data);
        } else {
            ajax.send();
        }
    }

    // 注册事件
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            success(ajax.responseText);
        }
    }
}

var index_seat = localStorage.getItem("index_seat")
var imm = localStorage.getItem("name")
var zs = document.querySelector(".zs")
var je = document.querySelector(".je")
var jee = document.querySelector(".jee")
var jee1 = document.querySelector(".jee1")
var jee2 = document.querySelector(".jee2")
var top_left = document.querySelector(".top-left")
top_left.innerHTML = imm
zs.innerHTML = index_seat
var jes = parseFloat(index_seat) * 25
je.innerHTML = jes
jee.innerHTML = jes + ".00元"
jee1.innerHTML = jes + ".00元"
jee2.innerHTML = jes + ".00元"
/**
 * 根据支付方式显示信息
 * @param type取值为 (zhifubao || weixin || yikatong)
 */

function showContent(type) {
    if (type == 'zhifubao') {
        document.getElementById('alipay1').style.display = 'flex';
        document.getElementById('alipay2').style.display = 'none';
        document.getElementById("alipay3").style.display = 'none';
    }if (type == 'weixin') {
        document.getElementById('alipay1').style.display = 'none';
        document.getElementById('alipay2').style.display = 'flex';
        document.getElementById("alipay3").style.display = 'none'
    }
    if (type == 'yiwangtong') {
         document.getElementById('alipay1').style.display = 'none';
         document.getElementById('alipay2').style.display = 'none';
         document.getElementById("alipay3").style.display = 'flex'
    }
}