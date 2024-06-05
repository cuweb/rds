import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{S as i,F as j}from"./Search-D0-c4Cex.js";import{S as d}from"./SearchData-ChxStwSa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-CZLCmVqQ.js";const I={title:"Components/Search",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s=()=>{const[e,c]=a.useState(""),[o,D]=a.useState(),[y,u]=a.useState(!1),x="title",C=l=>{c(l)},N=a.useCallback(l=>{u(l)},[u]);return a.useEffect(()=>{const l=e===""?[]:d.filter(R=>R[x].toString().toLowerCase().includes(e.toLowerCase()));D(l)},[e]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>u(!0),"aria-label":"search",className:"not-prose",children:t.jsx(j,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})}),y&&t.jsx(i,{searchQuery:C,callback:N,children:t.jsx(i.Results,{resultsData:o})})]})},r=()=>{const[,e]=a.useState(!1),c=a.useCallback(o=>{e(o)},[e]);return t.jsx(i,{sourceData:d,searchOn:"url",callback:c})},n=()=>{const[,e]=a.useState(!1),c=a.useCallback(o=>{e(o)},[e]);return t.jsx(i,{sourceData:d,searchOn:"id",callback:c})};s.storyName="Default Search";r.storyName="Validation Url Search";n.storyName="Validation Key Search";s.__docgenInfo={description:"",methods:[],displayName:"SearchDefault"};r.__docgenInfo={description:"",methods:[],displayName:"ValidationUrl"};n.__docgenInfo={description:"",methods:[],displayName:"ValidationKey"};var p,h,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [searchString, setSearchString] = useState('');
  const [filteredResults, setFilteredResults] = useState();
  const [open, setOpen] = useState(false);
  const searchOn = 'title';
  const handleSearchQuery = string => {
    setSearchString(string);
  };
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  useEffect(() => {
    const filteredDatabase = searchString === '' ? [] : SearchDatabase.filter(data => {
      return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredResults(filteredDatabase);
  }, [searchString]);
  return <>
      <button onClick={() => setOpen(true)} aria-label="search" className="not-prose">
        <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
      </button>
      {open && <Search searchQuery={handleSearchQuery} callback={callback}>
          <Search.Results resultsData={filteredResults} />
        </Search>}
    </>;
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var S,b,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />;
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,g,k;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />;
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const K=["SearchDefault","ValidationUrl","ValidationKey"];export{s as SearchDefault,n as ValidationKey,r as ValidationUrl,K as __namedExportsOrder,I as default};
