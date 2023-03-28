import{j as e,a as h}from"./jsx-runtime-9d2cd5de.js";import{F as a,c as f}from"./Form-070b6567.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-31110fe0.js";import"./index-a336f0bb.js";import"./Button-c2d138f4.js";import"./Icon-98794453.js";import"./optionClasses-9f612ec7.js";import"./ChevronDownIcon-4154b4bc.js";import"./Link-44b0899b.js";import"./Calendar-af5af74f.js";import"./index-0ba33c7b.js";import"./index-e2ec86ea.js";import"./index-ae1f7f2c.js";import"./Location-2b638b33.js";import"./index-1eb27dd0.js";import"./LocationPicker-356110ad.js";import"./index-4d501b15.js";import"./combobox-00d1fd7e.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-tracked-pointer-511c0c47.js";import"./platform-ae94fb3f.js";const _={title:"Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=async t=>{alert("Submitted"),console.log(t)},r={firstname:{value:"TEST",validation:f().min(6,"Name must be at least 6 characters long").required("Required")}},o={render:()=>e(a,{onSubmit:()=>{},schema:{},children:()=>e("form",{children:"Add input components inside the form as children"})})},m={render:t=>e(a,{...t,onSubmit:v,schema:r,children:()=>h("form",{children:[e(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e(a.PlacesAutoComplete,{name:"location",placeholder:"Please select a location..."}),e(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1"},{name:"name2",label:"name2"},{name:"name3",label:"name3"}]}),e(a.Upload,{label:"Image",name:"image"}),e(a.Submit,{title:"Submit Your Answers"})]})})};var n,l,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,b;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

          <Form.Upload label="Image" name="image" />

          <Form.Submit title="Submit Your Answers" />
        </form>}
    </Form>
}`,...(b=(d=m.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const B=["TestSchema","Default","Example"];export{o as Default,m as Example,r as TestSchema,B as __namedExportsOrder,_ as default};
//# sourceMappingURL=Form.stories-16505a64.js.map
