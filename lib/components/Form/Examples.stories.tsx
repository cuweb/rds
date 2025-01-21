import React, { MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik, FormikHelpers, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Form } from './Form'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { Table } from '../Table/Table'
import { PageHeader } from '../PageHeader/PageHeader'
import InputAddon from './InputAddon/InputAddon'

const meta: Meta = {
  title: 'Components/Form/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const LayoutExamples: Story = {
  render: () => {
    type IInput = {
      inputText: string
      faculty: string
      department: string
      position: string
      startDate: string
      endDate: string
      program: string
      account: string
      radio: string
      checkbox: string[]
      facultyDepartments: {
        faculty: string
        department: string
        position: string
      }[]
      bannerIds: { employeeID: string; firstName: string; lastName: string }[]
    }

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
      bannerIds: [{ employeeID: '123456789', firstName: 'Test', lastName: 'Lastname' }],
      bannerIds1: [],
      facultyDepartments: [{ faculty: '', department: '', position: '' }],
    }

    const InputValidationSchema = Yup.object().shape({
      inputText: Yup.string().required('The field is required'),
      totalAmountDue: Yup.string().required('The field is required'),
      facultyDepartments: Yup.array()
        .of(
          Yup.object().shape({
            faculty: Yup.string().required('Please select a faculty'),
            department: Yup.string().required('Please select a department'),
            position: Yup.string().required('Please select a position'),
          }),
        )
        .min(1, 'At least one Faculty-Department-Position group is required'),
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date()
        .required('End date is required')
        .min(Yup.ref('startDate'), 'End date must be after start date'),
      program: Yup.string(),
      account: Yup.string().required('Please select an Account'),
      employeeSearch: Yup.string()
        .matches(/^[0-9]{9}$/, 'Employee Id  must be exactly 9 digits')
        .nullable(),
      radio: Yup.string().required('Please select the Label'),
      checkbox: Yup.array()
        .of(Yup.string())
        .min(1, 'Please select the acknowledge statement')
        .required('Please select the acknowledge statement'),
    })

    const selectOptions = [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ]

    const dataFacultyList = [
      { value: 'Science', label: 'Faculty of Science' },
      { value: 'Engineering', label: 'Faculty of Engineering' },
      { value: 'Arts', label: 'Faculty of Arts' },
    ]

    const dataDepartmentList = [
      { value: 'History', label: 'History' },
      { value: 'Philosophy', label: 'Philosophy' },
      { value: 'Literature', label: 'Literature' },
    ]

    const dataPositionList = [
      { value: 'Manager', label: 'Manager' },
      { value: 'Developer', label: 'Developer' },
      { value: 'Analyst', label: 'Analyst' },
    ]

    const FOAPAccountData = [
      { value: '1001', label: 'General Fund - 1001' },
      { value: '2002', label: 'Research Fund - 2002' },
      { value: '3003', label: 'Development Fund - 3003' },
    ]

    const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
      console.log('Form Submitted:', values)
      actions.setSubmitting(true)
      alert(JSON.stringify(values, null, 2))
      await new Promise((resolve) => setTimeout(resolve, 1000))
      actions.setSubmitting(false)
    }

    const onReset: MouseEventHandler<HTMLButtonElement> = () => {
      formikProps.resetForm()
    }

    const formikProps = useFormik({
      initialValues: InputInitialValues,
      validationSchema: InputValidationSchema,
      onSubmit,
    })

    return (
      <>
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
          <PageHeader
            as="h1"
            header="Form Example"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />

          <Form formikProps={formikProps}>
            <Section as="div">
              <PageHeader header="Text" size="xs" as="h2" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl
                  control="text"
                  label="Text Input"
                  name="inputText"
                  required
                  helper="Helper Text"
                  helperpostop
                  disabled={formikProps.isSubmitting}
                />

                <Form.FieldControl
                  control="text"
                  label="Disabled Text Input with helper text in bottom"
                  name="inputText1"
                  required
                  helper="Helper Text"
                  disabled={true}
                />

                <Form.FieldControl
                  control="text"
                  name="totalAmountDue"
                  label="Number With Prefix and Suffix"
                  type="number"
                  placeholder="Total Amount Due"
                  disabled={formikProps.isSubmitting}
                  required
                  hasPrefix={<InputAddon border="right">$</InputAddon>}
                  hasSuffix={<InputAddon border="left">CAD</InputAddon>}
                />
              </Form.FieldGroup>

              <Form.FieldGroup>
                <Form.FieldControl
                  control="textarea"
                  label="TextArea"
                  name="textareainput"
                  required
                  helper="Helper Text"
                  rows={8}
                  disabled={formikProps.isSubmitting}
                />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Autosuggest" size="xs" as="h2" />
              <Form.FieldGroup>
                <Form.FieldControl
                  control="autosuggest"
                  label="Account"
                  name="account"
                  options={FOAPAccountData}
                  onChange={(selectedOption) => {
                    const accountValue = selectedOption?.value || selectedOption
                    formikProps.setFieldValue('account', accountValue)
                  }}
                />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader header="Selection" content="Radio and Checkbox" size="xs" as="h2" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl
                  control="radio"
                  label="Label"
                  name="radio"
                  options={selectOptions}
                  isInline
                  required
                  disabled={formikProps.isSubmitting}
                  helper="Helper Text"
                />

                <Form.FieldControl
                  control="checkbox"
                  name="checkbox"
                  label="I acknowledge the statements above."
                  options={[
                    {
                      label: 'Yes',
                      value: 'yes',
                    },
                    {
                      label: 'No',
                      value: 'no',
                    },
                  ]}
                  required
                  isInline
                  disabled={formikProps.isSubmitting}
                />
              </Form.FieldGroup>
            </Section>

            <Section as="div">
              <PageHeader
                header="Drop Down with 3 Columns"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                size="xs"
                as="h2"
              />

              <Form.FieldGroup cols={3}>
                <Form.FieldControl
                  control="select"
                  label="Faculty"
                  name={`faculty`}
                  options={dataFacultyList}
                  required
                />

                <Form.FieldControl
                  control="select"
                  label="Department"
                  name={`department`}
                  options={dataDepartmentList}
                  required
                />

                <Form.FieldControl
                  control="select"
                  label="Position"
                  name={`position`}
                  options={dataPositionList}
                  required
                />
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

              <FieldArray
                name="bannerIds"
                render={({ push, remove }) => (
                  <>
                    <Form.FieldGroup cols={2}>
                      <Form.FieldControl
                        control="text"
                        name="employeeSearch"
                        label="Employee ID"
                        placeholder="Enter Employee ID"
                        disabled={formikProps.isSubmitting}
                      />
                      <ButtonGroup>
                        <Button
                          title="+ Add Employee"
                          type="button"
                          onClick={() => {
                            const mockEmployeeData = [
                              { employeeID: '123456789', firstName: 'John', lastName: 'Doe' },
                              { employeeID: '987654321', firstName: 'Jane', lastName: 'Smith' },
                            ]

                            const randomEmployee = mockEmployeeData[Math.floor(Math.random() * mockEmployeeData.length)]
                            push(randomEmployee)
                          }}
                          disabled={formikProps.isSubmitting}
                        />
                      </ButtonGroup>
                    </Form.FieldGroup>

                    {/* <ErrorMessage name="employeeSearch">{(error) => <Form.Error>{error}</Form.Error>}</ErrorMessage> */}

                    {formikProps.values.bannerIds.length > 0 && (
                      <Form.FieldGroup>
                        <Table
                          columns={[
                            { header: 'Employee ID', key: 'employeeID' },
                            { header: 'First Name', key: 'firstName' },
                            { header: 'Last Name', key: 'lastName' },
                            { header: 'Action', key: 'remove' },
                          ]}
                          data={formikProps.values.bannerIds.map((emp, index) => ({
                            ...emp,
                            remove: (
                              <Button title="Remove" type="button" color="red" onClick={() => remove(index)} isSmall />
                            ),
                          }))}
                          hasStripes
                        />
                      </Form.FieldGroup>
                    )}
                  </>
                )}
              />

              <PageHeader header="FieldArray with Button and without Field Label in 2 columns" size="xs" as="h2" />

              <FieldArray
                name="bannerIds1"
                render={({ push, remove }) => (
                  <>
                    <Form.FieldGroup cols={2} alignment="top">
                      <Form.FieldControl
                        control="text"
                        name="employeeSearch1"
                        label="Employee ID"
                        hiddenLabel={true}
                        placeholder="Enter Employee ID"
                        disabled={formikProps.isSubmitting}
                      />
                      <ButtonGroup>
                        <Button
                          title="+ Add Employee"
                          type="button"
                          isSmall
                          onClick={() => {
                            const mockEmployeeData = [
                              { employeeID: '123456789', firstName: 'John', lastName: 'Doe' },
                              { employeeID: '987654321', firstName: 'Jane', lastName: 'Smith' },
                            ]

                            const randomEmployee = mockEmployeeData[Math.floor(Math.random() * mockEmployeeData.length)]
                            push(randomEmployee)
                          }}
                          disabled={formikProps.isSubmitting}
                        />
                      </ButtonGroup>
                    </Form.FieldGroup>

                    <Form.Error>Custom Test Error from the Form.Error component </Form.Error>
                  </>
                )}
              />
            </Section>

            <ButtonGroup>
              <Button title="Submit" type="submit" />
              <Button title="Reset" type="reset" color="grey" onClick={onReset} />
            </ButtonGroup>
          </Form>
        </Main>

        <FooterStandard />
      </>
    )
  },
}
