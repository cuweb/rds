const SliderScript = () => {
  // Initial setup
  const slider = document.querySelector('.cu-slider') as HTMLElement

  if (slider === null) return

  const sliderWrap = slider.querySelector('.cu-slider--wrap') as HTMLElement
  const slides = slider.querySelectorAll('.cu-slider--item')

  if (slider === null || slides === null) return

  const previousArrow = slider.querySelector('.cu-slider--arrow-prev') as HTMLElement
  const nextArrow = slider.querySelector('.cu-slider--arrow-next') as HTMLElement

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

  const checkTotalSlides = (width: number, message: string) => {
    if (window.innerWidth > width && totalSlides <= slidesPerView) {
      sliderWrap.style.justifyContent = 'center'
      previousArrow.setAttribute('disabled', 'disabled')
      nextArrow.setAttribute('disabled', 'disabled')
      console.warn(message)
      return true
    }
    return false
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

    if (
      checkTotalSlides(1024, `Number of images in the slider is less than ${slidesPerViewDesktop} for desktop view`) ||
      checkTotalSlides(768, `Number of images in the slider is less than ${slidesPerViewTablet} for tablet view`) ||
      checkTotalSlides(0, `Number of images in the slider is less than ${slidesPerViewMobile} for mobile view`)
    ) {
      return
    }

    // Remove any existing styles
    sliderWrap.style.justifyContent = 'flex-start'
    previousArrow.removeAttribute('disabled')
    nextArrow.removeAttribute('disabled')

    // Add event listeners for navigation
    previousArrow.addEventListener('click', previousSlide)
    nextArrow.addEventListener('click', nextSlide)

    sliderWrap.style.transition = 'transform 0.5s ease'
    sliderWrap.style.transform = `translateX(0%)`
  }

  const nextSlide = () => {
    const nextSlideIndex = (currentIndex + 1) % totalSlides

    const firstSlide = sliderWrap.firstElementChild as HTMLElement
    sliderWrap.append(firstSlide)

    if (currentIndex !== 0) {
      currentIndex = nextSlideIndex - 1
    }

    sliderWrap.style.transition = 'none'
    sliderWrap.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`

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
    // Adjust slides on load and resize
    adjustSlidesWidth()
  }

  window.addEventListener('resize', adjustSlidesWidth)

  // Run the slider
  initializeSlider()
}

export default SliderScript
