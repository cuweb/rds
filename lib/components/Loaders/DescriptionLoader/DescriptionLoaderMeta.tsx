export interface DescriptionLoaderMetaProps {
  rows: number
  useColumns?: boolean
}

export const DescriptionLoaderMeta = ({ rows, useColumns }: DescriptionLoaderMetaProps) => {
  return (
    <div className="cu-description cu-block-spacing">
      {Array.from({ length: rows }, (_, rowsIndex) => (
        <div
          key={rowsIndex}
          className={
            useColumns
              ? `grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 last:border-none first:pt-0 first:md:pt-0 md:grid-cols-left-260 gap-2 md:gap-6`
              : `grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5 last:border-none first:pt-0 first:md:pt-0 grid-row gap-5`
          }
        >
          <span
            className={`animate-pulse block w-full ${useColumns ? `h-10` : `h-8`} rounded-md bg-cu-black-100`}
          ></span>
          <span
            className={`animate-pulse block w-full ${useColumns ? `h-20` : `h-16`} rounded-md bg-cu-black-100`}
          ></span>
        </div>
      ))}
    </div>
  )
}

DescriptionLoaderMeta.displayName = 'DescriptionLoader.Meta'
