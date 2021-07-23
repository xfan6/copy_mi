function tabS(obj) {
    var tabWrap = document.querySelector(obj);
    var tabList = tabWrap.querySelectorAll(".tab-list li");
    var tabUl = tabWrap.querySelectorAll(".brick-list");

    tabList[0].classList.add("tab-active");
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].num = i;
        tabList[i].onmouseover = function() {
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].className = "";
            }
            tabList[this.num].classList.add("tab-active");
            for (var j = 0; j < tabUl.length; j++) {
                tabUl[j].classList.add("hide");
            }
            tabUl[this.num].classList.remove("hide");
        }
    }
}
tabS(".home-appliances-box");
tabS(".home-ability-box");
tabS(".home-match-box");
tabS(".home-mountings-box");
tabS(".home-rim-box");