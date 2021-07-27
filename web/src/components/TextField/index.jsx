import React from 'react'

import { TextField as MTextField } from './styles'

const TextField = ({ variant, id, InputProps, type }) => (
  <MTextField
    variant={variant}
    id={id}
    InputProps={InputProps}
    size='medium'
    type={type}
  />
)

export default TextField
