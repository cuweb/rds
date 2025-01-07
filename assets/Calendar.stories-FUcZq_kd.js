import{j as r}from"./jsx-runtime-DmnAw2-i.js";import{r as a}from"./index-BTEhrml1.js";import{C as c}from"./Calendar-BdqDPPPH.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{S as d}from"./Section-B_q5jLx6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-BKvYohKh.js";import"./Icon-BvWPL-TT.js";import"./propClasses-BhZSwrl0.js";import"./startOfToday-D0O5DQ5P.js";import"./format-Dt71a7ij.js";import"./parse-gVNmX4me.js";import"./ChevronRightIcon-CCBHQ_DS.js";import"./isToday-CPeHlImM.js";import"./isSameDay-Dpgs3O9f.js";import"./parseISO-BQ4LyrE0.js";const h={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=a.useState(new Date),l=a.useCallback(i=>{t(i)},[t]);return r.jsx(d,{children:r.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const q=["Primary"];export{e as Primary,q as __namedExportsOrder,h as default};
