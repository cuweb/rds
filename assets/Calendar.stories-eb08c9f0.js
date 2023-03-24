import{j as l}from"./jsx-runtime-9d2cd5de.js";import{C as o}from"./Calendar-aa9e3dfb.js";import{r as t}from"./index-580b8df0.js";import"./index-e08e05bb.js";import"./Button-40091c81.js";import"./Icon-98794453.js";import"./optionClasses-9f612ec7.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-44b0899b.js";import"./index-0ba33c7b.js";import"./index-e2ec86ea.js";import"./index-ae1f7f2c.js";import"./_commonjsHelpers-042e6b4d.js";const E={title:"Components/Calendar",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={title:"Events",classname:".events",events:[{id:1,name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",startDatetime:"2022-10-21T13:00",endDatetime:"2022-10-21T14:30"},{id:2,name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",startDatetime:"2022-10-21T09:00",endDatetime:"2022-10-21T11:30"},{id:3,name:"Dries Vincent",imageUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",startDatetime:"2022-10-24T17:00",endDatetime:"2022-10-24T18:30"},{id:4,name:"Leslie Alexander",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",startDatetime:"2022-10-26T13:00",endDatetime:"2022-10-26T14:30"},{id:5,name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",startDatetime:"2022-10-30T14:00",endDatetime:"2022-10-30T14:30"}]},e=()=>{const[,a]=t.useState(new Date(0)),c=t.useCallback(m=>{a(m)},[a]);return l(o,{events:n.events,callback:c})};e.storyName="Default Calendar";var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [, setSelectedDate] = useState(new Date(0));
  const callbackcal = useCallback((itemSelected: Date) => {
    setSelectedDate(itemSelected);
  }, [setSelectedDate]);
  return <Calendar events={data.events} callback={callbackcal} />;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,E as default};
//# sourceMappingURL=Calendar.stories-eb08c9f0.js.map
