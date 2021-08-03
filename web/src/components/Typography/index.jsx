import React from 'react';

import { StyledTypography } from './styles'

const Typography = ({
  align,
  alignSelf,
  children,
  classes,
  color,
  component,
  display,
  gutterButton,
  margin,
  noWrap,
  paragraph,
  variant,
  variantMapping,
}) => (
  <StyledTypography
    align={align}
    alignSelf={alignSelf}
    classes={classes}
    color={color}
    component={component}
    display={display}
    gutterButton={gutterButton}
    margin={margin}
    noWrap={noWrap}
    paragraph={paragraph}
    variant={variant}
    variantMapping={variantMapping}
  >
    {children}
  </StyledTypography>
)

export default Typography