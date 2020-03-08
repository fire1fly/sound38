document.addEventListener('DOMContentLoaded', () => {

  let blockPort = document.querySelector('.portfolio-block');
  let portBtn = document.querySelector('.portfolio__btn');
  let bodyWidth = document.body.clientWidth;

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

  var rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
 
  const portHandler = event => {
    let target = event.target;
    console.log(target);
  };

  blockPort.addEventListener('click', portHandler);

  $('.menuButton').on('click', () => {
    $('.modalMenu').fadeToggle(400);
    $('body').toggleClass('scrollHide')
    $('.burger').toggleClass('burgerActive')
  });

  $('.trigger').on('click', function() {
    $('.modalPort').toggleClass('open');
    $('.main-container').toggleClass('blur-it');
    return false;
  });

  $('.portfolio__btn').on('click', () => {
    if (bodyWidth > 1170) {
      if (portBtn.classList.contains('portfolio__btnHide')) {
        $('.portfolio-block').css('height', '505px');
        $('.portfolio__btn').toggleClass('portfolio__btnHide');
      } else {
        $('.portfolio-block').css('height', '1600px');
        $('.portfolio__btn').toggleClass('portfolio__btnHide');
      }
    } else if (bodyWidth >=800 ) {
        if (portBtn.classList.contains('portfolio__btnHide')) {
          $('.portfolio-block').css('height', '505px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        } else {
          $('.portfolio-block').css('height', '2300px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        }
    } else if (bodyWidth >= 0) {
        if (portBtn.classList.contains('portfolio__btnHide')) {
          $('.portfolio-block').css('height', '1000px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        } else {
          $('.portfolio-block').css('height', '4300px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        }
    }
  });

  
});