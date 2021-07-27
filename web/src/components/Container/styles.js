import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || ''};
  align-items: ${(props) => props.justifyContent || ''};
  justify-content: ${(props) => props.alignItems || ''};
  background-color: ${(props) => props.color || ''};
  flex: ${(props) => props.flex || ''};
`
