import React, { useEffect, useState } from 'react'

export interface IconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
  basePath?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000000', className, basePath }) => {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    // Fetches the SVG file from the correct path, uses basePath prop if provided, defaults to local path in development, CDN in production
    const fetchSvg = async () => {
      try {
        let resolvedBasePath = basePath
        if (!resolvedBasePath) {
          const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost'
          resolvedBasePath = isLocal ? './assets/font-awesome/' : 'https://cdn.carleton.ca/rds/assets/font-awesome/'
        }

        const res = await fetch(`${resolvedBasePath}${name}.svg`)
        if (!res.ok) throw new Error('SVG not found')
        let svg = await res.text()

        // Inject width and height attributes into the SVG tag for sizing
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

  // Render fallback span if SVG is not loaded
  if (!svgMarkup) {
    return <span className={className} style={{ width: size, height: size }} />
  }

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
