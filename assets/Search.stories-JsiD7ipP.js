import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as g}from"./Button-DZIOirHR.js";import{S as p}from"./Search-LMxYqA37.js";import{r as e}from"./index-CBqU2yxZ.js";import{S as m}from"./SearchData-ChxStwSa.js";import{M as y}from"./MagnifyingGlassIcon-DQ_vzEEC.js";import"./Icon-DPQQEofx.js";import"./optionClasses-nRtJeGr9.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./useLinkContext-B6ulR7Vg.js";import"./dialog-BHhb4iix.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";const z={title:"Components/Search",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(p,{sourceData:m,callback:t})},c=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(p,{sourceData:m,callback:t,children:l.jsx(g,{icon:y})})},o=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(p,{sourceData:m,searchOn:"url",callback:t})},n=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(p,{sourceData:m,searchOn:"id",callback:t})};r.storyName="Default Search";c.storyName="Custom Avatar Search";o.storyName="Validation Url Search";n.storyName="Validation Key Search";var i,u,S;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback} />;
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,O,d;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback}>
      <Button icon={MagnifyingGlassIcon} />
    </Search>;
}`,...(d=(O=c.parameters)==null?void 0:O.docs)==null?void 0:d.source}}};var h,k,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />;
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var D,C,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />;
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const H=["SearchDefault","SearchCustomAvatar","ValidationUrl","ValidationKey"];export{c as SearchCustomAvatar,r as SearchDefault,n as ValidationKey,o as ValidationUrl,H as __namedExportsOrder,z as default};
