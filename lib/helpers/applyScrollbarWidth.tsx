export function getScrollbarWidth(): number {
  // Create a temporary div container and append it into the body
  const container = document.createElement('div')
  // Append the container to the body
  document.body.appendChild(container)

  // Force scrollbar on the container
  container.style.overflow = 'scroll'

  // Add a fake div inside the container
  const inner = document.createElement('div')
  container.appendChild(inner)

  // Calculate the width based on the container width minus its child width
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth

  // Remove the container from the body
  document.body.removeChild(container)

  return scrollbarWidth
}

export function applyScrollbarWidth(): void {
  const scrollbarWidth = getScrollbarWidth()
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

  // Add a class to handle browsers without scrollbar
  if (scrollbarWidth === 0) {
    document.documentElement.classList.add('no-scrollbar')
  }
}

// Apply the scrollbar width on load
window.addEventListener('load', applyScrollbarWidth)
