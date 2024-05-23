import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
export interface SearchFormProps {
  callback: (k: string) => void
  placeholder: string
}

export const SearchForm = ({ callback, placeholder = 'Search' }: SearchFormProps) => {
  const [message, setMessage] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    callback(message)
  }, [message, callback])

  return (
    <div className="cu-searchform cu-component-spacing relative flex items-center not-prose">
      <MagnifyingGlassIcon className="absolute w-5 h-5 left-4 text-cu-black-300" aria-hidden="true" />
      <input
        className="w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
        id="searchform__input"
        name="search"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleChange}
        value={message}
      />
    </div>
  )
}
