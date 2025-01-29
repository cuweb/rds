import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{r}from"./index-yDOeu_rT.js";import{M as p}from"./Main-DnchB6dp.js";import{M as c}from"./MultiDayCalendar-CW7OnGA0.js";import{C as d}from"./CalendarData-D-nF6TMW.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BURiWGZI.js";import"./Icon-UcZbim36.js";import"./propClasses-BYrQ2lXe.js";import"./ButtonGroup-DECQb6k8.js";import"./ChevronRightIcon-CPx26B8C.js";import"./startOfToday-D0O5DQ5P.js";import"./format-Dt71a7ij.js";import"./parse-gVNmX4me.js";import"./isSameDay-Dpgs3O9f.js";import"./isToday-CPeHlImM.js";import"./parseISO-BQ4LyrE0.js";const F={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:m=>{const[,t]=r.useState([]),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
