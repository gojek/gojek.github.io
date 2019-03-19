import React from 'react'
import { Helmet } from 'react-helmet'
import Link, { navigateTo } from 'gatsby-link'

import * as PropTypes from 'prop-types'

class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  static propTypes = {
    data: PropTypes.shape({
      jobsJson: PropTypes.object.isRequired,
    }),
  }

  handleClick(evt) {
    navigateTo({
      pathname: '/apply',
      state: {
        id: this.props.data.jobsJson.id,
        path: this.props.data.jobsJson.positionSlug,
        name: this.props.data.jobsJson.position,
        place: this.props.data.jobsJson.place,
        jobId: this.props.data.jobsJson.jobId,
        referer:
          this.props.location.state === undefined
            ? 'https://www.gojek.io/'
            : this.props.location.state.referer,
      },
    })
  }

  getTabHeading(key) {
    switch (key) {
      case 'responsibilities':
        return 'Responsibilities'
      case 'experience':
        return 'EXPERIENCE & SKILLS'
      case 'about':
        return 'About you'
      case 'overview':
        return 'Overview'
      case 'expectations':
        return 'Expectations'
      case 'whatWillYouDo':
        return 'What will you do'
      case 'whatWillYouNeed':
        return 'What will you need'
      case 'whatWouldbeaBonus':
        return 'What would be a bonus'
      case 'projects':
        return 'Projects you could work on'
      case 'requirements':
        return 'Requirements'
      case 'rolesOverview':
        return 'About the role'
      default:
        return 'About'
    }
  }

  componentWillMount() {
    if (typeof localStorage !== `undefined`) {
      localStorage.setItem('source', 'gojek.io/gomakeimpact')
    }
  }

  render() {
    const { jobsJson } = this.props.data

    if (jobsJson.overview !== '') {
      var overviewData = jobsJson.overview.split('|')
      var overviewText = []

      overviewData.forEach((element, index) => {
        overviewText.push(<p key={index}>{element}</p>)
      })
    }

    // If roles overview is not empty

    if (jobsJson.rolesOverview !== '') {
      var rolesOverviewData = jobsJson.rolesOverview.split('|')
      var rolesOverviewText = []

      rolesOverviewData.forEach((element, index) => {
        rolesOverviewText.push(<p key={index}>{element}</p>)
      })
    }

    return (
      <div>
        <Helmet>
          <title> {jobsJson.title} </title>
          <meta property="og:title" content={jobsJson.title} />
          <meta name="twitter:title" content={jobsJson.title} />
          <meta name="description" content={jobsJson.metaDescription} />
          <meta name="twitter:description" content={jobsJson.metaDescription} />
          <meta property="og:description" content={jobsJson.metaDescription} />
        </Helmet>

        <section className="first-section">
          <img
            className="img-fluid"
            src="../../images/careers/job-illustration.png"
          />
        </section>
        <section className="">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h1 className="h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1">
                  {jobsJson.position}
                </h1>
                <div className="text-left">
                  <button
                    onClick={this.handleClick}
                    target="_blank"
                    className="text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {jobsJson.headings.map((heading, key) => {
                    return (
                      <li className="nav-item" key={key}>
                        <a
                          className={
                            'nav-link jd-tab roboto-bold text-uppercase ' +
                            (key === 0 ? 'active' : '')
                          }
                          id={`#${heading}-tab`}
                          data-toggle="tab"
                          href={`#${heading}`}
                          role="tab"
                          aria-controls={`${heading}`}
                          aria-selected="true"
                        >
                          {this.getTabHeading(heading)}
                        </a>
                      </li>
                    )
                  })}

                  {(jobsJson.jobId === 'fk0jsih' ||
                    jobsJson.jobId === 'fk0jxwt' ||
                    jobsJson.jobId === 'fk0jzel' ||
                    jobsJson.jobId === 'fk0jzei' ||
                    jobsJson.jobId === 'fk0jze8') && (
                    <li>
                      <a
                        className={
                          'nav-link jd-tab roboto-bold text-uppercase '
                        }
                        id={`#requirements-tab`}
                        data-toggle="tab"
                        href={`#requirements`}
                        role="tab"
                        aria-controls={`requirements`}
                        aria-selected="true"
                      >
                        {' '}
                        Requirements
                      </a>
                    </li>
                  )}

                  {jobsJson.jobId === 'fk0jq8a' && (
                    <li>
                      <a
                        className={'nav-link jd-tab roboto-bold text-uppercase'}
                        id={`#experience-tab`}
                        data-toggle="tab"
                        href={`#experience-tab`}
                        role="tab"
                        aria-controls={`experience`}
                        aria-selected="true"
                      >
                        Relevant Past Experiences
                      </a>
                    </li>
                  )}

                  {jobsJson.jobId === 'fk0jq8a' && (
                    <li>
                      <a
                        className={'nav-link jd-tab roboto-bold text-uppercase'}
                        id={`#skills-tab`}
                        data-toggle="tab"
                        href={`#skills-tab`}
                        role="tab"
                        aria-controls={`skills`}
                        aria-selected="true"
                      >
                        Skills
                      </a>
                    </li>
                  )}

                  {jobsJson.jobId === 'fk0juf6' && (
                    <li>
                      <a
                        className={
                          'nav-link jd-tab roboto-bold text-uppercase active'
                        }
                        id={`#JobDescription-tab`}
                        data-toggle="tab"
                        href={`#JobDescription`}
                        role="tab"
                        aria-controls={`JobDescription`}
                        aria-selected="true"
                      >
                        {' '}
                        Job Description
                      </a>
                    </li>
                  )}

                  {jobsJson.jobId === 'fk0jdwu' && (
                    <li>
                      <a
                        className={'nav-link jd-tab roboto-bold text-uppercase'}
                        id={`#qualification-tab`}
                        data-toggle="tab"
                        href={`#qualification-tab`}
                        role="tab"
                        aria-controls={`qualification`}
                        aria-selected="true"
                      >
                        Qualifications
                      </a>
                    </li>
                  )}

                  {jobsJson.jobId === 'fk0jdwu' && (
                    <li>
                      <a
                        className={'nav-link jd-tab roboto-bold text-uppercase'}
                        id={`#lookingFor-tab`}
                        data-toggle="tab"
                        href={`#lookingFor-tab`}
                        role="tab"
                        aria-controls={`lookingFor`}
                        aria-selected="true"
                      >
                        What we’re looking for
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="tab-content" id="myTabContent">
              {jobsJson.headings.map((heading, key) => {
                return (
                  <div
                    key={key}
                    className={
                      'tab-pane fade show ' + (key === 0 ? 'active' : '')
                    }
                    id={`${heading}`}
                    role="tabpanel"
                    aria-labelledby={`${heading}-tab`}
                  >
                    <section className="roboto-regular">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-10">
                            <div className="row pt-4">
                              {jobsJson.jobId === 'fk019mp' &&
                                heading === 'responsibilities' && (
                                  <p>{jobsJson.responsibilitiesOverview}</p>
                                )}
                              {heading !== 'overview' &&
                                heading !== 'rolesOverview' && (
                                  <ul className="text-green">
                                    <div className="row">
                                      {jobsJson[heading].map((value, key) => {
                                        return (
                                          <div
                                            className="col-md-6 col-sm-12  pr-5"
                                            key={key}
                                          >
                                            {key === 0 &&
                                              heading === 'requirements' &&
                                              (jobsJson.jobId === 'fk0j3ij' ||
                                                jobsJson.jobId ===
                                                  'fk0j3ix') && (
                                                <li className="py-2 font-md">
                                                  <span className="font-sm text-dark">
                                                    {' '}
                                                    Your toolkit:
                                                  </span>
                                                  <ul>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Microservices (HTTP
                                                        &amp; GRPC)
                                                      </span>
                                                    </li>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Experience in Golang,
                                                        Ruby, Clojure, Java (and
                                                        a willingness to learn
                                                        others).
                                                      </span>
                                                    </li>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Postgresql
                                                      </span>
                                                    </li>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Devops: Chef, Ansible,
                                                        Docker, Kubernetes
                                                      </span>
                                                    </li>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Rails, Javascript
                                                      </span>
                                                    </li>
                                                    <li className="py-2 font-md">
                                                      <span className="font-sm text-dark">
                                                        {' '}
                                                        Kafka, Spark, Flink
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </li>
                                              )}
                                            <li
                                              key={key}
                                              className="py-2 font-md"
                                            >
                                              <span className="font-sm text-dark">
                                                {' '}
                                                {value}
                                              </span>
                                            </li>
                                          </div>
                                        )
                                      })}
                                    </div>
                                  </ul>
                                )}
                            </div>
                            {heading === 'overview' && (
                              <div className="col-12">{overviewText}</div>
                            )}
                            {heading === 'rolesOverview' && (
                              <div className="col-12">{rolesOverviewText}</div>
                            )}
                            {jobsJson.jobId !== 'fk019mp' &&
                              heading + 'Overview' !== '' && (
                                <p className="font-md text-dark">
                                  {jobsJson[heading + 'Overview']}
                                </p>
                              )}

                            {heading === 'rolesOverview' &&
                              jobsJson.jobId === 'fk0jdwu' && (
                                <section className="roboto-regular">
                                  <div className="container">
                                    <div className="row justify-content-center">
                                      <div className="col-12">
                                        <div className="row ">
                                          <p>
                                            As the first Program Manager for
                                            GOJEK’s Financial and Accounting
                                            Platform team, you will play a
                                            critical role in driving operational
                                            rigor, in order to grow a team from
                                            its inception stages to stable
                                            execution. You will be responsible
                                            for implementing and
                                            operationalizing Financial and
                                            Accounting systems across all GOJEK
                                            offices in Indonesia, India,
                                            Vietnam, Thailand and Singapore. You
                                            will work closely with the CFO
                                            office and a product development
                                            team to design future-proof
                                            processes and systems that can be
                                            easily scaled to any new countries
                                            and branch offices. You will also be
                                            the single point of contact between
                                            the execution team, cross-functional
                                            stakeholders, and external vendors.
                                            It will be your responsibility to
                                            lead coordination and unblock all
                                            parties involved in order to
                                            prioritize, schedule and deliver on
                                            time. These are not strictly
                                            back-office objectives, your work
                                            will fundamentally improve the
                                            ability of company leadership to
                                            make financially sound business
                                            decisions and for the rest of the
                                            organization to be able to run
                                            efficiently without
                                            productivity-blocking manual
                                            policies and processes.
                                          </p>
                                          <p>
                                            {' '}
                                            The role will be based out of
                                            Jakarta (preferred) or Singapore,
                                            and you will be working closely with
                                            the offices of both the CFO and CTO.
                                          </p>
                                          <h4 className="font-weight-bold">
                                            RESPONSIBILITIES
                                          </h4>
                                          <ul className="text-green">
                                            <div className="row">
                                              {jobsJson.responsibilities.map(
                                                (data, i) => {
                                                  return (
                                                    <div
                                                      key={i}
                                                      className="col-md-6 col-sm-12  pr-5"
                                                    >
                                                      <li className="py-2 font-md">
                                                        <span className="font-sm text-dark">
                                                          {' '}
                                                          {data}
                                                        </span>
                                                      </li>
                                                    </div>
                                                  )
                                                }
                                              )}
                                            </div>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              )}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )
              })}

              {jobsJson.jobId === 'fk0jq8a' && (
                <div
                  className={'tab-pane fade show'}
                  id={`experience-tab`}
                  role="tabpanel"
                  aria-labelledby={`experience-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10 row pt-4">
                          <ul className="text-green">
                            <div className="row">
                              {jobsJson.experience.map((data, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="col-md-6 col-sm-12  pr-5"
                                  >
                                    <li className="py-2 font-md">
                                      <span className="font-sm text-dark">
                                        {' '}
                                        {data}
                                      </span>
                                    </li>
                                  </div>
                                )
                              })}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {jobsJson.jobId === 'fk0jq8a' && (
                <div
                  className={'tab-pane fade show'}
                  id={`skills-tab`}
                  role="tabpanel"
                  aria-labelledby={`skills-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10 row pt-4">
                          <ul className="text-green">
                            <div className="row">
                              {jobsJson.expectations.map((data, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="col-md-6 col-sm-12  pr-5"
                                  >
                                    <li className="py-2 font-md">
                                      <span className="font-sm text-dark">
                                        {' '}
                                        {data}
                                      </span>
                                    </li>
                                  </div>
                                )
                              })}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {jobsJson.jobId === 'fk0juf6' && (
                <div
                  className={'tab-pane fade show active'}
                  id={`JobDescription`}
                  role="tabpanel"
                  aria-labelledby={`JobDescription-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              What Will You Do
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.whatWillYouDo.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              What we are looking for
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.whatWillYouNeed.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              What Would be a Bonus
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.whatWouldbeaBonus.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg-x mb-0 font-weight-bold">
                              Platform Specific Requirements
                            </p>
                            <p className="pl-4 pt-4 font-lg mb-0 font-weight-bold col-12">
                              Android
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Passionate about the Android ecosystem and
                                      the history and design principles behind
                                      it
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Experience with Kotlin and Android SDK
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Good understanding of architecture
                                      principles, code organisation and system
                                      design
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Deep knowledge of Android UI fundamentals
                                      and experience with graphics APIs (Canvas,
                                      Paint, PorterDuffModes etc)
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Experience in creating custom views
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Ability to create UIs programatically or
                                      via XML
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Ability to write readable, testable,
                                      modular code
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Experience with commonly used popular
                                      Android libraries is a plus
                                    </span>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>

                          <div className="row ">
                            <p className="pl-4 pt-4 font-lg mb-0 font-weight-bold col-12">
                              iOS
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Passionate about the iOS/macOS ecosystem
                                      and appreciation for the design and
                                      programming principles behind them
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Good understanding of architecture
                                      principles, code organisation and system
                                      design
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Experience in Swift programming, Cocoa,
                                      Xcode and the iOS SDK
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Deep knowledge of UIKit fundamentals.
                                      Bonus if you’ve worked with UIDynamics,
                                      SceneKit and QuartzCore
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Ability to develop UIs programatically or
                                      via XIB
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Ability to write readable, testable,
                                      modular code
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Experience with commonly used popular iOS
                                      libraries is a plus
                                    </span>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>

                          <div className="row ">
                            <p className="pl-4 pt-4 font-lg mb-0 font-weight-bold col-12">
                              Web
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Passionate about web frontend
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Autodidact capable of learning slow and/or
                                      fast
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Strong understanding of foundational web
                                      technologies like HTML, CSS and JavaScript
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Knowledge of how browsers work is
                                      essential
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Extremely well versed with the JavaScript
                                      language in general along with transpiling
                                      tools like Babel, module bundlers like
                                      webpack, parcel
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Some experience with React and its
                                      ecosystem
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Some experience with nodejs &amp; npm
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Strong web design skills
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Strong documentation skills
                                    </span>
                                  </li>
                                </div>
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Attention to detail
                                    </span>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {jobsJson.jobId === 'fk0jxwt' && (
                <div
                  className={'tab-pane fade show '}
                  id={`requirements`}
                  role="tabpanel"
                  aria-labelledby={`requirements-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              Mandatory
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.requirements.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              Nice to have
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.whatWillYouDo.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {jobsJson.jobId === 'fk0jsih' && (
                <div
                  className={'tab-pane fade show '}
                  id={`requirements`}
                  role="tabpanel"
                  aria-labelledby={`requirements-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              Mandatory
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.requirements.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                          <div className="row pt-4">
                            <p className="pl-4 text-green font-lg mb-0 font-weight-bold">
                              Nice to Have
                            </p>
                            <ul className="text-green">
                              <div className="row">
                                {jobsJson.responsibilities.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {jobsJson.jobId === 'fk0jdwu' && (
                <div
                  className={'tab-pane fade show'}
                  id={`qualification-tab`}
                  role="tabpanel"
                  aria-labelledby={`qualification-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10  pt-4">
                          <h5 className="font-weight-bold">
                            REQUIRED QUALIFICATIONS
                          </h5>
                          <ul className="text-green">
                            <div className="row">
                              <div className="col-12  pr-5">
                                {/* <ul className="text-green">
                                    <li className="font-sm text-dark"> */}
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Experience with Finance and or accounting
                                    systems
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    BA/BS degree or equivalent practical
                                    experience
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    5+ years of experience in cross-functional
                                    project or program management
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    3+ years of experience working with software
                                    engineering and data teams
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Fluent in English
                                  </span>
                                </li>
                              </div>
                            </div>
                          </ul>
                        </div>
                        <div className="col-lg-10 pt-4">
                          <h5 className="font-weight-bold">
                            PREFERRED QUALIFICATIONS
                          </h5>
                          <ul className="text-green">
                            <div className="row">
                              <div className="col-12  pr-5">
                                {/* <ul className="text-green">
                                    <li className="font-sm text-dark"> */}
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Experience in change management for multiple
                                    functions and geographies
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Experience implementing ERP and/or financial
                                    software systems and integrations e.g.
                                    NetSuite,SAP Hana, SAP Concur, Workday
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Familiar with data and ETL technologies e.g.
                                    Kafka
                                  </span>
                                </li>
                                <li className="font-sm text-green">
                                  <span className="font-md text-dark">
                                    Bilingual in English and Bahasa Indonesia
                                  </span>
                                </li>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {jobsJson.jobId === 'fk0jdwu' && (
                <div
                  className={'tab-pane fade show'}
                  id={`lookingFor-tab`}
                  role="tabpanel"
                  aria-labelledby={`lookingFor-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row pt-4">
                            <ul className="text-green">
                              {jobsJson.expectations.map((data, i) => {
                                return (
                                  <div key={i} className="row">
                                    <div className="col-12  pr-5">
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark font-weight-bold">
                                          {' '}
                                          {data.split('|')[0]}
                                        </span>
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data.split('|')[1]}
                                        </span>
                                      </li>
                                    </div>
                                  </div>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {(jobsJson.jobId === 'fk0jzel' ||
                jobsJson.jobId === 'fk0jzei' ||
                jobsJson.jobId === 'fk0jze8') && (
                <div
                  className={'tab-pane fade show'}
                  id={`requirements`}
                  role="tabpanel"
                  aria-labelledby={`requirements-tab`}
                >
                  <section className="roboto-regular">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row pt-4">
                            <ul className="text-green">
                              <div className="row">
                                <div className="col-md-6 col-sm-12  pr-5">
                                  <li className="py-2 font-md">
                                    <span className="font-sm text-dark">
                                      {' '}
                                      Your toolkit:
                                    </span>
                                    <ul className="text-green">
                                      <li className="font-sm text-dark">
                                        Microservices (HTTP &amp; GRPC)
                                      </li>
                                      <li className="font-sm text-dark">
                                        Experience in Golang, Ruby, Clojure,
                                        Java (and a willingness to learn
                                        others).
                                      </li>
                                      <li className="font-sm text-dark">
                                        Postgresql
                                      </li>
                                      <li className="font-sm text-dark">
                                        Devops: Chef, Ansible, Docker,
                                        Kubernetes
                                      </li>
                                      <li className="font-sm text-dark">
                                        Rails, Javascript
                                      </li>
                                      <li className="font-sm text-dark">
                                        Kafka, Spark, Flink
                                      </li>
                                    </ul>
                                  </li>
                                </div>
                                {jobsJson.requirements.map((data, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="col-md-6 col-sm-12  pr-5"
                                    >
                                      <li className="py-2 font-md">
                                        <span className="font-sm text-dark">
                                          {' '}
                                          {data}
                                        </span>
                                      </li>
                                    </div>
                                  )
                                })}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-green roboto-regular mt-5">
          <div className="container py-5">
            <h1 className="h2 font-xl  text-center text-white">
              Think you fit the bill?
            </h1>
            <div className="text-center ">
              <button
                onClick={this.handleClick}
                target="_blank"
                className=" text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostPage($positionSlug: String!) {
    # Select the post which equals this slug.
    jobsJson(positionSlug: { eq: $positionSlug }) {
      id
      positionSlug
      link
      place
      responsibilities
      position
      jobId
      experience
      headings
      about
      responsibilitiesOverview
      rolesOverview
      scopeOverview
      overview
      expectations
      whatWillYouDo
      whatWillYouNeed
      whatWouldbeaBonus
      requirements
      metaDescription
      title
    }
  }
`
