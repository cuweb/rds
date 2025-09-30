import React, { useEffect, useState } from 'react'

export interface IconProps {
  name: string
  iconPath?: string
  size?: number | string
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000000', className, iconPath }) => {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  const setPath = iconPath ?? (isLocal ? './assets/font-awesome/' : 'https://cuweb.github.io/rds/assets/font-awesome/')

  useEffect(() => {
    let isMounted = true

    const fetchSvg = async () => {
      try {
        const res = await fetch(`${setPath}${name}.svg`)
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
  }, [name, color, size, setPath])

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
