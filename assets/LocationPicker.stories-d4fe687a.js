import{j as a}from"./jsx-runtime-7ce7b810.js";import{r}from"./index-37ba2b57.js";import{L as p}from"./LocationPicker-6a5a2b34.js";import{L as f}from"./Location-9ac98c4e.js";import{C as x}from"./Column-7b9f91b9.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./XMarkIcon-d71bb9d6.js";import"./combobox-b10c8063.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-resolve-button-type-39f07965.js";import"./use-tracked-pointer-a7a12abc.js";import"./platform-c0b4c731.js";import"./index-4da2af8c.js";import"./globalClasses-d1a81871.js";import"./optionClasses-c898b830.js";const w={title:"Components/Location Picker",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{var s,l,c,e;const[t,o]=r.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),m=r.useCallback(S=>{o(S)},[o]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(p,{singleMarker:!0,singleMarkerCallback:m})," ",a.jsx(f,{lat:(l=(s=t==null?void 0:t.coordinates)==null?void 0:s.lat)==null?void 0:l.toString(),lng:(e=(c=t==null?void 0:t.coordinates)==null?void 0:c.lng)==null?void 0:e.toString(),location:t==null?void 0:t.address})]})},i=()=>{const[t,o]=r.useState([]),[m,s]=r.useState({lat:45.3850225,lng:-75.6946679}),l=r.useCallback(e=>o(e),[o]),c=r.useCallback(e=>{e.lat&&e.lng&&s(e)},[s]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(p,{posCallback:l,centerCallback:c})," ",a.jsx(f,{markers:t,center:m})]})};n.storyName="Single Marker";i.storyName="Multiple Marker";var u,d,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var C,g,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const z=["Default","MultiMarker"];export{n as Default,i as MultiMarker,z as __namedExportsOrder,w as default};
//# sourceMappingURL=LocationPicker.stories-d4fe687a.js.map
