import React, { Component } from 'react';
import CallToAction from '../components/Common/callToAction';
import Articles from '../components/Careers/Articles/index';
import { Helmet } from "react-helmet";

class ThankYou extends Component {
    render() {    
        const bgColor = {
            backgroundColor: '#99d3d8'
        }
        
        const bgStyle ={
			backgroundColor: '#2a2b2b'
        }
         
        const imageMaxWidth ={
			maxWidth: "400px"
		}
        return(
            <div>
                <Helmet>
                    <title> GO-JEK Tech</title>
                </Helmet>
                
                <section className="first-section">
                    <img className="img-fluid" src="/../images/job-description/thank-you-banner.png" />
                </section>

                <section>
                    <div className="d-flex flex-row flex-wrap justify-content-center py-5 align-items-center">
                        <p className="text-center font-xl raleway-bold text-black text-uppercase col-10">
                            We have received your application!
                        </p>
                        <div className="col-md-7 text-center roboto-regular">
                            <p>
                            Thanks for taking the time to apply for our position. We appreciate your interest in GO-JEK.</p>
                            <p>We're currently in the process of taking applications for this position. We will begin taking interviews on this position shortly. If you are selected to continue to the interview process, our human resources department will be in contact within 2-3 days.</p>
                            <p>In the meantime, you can check out the links below for insight into our interview process.
                            </p>
                        </div>
                    </div>

                </section>

                <section className="gray-bg">
                    <Articles />
                </section>

                <CallToAction 
					theme="green"
					text="Think you fit the bill?"
					btnText="APPLY NOW"
					link="/careers/"
				/>
            </div>
        );
    }
}

export default ThankYou;