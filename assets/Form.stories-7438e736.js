import{j as e,a as h}from"./jsx-runtime-9d2cd5de.js";import{F as a,c as f}from"./Form-3c61de2a.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./index-d638a58e.js";import"./Button-01d00a2b.js";import"./Icon-791be62e.js";import"./optionClasses-c5aec0a8.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-db0636d8.js";import"./iframe-34316ff4.js";import"../sb-preview/runtime.mjs";import"./Calendar-6e0e3247.js";import"./index-9180d5e9.js";import"./index-f3821225.js";import"./index-ea76b77d.js";import"./index-aff6d42c.js";import"./index-ac9ed659.js";import"./index-bdbff7f3.js";import"./Location-d41b4ac2.js";import"./index-1eb27dd0.js";import"./LocationPicker-5a8659ef.js";import"./index-4d501b15.js";import"./combobox-6d6ee991.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-40c2495e.js";import"./platform-ae94fb3f.js";const K={title:"Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=async o=>{alert("Submitted"),console.log(o)},r={firstname:{value:"TEST",validation:f().min(6,"Name must be at least 6 characters long").required("Required")}},m={render:()=>e(a,{onSubmit:()=>{},schema:{},children:()=>e("form",{children:"Add input components inside the form as children"})})},t={render:o=>e(a,{...o,onSubmit:v,schema:r,children:()=>h("form",{children:[e(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e(a.Upload,{label:"Image",name:"image"}),e(a.Submit,{title:"Submit Your Answers"})]})})};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,c,d;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(d=(c=m.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

          <Form.Upload label="Image" name="image" />

          <Form.Submit title="Submit Your Answers" />
        </form>}
    </Form>
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const M=["TestSchema","Default","Example"];export{m as Default,t as Example,r as TestSchema,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Form.stories-7438e736.js.map
