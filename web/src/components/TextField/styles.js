import styled from 'styled-components'

import MTextField from '@material-ui/core/TextField'

export const TextField = styled(MTextField)`
  &&& {
    margin: 8px;
    width: 300px;
  }

  fieldset {
    border-radius: 25px;
  }

  input {
    padding: 15.5px 0;
    color: #ffffff;
    font-weight: bold;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 2.5px solid #ffffff;
    }

    & fieldset {
      border: 2.5px solid #ffffff;
    }

    &:hover fieldset {
      border: 2.5px solid #ffffff;
    }
  }
`
