// Style your components here
import styled from 'styled-components'

export const Image = styled.div`
  height: 300px;
  width: 450px;
  padding: 10px;
  background-image: url(${props => props.url});
`

export const Para = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`