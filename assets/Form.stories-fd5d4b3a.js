import{j as e}from"./jsx-runtime-daf202a7.js";import{F as a,c as n}from"./Form-7d69e60c.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./XMarkIcon-81eef1c8.js";import"./Button-60a97d3b.js";import"./Icon-fdae82d0.js";import"./optionClasses-dcd0a1d3.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Calendar-a6218e7e.js";import"./index-37505e40.js";import"./Location-1518fbe7.js";import"./index-73f8b247.js";import"./LocationPicker-83e437ce.js";import"./index-58d3fd43.js";import"./combobox-6144e67a.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-tracked-pointer-50f23cfa.js";import"./platform-18d24fa4.js";import"./MagnifyingGlassIcon-6a66de15.js";const H={title:"Components/Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=async r=>{alert("Submitted"),console.log(r)},t={firstname:{value:"TEST",validation:n().min(6,"Name must be at least 6 characters long").required("Required")},lastname:{value:"",validation:n().min(6,"Name must be at least 6 characters long").required("Required")}},m={render:()=>e.jsx(a,{onSubmit:()=>{},schema:{},children:()=>e.jsx("form",{children:"Add input components inside the form as children"})})},S=r=>{if(!(r.width===1600&&r.height===700))return{error:"Image needs to be 1600x700"}},o={render:r=>e.jsx(a,{...r,onSubmit:v,schema:t,children:({handleSubmit:f})=>e.jsxs("form",{onSubmit:f,children:[e.jsx(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e.jsx(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e.jsx(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e.jsx(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e.jsx(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e.jsx(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e.jsx(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e.jsx(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e.jsx(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e.jsx(a.Upload,{label:"Image",name:"image",onValidate:S}),e.jsx(a.Submit,{title:"Submit Your Answers"})]})})};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  },
  lastname: {
    value: '',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,c,u;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,b,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

          <Form.Upload label="Image" name="image" onValidate={validateUpload} />

          <Form.Submit title="Submit Your Answers" />
        </form>}
    </Form>
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const L=["TestSchema","Default","Example"];export{m as Default,o as Example,t as TestSchema,L as __namedExportsOrder,H as default};
//# sourceMappingURL=Form.stories-fd5d4b3a.js.map
