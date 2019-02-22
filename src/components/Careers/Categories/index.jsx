import React, { Component } from 'react'
import data from '../data.json'
import jobs from '../../../../data/jobs.json'
import Description from '../Description/Description.jsx'
import PositionCard from '../PositionCard/positionCard.jsx'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: null,
      teamId: null,
      teamName: null,
      openPositionId: null,
      jobs: [],
      positions: null,
      tempPositions: null,
      positionId: null,
      positionname: null,
      deletePositionId: null,
      positionData: null,
      screenWidth: null,
      locationName: null,
      locations: ['bangalore', 'jakarta', 'singapore', 'ho-chi-minh-city', 'bangkok'],
    }
  }

  componentDidMount() {
    const urlLocationName = window.location.search.split('&')[0].split('=')[1]
    let screenWidth = null

    if (typeof window !== `undefined`) {
      screenWidth = window.innerWidth
    }
    this.setState(
      {
        jobs: jobs.filter((data, i) => {
          if (data.place.toLowerCase() === urlLocationName.toLowerCase()) {
            return data
          }
        }),
        screenWidth: screenWidth,
        locationName: urlLocationName,
      },
      () => {
        !this.state.locations.includes(urlLocationName.toLowerCase()) &&
        this.props.props.history.replace('/404')

        // console.log("this.state.locations",this.state.locations,'urlLocationName',urlLocationName)
        if (window.location.search.split('&')[1]) {
          this.getPositions(window.location.search.split('&')[1].split('=')[1])
        }
      }
    )
  }

  getPositions = teamName => {
    const { jobs } = this.state
    this.setState(
      {
        positionId: null,
        teamName: teamName,
        deletePositionId: null,
        positions: jobs.filter((data, i) => {
          if (data.team.replace(/ +/g, '') === teamName) {
            return data
          }
        }),
        tempPositions: jobs.filter((data, i) => {
          if (data.team.replace(/ +/g, '') === teamName) {
            return data
          }
        }),
      },
      () => {
        if (window.location.search.split('&')[2]) {
          this.getDescription(
            window.location.search.split('&')[2].split('=')[1]
          )
          window.scrollTo({
            top: 1100,
            behavior: 'smooth',
          })
        }
      }
    )
  }

  getDescription = id => {
    const screenWidth =
      this.state.screenWidth >= 1024 ? 4 : this.state.screenWidth >= 768 ? 3 : 2
    const { deletePositionId } = this.state
    let positions = this.state.positions
    let index = this.state.tempPositions.findIndex(x => x.positionSlug == id)
    let ceilValue = Math.ceil((index + 1) / screenWidth) * screenWidth
    const insertData = {
      type: 'description',
    }
    const positionData = positions.filter((data, i) => {
      if (data.positionSlug === id) {
        return data
      }
    })
    this.removeData(deletePositionId, () => {
      positions.splice(ceilValue, 0, insertData)
    })
    // console.log("positionData[0]",positionData[0])
    this.setState({
      deletePositionId: ceilValue,
      positionId: positionData[0].positionSlug,
      positionName: name,
      positionData: positionData,
    })
  }

  removeData = (id, callback) => {
    id !== null && this.state.positions.splice(id, 1)
    callback()
  }

  getTeams = jobs => {
    let teams = []
    for (let i = 0; i < jobs.length; i++) {
      let count = 0
      if (teams.includes(jobs[i].team)) {
        count = count + 1
      }
      if (count === 0) {
        teams.push(jobs[i].team)
      }
    }
    return teams
  }

  setQueryparams = params => {
    let queryParams = []
    params.map((param, i) => {
      queryParams.push(
        encodeURIComponent(param.key) + '=' + encodeURIComponent(param.value)
      )
    })
    const queryString = queryParams.join('&')
    this.props.props.history.replace({
      search: '?' + queryString,
    })
  }

  onChangeTeam = data => {
    this.setState({
      team: data,
    })
    const params = [
      {
        key: 'location',
        value: this.state.locationName,
      },
      {
        key: 'team',
        value: data.replace(/ +/g, ''),
      },
    ]
    this.setQueryparams(params)
    this.getPositions(data.replace(/ +/g, ''))
  }

  onChangePosition = positionSlug => {
    const params = [
      {
        key: 'location',
        value: this.state.locationName,
      },
      {
        key: 'team',
        value: this.state.teamName,
      },
      {
        key: 'position',
        value: positionSlug,
      },
    ]
    this.setQueryparams(params)
    this.getPositions(this.state.teamName)
  }

  onClickCloseButton = () => {
    const params = [
      {
        key: 'location',
        value: this.state.locationName,
      },
      {
        key: 'team',
        value: this.state.teamName,
      },
    ]
    this.setQueryparams(params)
    this.setState({
      positionId: null,
    })
    this.getPositions(this.state.teamName)
  }

  render() {
    const { categories } = data
    return (
      <section className="py-5 text-center container">
        <p className="font-xl-l raleway-bold text-black">
          {categories.heading}
        </p>
        <p className="font-md roboto-regular">{categories.content}</p>
        <div className="d-flex flex-row flex-wrap justify-content-center my-5">
          {this.getTeams(jobs).map((data, i) => {
            return (
              data !== '' && (
                <div
                  key={i}
                  className="col-md-3 col-6 text-center my-2 mx-md-1 "
                >
                  <div
                    onClick={() => this.onChangeTeam(data)}
                    className={
                      this.state.teamName !== null &&
                      data.replace(/ +/g, '') === this.state.teamName
                        ? 'career-categories  border-success '
                        : '' + ` scroll career-location`
                    }
                  >
                    <p className="neosans-bold font-md text-success text-uppercase my-1 py-3">
                      {data}
                    </p>
                  </div>
                </div>
              )
            )
          })}
          {/* {
                        this.getTeams(this.state.jobs).length === 1 && this.getTeams(this.state.jobs)[0] === "" &&
                        <p className="text-center raleway-bold font-xl-l text-black">Whoops! There are no teams in ‘{this.state.locationName}’ currently</p>
                    } */}
        </div>
        {this.state.positions !== null && (
          <React.Fragment>
            <p className="font-xl-l raleway-bold text-black ">
              {this.state.positions.length > 0
                ? `Open Positions in ${
                    this.state.team === null
                      ? this.state.teamName
                      : this.state.team
                  }`
                : `Whoops! There are no open position in '${
                    this.state.team === null
                      ? this.state.teamName
                      : this.state.team
                  }' currently`}
            </p>
            {/* <div className="d-flex flex-row-reverse col-12 px-1">
                            <a href="/all-open-positions/" className=" py-3 col-md-3 col-6 btn-block text-success scroll career-location">View All Positions&nbsp;<i className="fa fa-arrow-right"></i></a>
                        </div> */}
          </React.Fragment>
        )}
        <div className="d-flex flex-row flex-wrap justify-content-start my-3">
          {this.state.positions !== null &&
            this.state.positions.map((data, i) => {
              return (
                <React.Fragment key={i + 1}>
                  {!data.type && (
                    <PositionCard
                      id={data.positionSlug}
                      positionId={this.state.positionId}
                      onChangeURL={positionSlug =>
                        this.onChangePosition(positionSlug)
                      }
                      heading={data.position}
                      subHeading={data.experienceYears}
                    />
                  )}
                  {data.type === 'description' && (
                    <Description
                      positionName={this.state.positionname}
                      positionData={this.state.positionData}
                      onClickCloseButton={this.onClickCloseButton}
                    />
                  )}
                </React.Fragment>
              )
            })}
          {this.state.positions !== null &&
            this.state.positions.length === 0 && (
              <img
                className=" col-lg-4 col-md-6 col-12 mt-3  mx-auto img-fluid text-center"
                src="../../../../images/careers/no-positions-found.png"
              />
            )}
          <a
            href="/all-open-positions/"
            className=" roboto-regular  py-3 btn btn-outline-success col-12 mx-auto my-5"
          >
            VIEW ALL POSITIONS
          </a>
        </div>
      </section>
    )
  }
}

export default Categories
