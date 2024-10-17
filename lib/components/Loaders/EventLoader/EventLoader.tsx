import { Column, StackedList, Aside } from '../../../main'
import { ListingNewsLoader } from '../ListingLoader/ListingNewsLoader'
import { PaginationLoader } from '../PaginationLoader/PaginationLoader'
import { CalendarLoader } from '../CalendarLoader/CalendarLoader'

// interface FormLoaderWrapperProps {
//   children: React.ReactNode
// }

// // Define FormLoader component
// export const FormLoaderWrapper = ({ children }: FormLoaderWrapperProps) => {
//   // Return FormLoader with children and RowLoader as property
//   return <div className="cu-loader-form cu-component flex flex-col gap-8 w-full">{children}</div>
// }

export const EventLoader = () => {
  return (
    <>
      <Column cols="2/3" maxWidth="7xl">
        <Column.Content>
          <StackedList cols="2">
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
            <ListingNewsLoader />
          </StackedList>
          <PaginationLoader />
        </Column.Content>

        <Aside isSticky topSpace={105}>
          <CalendarLoader />
        </Aside>
      </Column>
    </>
  )
}
