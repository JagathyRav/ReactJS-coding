import {Component} from 'react'

import {
  AppComponent,
  Heading,
  CountriesList,
  ListItem,
  ListPara,
  ListButton,
  VisitedCountries,
  VisitedListDisplay,
  ListItem1,
  EmptyHeader,
  ItemBox,
  ThumbItem,
  NameBox,
  NameOfItem,
  DeleteButton,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Home extends Component {
  state = {
    list: initialCountriesList,
    visitedList: initialCountriesList.filter(
      eachCountry => eachCountry.isVisited === true,
    ),
  }

  onClickChangeVisit = id => {
    console.log('clicked', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
    this.setState(prevState => ({
      visitedList: [
        ...prevState.visitedList,
        prevState.list.filter(eachCountry => eachCountry.id === id),
      ],
    }))
  }

  onRemoveVisit = id => {
    console.log('removed', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
    this.setState(prevState => ({
      visitedList: [
        ...prevState.list.filter(eachCountry => eachCountry.isVisited === true),
      ],
    }))
  }

  render() {
    const {list, visitedList} = this.state
    console.log(list, visitedList)
    return (
      <AppComponent>
        <Heading>Countries</Heading>
        <CountriesList>
          {list.map(eachItem => (
            <ListItem key={eachItem.id}>
              <ListPara>{eachItem.name}</ListPara>
              {eachItem.isVisited ? (
                <p
                  style={{
                    font: 'Roboto',
                    color: '#94a3b8',
                    marginRight: '5px',
                    marginBottom: '10px',
                  }}
                >
                  Visited
                </p>
              ) : (
                <ListButton
                  isVisit={eachItem.isVisited}
                  type="button"
                  onClick={() => this.onClickChangeVisit(eachItem.id)}
                >
                  Visit
                </ListButton>
              )}
            </ListItem>
          ))}
        </CountriesList>
        <VisitedCountries>
          <h1
            style={{color: '#ffffff', fontFamily: 'Roboto', fontWeight: 'bold'}}
          >
            Visited Countries
          </h1>
          {visitedList.length > 0 ? (
            <VisitedListDisplay>
              {list.map(eachItem =>
                eachItem.isVisited ? (
                  <ListItem1 key={eachItem.id}>
                    <ItemBox>
                      <ThumbItem src={eachItem.imageUrl} alt="thumbnail" />
                      <NameBox>
                        <NameOfItem>{eachItem.name}</NameOfItem>
                        <DeleteButton
                          type="button"
                          onClick={() => this.onRemoveVisit(eachItem.id)}
                        >
                          Remove
                        </DeleteButton>
                      </NameBox>
                    </ItemBox>
                  </ListItem1>
                ) : null,
              )}
            </VisitedListDisplay>
          ) : (
            <EmptyHeader>No Countries Visited Yet</EmptyHeader>
          )}
        </VisitedCountries>
      </AppComponent>
    )
  }
}
export default Home
