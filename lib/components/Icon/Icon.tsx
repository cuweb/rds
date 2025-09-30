import React, { useEffect, useState } from 'react'

export interface IconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
  basePath?: string // Path to SVG assets, defaults to CDN
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000000',
  className,
  basePath = 'https://cdn.carleton.ca/rds/assets/font-awesome/', // Default fallback
}) => {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchSvg = async () => {
      try {
        const res = await fetch(`${basePath}${name}.svg`)
        if (!res.ok) throw new Error('SVG not found')
        let svg = await res.text()
        svg = svg.replace(/<svg([^>]*)/, `<svg$1 fill="${color}" width="${size}" height="${size}"`)
        if (isMounted) setSvgMarkup(svg)
      } catch {
        if (isMounted) setSvgMarkup(null)
      }
    }
    fetchSvg()
    return () => {
      isMounted = false
    }
  }, [name, color, size, basePath])

  if (!svgMarkup) {
    return <span className={className} style={{ width: size, height: size }} />
  }

  console.log(basePath)

  return (
    <span
      className={`cu-icon ${className ? className : ''}`}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
      }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  )
}

Icon.displayName = 'Icon'
