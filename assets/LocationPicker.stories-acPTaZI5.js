import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{a,i as o,n as s,t as c}from"./Location-oWT_48OO.js";import{n as l,t as u}from"./LocationPicker-YW3yzFXA.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),l(),t(),a(),s(),r(),f=n(),p={title:`Components/Location Picker`,component:u,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}},decorators:[e=>(0,f.jsx)(o,{googleMapsApiKey:`AIzaSyAayPTQk0_rNbCa8Zbhlbn6BpHwcSrVNOc`,libraries:[`places`],children:(0,f.jsx)(e,{})})]},m=()=>{let[e,t]=(0,d.useState)({coordinates:{lat:45.3850225,lng:-75.6946679},address:`Carleton University Raven's Nest`}),n=(0,d.useCallback)(e=>{t(e)},[t]);return(0,f.jsxs)(i,{children:[(0,f.jsx)(u,{address:e.address,markerCallback:n}),(0,f.jsx)(c,{lat:e?.coordinates?.lat?.toString(),lng:e?.coordinates?.lng?.toString(),location:e?.address})]})},m.storyName=`Single Marker`,h=()=>{let[e,t]=(0,d.useState)({coordinates:{lat:40.712776,lng:-74.005974},address:`New York City, NY`}),n=(0,d.useCallback)(e=>{t(e)},[t]);return(0,f.jsxs)(i,{children:[(0,f.jsx)(u,{address:`New York City, NY`,markerCallback:n}),(0,f.jsx)(c,{lat:e?.coordinates?.lat?.toString(),lng:e?.coordinates?.lng?.toString(),location:e?.address})]})},h.storyName=`Location Address`,m.__docgenInfo={description:``,methods:[],displayName:`Default`},h.__docgenInfo={description:``,methods:[],displayName:`EventAddress`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`EventAddress`]})))()}_();export{m as Default,h as EventAddress,g as __namedExportsOrder,p as default};