export interface DescriptionMetaProps {
  title: string
  children: React.ReactNode
  displaySide?: boolean
}

export const DescriptionMeta = ({ title, children, displaySide }: DescriptionMetaProps) => {
  return (
    <div className={` ${displaySide ? 'flex' : ''}`}>
      <h2 className="font-semibold">
        {title} {displaySide ? ':' : ''}
      </h2>
      {!displaySide ? (
        <div>{children}</div>
      ) : (
        <div className="flex">
          <div className="mx-4 flex-col"> {children}</div>
        </div>
      )}
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'
