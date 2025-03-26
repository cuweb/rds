import React from 'react' // Required for JSX syntax
import { Carleton360Signup } from './Carleton360Signup'
import { PageHeader } from '../PageHeader/PageHeader'

// TODO: Discussion --> removing the hasScroll option

export interface Carleton360Props {
  children?: React.ReactNode
  title: string
  headerType?: 'h1' | 'h2'
}

export const Carleton360Wrapper = ({ children, title, headerType = 'h2' }: Carleton360Props) => {
  // TODO: margin-y
  const $componentMarginY = `my-6 md:my-12 first:mt-0`

  return (
    <div
      className={`cu-Carleton360 relative flex items-center justify-center mx-auto px-8 overflow-hidden md:px-16 rounded-xl not-prose ${$componentMarginY} pt-10 pb-12`}
    >
      <div
        className={`relative z-[2] max-w-4xl w-full flex flex-col items-center gap-2 bg-cu-black-50 cu-zero-first-last`}
      >
        <PageHeader
          header={title}
          as={headerType}
          size={headerType === 'h1' ? 'lg' : 'md'}
          isWhite={false}
          isCenter
          noUnderline
        >
          {children}
        </PageHeader>
      </div>
    </div>
  )
}

export const Carleton360 = Object.assign(Carleton360Wrapper, {
  Signup: Carleton360Signup,
})

Carleton360Wrapper.displayName = 'Carleton360'
