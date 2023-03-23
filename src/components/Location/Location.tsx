/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api'

export interface LocationProps {
  lat?: string
  lng?: string
  location?: string
  zoom?: number
}
export const Location = ({ lat, lng, location, zoom = 15 }: LocationProps) => {
  const [showInfo, setShowInfo] = React.useState(false)
  const mapRef = React.useRef()
  const [activeMarker, setActiveMarker] = useState(null);
  const onMapLoad = (map:any) =>{
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  }
  const handleActiveMarker = (marker:any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    panControl: true,
    streetViewControl: true,
  }

  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 }
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: 39.739235, lng: -104.99025 }
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: 34.052235, lng: -118.243683 }
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 }
    }
  ];

  return (
    <div className="not-prose">
      <GoogleMap
        mapContainerClassName="w-full h-96"
        // center={{ lat: 40.712776, lng: -74.005974 }}
        zoom={zoom}
        options={options}
        onLoad={onMapLoad}
      >
        {/* {markers.map(marker => <MarkerF key={marker.id} title={marker.name} onClick={() => setShowInfo(true)} position={{ lat: marker.position.lat, lng: marker.position.lat }} />)} */}
        {markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
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
