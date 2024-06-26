export interface FieldArrayContainerProps {
  children: React.ReactNode
}

export const FieldArrayContainer = ({ children }: FieldArrayContainerProps) => {
  return <div className="mb-8 md:mb-10 last:mb-0 last:md:mb-0">{children}</div>
}
