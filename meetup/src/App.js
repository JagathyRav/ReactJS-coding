import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import meetUpRegisterContext from './context/meetUpRegisterContext'

import './App.css'

class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    registerError: false,
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateError = response => {
    this.setState({registerError: response})
  }

  render() {
    const {isRegister, name, topic, registerError} = this.state

    return (
      <meetUpRegisterContext.Provider
        value={{
          isRegister,
          name,
          topic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          registerError,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </meetUpRegisterContext.Provider>
    )
  }
}

export default App
