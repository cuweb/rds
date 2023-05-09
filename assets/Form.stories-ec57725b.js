import{j as e}from"./jsx-runtime-daf202a7.js";import{F as a,c as h}from"./Form-907fee28.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12b82ffd.js";import"./index-e4ae510c.js";import"./Button-fe53c57d.js";import"./Icon-78ba648b.js";import"./optionClasses-767b8be6.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Calendar-ed14d246.js";import"./index-9180d5e9.js";import"./index-f3821225.js";import"./index-ea76b77d.js";import"./index-aff6d42c.js";import"./index-ac9ed659.js";import"./index-bdbff7f3.js";import"./Location-c4e53945.js";import"./index-73f8b247.js";import"./LocationPicker-2d8fc745.js";import"./index-58d3fd43.js";import"./combobox-b5286f3e.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-tracked-pointer-b81bf215.js";import"./platform-42294b71.js";const B={title:"Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},f=async r=>{alert("Submitted"),console.log(r)},t={firstname:{value:"TEST",validation:h().min(6,"Name must be at least 6 characters long").required("Required")}},o={render:()=>e.jsx(a,{onSubmit:()=>{},schema:{},children:()=>e.jsx("form",{children:"Add input components inside the form as children"})})},x=r=>{if(!(r.width===1600&&r.height===700))return{error:"Image needs to be 1600x700"}},m={render:r=>e.jsx(a,{...r,onSubmit:f,schema:t,children:()=>e.jsxs("form",{children:[e.jsx(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e.jsx(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e.jsx(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e.jsx(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e.jsx(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e.jsx(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e.jsx(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e.jsx(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e.jsx(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e.jsx(a.Upload,{label:"Image",name:"image",onValidate:x}),e.jsx(a.Submit,{title:"Submit Your Answers"})]})})};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=Form.stories-ec57725b.js.map
