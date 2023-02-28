export const formStyles = {
  elementSpace: `space-y-2`,
  label: `block text-sm font-semibold text-cu-black-800`,
  input: `block w-full rounded-md border border-cu-black-300 text-sm py-2 px-3 focus:border-cu-black-500 focus:ring-0 focus:bg-gray-50`,
  inputBorder: `border border-cu-black-300`,
  checkboxList: `flex items-center gap-2`,
  checkboxInput: `rounded focus:ring-cu-red-200 text-cu-red`,
  checkboxLabel: `text-sm text-cu-black-800`,
  radioList: `flex items-center gap-2`,
  radioInput: `rounded-full focus:ring-cu-red-200 text-cu-red`,
  radioLabel: `text-sm text-cu-black-800`,
}

export const formErrorStyles = {
  inputBorder: `border-cu-red`,
  messageDiv: `flex items-center gap-1 pointer-events-none`,
  errorIcon: `w-5 h-5 font-medium text-cu-red`,
  errorText: `text-sm font-medium text-cu-red`,
}
