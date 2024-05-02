import { Formik, Form } from 'formik'
import FieldWrapper from '../../Form/FieldWrapper/FieldWrapper'
import React from 'react'

interface FormLoaderProps {
  numCol?: number
}

const initialValues = {}
const validationSchema = {}
const handleSubmit = () => {
  console.log()
}
const handleReset = () => {
  console.log()
}
export const FormLoader: React.FC<FormLoaderProps> = ({ numCol = 1 }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Form>
        {numCol == 1 && (
          <FieldWrapper cols={1}>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </FieldWrapper>
        )}
        {numCol == 2 && (
          <FieldWrapper cols={2}>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </FieldWrapper>
        )}
        {numCol == 3 && (
          <FieldWrapper cols={3}>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
            <div className="animate-pulse">
              <div className="flex flex-wrap gap-5">
                <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </FieldWrapper>
        )}
      </Form>
    </Formik>
  )
}
