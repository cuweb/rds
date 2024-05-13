import React from 'react'
import { RowLoader } from './RowLoader' // Import RowLoader component

interface FormLoaderWrapperProps {
  children: React.ReactNode
}

// Define FormLoader component
export const FormLoaderWrapper = ({ children }: FormLoaderWrapperProps) => {
  // Return FormLoader with children and RowLoader as property
  return (
    <>
      <div className="flex flex-col gap-8 w-full">{children}</div>
      <span className="sr-only">Loading...</span>
    </>
  )
}

export const FormLoader = Object.assign(FormLoaderWrapper, {
  RowLoader: RowLoader,
})
