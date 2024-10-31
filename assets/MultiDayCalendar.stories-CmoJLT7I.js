import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{S as p}from"./Section-BA8VpE3g.js";import{M as c}from"./MultiDayCalendar-CAQkPKY3.js";import{C as d}from"./CalendarData-D-nF6TMW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BYp47ypw.js";import"./Icon-BUuzH75X.js";import"./propClasses-C1Ju-ucV.js";import"./ButtonGroup-02ebpWXM.js";import"./ChevronRightIcon-C_L7aUUu.js";import"./startOfToday-DNGuLlki.js";import"./parse-Dkc84rVP.js";import"./format-IKGLl-Aq.js";import"./parseISO-B7ihSCno.js";const _={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:l=>{const[,t]=r.useState([]),m=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:l.events,callback:m})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDays] = useState<Date[]>([]);
    const callbackcal = useCallback((itemSelected: Date[]) => {
      setSelectedDays(itemSelected);
    }, [setSelectedDays]);
    return <Section>
        <MultiDayCalendar events={args.events} callback={callbackcal} />
      </Section>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,_ as default};
