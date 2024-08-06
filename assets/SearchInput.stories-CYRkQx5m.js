import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{S as c,a as I}from"./SearchInput-B3nnrIf0.js";import{M as L}from"./Modal-NdDECYKQ.js";import{B as E}from"./Button-CQG8OKj_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";import"./MagnifyingGlassIcon-CTArdofi.js";import"./propClasses-BCnilxRx.js";import"./Icon-B6CsUj99.js";const z={title:"Components/Search Input",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{placeholder:"Enter a search string"},render:l=>{const[,a]=e.useState(""),s=e.useCallback(o=>{a(o)},[a]);return t.jsx(c,{callback:s,placeholder:l.placeholder})}},d={args:{...n.args},render:l=>{const[,a]=e.useState(""),[s,o]=e.useState(""),[p,S]=e.useState([]),h="title",i=e.useCallback(r=>{a(r),o(r)},[a]);return e.useEffect(()=>{const r=s===""?[]:I.filter(m=>m[h].toString().toLowerCase().includes(s.toLowerCase()));S(r)},[s]),t.jsx(c,{callback:i,placeholder:l.placeholder,children:t.jsx(c.Results,{resultsData:p})})}},g={args:{...n.args},render:l=>{const[,a]=e.useState(""),[s,o]=e.useState(""),[p,S]=e.useState([]),[h,i]=e.useState(!1),r="title",m=e.useCallback(u=>{a(u),o(u)},[a]);return e.useEffect(()=>{const u=s===""?[]:I.filter(j=>j[r].toString().toLowerCase().includes(s.toLowerCase()));S(u)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(E,{title:"Click to Open Search",onClick:()=>i(!0)}),t.jsx(L,{isOpen:h,setIsOpen:i,ariaLabel:"site-search",ariaDescription:"site-search",alignTop:!0,noProse:!0,children:t.jsx(c,{callback:m,placeholder:l.placeholder,children:t.jsx(c.Results,{resultsData:p})})})]})}};var f,b,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a search string'
  },
  render: args => {
    const [, setMessage] = useState('');
    const callback = useCallback((message: string) => {
      setMessage(message);
    }, [setMessage]);
    return <SearchInput callback={callback} placeholder={args.placeholder} />;
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
    return <SearchInput callback={callback} placeholder={args.placeholder}>
        <SearchInput.Results resultsData={filteredResults} />
      </SearchInput>;
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,R,x;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(R=g.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const G=["Primary","AutoSuggest","InsideModal"];export{d as AutoSuggest,g as InsideModal,n as Primary,G as __namedExportsOrder,z as default};
