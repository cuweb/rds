import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as t}from"./index-CBqU2yxZ.js";import{N as a,a as l,b as c,c as h,d as S}from"./NavData-BKlm5Tye.js";import{S as o}from"./SearchData-ChxStwSa.js";import{S as i}from"./Search-LMxYqA37.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-B6ulR7Vg.js";import"./Avatar-DjV_X37D.js";import"./optionClasses-nRtJeGr9.js";import"./dialog-BHhb4iix.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./index-BtM5VmRH.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";const se={title:"Components/Nav",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},d=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},m=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},p=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedOutUser:!0,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},v=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedOutUser:!0,onClickHandler:()=>alert("Sign in clicked"),children:e.jsx(i,{sourceData:o,callback:n})})]})]})},b={firstName:"Web",lastName:"Services"},g=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:h,userNoImage:b,children:e.jsx(i,{sourceData:o,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:h,userNoImage:b,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},N=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:S,userNoImage:b,children:e.jsx(i,{sourceData:o,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:S,userNoImage:b,children:e.jsx(i,{sourceData:o,callback:n})})]})]})};u.storyName="Default Nav";d.storyName="With Title";m.storyName="Title With Secondary";p.storyName="Logged Out with href";v.storyName="Logged out with onClick";g.storyName="Logged In with href";N.storyName="Logged In with onClick";var k,O,y;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(y=(O=u.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var x,D,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var j,A,f;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="secondary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>;
}`,...(f=(A=m.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var C,I,M;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,W,w;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true} onClickHandler={() => alert('Sign in clicked')}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(w=(W=v.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var P,U,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="secondary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsHref} userNoImage={userNoImage}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsHref} userNoImage={userNoImage}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>;
}`,...(H=(U=g.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var z,J,Z;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="secondary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsOnClick} userNoImage={userNoImage}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptionsOnClick} userNoImage={userNoImage}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>;
}`,...(Z=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const ne=["Default","WithTitle","TitleWithSecondary","LoggedOutWithHref","LoggedOutWithOnClick","LoggedInWithHref","LoggedInWithOnClick"];export{u as Default,g as LoggedInWithHref,N as LoggedInWithOnClick,p as LoggedOutWithHref,v as LoggedOutWithOnClick,m as TitleWithSecondary,d as WithTitle,ne as __namedExportsOrder,se as default};
