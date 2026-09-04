import{j as r}from"./jsx-runtime-CnYJsUgs.js";import{r as d}from"./iframe-vVa5-g28.js";import{L as g}from"./LocationPicker-BX4oHwS-.js";import{L as f,a as M}from"./Location-DpuZXTHF.js";import{M as N}from"./Main-BBj3pQqB.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-B7FS9dqH.js";import"./index-Dkq6njMI.js";import"./index-ex1JxH7U.js";import"./Figure-Bhk_PT0C.js";import"./propClasses-CJUCiil5.js";const w={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[e=>r.jsx(M,{googleMapsApiKey:"AIzaSyAayPTQk0_rNbCa8Zbhlbn6BpHwcSrVNOc",libraries:["places"],region:"CA",children:r.jsx(e,{})})]},a=()=>{var s,n,i,c;const[e,o]=d.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),l=d.useCallback(m=>{o(m)},[o]);return r.jsxs(N,{children:[r.jsx(g,{address:e.address,markerCallback:l}),r.jsx(f,{lat:(n=(s=e==null?void 0:e.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(c=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:c.toString(),location:e==null?void 0:e.address})]})};a.storyName="Single Marker";const t=()=>{var s,n,i,c;const[e,o]=d.useState({coordinates:{lat:40.712776,lng:-74.005974},address:"New York City, NY"}),l=d.useCallback(m=>{o(m)},[o]);return r.jsxs(N,{children:[r.jsx(g,{address:"New York City, NY",markerCallback:l}),r.jsx(f,{lat:(n=(s=e==null?void 0:e.coordinates)==null?void 0:s.lat)==null?void 0:n.toString(),lng:(c=(i=e==null?void 0:e.coordinates)==null?void 0:i.lng)==null?void 0:c.toString(),location:e==null?void 0:e.address})]})};t.storyName="Location Address";a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"EventAddress"};var k,p,u;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,S,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const P=["Default","EventAddress"];export{a as Default,t as EventAddress,P as __namedExportsOrder,w as default};
