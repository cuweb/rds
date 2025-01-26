/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from 'react'
import { LinkContext } from './LinkContext'

export const useLinkContext = (): any => useContext(LinkContext)
