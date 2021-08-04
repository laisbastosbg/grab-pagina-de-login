import styled from 'styled-components'

import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    color: ${(props) => props.customColor || '#504F60'};
    width: ${(props) => props.width || '300px'};
    height: ${(props) => props.height || '50px'};
    border-radius: ${(props) => props.borderRadius || '25px'};
    font-weight: 700;
    text-transform: none;
  }
`
