import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const ClockIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`fill-current ${className}`}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
  </svg>
)

export default ClockIcon
