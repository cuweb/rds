import { DetailsItemProps } from './DetailsItem'
import {
  MapPinIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

export const DetailsItemData: DetailsItemProps[] = [
  {
    title: '405 Robertson Hall',
    description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
    icon: MapPinIcon,
  },
  {
    title: 'October 2nd-10th, 2022',
    description: '2:00PM - 10:00PM',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Person McPersonface',
    description: '613-266-2628 / mcorkum@gmail.com',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Cost',
    description: '$100,0000',
    icon: CurrencyDollarIcon,
  },
]
