import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{L as p}from"./LocationPicker-8vQ6MId4.js";import{C as k}from"./Column-DkIMngqi.js";import{a as C,L as f}from"./Location-BcltK__t.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./portal-9dIYvqxP.js";import"./use-server-handoff-complete-BHJL6XQy.js";import"./index-DxjWwZXO.js";import"./XMarkIcon-CT1waDZW.js";import"./MagnifyingGlassIcon-CTArdofi.js";import"./propClasses-CbluzEXK.js";var S={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};const y={title:"Components/Location Picker",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[r=>t.jsx(C,{googleMapsApiKey:S.VITE_APP_GOOGLE_MAPS_API_KEY,libraries:["places"],children:t.jsx(r,{})})]},e=()=>{var o,s,n,i;const[r,a]=l.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),u=l.useCallback(g=>{a(g)},[a]);return t.jsxs(k,{maxWidth:"5xl",children:[t.jsx(p,{singleMarker:!0,singleMarkerCallback:u})," ",t.jsx(f,{lat:(s=(o=r==null?void 0:r.coordinates)==null?void 0:o.lat)==null?void 0:s.toString(),lng:(i=(n=r==null?void 0:r.coordinates)==null?void 0:n.lng)==null?void 0:i.toString(),location:r==null?void 0:r.address})]})};e.storyName="Single Marker";e.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,y as default};
