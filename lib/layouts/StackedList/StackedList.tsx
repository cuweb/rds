import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface StackedListProps {
  children: React.ReactNode
  as?: 'ul' | 'div'
  cols?: '1' | '2'
  listType?: 'posts' | 'toc'
  maxWidth?: maxWidthKeys
  offset?: 'left' | 'right'
  header?: string
  noShadow?: boolean
}

const styles = {
  offset: `md:mb-6 duration-300 ease-in`,
  left: `md:float-left lg:ml-2 xl:ml-24 2xl:ml-[12%] md:mr-10`,
  right: `md:float-right md:mr-0 xl:mr-24 2xl:mr-[12%] md:ml-10`,
}

export const StackedList = ({
  children,
  as = 'ul',
  cols = '2',
  listType = 'posts',
  maxWidth = '5xl',
  offset,
  header,
  noShadow = false,
}: StackedListProps) => {
  const ListComponent = as
  const offsetStyle = offset ? `${styles[offset]} ${styles.offset} md:max-w-sm lg:max-w-md` : maxWidthClasses[maxWidth]
  const shadowStyle = noShadow ? 'cu-stackedlist--no-shadow' : 'shadow-lg'

  return (
    <div
      className={`cu-stackedlist cu-component-updated not-prose mx-auto overflow-hidden rounded-lg bg-white w-full ${shadowStyle} ${offsetStyle}`}
    >
      {header && (
        <h2 className="px-6 py-4 text-base font-semibold border-b rounded-t-lg md:text-xl bg-gray-50 text-cu-black-800">
          {header}
        </h2>
      )}
      <ListComponent className={`cu-stackedlist--${listType} cu-stackedlist--${cols} grid md:grid-cols-${cols}`}>
        {children}
      </ListComponent>
    </div>
  )
}
