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
