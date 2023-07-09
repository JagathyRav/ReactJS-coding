// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  padding: 3%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: white;
  text-align: center;
  font-size: 28px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: white;
  text-align: center;
  font-size: 20px;
`

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ColorItem = styled(ColorContainer)`
  flex-direction: column;
  margin: 12px;
`
export const ColorName = styled(Para)`
  font-size: 16px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 80px;
  height: 40px;
`
export const Btn = styled.button`
  height: 33px;
  width: 80px;
  background-color: #00c9b7;
  color: #1e293b;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
`
