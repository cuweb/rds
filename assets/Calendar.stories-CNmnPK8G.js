import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Calendar-CCOJiscp.js";import{n as s,t as c}from"./CalendarData-BNBJlKgv.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),l=t(),a(),s(),r(),u=n(),d={title:`Components/Calendar`,component:o,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},f={args:{events:c.events},render:e=>{let[,t]=(0,l.useState)(new Date),n=(0,l.useCallback)(e=>{t(e)},[t]);return(0,u.jsx)(i,{children:(0,u.jsx)(o,{events:e.events,callback:n})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDate] = useState(new Date());
    const callbackcal = useCallback((itemSelected: Date) => {
      setSelectedDate(itemSelected);
    }, [setSelectedDate]);
    return <Main>
        <Calendar events={args.events} callback={callbackcal} />
      </Main>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Primary`]})))()}m();export{f as Primary,p as __namedExportsOrder,d as default};