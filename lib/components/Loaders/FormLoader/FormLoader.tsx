/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface RowLoaderProps {
  cols: number // Number of columns for the row
}

export const RowLoader: React.FC<RowLoaderProps> = ({ cols }) => {
  return (
    <div className="flex space-x-2 mb-2">
      {/* Generate columns based on cols for the row */}
      {Array.from({ length: cols }, (_, colIndex) => (
        <span key={colIndex} className="animate-pulse block h-8 rounded-md w-52 bg-cu-black-100"></span>
      ))}
    </div>
  )
}

interface FormLoaderProps {
  children: any
}

export const FormLoader: React.FC<FormLoaderProps> = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{React.cloneElement(child as React.ReactElement<any>, {})}</div>
      ))}
      <span className="sr-only">Loading...</span>
    </>
  )
}
