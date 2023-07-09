import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GithubPopularRepos extends Component {
  state = {
    reposList: [],
    apiStatus: apiStatusConstants.initial,
    activeLanguageId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {activeLanguageId} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`

    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(repository => ({
        name: repository.name,
        id: repository.id,
        issuesCount: repository.issues_count,
        forksCount: repository.forks_count,
        starsCount: repository.stars_count,
        avatarUrl: repository.avatar_url,
      }))
      this.setState({
        reposList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  updateActiveLanguageId = activeLanguageId => {
    this.setState({activeLanguageId}, this.getRepositories)
  }

  renderFilteredLanguages = () => {
    const {activeLanguageId} = this.state
    return (
      <ul className="filtered-languages-container">
        {languageFiltersData.map(language => (
          <LanguageFilterItem
            key={language.id}
            languageDetails={language}
            updateActiveLanguageId={this.updateActiveLanguageId}
            isActive={activeLanguageId === language.id}
          />
        ))}
      </ul>
    )
  }

  renderRepositoriesList = () => {
    const {reposList} = this.state
    return (
      <ul className="repos-list">
        {reposList.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoData={eachRepo} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">Something Went Wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoriesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return this.renderLoader()
    }
  }

  render() {
    return (
      <div className="repos-container">
        <h1 className="heading">Popular</h1>
        {this.renderFilteredLanguages()}
        {this.renderContent()}
      </div>
    )
  }
}

export default GithubPopularRepos
