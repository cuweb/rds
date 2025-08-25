import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-DDmFEvuO.js";import{L as g}from"./LocationPicker-CweSBJ0v.js";import{a as N,L as S}from"./Location-Bp9fLYBB.js";import{M as f}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Icon-CipcVhWe.js";import"./index-Chjiymov.js";import"./index-BwpV4dq1.js";import"./index-B6ujFmsw.js";import"./use-server-handoff-complete-Dsuaxz_T.js";import"./Figure-CwI8n6Hg.js";import"./propClasses-CJUCiil5.js";const K={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[r=>e.jsx(N,{googleMapsApiKey:"AIzaSyDMY0YjqjdU-AK0ptar2BxNOF3jDMKG0Os",libraries:["places"],children:e.jsx(r,{})})]},a=()=>{var s,n,i,l;const[r,o]=c.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),d=c.useCallback(m=>{o(m)},[o]);return e.jsxs(f,{children:[e.jsx(g,{singleMarker:!0,singleMarkerCallback:d})," ",e.jsx(S,{lat:(n=(s=r==null?void 0:r.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=r==null?void 0:r.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:r==null?void 0:r.address})]})};a.storyName="Single Marker";const t=()=>{var s,n,i,l;const[r,o]=c.useState({coordinates:{lat:40.712776,lng:-74.005974},address:"New York City, NY"}),d=c.useCallback(m=>{o(m)},[o]);return e.jsxs(f,{children:[e.jsx(g,{singleMarker:!0,eventAddress:"New York City, NY",singleMarkerCallback:d}),e.jsx(S,{lat:(n=(s=r==null?void 0:r.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(l=(i=r==null?void 0:r.coordinates)==null?void 0:i.lng)==null?void 0:l.toString(),location:r==null?void 0:r.address})]})};t.storyName="Location Address";a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"EventAddress"};var k,p,u;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(M=(b=t.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const O=["Default","EventAddress"];export{a as Default,t as EventAddress,O as __namedExportsOrder,K as default};
