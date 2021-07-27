import React from 'react'

import Container from 'components/Container'
import Form from 'components/Form'

import { ReactComponent as Image } from 'assets/undraw_interview_rmcf.svg'

import './index.css'

const Login = () => (
  <>
    <Form flex={1} />
    <Container flex={1} color='#FFFFFF'>
      <Image />
    </Container>
  </>
)

export default Login
