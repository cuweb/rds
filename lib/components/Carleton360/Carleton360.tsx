import React from 'react'
import Carleton360Logo from './logo'

export interface Carleton360Props {
  children?: React.ReactNode
}

export const Carleton360 = ({ children }: Carleton360Props) => {
  const $componentMarginY = `my-6 md:my-12 first:mt-0`
  return (
    <div
      className={`text-center relative flex items-center justify-center mx-auto px-8 overflow-hidden md:px-16 rounded-xl not-prose ${$componentMarginY} pt-10 pb-12  z-[2] max-w-4xl w-full  flex-col gap-2 bg-cu-black-50 cu-zero-first-last`}
    >
      <Carleton360Logo />
      <p className="text-md text-gray-600 text-center mx-auto ">
        Get started in Carleton 360 to receive tailored information on our programs, student services and community.
      </p>
      {children}
    </div>
  )
}
