import React from 'react'

import { StyledLink } from './styles'

const Link = ({
  children,
  to,
  replace,
  innerRef
}) => (
  <StyledLink
    to={to}
    replace={replace}
    innerRef={innerRef}
  >
    {children}
  </StyledLink>
)

export default Link