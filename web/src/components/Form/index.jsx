import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import TextField from 'components/TextField'

import {
  StyledForm,
  AlternateEmailIcon,
  LockOutlinedIcon,
  Logo,
} from './styles'

const Form = ({ flex }) => (
  <StyledForm flex={flex}>
    <Logo />
    <TextField
      variant='outlined'
      id='username'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <AlternateEmailIcon />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      variant='outlined'
      id='password'
      type='password'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <LockOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  </StyledForm>
)

export default Form
