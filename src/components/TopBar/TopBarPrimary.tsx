import { PropsWithChildren } from 'react'

export const TopBarPrimary = ({ children }: PropsWithChildren) => {
  return (
    <div className="cu-topbar--primary mx-auto flex h-[64px] max-w-screen-2xl items-center gap-8 px-8 py-3">
      {children}
    </div>
  )
}

TopBarPrimary.displayName = 'TopBar.Primary'
