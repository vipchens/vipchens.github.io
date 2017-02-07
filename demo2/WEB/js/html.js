$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay : 5000,
        loop : true,
    });

    var mySwiper = new Swiper('.swiper-container2',{
            autoplay : 5000,
            slidesPerView : 'auto',
            slidesPerViewFit : false,
            paginationClickable: true,
            slidesPerView: 3,
            slidesPerGroup : 3,
            loop : true,
        })
})