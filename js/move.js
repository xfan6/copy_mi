function getStyle(obj, name) { //name传字符串
    if (window.getComputedStyle) {
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，没有getComputedStyle()方法
        return obj.currentStyle[name];
    }
}

function move(obj, attr, target, speed, callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);
    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));

    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        //获取box原来的left值
        var oldValue = parseInt(getStyle(obj, attr));

        //在旧值得基础上增加
        var newValue = oldValue + speed;

        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {

            newValue = target;
        }
        //将新值设置给box
        obj.style[attr] = newValue + "px";

        //当元素移动到执行动画目标时，使其停止执行动画
        if (newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            //有callback执行，没有的话不执行  这样参数可不写
            callback && callback();
        }
    }, 30);
}