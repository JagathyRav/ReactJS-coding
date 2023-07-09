import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus, registrationStatusConstants} = props

  const renderInitialRegistrationStatus = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderYetToRegisterView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredStatusView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegisterView()
    case registrationStatusConstants.registered:
      return renderRegisteredStatusView()
    case registrationStatusConstants.registrationsClosed:
      return renderRegistrationsClosedView()
    default:
      return renderInitialRegistrationStatus()
  }
}

export default ActiveEventRegistrationDetails
