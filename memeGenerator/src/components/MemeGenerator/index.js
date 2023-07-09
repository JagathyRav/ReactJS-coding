import {Component} from 'react'
import {Image, Para} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    visible: false,
  }

  onEnterBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onEnterTop = event => {
    this.setState({topText: event.target.value})
  }

  enterImageUrl = event => {
    this.setState({imageInput: event.target.value})
  }

  fontSizeChanged = event => {
    this.setState({fontSize: event.target.value})
  }

  renderImage = () => {
    this.setState({visible: true})
  }

  render() {
    const {topText, bottomText, imageInput, fontSize, visible} = this.state
    console.log(fontSize)
    return (
      <div>
        <form>
          <h1>Meme Generator</h1>
          <label htmlFor="urlInput">Image URL</label>
          <input
            type="text"
            id="urlInput"
            value={imageInput}
            placeholder="Enter the image Url"
            onChange={this.enterImageUrl}
          />
          <label htmlFor="topText">Top text</label>
          <input
            type="text"
            id="topText"
            value={topText}
            placeholder="Enter the top text"
            onChange={this.onEnterTop}
          />
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            type="text"
            value={bottomText}
            id="bottomText"
            placeholder="Enter the bottom text"
            onChange={this.onEnterBottom}
          />
          <label htmlFor="select">Font size</label>
          <select onChange={this.fontSizeChanged} id="select">
            {fontSizesOptionsList.map(eachSize => (
              <option key={eachSize.optionId} value={eachSize.displayText}>
                {eachSize.displayText}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.renderImage}>
            Generate
          </button>
        </form>
        <div>
          {visible && (
            <Image url={imageInput} data-testid="meme">
              <Para fontSize={fontSize}>{topText}</Para>
              <Para fontSize={fontSize}>{bottomText}</Para>
            </Image>
          )}
        </div>
      </div>
    )
  }
}

export default MemeGenerator