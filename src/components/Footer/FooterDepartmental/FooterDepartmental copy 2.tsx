import { Button } from '../../Button/Button'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'

interface FooterButtons {
  id: number
  title: string
  url: string
}

interface FooterDepartmentalProps {
  deptName?: string
  buildingName?: string
  officeNumber?: string
  footerButtons?: FooterButtons[]
}

const styles = {
  container: `flex gap-5`,
  deptList: `space-y-0.5 text-cu-black-600 text-base`,
  deptListItem: ``,
}

export const FooterDepartmental = ({
  deptName,
  buildingName,
  officeNumber,
  footerButtons,
}: FooterDepartmentalProps) => {
  return (
    <aside className="px-8 py-8 bg-cu-black-50 md:px-10 md:py-10">
      <div className="flex items-center mx-auto max-w-7xl">
        <div className="flex flex-col gap-2">
          {deptName && <p className={`${styles.deptListItem} text-lg font-semibold text-cu-black-900`}>{deptName}</p>}
          <div className="flex gap-20">
            <ul className={styles.deptList}>
              <li className={styles.deptListItem}>
                {officeNumber && `${officeNumber} `}
                {buildingName}
              </li>
              <li className={styles.deptListItem}>1125 Colonel By Drive</li>
              <li className={styles.deptListItem}>Ottawa, ON, K1S 5B6, Canada</li>
            </ul>
            <ul className={styles.deptList}>
              <li className={styles.deptListItem}>
                <strong>Phone:</strong> 1-613-520-2600
              </li>
              <li className={styles.deptListItem}>
                <strong>Email:</strong>{' '}
                <a className="font-semibold text-cu-red-700" href="mailto:support@carleton.ca">
                  support@carleton.ca
                </a>
              </li>
              <li className={styles.deptListItem}>
                <strong>Hours:</strong> 8:30 am — 4:30 pm
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-auto">
          {footerButtons && (
            <ButtonGroup>
              {footerButtons &&
                footerButtons.map((link, index) => (
                  <Button key={index} title={link.title} color={index === 0 ? 'red' : 'white'} />
                ))}
            </ButtonGroup>
          )}
        </div>
      </div>
    </aside>
  )
}
