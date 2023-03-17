import{j as a,a as u}from"./jsx-runtime-9d2cd5de.js";import{F as e}from"./Form-b63e568c.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./Button-2e5408fb.js";import"./Icon-06d25453.js";import"./tailwindClasses-b7ef87ec.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-24898639.js";const x={title:"Forms/Base Form",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=async t=>{alert("Submitted"),console.log(t)},p={firstname:"ish",description:" sample description",regularviewer:"2",location:"Carleton University, Colonel By Drive, Ottawa, ON, Canada",favsitcom:"familymatter",favcharacters:["kellykapowski","carltonbanks"]},r={render:()=>a(e,{onSubmit:()=>{},schema:{},initialValues:{name:"John Doe",email:"johndoe@example.com"},children:"Add input components inside the form as children"})},o={render:t=>u(e,{...t,onSubmit:d,schema:{},initialValues:p,children:[a(e.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),a(e.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),a(e.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),a(e.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description..."}),a(e.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom"}),a(e.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"}]}),a(e.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name",label:"name"}]}),a(e.Submit,{title:"Submit Your Answers"})]})};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}} initialValues={{
    name: 'John Doe',
    email: 'johndoe@example.com'
  }}>
      Add input components inside the form as children
    </Form>
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,l,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Form {...args} onSubmit={formOnSubmit} schema={{}} initialValues={InitialValues}>
      <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

      <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

      <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

      <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." />

      <Form.Select label="What is your favorite 90s sitcom?" name="favsitcom" />

      <Form.Radio label="How many of these shows did you watch regularly?" name="regularviewer" options={[{
      name: '1',
      label: '1'
    }]} />

      <Form.Checkbox label="Who are your favourite 90s sitcom characters?" name="favcharacters" options={[{
      name: 'name',
      label: 'name'
    }]} />

      <Form.Submit title="Submit Your Answers" />
    </Form>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const I=["Default","Example"];export{r as Default,o as Example,I as __namedExportsOrder,x as default};
//# sourceMappingURL=Form.stories-c0be4cb2.js.map
