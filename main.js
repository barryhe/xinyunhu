$(function() {
    $("#i1").slippry();
    var demo1 = $("#i1").slippry({
        transition: 'fade',
        useCSS: true,
        speed: 500,
        pause: 5000,
        //auto: true,
        preload: 'visible',
        autoHover: false
    });
    document.onkeydown = function (e) {
        var keyCode = e.keyCode;
        if(keyCode == 37) {
            demo1.goToPrevSlide();
            return false;
        }
        if(keyCode == 39) {
            demo1.goToNextSlide();
            return false;
        }
    };
}); 