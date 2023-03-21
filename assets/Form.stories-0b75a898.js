import{j as r,a as p}from"./jsx-runtime-9d2cd5de.js";import{F as e}from"./Form-97d15ec2.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e08e05bb.js";import"./Button-051dafa4.js";import"./Icon-06d25453.js";import"./tailwindClasses-b7ef87ec.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-44b0899b.js";import"./Calendar-c63bbf7b.js";import"./index-0ba33c7b.js";import"./index-e2ec86ea.js";import"./index-ae1f7f2c.js";import"./index-4d501b15.js";import"./Location-84148cbe.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";const B={title:"Forms/Base Form",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},u=async t=>{alert("Submitted"),console.log(t)},d={firstname:"ish",description:" sample description",regularviewer:"2",location:"Carleton University, Colonel By Drive, Ottawa, ON, Canada",favsitcom:"familymatter",favcharacters:["kellykapowski","carltonbanks"]},a={render:()=>r(e,{onSubmit:()=>{},schema:{},initialValues:{name:"John Doe",email:"johndoe@example.com"},children:"Add input components inside the form as children"})},o={render:t=>p(e,{...t,onSubmit:u,schema:{},initialValues:d,children:[r(e.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),r(e.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),r(e.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),r(e.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description..."}),r(e.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom"}),r(e.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"}]}),r(e.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name",label:"name"}]}),r(e.Submit,{title:"Submit Your Answers"})]})};var i,m,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}} initialValues={{
    name: 'John Doe',
    email: 'johndoe@example.com'
  }}>
      Add input components inside the form as children
    </Form>
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,l,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["Default","Example"];export{a as Default,o as Example,G as __namedExportsOrder,B as default};
//# sourceMappingURL=Form.stories-0b75a898.js.map
