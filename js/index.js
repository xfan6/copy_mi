// app
var J_app = document.getElementById("j-app"),
    appCode = document.querySelector(".appcode");
J_app.onmouseover = function() {
    appCode.style.height = "148px";
    J_app.classList.add('active');
}
J_app.onmouseout = function() {
    appCode.style.height = "0";
    J_app.classList.remove('active');
}

/*购物车*/
var j_menu = document.querySelector(".j-menu"),
    site_Shop = document.querySelector(".site-shop"),
    cartColor = document.querySelector(".cart");
site_Shop.onmouseover = function() {
    j_menu.style.height = "99px";
    cartColor.classList.add("cart-color");
}
site_Shop.onmouseout = function() {
        j_menu.style.height = "0";
        cartColor.classList.remove("cart-color");
    }
    /*搜索框*/
var searchText = document.querySelector(".search-text"),
    searchBtn = document.querySelector(".search-btn");
searchText.onfocus = function() {
    searchText.classList.add("allBorder");
    searchBtn.classList.add("allBorder");
}
searchText.onblur = function() {
        searchText.classList.remove("allBorder");
        searchBtn.classList.remove("allBorder");
    }
    /*nav - js*/
var headerNavMenu = document.querySelectorAll(".header-nav-menu"),
    navItem = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItem.length; i++) {
    navItem[i].index = i;
    navItem[i].onmouseover = function() {
        for (var i = 0; i < headerNavMenu.length; i++) {
            headerNavMenu[i].style.display = "none";
        }
        headerNavMenu[this.index].style.display = "block";
        headerNavMenu[this.index].style.borderTop = "1px solid #e0e0e0";
        headerNavMenu[this.index].classList.add("menuHeight");
    }
    navItem[i].onmouseout = function() {
        headerNavMenu[this.index].classList.remove("menuHeight");
        headerNavMenu[this.index].style.border = "none";
    }
}

// 全部商品分类
var category_list = document.querySelectorAll(".category-list"),
    commodity = document.querySelectorAll(".commodity");
for (var i = 0; i < category_list.length; i++) {
    category_list[i].index = i;
    category_list[i].onmouseover = function() {
        for (var i = 0; i < commodity.length; i++) {
            commodity[i].style.display = "none";
        }
        commodity[this.index].style.display = "block";
        category_list[this.index].classList.add("listBcolor");

    }
    category_list[i].onmouseout = function() {
        category_list[this.index].classList.remove("listBcolor");
        commodity[this.index].style.display = "none";
    }
}
//倒计时
var spans = document.querySelectorAll(".countdown span");
//先调用一次，防止刷新空白
count();
// 定时器
var times = setInterval(count, 1000);

function count() {
    var date = new Date();
    var InDate = new Date("2021/2/5 19:00:00");
    var sInDate = (InDate.getTime() - date.getTime()) / 1000;
    //小时
    var hr = parseInt(sInDate / 60 / 60 % 24);
    //分钟
    var min = parseInt(sInDate / 60 % 60);
    //秒
    var sec = parseInt(sInDate % 60);
    //添加成为00
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    //给span赋值
    spans[0].innerHTML = hr;
    spans[1].innerHTML = min;
    spans[2].innerHTML = sec;
    //关闭定时器，使时间变为00：00：00
    if (sInDate <= 0) {
        clearInterval(times);
        spans[0].innerHTML = "00";
        spans[1].innerHTML = "00";
        spans[2].innerHTML = "00";
    }
}

//微信
var J_followWxImg = document.getElementById("J_followWxImg"),
    J_followWx = document.getElementById("J_followWx");
J_followWx.onmouseover = function() {
    J_followWxImg.style.display = "block";
}
J_followWx.onmouseout = function() {
    J_followWxImg.style.display = "none";
}

//底部图片切换
var J_safeAuth = document.querySelector(".J_safeAuth");
setInterval(function() {
    J_safeAuth.classList.add("active");
}, 2000);
setInterval(function() {
    J_safeAuth.classList.remove("active");
}, 4000);

//回顶部
var J_atop = document.getElementById("J_atop");
// 当网页向下滑动 854px 出现"返回顶部" 按钮
window.onscroll = function() { scrollFun() };

function scrollFun() {
    if (document.body.scrollTop > 854 || document.documentElement.scrollTop > 854) {
        J_atop.classList.add("active");
    } else {
        J_atop.classList.remove("active");
    }
}

function topFun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//点击返回顶部
J_atop.onclick = function() {
    topFun();
}