export function required(val) {
  return !!val || 'Email is required'
}

export function email(val) {
  return /.+@.+\..+/.test(val) || 'Enter a valid email'
}

export default {
  required,
  email,
}
