import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Badge } from '../../Badge/Badge'
import { intervalToDuration } from 'date-fns'

export interface VideoCardProps {
  source: any
  tags?: Tags
  callback?: any
}

interface Tags {
  category: { id: number; name: string; slug: string }[]
}

export function VideoCard({ source, tags }: VideoCardProps) {
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTitle, setVideoTitle] = useState('')

  const handleDuration = (duration: any) => {
    setVideoDuration(duration)
  }

  useEffect(() => {
    const link = source.toString()
    if (link.includes('vimeo')) {
      fetch(`https://vimeo.com/api/oembed.json?url=${source}`)
        .then((res) => res.json())
        .then((data) => setVideoTitle(data.title))
    } else {
      fetch(`https://noembed.com/embed?url=${source}`)
        .then((res) => res.json())
        .then((data) => setVideoTitle(data.title))
    }
  }, [source])

  const duration = intervalToDuration({ start: 0, end: videoDuration * 1000 })

  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <div className="relative flex h-full flex-col">
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={source}
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            controls
            onDuration={handleDuration}
          />
        </div>
        <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
          {videoDuration && (
            <p className="text-sm italic text-cu-black-600 @sm:md:text-base">
              Duration: {`${duration.minutes}m : ${duration.seconds}s`}
            </p>
          )}
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">{videoTitle}</h3>
        </div>
        {tags && (
          <div className="mt-auto px-7 pb-5">
            {tags?.category?.map((tag) => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
