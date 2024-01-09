import { useState, useEffect } from 'react'

export interface CardIconThumbProps {
  icon?: string
  bgType?: 'none' | 'red' | 'white'
  hasShadow?: boolean
}

export const CardIconThumb = ({ icon, bgType = 'red', hasShadow }: CardIconThumbProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const iconShadow = hasShadow ? 'shadow-md' : ''

  const iconPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'
  // const iconPath = './assets/font-awesome/'
  // console.log(svgContent)

  useEffect(() => {
    const fetchSvgContent = async () => {
      try {
        const response = await fetch(`${iconPath}${icon}.svg`)
        if (response.ok) {
          const svgText = await response.text()
          setSvgContent(svgText)
        } else {
          console.error(`Failed to fetch SVG for icon: ${icon}`)
        }
      } catch (error) {
        console.error(`Error fetching SVG for icon: ${icon}`, error)
      }
    }

    fetchSvgContent()
  }, [icon])

  // Set classes on icon and wrapping div
  let iconDiv

  switch (bgType) {
    case 'none':
      iconDiv = 'w-10 h-10'
      break
    case 'red':
      iconDiv = 'w-16 h-16 bg-cu-red rounded-md p-3'
      break
    case 'white':
      iconDiv = 'w-16 h-16 bg-white rounded-md p-3'
      break
    default:
      iconDiv = ''
      break
  }

  return (
    <>
      {svgContent && (
        <figure
          style={{ fill: 'white' }}
          className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${iconDiv} ${iconShadow}`}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'
