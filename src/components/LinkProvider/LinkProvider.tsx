/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from 'react'

export const LinkContext = createContext(null)

export interface ILinkProvider {
  type: any
  children: React.ReactNode
}

export const LinkProvider = ({ type, children }: ILinkProvider) => {
  return <LinkContext.Provider value={type}>{children}</LinkContext.Provider>
}
