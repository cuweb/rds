import { Button } from '../../Button/Button'

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
  deptList: `text-cu-black-600 text-base`,
  deptListItem: `lg:pl-5 first:lg:pl-0`,
}

export const FooterDepartmental = ({
  deptName,
  buildingName,
  officeNumber,
  footerButtons,
}: FooterDepartmentalProps) => {
  return (
    <aside className="px-8 py-8 bg-cu-black-50 md:px-10 md:py-10">
      <div className="mx-auto md:items-center md:flex max-w-7xl">
        <div className="flex flex-col gap-2">
          {deptName && (
            <p className="font-semibold text-center lg:text-lg text-cu-black-900 md:text-left">{deptName}</p>
          )}
          <ul className="gap-5 text-center divide-x lg:flex lg:divide-cu-black-300 md:text-left">
            <li className={styles.deptListItem}>
              {officeNumber && `${officeNumber} `}
              {buildingName}
            </li>
            <li className={styles.deptListItem}>1-613-520-2600</li>
            <li className={styles.deptListItem}>
              <a className="font-semibold text-cu-red-700" href="mailto:support@carleton.ca">
                support@carleton.ca
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto mt-5 md:mt=0">
          {footerButtons && (
            <div className="flex flex-wrap justify-center gap-5 md:justify-end cu-buttongroup md:flex-1">
              {footerButtons &&
                footerButtons.map((link, index) => (
                  <Button key={index} title={link.title} color={index === 0 ? 'red' : 'white'} />
                ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
