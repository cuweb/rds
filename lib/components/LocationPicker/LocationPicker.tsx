import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
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
  // eslint-disable-next-line no-undef
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  useEffect(() => {
    if (address && inputRef.current) {
      inputRef.current.value = address
    }
  }, [address])

  // eslint-disable-next-line no-undef
  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete
  }

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace()
    if (place?.geometry?.location) {
      const newAddress = place.formatted_address || ''
      const newLat = place.geometry.location.lat()
      const newLng = place.geometry.location.lng()

      markerCallback?.({
        coordinates: { lat: newLat, lng: newLng },
        address: newAddress,
      })
    }
  }

  if (!isLoaded) return null

  return (
    <div className="relative">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          ref={inputRef}
          defaultValue={address}
          placeholder="Search for a location"
          style={{
            width: '100%',
            padding: '8px 8px 8px 40px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </Autocomplete>
      <Icon
        name="magnifying-glass"
        size={16}
        className="pointer-events-none absolute left-3.5 top-3.5"
        color="#999999"
      />
    </div>
  )
}
