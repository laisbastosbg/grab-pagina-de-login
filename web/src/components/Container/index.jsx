import React from 'react'

import { StyledContainer } from './styles'

const Container = ({
  flexDirection,
  justifyContent,
  alignItems,
  color,
  flex,
  children,
  margin,
  height,
  width,
  mediaDisplay,
}) => (
  <StyledContainer
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    color={color}
    flex={flex}
    margin={margin}
    height={height}
    width={width}
    mediaDisplay={mediaDisplay}
  >
    {children}
  </StyledContainer>
)

export default Container
