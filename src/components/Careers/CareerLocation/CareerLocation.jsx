import React, { Component } from 'react'
import data from '../data.json'

class CareerLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: '1',
      openPositionId: 'null',
    }
  }

  onClickLocation = locationName => {
    this.props.props.history.push(`/open-positions?location=${locationName}`)
  }

  render() {
    const locationData = [
      {
        locationName: 'bengaluru',
        imageLink: '../../images/careers/bengaluru.png',
        label: 'Bangalore',
      },
      {
        locationName: 'jakarta',
        imageLink: '../../images/careers/jakartha.png',
        label: 'Jakarta',
      },
      {
        locationName: 'singapore',
        imageLink: '../../images/careers/singapore.png',
        label: 'Singapore',
      },
      {
        locationName: 'bali-denpasar',
        imageLink: '../../images/careers/vietnam.png',
        label: 'Bali, Denpasar',
      },
      {
        locationName: 'bangkok',
        imageLink: '../../images/careers/bangkok.png',
        label: 'Bangkok',
      },
      {
        locationName: 'manila',
        imageLink: '../../images/careers/vietnam.png',
        label: 'Manila',
      },
    ]
    return (
      <section className="pb-5">
        <h3
          className={
            this.props.color !== undefined
              ? 'text-center text-white neosans-regular font-xl-x my-5 text-white'
              : 'text-center text-success neosans-regular font-xl-x my-5 text-success'
          }
        >
          Choose a Location
        </h3>
        <div className="container px-0 pb-3">
          <div className="d-flex flex-row flex-wrap justify-content-center my-3">
            {locationData.map((data, i) => {
              return (
                <div
                  key={i}
                  className="col-md-3 col-6 text-center my-2 mx-md-1 px-2 "
                >
                  <div
                    className={
                      this.props.color !== undefined
                        ? 'super-app-location px-4 scroll d-flex flex-column justify-content-center align-items-center'
                        : 'career-location px-4 scroll d-flex flex-column justify-content-center align-items-center'
                    }
                    style={{ minHeight: '135px' }}
                  >
                    <div
                      onClick={() => this.onClickLocation(data.locationName)}
                    >
                      <img className="img-fluid" src={data.imageLink} />
                      <p
                        className={
                          this.props.color !== undefined
                            ? 'neosans-bold font-md text-uppercase my-1 text-white'
                            : 'neosans-bold font-md text-uppercase my-1 text-succes'
                        }
                      >
                        {data.label}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default CareerLocation
