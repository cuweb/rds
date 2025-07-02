import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-DDmFEvuO.js";import{C as c}from"./Calendar-BzRYXmR2.js";import{C as p}from"./CalendarData-BedOMcSF.js";import{M as d}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Button-B6LFRtIH.js";import"./Icon-C5ia6qUS.js";import"./propClasses-F0UBY6lR.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./ChevronRightIcon-DYD_tMS6.js";import"./parseISO-Z6eZh0wm.js";import"./isSameDay-C9OCNg_L.js";import"./isWithinInterval-D1IBTSIx.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const O={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=a.useState(new Date),i=a.useCallback(l=>{t(l)},[t]);return r.jsx(d,{children:r.jsx(c,{events:m.events,callback:i})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const R=["Primary"];export{e as Primary,R as __namedExportsOrder,O as default};
