/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api'

export interface LocationProps {
  lat?: string
  lng?: string
  location?: string
  zoom?: number
  markers?:any
}
export const Location = ({ lat, lng, location, zoom  ,markers }: LocationProps) => {
  const [showInfo, setShowInfo] = React.useState(false)
  const mapRef = React.useRef()

  const [activeMarker, setActiveMarker] = useState(null)

  const onMapLoad =  React.useCallback((map: any) => {
    const bounds = new google.maps.LatLngBounds()
    if(markers){
      markers.forEach(({ position }:any) => bounds.extend(position))
      map.fitBounds(bounds)
    }  
    mapRef.current = map
  },[])

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
    <div className="not-prose">
      <GoogleMap
        mapContainerClassName="w-full h-96"
        zoom={markers? 2 : 15}
        options={options}
        center={lat && lng ? { lat: Number(lat), lng: Number(lng) }: {lat:0, lng:0}}
        onLoad={onMapLoad}
      >
        <MarkerF title={location} onClick={() => setShowInfo(true)} position={{ lat: Number(lat), lng: Number(lng) }} />
        {markers?.map(({id, name, position }:any) => (
          <MarkerF key ={id} position={position} onClick={() => handleActiveMarker(id)}>
            
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
            <div>
              <p className="font-regular text-center text-base">{location}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${location}&z=15`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-center font-medium text-blue-600">View on Google Maps</p>
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  )
}
