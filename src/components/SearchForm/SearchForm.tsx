import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
export interface SearchFormProps {
  callback: (k: string) => void
}

export const SearchForm = ({ callback }: SearchFormProps) => {
  const [message, setMessage] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    callback(message)
  }, [message, callback])

  return (
    <div className="cu-searchform not-prose relative flex items-center">
      <MagnifyingGlassIcon className="absolute left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
      <input
        className="h-12 w-full rounded-lg border border-cu-black-100 bg-transparent pl-11 pr-4 text-sm text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
        id="searchform__input"
        name="search"
        type="search"
        autoComplete="off"
        placeholder="Search"
        onChange={handleChange}
        value={message}
      />
    </div>
  )
}
