/* eslint-disable @typescript-eslint/no-unused-vars */
import { Combobox } from '@headlessui/react'
import { useField } from 'formik'
import type { FieldHookConfig } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Location } from '../../Location/Location'
import { formStyles } from '../../../utils/formClasses'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { LocationPicker } from '../../LocationPicker/LocationPicker'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export interface PickerProps {
  label?: string
}

export const PlacesAutoComplete = ({ label, ...props }: PickerProps & FieldHookConfig<string>) => {
  interface SingleMarkerInterface {
    coordinates: { lat: number; lng: number }
    address: string
  }
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
    },
    [setCoordinates],
  )
  return (
    <>
      <LocationPicker singleMarker singleMarkerCallback={markerCallback} />
      <Location
        lat={coordinates?.coordinates?.lat?.toString()}
        lng={coordinates?.coordinates?.lng?.toString()}
        location={coordinates?.address}
      />
      </>
  )
}
