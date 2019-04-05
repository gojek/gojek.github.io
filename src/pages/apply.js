import React, { Component, isValidElement } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import swal from 'sweetalert'
// const {
//   FormWithConstraints,
//   FieldFeedbacks,
//   FieldFeedback
// } = ReactFormWithConstraints;
class TestApply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      loaded: '',
      experience: '',
      resume: '',
      location: '',
      githubLink: '',
      eligible: '',
      sourceFrom: '',
      fileLabel: '',
      loading: false,
      error: false,
      errorMessage: '',
      propsData: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      propsData: this.props.applyData
        ? this.props.applyData
        : this.props.location.state,
    })
  }

  handleChange(evt) {
    var validated = false
    this.setState({
      [evt.target.name]: evt.target.value,
    })

    if (evt.target.checkValidity() === false) {
      evt.target.classList.add('error-invalid')
      evt.target.nextElementSibling.classList.add('d-block')
      validated = false
    } else {
      evt.target.classList.remove('error-invalid')
      evt.target.nextElementSibling.classList.remove('d-block')
      validated = true
    }
  }

  onFileChange(e, file) {
    var file = file || e.target.files[0],
      reader = new FileReader()

    this.setState({ loaded: false })
    this.setState({ fileLabel: e.target.files[0].name })

    reader.onload = e => {
      this.setState({
        resume: reader.result,
        loaded: true,
      })
    }

    reader.readAsDataURL(file)
  }

  handleSubmit = e => {
    e.preventDefault()

    var validated = false
    var forms = document.getElementsByClassName('needs-validation')
    var validation = Array.prototype.filter.call(forms, function(form) {
      if (form.checkValidity() === false) {
        e.preventDefault()
        e.stopPropagation()

        form.classList.add('was-validated')
        validated = false
      } else {
        form.classList.add('was-validated')
        validated = true
      }
    })
    if (validated) {
      this.setState({ loading: true })

      var payload = {
        fields: [
          { key: 'candidate_first_name', value: this.state.firstName },
          { key: 'candidate_last_name', value: this.state.lastName },
          { key: 'candidate_email', value: this.state.email },
          { key: 'candidate_phone', value: this.state.phone },
          { key: 'how_did_you_hear_about_us', value: this.state.sourceFrom },
          { key: 'preferred_location', value: this.state.location },
          { key: 'github_profile', value: this.state.githubLink },
          { key: 'expected_salary', value: this.state.experience },
          { key: 'work_authorisation', value: this.state.eligible },
          {
            key: 'resume',
            value: {
              encoded_data: this.state.resume.split(',').slice(-1)[0],
              file_name: this.state.fileLabel,
            },
          },
        ],
        source:
          typeof localStorage !== `undefined`
            ? localStorage.getItem('source')
            : 'gojek.io',
      }
      axios({
        method: 'post',
        url: `https://api.lever.co/v0/postings/gojek/${
          this.state.propsData.jobId
        }?key=zLOhG9i-dbX2GL69dRM1`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(payload),
      })
        .then(res => {
          this.setState({ loading: false, error: false })
          navigateTo('/thank-you/')
        })
        .catch(err => {
          this.setState({
            loading: false,
            error: true,
          })
          let test = []
          err.response.data.errors.map(function(error) {
            let key = Object.keys(error)
            // error[key].forEach((element, index) => {

            var text = ''

            key[0].split('_').forEach((element, index) => {
              let char = element.charAt(0).toUpperCase() + element.slice(1)
              text += index === 0 ? ' ' + char : ' ' + element
            })

            test.push(
              <li className="text-danger text-left" key={key}>
                {text} : {error[key]}
              </li>
            )
            // });
          })

          this.setState({
            errorMessage: test,
          })
          // this.setState({ loading: false });
        })
    }
  }

  render() {
    const data = this.props.applyData
      ? this.props.applyData
      : this.props.location.state

    return (
      <section className="container text-center first-section">
        <Helmet>
          <title>{data !== undefined ? data.name : 'GO-JEK Tech Apply'} </title>
        </Helmet>
        <h2 className="raleway-extrabold font-xl text-black mb-0 pt-5">
          {data !== undefined ? data.name : ''}
        </h2>

        {/* <h2 className="raleway-extrabold font-xl-l text-center text-black text-left mb-0 ">Apply for this Job</h2> */}
        <p className="font-sm pt-3 raleway-bold text-success text-uppercase">
          {data !== undefined ? data.place : ''}
        </p>
        <div className=" pt-5">
          <form
            className="needs-validation"
            noValidate
            onSubmit={this.handleSubmit}
          >
            <div className="d-flex flex-row flex-wrap justify-content-between">
              <div className="col-md-5 col-12 d-flex flex-row flex-wrap px-0">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    FIRST NAME
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className=" form-control border-top-0 border-left-0 border-right-0 px-0"
                    id="first-name"
                    placeholder="Enter your First Name"
                    required
                    onChange={this.handleChange}
                    name="firstName"
                  />
                  <div className="invalid-feedback">* Required</div>
                </div>
              </div>

              <div className="col-md-5 col-12 d-flex flex-row flex-wrap px-0">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    LAST NAME
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className=" form-control border-top-0 border-left-0 border-right-0 px-0"
                    id="last-name"
                    placeholder="Enter your Last Name"
                    required
                    onChange={this.handleChange}
                    name="lastName"
                  />
                  <div className="invalid-feedback">* Required</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-between align-items-start mt-md-5 mt-sm-0">
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    EMAIL ID
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className=" form-control border-top-0 border-left-0 border-right-0 px-0"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={this.handleChange}
                    name="email"
                  />
                  <div className="invalid-feedback">Invalid Email.</div>
                </div>
              </div>
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    CONTACT NUMBER
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="tel"
                    className="px-0 form-control border-top-0 border-left-0 border-right-0"
                    id="contact-number"
                    placeholder="Enter Contact number"
                    pattern="[0-9+?]*"
                    onChange={this.handleChange}
                    name="phone"
                    required
                  />
                  <div className="invalid-feedback">
                    Invalid contact number.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-row flex-wrap justify-content-center mt-md-5 mt-sm-0"
              id="drop_zone"
            />

            <div className="d-flex flex-row flex-wrap justify-content-between align-items-start mt-3">
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    UPLOAD RESUME
                  </h6>
                </div>
                <div className="col-12 mt-1">
                  <div className=" border-success border">
                    <p className="text-muted text-center py-1">
                      {' '}
                      {this.state.fileLabel}
                      <br />{' '}
                      <small>
                        Allowed formats are (doc, txt, html, htm, rtf, docx,
                        odt, pdf)
                      </small>
                    </p>
                    <div className="pb-2">
                      <p id="dragFileName" />
                      <input
                        required
                        className="d-none form-control-file"
                        type="file"
                        name="resume"
                        id="resume"
                        onChange={this.onFileChange}
                      />
                      <label
                        className="btn btn-success mt-1 px-5 text-white font-weight-bold "
                        htmlFor="resume"
                      >
                        Browse
                      </label>

                      <div className="invalid-feedback">*Required</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    EXPERIENCE (IN YEARS)
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="px-0 form-control border-top-0 border-left-0 border-right-0"
                    id="experience"
                    placeholder="Enter years of experience"
                    pattern="^[0-9]*$"
                    required
                    onChange={this.handleChange}
                    name="experience"
                  />
                  <div className="invalid-feedback">
                    Enter valid Years of experience
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-between mt-md-5 mt-sm-0">
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    LOCATION
                  </h6>
                </div>
                <div className="col-12">
                  <select
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="preferred-location"
                    required
                    onChange={this.handleChange}
                    name="location"
                  >
                    <option value="">Your Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Thailand">Thailand</option>
                  </select>
                  <small className="text-success">
                    * Potential employees can work only from the country of
                    origin.
                  </small>
                  <div className="invalid-feedback">*Required</div>
                </div>
              </div>
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left">
                    GITHUB PROFILE LINK
                  </h6>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className=" text-success form-control  border-top-0 border-left-0 border-right-0"
                    id="github-link"
                    placeholder="Github Profile Link"
                    required
                    onChange={this.handleChange}
                    name="githubLink"
                  />
                  <small className="text-success">
                    * If you don't have a GitHub profile link, please add NIL
                  </small>
                  <div className="invalid-feedback">*Required</div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-between mt-md-5 mt-sm-0">
              <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                <div className="col-12">
                  <h6 className="text-success roboto-bold font-xs mb-0 text-left text-uppercase">
                    you heard about us on
                  </h6>
                </div>
                <div className="col-12">
                  <select
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="source-from"
                    required
                    onChange={this.handleChange}
                    name="sourceFrom"
                  >
                    <option value="">You heard about us on...</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Blog">Blog</option>
                    <option value="Radio">Radio</option>
                    <option value="Hoarding/Print">Hoarding/Print</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="From a Friend">From a Friend</option>
                    <option value="Google">Google</option>
                  </select>
                  <div className="invalid-feedback">*Required</div>
                </div>
              </div>
              {data !== undefined &&
                data.place === 'Singapore' && (
                  <div className="col-md-5 col-12 px-0 d-flex flex-row flex-wrap my-2">
                    <div className="col-12">
                      <h6 className="text-success roboto-bold font-xs mb-0 text-left text-uppercase">
                        Are you legally eligible to work in Singapore
                      </h6>
                    </div>
                    <div className="col-12">
                      <select
                        className="form-control border-top-0 border-left-0 border-right-0"
                        id="eligible"
                        required
                        onChange={this.handleChange}
                        name="eligible"
                      >
                        <option value="">
                          Are you legally eligible to work in singapore
                        </option>
                        <option value="Singapore Citizen">
                          Singapore Citizen
                        </option>
                        <option value="Permanent Resident">
                          Permanent Resident
                        </option>
                        <option value="EP / S-Pass Holder">
                          EP / S-Pass Holder
                        </option>
                        <option value="Foreigner">Foreigner</option>
                      </select>
                      <div className="invalid-feedback">*Required</div>
                    </div>
                  </div>
                )}
            </div>

            {this.state.error && (
              <div className="alert alert-danger mt-4 mx-5" role="alert">
                <ul>{this.state.errorMessage}</ul>
              </div>
            )}

            <div className="mt-5 pb-5  d-flex flex-row-reverse">
              <div className="col-md-5 col-12">
                {this.state.loading === true && (
                  <button
                    type="submit"
                    disabled={true}
                    className="apply btn btn-success px-5 apply btn-block"
                  >
                    Submit <i className="fa fa-spinner fa-spin" />
                  </button>
                )}
                {this.state.loading === false && (
                  <button
                    type="submit"
                    className="apply btn btn-success px-5 apply btn-block"
                  >
                    Submit{' '}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default TestApply
