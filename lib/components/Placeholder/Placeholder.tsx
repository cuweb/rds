export interface PlaceholderProps {
  name?: string
}

export const Placeholder = ({ name = 'TBD' }: PlaceholderProps) => {
  return (
    <div className="cu-placeholder cu-component-updated m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-cu-black-200 rounded-lg items-center justify-center">
      {name}
    </div>
  )
}
