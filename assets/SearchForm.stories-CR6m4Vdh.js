import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{u as E}from"./useLinkContext-CZLCmVqQ.js";import{S as j}from"./SearchData-ChxStwSa.js";import{M as L}from"./Modal-CkZ83Xdx.js";import{B as D}from"./Button-D3PZeFyC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./optionClasses-BoR2qQUj.js";import"./globalClasses-BlHLKr18.js";import"./Icon-Ducrj9hH.js";function N({title:s,titleId:a,...n},c){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":a},n),s?e.createElement("title",{id:a},s):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const v=e.forwardRef(N),S=({resultsData:s})=>{const[a,n]=e.useState(!0),c=r=>{if(r){const o=String(r.url);window.location.href=o,n(!1)}};e.useEffect(()=>{function r(o){o.key==="k"&&(o.metaKey||o.ctrlKey)&&n(!a)}return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[a]);const l=E();return t.jsx(t.Fragment,{children:a&&t.jsx(t.Fragment,{children:s&&s.length>0&&t.jsx("ul",{className:"py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2",children:s.map(r=>t.jsx("li",{className:"cursor-default select-none px-4 py-2 hover:bg-cu-red hover:text-white",onClick:()=>c(r),children:t.jsx(l,{href:`${r.url}`,onClick:()=>n(!1),children:r.title})},r.id))})})})};S.displayName="SearchForm.Results";S.__docgenInfo={description:"",methods:[],displayName:"SearchForm.Results",props:{resultsData:{required:!0,tsType:{name:"Array",elements:[{name:"SourceDataProps"}],raw:"SourceDataProps[]"},description:""}}};const f=({callback:s,placeholder:a="Search",children:n})=>{const[c,l]=e.useState(""),r=o=>{l(o.target.value)};return e.useEffect(()=>{s(c)},[c,s]),t.jsxs("div",{className:"cu-searchform cu-component-spacing relative items-center not-prose",children:[t.jsx(v,{className:"absolute top-3 w-5 h-5 left-4 text-cu-black-300","aria-hidden":"true"}),t.jsx("input",{className:"w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0",id:"searchform__input",name:"search",type:"search",autoComplete:"off",placeholder:a,onChange:r,value:c}),t.jsx("div",{className:"relative w-full",children:n})]})},p=Object.assign(f,{Results:S});f.displayName="SearchForm";f.__docgenInfo={description:"",methods:[],displayName:"SearchForm",props:{callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: string) => void",signature:{arguments:[{type:{name:"string"},name:"k"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V={title:"Components/Search Form",component:p,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u=()=>{const[,s]=e.useState(""),a=e.useCallback(n=>{s(n)},[s]);return t.jsx(p,{callback:a,placeholder:"Enter a search string"})},d=()=>{const[,s]=e.useState(""),[a,n]=e.useState(""),[c,l]=e.useState(),r="title",o=e.useCallback(i=>{s(i),n(i)},[s]);return e.useEffect(()=>{const i=a===""?[]:j.filter(g=>g[r].toString().toLowerCase().includes(a.toLowerCase()));l(i)},[a]),t.jsx(p,{callback:o,placeholder:"Enter a search string",children:t.jsx(p.Results,{resultsData:c})})},m=()=>{const[,s]=e.useState(""),[a,n]=e.useState(""),[c,l]=e.useState(),[r,o]=e.useState(!1),i="title",g=e.useCallback(h=>{s(h),n(h)},[s]);return e.useEffect(()=>{const h=a===""?[]:j.filter(O=>O[i].toString().toLowerCase().includes(a.toLowerCase()));l(h)},[a]),t.jsxs(t.Fragment,{children:[t.jsx(D,{title:"Click to Open Search",onClick:()=>o(!0)}),t.jsx(L,{isOpen:r,setIsOpen:o,alignTop:!0,children:t.jsx(p,{callback:g,placeholder:"Enter a search string",children:t.jsx(p.Results,{resultsData:c})})})]})};u.storyName="Default Search Form";d.storyName="Search Form with List";m.storyName="Search Form with List in Modal";u.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"StoryList"};m.__docgenInfo={description:"",methods:[],displayName:"StoryModal"};var b,k,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [, setMessage] = useState('');
  const callback = useCallback((message: string) => {
    setMessage(message);
  }, [setMessage]);
  return <SearchForm callback={callback} placeholder="Enter a search string" />;
}`,...(y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,x,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
  return <SearchForm callback={callback} placeholder="Enter a search string">
      <SearchForm.Results resultsData={filteredResults} />
    </SearchForm>;
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var F,R,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} alignTop>
        <SearchForm callback={callback} placeholder="Enter a search string">
          <SearchForm.Results resultsData={filteredResults} />
        </SearchForm>
      </Modal>
    </>;
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const Z=["Default","StoryList","StoryModal"];export{u as Default,d as StoryList,m as StoryModal,Z as __namedExportsOrder,V as default};
