import{j as t,a as f}from"./jsx-runtime-9d2cd5de.js";import{r as a}from"./index-580b8df0.js";import{h as E,X as V}from"./index-380dde4c.js";import{_ as W,g as D,a as O}from"./index-34bd24b7.js";import{J as b}from"./combobox-00d1fd7e.js";import{L as _}from"./Location-2b638b33.js";import{C as I}from"./Column-59a5f743.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./optionClasses-9f612ec7.js";const k=({posCallback:e,centerCallback:n,singleMarker:c,singleMarkerCallback:o})=>{const[s,l]=a.useState(""),[r,C]=a.useState({lat:45.3850225,lng:-75.6946679}),[h,w]=a.useState([]),[x,j]=a.useState({lat:45.3850225,lng:-75.6946679}),y=async u=>{const g=await D(u),i=await O(g[0]),d=g[0].place_id;l(u),C({lat:i.lat,lng:i.lng}),w([...h,{name:u,id:d,position:i}]),j(i)};return a.useEffect(()=>{e&&e(h)},[h,e]),a.useEffect(()=>{n&&n(r)},[r,n]),a.useEffect(()=>{c&&o&&o({coordinates:x,address:s})},[x,o,c]),t("div",{className:"not-prose",children:t(W,{value:s,onChange:l,onSelect:y,children:({getInputProps:u,suggestions:g,getSuggestionItemProps:i})=>f(b,{value:s,onChange:y,children:[f("div",{className:"relative",children:[t(E,{className:"pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true"}),t(b.Input,{className:"h-12 w-full rounded-lg border border-cu-black-200 bg-white pl-10 pr-4 text-cu-black-800 placeholder-cu-black-400 focus:border-cu-black-400 focus:outline-none focus:ring-0 sm:text-sm",...u({placeholder:"Type address"})}),s&&t(V,{className:"absolute top-3.5 right-3.5 h-5 w-5 text-cu-black-400","aria-hidden":"true",onClick:()=>{l("")}})]}),t(b.Options,{className:"mt-3 max-h-80 divide-y divide-cu-black-100 overflow-y-auto bg-white px-1.5 text-sm text-cu-black-800",children:g.map(d=>t(b.Option,{value:d,children:({active:q})=>t("ul",{children:t("li",{...i(d),className:`p-4 text-cu-black-600 hover:cursor-pointer ${q?"bg-cu-black-50 text-cu-black-900":"bg-white"}`,children:d.description})})},d.index))})]})})})};try{k.displayName="LocationPicker",k.__docgenInfo={description:"",displayName:"LocationPicker",props:{posCallback:{defaultValue:null,description:"",name:"posCallback",required:!1,type:{name:"any"}},centerCallback:{defaultValue:null,description:"",name:"centerCallback",required:!1,type:{name:"any"}},singleMarker:{defaultValue:null,description:"",name:"singleMarker",required:!1,type:{name:"boolean"}},singleMarkerCallback:{defaultValue:null,description:"",name:"singleMarkerCallback",required:!1,type:{name:"any"}}}}}catch{}const ee={title:"Components/Location Picker",component:k,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m=()=>{var o,s,l,r;const[e,n]=a.useState({coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}),c=a.useCallback(C=>{n(C)},[n]);return f(I,{maxWidth:"5xl",children:[t(k,{singleMarker:!0,singleMarkerCallback:c})," ",t(_,{lat:(s=(o=e==null?void 0:e.coordinates)==null?void 0:o.lat)==null?void 0:s.toString(),lng:(r=(l=e==null?void 0:e.coordinates)==null?void 0:l.lng)==null?void 0:r.toString(),location:e==null?void 0:e.address})]})},p=()=>{const[e,n]=a.useState([]),[c,o]=a.useState({lat:45.3850225,lng:-75.6946679}),s=a.useCallback(r=>n(r),[n]),l=a.useCallback(r=>{r.lat&&r.lng&&o(r)},[o]);return f(I,{maxWidth:"5xl",children:[t(k,{posCallback:s,centerCallback:l})," ",t(_,{markers:e,center:c})]})};m.storyName="Single Marker";p.storyName="Multiple Marker";var S,M,v;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(v=(M=m.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var L,N,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=LocationPicker.stories-4bd0eb80.js.map
