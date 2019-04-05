import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Banner from '../components/Careers/Banner/index'
import BehindTheScenes from '../components/Careers/BehindTheScenes/index'
import Advantages from '../components/Careers/Advantages/index'
import EmployeeStories from '../components/Careers/EmployeeStories/index'
import CountBanner from '../components/Careers/CountBanner/CountBanner'
import CareerLocation from '../components/Careers/CareerLocation/CareerLocation'
import SearchBar from '../components/Careers/searchBar/searchBar'
import jobs from '../../data/jobs.json'
import { Link } from 'react-scroll'
import axios from 'axios'

var Scroll = require('react-scroll')
var scroller = Scroll.scroller

class Careers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      team: '',
      location: '',
      department: '',
      // locationId: '1',
      locationName: 'All',
      inputText: '',
      places: [],
      searchResult: null,
      jobResponseData: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios
      .get(`https://api.lever.co/v0/postings/gojek?mode=json`)
      .then(response => {
        let placesAdded = []
        for (let i = 0; i < response.data.length; i++) {
          let count = 0
          if (placesAdded.includes(response.data[i].categories.location)) {
            count = count + 1
          }
          if (count === 0) {
            placesAdded.push(response.data[i].categories.location)
          }
        }
        this.setState({
          jobResponseData: this.getFilterdata(response),
          places: placesAdded,
        })
        return response
      })
  }

  getFilterdata = response => {
    // console.log('before return', response)
    let returnData = []
    returnData.push(
      response.data.filter((data, i) => {
        if (
          data.description !== '' &&
          data.lists.length !== 0 &&
          (data.lists && data.lists[0] && data.lists[0].content !== '') &&
          (data.lists && data.lists[1] && data.lists[1].content !== '') &&
          ![
            'Digital',
            'Finance',
            'Strategic Finance',
            'Community',
            'Legal',
            'Government Relations',
            'Expansion',
            'Growth',
            'Accounting and Finance',
            'Business Operations - Community',
            'Marketplace',
            'International Operations - Expansion',
            'Business operations - Growth',
            'Marketing and Communications - Digital',
          ].includes(data.categories.team) &&
          ![
            '9f1c11a2-384f-46db-90f1-2fb6821b84ef',
            'b8984973-1b9a-410d-9366-4fe0cc17c954',
            'df136a0b-932d-41e9-80ae-106d20554445',
          ].includes(data.id)
        ) {
          return data
        }
      })
    )
    const fd = {
      data: returnData[0],
    }
    return fd
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      keyword: document.getElementById('keyword').value,
      location:
        document.getElementById('location').value === 'all'
          ? ''
          : document.getElementById('location').value,
      team:
        document.getElementById('team').value === 'all'
          ? ''
          : document.getElementById('team').value,
      department:
        document.getElementById('department').value === 'all'
          ? ''
          : document.getElementById('department').value,
    })
    scroller.scrollTo('myScrollToElement', {
      smooth: 'easeInOutQuint',
    })
  }

  handleChange = evt => {
    if (evt.target.value === 'all') {
      this.setState({
        [evt.target.name]: '',
      })
    } else {
      this.setState({
        [evt.target.name]: evt.target.value,
      })
    }
  }

  resetFilters = () => {
    this.setState({
      keyword: '',
      location: '',
      team: '',
      department: '',
    })
  }

  onChangeInputText = ev => {
    const targetvalue = ev.target.value
    this.setState({
      inputText: targetvalue,
      searchResult: this.state.jobResponseData.data.filter((data, i) => {
        if (
          data.text.toLowerCase().includes(targetvalue.toLowerCase()) &&
          targetvalue !== '' &&
          (data.categories.location.toLowerCase() ===
            this.state.locationName.toLowerCase() ||
            this.state.locationName.toLowerCase() === 'all')
        ) {
          return data
        }
      }),
    })
  }

  onClickLocation = name => {
    this.setState({
      locationName: name,
      searchResult: this.state.jobResponseData.data.filter((data, i) => {
        if (
          data.text
            .toLowerCase()
            .toLowerCase()
            .includes(this.state.inputText.toLowerCase()) &&
          this.state.inputText !== '' &&
          (data.categories.location.toLowerCase() === name.toLowerCase() ||
            name.toLowerCase() === 'all')
        ) {
          return data
        }
      }),
    })
  }

  componentWillMount() {
    if (typeof localStorage !== `undefined`) {
      localStorage.setItem('source', 'gojek.io')
    }
  }

  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>
            GOJEK Careers: Check out the current job openings at GOJEK Tech
          </title>
          <meta
            property="og:title"
            content="GOJEK Careers: Check out the current job openings at GOJEK Tech"
          />
          <meta
            name="twitter:title"
            content="GOJEK Careers: Check out the current job openings at GOJEK Tech"
          />
          <meta
            name="description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
          <meta
            name="twitter:description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
          <meta
            property="og:description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
        </Helmet>

        {/* Main banner image */}
        <section>
          <div className="container-fluid px-0 careers-main-banner h-100 ">
            <div
              className="d-flex flex-row flex-wrap justify-content-center align-items-center position-relative"
              style={{ height: '100vh' }}
            >
              <SearchBar
                props={this.props}
                type="careers"
                places={this.state.places}
                searchResult={this.state.searchResult}
                onChangeInputText={ev => this.onChangeInputText(ev)}
                onClickLocation={name => this.onClickLocation(name)}
                locationName={this.state.locationName}
                inputText={this.state.inputText}
                textColor={`${
                  this.state.searchResult !== null &&
                  this.state.searchResult.length !== 0
                    ? ' text-dark '
                    : ' text-white '
                }`}
                source="gojek.io"
              />

              <div
                className="position-absolute"
                style={{ bottom: '100px', left: '55%' }}
              >
                <Link
                  to="career-banner-id"
                  spy={true}
                  smooth={true}
                  className="scroll"
                  offset={-50}
                >
                  <i className="fa fa-2x fa-chevron-down text-white scroll" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CountBanner
          props={this.props}
          bannerImage="careers-second-banner"
          height="300px"
        />

        <BehindTheScenes />

        <CareerLocation props={this.props} />

        <Advantages />

        <EmployeeStories
          keyword={this.state.keyword}
          team={this.state.team}
          location={this.state.location}
          department={this.state.department}
          resetFilters={this.resetFilters.bind(this)}
          referer="https://www.gojek.io/"
          showHeadings={true}
        />
      </div>
    )
  }
}

export default Careers
