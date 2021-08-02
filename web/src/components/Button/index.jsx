import React from 'react'

import { StyledButton } from './styles'

const Button = ({
  backgroundColor,
  borderRadius,
  children,
  classes,
  color,
  component,
  customcolor,
  disabled,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  endIcon,
  fullWidth,
  height,
  href,
  size,
  onClick,
  startIcon,
  type,
  variant,
  width,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    classes={classes}
    color={color}
    component={component}
    customcolor={customcolor}
    disabled={disabled}
    disableElevation={disableElevation}
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    endIcon={endIcon}
    fullWidth={fullWidth}
    href={href}
    height={height}
    onClick={onClick}
    size={size}
    startIcon={startIcon}
    type={type}
    variant={variant}
    width={width}
  >
    {children}
  </StyledButton>
)

export default Button
