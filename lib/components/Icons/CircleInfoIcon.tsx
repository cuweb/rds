import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const CircleInfoIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`fill-current ${className}`}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24v-64h-24c-13.3 0-24-10.7-24-24s10.7-24 
             24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 
             24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    />
  </svg>
)

export default CircleInfoIcon
