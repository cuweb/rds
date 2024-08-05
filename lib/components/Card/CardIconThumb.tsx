import { useEffect, useState } from 'react'

export interface CardIconThumbProps {
  icon?: string
  assetPath?: string
}

export const CardIconThumb = ({ icon, assetPath = './assets/font-awesome/' }: CardIconThumbProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)

  useEffect(() => {
    const fetchSvg = async () => {
      if (!icon) return

      const modifiedIcon = icon.startsWith('file-') && icon.endsWith('x') ? icon.substring(0, icon.length - 1) : icon
      const iconPath = `${assetPath}${modifiedIcon}.svg`

      try {
        const response = await fetch(iconPath)
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`)
        }
        const text = await response.text()
        setSvgContent(text)
      } catch (error) {
        console.error('Error fetching SVG:', error)
        setSvgContent(null)
      }
    }

    fetchSvg()
  }, [icon, assetPath])

  return (
    <figure className="flex mx-6 mt-5 mb-1.5 overflow-hidden">
      {svgContent ? (
        <div
          className="object-cover max-h-full cu-icon-thumb w-12 h-12 max-w-none cu-icon-red"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <p>{icon ? 'Loading...' : 'No icon provided'}</p>
      )}
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'
