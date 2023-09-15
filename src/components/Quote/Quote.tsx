import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  symbol?: 'default' | 'quote'
  align?: 'default' | 'middle'
}

export const Quote = ({ children, cite, symbol = 'default', align = 'default' }: QuoteProps) => {
  return (
    <>
      <div className="not-prose">
        <blockquote className={`${styles.container} ${styles.symbol[symbol]} ${styles.align[align]}`}>
          {children}
          {cite && <cite className={`${styles.cite[symbol]}`}>{cite}</cite>}
        </blockquote>
      </div>
    </>
  )
}
