import{j as t,a as f}from"./jsx-runtime-9d2cd5de.js";import{r as a}from"./index-580b8df0.js";import{h as E,X as V}from"./index-380dde4c.js";import{_ as W,g as D,a as O}from"./index-34bd24b7.js";import{J as k}from"./combobox-00d1fd7e.js";import{L as _}from"./Location-2b638b33.js";import{C as I}from"./Column-59a5f743.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./optionClasses-9f612ec7.js";const g=({posCallback:e,centerCallback:n,singleMarker:i,singleMarkerCallback:o})=>{const[s,l]=a.useState(""),[r,C]=a.useState({lat:45.3850225,lng:-75.6946679}),[h,w]=a.useState([]),[x,j]=a.useState({lat:45.3850225,lng:-75.6946679}),S=async u=>{const b=await D(u),c=await O(b[0]),d=b[0].place_id;l(u),C({lat:c.lat,lng:c.lng}),w([...h,{name:u,id:d,position:c}]),j(c)};return a.useEffect(()=>{e&&e(h)},[h,e]),a.useEffect(()=>{n&&n(r)},[r,n]),a.useEffect(()=>{i&&o&&o({coordinates:x,address:s})},[x,o,i]),t("div",{className:"not-prose",children:t(W,{value:s,onChange:l,onSelect:S,children:({getInputProps:u,suggestions:b,getSuggestionItemProps:c})=>f(k,{value:s,onChange:S,children:[f("div",{className:"relative",children:[t(E,{className:"pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true"}),t(k.Input,{className:"h-12 w-full rounded-lg border border-cu-black-200 bg-white pl-10 pr-4 text-cu-black-800 placeholder-cu-black-400 focus:border-cu-black-400 focus:outline-none focus:ring-0 sm:text-sm",...u({placeholder:"Type address"})}),s&&t(V,{className:"absolute top-3.5 right-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true",onClick:()=>{l("")}})]}),t(k.Options,{className:"mt-3 max-h-80 divide-y divide-cu-black-100 overflow-y-auto bg-white px-1.5 text-sm text-cu-black-800",children:b.map(d=>t(k.Option,{value:d,children:({active:q})=>t("ul",{children:t("li",{...c(d),className:`p-4 text-cu-black-600 hover:cursor-pointer ${q?"bg-cu-black-50 text-cu-black-900":"bg-white"}`,children:d.description})})},d.index))})]})})})};try{g.displayName="LocationPicker",g.__docgenInfo={description:"",displayName:"LocationPicker",props:{posCallback:{defaultValue:null,description:"",name:"posCallback",required:!1,type:{name:"((pos: { name: string; id: string; position: object; }[]) => void)"}},centerCallback:{defaultValue:null,description:"",name:"centerCallback",required:!1,type:{name:"((center: { lat: number; lng: number; }) => void)"}},singleMarker:{defaultValue:null,description:"",name:"singleMarker",required:!1,type:{name:"boolean"}},singleMarkerCallback:{defaultValue:null,description:"",name:"singleMarkerCallback",required:!1,type:{name:"((marker: { coordinates: { lat: number; lng: number; }; address: string; }) => void)"}}}}}catch{}const ee={title:"Components/Location Picker",component:g,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m=()=>{var o,s,l,r;const[e,n]=a.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),i=a.useCallback(C=>{n(C)},[n]);return f(I,{maxWidth:"5xl",children:[t(g,{singleMarker:!0,singleMarkerCallback:i})," ",t(_,{lat:(s=(o=e==null?void 0:e.coordinates)==null?void 0:o.lat)==null?void 0:s.toString(),lng:(r=(l=e==null?void 0:e.coordinates)==null?void 0:l.lng)==null?void 0:r.toString(),location:e==null?void 0:e.address})]})},p=()=>{const[e,n]=a.useState([]),[i,o]=a.useState({lat:45.3850225,lng:-75.6946679}),s=a.useCallback(r=>n(r),[n]),l=a.useCallback(r=>{r.lat&&r.lng&&o(r)},[o]);return f(I,{maxWidth:"5xl",children:[t(g,{posCallback:s,centerCallback:l})," ",t(_,{markers:e,center:i})]})};m.storyName="Single Marker";p.storyName="Multiple Marker";var y,v,M;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(M=(v=m.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var L,N,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const te=["Default","MultiMarker"];export{m as Default,p as MultiMarker,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=LocationPicker.stories-9c743c90.js.map
