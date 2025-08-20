import React, { useEffect, useState } from 'react'

export interface IconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const fetchSvg = async () => {
      try {
        const res = await fetch(`/lib/assets/font-awesome/${name}.svg`)
        if (!res.ok) throw new Error('SVG not found')
        let svg = await res.text()
        // Replace color
        svg = svg.replace(/currentColor|#000|#000000/g, color || 'currentColor')
        // Inject width and height attributes into the SVG tag
        svg = svg.replace(/<svg([^>]*)/, `<svg$1 width="${size}" height="${size}"`)
        if (isMounted) setSvgMarkup(svg)
      } catch {
        if (isMounted) setSvgMarkup(null)
      }
    }
    fetchSvg()
    return () => {
      isMounted = false
    }
  }, [name, color, size])

  if (!svgMarkup) {
    return <span className={className} style={{ width: size, height: size }} />
  }

  return (
    <span
      className={`cu-icon ${className}`}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        color,
        overflow: 'hidden',
      }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  )
}

Icon.displayName = 'Icon'
