document.addEventListener('DOMContentLoaded', () => {

  let swiper = new Swiper('.swiper-container', {
    loop: true,
    // grabCursor: true,
    navigation: {
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  $('.menuButton').on('click', () => {
    $('.modalMenu').fadeToggle(400);
    $('body').toggleClass('scrollHide')
    $('.burger').toggleClass('burgerActive')
  });

  $('.portfolio__btn').on('click', () => {
    $('.portfolio_moreDisplay').slideToggle(1000);
    $('.portfolio__btn').toggleClass('portfolio__btnHide')
  });
  
});