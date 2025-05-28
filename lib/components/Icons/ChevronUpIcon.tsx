import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const ChevronUpIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`fill-current ${className}`}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
  </svg>
)

export default ChevronUpIcon
