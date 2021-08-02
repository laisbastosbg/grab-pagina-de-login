import React from 'react'

import { StyledContainer } from './styles'

const Container = ({
  flexDirection,
  justifyConntent,
  alignItems,
  color,
  flex,
  children,
  margin,
}) => (
  <StyledContainer
    flexDirection={flexDirection}
    justifyConntent={justifyConntent}
    alignItems={alignItems}
    color={color}
    flex={flex}
    margin={margin}
  >
    {children}
  </StyledContainer>
)

export default Container
