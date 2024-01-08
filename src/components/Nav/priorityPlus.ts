import priorityPlus from 'priority-plus'

function menuPriority(nav: string) {
  // Initialize the navigation
  const navElement = document.querySelector(nav) as HTMLElement

  // If there's no navigation element, we don't need to run the rest of the script
  if (navElement) {
    // Store the instance of priorityPlus
    priorityPlus(navElement, {
      collapseAtCount: 2,
      innerToggleTemplate: `Browse
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none w-[15px] h-[15px] pt-1 text-cu-black-600 group-hover:text-cu-red-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      `,
    })
  }
}

export default menuPriority
