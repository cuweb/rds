import { useContext } from 'react'
import { AWSImageContext, AWSImageContextType } from './AWSContext'

const useAWSImages = (): AWSImageContextType => {
  const context = useContext(AWSImageContext)
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider')
  }
  return context
}

export { useAWSImages }
