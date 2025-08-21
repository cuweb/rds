import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-DDmFEvuO.js";import{M as p}from"./Main-BqxOGoMS.js";import{M as m}from"./MultiDayCalendar-4xrS_bAr.js";import{C as d}from"./CalendarData-BedOMcSF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./chevron-left-tazvG442.js";import"./chevron-right-BkTLWz6e.js";import"./Button-ONf9ZU8q.js";import"./Icon-nlNQucdT.js";import"./propClasses-B5Ri1ApJ.js";import"./ButtonGroup-BemJm4Dh.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";import"./isSameDay-C9OCNg_L.js";import"./parseISO-Z6eZh0wm.js";const w={title:"Components/Multi-day Calendar",component:m,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:c=>{const[,t]=a.useState([]),i=a.useCallback(l=>{t(l)},[t]);return r.jsx(p,{children:r.jsx(m,{events:c.events,callback:i})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const z=["Primary"];export{e as Primary,z as __namedExportsOrder,w as default};
