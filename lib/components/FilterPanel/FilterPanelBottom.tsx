export const FilterPanelBottom = () => {
  return (
    <div className="flex items-start text-sm text-cu-black-600 border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100 px-4 py-4 sm:px-6 sm:py-5 gap-x-4 sm:gap-x-5 gap-y-3">
      <div className="flex items-center gap-x-4 sm:gap-x-5 gap-y-3">
        <span>Filters</span>
        <span className="border-l border-cu-black-100 h-7 w-[1px]"></span>
      </div>
      <div className="cu-filter__active-filter-panel flex flex-wrap items-center gap-3"></div>
    </div>
  )
}

FilterPanelBottom.displayName = 'FilterPanel.Bottom'
