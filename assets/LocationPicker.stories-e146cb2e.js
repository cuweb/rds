import{a as f,j as c}from"./jsx-runtime-9d2cd5de.js";import{r}from"./index-580b8df0.js";import{L as d}from"./LocationPicker-89091bfa.js";import{L as S}from"./Location-d41b4ac2.js";import{C as x}from"./Column-16e6c206.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-03b14371.js";import"./index-4d501b15.js";import"./combobox-6d6ee991.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-40c2495e.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./optionClasses-c5aec0a8.js";const O={title:"Components/Location Picker",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{var o,i,l,t;const[e,a]=r.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),m=r.useCallback(M=>{a(M)},[a]);return f(x,{maxWidth:"5xl",children:[c(d,{singleMarker:!0,singleMarkerCallback:m})," ",c(S,{lat:(i=(o=e==null?void 0:e.coordinates)==null?void 0:o.lat)==null?void 0:i.toString(),lng:(t=(l=e==null?void 0:e.coordinates)==null?void 0:l.lng)==null?void 0:t.toString(),location:e==null?void 0:e.address})]})},s=()=>{const[e,a]=r.useState([]),[m,o]=r.useState({lat:45.3850225,lng:-75.6946679}),i=r.useCallback(t=>a(t),[a]),l=r.useCallback(t=>{t.lat&&t.lng&&o(t)},[o]);return f(x,{maxWidth:"5xl",children:[c(d,{posCallback:i,centerCallback:l})," ",c(S,{markers:e,center:m})]})};n.storyName="Single Marker";s.storyName="Multiple Marker";var u,p,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var C,g,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const w=["Default","MultiMarker"];export{n as Default,s as MultiMarker,w as __namedExportsOrder,O as default};
//# sourceMappingURL=LocationPicker.stories-e146cb2e.js.map
