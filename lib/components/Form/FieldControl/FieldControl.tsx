/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'
import { Select } from '../Select/Select'
import { Checkbox } from '../Checkbox/Checkbox'
import { Radio } from '../Radio/Radio'
import { AutoSuggest } from '../AutoSuggest/AutoSuggest'
import { DateTime } from '../DateTime/DateTime'
import { FileUpload } from '../FileUpload/FileUpload'
import { forwardRef } from 'react'

export interface FieldControlProps {
  control: string
  label: string
  name: string
  [key: string]: any
}

export const FieldControl = forwardRef<any, FieldControlProps>(({ control, label, name, ...rest }, refs) => {
  switch (control) {
    case 'text':
      return <Input label={label} refs={refs} name={name} {...rest} />
    case 'textarea':
      return <TextArea label={label} refs={refs} name={name} {...rest} />
    case 'select':
      return <Select label={label} refs={refs} name={name} {...rest} />
    case 'checkbox':
      return <Checkbox label={label} refs={refs} name={name} {...rest} />
    case 'radio':
      return <Radio label={label} refs={refs} name={name} {...rest} />
    case 'autosuggest':
      return <AutoSuggest label={label} refs={refs} name={name} {...rest} />
    case 'datetime':
      return <DateTime label={label} refs={refs} name={name} {...rest} />
    case 'fileUpload':
      return <FileUpload label={label} refs={refs} name={name} {...rest} />
    default:
      return null
  }
})
