import{j as a}from"./jsx-runtime-B9B14buI.js";import{r}from"./index-DxDX2vOa.js";import{C as c}from"./Calendar-DT_NYa5M.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{S as d}from"./Section-4kh7xz3r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-OjvGf8Ar.js";import"./Icon-CRy5uQ6V.js";import"./propClasses-C1Ju-ucV.js";import"./startOfToday-DNGuLlki.js";import"./parse-Dkc84rVP.js";import"./format-IKGLl-Aq.js";import"./ChevronRightIcon-CCsIXVIj.js";import"./parseISO-B7ihSCno.js";const P={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:l=>{const[,t]=r.useState(new Date),m=r.useCallback(i=>{t(i)},[t]);return a.jsx(d,{children:a.jsx(c,{events:l.events,callback:m})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
