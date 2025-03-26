import React from 'react' // Required for JSX syntax
import { PageHeader } from '../PageHeader/PageHeader'

export interface Carleton360Props {
  children?: React.ReactNode
  headerType?: 'h1' | 'h2'
}

export const Carleton360Wrapper = ({ children, headerType = 'h2' }: Carleton360Props) => {
  const $componentMarginY = `my-6 md:my-12 first:mt-0`

  return (
    <div
      className={`cu-carleton360 relative flex items-center justify-center mx-auto px-8 overflow-hidden md:px-16 rounded-xl not-prose ${$componentMarginY} pt-10 pb-12  z-[2] max-w-4xl w-full  flex-col gap-2 bg-cu-black-50 cu-zero-first-last`}
    >
      <PageHeader
        header={''}
        as={headerType}
        size={headerType === 'h1' ? 'lg' : 'md'}
        isWhite={false}
        isCenter
        noUnderline
      >
        <img
          className="mb-4 h-12 justify-center mx-auto"
          src={'https://cu-production.s3.amazonaws.com/students/img/carleton360.svg'}
          alt={'test'}
        />
        <p className="text-md text-gray-600 text-center mb-6 mx-auto ">
          Get started in Carleton 360 to receive tailored information on our programs, student services and community.
        </p>
        {children}
      </PageHeader>
    </div>
  )
}

export const Carleton360 = Object.assign(Carleton360Wrapper, {})

Carleton360Wrapper.displayName = 'Carleton360'
