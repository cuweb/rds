import { useEffect } from 'react'
import FilterActions from './filter'
import { FilterPanelTop } from './FilterPanelTop'
import { FilterPanelBottom } from './FilterPanelBottom'

export interface IFilterPanelWrapperProp {
  children?: React.ReactNode
}

export const FilterPanelWrapper = ({ children }: IFilterPanelWrapperProp) => {
  useEffect(() => {
    const filterInstance = FilterActions()

    return () => {
      if (filterInstance && typeof filterInstance.destroy === 'function') {
        filterInstance.destroy()
      }
    }
  }, [])

  return <div className="cu-filter text-sm font-medium">{children}</div>
}

export const FilterPanel = Object.assign(FilterPanelWrapper, {
  Top: FilterPanelTop,
  Bottom: FilterPanelBottom,
})
