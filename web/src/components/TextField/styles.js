import styled from 'styled-components'

import MTextField from '@material-ui/core/TextField'

export const TextField = styled(MTextField)`
  &&& {
    margin: 8px;
  }

  fieldset {
    border-radius: 25px;
    border-color: #ffffff;
  }

  input {
    padding: 15.5px 0;
  }
`
