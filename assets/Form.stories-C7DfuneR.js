import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as h}from"./index-yDOeu_rT.js";import{F as i,u as S,I as H}from"./InputAddon-BZvgiztf.js";import{c,a as f,b as Ve,f as ke,d as B,g as A,h as O}from"./index.esm-Cw_qilyE.js";import{B as g}from"./ButtonGroup-DECQb6k8.js";import{B as d}from"./Button-BURiWGZI.js";import{a as je}from"./Location-mni48OTV.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./optionClasses-DR4HS9ih.js";import"./index-32yCLrEH.js";import"./index-D-OUEn-9.js";import"./portal-ddlxP4mo.js";import"./use-server-handoff-complete-Vd7s5Y0y.js";import"./LocationPicker-pVEZcszx.js";import"./index-Chjiymov.js";import"./MagnifyingGlassIcon-B8ROMLFy.js";import"./propClasses-BYrQ2lXe.js";import"./Icon-UcZbim36.js";import"./Figure-CW1G6Za8.js";function Ce(){return Math.random().toString(36).substring(7)}const qe=Array.from({length:100},()=>{const r=Ce();return{value:r,label:r}}),Me=qe,Ze={title:"Components/Form",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},b=r=>new Promise(s=>setTimeout(s,r)),D=()=>{const r={inputText:""},s=c().shape({inputText:f().required("The field is required")}),m=async(p,G)=>{G.setSubmitting(!0),alert(JSON.stringify(p,null,2)),await b(1e3),G.setSubmitting(!1)},o=()=>{t.resetForm()},t=S({initialValues:r,validationSchema:s,onSubmit:m}),[a,n]=h.useState(!1),F=h.useRef(null),x=async p=>{console.log(p.currentTarget.value),t.setFieldValue("inputText",p.currentTarget.value),n(!0),await b(1e3),n(!1)};return h.useEffect(()=>{var p;a||(p=F==null?void 0:F.current)==null||p.focus()},[a]),e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"text",label:"Label",name:"inputText",required:!0,helper:"Helper Text",helperpostop:!0,disabled:t.isSubmitting||a,ref:F,onChange:x})}),e.jsxs(g,{children:[e.jsx(d,{title:"Submit",type:"submit"}),e.jsx(d,{title:"Reset",type:"reset",color:"grey",onClick:o})]})]})},y=()=>{const r={inputText:""},s=c().shape({inputText:f().required("The field is required")}),m=async(a,n)=>{n.setSubmitting(!0),alert(JSON.stringify(a,null,2)),await b(1e3),n.setSubmitting(!1)},o=()=>{t.resetForm()},t=S({initialValues:r,validationSchema:s,onSubmit:m});return e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"text",label:"Label",name:"inputText",required:!0,helper:"Helper Text",hasPrefix:e.jsx(H,{border:"right",isGrey:!0,children:"$"}),hasSuffix:e.jsx(H,{border:"left",isGrey:!0,children:"USD"}),helperpostop:!0,disabled:t.isSubmitting})}),e.jsxs(g,{children:[e.jsx(d,{title:"Submit",type:"submit"}),e.jsx(d,{title:"Reset",type:"reset",color:"grey",onClick:o})]})]})},T=()=>{const r={textareainput:""},s=c().shape({textareainput:f().required("The field is required")}),o=S({initialValues:r,validationSchema:s,onSubmit:async(t,a)=>{a.setSubmitting(!0),alert(JSON.stringify(t,null,2)),await b(1e3),a.setSubmitting(!1)}});return e.jsxs(i,{formikProps:o,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"textarea",label:"Label",name:"textareainput",required:!0,helper:"Helper Text",disabled:o.isSubmitting})}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},k=()=>{const r={checkbox:["no"]},s=c().shape({checkbox:Ve().min(1,"Please select at least one checkbox").required("Required")}),o=S({initialValues:r,validationSchema:s,onSubmit:async(t,a)=>{a.setSubmitting(!0),alert(JSON.stringify(t,null,2)),await b(1e3),a.setSubmitting(!1)}});return e.jsxs(i,{formikProps:o,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"checkbox",name:"checkbox",label:"I acknowledge the statements above.",options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],required:!0,isInline:!0,disabled:o.isSubmitting})}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},I=()=>{const r=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],s={radio:"option2"},m=c().shape({radio:f().required("Field value is required.")}),t=S({initialValues:s,validationSchema:m,onSubmit:async(a,n)=>{n.setSubmitting(!0),alert(JSON.stringify(a,null,2)),await b(1e3),n.setSubmitting(!1)}});return e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"radio",label:"Label",name:"radio",options:r,isInline:!0,required:!0,disabled:t.isSubmitting,helper:"Helper Text"})}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},v=()=>{const r=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}],s={select:"2"},m=c().shape({select:f()}),t=S({initialValues:s,validationSchema:m,onSubmit:async(a,n)=>{n.setSubmitting(!0),alert(JSON.stringify(a,null,2)),await b(1e3),n.setSubmitting(!1)}});return e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"select",label:"Select",name:"select",options:r,required:!0,disabled:t.isSubmitting})}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},P=()=>{const r={startDate:"Sat Nov 23 2024 00:00:00 GMT-0500 (Eastern Standard Time)",endDate:""},s=c().shape({startDate:ke(()=>B().required("Please select start date").when("endDate",(t,a)=>t[0]?a.required("Start date can't be after end date"):a)),endDate:B().required("Please select end date").when("startDate",(t,a)=>t[0]?a.required("End date can't be before start date"):a)}),o=S({initialValues:r,validationSchema:s,onSubmit:async(t,a)=>{a.setSubmitting(!0),alert(JSON.stringify(t,null,2)),await b(1e3),a.setSubmitting(!1)}});return e.jsxs(i,{formikProps:o,children:[e.jsxs(i.FieldGroup,{cols:2,children:[e.jsx(i.FieldControl,{required:!0,control:"datetime",label:"Start Date",name:"startDate",maxDate:o.values.endDate,disabled:o.isSubmitting,isClearable:!0}),e.jsx(i.FieldControl,{required:!0,control:"datetime",label:"End Date",name:"endDate",minDate:o.values.startDate,disabled:o.isSubmitting})]}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},V=()=>{const r={startDate:"",endDate:""},s=c().shape({startDate:ke(()=>B().required("Please select start date").when("endDate",(l,u)=>l[0]?u.required("Start date can't be after end date"):u)),endDate:B().required("Please select end date").when("startDate",(l,u)=>l[0]?u.required("End date can't be before start date"):u)}),o=S({initialValues:r,validationSchema:s,onSubmit:async(l,u)=>{u.setSubmitting(!0),alert(JSON.stringify(l,null,2)),await b(1e3),u.setSubmitting(!1)}}),[t,a]=h.useState(new Date),[n,F]=h.useState(new Date),x=new Date;x.setHours(0,0,0,0);const p=new Date;p.setHours(23,59,59,999);const G=h.useMemo(()=>{const l=new Date;if(l.setHours(0,0,0,0),t){const u=new Date(t);if(u.setHours(0,0,0,0),u.getTime()===l.getTime())return new Date}return x},[t,x]),Ie=h.useMemo(()=>{if(t){const l=new Date(t);return l.setHours(23,59,59,999),l}return p},[t,p]),ve=h.useMemo(()=>{const l=new Date;if(l.setHours(0,0,0,0),t){const u=new Date(t);return u.setMinutes(u.getMinutes()+1),u}else if(n&&n.getTime()===l.getTime()){const u=new Date(n);return u.setMinutes(u.getMinutes()+1),u}return x},[t,n,x]),Pe=h.useMemo(()=>{if(n){const l=new Date(n);return l.setHours(23,59,59,999),l}return p},[n,p]);return e.jsxs(i,{formikProps:o,children:[e.jsxs(i.FieldGroup,{cols:2,children:[e.jsx(i.FieldControl,{required:!0,control:"datetime",label:"Start Date",name:"startDate",maxDate:o.values.endDate,disabled:o.isSubmitting,showTime:!0,dateFormat:"MMMM d, yyyy h:mm aa",timeFormat:"HH:mm",minTime:G,maxTime:Ie,onChange:l=>{a(l)}}),e.jsx(i.FieldControl,{required:!0,control:"datetime",label:"End Date",name:"endDate",minDate:o.values.startDate,disabled:o.isSubmitting,showTime:!0,dateFormat:"MMMM d, yyyy h:mm aa",timeFormat:"HH:mm",minTime:ve,maxTime:Pe,onChange:l=>{F(l)}})]}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},j=()=>{const r={image:[],file:[]},s=c().shape({image:A().test("fileSize","The image is required",t=>t&&t.length>0).required("The field is required"),file:A().test("fileSize","The file is required",t=>t&&t.length>0).required("The field is required")}),o=S({initialValues:r,validationSchema:s,onSubmit:async(t,a)=>{a.setSubmitting(!0),console.log(t,"values"),alert("Please check console log"),await b(1e3),a.setSubmitting(!1)}});return e.jsxs(i,{formikProps:o,children:[e.jsxs(i.FieldGroup,{children:[e.jsx(i.FieldControl,{control:"fileUpload",label:"Images",name:"image",required:!0,helper:"Helper Text",accept:"image/*",multiple:"multiple",disabled:o.isSubmitting,helperpostop:!0}),e.jsx(i.FieldControl,{control:"fileUpload",label:"Media",name:"file",required:!0,helper:"Helper Text",accept:"application/pdf,application/vnd.ms-excel",multiple:"multiple",disabled:o.isSubmitting,helperpostop:!0})]}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})},C=()=>{const r={text:"zlnud"},s=c().shape({text:f()}),m=()=>{t.resetForm()},t=S({initialValues:r,validationSchema:s,onSubmit:async(a,n)=>{n.setSubmitting(!0),alert(JSON.stringify(a,null,2)),await b(1e3),n.setSubmitting(!1),t.resetForm()}});return e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"autosuggest",label:"Text",name:"text",placeholder:"Placeholder",disabled:t.isSubmitting,options:Me})}),e.jsxs(g,{children:[e.jsx(d,{title:"Submit",type:"submit"}),e.jsx(d,{title:"Reset",type:"reset",color:"grey",onClick:m})]})]})},q=()=>{const r={text:"option7"},s=c().shape({text:f(),textName:f()}),m=()=>{t.resetForm()},t=S({initialValues:r,validationSchema:s,onSubmit:async(a,n)=>{n.setSubmitting(!0),alert(JSON.stringify(a,null,2)),await b(1e3),n.setSubmitting(!1),t.resetForm()}});return e.jsxs(i,{formikProps:t,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"autosuggest",isSearchable:!0,label:"Auto Select Dropdown with typeahead",name:"text",onChange:a=>{a?t.setFieldValue("textName",a):t.setFieldValue("textName","")},disabled:t.isSubmitting,options:[{label:"--select an option--",value:""},{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"}],onBlur:()=>{console.log("onBlur is getting run"),t.values.text==="option5"&&t.setFieldValue("text","")}})}),e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"text",label:"Selected Value",name:"textName",disabled:t.isSubmitting,helper:"This will have value only if auto suggest file selected",helperpostop:!0})}),e.jsxs(g,{children:[e.jsx(d,{title:"Submit",type:"submit"}),e.jsx(d,{title:"Reset",type:"reset",color:"grey",onClick:m})]})]})},M=()=>{const r={location:{coordinates:{lat:45.3850225,lng:-75.6946679},address:"Carleton University Raven's Nest"}},s=c().shape({location:c().shape({address:f(),coordinates:c().shape({lat:O(),lng:O()})})}),o=S({initialValues:r,validationSchema:s,onSubmit:async(t,a)=>{a.setSubmitting(!0),alert(JSON.stringify(t,null,2)),await b(1e3),a.setSubmitting(!1)}});return e.jsx(je,{googleMapsApiKey:void 0,libraries:["places"],children:e.jsxs(i,{formikProps:o,children:[e.jsx(i.FieldGroup,{children:e.jsx(i.FieldControl,{control:"placesAutoComplete",label:"Location Picker",name:"location",placeholder:"Placeholder",disabled:o.isSubmitting,helper:"Helper Text",showmap:!1})}),e.jsx(g,{children:e.jsx(d,{title:"Submit",type:"submit"})})]})})},w=()=>{const r=S({initialValues:{},onSubmit:()=>{}});return e.jsx(e.Fragment,{children:e.jsx(i,{formikProps:r,children:e.jsx(i.Error,{children:" Custom form error "})})})};D.__docgenInfo={description:"",methods:[],displayName:"Input"};y.__docgenInfo={description:"",methods:[],displayName:"InputAddonStory"};T.__docgenInfo={description:"",methods:[],displayName:"TextArea"};k.__docgenInfo={description:"",methods:[],displayName:"CheckBox"};I.__docgenInfo={description:"",methods:[],displayName:"Radio"};v.__docgenInfo={description:"",methods:[],displayName:"Select"};P.__docgenInfo={description:"",methods:[],displayName:"SimpleDate"};V.__docgenInfo={description:"",methods:[],displayName:"DateTime"};j.__docgenInfo={description:"",methods:[],displayName:"Media"};C.__docgenInfo={description:"",methods:[],displayName:"AutoSuggest"};q.__docgenInfo={description:"",methods:[],displayName:"AutoSelectSubsequentFields"};M.__docgenInfo={description:"",methods:[],displayName:"PlacesAutoComplete"};w.__docgenInfo={description:"",methods:[],displayName:"CustomFormError"};var E,N,Y;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(Y=(N=D.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var R,_,J;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
  return <Form formikProps={formikProps}>
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
    </Form>;
}`,...(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var L,z,U;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(U=(z=T.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var $,K,Q;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ie;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,oe,re;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
        <Form.FieldControl required control="datetime" label="Start Date" name="startDate" maxDate={formikProps.values.endDate} disabled={formikProps.isSubmitting} isClearable />
        <Form.FieldControl required control="datetime" label="End Date" name="endDate" minDate={formikProps.values.startDate} disabled={formikProps.isSubmitting} />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>;
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ne,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(le=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ue,me,de;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(de=(me=j.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,pe,be;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Se,ge,he;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(he=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,xe,Fe;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Fe=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Fe.source}}};var De,ye,Te;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const formikProps = useFormik({
    initialValues: {},
    onSubmit: () => {}
  });
  return <>
      <Form formikProps={formikProps}>
        <Form.Error> Custom form error </Form.Error>
      </Form>
    </>;
}`,...(Te=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};const et=["Input","InputAddonStory","TextArea","CheckBox","Radio","Select","SimpleDate","DateTime","Media","AutoSuggest","AutoSelectSubsequentFields","PlacesAutoComplete","CustomFormError"];export{q as AutoSelectSubsequentFields,C as AutoSuggest,k as CheckBox,w as CustomFormError,V as DateTime,D as Input,y as InputAddonStory,j as Media,M as PlacesAutoComplete,I as Radio,v as Select,P as SimpleDate,T as TextArea,et as __namedExportsOrder,Ze as default};
