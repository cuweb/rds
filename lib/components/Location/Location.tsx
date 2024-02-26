/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api'

export interface LocationProps {
  lat?: string
  lng?: string
  location?: string
  zoom?: number
  markers?: any
  center?: any
  singleMarker?: boolean
}
export const Location = ({ markers, location, lat, lng, zoom = 15, center }: LocationProps) => {
  const [showInfo, setShowInfo] = React.useState(false)

  const mapRef = React.useRef()

  const [activeMarker, setActiveMarker] = useState(null)

  const onMapLoad = React.useCallback((map: any) => {
    const bounds = new google.maps.LatLngBounds()
    if (markers && markers?.length !== 0) {
      markers?.forEach(({ position }: any) => bounds.extend(position))
      map.fitBounds(bounds)
    } else {
      mapRef.current = map
    }
  }, [])

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    panControl: true,
    streetViewControl: true,
  }

  return (
    <div className="cu-location not-prose not-contained">
      <GoogleMap
        mapContainerClassName="w-full h-96"
        zoom={markers && markers?.length !== 0 ? 10 : zoom}
        options={options}
        center={
          center
            ? { lat: parseFloat(center?.lat), lng: parseFloat(center?.lng) }
            : lat && lng
              ? { lat: Number(lat), lng: Number(lng) }
              : { lat: 45.3850225, lng: -75.6946679 }
        }
        onLoad={onMapLoad}
      >
        <MarkerF title={location} onClick={() => setShowInfo(true)} position={{ lat: Number(lat), lng: Number(lng) }} />
        {markers &&
          markers?.map(({ id, name, position }: any) => (
            <MarkerF key={id} position={position} onClick={() => handleActiveMarker(id)}>
              {activeMarker === id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          ))}

        {showInfo && (
          <InfoWindowF
            position={{
              lat: Number(lat) + 0.0009,
              lng: Number(lng),
            }}
            onCloseClick={() => setShowInfo(false)}
          >
            <div className="text-center text-base">
              <p>{location}</p>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location}&z=15`}
                  className="font-semibold text-cu-red"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  )
}
