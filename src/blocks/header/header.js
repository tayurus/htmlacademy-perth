$(document).ready(function(){
    $(".header__menu").click(function(){
        $(".header__menu-item").first().toggleClass("rotate45").toggleClass("background_tomato");
        $(".header__menu-item").first().next().toggleClass("rotate_minus45").toggleClass("background_tomato");
        $(".header__menu-item").first().next().next().toggle();
        $(".container.container_maxWidth_740.container_center.container_marginTop_40").toggleClass("rotateY_180");
        $(".container.container_maxWidth_740.container_center.container_marginTop_40").toggleClass("rotateY_0");

        setTimeout(function(){
            $(".container.container_center.container__menu").siblings().toggle();
            $(".container.container_center.container__menu").toggleClass("hidden");
        },350);

    });
})
