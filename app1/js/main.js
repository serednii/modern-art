$(function () {

  const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset');
  const loadMapBlock = document.querySelector('._load-map');
  const windowHeight = document.documentElement.clientHeight;

  let lazyImagesPositions = [];
  if (lazyImages.length > 0){
    lazyImages.forEach(img => {
      if (img.dataset.src || img.dataset.srcset){
        lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
        lazyScrollCheck();
      }
    });
  }

  window.addEventListener("scroll", lazyScroll);

  function lazyScroll(){
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0){
      lazyScrollCheck();
    }
  }

  function lazyScrollCheck(){
    let imgIndex = lazyImagesPositions.findIndex(
      item => pageYOffset > item - windowHeight
    );
    if (imgIndex >= 0){
      if (lazyImages[imgIndex].dataset.src){
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
        lazyImages[imgIndex].removeAttribute('data-src');
      } else if (lazyImages[imgIndex].dataset.srcset){
        lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
        lazyImages[imgIndex].removeAttribute('data-srcset');
      }
      delete lazyImagesPositions[imgIndex];
    }
  }







  let menuBtn = document.querySelector('.menu__btn');
  let menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })

      $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
      });

        $('.top-slider__inner').slick({
            dots: false,
            arrows: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            slidesToScroll: 1
          });

          $(".star").rateYo({
            starWidth: "24px",
            normaFill: "#ccccce",
            ratedFill: "#C6A47E",
            numStars: 5,
            readOnly: true,
            starSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_215)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#C6A47E"/></g><defs><clipPath id="clip0_1_215"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>'
          });
         
});