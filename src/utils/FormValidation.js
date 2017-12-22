export const required = value => 
    value 
        ? undefined 
        : 'Required'

export const notEquals = char => value =>
    value && value === char.toString()
        ? `Must not be ${char}` 
        : undefined

export const number = value =>
    value && isNaN(Number(value)) 
        ? 'Must be a number' 
        : undefined

export const minValue = min => value =>
    value && value < min 
        ? `Must be at least ${min}` 
        : undefined

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined