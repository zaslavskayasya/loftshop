$(document).ready(function () {
    $('.outer-slider').on('init', function(event, slick){
      // Ініціалізація внутрішнього слайдера тільки в активному слайді
      initInnerSlider($(slick.$slides[slick.currentSlide]));
    });
  
    $('.outer-slider').on('afterChange', function(event, slick, currentSlide){
      // Перезапускаємо внутрішній слайдер в активному слайді
      initInnerSlider($(slick.$slides[currentSlide]));
    });
  
    $('.outer-slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  
    function enableMouseWheelScroll($inner) {
      $inner.on('wheel', function (e) {
        e.preventDefault(); // блокуємо скрол сторінки
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickPrev');
        } else {
          $(this).slick('slickNext');
        }
      });
    }
  
    function initInnerSlider($outerSlide) {
      const $inner = $outerSlide.find('.inner-slider');
      const $wrapper = $outerSlide.find('.inner-slider-wrapper');
      const windowWidth = window.innerWidth;
  
      // Перевірка розміру вікна
      if (windowWidth < 768) {
        if ($inner.hasClass('slick-initialized')) {
          $inner.slick('unslick'); // Зупиняємо слайдер
        }
        return; // Якщо ширина екрану менше 768px, нічого не робимо далі
      }
  
      // Ініціалізація слайдера тільки, якщо він ще не ініціалізований
      if (!$inner.hasClass('slick-initialized')) {
        $inner.slick({
          arrows: false, // вимикаємо вбудовані стрілки
          dots: false,
          infinite: true,
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: true,
          verticalSwiping: true,
          draggable: true,
          touchMove: true,
        });
      }
  
      // Стрілки
      $wrapper.find('.inner-arrow.up').on('click', function () {
        console.log('press');
        $inner.slick('slickPrev');
      });
  
      $wrapper.find('.inner-arrow.down').on('click', function () {
        console.log('press2');
        $inner.slick('slickNext');
      });
  
      enableMouseWheelScroll($inner);
    }
  
    // Перевірка при зміні розміру вікна
    $(window).on('resize', function() {
      $('.outer-slider').each(function () {
        initInnerSlider($(this)); // Оновлюємо внутрішній слайдер при ресайзі
      });
    });
  });