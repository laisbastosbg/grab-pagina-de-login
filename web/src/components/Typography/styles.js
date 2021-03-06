import styled from 'styled-components'

import MTypography from '@material-ui/core/Typography'

export const StyledTypography = styled(MTypography)`
  &&& {
    color: ${(props) => props.customcolor || '#ffffff'};
    align-self: ${(props) => props.alignSelf || ''};
    margin: ${(props) => props.margin || ''};
  }
`
