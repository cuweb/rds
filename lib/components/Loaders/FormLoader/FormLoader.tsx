import React from 'react'
import { RowLoader } from './RowLoader' // Import RowLoader component

interface FormLoaderProps {
  children: React.ReactNode
}

// Define FormLoader component
export const FormLoader: React.FC<FormLoaderProps> & { RowLoader: React.FC<any> } = ({ children }) => {
  // Return FormLoader with children and RowLoader as property
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{React.cloneElement(child as React.ReactElement<any>, {})}</div>
      ))}
      <span className="sr-only">Loading...</span>
    </>
  )
}

// Assign RowLoader to FormLoader
FormLoader.RowLoader = RowLoader
