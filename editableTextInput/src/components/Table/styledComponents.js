import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  padding: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d50fe;
  border-radius: 10px;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 26px;
  margin-bottom: 32px;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const InputField = styled.input`
  border-radius: 5px;
  outline: none;
  margin-right: 15px;
  padding-left: 10px;
  color: #323f4b;
  height: 35px;
  border: 2px solid #cbd2d9;
`
export const ParagraphText = styled.p`
  color: #323f4b;
  font-size: 18px;
  font-weight: normal;
  margin-right: 20px;
`
export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border-radius: 4px;
  padding: 15px;
  font-size: 10px;
  outline: none;
  border: none;
`
