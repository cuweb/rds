import{j as a}from"./jsx-runtime-B_7atEh6.js";import{r}from"./iframe-C7IHYKDd.js";import{M as p}from"./Main-DJ-J8dpy.js";import{M as c}from"./MultiDayCalendar-C12fg-is.js";import{C as d}from"./CalendarData-BedOMcSF.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-C-7TGBm_.js";import"./Button-juVzDIQd.js";import"./ButtonGroup-OPxSXpQo.js";import"./propClasses-620uA3Rh.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./parse-CXxdJvFO.js";import"./isSameMonth-aULO67Zy.js";import"./isSameDay-C9OCNg_L.js";import"./parseISO-BGl-MJHo.js";const F={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:m=>{const[,t]=r.useState([]),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const O=["Primary"];export{e as Primary,O as __namedExportsOrder,F as default};
