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

  let perView = slidesPerViewDesktop

  // Function to update `perView` based on screen size
  function updatePerView() {
    if (window.innerWidth < 768) {
      perView = slidesPerViewMobile
    } else if (window.innerWidth < 1024) {
      perView = slidesPerViewTablet
    } else {
      perView = slidesPerViewDesktop
    }
  }

  // Adjust slide widths dynamically
  function adjustSlides() {
    updatePerView()

    const containerWidth = slider.offsetWidth
    const slideWidth = containerWidth / perView

    slides.forEach((slide) => {
      const slideElement = slide as HTMLElement
      slideElement.style.flex = `0 0 ${slideWidth}px`
      slideElement.style.maxWidth = `${slideWidth}px`
    })
  }

  // Update active slide and button states
  function updateActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[currentIndex].classList.add('active')
  }

  // Move to the next slide
  function nextSlide() {
    if (currentIndex < totalSlides - perView) {
      currentIndex++
      sliderWrap.style.transform = `translateX(-${currentIndex * (100 / perView)}%)`
      sliderWrap.style.transition = 'transform 0.5s ease'
      updateActiveSlide()
    }
  }

  // Move to the previous slide
  function previousSlide() {
    if (currentIndex > 0) {
      currentIndex--
      sliderWrap.style.transform = `translateX(-${currentIndex * (100 / perView)}%)`
      sliderWrap.style.transition = 'transform 0.5s ease'
      updateActiveSlide()
    }
  }

  // Initialize the slider
  function initializeSlider() {
    // Set initial active slide
    slides[0].classList.add('active')

    // Add event listeners for navigation
    previousArrow.addEventListener('click', previousSlide)
    nextArrow.addEventListener('click', nextSlide)

    // Adjust slides on load and resize
    adjustSlides()
    window.addEventListener('resize', adjustSlides)
  }

  // Run the slider
  initializeSlider()
}

export default SliderScript
