import{j as e}from"./jsx-runtime-3aeb2321.js";import{F as a,c as h}from"./Form-2a1d27bf.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./index-d638a58e.js";import"./Button-44a13a65.js";import"./Icon-06152386.js";import"./optionClasses-767b8be6.js";import"./ChevronDownIcon-4154b4bc.js";import"./Calendar-adf9ef7f.js";import"./index-9180d5e9.js";import"./index-f3821225.js";import"./index-ea76b77d.js";import"./index-aff6d42c.js";import"./index-ac9ed659.js";import"./index-bdbff7f3.js";import"./Location-4b7b4868.js";import"./index-1eb27dd0.js";import"./LocationPicker-1b866a18.js";import"./index-4d501b15.js";import"./combobox-d55c58b7.js";import"./open-closed-2007ab4d.js";import"./keyboard-7b7aa261.js";import"./use-resolve-button-type-acf5cd20.js";import"./use-tracked-pointer-88919d7e.js";import"./platform-cc7c4922.js";const B={title:"Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},f=async r=>{alert("Submitted"),console.log(r)},t={firstname:{value:"TEST",validation:h().min(6,"Name must be at least 6 characters long").required("Required")}},o={render:()=>e.jsx(a,{onSubmit:()=>{},schema:{},children:()=>e.jsx("form",{children:"Add input components inside the form as children"})})},x=r=>{if(!(r.width===1600&&r.height===700))return{error:"Image needs to be 1600x700"}},m={render:r=>e.jsx(a,{...r,onSubmit:f,schema:t,children:()=>e.jsxs("form",{children:[e.jsx(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e.jsx(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e.jsx(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e.jsx(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e.jsx(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e.jsx(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e.jsx(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e.jsx(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e.jsx(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e.jsx(a.Upload,{label:"Image",name:"image",onValidate:x}),e.jsx(a.Submit,{title:"Submit Your Answers"})]})})};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,b;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={TestSchema}>
      {() => <form>
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
}`,...(b=(u=m.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const $=["TestSchema","Default","Example"];export{o as Default,m as Example,t as TestSchema,$ as __namedExportsOrder,B as default};
//# sourceMappingURL=Form.stories-d2e16a69.js.map
