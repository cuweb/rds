export const primaryStyles = {
  wrapper: `flex flex-col gap-2 justify-center`,
  button: `inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600`,
  buttonDarkgrey: `inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium focus:outline-none border border-1 border-cu-black-600 bg-transparent hover:text-white hover:bg-cu-black-600`,
  required: ``,
  disabled: `disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600`,
  ghostButton: `not-prose inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium focus:outline-none border border-1 text-cu-red border-cu-red bg-transparent hover:text-white hover:bg-cu-red`,
}

export const textStyles = {
  label: `block font-semibold text-lg`,
  legend: `block font-semibold text-lg mb-2`,
  helper: `block text-sm text-cu-black-600 mb-1`,
  required: `text-cu-red`,
  legendHelper: `mb-0`,
}

export const fieldStyles = {
  input: `border border-cu-black-200 rounded-md placeholder:text-cu-black-400`,
  select: `border border-cu-black-200 rounded-md`,
  radioCheck: `flex items-center gap-2`,
  horizontalOptions: `flex flex-row gap-10`,
  verticalOptions: `flex flex-col gap-2`,
  uploads: `max-w-xs focus:outline-none`,
  errorInput: `border border-red-600 rounded-md p-2`,
  disabled: `disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `,
  disabledCheckbox: `disabled:pointer-events-none disabled:bg-gray-300 disabled:text-black-800 `,
  disabledUpload: `disabled:pointer-events-none`,
}
