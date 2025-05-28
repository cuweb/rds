import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const CalendarDaysIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={`fill-current ${className}`}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v64 256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192 128c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152V24zM48 192h80v56H48v-56zm0 104h80v64H48v-64zm128 0h96v64h-96v-64zm144 0h80v64h-80v-64zm80-48h-80v-56h80v56zm0 160v40c0 8.8-7.2 16-16 16h-64v-56h80zm-128 0v56h-96v-56h96zm-144 0v56H64c-8.8 0-16-7.2-16-16v-40h80zm144-104h-96v-56h96v56z" />
  </svg>
)

export default CalendarDaysIcon
