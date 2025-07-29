import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-DDmFEvuO.js";import{L as g}from"./LocationPicker-BzeauxuG.js";import{a as N,L as S}from"./Location-DQhOg-yI.js";import{M as f}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./index-CvZzGSl0.js";import"./index-fNjTmf9T.js";import"./use-server-handoff-complete-Dsuaxz_T.js";import"./MagnifyingGlassIcon-C8JQTb0o.js";import"./Figure-C9mfy0nb.js";import"./propClasses-B5Ri1ApJ.js";const R={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[e=>r.jsx(N,{googleMapsApiKey:void 0,libraries:["places"],children:r.jsx(e,{})})]},a=()=>{var s,n,i,l;const[e,o]=c.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),d=c.useCallback(m=>{o(m)},[o]);return r.jsxs(f,{children:[r.jsx(g,{singleMarker:!0,singleMarkerCallback:d})," ",r.jsx(S,{lat:(n=(s=e==null?void 0:e.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:e==null?void 0:e.address})]})};a.storyName="Single Marker";const t=()=>{var s,n,i,l;const[e,o]=c.useState({coordinates:{lat:40.712776,lng:-74.005974},address:"New York City, NY"}),d=c.useCallback(m=>{o(m)},[o]);return r.jsxs(f,{children:[r.jsx(g,{singleMarker:!0,eventAddress:"New York City, NY",singleMarkerCallback:d}),r.jsx(S,{lat:(n=(s=e==null?void 0:e.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:e==null?void 0:e.address})]})};t.storyName="Location Address";a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"EventAddress"};var k,p,u;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
  return <Main>
      <LocationPicker singleMarker singleMarkerCallback={markerCallback} />{' '}
      <Location lat={coordinates?.coordinates?.lat?.toString()} lng={coordinates?.coordinates?.lng?.toString()} location={coordinates?.address} />
    </Main>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,b,M;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
      lat: 40.712776,
      lng: -74.005974
    },
    address: 'New York City, NY'
  });
  const markerCallback = useCallback((coord: SingleMarkerInterface) => {
    setCoordinates(coord);
  }, [setCoordinates]);
  return <Main>
      <LocationPicker singleMarker eventAddress="New York City, NY" singleMarkerCallback={markerCallback} />
      <Location lat={coordinates?.coordinates?.lat?.toString()} lng={coordinates?.coordinates?.lng?.toString()} location={coordinates?.address} />
    </Main>;
}`,...(M=(b=t.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const U=["Default","EventAddress"];export{a as Default,t as EventAddress,U as __namedExportsOrder,R as default};
