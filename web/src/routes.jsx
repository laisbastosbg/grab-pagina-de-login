import React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import Login from 'pages/Login'

const Routes = () => (
  <BrowserRouter>
    <Route component={Login} path='/' />
  </BrowserRouter>
)

export default Routes
