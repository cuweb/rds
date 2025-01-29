import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{r}from"./index-yDOeu_rT.js";import{C as c}from"./Calendar-Cuod4IjY.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{M as d}from"./Main-DnchB6dp.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BURiWGZI.js";import"./Icon-UcZbim36.js";import"./propClasses-BYrQ2lXe.js";import"./startOfToday-D0O5DQ5P.js";import"./format-Dt71a7ij.js";import"./parse-gVNmX4me.js";import"./ChevronRightIcon-CPx26B8C.js";import"./isToday-CPeHlImM.js";import"./isSameDay-Dpgs3O9f.js";import"./parseISO-BQ4LyrE0.js";const h={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=r.useState(new Date),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
