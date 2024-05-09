/* eslint-disable storybook/no-redundant-story-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormComponents } from './FormComponents'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta<typeof FormComponents> = {
  title: 'Components/FormComponents',
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof FormComponents>

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const Input: Story = () => {
  const InputInitialValues = {
    inputText: '',
  }

  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required'),
  })

  const onSubmit = async (values: any, actions: any) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: InputInitialValues,
    validationSchema: InputValidationSchema,
    onSubmit,
  })

  return (
    <FormComponents formikProps={formikProps}>
      <FormComponents.FieldGroup>
        <FormComponents.FieldControl
          control="text"
          label="Label"
          name="inputText"
          required
          helper="Helper Text"
          disable={formikProps.isSubmitting}
        />
      </FormComponents.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </FormComponents>
  )
}

Input.storyName = 'Input'

export const Editor: Story = () => {
  const [editorContent, setEditorContent] = useState<string | null>(null)
  const [editorError, setEditorError] = useState<boolean>(false)

  const EditorInitialValues = {}

  const EditorValidationSchema = Yup.object().shape({})

  const onSubmit = async (values: any, actions: any) => {
    actions.setSubmitting(true)
    setEditorError(false)

    console.log(editorContent, editorContent === null, 'editorContent')

    if (editorContent === null) {
      setEditorError(true)
    } else {
      console.log(values, editorContent)
      // await sleep(10000)
      // alert(formikProps.isSubmitting)
    }
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: EditorInitialValues,
    validationSchema: EditorValidationSchema,
    onSubmit,
  })

  const initialValue =
    '<h2>H2 Heading</h2> <p>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien. </p><p> Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id. </p><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt=""> <ul> <li>Quis elit egestas venenatis mattis dignissim.</li><li> Cras cras lobortis vitae vivamus ultricies facilisis tempus. </li><li>Orci in sit morbi dignissim metus diam arcu pretium.</li></ul> <p> Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim. </p><h3>H3 Heading</h3> <p> Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam. </p><blockquote> <p> Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. </p></blockquote> <p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p><h4>H4 Heading</h4> <p> Purus morbi dignissim senectus mattis <a href="#">adipiscing</a> . Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam. </p><p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p><ol> <li>Quis elit egestas venenatis mattis dignissim.</li><li> Cras cras lobortis vitae vivamus ultricies facilisis tempus. </li><li>Orci in sit morbi dignissim metus diam arcu pretium.</li></ol> <p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p>'

  console.log(formikProps.isSubmitting, 'formikProps.isSubmitting')
  return (
    <FormComponents formikProps={formikProps}>
      <FormComponents.FieldGroup>
        <FormComponents.FieldControl
          control="text"
          label="Label"
          name="inputText"
          required
          helper="Helper Text"
          disable={formikProps.isSubmitting}
        />
        <FormComponents.Editor
          label="Editor"
          name="editor"
          helper="Helper Text"
          // value={initialValue}
          placeholder="Text goes here..."
          setEditorContent={setEditorContent}
          errorMessage={editorError ? 'Field is required' : ''}
          required
          disable={formikProps.isSubmitting}
        />
        {/* <FormComponents.Editor
          label="Editor1"
          name="editor1"
          helper="Helper Text"
          // value={initialValue}
          placeholder="Text goes here..."
          setEditorContent={setEditorContent}
          errorMessage={editorError ? 'Field is required' : ''}
          required
          disable={formikProps.isSubmitting}
        /> */}
      </FormComponents.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </FormComponents>
  )
}

Editor.storyName = 'Editor'
