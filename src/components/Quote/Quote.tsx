import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  graphic?: 'border' | 'quote'
  align?: 'default' | 'middle'
}

export const Quote = ({ children, cite, graphic = 'border', align = 'default' }: QuoteProps) => {
  return (
    <>
      <div className="not-prose">
        <blockquote className={`${styles.container} ${styles.graphic[graphic]} ${styles.align[align]}`}>
          {children}
          {cite && <cite className={`${styles.cite}`}>{cite}</cite>}
        </blockquote>
      </div>
    </>
  )
}
