import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{S as p}from"./Section-BA8VpE3g.js";import{M as c}from"./MultiDayCalendar-BWrf3b_3.js";import{C as d}from"./CalendarData-D-nF6TMW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BYp47ypw.js";import"./Icon-BUuzH75X.js";import"./propClasses-C1Ju-ucV.js";import"./ButtonGroup-02ebpWXM.js";import"./startOfToday-Db96OknS.js";import"./parse-Dkc84rVP.js";import"./format-IKGLl-Aq.js";import"./parseISO-B7ihSCno.js";const P={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:l=>{const[,t]=r.useState([]),m=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:l.events,callback:m})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,P as default};
