import styled from 'styled-components'
import MAlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import MLockOutlinedIcon from '@material-ui/icons/LockOutlined'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex: ${(props) => props.flex || ''};
`
export const AlternateEmailIcon = styled(MAlternateEmailIcon)`
  color: #ffffff;
`

export const LockOutlinedIcon = styled(MLockOutlinedIcon)`
  color: #ffffff;
`
