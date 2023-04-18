import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export interface DescriptionAccordianProps {
  title: string
  children: React.ReactNode
}

export const DescriptionAccordian = ({ title, children }: DescriptionAccordianProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <>
      <dt>
        <button className="flex w-full items-start justify-between text-left text-gray-900" onClick={toggleAccordion}>
          <span className="text-base font-semibold leading-7">{title}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && <dd className="mt-2 max-h-40 overflow-y-scroll pr-12 md:max-h-full">{children}</dd>}
    </>
  )
}

DescriptionAccordian.displayName = 'Description.Accordian'
