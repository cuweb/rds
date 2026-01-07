import { useField } from 'formik'
import { useState, useCallback } from 'react'

import { LocationPicker } from '../../LocationPicker/LocationPicker'
import { Location } from '../../Location/Location'
import { FieldComponentProps } from '../FormField/FormField'

export interface SingleMarkerInterface {
  coordinates: { lat: number; lng: number }
  address: string
}

export interface PlacesAutoCompleteInterface extends FieldComponentProps {
  showmap?: boolean
}

export const PlacesAutoComplete = ({ name, showmap = true, ...rest }: PlacesAutoCompleteInterface) => {
  const [field, meta, helper] = useField(name)

  const [coordinates, setCoordinates] = useState<{ coordinates: { lat: number; lng: number }; address: string }>({
    coordinates: {
      lat: 45.3850225,
      lng: -75.6946679,
    },
    address: "Carleton University Raven's Nest",
  })
  const markerCallback = useCallback(
    (coord: SingleMarkerInterface) => {
      setCoordinates(coord)
      helper.setValue(coord)
    },
    [setCoordinates],
  )
  return (
    <>
      <div
        {...field}
        {...rest}
        id={name}
        className="cu-placesautocomplete grid gap-5"
        aria-invalid={meta.touched && meta.error ? true : false}
      >
        <LocationPicker markerCallback={markerCallback} address={coordinates?.address} />
        {showmap && (
          <Location
            lat={coordinates?.coordinates?.lat?.toString()}
            lng={coordinates?.coordinates?.lng?.toString()}
            location={coordinates?.address}
          />
        )}
      </div>
    </>
  )
}
