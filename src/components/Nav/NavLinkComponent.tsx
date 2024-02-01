/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from 'react'

export const LinkContext = createContext(null)

export interface ILinker {
  component: any
  children: React.ReactNode
}

export const NavLinkComponent = ({ component, children }: ILinker) => {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>
}

// export default Linker
NavLinkComponent.displayName = 'Nav.LinkComponent'
