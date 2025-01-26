import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{r as l}from"./index-yDOeu_rT.js";import{L as p}from"./LocationPicker-pVEZcszx.js";import{a as k,L as f}from"./Location-mni48OTV.js";import{M as C}from"./Main-BJPC97L3.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Chjiymov.js";import"./portal-ddlxP4mo.js";import"./use-server-handoff-complete-Vd7s5Y0y.js";import"./index-32yCLrEH.js";import"./index-D-OUEn-9.js";import"./MagnifyingGlassIcon-B8ROMLFy.js";import"./Figure-CW1G6Za8.js";import"./propClasses-BYrQ2lXe.js";const R={title:"Components/Location Picker",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}},decorators:[r=>t.jsx(k,{googleMapsApiKey:void 0,libraries:["places"],children:t.jsx(r,{})})]},e=()=>{var o,s,n,i;const[r,a]=l.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),g=l.useCallback(u=>{a(u)},[a]);return t.jsxs(C,{children:[t.jsx(p,{singleMarker:!0,singleMarkerCallback:g})," ",t.jsx(f,{lat:(s=(o=r==null?void 0:r.coordinates)==null?void 0:o.lat)==null?void 0:s.toString(),lng:(i=(n=r==null?void 0:r.coordinates)==null?void 0:n.lng)==null?void 0:i.toString(),location:r==null?void 0:r.address})]})};e.storyName="Single Marker";e.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,R as default};
