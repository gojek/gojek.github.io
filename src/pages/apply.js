import React from "react";
import axios from 'axios';
import { Helmet } from "react-helmet";
import Link, { navigateTo } from 'gatsby-link';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        candidate_first_name: '',
        candidate_last_name: '',
        candidate_email: '',
        candidate_phone: '',
        githubLink: '',
        sourceFrom: '',
        resume: '',
        active: false,
        loaded: false,
        loading: false
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
  } 

  handleAttachment (evt) {
    this.setState({ [evt.target.name]: evt.target.files[0] });
  }

  getFiles(files){
    this.setState({ resume: files })
  }

  handleSubmit = e => {
    this.setState({ loading: true })
    e.preventDefault();
    const form = e.target;
    var payload = {
        "fields": [
          { "key" : "candidate_first_name", "value" : this.state.candidate_first_name},
          { "key" : "candidate_last_name", "value" : this.state.candidate_last_name},
          { "key" : "candidate_email", "value" : this.state.candidate_email},
          { "key" : "candidate_phone", "value" : this.state.candidate_phone},
          { "key" : "how_did_you_hear_about_us", "value" : this.state.sourceFrom},
          { "key" : "years_of_experience", "value" : this.state.years_of_experience},
          { "key" : "resume", "value": {
            "encoded_data" :  this.state.resume.split(",").slice(-1)[0],
            "file_name" : "resume.txt"
            }
          }
        ]
    };
    
    axios({
        method: 'post',
        url: 'https://jsapi.recruiterbox.com/v1/openings/fk0fx88/apply?client_name=gojek',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(payload),
    }).then(res => {
        this.setState({ loading: false });
        navigateTo(form.getAttribute("action"));
    }).catch(err => {
        this.setState({ loading: false });
        swal({
            title: '',
            text: 'Please fill all the required fileds!',
            type: 'error'
          });
    });

        
  };

  onDragEnter(e) {
      console.log(e);
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
}

onFileChange(e, file) {
    var file = file || e.target.files[0],
        reader = new FileReader();
       
    this.setState({ loaded: false });
    
    reader.onload = (e) => {
        this.setState({ 
            resume: reader.result, 
            loaded: true 
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
    console.log(data)
    
    return (
        <section className=
            {"first-section gray-bg " + (this.state.loading === true ? 'loading' : '')}
        >

        <Helmet>
		    <title> GO-JEK TECH </title>
		</Helmet>

		<div className="container text-center py-5">
			<p>
				<span className="raleway-extrabold font-xl text-black mb-0">
					{ data === undefined ? '' : data.name }</span>
				<br/>
				<span className="font-sm raleway-bold text-success text-uppercase">
                { data === undefined ? '' : data.place }</span>
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
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="First name"
                            required 
                            onChange={this.handleChange} 
                            name="candidate_first_name"
                        />
						<div className="invalid-feedback">
							* Required
						</div>

					</div>
					<div className="col-md-5 col-12">
						<input type="text" className="mt-3 form-control custom-form-control roboto-regular" id="validationCustom02" placeholder="Last name" />

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
                            name="candidate_email"
                        />
						<div className="invalid-feedback">
							Invalid email.
						</div>
					</div>

                    <div className="col-md-5 col-12">
						<input 
                            type="text" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Years of experience"
                            required  
                            onChange={this.handleChange} 
                            name="years_of_experience"
                        />
						<div className="invalid-feedback">
							Invalid Value.
						</div>
					</div>
				</div>
                

				<div className="d-flex flex-row flex-wrap justify-content-around mt-md-5 mt-sm-0">
					<div className="col-md-5 col-12">
						<input 
                            type="text" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Enter contact number"
                            required  
                            onChange={this.handleChange} 
                            name="candidate_phone"
                        />
					</div>

                    {/* <div className="col-md-5 col-12">
						<input 
                            type="text" 
                            className="mt-3 form-control custom-form-control roboto-regular" 
                            placeholder="Years of experience"
                            required  
                            onChange={this.handleChange} 
                            name="years_of_experience"
                        />
						<div className="invalid-feedback">
							Invalid Value.
						</div>
					</div> */}
				</div>
                
                <div className="d-flex flex-row flex-wrap justify-content-center px-3 py-5 mt-3" >
					<div className="col-11 drag-and-drop">
						<p className="text-muted text-center pt-3">Drag & Drop Your Resume <br />
                        <i className="fa fa-file-o fa-2x mt-3 text-green"></i></p>
                        <div className="text-center pb-3">
                            <label 
                                    className=" btn btn-success text-white font-weight-bold btn-sm"
                                    onDragEnter={this.onDragEnter}
                                    onDragLeave={this.onDragLeave} 
                                    onDragOver={this.onDragOver}
                                    onDrop={this.onDrop}>
                                    Browse
                                            
                                    <input type="file" onChange={this.onFileChange} ref="input" />

                                </label>
                        </div >
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
                        <select className="my-3 form-control custom-form-control roboto-regular postion-relative" name="sourceFrom"
                        onChange={this.handleChange}
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