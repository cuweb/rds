import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{C as c}from"./Calendar-CS6W8-YN.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{S as d}from"./Section-BA8VpE3g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BYp47ypw.js";import"./Icon-BUuzH75X.js";import"./propClasses-C1Ju-ucV.js";import"./startOfToday-DNGuLlki.js";import"./parse-Dkc84rVP.js";import"./format-IKGLl-Aq.js";import"./ChevronRightIcon-C_L7aUUu.js";import"./parseISO-B7ihSCno.js";const P={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:l=>{const[,t]=r.useState(new Date),m=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:l.events,callback:m})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,P as default};
