import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{S as l,a as R}from"./SearchInput-DovfqYKU.js";import{M as x}from"./Modal-DhBMBVS9.js";import{B as E}from"./Button-D3PZeFyC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-CZLCmVqQ.js";import"./optionClasses-BoR2qQUj.js";import"./globalClasses-BlHLKr18.js";import"./Icon-Ducrj9hH.js";const v={title:"Components/Search Input",component:l,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{const[,a]=e.useState(""),t=e.useCallback(i=>{a(i)},[a]);return s.jsx(l,{callback:t,placeholder:"Enter a search string"})},c=()=>{const[,a]=e.useState(""),[t,i]=e.useState(""),[p,S]=e.useState(),h="title",u=e.useCallback(r=>{a(r),i(r)},[a]);return e.useEffect(()=>{const r=t===""?[]:R.filter(g=>g[h].toString().toLowerCase().includes(t.toLowerCase()));S(r)},[t]),s.jsx(l,{callback:u,placeholder:"Enter a search string",children:s.jsx(l.Results,{resultsData:p})})},o=()=>{const[,a]=e.useState(""),[t,i]=e.useState(""),[p,S]=e.useState(),[h,u]=e.useState(!1),r="title",g=e.useCallback(d=>{a(d),i(d)},[a]);return e.useEffect(()=>{const d=t===""?[]:R.filter(L=>L[r].toString().toLowerCase().includes(t.toLowerCase()));S(d)},[t]),s.jsxs(s.Fragment,{children:[s.jsx(E,{title:"Click to Open Search",onClick:()=>u(!0)}),s.jsx(x,{isOpen:h,setIsOpen:u,ariaLabel:"site-search",ariaDescription:"site-search",alignTop:!0,noProse:!0,children:s.jsx(l,{callback:g,placeholder:"Enter a search string",children:s.jsx(l.Results,{resultsData:p})})})]})};n.storyName="Default Search Input";c.storyName="Search Input with List";o.storyName="Search Input with List in Modal";n.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"StoryList"};o.__docgenInfo={description:"",methods:[],displayName:"StoryModal"};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [, setMessage] = useState('');
  const callback = useCallback((message: string) => {
    setMessage(message);
  }, [setMessage]);
  return <SearchInput callback={callback} placeholder="Enter a search string" />;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var M,k,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [, setMessage] = useState('');
  const [searchString, setSearchString] = useState('');
  const [filteredResults, setFilteredResults] = useState();
  const searchOn = 'title';
  const callback = useCallback((message: string) => {
    setMessage(message);
    setSearchString(message);
  }, [setMessage]);
  useEffect(() => {
    const filteredDatabase = searchString === '' ? [] : SearchDatabase.filter(data => {
      return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredResults(filteredDatabase);
  }, [searchString]);
  return <SearchInput callback={callback} placeholder="Enter a search string">
      <SearchInput.Results resultsData={filteredResults} />
    </SearchInput>;
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var C,D,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [, setMessage] = useState('');
  const [searchString, setSearchString] = useState('');
  const [filteredResults, setFilteredResults] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const searchOn = 'title';
  const callback = useCallback((message: string) => {
    setMessage(message);
    setSearchString(message);
  }, [setMessage]);
  useEffect(() => {
    const filteredDatabase = searchString === '' ? [] : SearchDatabase.filter(data => {
      return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredResults(filteredDatabase);
  }, [searchString]);
  return <>
      <Button title="Click to Open Search" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="site-search" ariaDescription="site-search" alignTop noProse>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const z=["Default","StoryList","StoryModal"];export{n as Default,c as StoryList,o as StoryModal,z as __namedExportsOrder,v as default};
