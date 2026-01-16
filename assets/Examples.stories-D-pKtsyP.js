import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as q,F as t,I as h,a as b}from"./InputAddon-RVM2ba0p.js";import{c as x,a as F,b as a,d as y,e as C}from"./index.esm-c59b1p0m.js";import{S as s}from"./Section-BwxcACp4.js";import{M as T}from"./Main-DrtR39EU.js";import{F as G}from"./FooterStandard-BQzRl8Yv.js";import{N as u}from"./Nav-Dj4LbvL4.js";import{N as L}from"./NavData-DGjf4Von.js";import{B as c}from"./ButtonGroup-nDP0Iyj2.js";import{B as d}from"./Button-BySeDZ53.js";import{T as w}from"./Table-BmINM-5j.js";import{P as n}from"./PageHeader-AQx-PO11.js";import"./index-Bvnp1rP5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./optionClasses-DR4HS9ih.js";import"./index-CC3dvP0J.js";import"./index-Ct5vSSfb.js";import"./format-BDD0as5c.js";import"./isSameMonth-aULO67Zy.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./isWithinInterval-D1IBTSIx.js";import"./parseISO-Z6eZh0wm.js";import"./isSameDay-C9OCNg_L.js";import"./getDate-DcT4OotK.js";import"./LocationPicker-DJruuaSz.js";import"./Location-D6mbAWfH.js";import"./Figure-CnEX7rpb.js";import"./propClasses-CJUCiil5.js";import"./Icon-z0nuAvuJ.js";import"./FooterLogoLinks-Bj-B-7w1.js";import"./useLinkContext-CYMXyvMi.js";import"./FooterStandardData-3_746QZ9.js";import"./Avatar-C6A5BXA1.js";const Fe={title:"Components/Form/Examples",parameters:{layout:"fullscreen"}},m={render:()=>{const v={inputText:"",totalAmountDue:"",faculty:"",department:"",position:"",startDate:"",endDate:"",program:"",account:"",radio:"",checkbox:[],bannerIds:[{employeeID:"123456789",firstName:"Test",lastName:"Lastname"}],bannerIds1:[],facultyDepartments:[{faculty:"",department:"",position:""}]},S=x().shape({inputText:a().required("The field is required"),totalAmountDue:a().required("The field is required"),facultyDepartments:F().of(x().shape({faculty:a().required("Please select a faculty"),department:a().required("Please select a department"),position:a().required("Please select a position")})).min(1,"At least one Faculty-Department-Position group is required"),startDate:y().required("Start date is required"),endDate:y().required("End date is required").min(C("startDate"),"End date must be after start date"),program:a(),account:a().required("Please select an Account"),employeeSearch:a().matches(/^[0-9]{9}$/,"Employee Id  must be exactly 9 digits").nullable(),radio:a().required("Please select the Label"),checkbox:F().of(a()).min(1,"Please select the acknowledge statement").required("Please select the acknowledge statement")}),I=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],j=[{value:"Science",label:"Faculty of Science"},{value:"Engineering",label:"Faculty of Engineering"},{value:"Arts",label:"Faculty of Arts"}],E=[{value:"History",label:"History"},{value:"Philosophy",label:"Philosophy"},{value:"Literature",label:"Literature"}],k=[{value:"Manager",label:"Manager"},{value:"Developer",label:"Developer"},{value:"Analyst",label:"Analyst"}],P=[{value:"1001",label:"General Fund - 1001"},{value:"2002",label:"Research Fund - 2002"},{value:"3003",label:"Development Fund - 3003"}],A=async(r,i)=>{console.log("Form Submitted:",r),i.setSubmitting(!0),alert(JSON.stringify(r,null,2)),await new Promise(l=>setTimeout(l,1e3)),i.setSubmitting(!1)},N=()=>{o.resetForm()},o=q({initialValues:v,validationSchema:S,onSubmit:A});return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs(u.Top,{children:[e.jsx(u.Logo,{title:"Raven Design System",link:"/"}),e.jsx(u.Aside,{children:e.jsx(u.Buttons,{menu:L})})]})}),e.jsxs(T,{maxWidth:"5xl",children:[e.jsx(n,{as:"h1",header:"Form Example",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",size:"lg"}),e.jsxs(t,{formikProps:o,children:[e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"Text",size:"xs",as:"h2"}),e.jsxs(t.FieldGroup,{cols:2,children:[e.jsx(t.FieldControl,{control:"text",label:"Text Input",name:"inputText",required:!0,helper:"Helper Text",helperpostop:!0,disabled:o.isSubmitting}),e.jsx(t.FieldControl,{control:"text",label:"Disabled Text Input with helper text in bottom",name:"inputText1",required:!0,helper:"Helper Text",disabled:!0}),e.jsx(t.FieldControl,{control:"text",name:"totalAmountDue",label:"Number With Prefix and Suffix",type:"number",placeholder:"Total Amount Due",disabled:o.isSubmitting,required:!0,hasPrefix:e.jsx(h,{border:"right",children:"$"}),hasSuffix:e.jsx(h,{border:"left",children:"CAD"})})]}),e.jsx(t.FieldGroup,{children:e.jsx(t.FieldControl,{control:"textarea",label:"TextArea",name:"textareainput",required:!0,helper:"Helper Text",rows:8,disabled:o.isSubmitting})})]}),e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"Autosuggest",size:"xs",as:"h2"}),e.jsx(t.FieldGroup,{children:e.jsx(t.FieldControl,{control:"autosuggest",label:"Account",name:"account",options:P,onChange:r=>{const i=(r==null?void 0:r.value)||r;o.setFieldValue("account",i)}})})]}),e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"Selection",content:"Radio and Checkbox",size:"xs",as:"h2"}),e.jsxs(t.FieldGroup,{cols:2,children:[e.jsx(t.FieldControl,{control:"radio",label:"Label",name:"radio",options:I,isInline:!0,required:!0,disabled:o.isSubmitting,helper:"Helper Text"}),e.jsx(t.FieldControl,{control:"checkbox",name:"checkbox",label:"I acknowledge the statements above.",options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],required:!0,isInline:!0,disabled:o.isSubmitting})]})]}),e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"Drop Down with 3 Columns",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",size:"xs",as:"h2"}),e.jsxs(t.FieldGroup,{cols:3,children:[e.jsx(t.FieldControl,{control:"select",label:"Faculty",name:"faculty",options:j,required:!0}),e.jsx(t.FieldControl,{control:"select",label:"Department",name:"department",options:E,required:!0}),e.jsx(t.FieldControl,{control:"select",label:"Position",name:"position",options:k,required:!0})]})]}),e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"Date Selection",size:"xs",as:"h2"}),e.jsxs(t.FieldGroup,{cols:2,children:[e.jsx(t.FieldControl,{control:"datetime",label:"Start Date",name:"startDate",required:!0}),e.jsx(t.FieldControl,{control:"datetime",label:"End Date",name:"endDate",required:!0})]})]}),e.jsxs(s,{as:"div",children:[e.jsx(n,{header:"FieldArray with Button and Field Label in 2 columns",size:"xs",as:"h2"}),e.jsx(b,{name:"bannerIds",render:({push:r,remove:i})=>e.jsxs(e.Fragment,{children:[e.jsxs(t.FieldGroup,{cols:2,children:[e.jsx(t.FieldControl,{control:"text",name:"employeeSearch",label:"Employee ID",placeholder:"Enter Employee ID",disabled:o.isSubmitting}),e.jsx(c,{children:e.jsx(d,{title:"+ Add Employee",type:"button",onClick:()=>{const l=[{employeeID:"123456789",firstName:"John",lastName:"Doe"},{employeeID:"987654321",firstName:"Jane",lastName:"Smith"}],p=l[Math.floor(Math.random()*l.length)];r(p)},disabled:o.isSubmitting})})]}),o.values.bannerIds.length>0&&e.jsx(t.FieldGroup,{children:e.jsx(w,{columns:[{header:"Employee ID",key:"employeeID"},{header:"First Name",key:"firstName"},{header:"Last Name",key:"lastName"},{header:"Action",key:"remove"}],data:o.values.bannerIds.map((l,p)=>({...l,remove:e.jsx(d,{title:"Remove",type:"button",color:"red",onClick:()=>i(p),isSmall:!0})})),hasStripes:!0})})]})}),e.jsx(n,{header:"FieldArray with Button and without Field Label in 2 columns",size:"xs",as:"h2"}),e.jsx(b,{name:"bannerIds1",render:({push:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(t.FieldGroup,{cols:2,alignment:"top",children:[e.jsx(t.FieldControl,{control:"text",name:"employeeSearch1",label:"Employee ID",hiddenLabel:!0,placeholder:"Enter Employee ID",disabled:o.isSubmitting}),e.jsx(c,{children:e.jsx(d,{title:"+ Add Employee",type:"button",isSmall:!0,onClick:()=>{const i=[{employeeID:"123456789",firstName:"John",lastName:"Doe"},{employeeID:"987654321",firstName:"Jane",lastName:"Smith"}],l=i[Math.floor(Math.random()*i.length)];r(l)},disabled:o.isSubmitting})})]}),e.jsx(t.Error,{children:"Custom Test Error from the Form.Error component "})]})})]}),e.jsxs(c,{children:[e.jsx(d,{title:"Submit",type:"submit"}),e.jsx(d,{title:"Reset",type:"reset",color:"grey",onClick:N})]})]})]}),e.jsx(G,{})]})}};var g,f,D;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    type IInput = {
      inputText: string;
      faculty: string;
      department: string;
      position: string;
      startDate: string;
      endDate: string;
      program: string;
      account: string;
      radio: string;
      checkbox: string[];
      facultyDepartments: {
        faculty: string;
        department: string;
        position: string;
      }[];
      bannerIds: {
        employeeID: string;
        firstName: string;
        lastName: string;
      }[];
    };
    const InputInitialValues = {
      inputText: '',
      totalAmountDue: '',
      faculty: '',
      department: '',
      position: '',
      startDate: '',
      endDate: '',
      program: '',
      account: '',
      radio: '',
      checkbox: [],
      bannerIds: [{
        employeeID: '123456789',
        firstName: 'Test',
        lastName: 'Lastname'
      }],
      bannerIds1: [],
      facultyDepartments: [{
        faculty: '',
        department: '',
        position: ''
      }]
    };
    const InputValidationSchema = Yup.object().shape({
      inputText: Yup.string().required('The field is required'),
      totalAmountDue: Yup.string().required('The field is required'),
      facultyDepartments: Yup.array().of(Yup.object().shape({
        faculty: Yup.string().required('Please select a faculty'),
        department: Yup.string().required('Please select a department'),
        position: Yup.string().required('Please select a position')
      })).min(1, 'At least one Faculty-Department-Position group is required'),
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date().required('End date is required').min(Yup.ref('startDate'), 'End date must be after start date'),
      program: Yup.string(),
      account: Yup.string().required('Please select an Account'),
      employeeSearch: Yup.string().matches(/^[0-9]{9}$/, 'Employee Id  must be exactly 9 digits').nullable(),
      radio: Yup.string().required('Please select the Label'),
      checkbox: Yup.array().of(Yup.string()).min(1, 'Please select the acknowledge statement').required('Please select the acknowledge statement')
    });
    const selectOptions = [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }];
    const dataFacultyList = [{
      value: 'Science',
      label: 'Faculty of Science'
    }, {
      value: 'Engineering',
      label: 'Faculty of Engineering'
    }, {
      value: 'Arts',
      label: 'Faculty of Arts'
    }];
    const dataDepartmentList = [{
      value: 'History',
      label: 'History'
    }, {
      value: 'Philosophy',
      label: 'Philosophy'
    }, {
      value: 'Literature',
      label: 'Literature'
    }];
    const dataPositionList = [{
      value: 'Manager',
      label: 'Manager'
    }, {
      value: 'Developer',
      label: 'Developer'
    }, {
      value: 'Analyst',
      label: 'Analyst'
    }];
    const FOAPAccountData = [{
      value: '1001',
      label: 'General Fund - 1001'
    }, {
      value: '2002',
      label: 'Research Fund - 2002'
    }, {
      value: '3003',
      label: 'Development Fund - 3003'
    }];
    const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
      console.log('Form Submitted:', values);
      actions.setSubmitting(true);
      alert(JSON.stringify(values, null, 2));
      await new Promise(resolve => setTimeout(resolve, 1000));
      actions.setSubmitting(false);
    };
    const onReset: MouseEventHandler<HTMLButtonElement> = () => {
      formikProps.resetForm();
    };
    const formikProps = useFormik({
      initialValues: InputInitialValues,
      validationSchema: InputValidationSchema,
      onSubmit
    });
    return <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            {/* <Nav.Menu menu={NavDataSingle} /> */}
            <Nav.Aside>
              <Nav.Buttons menu={NavButtonsData} />
            </Nav.Aside>
          </Nav.Top>
        </Nav>

        <Main maxWidth="5xl">
          <PageHeader as="h1" header="Form Example" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." size="lg" />

          <Form formikProps={formikProps}>
            <Section as="div">
              <PageHeader header="Text" size="xs" as="h2" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl control="text" label="Text Input" name="inputText" required helper="Helper Text" helperpostop disabled={formikProps.isSubmitting} />

                <Form.FieldControl control="text" label="Disabled Text Input with helper text in bottom" name="inputText1" required helper="Helper Text" disabled={true} />

                <Form.FieldControl control="text" name="totalAmountDue" label="Number With Prefix and Suffix" type="number" placeholder="Total Amount Due" disabled={formikProps.isSubmitting} required hasPrefix={<InputAddon border="right">$</InputAddon>} hasSuffix={<InputAddon border="left">CAD</InputAddon>} />
              </Form.FieldGroup>

              <Form.FieldGroup>
                <Form.FieldControl control="textarea" label="TextArea" name="textareainput" required helper="Helper Text" rows={8} disabled={formikProps.isSubmitting} />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Autosuggest" size="xs" as="h2" />
              <Form.FieldGroup>
                <Form.FieldControl control="autosuggest" label="Account" name="account" options={FOAPAccountData} onChange={selectedOption => {
                const accountValue = selectedOption?.value || selectedOption;
                formikProps.setFieldValue('account', accountValue);
              }} />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Selection" content="Radio and Checkbox" size="xs" as="h2" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl control="radio" label="Label" name="radio" options={selectOptions} isInline required disabled={formikProps.isSubmitting} helper="Helper Text" />

                <Form.FieldControl control="checkbox" name="checkbox" label="I acknowledge the statements above." options={[{
                label: 'Yes',
                value: 'yes'
              }, {
                label: 'No',
                value: 'no'
              }]} required isInline disabled={formikProps.isSubmitting} />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Drop Down with 3 Columns" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." size="xs" as="h2" />

              <Form.FieldGroup cols={3}>
                <Form.FieldControl control="select" label="Faculty" name={\`faculty\`} options={dataFacultyList} required />

                <Form.FieldControl control="select" label="Department" name={\`department\`} options={dataDepartmentList} required />

                <Form.FieldControl control="select" label="Position" name={\`position\`} options={dataPositionList} required />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Date Selection" size="xs" as="h2" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl control="datetime" label="Start Date" name="startDate" required />
                <Form.FieldControl control="datetime" label="End Date" name="endDate" required />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="FieldArray with Button and Field Label in 2 columns" size="xs" as="h2" />

              <FieldArray name="bannerIds" render={({
              push,
              remove
            }) => <>
                    <Form.FieldGroup cols={2}>
                      <Form.FieldControl control="text" name="employeeSearch" label="Employee ID" placeholder="Enter Employee ID" disabled={formikProps.isSubmitting} />
                      <ButtonGroup>
                        <Button title="+ Add Employee" type="button" onClick={() => {
                    const mockEmployeeData = [{
                      employeeID: '123456789',
                      firstName: 'John',
                      lastName: 'Doe'
                    }, {
                      employeeID: '987654321',
                      firstName: 'Jane',
                      lastName: 'Smith'
                    }];
                    const randomEmployee = mockEmployeeData[Math.floor(Math.random() * mockEmployeeData.length)];
                    push(randomEmployee);
                  }} disabled={formikProps.isSubmitting} />
                      </ButtonGroup>
                    </Form.FieldGroup>

                    {/* <ErrorMessage name="employeeSearch">{(error) => <Form.Error>{error}</Form.Error>}</ErrorMessage> */}

                    {formikProps.values.bannerIds.length > 0 && <Form.FieldGroup>
                        <Table columns={[{
                  header: 'Employee ID',
                  key: 'employeeID'
                }, {
                  header: 'First Name',
                  key: 'firstName'
                }, {
                  header: 'Last Name',
                  key: 'lastName'
                }, {
                  header: 'Action',
                  key: 'remove'
                }]} data={formikProps.values.bannerIds.map((emp, index) => ({
                  ...emp,
                  remove: <Button title="Remove" type="button" color="red" onClick={() => remove(index)} isSmall />
                }))} hasStripes />
                      </Form.FieldGroup>}
                  </>} />

              <PageHeader header="FieldArray with Button and without Field Label in 2 columns" size="xs" as="h2" />

              <FieldArray name="bannerIds1" render={({
              push
            }) => <>
                    <Form.FieldGroup cols={2} alignment="top">
                      <Form.FieldControl control="text" name="employeeSearch1" label="Employee ID" hiddenLabel={true} placeholder="Enter Employee ID" disabled={formikProps.isSubmitting} />
                      <ButtonGroup>
                        <Button title="+ Add Employee" type="button" isSmall onClick={() => {
                    const mockEmployeeData = [{
                      employeeID: '123456789',
                      firstName: 'John',
                      lastName: 'Doe'
                    }, {
                      employeeID: '987654321',
                      firstName: 'Jane',
                      lastName: 'Smith'
                    }];
                    const randomEmployee = mockEmployeeData[Math.floor(Math.random() * mockEmployeeData.length)];
                    push(randomEmployee);
                  }} disabled={formikProps.isSubmitting} />
                      </ButtonGroup>
                    </Form.FieldGroup>

                    <Form.Error>Custom Test Error from the Form.Error component </Form.Error>
                  </>} />
            </Section>

            <ButtonGroup>
              <Button title="Submit" type="submit" />
              <Button title="Reset" type="reset" color="grey" onClick={onReset} />
            </ButtonGroup>
          </Form>
        </Main>

        <FooterStandard />
      </>;
  }
}`,...(D=(f=m.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const ye=["LayoutExamples"];export{m as LayoutExamples,ye as __namedExportsOrder,Fe as default};
