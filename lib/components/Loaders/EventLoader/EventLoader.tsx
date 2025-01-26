import { Column, StackedList, Aside } from '../../../main'
import { ListingNewsLoader } from '../ListingLoader/ListingNewsLoader'
import { PaginationLoader } from '../PaginationLoader/PaginationLoader'
import { CalendarLoader } from '../CalendarLoader/CalendarLoader'

export interface EventLoaderProps {
  pageCount?: number
  showClearButton?: boolean
}

export const EventLoader = ({ pageCount = 5, showClearButton = false }: EventLoaderProps) => {
  return (
    <>
      <Column cols="2/3">
        <Column.Content>
          <StackedList cols="2">
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
          </StackedList>
          <PaginationLoader pageCount={pageCount} />
        </Column.Content>

        <Aside isSticky topSpace={105}>
          <CalendarLoader showClearButton={showClearButton} />
        </Aside>
      </Column>
    </>
  )
}
