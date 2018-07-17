import React, { Component } from 'react';
import CallToAction from '../components/Common/callToAction';
import Articles from '../components/Careers/Articles/index';

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
                <section className="first-section">
                    <img className="img-fluid" src="../images/job-description/thank-you-banner.png" />
                </section>

                <section>
                    <div className="d-flex flex-row flex-wrap justify-content-center py-5 align-items-center">
                        <p className="text-center font-xl raleway-bold text-black text-uppercase col-10">
                            We have received your application!
                        </p>
                        <div className="col-md-7 text-center">
                            <p className="roboto-regular">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum exercitationem praesentium odio quibusdam sint voluptatibus
                                hic, dignissimos quas esse minus asperiores consequuntur quos. Soluta, suscipit doloribus laborum eveniet
                                tempora qui?
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