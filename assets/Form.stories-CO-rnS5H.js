import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-IpA8Qn9U.js";import{t as r}from"./jsx-runtime-CA2T8_y1.js";import{n as i,t as a}from"./ButtonGroup-D8089_T6.js";import{n as o,t as s}from"./Button-CyTkV0p8.js";import{i as c,n as l,o as u,r as d,s as f,t as p}from"./InputAddon-eg8DGTZB.js";import{n as m,t as h}from"./PageHeader-BfMqWfqW.js";import{a as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./index.esm-B-gsAYda.js";import{a as w,i as T}from"./Location-oWT_48OO.js";import{n as E,t as D}from"./Modal-DaW2DDbb.js";function O(){return Math.random().toString(36).substring(7)}var k,A;function j(){return(j=e((()=>{k=Array.from({length:100},()=>{let e=O();return{value:e,label:e}}),A=k})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{M=t(n(),1),u(),v(),c(),m(),E(),i(),o(),j(),w(),l(),N=r(),P={title:`Components/Form`,component:d,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},F=e=>new Promise(t=>setTimeout(t,e)),I=()=>{let e={inputText:``},t=x().shape({inputText:b().required(`The field is required`)}),n=async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)},r=()=>{i.resetForm()},i=f({initialValues:e,validationSchema:t,onSubmit:n}),[o,c]=(0,M.useState)(!1),l=(0,M.useRef)(null);return(0,M.useEffect)(()=>{o||l?.current?.focus()},[o]),(0,N.jsxs)(d,{formikProps:i,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`text`,label:`Label`,name:`inputText`,required:!0,helper:`Helper Text`,helperpostop:!0,disabled:i.isSubmitting||o,ref:l,onChange:async e=>{console.log(e.currentTarget.value),i.setFieldValue(`inputText`,e.currentTarget.value),c(!0),await F(1e3),c(!1)}})}),(0,N.jsxs)(a,{children:[(0,N.jsx)(s,{title:`Submit`,type:`submit`}),(0,N.jsx)(s,{title:`Reset`,type:`reset`,color:`grey`,onClick:r})]})]})},L=()=>{let[e,t]=(0,M.useState)(!1),n={inputText:``},r=x().shape({inputText:b().required(`The field is required`)}),i=async(e,n)=>{n.setSubmitting(!0),t(!0),await F(1e3),n.setSubmitting(!1)},o=()=>{c.resetForm()},c=f({initialValues:n,validationSchema:r,onSubmit:i});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(d,{formikProps:c,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`text`,label:`Label`,name:`inputText`,required:!0,helper:`Helper Text`,hasPrefix:(0,N.jsx)(p,{border:`right`,isGrey:!0,children:`$`}),hasSuffix:(0,N.jsx)(p,{border:`left`,isGrey:!0,children:`USD`}),helperpostop:!0,disabled:c.isSubmitting})}),(0,N.jsxs)(a,{children:[(0,N.jsx)(s,{title:`Submit`,type:`submit`}),(0,N.jsx)(s,{title:`Reset`,type:`reset`,color:`grey`,onClick:o})]})]}),(0,N.jsx)(D,{isOpen:e,setIsOpen:t,ariaLabel:`Modal label`,ariaDescription:`The modal description`,children:(0,N.jsx)(h,{as:`h2`,header:`Modal content`,size:`sm`,isCenter:!0})})]})},R=()=>{let e={textareainput:``},t=x().shape({textareainput:b().required(`The field is required`)}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`textarea`,label:`Label`,name:`textareainput`,required:!0,helper:`Helper Text`,disabled:n.isSubmitting})}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},z=()=>{let e={checkbox:[`no`]},t=x().shape({checkbox:y().min(1,`Please select at least one checkbox`).required(`Required`)}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`checkbox`,name:`checkbox`,label:`I acknowledge the statements above.`,options:[{label:`Yes`,value:`yes`},{label:`No`,value:`no`}],required:!0,isInline:!0,disabled:n.isSubmitting})}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},B=()=>{let e=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`}],t={radio:`option2`},n=x().shape({radio:b().required(`Field value is required.`)}),r=f({initialValues:t,validationSchema:n,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:r,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`radio`,label:`Label`,name:`radio`,options:e,isInline:!0,required:!0,disabled:r.isSubmitting,helper:`Helper Text`})}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},V=()=>{let e=[{value:`1`,label:`Option 1`},{value:`2`,label:`Option 2`}],t={select:`2`},n=x().shape({select:b()}),r=f({initialValues:t,validationSchema:n,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:r,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`select`,label:`Select`,name:`select`,options:e,required:!0,disabled:r.isSubmitting})}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},H=()=>{let e={startDate:`Sat Nov 23 2024 00:00:00 GMT-0500 (Eastern Standard Time)`,endDate:``},t=x().shape({startDate:C(()=>_().required(`Please select start date`).when(`endDate`,(e,t)=>e[0]?t.required(`Start date can't be after end date`):t)),endDate:_().required(`Please select end date`).when(`startDate`,(e,t)=>e[0]?t.required(`End date can't be before start date`):t)}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsxs)(d.FieldGroup,{cols:2,children:[(0,N.jsx)(d.FieldControl,{required:!0,control:`datetime`,label:`Start Date`,name:`startDate`,maxDate:n.values.endDate,disabled:n.isSubmitting,isClearable:!0,hasSuffix:(0,N.jsx)(p,{border:`left`,isGrey:!0,children:`>=`})}),(0,N.jsx)(d.FieldControl,{required:!0,control:`datetime`,label:`End Date`,name:`endDate`,minDate:n.values.startDate,disabled:n.isSubmitting,isClearable:!0,hasPrefix:(0,N.jsx)(p,{border:`right`,isGrey:!0,children:`<=`})})]}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},U=()=>{let e={startDate:``,endDate:``},t=x().shape({startDate:C(()=>_().required(`Please select start date`).when(`endDate`,(e,t)=>e[0]?t.required(`Start date can't be after end date`):t)),endDate:_().required(`Please select end date`).when(`startDate`,(e,t)=>e[0]?t.required(`End date can't be before start date`):t)}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}}),[r,i]=(0,M.useState)(new Date),[o,c]=(0,M.useState)(new Date),l=new Date;l.setHours(0,0,0,0);let u=new Date;u.setHours(23,59,59,999);let p=(0,M.useMemo)(()=>{let e=new Date;if(e.setHours(0,0,0,0),r){let t=new Date(r);if(t.setHours(0,0,0,0),t.getTime()===e.getTime())return new Date}return l},[r,l]),m=(0,M.useMemo)(()=>{if(r){let e=new Date(r);return e.setHours(23,59,59,999),e}return u},[r,u]),h=(0,M.useMemo)(()=>{let e=new Date;if(e.setHours(0,0,0,0),r){let e=new Date(r);return e.setMinutes(e.getMinutes()+1),e}if(o&&o.getTime()===e.getTime()){let e=new Date(o);return e.setMinutes(e.getMinutes()+1),e}return l},[r,o,l]),g=(0,M.useMemo)(()=>{if(o){let e=new Date(o);return e.setHours(23,59,59,999),e}return u},[o,u]);return(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsxs)(d.FieldGroup,{cols:2,children:[(0,N.jsx)(d.FieldControl,{required:!0,control:`datetime`,label:`Start Date`,name:`startDate`,maxDate:n.values.endDate,disabled:n.isSubmitting,showTime:!0,dateFormat:`MMMM d, yyyy h:mm aa`,timeFormat:`HH:mm`,minTime:p,maxTime:m,onChange:e=>{i(e)}}),(0,N.jsx)(d.FieldControl,{required:!0,control:`datetime`,label:`End Date`,name:`endDate`,minDate:n.values.startDate,disabled:n.isSubmitting,showTime:!0,dateFormat:`MMMM d, yyyy h:mm aa`,timeFormat:`HH:mm`,minTime:h,maxTime:g,onChange:e=>{c(e)}})]}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},W=()=>{let e={image:[],file:[]},t=x().shape({image:S().test(`fileSize`,`The image is required`,e=>e&&e.length>0).required(`The field is required`),file:S().test(`fileSize`,`The file is required`,e=>e&&e.length>0).required(`The field is required`)}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),console.log(e,`values`),alert(`Please check console log`),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsxs)(d.FieldGroup,{children:[(0,N.jsx)(d.FieldControl,{control:`fileUpload`,label:`Images`,name:`image`,required:!0,helper:`Helper Text`,accept:`image/*`,multiple:`multiple`,disabled:n.isSubmitting,helperpostop:!0}),(0,N.jsx)(d.FieldControl,{control:`fileUpload`,label:`Media`,name:`file`,required:!0,helper:`Helper Text`,accept:`application/pdf,application/vnd.ms-excel`,multiple:`multiple`,disabled:n.isSubmitting,helperpostop:!0})]}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})},G=()=>{let e={text:`zlnud`},t=x().shape({text:b()}),n=()=>{r.resetForm()},r=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1),r.resetForm()}});return(0,N.jsxs)(d,{formikProps:r,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`autosuggest`,label:`Text`,name:`text`,placeholder:`Placeholder`,disabled:r.isSubmitting,options:A})}),(0,N.jsxs)(a,{children:[(0,N.jsx)(s,{title:`Submit`,type:`submit`}),(0,N.jsx)(s,{title:`Reset`,type:`reset`,color:`grey`,onClick:n})]})]})},K=()=>{let e={text:`option7`},t=x().shape({text:b(),textName:b()}),n=()=>{r.resetForm()},r=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1),r.resetForm()}});return(0,N.jsxs)(d,{formikProps:r,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`autosuggest`,isSearchable:!0,label:`Auto Select Dropdown with typeahead`,name:`text`,onChange:e=>{e?r.setFieldValue(`textName`,e):r.setFieldValue(`textName`,``)},disabled:r.isSubmitting,options:[{label:`--select an option--`,value:``},{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4`,value:`option4`},{label:`Option 5`,value:`option5`},{label:`Option 6`,value:`option6`},{label:`Option 7`,value:`option7`},{label:`Option 8`,value:`option8`},{label:`Option 9`,value:`option9`},{label:`Option 10`,value:`option10`}],onBlur:()=>{console.log(`onBlur is getting run`),r.values.text===`option5`&&r.setFieldValue(`text`,``)}})}),(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`text`,label:`Selected Value`,name:`textName`,disabled:r.isSubmitting,helper:`This will have value only if auto suggest file selected`,helperpostop:!0})}),(0,N.jsxs)(a,{children:[(0,N.jsx)(s,{title:`Submit`,type:`submit`}),(0,N.jsx)(s,{title:`Reset`,type:`reset`,color:`grey`,onClick:n})]})]})},q=()=>{let e={location:{coordinates:{lat:45.3850225,lng:-75.6946679},address:`Carleton University Raven's Nest`}},t=x().shape({location:x().shape({address:b(),coordinates:x().shape({lat:g(),lng:g()})})}),n=f({initialValues:e,validationSchema:t,onSubmit:async(e,t)=>{t.setSubmitting(!0),alert(JSON.stringify(e,null,2)),await F(1e3),t.setSubmitting(!1)}});return(0,N.jsx)(T,{googleMapsApiKey:`AIzaSyAayPTQk0_rNbCa8Zbhlbn6BpHwcSrVNOc`,libraries:[`places`],children:(0,N.jsxs)(d,{formikProps:n,children:[(0,N.jsx)(d.FieldGroup,{children:(0,N.jsx)(d.FieldControl,{control:`placesAutoComplete`,label:`Location Picker`,name:`location`,placeholder:`Placeholder`,disabled:n.isSubmitting,helper:`Helper Text`,showmap:!1})}),(0,N.jsx)(a,{children:(0,N.jsx)(s,{title:`Submit`,type:`submit`})})]})})},J=()=>{let e=f({initialValues:{},onSubmit:()=>{}});return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(d,{formikProps:e,children:(0,N.jsx)(d.Error,{children:` Custom form error `})})})},I.__docgenInfo={description:``,methods:[],displayName:`Input`},L.__docgenInfo={description:``,methods:[],displayName:`InputAddonStory`},R.__docgenInfo={description:``,methods:[],displayName:`TextArea`},z.__docgenInfo={description:``,methods:[],displayName:`CheckBox`},B.__docgenInfo={description:``,methods:[],displayName:`Radio`},V.__docgenInfo={description:``,methods:[],displayName:`Select`},H.__docgenInfo={description:``,methods:[],displayName:`SimpleDate`},U.__docgenInfo={description:``,methods:[],displayName:`DateTime`},W.__docgenInfo={description:``,methods:[],displayName:`Media`},G.__docgenInfo={description:``,methods:[],displayName:`AutoSuggest`},K.__docgenInfo={description:``,methods:[],displayName:`AutoSelectSubsequentFields`},q.__docgenInfo={description:``,methods:[],displayName:`PlacesAutoComplete`},J.__docgenInfo={description:``,methods:[],displayName:`CustomFormError`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  type IInput = {
    inputText: string;
  };
  const InputInitialValues = {
    inputText: ''
  };
  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required')
  });
  const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
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
  const [inputDisabled, setInputDisabled] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const handleChange = async e => {
    console.log(e.currentTarget.value);
    formikProps.setFieldValue('inputText', e.currentTarget.value);
    setInputDisabled(true);
    await sleep(1000);
    setInputDisabled(false);
  };
  useEffect(() => {
    if (!inputDisabled) {
      input?.current?.focus();
    }
  }, [inputDisabled]);
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="text" label="Label" name="inputText" required helper="Helper Text" helperpostop disabled={formikProps.isSubmitting || inputDisabled} ref={input} onChange={handleChange} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  type IInput = {
    inputText: string;
  };
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const InputInitialValues = {
    inputText: ''
  };
  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required')
  });
  const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
    actions.setSubmitting(true);
    setSubmitModalOpen(true);
    await sleep(1000);
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
      <Form formikProps={formikProps}>
        <Form.FieldGroup>
          <Form.FieldControl control="text" label="Label" name="inputText" required helper="Helper Text" hasPrefix={<InputAddon border="right" isGrey>
                $
              </InputAddon>} hasSuffix={<InputAddon border="left" isGrey>
                USD
              </InputAddon>} helperpostop disabled={formikProps.isSubmitting} />
        </Form.FieldGroup>
        <ButtonGroup>
          <Button title="Submit" type="submit" />
          <Button title="Reset" type="reset" color="grey" onClick={onReset} />
        </ButtonGroup>
      </Form>
      <Modal isOpen={submitModalOpen} setIsOpen={setSubmitModalOpen} ariaLabel={\`Modal label\`} ariaDescription={\`The modal description\`}>
        <PageHeader as="h2" header={\`Modal content\`} size="sm" isCenter />
      </Modal>
    </>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  type ITextArea = {
    textareainput: string;
  };
  const TextAreaInitialValues = {
    textareainput: ''
  };
  const TextAreaValidationSchema = Yup.object().shape({
    textareainput: Yup.string().required('The field is required')
  });
  const onSubmit = async (values: ITextArea, actions: FormikHelpers<ITextArea>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: TextAreaInitialValues,
    validationSchema: TextAreaValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="textarea" label="Label" name="textareainput" required helper="Helper Text" disabled={formikProps.isSubmitting} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  type ICheckBox = {
    checkbox: string[];
  };
  const CheckBoxInitialValues = {
    checkbox: ['no']
  };
  const CheckBoxValidationSchema = Yup.object().shape({
    checkbox: Yup.array().min(1, 'Please select at least one checkbox').required('Required')
  });
  const onSubmit = async (values: ICheckBox, actions: FormikHelpers<ICheckBox>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: CheckBoxInitialValues,
    validationSchema: CheckBoxValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="checkbox" name="checkbox" label="I acknowledge the statements above." options={[{
        label: 'Yes',
        value: 'yes'
      }, {
        label: 'No',
        value: 'no'
      }]} required isInline disabled={formikProps.isSubmitting} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  type IRadio = {
    radio: string;
  };
  const options = [{
    label: 'Option 1',
    value: 'option1'
  }, {
    label: 'Option 2',
    value: 'option2'
  }, {
    label: 'Option 3',
    value: 'option3'
  }];
  const radioInitialValues = {
    radio: 'option2'
  };
  const radioValidationSchema = Yup.object().shape({
    radio: Yup.string().required('Field value is required.')
  });
  const onSubmit = async (values: IRadio, actions: FormikHelpers<IRadio>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: radioInitialValues,
    validationSchema: radioValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="radio" label="Label" name="radio" options={options} isInline required disabled={formikProps.isSubmitting} helper="Helper Text" />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  type ISelect = {
    select: string;
  };
  const selectValues = [{
    value: '1',
    label: 'Option 1'
  }, {
    value: '2',
    label: 'Option 2'
  }];
  const selectInitialValues = {
    select: '2'
  };
  const selectValidationSchema = Yup.object().shape({
    select: Yup.string()
  });
  const onSubmit = async (values: ISelect, actions: FormikHelpers<ISelect>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: selectInitialValues,
    validationSchema: selectValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="select" label="Select" name="select" options={selectValues} required disabled={formikProps.isSubmitting} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  type IDate = {
    startDate: string;
    endDate: string;
  };
  const dateInitialValues = {
    startDate: 'Sat Nov 23 2024 00:00:00 GMT-0500 (Eastern Standard Time)',
    endDate: ''
  };
  const dateValidationSchema = Yup.object().shape({
    startDate: Yup.lazy(() => {
      return Yup.date().required('Please select start date').when('endDate', (endDate, schema) => {
        if (endDate[0]) {
          return schema.required("Start date can't be after end date");
        }
        return schema;
      });
    }),
    endDate: Yup.date().required('Please select end date').when('startDate', (startDate, schema) => {
      if (startDate[0]) {
        return schema.required("End date can't be before start date");
      }
      return schema;
    })
  });
  const onSubmit = async (values: IDate, actions: FormikHelpers<IDate>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: dateInitialValues,
    validationSchema: dateValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup cols={2}>
        <Form.FieldControl required control="datetime" label="Start Date" name="startDate" maxDate={formikProps.values.endDate} disabled={formikProps.isSubmitting} isClearable hasSuffix={<InputAddon border="left" isGrey>
              {\`>=\`}
            </InputAddon>} />
        <Form.FieldControl required control="datetime" label="End Date" name="endDate" minDate={formikProps.values.startDate} disabled={formikProps.isSubmitting} isClearable hasPrefix={<InputAddon border="right" isGrey>
              {\`<=\`}
            </InputAddon>} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  type IDateTime = {
    startDate: string;
    endDate: string;
  };
  const dateTimeInitialValues = {
    startDate: '',
    endDate: ''
  };
  const dateTimeValidationSchema = Yup.object().shape({
    startDate: Yup.lazy(() => {
      return Yup.date().required('Please select start date').when('endDate', (endDate, schema) => {
        if (endDate[0]) {
          return schema.required("Start date can't be after end date");
        }
        return schema;
      });
    }),
    endDate: Yup.date().required('Please select end date').when('startDate', (startDate, schema) => {
      if (startDate[0]) {
        return schema.required("End date can't be before start date");
      }
      return schema;
    })
  });
  const onSubmit = async (values: IDateTime, actions: FormikHelpers<IDateTime>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: dateTimeInitialValues,
    validationSchema: dateTimeValidationSchema,
    onSubmit
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const defaultMinTime = new Date();
  defaultMinTime.setHours(0, 0, 0, 0);
  const defaultMaxTime = new Date();
  defaultMaxTime.setHours(23, 59, 59, 999);
  const minStartTime = useMemo(() => {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    if (startDate) {
      const selectedDate = new Date(startDate);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate.getTime() === todayDate.getTime()) {
        return new Date();
      }
    }
    return defaultMinTime;
  }, [startDate, defaultMinTime]);
  const maxStartTime = useMemo(() => {
    if (startDate) {
      const maxTime = new Date(startDate);
      maxTime.setHours(23, 59, 59, 999);
      return maxTime;
    }
    return defaultMaxTime;
  }, [startDate, defaultMaxTime]);
  const minEndTime = useMemo(() => {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    if (startDate) {
      const minEndTime = new Date(startDate);
      minEndTime.setMinutes(minEndTime.getMinutes() + 1);
      return minEndTime;
    } else if (endDate && endDate.getTime() === todayDate.getTime()) {
      const minEndTime = new Date(endDate);
      minEndTime.setMinutes(minEndTime.getMinutes() + 1);
      return minEndTime;
    }
    return defaultMinTime;
  }, [startDate, endDate, defaultMinTime]);
  const maxEndTime = useMemo(() => {
    if (endDate) {
      const maxTime = new Date(endDate);
      maxTime.setHours(23, 59, 59, 999);
      return maxTime;
    }
    return defaultMaxTime;
  }, [endDate, defaultMaxTime]);
  return <Form formikProps={formikProps}>
      <Form.FieldGroup cols={2}>
        <Form.FieldControl required control="datetime" label="Start Date" name="startDate" maxDate={formikProps.values.endDate} disabled={formikProps.isSubmitting} showTime={true} dateFormat="MMMM d, yyyy h:mm aa" timeFormat="HH:mm" minTime={minStartTime} maxTime={maxStartTime} onChange={(date: Date) => {
        setStartDate(date);
      }} />
        <Form.FieldControl required control="datetime" label="End Date" name="endDate" minDate={formikProps.values.startDate} disabled={formikProps.isSubmitting} showTime={true} dateFormat="MMMM d, yyyy h:mm aa" timeFormat="HH:mm" minTime={minEndTime} maxTime={maxEndTime} onChange={(date: Date) => {
        setEndDate(date);
      }} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  type IMedia = {
    image: File[];
    file: File[];
  };
  const MediaInitialValues = {
    image: [],
    file: []
  };
  const MediaValidationSchema = Yup.object().shape({
    image: Yup.mixed().test('fileSize', 'The image is required', value => {
      return value && value.length > 0;
    }).required('The field is required'),
    file: Yup.mixed().test('fileSize', 'The file is required', value => {
      return value && value.length > 0;
    }).required('The field is required')
  });
  const onSubmit = async (values: IMedia, actions: FormikHelpers<IMedia>) => {
    actions.setSubmitting(true);
    console.log(values, 'values');
    alert('Please check console log');
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: MediaInitialValues,
    validationSchema: MediaValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="fileUpload" label="Images" name="image" required helper="Helper Text" accept="image/*" multiple="multiple" disabled={formikProps.isSubmitting} helperpostop />
        <Form.FieldControl control="fileUpload" label="Media" name="file" required helper="Helper Text" accept="application/pdf,application/vnd.ms-excel" multiple="multiple" disabled={formikProps.isSubmitting} helperpostop />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  type IAutoSuggest = {
    text: string;
  };
  const autoSuggestInitialValues = {
    text: 'zlnud'
  };
  const autoSuggestValidationSchema = Yup.object().shape({
    text: Yup.string()
  });
  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    formikProps.resetForm();
  };
  const onSubmit = async (values: IAutoSuggest, actions: FormikHelpers<IAutoSuggest>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
    formikProps.resetForm();
  };
  const formikProps = useFormik({
    initialValues: autoSuggestInitialValues,
    validationSchema: autoSuggestValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="autosuggest" label="Text" name="text" placeholder="Placeholder" disabled={formikProps.isSubmitting} options={AutoSuggestData} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  type IAutoSuggest = {
    text: string;
  };
  const autoSuggestInitialValues = {
    text: 'option7'
  };
  const autoSuggestValidationSchema = Yup.object().shape({
    text: Yup.string(),
    textName: Yup.string()
  });
  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    formikProps.resetForm();
  };
  const onSubmit = async (values: IAutoSuggest, actions: FormikHelpers<IAutoSuggest>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
    formikProps.resetForm();
  };
  const formikProps = useFormik({
    initialValues: autoSuggestInitialValues,
    validationSchema: autoSuggestValidationSchema,
    onSubmit
  });
  return <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl control="autosuggest" isSearchable label="Auto Select Dropdown with typeahead" name="text" onChange={selectedValue => {
        if (selectedValue) {
          formikProps.setFieldValue('textName', selectedValue);
        } else {
          formikProps.setFieldValue('textName', '');
        }
      }} disabled={formikProps.isSubmitting} options={[{
        label: '--select an option--',
        value: ''
      }, {
        label: 'Option 1',
        value: 'option1'
      }, {
        label: 'Option 2',
        value: 'option2'
      }, {
        label: 'Option 3',
        value: 'option3'
      }, {
        label: 'Option 4',
        value: 'option4'
      }, {
        label: 'Option 5',
        value: 'option5'
      }, {
        label: 'Option 6',
        value: 'option6'
      }, {
        label: 'Option 7',
        value: 'option7'
      }, {
        label: 'Option 8',
        value: 'option8'
      }, {
        label: 'Option 9',
        value: 'option9'
      }, {
        label: 'Option 10',
        value: 'option10'
      }]} onBlur={() => {
        console.log('onBlur is getting run');
        if (formikProps.values.text === 'option5') {
          formikProps.setFieldValue('text', '');
        }
      }} />
      </Form.FieldGroup>

      <Form.FieldGroup>
        <Form.FieldControl control="text" label="Selected Value" name="textName" disabled={formikProps.isSubmitting} helper="This will have value only if auto suggest file selected" helperpostop />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  type IPlacesAutoComplete = {
    location: SingleMarkerInterface;
  };
  const placesAutoCompleteInitialValues = {
    location: {
      coordinates: {
        lat: 45.3850225,
        lng: -75.6946679
      },
      address: "Carleton University Raven's Nest"
    }
  };
  const placesAutoCompleteValidationSchema = Yup.object().shape({
    location: Yup.object().shape({
      address: Yup.string(),
      coordinates: Yup.object().shape({
        lat: Yup.number(),
        lng: Yup.number()
      })
    })
  });
  const onSubmit = async (values: IPlacesAutoComplete, actions: FormikHelpers<IPlacesAutoComplete>) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    await sleep(1000);
    actions.setSubmitting(false);
  };
  const formikProps = useFormik({
    initialValues: placesAutoCompleteInitialValues,
    validationSchema: placesAutoCompleteValidationSchema,
    onSubmit
  });
  return <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <Form formikProps={formikProps}>
        <Form.FieldGroup>
          <Form.FieldControl control="placesAutoComplete" label="Location Picker" name="location" placeholder="Placeholder" disabled={formikProps.isSubmitting} helper="Helper Text" showmap={false} />
        </Form.FieldGroup>
        <ButtonGroup>
          <Button title="Submit" type="submit" />
        </ButtonGroup>
      </Form>
    </LoadScript>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const formikProps = useFormik({
    initialValues: {},
    onSubmit: () => {}
  });
  return <>
      <Form formikProps={formikProps}>
        <Form.Error> Custom form error </Form.Error>
      </Form>
    </>;
}`,...J.parameters?.docs?.source}}},Y=[`Input`,`InputAddonStory`,`TextArea`,`CheckBox`,`Radio`,`Select`,`SimpleDate`,`DateTime`,`Media`,`AutoSuggest`,`AutoSelectSubsequentFields`,`PlacesAutoComplete`,`CustomFormError`]})))()}X();export{K as AutoSelectSubsequentFields,G as AutoSuggest,z as CheckBox,J as CustomFormError,U as DateTime,I as Input,L as InputAddonStory,W as Media,q as PlacesAutoComplete,B as Radio,V as Select,H as SimpleDate,R as TextArea,Y as __namedExportsOrder,P as default};