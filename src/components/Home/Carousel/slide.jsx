import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;
        
        var borderStyle = {
		borderBottom: "2px solid white"
        };

		return(
			<div className="card">
				<img className="img-fluid" src = {data.responsiveImage} alt = { data.alt } />
				<div className="carousel-caption col-9 col-xl-6 col-md-8 text-md-left text-center mt-md-5">
					<p className="font-lg absolute-caption neosans-light text-white mb-0">
						{ data.firstLine }
							<br /> { data.secondLine }
							<br />
						<a className="banner-link text-white" href = { data.link } target="_blank" style={borderStyle}>
						<span className="font-lg raleway-bold py-1">
							{ data.linkText }
								</span>
						</a>
						</p>
					</div>
			</div>
		);
	}
}

export default Slide;