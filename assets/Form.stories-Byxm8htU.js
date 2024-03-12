import{j as e}from"./jsx-runtime-CKrituN3.js";import{F as a,c as s}from"./Form-Beukgy8s.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./XMarkIcon-iOOrpGul.js";import"./Button-D_Hl5638.js";import"./Icon-7MNW6_r8.js";import"./optionClasses-nRtJeGr9.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./Calendar-B7DS1eEc.js";import"./startOfToday-C7FXxczV.js";import"./parse-BfiLtjV-.js";const Y={title:"Deprecated/Forms/Base Form",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},S=async n=>{alert("Submitted"),console.log(n)},r={firstname:{value:"TEST",validation:s().min(6,"Name must be at least 6 characters long").required("Required")},lastname:{value:"",validation:s().min(6,"Name must be at least 6 characters long").required("Required")}},t={render:()=>e.jsx(a,{onSubmit:()=>{},schema:{},children:()=>e.jsx("form",{children:"Add input components inside the form as children"})})},x=(n,m,v)=>n&&m&&v,F=async n=>n.name,g=async n=>n,y=()=>{},o={render:n=>e.jsx(a,{...n,onSubmit:S,schema:r,children:({handleSubmit:m})=>e.jsxs("form",{onSubmit:m,children:[e.jsx(a.Input,{label:"First Name",name:"firstname",placeholder:"Enter your first name",required:!0}),e.jsx(a.Input,{label:"Last Name",name:"lastname",placeholder:"Enter your last name",required:!0}),e.jsx(a.Input,{label:"Address",name:"address",placeholder:"Enter your street name and house number, if applicable"}),e.jsx(a.Select,{label:"What is your favorite 90s sitcom?",name:"favsitcom",options:[{value:"name1",label:"name1"},{value:"name2",label:"name2"},{value:"name3",label:"name3"}]}),e.jsx(a.WYSIWYG,{label:"Event Description",name:"description",placeholder:"write some description...",editor:"textarea"}),e.jsx(a.DateTimePicker,{name:"datetime",placeholder:"Please select date and time..."}),e.jsx(a.Radio,{label:"How many of these shows did you watch regularly?",name:"regularviewer",options:[{name:"1",label:"1"},{name:"2",label:"2"},{name:"3",label:"3"}]}),e.jsx(a.Checkbox,{label:"Who are your favourite 90s sitcom characters?",name:"favcharacters",options:[{name:"name1",label:"name1",id:1},{name:"name2",label:"name2",id:2},{name:"name3",label:"name3",id:3}]}),e.jsx(a.Upload,{label:"Image",name:"image",onValidate:x,onUpload:F,onReset:g,setPreview:y}),e.jsx(a.Submit,{title:"Submit Your Answers"})]})})};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  },
  lastname: {
    value: '',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required')
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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

          {/* <Form.PlacesAutoComplete name="location" placeholder="Please select a location..." /> */}

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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const U=["TestSchema","Default","Example"];export{t as Default,o as Example,r as TestSchema,U as __namedExportsOrder,Y as default};
