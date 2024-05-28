import{j as l}from"./jsx-runtime-X2b_N9AH.js";import{S as n,a as i}from"./Search-CELHDTBx.js";import{r}from"./index-uCp2LrAq.js";import"./optionClasses-C1xmOtGn.js";import"./useLinkContext-CZLCmVqQ.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./transition-N1W5q1s7.js";import"./use-root-containers-D3GjGQxH.js";import"./dialog-BPTkW0wY.js";const K={title:"Components/Search",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a=()=>{const[,e]=r.useState(!1),c=r.useCallback(o=>{e(o)},[e]);return l.jsx(n,{sourceData:i,callback:c})},t=()=>{const[,e]=r.useState(!1),c=r.useCallback(o=>{e(o)},[e]);return l.jsx(n,{sourceData:i,searchOn:"url",callback:c})},s=()=>{const[,e]=r.useState(!1),c=r.useCallback(o=>{e(o)},[e]);return l.jsx(n,{sourceData:i,searchOn:"id",callback:c})};a.storyName="Default Search";t.storyName="Validation Url Search";s.storyName="Validation Key Search";a.__docgenInfo={description:"",methods:[],displayName:"SearchDefault"};t.__docgenInfo={description:"",methods:[],displayName:"ValidationUrl"};s.__docgenInfo={description:"",methods:[],displayName:"ValidationKey"};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback} />;
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,b,S;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />;
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var O,h,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />;
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const U=["SearchDefault","ValidationUrl","ValidationKey"];export{a as SearchDefault,s as ValidationKey,t as ValidationUrl,U as __namedExportsOrder,K as default};
