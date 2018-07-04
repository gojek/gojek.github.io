import React from "react";
import axios from 'axios';
import { navigateTo } from "gatsby-link";

function encode(data) {
    const formData = new FormData();

    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }

    return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        email: '',
        location: '',
        githubLink: '',
        sourceFrom: '',
        resume: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAttachment = this.handleAttachment.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  } 

  handleAttachment (evt) {
    this.setState({ [evt.target.name]: evt.target.files[0] });
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    
    axios.post('https://jsapi.recruiterbox.com/v1/openings/1/apply', encode({
            "form-name": form.getAttribute("name"),
            ...this.state
        }))
        .then(function (response) {
            navigateTo(form.getAttribute("action"));
        })
        .catch(function (error) {
            console.log(error);
        });
  };

  render() {
    const data = this.props.location.state;
    
    return (
        <section className="first-section gray-bg">
            <div className="container text-center py-5">
                <p>
                    <span className="raleway-extrabold font-xl text-black mb-0">
                        { data.name }</span>
                    <br />
                    <span className="font-sm raleway-bold text-success text-uppercase">
                        { data.place }
                    </span>
                </p>
            </div>
            <div className="container">
            <form 
                className="needs-validation" 
                noValidate
                name = "contact"
                method = "post"
                action = "/thanks/"
                onSubmit = {
                    this.handleSubmit
                }
            >
				<div className="d-flex flex-row flex-wrap justify-content-around">
					<div className="col-md-5 col-12">

                        <input 
                            type="text" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="First name"
                            required 
                            onChange={this.handleChange} 
                            name="firstname"
                        />
						<div className="invalid-feedback">
							* Required
						</div>

					</div>
					<div className="col-md-5 col-12">
                        <input 
                            type="text" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Last name" 
                            onChange={this.handleChange} 
                            name="lastname"
                        />

					</div>
				</div>
				<div className="d-flex flex-row flex-wrap justify-content-around mt-md-5 mt-sm-0">
					<div className="col-md-5 col-12">
                        <input 
                            type="email" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Enter email"
                            required  
                            onChange={this.handleChange} 
                            name="email"
                        />
						<div className="invalid-feedback">
							Invalid email.
						</div>
					</div>
					<div className="col-md-5 col-12">

                        <select 
                            className="mt-3 form-control custom-form-control roboto-regular postion-relative" 
                            required  
                            onChange={this.handleChange}
                            name="location"
                        >
							<option className="custom-option" value="">Preferred Location
							</option>

							<option className="custom-option" value="Bangalore">Bangalore</option>
							<option className="custom-option" value="Jakarta">Jakarta</option>
							<option className="custom-option" value="Singapore">Singapore</option>

						</select>
						<i className="fa fa-chevron-down"></i>
						<div className="invalid-feedback">
							*Required
						</div>
					</div>
				</div>
				<div className="d-flex flex-row flex-wrap justify-content-between py-5" id="drop_zone">
					<div className="col-12 drag-and-drop">
						<p className="text-muted text-center py-2">Drag & Drop Your Resume</p>
						<div className="text-center pb-5">
							<p id="dragFileName">

							</p>
                            <input className="display-none  form-control-file" type="file" name="resume" id="resume" accept="image/*"
                            onChange={this.handleAttachment}
							 />
							<label className="btn btn-success mt-1 px-5 text-white font-weight-bold " htmlFor="resume">Browse</label>
						</div>
					</div>
				</div>
				<div className="d-flex flex-row flex-wrap justify-content-around">
					<div className="col-md-5 col-12">
                        <input 
                            type="text" 
                            className="my-3 text-success form-control custom-form-control roboto-regular" 
                            placeholder="Github Profile Link"
                            onChange={this.handleChange}
                            name="githubLink"
						 required />
					</div>
					<div className="col-md-5 col-12">
						<div className="form-group">
                            <select 
                                className="my-3 form-control custom-form-control roboto-regular postion-relative"  
                                onChange={this.handleChange}
                                name="sourceFrom"
                            >
								<option value="">You heard about us on...
								</option>
								<option className="custom-options" value="Facebook">Facebook</option>
								<option value="Twitter">Twitter</option>
								<option value="Linkedin">Linkedin</option>
								<option value="Blog">Blog</option>
								<option value="Radio">Radio</option>
								<option value="Hoarding/Print">Hoarding/Print</option>
								<option value="Word of Mouth">Word of Mouth</option>
								<option value="From a Friend">From a Friend</option>
								<option value="Google">Google</option>
							</select>
							<i className="fa fa-chevron-down"></i>
						</div>
					</div>
				</div>
				<div className="text-center mt-5 pb-5">
					<button type="submit" className="btn btn-success px-5" >Submit</button>
				</div>
			</form>
		</div>

	</section>
    );
  }
}