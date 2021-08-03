import React, { useState } from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import * as yup from 'yup'
import { setLocale } from 'yup'

import TextField from 'components/TextField'
import Button from 'components/Button'
import Container from 'components/Container'
import Typography from 'components/Typography'
import Link from 'components/Link'

import {
  StyledForm,
  AlternateEmailIcon,
  LockOutlinedIcon,
  Logo,
} from './styles'

const Form = ({ flex }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hasError, setHasError] = useState(false)

  setLocale({
    string: {
      email: "Por favor, informe um email válido",
    }
  })

  const loginSchema = yup.object().shape({
    email: yup.string().email().required()
  })

  const onSubmit = (e) => {
    e.preventDefault()

    loginSchema.validate({ email, password }).catch(() => setHasError(true))
  }

  return (
    <StyledForm onSubmit={onSubmit} flex={flex}>
      <Logo />
      <Container flexDirection='column' alignItems='center' margin='8.375rem 0'>
        <TextField
          variant='outlined'
          error={hasError}
          id='email'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        {hasError && <Typography alignSelf="flex-start" margin="0 0 0 28px" variant="subtitle2">Por favor, informe um email válido</Typography>}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" size='large'>Entrar</Button>
      </Container>
      <Container flexDirection='column' alignItems='center'>
        <Typography>Problemas para entrar?</Typography>
        <Link to="/">Clique aqui</Link>
      </Container>
    </StyledForm>
  )
}

export default Form
