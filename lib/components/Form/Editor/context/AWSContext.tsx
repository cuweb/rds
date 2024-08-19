import { FC, createContext, useState, ReactNode } from 'react'

export interface AWSImageContextType {
  images: string[]
  addImage: (url: string) => void
}

export const AWSImageContext = createContext<AWSImageContextType | undefined>(undefined)

const AWSImageProvider: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [images, setImages] = useState<string[]>([])

  const addImage = (url: string) => {
    setImages((prevImages) => [...prevImages, url])
  }

  return <AWSImageContext.Provider value={{ images, addImage }}>{children}</AWSImageContext.Provider>
}

export { AWSImageProvider }
