import { Button } from '../../Button/Button'

interface FooterButtons {
  id: number
  title: string
  url: string
}

interface FooterDeptProps {
  deptName?: string
  buildingName?: string
  phone?: string
  email?: string
  officeNumber?: string
  footerButtons?: FooterButtons[]
}

const styles = {
  container: `flex gap-5`,
  deptList: `text-cu-black-600 text-base`,
  deptListItem: `text-base lg:pl-5 first:lg:pl-0`,
}

export const FooterDept = ({ deptName, buildingName, officeNumber, phone, email, footerButtons }: FooterDeptProps) => {
  return (
    <aside className="px-8 py-6 bg-cu-black-50 md:px-10 md:py-8">
      <div className="mx-auto md:items-center md:flex max-w-7xl">
        <div className="flex flex-col gap-2">
          {deptName && (
            <h2 className="font-semibold text-center lg:text-lg text-cu-black-900 md:text-left">{deptName}</h2>
          )}
          <ul className="gap-5 text-center divide-x lg:flex lg:divide-cu-black-300 md:text-left">
            {buildingName && (
              <li className={styles.deptListItem}>
                {officeNumber && `${officeNumber} `}
                {buildingName}
              </li>
            )}
            {phone && <li className={styles.deptListItem}>{phone}</li>}
            {email && (
              <li className={styles.deptListItem}>
                <a className="font-semibold text-cu-red-700 hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {footerButtons && (
          <div className="mt-5 ml-auto md:mt-0">
            <div className="flex flex-wrap justify-center gap-5 md:justify-end cu-buttongroup md:flex-1">
              {footerButtons &&
                footerButtons.map((link, index) => (
                  <Button key={index} title={link.title} color={index === 0 ? 'red' : 'white'} />
                ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
