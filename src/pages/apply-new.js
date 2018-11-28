import React from "react";
import axios from 'axios';
import { Helmet } from "react-helmet";
import { navigateTo } from 'gatsby-link';
import swal from 'sweetalert';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        candidate_first_name: '',
        candidate_last_name: '',
        candidate_email: '',
        candidate_phone: '',
        years_of_experience: '',
        githubLink: '',
        sourceFrom: '',
        resume: '',
        preferred_location: '',
        active: false,
        loaded: false,
        loading: false,
        fileLabel: "Upload Your Resume",
        candidate_first_name_required: false,
        candidate_email_required: false,
        candidate_phone_required: false,
        preferred_location_required: false,
        years_of_experience_required: false,
        resume_required: false,
        sourceFrom_required: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAttachment = this.handleAttachment.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    this.setState({ [evt.target.name+'_required']: false});
  } 

  handleAttachment (evt) {
    this.setState({ [evt.target.name]: evt.target.files[0] });
  }

  getFiles(files){
    this.setState({ resume: files })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { candidate_first_name, candidate_last_name, candidate_email, candidate_phone, resume, years_of_experience, preferred_location, githubLink, sourceFrom } = this.state;
    if(! candidate_first_name) {
        this.setState({candidate_first_name_required: true});
    }
    if(! candidate_email) {
        this.setState({candidate_email_required: true});
    }
    if(! preferred_location) {
        this.setState({preferred_location_required: true});
    }
    if(! years_of_experience) {
        this.setState({years_of_experience_required: true});
    }
    if(isNaN(years_of_experience)) {
        this.setState({years_of_experience_required: true});
    }
    if(! resume) {
        this.setState({resume_required: true});
    }
    if(! sourceFrom) {
        this.setState({sourceFrom_required: true});
    }
    
    if (candidate_phone !== '' && candidate_phone.length !== 10) {
        this.setState({
            ['candidate_phone_required']: true
        });

    } else if (isNaN(candidate_phone)) {
        this.setState({
            ['candidate_phone_required']: true
        });
    }
    
    var payload = {
        "fields": [
          { "key" : "candidate_first_name", "value" : candidate_first_name},
          { "key" : "candidate_last_name", "value" : candidate_last_name},
          { "key" : "candidate_email", "value" : candidate_email},
          { "key" : "candidate_phone", "value" : candidate_phone},
          { "key" : "how_did_you_hear_about_us", "value" : sourceFrom},
          { "key" : "preferred_location", "value" : preferred_location},
          { "key" : "github_profile", "value" : githubLink},
          { "key" : "expected_salary", "value" : years_of_experience},
          { "key" : "resume", "value": {
            "encoded_data" :  resume.split(",").slice(-1)[0],
            "file_name" : this.state.fileLabel
            }
          }
        ],
        "source" : "https://www.gojek.io/"
    };
    
    if(candidate_first_name && candidate_email && preferred_location && years_of_experience && resume && sourceFrom) {
        
        this.setState({ loading: true })
        axios({
            method: 'post',
            url: 'https://jsapi.recruiterbox.com/v1/openings/' + this.props.location.state.jobId + '/apply?client_name=gojek',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(payload),
        }).then(res => {
            this.setState({ loading: false });
            navigateTo("/thank-you/");
        }).catch(err => {
            this.setState({ loading: false });
            swal('', 'Not a valid file format for resume. Allowed formats are (doc, txt, html, htm, rtf, docx, odt, pdf)', 'error');
        });
    } 
  };

  onDragEnter(e) {
    this.setState({ active: true });
}

onDragLeave(e) {
    this.setState({ active: false });
}

onDragOver(e) { 
    e.preventDefault(); 
}

onDrop(e) {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
    console.log(e.dataTransfer.files[0]);
}

onFileChange(e, file) {
    
    var file = file || e.target.files[0],
    reader = new FileReader();
    
    this.setState({ loaded: false });
    this.setState({ fileLabel: e.target.files[0].name });
    
    
    reader.onload = (e) => {
        this.setState({ 
            resume: reader.result, 
            loaded: true,
            resume_required: false
        }); 
    }
    
    reader.readAsDataURL(file);
}

getFileObject() {
    return this.refs.input.files[0];
}

getFileString() {
    return this.state.resume;
}

  render() {
    const data = this.props.location.state;
    
    return (
        <section>

        <Helmet>
		    <title> GO-JEK Tech Apply</title>
		</Helmet>

		<div className="container text-center py-5 first-section">
			<p>
				<span className="raleway-extrabold font-xl text-black mb-0">
					{ data !== undefined ? data.name : '' }</span>
				<br/>
				<span className="font-sm raleway-bold text-success text-uppercase">
                { data !== undefined ? data.place : '' }</span>
			</p>
		</div>
		<div className="container">
			<form 
                className="needs-validation" 
                noValidate
                name = "contact"
                method = "post"
                action = "/thank-you/"
                onSubmit = {
                    this.handleSubmit
                }
            >
				<div className="d-flex flex-row flex-wrap justify-content-around">
					<div className="col-md-5 col-12">

						<input 
                            type="text" 
                            className={"mt-3 form-control custom-form-control roboto-regular " + (this.state.candidate_first_name_required ? 'has-danger' : '')}
                            placeholder="First name"
                            required 
                            onChange={this.handleChange} 
                            name="candidate_first_name"
                            
                        />
                        {
                            this.state.candidate_first_name_required &&
                            <div className="pl-2 has-error text-danger">
                                Please fill out this field.
                            </div>
                        }
					</div>
					<div className="col-md-5 col-12">
                        <input 
                                type="text" 
                                className="mt-3 form-control custom-form-control roboto-regular" 
                                placeholder="Last name"
                                required 
                                onChange={this.handleChange} 
                                name="candidate_last_name"
                            />

					</div>
				</div>

				<div className="d-flex flex-row flex-wrap justify-content-around mt-md-5 mt-sm-0">
					<div className="col-md-5 col-12">
						<input 
                            type="email" 
                            className={"mt-3 form-control custom-form-control roboto-regular " + (this.state.candidate_email_required ? 'has-danger' : '')} 
                            placeholder="Enter email"
                            required  
                            onChange={this.handleChange} 
                            name="candidate_email"
                            
                        />
						{
                            this.state.candidate_email_required &&
                            <div className="pl-2 has-error text-danger">
                                Please fill out this field.
                            </div>
                        }
					</div>

                    <div className="col-md-5 col-12">
                        <input 
                            type="tel" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Enter contact number"
                            required  
                            onChange={this.handleChange} 
                            name="candidate_phone"
                        />
                        {
                            this.state.candidate_phone_required &&
                            <div className="pl-2 has-error text-danger">
                                Please enter valid phone number.
                            </div>
                        }
					</div>
				</div>
                
                <div className="d-flex flex-row flex-wrap justify-content-center px-3 py-5 mt-3" >
					<div className="col-11 drag-and-drop">
						<p className="text-muted text-center pt-3">{this.state.fileLabel} <br />
                        <i className="fa fa-file-o fa-2x mt-3 text-green"></i></p>
                        <div className="text-center pb-3">
                            <label 
                                    className=" btn btn-success text-white font-weight-bold btn-sm"
                                    onDragEnter={this.onDragEnter}
                                    onDragLeave={this.onDragLeave} 
                                    onDragOver={this.onDragOver}
                                    onDrop={this.onDrop}>
                                    Browse
                                            
                                    <input type="file" onChange={this.onFileChange} ref="input" 
                                    
                                    
                                    />

                                </label>
                                {
                                    this.state.resume_required &&
                                    <div className="pl-2 has-error text-danger">
                                        Please upload your resume.
                                    </div>
                                }
                        </div >
					</div>
				</div>

                <div className="d-flex flex-row flex-wrap justify-content-around">
					<div className="col-md-5 col-12">
						<input 
                            type="number" 
                            min="1"
                            className={"mt-3 form-control custom-form-control roboto-regular " + (this.state.years_of_experience_required ? 'has-danger' : '')}
                            placeholder="Years of experience"
                            required  
                            onChange={this.handleChange} 
                            name="years_of_experience"
                            
                        />
                        {
                            this.state.years_of_experience_required &&
                                <div className = "pl-2 has-error text-danger" >
                                    Please enter years of experience in number. 
                                </div>
                        }
					</div>

                    <div className="col-md-5 col-12">
                    <select className="mt-3 form-control custom-form-control roboto-regular postion-relative" name="preferred_location"
                    
                        onChange={this.handleChange}
                        >
							<option value="">Your Location
							</option>
							<option className="custom-options" value="Bangalore">Bangalore</option>
							<option value="Jakarta">Jakarta</option>
							<option value="Singapore">Singapore</option>
						</select>
							<i className="fa fa-chevron-down"></i>
                            <small className="text-success">* Potential employees can work only from the country of origin.</small>
                            {
                            this.state.preferred_location_required &&
                                <div className = "pl-2 has-error text-danger" >
                                Please fill out this field. </div>
                            }
					</div>
				</div>
				
				<div className="d-flex flex-row flex-wrap justify-content-around my-md-5 mt-sm-0">
					<div className="col-md-5 col-12">
						<input 
                            type="text" 
                            className="text-success form-control custom-form-control roboto-regular my-3" 
                            placeholder="Github Profile Link"
                            onChange={this.handleChange}
                            name="githubLink"
						 required />
					</div>
					<div className="col-md-5 col-12">
						{/* <div className="form-group"> */}
                        <select className="my-3 form-control custom-form-control roboto-regular postion-relative" name="sourceFrom"
                        onChange={this.handleChange}
                        
                        >
								<option value="">You heard about us on...
								</option>
								<option className="custom-options" value="Facebook">Facebook</option>
								<option value="Twitter">Twitter</option>
								<option value="LinkedIn">LinkedIn</option>
								<option value="Instagram">Instagram</option>
								<option value="Blog">Blog</option>
								<option value="Hoarding/Print">Hoarding/Print</option>
								<option value="Radio">Radio</option>
								<option value="Google">Google</option>
								{/* <option value="Word of Mouth">Word of Mouth</option> */}
								<option value="From a Friend">From a Friend</option>
							</select>
							<i className="fa fa-chevron-down"></i>
                            {
                                this.state.sourceFrom_required &&
                                    <div className = "pl-2 has-error text-danger" >
                                    Please fill out this field. </div>
                            }
					</div>
				</div>
                
				<div className="text-center mt-5 pb-5">
                    {
                        this.state.loading === true &&
                        <button type="submit" className="btn btn-success px-5 disabled" >Submit <i className="fa fa-spinner fa-spin"></i></button>
                    }
                    {
                        this.state.loading === false &&
                        <button type="submit" className={"btn btn-success px-5 " + ((this.state.candidate_first_name && this.state.candidate_email && this.state.preferred_location && this.state.years_of_experience && this.state.resume && this.state.sourceFrom) ? '' : 'disabled')} >Submit</button>
                    }
				</div>
			</form>
		</div>

	</section>
    );
  }
}