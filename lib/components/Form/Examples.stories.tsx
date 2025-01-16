import React, { MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Form } from './Form'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
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
    }

    const InputInitialValues = {
      inputText: '',
    }

    const InputValidationSchema = Yup.object().shape({
      inputText: Yup.string().required('The field is required'),
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

    const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
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
            header="Form Example Layout"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />

          <Form formikProps={formikProps}>
            <Section>
              <PageHeader
                header="Section Heading"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                size="md"
              />
              <Form.FieldGroup cols={2}>
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
                  control="text"
                  label="Label"
                  name="inputText"
                  required
                  helper="Helper Text"
                  helperpostop
                  disabled={formikProps.isSubmitting}
                />
              </Form.FieldGroup>

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
            </Section>

            <Section>
              <PageHeader
                header="Section Heading"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
                size="md"
              />
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

export const StoryExamples: Story = {
  render: () => {
    type IInput = {
      inputText: string
    }

    const InputInitialValues = {
      inputText: '',
    }

    const InputValidationSchema = Yup.object().shape({
      inputText: Yup.string().required('The field is required'),
      department: Yup.string().required('Please select a department'),
      position: Yup.string().required('Please select a position'),
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date()
        .required('End date is required')
        .min(Yup.ref('startDate'), 'End date must be after start date'),
      program: Yup.string(),
      account: Yup.string().required('Please select an Account'),
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

    const dataDepartmentList = [
      { value: 'Human Resources', label: 'Human Resources' },
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Marketing', label: 'Marketing' },
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
              <PageHeader header="Drop Down" content="Drop down example" size="md" />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl
                  control="select"
                  label="Department"
                  name="department"
                  options={dataDepartmentList}
                  required
                />
                <Form.FieldControl
                  control="select"
                  label="Position"
                  name="position"
                  options={dataPositionList}
                  required
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
              <PageHeader
                header="Auto Suggest and Disabled Field"
                content="Auto Suggest and Disabled Field example"
                size="md"
              />
              <Form.FieldGroup cols={2}>
                <Form.FieldControl
                  control="autosuggest"
                  label="Account"
                  classNamePrefix="select"
                  className="basic-single"
                  required
                  isSearchable
                  name="account"
                  options={FOAPAccountData}
                />

                <Form.FieldControl
                  control="text"
                  label="Program"
                  name="program"
                  type="text"
                  placeholder="code"
                  disabled
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
