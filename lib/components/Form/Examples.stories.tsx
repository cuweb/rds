import React, { MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik, FormikHelpers, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Form } from './Form'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { Table } from '../Table/Table'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Form/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

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
      faculty: '',
      department: '',
      position: '',
      startDate: '',
      endDate: '',
      program: '',
      account: '',
      radio: '',
      checkbox: [],
      bannerIds: [],
      facultyDepartments: [{ faculty: '', department: '', position: '' }],
    }

    const InputValidationSchema = Yup.object().shape({
      inputText: Yup.string().required('The field is required'),
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
          <Nav.Primary>
            <Nav.Logo title="Raven Design System" link="/" />
            {/* <Nav.Menu menu={NavDataSingle} /> */}
            <Nav.Aside menu={NavAsideData} />
          </Nav.Primary>
        </Nav>

        <Main maxWidth="5xl">
          <PageHeader
            as="h1"
            header="Form Example"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />

          <Form formikProps={formikProps}>
            <Main>
              <PageHeader header="Drop Down" content="Dynamic dropdown example" size="md" />

              <FieldArray
                name="facultyDepartments"
                render={({ push, remove }) => (
                  <>
                    {formikProps.values.facultyDepartments.map((_, index) => (
                      <Form.FieldArrayContainer key={index}>
                        <Form.FieldGroup cols={3}>
                          <Form.FieldControl
                            control="select"
                            label="Faculty"
                            name={`facultyDepartments.${index}.faculty`}
                            options={dataFacultyList}
                            required
                          />

                          <Form.FieldControl
                            control="select"
                            label="Department"
                            name={`facultyDepartments.${index}.department`}
                            options={dataDepartmentList}
                            required
                          />

                          <Form.FieldControl
                            control="select"
                            label="Position"
                            name={`facultyDepartments.${index}.position`}
                            options={dataPositionList}
                            required
                          />
                        </Form.FieldGroup>

                        <ButtonGroup>
                          {formikProps.values.facultyDepartments.length > 1 && (
                            <Button title="Remove" type="button" onClick={() => remove(index)} color="red" />
                          )}
                          <Button
                            title="Add Another"
                            type="button"
                            onClick={() => push({ faculty: '', department: '', position: '' })}
                          />
                        </ButtonGroup>
                      </Form.FieldArrayContainer>
                    ))}
                  </>
                )}
              />
            </Main>

            <Main>
              <PageHeader header="Employee Info" content="Manage employee information" size="md" />

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

                    <ErrorMessage name="employeeSearch">{(error) => <Form.Error>{error}</Form.Error>}</ErrorMessage>

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
                            remove: <Button title="Remove" type="button" color="red" onClick={() => remove(index)} />,
                          }))}
                          hasShadow
                          hasStripes
                        />
                      </Form.FieldGroup>
                    )}
                  </>
                )}
              />
            </Main>

            <Main>
              <PageHeader header="FOAP sample field" content="Auto Suggest and Disabled Field example" size="md" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl
                  control="autosuggest"
                  label="Account"
                  name="account"
                  options={FOAPAccountData}
                  onChange={(selectedOption) => {
                    const accountValue = selectedOption?.value || selectedOption
                    formikProps.setFieldValue('account', accountValue)

                    const selectedAccount = FOAPAccountData.find((acc) => acc.value === accountValue)
                    formikProps.setFieldValue('program', selectedAccount ? selectedAccount.value : '')
                  }}
                />

                <Form.FieldControl
                  control="text"
                  label="Program"
                  name="program"
                  type="text"
                  placeholder="code"
                  disabled
                  value={formikProps.values.program}
                />
              </Form.FieldGroup>
            </Main>

            <Main>
              <PageHeader header="Date Selection" content="Date selection example" size="md" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl control="datetime" label="Start Date" name="startDate" required />

                <Form.FieldControl control="datetime" label="End Date" name="endDate" required />
              </Form.FieldGroup>
            </Main>

            <Main>
              <PageHeader header="Text" content="Text example" size="md" />
              <Form.FieldGroup>
                <Form.FieldControl
                  control="text"
                  label="Label"
                  name="inputText"
                  required
                  helper="Helper Text"
                  helperpostop
                  disabled={formikProps.isSubmitting}
                />
                <Form.FieldControl
                  control="textarea"
                  label="Label"
                  name="textareainput"
                  required
                  helper="Helper Text"
                  rows={8}
                  disabled={formikProps.isSubmitting}
                />
              </Form.FieldGroup>
            </Main>

            <Main>
              <PageHeader header="Selection" content="Radio and Checkbox" size="md" />
              <Form.FieldGroup>
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
            </Main>

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
