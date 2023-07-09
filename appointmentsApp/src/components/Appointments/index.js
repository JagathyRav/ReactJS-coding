import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    allAppointmentsList: [],
    starred: false,
    starredAppointmentsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }
    this.setState(prevState => ({
      allAppointmentsList: [...prevState.allAppointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStar = id => {
    const {starred} = this.state
    if (starred === true) {
      this.setState(prevState => ({
        starredAppointmentsList: prevState.starredAppointmentsList.filter(
          eachAppointment => eachAppointment.id !== id,
        ),
        allAppointmentsList: prevState.allAppointmentsList.map(
          eachAppointment => {
            if (eachAppointment.id === id)
              return {...eachAppointment, isStarred: !eachAppointment.isStarred}
            return eachAppointment
          },
        ),

        // we cannot update starred list here because here previous values will be tested for isStarred state.
      }))
    } else {
      this.setState(prevState => ({
        allAppointmentsList: prevState.allAppointmentsList.map(
          eachAppointment => {
            if (eachAppointment.id === id)
              return {...eachAppointment, isStarred: !eachAppointment.isStarred}
            return eachAppointment
          },
        ),

        // we cannot update starred list here because here previous values will be tested for isStarred state.
      }))
    }
  }

  onChangeStarred = () => {
    const {starred} = this.state
    if (starred === false) {
      this.setState(prevState => ({
        starred: !prevState.starred,
        starredAppointmentsList: prevState.allAppointmentsList.filter(
          eachAppointment => eachAppointment.isStarred === true,
        ),
      }))
    } else {
      this.setState(prevState => ({
        starred: !prevState.starred,
      }))
    }
  }

  render() {
    const {
      title,
      date,
      starred,
      allAppointmentsList,
      starredAppointmentsList,
    } = this.state

    const starredClassName = starred ? 'active' : 'inActive'

    const appointmentsList = starred
      ? starredAppointmentsList
      : allAppointmentsList

    return (
      <div className="appContainer">
        <div className="appointmentScheduleContainer">
          <div className="appointmentFormContainer">
            <form className="formContainer" onSubmit={this.addAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <div className="titleContainer">
                <label htmlFor="title">TITLE</label>
                <input
                  placeholder="Title"
                  id="title"
                  className="title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
              </div>

              <div className="dateContainer">
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  id="date"
                  className="date"
                  onChange={this.onChangeDate}
                  value={date}
                />
              </div>

              <button type="submit" className="submitButton">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="separator" />
          <div className="appointmentsContainer">
            <div className="appointmentsFilterContainer">
              <h1 className="heading2">Appointments</h1>
              <button
                type="button"
                className={`starredButton ${starredClassName}`}
                onClick={this.onChangeStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointmentsItemsContainer">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                  toggleStar={this.toggleStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
