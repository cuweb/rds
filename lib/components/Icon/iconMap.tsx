/* eslint-disable prettier/prettier */
// src/components/Icon/iconMap.ts

import CalendarDays from '../../../public/assets/font-awesome/calendar-days.svg?react'
import Clock from '../../../public/assets/font-awesome/clock.svg?react'
import MapPin from '../../../public/assets/font-awesome/map-pin.svg?react'
import CircleCheckIcon from '../../../public/assets/font-awesome/circle-check.svg?react'
import ChevronUpIcon from '../../../public/assets/font-awesome/chevron-up.svg?react'
import ChevronDownIcon from '../../../public/assets/font-awesome/chevron-down.svg?react'
import ChevronLeftIcon from '../../../public/assets/font-awesome/chevron-left.svg?react'
import ChevronRightIcon from '../../../public/assets/font-awesome/chevron-right.svg?react'
import MagnifyingGlassIcon from '../../../public/assets/font-awesome/magnifying-glass.svg?react'
import XmarkIcon from '../../../public/assets/font-awesome/xmark.svg?react'
import CircleExclamationIcon from '../../../public/assets/font-awesome/circle-exclamation.svg?react'
import CircleInfoIcon from '../../../public/assets/font-awesome/circle-info.svg?react'
import ShieldHalvedIcon from '../../../public/assets/font-awesome/shield-halved.svg?react'
import CircleDownIcon from '../../../public/assets/font-awesome/circle-down.svg?react'
import LockIcon from '../../../public/assets/font-awesome/lock.svg?react'
import SortIcon from '../../../public/assets/font-awesome/sort.svg?react'

export const iconMap = {
  'calendar-days': CalendarDays,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'circle-check': CircleCheckIcon,
  'circle-down': CircleDownIcon,
  'circle-exclamation': CircleExclamationIcon,
  'circle-info': CircleInfoIcon,
  clock: Clock,
  lock: LockIcon,
  'magnifying-glass': MagnifyingGlassIcon,
  'map-pin': MapPin,
  'shield-halved': ShieldHalvedIcon,
  sort: SortIcon,
  xmark: XmarkIcon,
} as const
