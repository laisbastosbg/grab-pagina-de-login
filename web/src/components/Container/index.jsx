import React from 'react'

import { StyledContainer } from './styles'

const Container = ({
  flexDirection,
  justifyConntent,
  alignItems,
  color,
  flex,
  children,
}) => (
  <StyledContainer
    flexDirection={flexDirection}
    justifyConntent={justifyConntent}
    alignItems={alignItems}
    color={color}
    flex={flex}
  >
    {children}
  </StyledContainer>
)

export default Container
