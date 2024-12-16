export interface DescriptionLoaderAccordionProps {
  rows: number
}

export const DescriptionLoaderAccordion = ({ rows }: DescriptionLoaderAccordionProps) => {
  return (
    <div className="cu-description cu-block-spacing">
      {Array.from({ length: rows }, (_, rowsIndex) => (
        <div
          key={rowsIndex}
          className={`accordion grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 first:border-t`}
        >
          <span className={`animate-pulse block w-full h-8 my-2 rounded-md bg-cu-black-100`}></span>
        </div>
      ))}
    </div>
  )
}

DescriptionLoaderAccordion.displayName = 'DescriptionLoaderAccordion.Accordion'
