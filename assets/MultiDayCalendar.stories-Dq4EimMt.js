import{j as a}from"./jsx-runtime-B9B14buI.js";import{r}from"./index-DxDX2vOa.js";import{S as p}from"./Section-4kh7xz3r.js";import{M as c}from"./MultiDayCalendar-DBBx7AXc.js";import{C as d}from"./CalendarData-D-nF6TMW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Bil94z9c.js";import"./Icon-BTbDxzPp.js";import"./propClasses-DiIY1iW4.js";import"./ButtonGroup-D5p79LjI.js";import"./ChevronRightIcon-CCsIXVIj.js";import"./startOfToday-D0O5DQ5P.js";import"./format-Dt71a7ij.js";import"./parse-gVNmX4me.js";import"./isSameDay-Dpgs3O9f.js";import"./isToday-CPeHlImM.js";import"./parseISO-BQ4LyrE0.js";const q={title:"Components/Multi-day Calendar",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{events:d.events},render:l=>{const[,t]=r.useState([]),m=r.useCallback(i=>{t(i)},[t]);return a.jsx(p,{children:a.jsx(c,{events:l.events,callback:m})})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const F=["Primary"];export{e as Primary,F as __namedExportsOrder,q as default};
