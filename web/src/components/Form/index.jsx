import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import TextField from 'components/TextField'
import Button from 'components/Button'
import Container from 'components/Container'

import {
  StyledForm,
  AlternateEmailIcon,
  LockOutlinedIcon,
  Logo,
} from './styles'

const Form = ({ flex }) => (
  <StyledForm flex={flex}>
    <Logo />
    <Container flexDirection='column' alignItems='center' margin='4.375rem 0'>
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
      <Button size='large'>Entrar</Button>
    </Container>
  </StyledForm>
)

export default Form
