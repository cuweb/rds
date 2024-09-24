export interface TimelineItemProps {
  aside: string
  title: string
  description: string
}

export const TimelineItem = ({ aside, title, description }: TimelineItemProps) => {
  return (
    <li className="relative flex items-start">
      {/* Circle style */}
      <span className="absolute bg-red-500 rounded-full -ml-[35px] w-3 h-3 -left-1 top-3.5"></span>
      <div className="pl-10">
        {/* Aside styling */}
        <span className="text-sm italic text-gray-600 mb-1 -ml-[220px] text-right w-full">{aside}</span>
        {/* Title styling */}
        <h3 style={{ marginTop: '-30px', marginBottom: '0px' }} className="text-lg font-bold text-gray-800 -ml-[50px]">
          {title}
        </h3>{' '}
        {/* Use padding to move down */}
        {/* Description styling */}
        <p
          style={{ marginTop: '5px', marginBottom: '60px' }}
          className="text-sm text-gray-600 leading-relaxed mb-1 -ml-[50px] "
        >
          {description}
        </p>{' '}
      </div>
    </li>
  )
}
