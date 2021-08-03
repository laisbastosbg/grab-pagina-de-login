import React from 'react';

import { StyledTypography } from './styles'

const Typography = ({
  align,
  children,
  classes,
  color,
  component,
  display,
  gutterButton,
  noWrap,
  paragraph,
  variant,
  variantMapping,
}) => (
  <StyledTypography
    align={align}
    classes={classes}
    color={color}
    component={component}
    display={display}
    gutterButton={gutterButton}
    noWrap={noWrap}
    paragraph={paragraph}
    variant={variant}
    variantMapping={variantMapping}
  >
    {children}
  </StyledTypography>
)

export default Typography