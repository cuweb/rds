import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { rdsFontSizes } from '../../../utils/tailwindClasses'
import { Link } from '../../Link/Link'

// Set types for as props
type BaseItemTypeProps = 'li' | 'div'
type TitleTypeProps = 'h2' | 'h3'

export interface FileItemProps {
  children?: React.ReactNode
  fontSize?: 'base' | 'lg' | 'xl'
  title?: string
  link?: string
  filesize?: string
  date?: string
}

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface BaseItemProps {
  as?: BaseItemTypeProps
}

export interface TitleProps {
  as?: TitleTypeProps
}

const FileItemBase = ({ as: Component = 'div', children, link }: ItemBaseProps & FileItemProps) => {
  return (
    <Component>
      <Link
        href={link}
        className="not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="w-auto flex-none">
            <svg
              className="flex h-12 w-12 flex-none items-start"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g>
                <g>
                  <g fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"></path>
                      <g fill="#E91C24">
                        <path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z"></path>
                        <path d="M14 7V1h.195L20 6.805V7z" fillOpacity=".215"></path>
                        <path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z"></path>
                      </g>
                    </g>
                    <path
                      d="M16 15.34c0-1.98-8-.117-8 2.263 0 .192.135.397.353.397 1.675 0 4.779-11 3.26-11s.859 9.023 3.66 9.023c.408 0 .727-.167.727-.683z"
                      stroke="#E91C24"
                      strokeWidth=".5"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {children}
        </div>
        <ChevronRightIcon className="ml-auto h-5 w-5 flex-none text-cu-black-300" aria-hidden="true" />
      </Link>
    </Component>
  )
}

const Content = ({ children }: FileItemProps) => {
  return <div className="flex flex-auto flex-col gap-1">{children}</div>
}

const Title = ({ as = 'h3', fontSize = 'base', title }: TitleProps & FileItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title,
  )
}

const Details = ({ filesize, date }: FileItemProps) => {
  return (
    <p className="mr-4 text-sm italic text-cu-black-700">
      {filesize} - {date}
    </p>
  )
}

// Set default for base component as props
FileItemBase.defaultProps = {
  as: 'li',
}

FileItemBase.displayName = 'FileItem'
Content.displayName = 'FileItem.Content'
Title.displayName = 'FileItem.Title'
Details.displayName = 'FileItem.Details'

export const FileItem = Object.assign(FileItemBase, {
  Content,
  Title,
  Details,
})
