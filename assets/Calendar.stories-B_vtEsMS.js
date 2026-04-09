import{j as a}from"./jsx-runtime-ePDKBRzk.js";import{r}from"./iframe-XjKzupMV.js";import{C as c}from"./Calendar-D2WN65_v.js";import{C as p}from"./CalendarData-BedOMcSF.js";import{M as d}from"./Main-BL7nx622.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-D-vcXEaH.js";import"./Button-D6D_HN_2.js";import"./isWithinInterval-D1IBTSIx.js";import"./format-BDD0as5c.js";import"./startOfToday-Cy5rH-mn.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./parseISO-BGl-MJHo.js";import"./isSameDay-C9OCNg_L.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const h={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=r.useState(new Date),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const q=["Primary"];export{e as Primary,q as __namedExportsOrder,h as default};
