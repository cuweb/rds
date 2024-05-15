interface PageHeadLoaderProps {
  content?: 'small' | 'large'
  isCenter?: boolean
}

export const PageHeadLoader = ({ content, isCenter }: PageHeadLoaderProps) => {
  return (
    <div className="animate-pulse">
      <div className={`flex flex-wrap gap-10 ${isCenter ? 'justify-center' : ''}`}>
        <div className="h-10 rounded-md w-52 bg-cu-black-100"></div>
        {content && <div className={`rounded-md bg-cu-black-100 w-full ${content == 'large' ? 'h-20' : 'h-10'}`}></div>}
      </div>
    </div>
  )
}
