import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-IpA8Qn9U.js";import{t as r}from"./jsx-runtime-CA2T8_y1.js";import{n as i,t as a}from"./Main-DtoD-bKX.js";import{n as o,t as s}from"./Button-CyTkV0p8.js";import{n as c,t as l}from"./Modal-DaW2DDbb.js";import{n as u,t as d}from"./SearchInput-CvznNnGl.js";import{n as f,t as p}from"./SearchData-CF7RYm1l.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(n(),1),u(),f(),c(),o(),i(),h=r(),g={title:`Components/Search Input`,component:d,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},_={args:{placeholder:`Enter a search string`},render:e=>{let[,t]=(0,m.useState)(``),n=(0,m.useCallback)(e=>{t(e)},[t]);return(0,h.jsx)(a,{children:(0,h.jsx)(d,{callback:n,placeholder:e.placeholder})})}},v={args:{..._.args},render:e=>{let[,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),[i,o]=(0,m.useState)([]),s=(0,m.useCallback)(e=>{t(e),r(e)},[t]);return(0,m.useEffect)(()=>{let e=n===``?[]:p.filter(e=>e.title.toString().toLowerCase().includes(n.toLowerCase()));o(e)},[n]),(0,h.jsx)(a,{children:(0,h.jsx)(d,{callback:s,placeholder:e.placeholder,children:(0,h.jsx)(d.Results,{resultsData:i})})})}},y={args:{..._.args},render:e=>{let[,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),[i,a]=(0,m.useState)([]),[o,c]=(0,m.useState)(!1),u=(0,m.useCallback)(e=>{t(e),r(e)},[t]);return(0,m.useEffect)(()=>{let e=n===``?[]:p.filter(e=>e.title.toString().toLowerCase().includes(n.toLowerCase()));a(e)},[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{title:`Click to Open Search`,onClick:()=>c(!0)}),(0,h.jsx)(l,{isOpen:o,setIsOpen:c,ariaLabel:`site-search`,ariaDescription:`site-search`,alignTop:!0,noProse:!0,children:(0,h.jsx)(d,{callback:u,placeholder:e.placeholder,children:(0,h.jsx)(d.Results,{resultsData:i})})})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`AutoSuggest`,`InsideModal`]})))()}x();export{v as AutoSuggest,y as InsideModal,_ as Primary,b as __namedExportsOrder,g as default};