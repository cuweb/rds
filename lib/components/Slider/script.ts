import Swiper from 'swiper/bundle'

const SwiperSlider = () => {
  const SwiperSliders = document.querySelectorAll('.swiper--slider')

  if (SwiperSliders.length === 0) return

  SwiperSliders.forEach((SwiperSlider) => {
    const swiperClass = SwiperSlider.getAttribute('data-swiper-class')

    if (swiperClass) {
      const classname = `.${swiperClass}`
      const swiperLoop = SwiperSlider.getAttribute('data-swiper-loop') === 'true'
      const swiperSpeed = SwiperSlider.getAttribute('data-swiper-speed') || '500'
      const swiperSlidesPerViewMobile = SwiperSlider.getAttribute('data-swiper-perview-mobile') || '1'
      const swiperSlidesPerViewTablet = SwiperSlider.getAttribute('data-swiper-perview-tablet') || '3'
      const swiperSlidesPerViewDesktop = SwiperSlider.getAttribute('data-swiper-perview-desktop') || '4'

      new Swiper(classname, {
        loop: swiperLoop,
        speed: parseInt(swiperSpeed),
        slidesPerView: parseInt(swiperSlidesPerViewMobile),
        spaceBetween: 8,
        breakpoints: {
          768: {
            slidesPerView: parseInt(swiperSlidesPerViewTablet),
          },
          1024: {
            slidesPerView: parseInt(swiperSlidesPerViewDesktop),
          },
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  })
}

export default SwiperSlider
