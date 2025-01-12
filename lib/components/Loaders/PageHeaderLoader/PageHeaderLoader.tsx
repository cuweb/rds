interface PageHeaderLoaderProps {
  content?: 'small' | 'large'
  isCenter?: boolean
}

export const PageHeaderLoader = ({ content, isCenter }: PageHeaderLoaderProps) => {
  return (
    <div className="cu-loader cu-loader--pageheaders cu-component-updated animate-pulse">
      <div className={`flex flex-wrap gap-10 ${isCenter ? 'justify-center' : ''}`}>
        <div className="rounded-md h-20 w-80 bg-cu-black-100"></div>
        {content && <div className={`rounded-md bg-cu-black-100 w-full ${content == 'large' ? 'h-20' : 'h-10'}`}></div>}
      </div>
    </div>
  )
}
