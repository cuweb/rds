import{j as e}from"./jsx-runtime-7ce7b810.js";import{F as a,c as s}from"./Form-7e7bc3e1.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./XMarkIcon-d71bb9d6.js";import"./Button-bad4dfeb.js";import"./Icon-163d2856.js";import"./optionClasses-c898b830.js";import"./ChevronDownIcon-2780c6ad.js";import"./Calendar-158f4261.js";import"./index-fb25e841.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./Location-9ac98c4e.js";import"./index-4da2af8c.js";import"./LocationPicker-6a5a2b34.js";import"./index-9d475cdf.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./combobox-b10c8063.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-resolve-button-type-39f07965.js";import"./use-tracked-pointer-a7a12abc.js";import"./platform-c0b4c731.js";const z={title:"Components/Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},S=async r=>{alert("Submitted"),console.log(r)},t={firstname:{value:"TEST",validation:s().min(6,"Name must be at least 6 characters long").required("Required")},lastname:{value:"",validation:s().min(6,"Name must be at least 6 characters long").required("Required")}},o={render:()=>e.jsx(a,{onSubmit:()=>{},schema:{},children:()=>e.jsx("form",{children:"Add input components inside the form as children"})})},x=(r,n,v)=>r&&n&&v,F=async r=>r.name,g=async r=>r,y=()=>{},m={render:r=>e.jsx(a,{...r,onSubmit:S,schema:t,children:({handleSubmit:n})=>e.jsxs("form",{onSubmit:n,children:[e.jsx(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e.jsx(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e.jsx(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e.jsx(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e.jsx(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e.jsx(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e.jsx(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e.jsx(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e.jsx(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e.jsx(a.Upload,{label:"Image",name:"image",onValidate:x,onUpload:F,onReset:g,setPreview:y}),e.jsx(a.Submit,{title:"Submit Your Answers"})]})})};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  },
  lastname: {
    value: '',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,h,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={TestSchema}>
      {({
      handleSubmit
    }) => <form onSubmit={handleSubmit}>
          <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

          <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

          <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

          <Form.Select label="What is your favorite 90s sitcom?" name="favsitcom" options={[{
        value: 'name1',
        label: 'name1'
      }, {
        value: 'name2',
        label: 'name2'
      }, {
        value: 'name3',
        label: 'name3'
      }]} />

          <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." editor="textarea" />

          <Form.PlacesAutoComplete name="location" placeholder="Please select a location..." />

          <Form.DateTimePicker name="datetime" placeholder="Please select date and time..." />

          <Form.Radio label="How many of these shows did you watch regularly?" name="regularviewer" options={[{
        name: '1',
        label: '1'
      }, {
        name: '2',
        label: '2'
      }, {
        name: '3',
        label: '3'
      }]} />

          <Form.Checkbox label="Who are your favourite 90s sitcom characters?" name="favcharacters" options={[{
        name: 'name1',
        label: 'name1',
        id: 1
      }, {
        name: 'name2',
        label: 'name2',
        id: 2
      }, {
        name: 'name3',
        label: 'name3',
        id: 3
      }]} />

          <Form.Upload label="Image" name="image" onValidate={onValidate} onUpload={onUpload} onReset={onReset} setPreview={setPreview} />

          <Form.Submit title="Submit Your Answers" />
        </form>}
    </Form>
}`,...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const J=["TestSchema","Default","Example"];export{o as Default,m as Example,t as TestSchema,J as __namedExportsOrder,z as default};
//# sourceMappingURL=Form.stories-0455bc53.js.map
