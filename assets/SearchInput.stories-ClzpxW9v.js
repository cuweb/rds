import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{S as c}from"./SearchInput-BvB5tAf9.js";import{S as I}from"./SearchData-ChxStwSa.js";import{M as E}from"./Modal-BVY_GYk1.js";import{B as w}from"./Button-Dk2FY-vy.js";import{S as j}from"./Section-CO2ge5vF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";import"./MagnifyingGlassIcon-CTArdofi.js";import"./propClasses-Im8HJTiC.js";import"./Icon-RboAbnkv.js";const J={title:"Components/Search Input",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{placeholder:"Enter a search string"},render:o=>{const[,a]=e.useState(""),t=e.useCallback(l=>{a(l)},[a]);return s.jsx(j,{children:s.jsx(c,{callback:t,placeholder:o.placeholder})})}},d={args:{...n.args},render:o=>{const[,a]=e.useState(""),[t,l]=e.useState(""),[p,g]=e.useState([]),h="title",i=e.useCallback(r=>{a(r),l(r)},[a]);return e.useEffect(()=>{const r=t===""?[]:I.filter(m=>m[h].toString().toLowerCase().includes(t.toLowerCase()));g(r)},[t]),s.jsx(j,{children:s.jsx(c,{callback:i,placeholder:o.placeholder,children:s.jsx(c.Results,{resultsData:p})})})}},S={args:{...n.args},render:o=>{const[,a]=e.useState(""),[t,l]=e.useState(""),[p,g]=e.useState([]),[h,i]=e.useState(!1),r="title",m=e.useCallback(u=>{a(u),l(u)},[a]);return e.useEffect(()=>{const u=t===""?[]:I.filter(L=>L[r].toString().toLowerCase().includes(t.toLowerCase()));g(u)},[t]),s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Click to Open Search",onClick:()=>i(!0)}),s.jsx(E,{isOpen:h,setIsOpen:i,ariaLabel:"site-search",ariaDescription:"site-search",alignTop:!0,noProse:!0,children:s.jsx(c,{callback:m,placeholder:o.placeholder,children:s.jsx(c.Results,{resultsData:p})})})]})}};var f,b,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a search string'
  },
  render: args => {
    const [, setMessage] = useState('');
    const callback = useCallback((message: string) => {
      setMessage(message);
    }, [setMessage]);
    return <Section>
        <SearchInput callback={callback} placeholder={args.placeholder} />
      </Section>;
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var M,O,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    const [, setMessage] = useState('');
    const [searchString, setSearchString] = useState('');
    const [filteredResults, setFilteredResults] = useState<SearchData[]>([]);
    const searchOn = 'title';
    const callback = useCallback((message: string) => {
      setMessage(message);
      setSearchString(message);
    }, [setMessage]);
    useEffect(() => {
      const filteredDatabase: SearchData[] = searchString === '' ? [] : SearchDatabase.filter(data => {
        return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase());
      });
      setFilteredResults(filteredDatabase);
    }, [searchString]);
    return <Section>
        <SearchInput callback={callback} placeholder={args.placeholder}>
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Section>;
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,R,x;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    const [, setMessage] = useState('');
    const [searchString, setSearchString] = useState('');
    const [filteredResults, setFilteredResults] = useState<SearchData[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const searchOn = 'title';
    const callback = useCallback((message: string) => {
      setMessage(message);
      setSearchString(message);
    }, [setMessage]);
    useEffect(() => {
      const filteredDatabase: SearchData[] = searchString === '' ? [] : SearchDatabase.filter(data => {
        return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase());
      });
      setFilteredResults(filteredDatabase);
    }, [searchString]);
    return <>
        <Button title="Click to Open Search" onClick={() => setModalOpen(true)} />

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="site-search" ariaDescription="site-search" alignTop noProse>
          <SearchInput callback={callback} placeholder={args.placeholder}>
            <SearchInput.Results resultsData={filteredResults} />
          </SearchInput>
        </Modal>
      </>;
  }
}`,...(x=(R=S.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const K=["Primary","AutoSuggest","InsideModal"];export{d as AutoSuggest,S as InsideModal,n as Primary,K as __namedExportsOrder,J as default};
