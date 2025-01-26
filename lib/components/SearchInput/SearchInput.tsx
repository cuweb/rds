import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SearchInputResults } from './SearchInputResults'

export interface SearchInputProps {
  callback: (k: string) => void
  placeholder: string
  children?: React.ReactNode
}

export const SearchInputWrapper = ({ callback, placeholder = 'Search', children }: SearchInputProps) => {
  const [message, setMessage] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    callback(message)
  }, [message, callback])

  return (
    <div className="cu-search cu-component-updated relative items-center not-prose">
      <MagnifyingGlassIcon className="absolute top-3 w-5 h-5 left-4 text-cu-black-300" aria-hidden="true" />
      <input
        className="w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
        id="search__input"
        name="search"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleChange}
        value={message}
      />
      <div className="relative w-full">{children}</div>
    </div>
  )
}

export const SearchInput = Object.assign(SearchInputWrapper, {
  Results: SearchInputResults,
})

SearchInputWrapper.displayName = 'Search Input'
