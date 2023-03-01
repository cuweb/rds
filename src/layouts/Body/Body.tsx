import React from 'react'

export interface BodyProps {
  children: React.ReactNode
  className?: string
}

export const Body = ({ children, className }: BodyProps) => {
  return (
    <body className={className}>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MH632FV" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      {children}
    </body>
  )
}
