import { ShareIcon } from '@heroicons/react/24/outline'
import { Button } from '../Button/Button'
import { DropDown, DropDownItemProps } from '../DropDown/DropDown'

export interface SocialShareProps {
  title: string
  link: string
}

export const SocialShare = ({ title, link }: SocialShareProps) => {
  const ShareItem: DropDownItemProps[] = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${link}`,
      title: (
        <div className="flex items-center text-sm">
          <svg className="mr-2 h-4 w-4 fill-cu-black-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
          Twitter
        </div>
      ),
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${link}`,
      title: (
        <div className="flex items-center text-sm">
          <svg className="mr-2 h-4 w-4 fill-cu-black-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
          LinkedIn
        </div>
      ),
    },
    {
      href: `http://www.facebook.com/sharer.php?u=${link}&t=${title}`,
      title: (
        <div className="flex items-center text-sm">
          <svg className="mr-2 h-4 w-4 fill-cu-black-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
          Facebook
        </div>
      ),
    },
    {
      href: `mailto:?subject=${title}&body=${link}`,
      title: (
        <div className="flex items-center text-sm">
          <svg className="mr-2 h-4 w-4 fill-cu-black-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          Email
        </div>
      ),
    },
  ]
  return (
    <DropDown listItems={ShareItem}>
      <Button title="Share Event" hasDropDown isType="solid" color="grey" isSmall icon={ShareIcon} />
    </DropDown>
  )
}
