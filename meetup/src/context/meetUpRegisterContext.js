import React from 'react'

const meetUpRegisterContext = React.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default meetUpRegisterContext
