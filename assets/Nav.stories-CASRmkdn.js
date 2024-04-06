import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as t}from"./index-CBqU2yxZ.js";import{N as a,a as l,b as c,c as b,d as S}from"./NavData-DcaDM_IY.js";import{S as o,a as i}from"./Search-C8uabQrG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Ch0lwH8X.js";import"./Avatar-2ZHJOB-7.js";import"./optionClasses-Bt-0g5ll.js";import"./index-BtM5VmRH.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";import"./dialog-BHhb4iix.js";const ae={title:"Components/Nav",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(o,{sourceData:i,callback:n})})]})]})},u=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(o,{sourceData:i,callback:n})})]})]})},m=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,children:e.jsx(o,{sourceData:i,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,children:e.jsx(o,{sourceData:i,callback:n})})]})]})},p=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedOutUser:!0,children:e.jsx(o,{sourceData:i,callback:n})})]})]})},g=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedOutUser:!0,onClickHandler:()=>alert("Sign in clicked"),children:e.jsx(o,{sourceData:i,callback:n})})]})]})},h={firstName:"Web",lastName:"Services"},v=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:b,userNoImage:h,children:e.jsx(o,{sourceData:i,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:b,userNoImage:h,children:e.jsx(o,{sourceData:i,callback:n})})]})]})},N=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:S,userNoImage:h,children:e.jsx(o,{sourceData:i,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:l}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:S,userNoImage:h,children:e.jsx(o,{sourceData:i,callback:n})})]})]})};d.storyName="Default Nav";u.storyName="With Title";m.storyName="Title With Secondary";p.storyName="Logged Out with href";g.storyName="Logged out with onClick";v.storyName="Logged In with href";N.storyName="Logged In with onClick";d.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};m.__docgenInfo={description:"",methods:[],displayName:"TitleWithSecondary"};p.__docgenInfo={description:"",methods:[],displayName:"LoggedOutWithHref"};g.__docgenInfo={description:"",methods:[],displayName:"LoggedOutWithOnClick"};v.__docgenInfo={description:"",methods:[],displayName:"LoggedInWithHref"};N.__docgenInfo={description:"",methods:[],displayName:"LoggedInWithOnClick"};var k,O,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var x,L,D;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(D=(L=u.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var j,A,f;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(f=(A=m.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var I,C,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var M,T,w;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(w=(T=g.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var _,P,U;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(U=(P=v.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var H,z,J;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(J=(z=N.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const se=["Default","WithTitle","TitleWithSecondary","LoggedOutWithHref","LoggedOutWithOnClick","LoggedInWithHref","LoggedInWithOnClick"];export{d as Default,v as LoggedInWithHref,N as LoggedInWithOnClick,p as LoggedOutWithHref,g as LoggedOutWithOnClick,m as TitleWithSecondary,u as WithTitle,se as __namedExportsOrder,ae as default};
