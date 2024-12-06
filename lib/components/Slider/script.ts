const SliderScript = () => {
  // Initial setup
  const slider = document.querySelector('.slider') as HTMLElement

  if (slider === null) return

  const sliderWrap = slider.querySelector('.slider__wrap') as HTMLElement
  const slides = slider.querySelectorAll('.slider__slide')

  if (slider === null || slides === null) return

  const previousArrow = slider.querySelector('.slider__arrow--prev') as HTMLElement
  const nextArrow = slider.querySelector('.slider__arrow--next') as HTMLElement

  if (previousArrow === null || nextArrow === null) return

  let currentIndex = 0
  const totalSlides = slides.length

  const slidesPerViewDesktop = Number(slider.getAttribute('data-slides-desktop')) || 4
  const slidesPerViewTablet = Number(slider.getAttribute('data-slides-tablet')) || slidesPerViewDesktop
  const slidesPerViewMobile = Number(slider.getAttribute('data-slides-mobile')) || slidesPerViewTablet

  let slidesPerView = slidesPerViewDesktop

  // Function to update `perView` based on screen size
  const updatePerView = () => {
    if (window.innerWidth < 768) {
      slidesPerView = slidesPerViewMobile
    } else if (window.innerWidth < 1024) {
      slidesPerView = slidesPerViewTablet
    } else {
      slidesPerView = slidesPerViewDesktop
    }
  }

  // Adjust slide widths dynamically
  const adjustSlidesWidth = () => {
    updatePerView()

    const containerWidth = slider.offsetWidth
    const slideWidth = containerWidth / slidesPerView

    slides.forEach((slide) => {
      const slideElement = slide as HTMLElement
      slideElement.style.flex = `0 0 ${slideWidth}px`
      slideElement.style.maxWidth = `${slideWidth}px`
    })
  }

  const nextSlide = () => {
    const nextSlideIndex = (currentIndex + 1) % totalSlides

    const firstSlide = sliderWrap.firstElementChild as HTMLElement
    sliderWrap.append(firstSlide)

    currentIndex = nextSlideIndex - 1

    sliderWrap.style.transition = 'transform 0.5s ease'
    sliderWrap.style.transform = `translateX(-${currentIndex + 1 * (100 / slidesPerView)}%)`

    setTimeout(() => {
      sliderWrap.style.transition = 'transform 0.5s ease'
      sliderWrap.style.transform = `translateX(-${currentIndex + 1 * (100 / slidesPerView)}%)`
    }, 50)
  }

  const previousSlide = () => {
    const prevSlideIndex = (currentIndex + totalSlides) % totalSlides

    const lastSlide = sliderWrap.lastElementChild as HTMLElement
    sliderWrap.prepend(lastSlide)

    currentIndex = prevSlideIndex
    sliderWrap.style.transition = 'none'
    sliderWrap.style.transform = `translateX(-${currentIndex + 1 * (100 / slidesPerView)}%)`

    setTimeout(() => {
      sliderWrap.style.transition = 'transform 0.5s ease'
      sliderWrap.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`
    }, 50)
  }

  // Initialize the slider
  const initializeSlider = () => {
    // Add event listeners for navigation
    previousArrow.addEventListener('click', previousSlide)
    nextArrow.addEventListener('click', nextSlide)

    // Adjust slides on load and resize
    adjustSlidesWidth()
  }

  window.addEventListener('resize', adjustSlidesWidth)

  // Run the slider
  initializeSlider()
}

export default SliderScript
