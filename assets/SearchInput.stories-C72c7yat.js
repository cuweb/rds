import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{r as e}from"./index-yDOeu_rT.js";import{S as c}from"./SearchInput-DiKc3pf3.js";import{S as I}from"./SearchData-ChxStwSa.js";import{M as E}from"./Modal-BVPJzc3n.js";import{B as w}from"./Button-BURiWGZI.js";import{M as j}from"./Main-BJPC97L3.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Fm1c2FUv.js";import"./MagnifyingGlassIcon-B8ROMLFy.js";import"./propClasses-BYrQ2lXe.js";import"./Icon-UcZbim36.js";const K={title:"Components/Search Input",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{placeholder:"Enter a search string"},render:o=>{const[,a]=e.useState(""),t=e.useCallback(l=>{a(l)},[a]);return s.jsx(j,{children:s.jsx(c,{callback:t,placeholder:o.placeholder})})}},d={args:{...n.args},render:o=>{const[,a]=e.useState(""),[t,l]=e.useState(""),[g,S]=e.useState([]),h="title",i=e.useCallback(r=>{a(r),l(r)},[a]);return e.useEffect(()=>{const r=t===""?[]:I.filter(m=>m[h].toString().toLowerCase().includes(t.toLowerCase()));S(r)},[t]),s.jsx(j,{children:s.jsx(c,{callback:i,placeholder:o.placeholder,children:s.jsx(c.Results,{resultsData:g})})})}},p={args:{...n.args},render:o=>{const[,a]=e.useState(""),[t,l]=e.useState(""),[g,S]=e.useState([]),[h,i]=e.useState(!1),r="title",m=e.useCallback(u=>{a(u),l(u)},[a]);return e.useEffect(()=>{const u=t===""?[]:I.filter(L=>L[r].toString().toLowerCase().includes(t.toLowerCase()));S(u)},[t]),s.jsxs(s.Fragment,{children:[s.jsx(w,{title:"Click to Open Search",onClick:()=>i(!0)}),s.jsx(E,{isOpen:h,setIsOpen:i,ariaLabel:"site-search",ariaDescription:"site-search",alignTop:!0,noProse:!0,children:s.jsx(c,{callback:m,placeholder:o.placeholder,children:s.jsx(c.Results,{resultsData:g})})})]})}};var f,b,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a search string'
  },
  render: args => {
    const [, setMessage] = useState('');
    const callback = useCallback((message: string) => {
      setMessage(message);
    }, [setMessage]);
    return <Main>
        <SearchInput callback={callback} placeholder={args.placeholder} />
      </Main>;
  }
}`,...(M=(b=n.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var k,O,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <Main>
        <SearchInput callback={callback} placeholder={args.placeholder}>
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Main>;
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,R,x;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(R=p.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const N=["Primary","AutoSuggest","InsideModal"];export{d as AutoSuggest,p as InsideModal,n as Primary,N as __namedExportsOrder,K as default};
