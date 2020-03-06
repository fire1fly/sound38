document.addEventListener('DOMContentLoaded', () => {

  let swiper = new Swiper('.swiper-container', {
    loop: true,
    // grabCursor: true,
    navigation: {
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });

  var rellax = new Rellax('.rellax');

  $('.menuButton').on('click', () => {
    $('.modalMenu').fadeToggle(400);
    $('body').toggleClass('scrollHide')
    $('.burger').toggleClass('burgerActive')
  });
  
});