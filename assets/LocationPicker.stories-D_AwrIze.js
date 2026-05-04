import{j as r}from"./jsx-runtime-eqm8a039.js";import{r as d}from"./iframe-D5OL70jr.js";import{L as g}from"./LocationPicker-CaeyTcd-.js";import{L as b,a as N}from"./Location-C_zUCWnq.js";import{M}from"./Main-Dl7wrmde.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-C_mUqodl.js";import"./index-DY3DefEW.js";import"./index-BlBL_1J_.js";import"./Figure-CRC6tV8m.js";import"./propClasses-620uA3Rh.js";const D={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[e=>r.jsx(N,{googleMapsApiKey:"AIzaSyDMY0YjqjdU-AK0ptar2BxNOF3jDMKG0Os",libraries:["places"],children:r.jsx(e,{})})]},a=()=>{var o,n,i,c;const[e,s]=d.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),l=d.useCallback(m=>{s(m)},[s]);return r.jsxs(M,{children:[r.jsx(g,{address:e.address,markerCallback:l}),r.jsx(b,{lat:(n=(o=e==null?void 0:e.coordinates)==null?void 0:o.lat)==null?void 0:n.toString(),lng:(c=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:c.toString(),location:e==null?void 0:e.address})]})};a.storyName="Single Marker";const t=()=>{var o,n,i,c;const[e,s]=d.useState({coordinates:{lat:40.712776,lng:-74.005974},address:"New York City, NY"}),l=d.useCallback(m=>{s(m)},[s]);return r.jsxs(M,{children:[r.jsx(g,{address:"New York City, NY",markerCallback:l}),r.jsx(b,{lat:(n=(o=e==null?void 0:e.coordinates)==null?void 0:o.lat)==null?void 0:n.toString(),lng:(c=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:c.toString(),location:e==null?void 0:e.address})]})};t.storyName="Location Address";a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"EventAddress"};var k,p,u;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  interface SingleMarkerInterface {
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  }
  const [coordinates, setCoordinates] = useState<SingleMarkerInterface>({
    coordinates: {
      lat: 45.3850225,
      lng: -75.6946679
    },
    address: "Carleton University Raven's Nest"
  });
  const markerCallback = useCallback((coordinates: SingleMarkerInterface) => {
    setCoordinates(coordinates);
  }, [setCoordinates]);
  return <Main>
      <LocationPicker address={coordinates.address} markerCallback={markerCallback} />
      <Location lat={coordinates?.coordinates?.lat?.toString()} lng={coordinates?.coordinates?.lng?.toString()} location={coordinates?.address} />
    </Main>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,S,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  interface SingleMarkerInterface {
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  }
  const [coordinates, setCoordinates] = useState<SingleMarkerInterface>({
    coordinates: {
      lat: 40.712776,
      lng: -74.005974
    },
    address: 'New York City, NY'
  });
  const markerCallback = useCallback((coordinates: SingleMarkerInterface) => {
    setCoordinates(coordinates);
  }, [setCoordinates]);
  return <Main>
      <LocationPicker address="New York City, NY" markerCallback={markerCallback} />
      <Location lat={coordinates?.coordinates?.lat?.toString()} lng={coordinates?.coordinates?.lng?.toString()} location={coordinates?.address} />
    </Main>;
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const w=["Default","EventAddress"];export{a as Default,t as EventAddress,w as __namedExportsOrder,D as default};
