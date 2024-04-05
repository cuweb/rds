import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as C}from"./Button-CK0aCo8r.js";import{S as i,a as p}from"./Search-D4gaHGHF.js";import{r as e}from"./index-CBqU2yxZ.js";import{M as x}from"./MagnifyingGlassIcon-DQ_vzEEC.js";import"./Icon-HabXoVCo.js";import"./optionClasses-BFBKqSID.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./useLinkContext-Ch0lwH8X.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";import"./dialog-BHhb4iix.js";const w={title:"Components/Search",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(i,{sourceData:p,callback:t})},o=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(i,{sourceData:p,callback:t,children:l.jsx(C,{icon:x})})},c=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(i,{sourceData:p,searchOn:"url",callback:t})},n=()=>{const[,a]=e.useState(!1),t=e.useCallback(s=>{a(s)},[a]);return l.jsx(i,{sourceData:p,searchOn:"id",callback:t})};r.storyName="Default Search";o.storyName="Custom Avatar Search";c.storyName="Validation Url Search";n.storyName="Validation Key Search";r.__docgenInfo={description:"",methods:[],displayName:"SearchDefault"};o.__docgenInfo={description:"",methods:[],displayName:"SearchCustomAvatar"};c.__docgenInfo={description:"",methods:[],displayName:"ValidationUrl"};n.__docgenInfo={description:"",methods:[],displayName:"ValidationKey"};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback} />;
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var S,b,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback}>
      <Button icon={MagnifyingGlassIcon} />
    </Search>;
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var O,f,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />;
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var D,y,g;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />;
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const z=["SearchDefault","SearchCustomAvatar","ValidationUrl","ValidationKey"];export{o as SearchCustomAvatar,r as SearchDefault,n as ValidationKey,c as ValidationUrl,z as __namedExportsOrder,w as default};
