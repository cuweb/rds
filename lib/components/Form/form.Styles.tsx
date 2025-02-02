export const primaryStyles = {
  form: `flex flex-col`,
  wrapper: `flex flex-col gap-2 justify-center`,
}

export const textStyles = {
  label: `block font-semibold text-lg`,
  legend: `block font-semibold text-lg mb-2`,
  required: `text-cu-red`,
  helper: `block text-sm text-cu-black-600 mb-1`,
  legendHelper: `mb-0`,
}

export const fieldStyles = {
  input: `border border-cu-black-200 rounded-md placeholder:text-cu-black-400 overflow-hidden`,
  radioCheck: `flex items-center gap-2`,
  radioCheckRight: `flex items-center flex-row-reverse gap-2`,
  horizontalOptions: `flex flex-row flex-wrap gap-x-8 gap-y-2`,
  verticalOptions: `flex flex-col gap-2`,
  uploads: `max-w-xs focus:outline-none`,
  disabled: `disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`,
  disabledCheckbox: `disabled:pointer-events-none disabled:bg-gray-300 disabled:text-black-800`,
  loadingField: `px-3 py-2 md:py-3 !my-0 border border-cu-black-200 rounded-md text-base bg-cu-black-100`,
  loadingFieldSet: `my-0`,
  errorFormik: `font-semibold text-sm error text-cu-red`,
  errorField: `px-3 py-2 md:py-3 !my-0 border border-cu-black-200 bg-cu-red-50 rounded-md text-base error text-cu-red`,
  errorFieldSet: `!my-0 text-base error text-cu-red`,
}
