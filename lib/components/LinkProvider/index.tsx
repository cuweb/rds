/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { LinkContext } from './LinkContext'

export interface ILinkProvider {
  type: any
  children: React.ReactNode
}

export const Link: FC<ILinkProvider> = ({ type, children }): JSX.Element => {
  return <LinkContext.Provider value={type}>{children}</LinkContext.Provider>
}

export const LinkProvider = Object.assign(Link)
