import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`

export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  display: flex;
`

export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

export const ScoreCardContainer = styled.div`
  width: 100px;
  padding: 5px;
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  color: #000000;
  text-align: center;
  margin: 0;
  font-weight: bold;
  font-size: 25px;
`

export const ScoreSpan = styled.p`
  color: #000000;
  font-family: 'Roboto';
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`

export const ItemsImagesContainer = styled.ul`
  padding: 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  padding: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
`

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
