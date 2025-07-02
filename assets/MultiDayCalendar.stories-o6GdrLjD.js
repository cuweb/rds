import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-DDmFEvuO.js";import{M as p}from"./Main-BqxOGoMS.js";import{M as c}from"./MultiDayCalendar-CVQ3-XeO.js";import{C as d}from"./CalendarData-BedOMcSF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Button-B6LFRtIH.js";import"./Icon-C5ia6qUS.js";import"./propClasses-F0UBY6lR.js";import"./ButtonGroup-BA84YDld.js";import"./ChevronRightIcon-DYD_tMS6.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";import"./isSameDay-C9OCNg_L.js";import"./parseISO-Z6eZh0wm.js";const R={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:m=>{const[,t]=r.useState([]),i=r.useCallback(l=>{t(l)},[t]);return a.jsx(p,{children:a.jsx(c,{events:m.events,callback:i})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDays] = useState<Date[]>([]);
    const callbackcal = useCallback((itemSelected: Date[]) => {
      setSelectedDays(itemSelected);
    }, [setSelectedDays]);
    return <Main>
        <MultiDayCalendar events={args.events} callback={callbackcal} />
      </Main>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,R as default};
