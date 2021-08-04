import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: ${(props) => props.color || '#ffffff'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  text-decoration: none;
`
