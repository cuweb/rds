import React from 'react'
import { styles } from './Quote.Styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  graphic?: 'border' | 'quote'
  isCenter?: boolean
}

export const Quote = ({ children, cite, graphic = 'border', isCenter }: QuoteProps) => {
  const centerQuote = isCenter ? 'mx-auto' : ''

  return (
    <div className="cu-quote cu-component not-prose">
      <blockquote className={`cu-prose ${styles.container} ${styles.graphic[graphic]} ${centerQuote}`}>
        {children}
        {cite && <cite className={`${styles.cite}`}>{cite}</cite>}
      </blockquote>
    </div>
  )
}
