import React from 'react'

type BaseContainerTypeProps = 'section' | 'div'

export interface ContainerBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface ContainerProps {
  children?: React.ReactNode
  as?: BaseContainerTypeProps
  hasProse?: boolean
  bgColor?: 'white' | 'grey'
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
}

const prose = {
  prose: `prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}

const styles = {
  base: `cu-container py-10 px-8 -mx-8 md:py-14`,
  white: `cu-container-white [&+.cu-container-white]:pt-0`,
  grey: `cu-container-grey bg-cu-black-50 [&+.cu-container-grey]:pt-0`,
  width5xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  width7xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  widthFull: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  autoMargin: `[&>:not(.cu-container):not(.cu-column)]:mx-auto`,
}

export const Container = ({
  as: Component = 'section',
  children,
  hasProse = false,
  bgColor = 'white',
  maxWidth = '5xl',
}: ContainerProps) => {
  const addProse = hasProse ? prose.prose : '[&>*:first-child]:-mt-0'
  const bgStyles = bgColor === 'grey' ? `${styles.grey}` : `${styles.white}`

  const childWidth = maxWidth ? `${styles.autoMargin} [&>:not(.cu-container):not(.cu-column)]:max-w-${maxWidth}` : ''

  return (
    <>
      <Component className={`${styles.base} ${bgStyles} ${childWidth} ${addProse}`}>{children}</Component>
    </>
  )
}
