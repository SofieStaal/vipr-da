/*var appImg = document.querySelector('#mockup');
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
})*/


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() - 700;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.fadeItem').each(function () {
        var isInView = isScrolledIntoView(this);
        if (isInView) {
            $(this).attr('data-in-view', 'true');
        } else {
            //$(this).attr('data-in-view', 'false');
        }
    });

});
