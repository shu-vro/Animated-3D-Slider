var swiper = new Swiper('.swiper-container', {
    // slidesPerView: 3,
    // slidesPerColumn: 2,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    effect: 'cube',
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});