import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { navAsideStyles } from './Nav.Styles'

export interface NavAsideProps {
  showGive?: boolean
  showLogin?: boolean
}

export const NavAside = ({ showGive, showLogin }: NavAsideProps) => {
  return (
    <div className={navAsideStyles.asideWrapper}>
      <MagnifyingGlassIcon className={navAsideStyles.searchIcon} />

      <ul className={navAsideStyles.unorderedList}>
        {showGive && (
          <li className={navAsideStyles.listHidden}>
            <a href="https://futurefunder.carleton.ca/" className={navAsideStyles.listItemLink}>
              Give
            </a>
          </li>
        )}
        {showLogin && (
          <li>
            <a href="/" className={navAsideStyles.listItemLink}>
              Login
            </a>
          </li>
        )}
        <li>
          <a href="https://admissions.carleton.ca/apply/" className={navAsideStyles.listItemLink}>
            Apply
          </a>
        </li>
      </ul>
    </div>
  )
}

NavAside.displayName = 'Nav.Aside'
