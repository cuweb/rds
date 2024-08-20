import { Dispatch, SetStateAction, useEffect } from 'react'
import { useAWSImages } from '../context/useAWSImages'

interface AWSImagesProps {
  setImages: Dispatch<SetStateAction<string[]>>
}

function AWSImages({ setImages }: AWSImagesProps) {
  const AWSImageContextData = useAWSImages()

  useEffect(() => {
    setImages(AWSImageContextData.images)
  }, [AWSImageContextData, setImages])

  return null
}

export default AWSImages
