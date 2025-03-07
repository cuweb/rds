import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-7sdMIo0z.js";import{C as c}from"./Calendar-03TU0FTw.js";import{C as p}from"./CalendarData-BedOMcSF.js";import{M as d}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Cv42MwLr.js";import"./Icon-Cq1ojZpE.js";import"./propClasses-BYrQ2lXe.js";import"./startOfToday-DeT6s1iW.js";import"./format-CoDaAjhx.js";import"./parse-BKaVvLnB.js";import"./ChevronRightIcon-GLw6KIlN.js";import"./parseISO-53XxuXUY.js";import"./isSameDay-D4TUG8v2.js";import"./isToday-m3KsBfIu.js";const h={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=r.useState(new Date),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
