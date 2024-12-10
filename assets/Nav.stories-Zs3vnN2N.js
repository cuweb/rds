import{j as e}from"./jsx-runtime-B9B14buI.js";import{r as t}from"./index-DxDX2vOa.js";import{N as s}from"./Nav-CsXv_Ozu.js";import{a as f,N as S,b as C,c as D}from"./NavData-EgWmcfkt.js";import{S as b}from"./SearchData-ChxStwSa.js";import{S as l}from"./SearchInput-9QIsO05b.js";import{M as N}from"./Modal-rDdNqSZa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bwn02r_3.js";import"./Avatar-FMDDR7_g.js";import"./ButtonGroup-C4GoXbWj.js";import"./propClasses-BhZSwrl0.js";import"./MagnifyingGlassIcon-C7RLA2QC.js";import"./Section-4kh7xz3r.js";function X({title:n,titleId:r,...c},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},c),n?t.createElement("title",{id:r},n):null,t.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"}))}const m=t.forwardRef(X),he={title:"Components/Nav",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},O=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"primary",children:[e.jsx(s.Logo,{}),e.jsxs(s.Primary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},v=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"primary",children:[e.jsx(s.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsxs(s.Primary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},x=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"secondary",children:[e.jsx(s.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsx(s.Aside,{menu:S,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})}),e.jsxs(s.Secondary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},k=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"primary",children:[e.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(s.Primary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,LoggedOutUser:!0,LoggedInLink:"/login",children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},M=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"primary",children:[e.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(s.Primary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,LoggedOutUser:!0,onClickHandler:()=>alert("Sign in clicked"),children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},I={firstName:"Web",lastName:"Services"},L=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"secondary",children:[e.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(s.Aside,{menu:S,LoggedInUser:!0,LoggedMenu:C,userNoImage:I,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})}),e.jsxs(s.Secondary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,LoggedInUser:!0,LoggedMenu:C,userNoImage:I,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})},j=()=>{const[,n]=t.useState(""),[r,c]=t.useState(""),[i,u]=t.useState(),[d,o]=t.useState(!1),h="title",g=t.useCallback(a=>{n(a),c(a)},[n]);return t.useEffect(()=>{const a=r===""?[]:b.filter(p=>p[h].toString().toLowerCase().includes(r.toLowerCase()));u(a)},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(s,{navType:"secondary",children:[e.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(s.Aside,{menu:S,LoggedInUser:!0,LoggedMenu:D,userNoImage:I,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})}),e.jsxs(s.Secondary,{children:[e.jsx(s.Menu,{menu:f}),e.jsx(s.Aside,{menu:S,LoggedInUser:!0,LoggedMenu:D,userNoImage:I,children:e.jsx("button",{onClick:()=>o(!0),"aria-label":"search",className:"not-prose",children:e.jsx(m,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})]}),e.jsx(N,{ariaLabel:"Open Search",ariaDescription:"Search for content on this site",isOpen:d,setIsOpen:o,noProse:!0,alignTop:!0,children:e.jsx(l,{callback:g,placeholder:"Enter a search string",children:e.jsx(l.Results,{resultsData:i})})})]})};O.storyName="Default Nav";v.storyName="With Title";x.storyName="Title With Secondary";k.storyName="Logged Out with href";M.storyName="Logged out with onClick";L.storyName="Logged In with href";j.storyName="Logged In with onClick";O.__docgenInfo={description:"",methods:[],displayName:"Default"};v.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};x.__docgenInfo={description:"",methods:[],displayName:"TitleWithSecondary"};k.__docgenInfo={description:"",methods:[],displayName:"LoggedOutWithHref"};M.__docgenInfo={description:"",methods:[],displayName:"LoggedOutWithOnClick"};L.__docgenInfo={description:"",methods:[],displayName:"LoggedInWithHref"};j.__docgenInfo={description:"",methods:[],displayName:"LoggedInWithOnClick"};var y,w,R;O.parameters={...O.parameters,docs:{...(y=O.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
      <Nav navType="primary">
        <Nav.Logo />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(R=(w=O.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,T,E;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
      <Nav navType="primary">
        <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(E=(T=v.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var F,W,P;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
      <Nav navType="secondary">
        <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
        <Nav.Aside menu={NavAsideData}>
          <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
          </button>
        </Nav.Aside>
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Secondary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(P=(W=x.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var _,U,G;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
      <Nav navType="primary">
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} LoggedOutUser={true} LoggedInLink="/login">
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(G=(U=k.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,Z,z;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
      <Nav navType="primary">
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} LoggedOutUser={true} onClickHandler={() => alert('Sign in clicked')}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(z=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var J,q,B;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
      <Nav navType="secondary">
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsHref} userNoImage={userNoImage}>
          <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
          </button>
        </Nav.Aside>
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsHref} userNoImage={userNoImage}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Secondary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(B=(q=L.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var K,Q,V;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
      <Nav navType="secondary">
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsOnClick} userNoImage={userNoImage}>
          <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
          </button>
        </Nav.Aside>
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsOnClick} userNoImage={userNoImage}>
            <button onClick={() => setModalOpen(true)} aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Secondary>
      </Nav>
      <Modal ariaLabel="Open Search" ariaDescription="Search for content on this site" isOpen={modalOpen} setIsOpen={setModalOpen} noProse alignTop>
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>;
}`,...(V=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const ge=["Default","WithTitle","TitleWithSecondary","LoggedOutWithHref","LoggedOutWithOnClick","LoggedInWithHref","LoggedInWithOnClick"];export{O as Default,L as LoggedInWithHref,j as LoggedInWithOnClick,k as LoggedOutWithHref,M as LoggedOutWithOnClick,x as TitleWithSecondary,v as WithTitle,ge as __namedExportsOrder,he as default};
