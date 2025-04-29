import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-DDmFEvuO.js";import{L as g}from"./LocationPicker-ClBe6WdK.js";import{a as N,L as S}from"./Location-CD8RJ6Vu.js";import{M as f}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./portal-DEnTgecq.js";import"./use-server-handoff-complete-DXjT3LgW.js";import"./index-D9S4NuzN.js";import"./index-fNjTmf9T.js";import"./MagnifyingGlassIcon-C8JQTb0o.js";import"./Figure-GVCf42Z2.js";import"./propClasses-Dlt7SDjn.js";const U={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[r=>e.jsx(N,{googleMapsApiKey:void 0,libraries:["places"],children:e.jsx(r,{})})]},t=()=>{var s,n,i,l;const[r,o]=c.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),d=c.useCallback(m=>{o(m)},[o]);return e.jsxs(f,{children:[e.jsx(g,{singleMarker:!0,singleMarkerCallback:d})," ",e.jsx(S,{lat:(n=(s=r==null?void 0:r.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=r==null?void 0:r.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:r==null?void 0:r.address})]})};t.storyName="Single Marker";const a=()=>{var s,n,i,l;const[r,o]=c.useState({coordinates:{lat:40.712776,lng:-74.005974},address:"New York City, NY"}),d=c.useCallback(m=>{o(m)},[o]);return e.jsxs(f,{children:[e.jsx(g,{singleMarker:!0,eventAddress:"New York City, NY",singleMarkerCallback:d}),e.jsx(S,{lat:(n=(s=r==null?void 0:r.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=r==null?void 0:r.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:r==null?void 0:r.address})]})};a.storyName="Location Address";t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"EventAddress"};var k,p,u;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,b,M;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(M=(b=a.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const q=["Default","EventAddress"];export{t as Default,a as EventAddress,q as __namedExportsOrder,U as default};
