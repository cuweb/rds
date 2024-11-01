export interface InputAddonProps {
  children: React.ReactNode
}

export const InputAddon = ({ children }: InputAddonProps) => {
  // const { children } = props

  return <p className="px-4">{children}</p>
}
