/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormikContext } from 'formik'

const useErrorClass = (name: string) => {
  const { touched, errors } = useFormikContext<any>()
  return touched[name] && errors[name] ? 'border-cu-red bg-cu-red-50' : ''
}

export default useErrorClass
