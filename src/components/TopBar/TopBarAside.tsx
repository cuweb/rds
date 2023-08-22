import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { navAsideStyles } from './TopBar.Styles'

export interface TopBarAsideProps {
  showGive?: boolean
  showLogin?: boolean
}

export const TopBarAside = ({ showGive, showLogin }: TopBarAsideProps) => {
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

      {/* <button type="button" aria-label="global-cu-navigation" className={navAsideStyles.megaMenuButton}>
        Mega Man
      </button> */}
    </div>
  )
}

TopBarAside.displayName = 'TopBar.Aside'
