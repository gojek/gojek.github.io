import React, { Component } from 'react';

import Button from '../Home/Carousel/button';

class CallToAction extends Component {
	render() {
		const { theme } = this.props;
		
		return(
			<section className={theme === 'green' ? "bg-green p-4" : 'pb-5'}>
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-sm-12 col-md-8">
							<h3 className={"px-2 text-center font-xl-l raleway-extrabold " + (theme === 'green' ? 'text-white' : 'text-dark')} >{ this.props.text }</h3>

							<div className="text-center pt-3">
								<a 
									href={ this.props.link } 
									className={"btn custom-btn text-center raleway-bold text-uppercase font-md " + (theme === 'green' ? 'bg-white text-green challenging-button' : 'btn-success')}>
									{ this.props.btnText }
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default CallToAction;


