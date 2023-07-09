import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    firstName: '',
    showFirstNameError: false,
    lastName: '',
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  firstNameBlur = () => {
    const {firstName} = this.state
    const isNotValidFirstName = firstName === ''

    this.setState({showFirstNameError: isNotValidFirstName})
  }

  lastNameBlur = () => {
    const {lastName} = this.state
    const isNotValidLastName = lastName === ''

    this.setState({showLastNameError: isNotValidLastName})
  }

  errorMessage = () => <p>Required</p>

  submitAnotherResponse = () => {
    this.setState(prevState => ({isSubmitted: !prevState.isSubmitted}))
  }

  onSuccessSubmit = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  submitForm = event => {
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.firstNameBlur()
      this.lastNameBlur()
    } else if (firstName === '') {
      this.firstNameBlur()
    } else if (lastName === '') {
      this.lastNameBlur()
    } else this.setState(prevState => ({isSubmitted: !prevState.isSubmitted}))
  }

  register = () => {
    const {
      firstName,
      showFirstNameError,
      lastName,
      showLastNameError,
    } = this.state

    return (
      <>
        <h1>Registration</h1>
        <form onSubmit={this.submitForm}>
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className="firstname-input-filed"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.firstNameBlur}
          />
          {showFirstNameError && this.errorMessage()}

          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className="lastname-input-filed"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.lastNameBlur}
          />
          {showLastNameError && this.errorMessage()}

          <button type="submit">Submit</button>
        </form>
      </>
    )
  }

  render() {
    const {isSubmitted} = this.state
    const errorMsg = this.errorMessage()
    return (
      <div className="app-container">
        {isSubmitted ? this.onSuccessSubmit() : this.register()}
      </div>
    )
  }
}

export default RegistrationForm
