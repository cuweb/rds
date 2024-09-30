import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{C as c}from"./Calendar-DCIY8fvZ.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{S as d}from"./Section-BA8VpE3g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BYp47ypw.js";import"./Icon-BUuzH75X.js";import"./propClasses-C1Ju-ucV.js";import"./startOfToday-C2GAHaUs.js";import"./parse-BUkWBRrt.js";import"./format-DUBvZ7C8.js";import"./isSameMonth-B8gVtgtL.js";import"./isEqual-Bg9VHVhb.js";import"./parseISO-CHcXfkHQ.js";const _={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=r.useState(new Date),l=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDate] = useState(new Date());
    const callbackcal = useCallback((itemSelected: Date) => {
      setSelectedDate(itemSelected);
    }, [setSelectedDate]);
    return <Section>
        <Calendar events={args.events} callback={callbackcal} />
      </Section>;
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,_ as default};
