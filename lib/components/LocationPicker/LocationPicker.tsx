import { useJsApiLoader } from '@react-google-maps/api'
import { useRef, useEffect } from 'react'
import { Icon } from '../Icon/Icon'

const libraries: 'places'[] = ['places']

export interface SingleMarkerInterface {
  address: string
  coordinates: { lat: number; lng: number }
}

interface ILocationPickerProps {
  address?: string
  markerCallback?: (coordinates: SingleMarkerInterface) => void
}

export function LocationPicker({ address, markerCallback }: ILocationPickerProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const markerCallbackRef = useRef(markerCallback)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  useEffect(() => {
    markerCallbackRef.current = markerCallback
  }, [markerCallback])

  useEffect(() => {
    if (address && inputRef.current) {
      inputRef.current.value = address
    }
  }, [address])

  useEffect(() => {
    const input = inputRef.current
    const maps = input?.ownerDocument.defaultView?.google?.maps
    if (!isLoaded || !input || !maps?.places) return

    const autocomplete = new maps.places.Autocomplete(input)
    const listener = autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (place.geometry?.location) {
        markerCallbackRef.current?.({
          coordinates: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          address: place.formatted_address || '',
        })
      }
    })

    return () => listener.remove()
  }, [isLoaded])

  return (
    <div className="relative">
      <input
        ref={inputRef}
        defaultValue={address}
        placeholder="Search for a location"
        className="w-full rounded border border-gray-300 py-2 pl-10 pr-2"
      />
      <Icon
        name="magnifying-glass"
        size={16}
        className="pointer-events-none absolute left-3.5 top-3.5"
        color="#999999"
      />
    </div>
  )
}
