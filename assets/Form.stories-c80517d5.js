import{j as e,a as h}from"./jsx-runtime-9d2cd5de.js";import{F as a,c as f}from"./Form-60081c5e.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./index-d638a58e.js";import"./Button-6d79f42e.js";import"./Icon-a1a9e118.js";import"./optionClasses-4f7b0afb.js";import"./ChevronDownIcon-4154b4bc.js";import"./Calendar-fbde16dd.js";import"./index-9180d5e9.js";import"./index-f3821225.js";import"./index-ea76b77d.js";import"./index-aff6d42c.js";import"./index-ac9ed659.js";import"./index-bdbff7f3.js";import"./Location-d41b4ac2.js";import"./index-1eb27dd0.js";import"./LocationPicker-5a8659ef.js";import"./index-4d501b15.js";import"./combobox-6d6ee991.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-40c2495e.js";import"./platform-ae94fb3f.js";const $={title:"Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=async r=>{alert("Submitted"),console.log(r)},t={firstname:{value:"TEST",validation:f().min(6,"Name must be at least 6 characters long").required("Required")}},o={render:()=>e(a,{onSubmit:()=>{},schema:{},children:()=>e("form",{children:"Add input components inside the form as children"})})},S=r=>{if(!(r.width===1600&&r.height===700))return{error:"Image needs to be 1600x700"}},m={render:r=>e(a,{...r,onSubmit:v,schema:t,children:()=>h("form",{children:[e(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e(a.Upload,{label:"Image",name:"image",onValidate:S}),e(a.Submit,{title:"Submit Your Answers"})]})})};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(b=(u=m.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const z=["TestSchema","Default","Example"];export{o as Default,m as Example,t as TestSchema,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=Form.stories-c80517d5.js.map
