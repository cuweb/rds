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
      const swiperSlidesPerView = SwiperSlider.getAttribute('data-swiper-perview') || '1'

      new Swiper(classname, {
        loop: swiperLoop,
        speed: parseInt(swiperSpeed),
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: parseInt(swiperSlidesPerView),
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
