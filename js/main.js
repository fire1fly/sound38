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
  
});