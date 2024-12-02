import{j as r}from"./jsx-runtime-B9B14buI.js";import{r as a}from"./index-DxDX2vOa.js";import{C as c}from"./Calendar-DxgOox5t.js";import{C as p}from"./CalendarData-D-nF6TMW.js";import{S as d}from"./Section-4kh7xz3r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Bil94z9c.js";import"./Icon-BTbDxzPp.js";import"./propClasses-DiIY1iW4.js";import"./startOfToday-D0O5DQ5P.js";import"./format-Dt71a7ij.js";import"./parse-gVNmX4me.js";import"./ChevronRightIcon-CCsIXVIj.js";import"./isToday-CPeHlImM.js";import"./isSameDay-Dpgs3O9f.js";import"./parseISO-BQ4LyrE0.js";const h={title:"Components/Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:p.events},render:m=>{const[,t]=a.useState(new Date),l=a.useCallback(i=>{t(i)},[t]);return r.jsx(d,{children:r.jsx(c,{events:m.events,callback:l})})}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
