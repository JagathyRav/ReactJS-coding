// Style your elements here
import styled from 'styled-components'

export const ActiveBtn = styled.button`
  background-color: white;
  color: #334155;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  height: 30px;
  width: 65px;
  margin: 13px;
  opacity: 1;
`

export const Btn = styled(ActiveBtn)`
  opacity: 0.5;
`
