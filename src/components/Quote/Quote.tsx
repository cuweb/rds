import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  graphic?: 'border' | 'quote'
  isCenter?: boolean
}

export const Quote = ({ children, cite, graphic = 'border', isCenter }: QuoteProps) => {
  const centerQuote = isCenter ? 'mx-auto' : ''

  return (
    <>
      <div className="not-prose cu-quote">
        <blockquote className={`${styles.container} ${styles.graphic[graphic]} ${centerQuote}`}>
          {children}
          {cite && <cite className={`${styles.cite}`}>{cite}</cite>}
        </blockquote>
      </div>
    </>
  )
}
