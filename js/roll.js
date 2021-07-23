//小米秒杀
var swiper_slide = document.querySelectorAll(".swiper-slide"),
    swiper_wrapper = document.querySelector(".swiper-wrapper"),
    btn_left = document.querySelector(".swiper-controls .swiper-flashsale-prev"),
    btn_right = document.querySelector(".swiper-controls .swiper-flashsale-next"),
    iNow = 0, //记录当前位置，每4个一组
    count = Math.ceil(13 / 4) - 1, //最大位置下标
    timers = null;
//动态生成ul的宽
var swiperLiWidth = swiper_slide[0].offsetWidth + 14;
swiper_wrapper.style.width = swiperLiWidth * (swiper_slide.length + 1) + "px";
//启动定时器，自己进行滚动
timers = setInterval(function() {
    iNow++;
    if (iNow > count) {
        iNow = 0;
    }
    tab();
    // console.log(iNow);
}, 5000);
btn_right.onclick = function() {
    clearInterval(timers);
    iNow++;
    // 设置index的范围
    iNow = iNow >= count ? count : iNow;
    tab();
}
btn_left.onclick = function() {
    clearInterval(timers);
    iNow--;
    // 设置index的范围
    iNow = iNow <= 0 ? 0 : iNow;
    tab();
}
tab(); //先调用一次，让箭头样式先改变

function tab() {
    //设值箭头样式
    iNow == 0 ? btn_left.classList.add("swiper-button-disabled") : btn_left.classList.remove("swiper-button-disabled");
    iNow == count ? btn_right.classList.add("swiper-button-disabled") : btn_right.classList.remove("swiper-button-disabled");
    //移动的距离
    var iTarget = iNow == count ? -swiperLiWidth * 4 * 2 - swiperLiWidth : -swiperLiWidth * 4 * iNow;
    swiper_wrapper.style.transitionDuration = "1000ms";
    swiper_wrapper.style.transform = 'translate3d(' + iTarget + "px" + ' ,0,0)';
}