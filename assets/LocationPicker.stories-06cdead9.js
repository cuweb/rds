import{j as a}from"./jsx-runtime-daf202a7.js";import{r}from"./index-ec8b93d8.js";import{L as p}from"./LocationPicker-83e437ce.js";import{L as f}from"./Location-1518fbe7.js";import{C as x}from"./Column-e7066854.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-58d3fd43.js";import"./combobox-6144e67a.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-tracked-pointer-50f23cfa.js";import"./platform-18d24fa4.js";import"./MagnifyingGlassIcon-6a66de15.js";import"./XMarkIcon-81eef1c8.js";import"./index-73f8b247.js";import"./globalClasses-f623d047.js";import"./optionClasses-62a5285f.js";const w={title:"Components/Location Picker",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{var s,l,c,e;const[t,o]=r.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),m=r.useCallback(S=>{o(S)},[o]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(p,{singleMarker:!0,singleMarkerCallback:m})," ",a.jsx(f,{lat:(l=(s=t==null?void 0:t.coordinates)==null?void 0:s.lat)==null?void 0:l.toString(),lng:(e=(c=t==null?void 0:t.coordinates)==null?void 0:c.lng)==null?void 0:e.toString(),location:t==null?void 0:t.address})]})},i=()=>{const[t,o]=r.useState([]),[m,s]=r.useState({lat:45.3850225,lng:-75.6946679}),l=r.useCallback(e=>o(e),[o]),c=r.useCallback(e=>{e.lat&&e.lng&&s(e)},[s]);return a.jsxs(x,{maxWidth:"5xl",children:[a.jsx(p,{posCallback:l,centerCallback:c})," ",a.jsx(f,{markers:t,center:m})]})};n.storyName="Single Marker";i.storyName="Multiple Marker";var u,d,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=LocationPicker.stories-06cdead9.js.map
