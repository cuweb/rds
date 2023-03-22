import React from 'react'
import styles from './Container.styles'

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

export const Container = ({
  as: Component = 'section',
  children,
  hasProse = false,
  bgColor = 'white',
  maxWidth = '5xl',
}: ContainerProps) => {
  const addProse = hasProse ? styles.prose : '[&>*:first-child]:-mt-0'
  const bgStyles = bgColor === 'grey' ? `${styles.grey}` : `${styles.white}`

  const childWidth = maxWidth ? `cu-container-${maxWidth}` : ''

  return (
    <>
      <Component className={`${styles.base} ${bgStyles} ${childWidth} ${addProse}`}>{children}</Component>
    </>
  )
}
