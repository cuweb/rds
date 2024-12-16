import DOMPurify from 'dompurify'

// TODO: reminder to check what this is doing, out of sync with propClasses defaults
// Function to determine the maxWidth class
export function getmaxWidthClass(maxWidth) {
  const maxWidthClasses = {
    sm: 'max-w-xs',
    md: 'max-w-xl',
    lg: 'max-w-4xl',
    xl: 'max-w-7xl',
  }
  return maxWidthClasses[maxWidth] || ''
}

// utility.js
export function getRequiredClass(name, touched, errors) {
  return touched[name] && errors[name] ? 'border border-cu-red px-5 py-4 bg-cu-red-25 rounded-md' : ''
}

// Sanitize HTML before rendered to DOM
export function sanitizeContent(content) {
  const sanitizedContent = DOMPurify.sanitize(content)
  return sanitizedContent
}
