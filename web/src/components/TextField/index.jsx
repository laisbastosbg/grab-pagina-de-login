import React from 'react'

import { TextField as MTextField } from './styles'

const TextField = ({ variant, error, id, InputProps, type, onChange }) => (
  <MTextField
    variant={variant}
    error={error}
    id={id}
    InputProps={InputProps}
    size='medium'
    type={type}
    onChange={onChange}
  />
)

export default TextField
