/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from 'react'
import { LinkContext } from './index'

export const useLinkContext = (): any => useContext(LinkContext)
