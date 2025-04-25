import { useEffect } from 'react'
import filter from './filter'
import Top from './FilterPanelTop'
import Bottom from './FilterPanelBottom'

export interface IFilterPanelWrapperProp {
  children?: React.ReactNode
}

export const FilterPanelWrapper = ({ children }: IFilterPanelWrapperProp) => {
  useEffect(() => {
    filter()
  }, [])

  return <div className="cu-filter text-sm font-medium">{children}</div>
}

export const FilterPanel = Object.assign(FilterPanelWrapper, {
  Top: Top,
  Bottom: Bottom,
})
