import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-DDmFEvuO.js";import{C as c}from"./Calendar-BLHf2CmS.js";import{C as p}from"./CalendarData-BedOMcSF.js";import{M as d}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Icon-DABLV-Gt.js";import"./Button-D5KqXcUb.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./parseISO-Z6eZh0wm.js";import"./isSameDay-C9OCNg_L.js";import"./isWithinInterval-D1IBTSIx.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const q={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=r.useState(new Date),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const F=["Primary"];export{e as Primary,F as __namedExportsOrder,q as default};
