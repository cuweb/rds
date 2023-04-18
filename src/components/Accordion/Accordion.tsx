import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export type AccordionData = {
  title: string
  content: string
}

export interface AccordionProps {
  data: AccordionData[]
}

export const Accordion = ({ data }: AccordionProps) => {
  return (
    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
      {data &&
        data?.map((item: AccordionData) => (
          <Disclosure as="div" key={item.title} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{item.title}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 max-h-40 overflow-y-scroll pr-12 md:max-h-full">
                  {item.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
    </dl>
  )
}

//defination.accordian;
// title  and content
// title as a prop and content as a children

// FAQ
// defination.metadata -> title  and content: children  and flex coloum

// defination compoennet -> wrapper for anything
