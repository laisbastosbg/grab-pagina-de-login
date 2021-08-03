import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || ''};
  align-items: ${(props) => props.alignItems || ''};
  justify-content: ${(props) => props.justifyContent || ''};
  background-color: ${(props) => props.color || ''};
  flex: ${(props) => props.flex || ''};
  margin: ${(props) => props.margin || ''};| ''};
  height: ${(props) => props.height || ''};
  width: ${(props) => props.width || ''};

  @media(max-width: 800px) {
    display: ${(props) => props.mediaDisplay || 'flex'};
  }
`
