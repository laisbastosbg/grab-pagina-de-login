import React from 'react'

import Container from 'components/Container'
import Form from 'components/Form'

import { Image } from './styles'

import './index.css'

const Login = () => (
  <>
    <Form flex={7} />
    <Container
      mediaDisplay='none'
      height='100%'
      width='100%'
      flex={10}
      color='#FFFFFF'
    >
      <Image />
    </Container>
  </>
)

export default Login
