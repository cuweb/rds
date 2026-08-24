import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{n as d,t as f}from"./ButtonGroup-D8089_T6.js";import{o as p,r as m}from"./NavData-ahBUZ0C_.js";import{n as h,t as g}from"./Button-CyTkV0p8.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./InputAddon-eg8DGTZB.js";import{n as w,t as T}from"./PageHeader-BfMqWfqW.js";import{c as E,i as D,l as O,n as k,o as A,r as j}from"./index.esm-B-gsAYda.js";import{n as M,t as N}from"./Table-ClqUCS19.js";var P,F,I,L;function R(){return(R=e((()=>{t(),b(),O(),a(),r(),s(),l(),p(),v(),d(),h(),M(),w(),y(),P=n(),F={title:`Components/Form/Examples`,parameters:{layout:`fullscreen`}},I={render:()=>{let e={inputText:``,totalAmountDue:``,faculty:``,department:``,position:``,startDate:``,endDate:``,program:``,account:``,radio:``,checkbox:[],bannerIds:[{employeeID:`123456789`,firstName:`Test`,lastName:`Lastname`}],bannerIds1:[],facultyDepartments:[{faculty:``,department:``,position:``}]},t=j().shape({inputText:A().required(`The field is required`),totalAmountDue:A().required(`The field is required`),facultyDepartments:k().of(j().shape({faculty:A().required(`Please select a faculty`),department:A().required(`Please select a department`),position:A().required(`Please select a position`)})).min(1,`At least one Faculty-Department-Position group is required`),startDate:D().required(`Start date is required`),endDate:D().required(`End date is required`).min(E(`startDate`),`End date must be after start date`),program:A(),account:A().required(`Please select an Account`),employeeSearch:A().matches(/^[0-9]{9}$/,`Employee Id  must be exactly 9 digits`).nullable(),radio:A().required(`Please select the Label`),checkbox:k().of(A()).min(1,`Please select the acknowledge statement`).required(`Please select the acknowledge statement`)}),n=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`}],r=[{value:`Science`,label:`Faculty of Science`},{value:`Engineering`,label:`Faculty of Engineering`},{value:`Arts`,label:`Faculty of Arts`}],a=[{value:`History`,label:`History`},{value:`Philosophy`,label:`Philosophy`},{value:`Literature`,label:`Literature`}],s=[{value:`Manager`,label:`Manager`},{value:`Developer`,label:`Developer`},{value:`Analyst`,label:`Analyst`}],l=[{value:`1001`,label:`General Fund - 1001`},{value:`2002`,label:`Research Fund - 2002`},{value:`3003`,label:`Development Fund - 3003`}],d=async(e,t)=>{console.log(`Form Submitted:`,e),t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await new Promise(e=>setTimeout(e,1e3)),t.setSubmitting(!1)},p=()=>{h.resetForm()},h=S({initialValues:e,validationSchema:t,onSubmit:d});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(u,{children:(0,P.jsxs)(u.Top,{children:[(0,P.jsx)(u.Logo,{title:`Raven Design System`,link:`/`}),(0,P.jsx)(u.Aside,{children:(0,P.jsx)(u.Buttons,{menu:m})})]})}),(0,P.jsxs)(i,{maxWidth:`5xl`,children:[(0,P.jsx)(T,{as:`h1`,header:`Form Example`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,size:`lg`}),(0,P.jsxs)(x,{formikProps:h,children:[(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`Text`,size:`xs`,as:`h2`}),(0,P.jsxs)(x.FieldGroup,{cols:2,children:[(0,P.jsx)(x.FieldControl,{control:`text`,label:`Text Input`,name:`inputText`,required:!0,helper:`Helper Text`,helperpostop:!0,disabled:h.isSubmitting}),(0,P.jsx)(x.FieldControl,{control:`text`,label:`Disabled Text Input with helper text in bottom`,name:`inputText1`,required:!0,helper:`Helper Text`,disabled:!0}),(0,P.jsx)(x.FieldControl,{control:`text`,name:`totalAmountDue`,label:`Number With Prefix and Suffix`,type:`number`,placeholder:`Total Amount Due`,disabled:h.isSubmitting,required:!0,hasPrefix:(0,P.jsx)(C,{border:`right`,children:`$`}),hasSuffix:(0,P.jsx)(C,{border:`left`,children:`CAD`})})]}),(0,P.jsx)(x.FieldGroup,{children:(0,P.jsx)(x.FieldControl,{control:`textarea`,label:`TextArea`,name:`textareainput`,required:!0,helper:`Helper Text`,rows:8,disabled:h.isSubmitting})})]}),(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`Autosuggest`,size:`xs`,as:`h2`}),(0,P.jsx)(x.FieldGroup,{children:(0,P.jsx)(x.FieldControl,{control:`autosuggest`,label:`Account`,name:`account`,options:l,onChange:e=>{let t=e?.value||e;h.setFieldValue(`account`,t)}})})]}),(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`Selection`,content:`Radio and Checkbox`,size:`xs`,as:`h2`}),(0,P.jsxs)(x.FieldGroup,{cols:2,children:[(0,P.jsx)(x.FieldControl,{control:`radio`,label:`Label`,name:`radio`,options:n,isInline:!0,required:!0,disabled:h.isSubmitting,helper:`Helper Text`}),(0,P.jsx)(x.FieldControl,{control:`checkbox`,name:`checkbox`,label:`I acknowledge the statements above.`,options:[{label:`Yes`,value:`yes`},{label:`No`,value:`no`}],required:!0,isInline:!0,disabled:h.isSubmitting})]})]}),(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`Drop Down with 3 Columns`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,size:`xs`,as:`h2`}),(0,P.jsxs)(x.FieldGroup,{cols:3,children:[(0,P.jsx)(x.FieldControl,{control:`select`,label:`Faculty`,name:`faculty`,options:r,required:!0}),(0,P.jsx)(x.FieldControl,{control:`select`,label:`Department`,name:`department`,options:a,required:!0}),(0,P.jsx)(x.FieldControl,{control:`select`,label:`Position`,name:`position`,options:s,required:!0})]})]}),(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`Date Selection`,size:`xs`,as:`h2`}),(0,P.jsxs)(x.FieldGroup,{cols:2,children:[(0,P.jsx)(x.FieldControl,{control:`datetime`,label:`Start Date`,name:`startDate`,required:!0}),(0,P.jsx)(x.FieldControl,{control:`datetime`,label:`End Date`,name:`endDate`,required:!0})]})]}),(0,P.jsxs)(o,{as:`div`,children:[(0,P.jsx)(T,{header:`FieldArray with Button and Field Label in 2 columns`,size:`xs`,as:`h2`}),(0,P.jsx)(_,{name:`bannerIds`,render:({push:e,remove:t})=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(x.FieldGroup,{cols:2,children:[(0,P.jsx)(x.FieldControl,{control:`text`,name:`employeeSearch`,label:`Employee ID`,placeholder:`Enter Employee ID`,disabled:h.isSubmitting}),(0,P.jsx)(f,{children:(0,P.jsx)(g,{title:`+ Add Employee`,type:`button`,onClick:()=>{let t=[{employeeID:`123456789`,firstName:`John`,lastName:`Doe`},{employeeID:`987654321`,firstName:`Jane`,lastName:`Smith`}],n=t[Math.floor(Math.random()*t.length)];e(n)},disabled:h.isSubmitting})})]}),h.values.bannerIds.length>0&&(0,P.jsx)(x.FieldGroup,{children:(0,P.jsx)(N,{columns:[{header:`Employee ID`,key:`employeeID`},{header:`First Name`,key:`firstName`},{header:`Last Name`,key:`lastName`},{header:`Action`,key:`remove`}],data:h.values.bannerIds.map((e,n)=>({...e,remove:(0,P.jsx)(g,{title:`Remove`,type:`button`,color:`red`,onClick:()=>t(n),isSmall:!0})})),hasStripes:!0})})]})}),(0,P.jsx)(T,{header:`FieldArray with Button and without Field Label in 2 columns`,size:`xs`,as:`h2`}),(0,P.jsx)(_,{name:`bannerIds1`,render:({push:e})=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(x.FieldGroup,{cols:2,alignment:`top`,children:[(0,P.jsx)(x.FieldControl,{control:`text`,name:`employeeSearch1`,label:`Employee ID`,hiddenLabel:!0,placeholder:`Enter Employee ID`,disabled:h.isSubmitting}),(0,P.jsx)(f,{children:(0,P.jsx)(g,{title:`+ Add Employee`,type:`button`,isSmall:!0,onClick:()=>{let t=[{employeeID:`123456789`,firstName:`John`,lastName:`Doe`},{employeeID:`987654321`,firstName:`Jane`,lastName:`Smith`}],n=t[Math.floor(Math.random()*t.length)];e(n)},disabled:h.isSubmitting})})]}),(0,P.jsx)(x.Error,{children:`Custom Test Error from the Form.Error component `})]})})]}),(0,P.jsxs)(f,{children:[(0,P.jsx)(g,{title:`Submit`,type:`submit`}),(0,P.jsx)(g,{title:`Reset`,type:`reset`,color:`grey`,onClick:p})]})]})]}),(0,P.jsx)(c,{})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`LayoutExamples`]})))()}R();export{I as LayoutExamples,L as __namedExportsOrder,F as default};