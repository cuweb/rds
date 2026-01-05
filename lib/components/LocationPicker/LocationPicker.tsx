import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import { useRef, useEffect } from 'react'
import { Icon } from '../Icon/Icon'

const libraries: 'places'[] = ['places']

interface SingleMarkerInterface {
  coordinates: { lat: number; lng: number }
  address: string
}

interface ILocationPickerProps {
  eventAddress?: string
  markerCallback?: (coord: SingleMarkerInterface) => void
}

export function LocationPicker({ eventAddress, markerCallback }: ILocationPickerProps) {
  // eslint-disable-next-line no-undef
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  useEffect(() => {
    if (eventAddress && inputRef.current) {
      inputRef.current.value = eventAddress
    }
  }, [eventAddress])

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
          defaultValue={eventAddress}
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
