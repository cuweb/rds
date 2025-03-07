import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-7sdMIo0z.js";import{M as p}from"./Main-BqxOGoMS.js";import{M as c}from"./MultiDayCalendar-DB_BppsV.js";import{C as d}from"./CalendarData-BedOMcSF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Cv42MwLr.js";import"./Icon-Cq1ojZpE.js";import"./propClasses-BYrQ2lXe.js";import"./ButtonGroup-CVkrxlV-.js";import"./ChevronRightIcon-GLw6KIlN.js";import"./startOfToday-DeT6s1iW.js";import"./format-CoDaAjhx.js";import"./parse-BKaVvLnB.js";import"./isToday-m3KsBfIu.js";import"./isSameDay-D4TUG8v2.js";import"./parseISO-53XxuXUY.js";const F={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:m=>{const[,t]=r.useState([]),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
