import { PropsWithChildren } from 'react'
import { navPrimaryStyles } from './Nav.Styles'

export const NavPrimary = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${navPrimaryStyles.navPrimary}`}>
      {children}
    </div>
  )
}

NavPrimary.displayName = 'Nav.Primary'
