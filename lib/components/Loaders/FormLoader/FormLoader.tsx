import React from 'react'
import { RowLoader } from './RowLoader' // Import RowLoader component

interface FormLoaderWrapperProps {
  children: React.ReactNode
  noMargin?: boolean
}

// Define FormLoader component
export const FormLoaderWrapper = ({ children, noMargin }: FormLoaderWrapperProps) => {
  // Return FormLoader with children and RowLoader as property
  return (
    <div
      className={`cu-loader cu-loader--form ${noMargin ? `cu-loader--nomargin` : ``} cu-component-updated flex flex-col gap-8 w-full`}
    >
      {children}
    </div>
  )
}

export const FormLoader = Object.assign(FormLoaderWrapper, {
  RowLoader: RowLoader,
})
