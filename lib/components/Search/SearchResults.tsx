import { useEffect, useState } from 'react'
import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface SourceDataProps {
  [k: string]: string | number
}
export interface SearchProps {
  resultsData: SourceDataProps[]
}

export const SearchResults = ({ resultsData }: SearchProps) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const handleComboboxChange = (selectedOption) => {
    if (selectedOption) {
      const url = String(selectedOption.url)
      window.location.href = url
      setOpen(false)
    }
  }

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setOpen(!open)
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [open])

  const LinkComponent = useLinkContext()

  return (
    <>
      {open && (
        <>
          {resultsData && resultsData.length > 0 && (
            <ul className="py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2">
              {resultsData.map((record) => (
                <li
                  key={record.id}
                  className="cursor-default select-none px-4 py-2 hover:bg-cu-red hover:text-white"
                  onClick={() => handleComboboxChange(record)}
                >
                  <LinkComponent href={`${record.url}`} onClick={() => setOpen(false)}>
                    {record.title}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          )}
          {query !== '' && resultsData && resultsData.length === 0 && (
            <p className="p-4 text-sm text-gray-500">Search not found</p>
          )}
        </>
      )}
    </>
  )
}

SearchResults.displayName = 'Search.Results'
