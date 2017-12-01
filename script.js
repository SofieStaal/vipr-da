var appImg = document.querySelector('#mockup');
var appPos = appImg.offsetTop;


window.addEventListener('scroll', function () {
    var scrollPos = scrollY;
    var pos = (appPos - scrollPos)
    console.log(pos)

    if (pos > 478) {
        appImg.style.opacity = '0'
        appImg.style.transition = ".5s"
    } else if (pos < 478) {
        appImg.style.transition = ".5s"
        appImg.style.opacity = '1'
    }
})
