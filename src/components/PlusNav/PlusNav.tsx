import { Link } from '../Link/Link'

export interface PlusNavProps {
  navLink: string
  navLogo: string
  navMenu: {
    [k: string]: string | []
  }[]
}

export const PlusNavWrapper = ({ navLink, navLogo }: PlusNavProps) => {
  return (
    <header className="cu-topnav border-b border-t-2 border-b-cu-black-100 border-t-cu-red bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex-none">
          <Link href={navLink}>
            <img src={navLogo} alt="Carleton University logo" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export const PlusNav = Object.assign(PlusNavWrapper, {})
