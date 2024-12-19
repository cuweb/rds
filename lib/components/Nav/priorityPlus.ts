/* eslint-disable */
// @ts-nocheck
import priorityPlus from './priority-plus/priorityPlus'

const menuPriority = () => {
  // Initialize the navigation
  const navElement = document.querySelector('.cu-nav__menu') as HTMLElement

  // If there's no navigation element, we don't need to run the rest of the script
  if (navElement) {
    // Store the instance of priorityPlus
    const navInstance = priorityPlus(navElement, {
      collapseAtCount: 2,
    })
  }
}

export default menuPriority
