// interface SingleMarkerInterface {
//   coordinates: { lat: number; lng: number }
//   address: string
// }

// export interface PlacesAutoCompleteProps {
//   condition?: () => boolean
//   eventAddress?: string
//   eventLatitude?: string
//   eventLongitude?: string
// }

export const PlacesAutoComplete = () => {
  // const [field, meta, helper] = useField(props)
  // const [coordinates, setCoordinates] = useState<{ coordinates: { lat: number; lng: number }; address: string }>({
  //   coordinates: {
  //     lat: 45.3850225,
  //     lng: -75.6946679,
  //   },
  //   address: "Carleton University Raven's Nest",
  // })
  // const markerCallback = useCallback(
  //   (coord: SingleMarkerInterface) => {
  //     setCoordinates(coord)
  //     helper.setValue(coord)
  //   },
  //   [setCoordinates],
  // )
  return (
    <>
      {/* <div
          {...field}
          id={field.name}
          className="cu-placesautocomplete grid gap-5"
          aria-invalid={meta.touched && meta.error ? true : false}
        >
          <LocationPicker
            singleMarker
            singleMarkerCallback={markerCallback}
            eventAddress={eventAddress}
            eventLatitude={Number(eventLatitude)}
            eventLongitude={Number(eventLongitude)}
          />
          <Location
            lat={coordinates?.coordinates?.lat?.toString()}
            lng={coordinates?.coordinates?.lng?.toString()}
            location={coordinates?.address}
          />
        </div> */}
      <p> Location Picker with input field and an optional map </p>
    </>
  )
}
