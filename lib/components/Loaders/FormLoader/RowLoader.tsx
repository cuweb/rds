import React from 'react'

interface RowLoaderProps {
  cols: number
}

export const RowLoader: React.FC<RowLoaderProps> = ({ cols }) => {
  return (
    <div className="flex space-x-2 mb-2">
      {Array.from({ length: cols }, (_, colIndex) => (
        <span key={colIndex} className="animate-pulse block h-8 rounded-md w-52 bg-cu-black-100"></span>
      ))}
    </div>
  )
}
