import{j as a,a as p}from"./jsx-runtime-9d2cd5de.js";import{F as e}from"./Form-5bbd6554.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e08e05bb.js";import"./Button-40091c81.js";import"./Icon-98794453.js";import"./optionClasses-9f612ec7.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-44b0899b.js";import"./Calendar-aa9e3dfb.js";import"./index-0ba33c7b.js";import"./index-e2ec86ea.js";import"./index-ae1f7f2c.js";import"./index-34bd24b7.js";import"./index-4d501b15.js";import"./Location-c90b7a05.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";const G={title:"Forms/Base Form",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u=async m=>{alert("Submitted"),console.log(m)},d={firstname:"ish",description:" sample description",regularviewer:"2",location:"Carleton University, Colonel By Drive, Ottawa, ON, Canada",favsitcom:"familymatter",favcharacters:["kellykapowski","carltonbanks"]},r={render:()=>a(e,{onSubmit:()=>{},schema:{},initialValues:{name:"John Doe",email:"johndoe@example.com"},children:"Add input components inside the form as children"})},o={render:m=>p(e,{...m,onSubmit:u,schema:{},initialValues:d,children:[a(e.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),a(e.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),a(e.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),a(e.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description..."}),a(e.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),a(e.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),a(e.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1"},{name:"name2",label:"name2"},{name:"name3",label:"name3"}]}),a(e.Submit,{title:"Submit Your Answers"})]})};var t,n,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}} initialValues={{
    name: 'John Doe',
    email: 'johndoe@example.com'
  }}>
      Add input components inside the form as children
    </Form>
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={{}} initialValues={InitialValues}>
      <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

      <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

      <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

      <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." />

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
      label: 'name1'
    }, {
      name: 'name2',
      label: 'name2'
    }, {
      name: 'name3',
      label: 'name3'
    }]} />

      <Form.Submit title="Submit Your Answers" />
    </Form>
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const H=["Default","Example"];export{r as Default,o as Example,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Form.stories-0ebc6455.js.map
