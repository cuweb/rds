import{j as a}from"./jsx-runtime-daf202a7.js";import{r}from"./index-ec8b93d8.js";import{L as u}from"./LocationPicker-2d8fc745.js";import{L as f}from"./Location-c4e53945.js";import{C as x}from"./Column-985b9376.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e4ae510c.js";import"./index-58d3fd43.js";import"./combobox-b5286f3e.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-tracked-pointer-b81bf215.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./optionClasses-767b8be6.js";const F={title:"Components/Location Picker",component:u,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{var s,l,c,t;const[e,o]=r.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),m=r.useCallback(S=>{o(S)},[o]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(u,{singleMarker:!0,singleMarkerCallback:m})," ",a.jsx(f,{lat:(l=(s=e==null?void 0:e.coordinates)==null?void 0:s.lat)==null?void 0:l.toString(),lng:(t=(c=e==null?void 0:e.coordinates)==null?void 0:c.lng)==null?void 0:t.toString(),location:e==null?void 0:e.address})]})},i=()=>{const[e,o]=r.useState([]),[m,s]=r.useState({lat:45.3850225,lng:-75.6946679}),l=r.useCallback(t=>o(t),[o]),c=r.useCallback(t=>{t.lat&&t.lng&&s(t)},[s]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(u,{posCallback:l,centerCallback:c})," ",a.jsx(f,{markers:e,center:m})]})};n.storyName="Single Marker";i.storyName="Multiple Marker";var d,p,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  interface SingleMarkerInterface {
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  }
  const [coordinates, setCoordinates] = useState<{
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  }>({
    coordinates: {
      lat: 45.3850225,
      lng: -75.6946679
    },
    address: "Carleton University Raven's Nest"
  });
  const markerCallback = useCallback((coord: SingleMarkerInterface) => {
    setCoordinates(coord);
  }, [setCoordinates]);
  return <Column maxWidth="5xl">
      <LocationPicker singleMarker singleMarkerCallback={markerCallback} />{' '}
      <Location lat={coordinates?.coordinates?.lat?.toString()} lng={coordinates?.coordinates?.lng?.toString()} location={coordinates?.address} />
    </Column>;
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var C,g,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  interface PositionInterface {
    name: string;
    id: string;
    position: object;
  }
  interface CenterInterface {
    lat: number;
    lng: number;
  }
  const [position, setPosition] = useState<{
    name: string;
    id: string;
    position: object;
  }[]>([]);
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 45.3850225,
    lng: -75.6946679
  });
  const posCallback = useCallback((pos: PositionInterface[]) => setPosition(pos), [setPosition]);
  const centerCallback = useCallback((center: CenterInterface) => {
    if (center.lat && center.lng) setCenter(center);
  }, [setCenter]);
  return <Column maxWidth="5xl">
      <LocationPicker posCallback={posCallback} centerCallback={centerCallback} />{' '}
      <Location markers={position} center={center} />
    </Column>;
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const O=["Default","MultiMarker"];export{n as Default,i as MultiMarker,O as __namedExportsOrder,F as default};
//# sourceMappingURL=LocationPicker.stories-eb75285a.js.map
