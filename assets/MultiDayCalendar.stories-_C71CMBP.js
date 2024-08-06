import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{M as n}from"./MultiDayCalendar-BWfXDdVc.js";import{r as a}from"./index-BwDkhjyp.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import"./Button-CQG8OKj_.js";import"./Icon-B6CsUj99.js";import"./propClasses-BCnilxRx.js";import"./ButtonGroup-DcsTpBqd.js";import"./startOfToday-C2GAHaUs.js";import"./parse-BUkWBRrt.js";import"./format-DUBvZ7C8.js";import"./isSameMonth-B8gVtgtL.js";import"./parseISO-CHcXfkHQ.js";import"./_commonjsHelpers-BosuxZz1.js";const E={title:"Components/Multi-day Calendar",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:c=>{const[,t]=a.useState([]),l=a.useCallback(m=>{t(m)},[t]);return i.jsx(n,{events:c.events,callback:l})}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDays] = useState<Date[]>([]);
    const callbackcal = useCallback((itemSelected: Date[]) => {
      setSelectedDays(itemSelected);
    }, [setSelectedDays]);
    return <MultiDayCalendar events={args.events} callback={callbackcal} />;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const P=["Primary"];export{e as Primary,P as __namedExportsOrder,E as default};
