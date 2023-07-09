import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    // const statusCode = await response.statusCode
    // console.log(statusCode)
    const data = await response.json()

    // here response is in an object thet contains an array of team objects.
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {teamsList.map(eachTeam => (
                <TeamCard teamData={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
