// Write your code here
import {ActiveBtn, Btn} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, activeBtn} = props
  const {displayText, value} = details

  const onActiveButton = () => {
    changeDirection(value)
  }

  return (
    <li>
      {activeBtn === value ? (
        <ActiveBtn type="button" onClick={onActiveButton}>
          {displayText}
        </ActiveBtn>
      ) : (
        <Btn type="button" onClick={onActiveButton}>
          {displayText}
        </Btn>
      )}
    </li>
  )
}

export default GradientDirectionItem
