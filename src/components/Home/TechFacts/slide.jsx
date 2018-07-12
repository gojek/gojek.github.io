import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

		return(
            <div className="card rounded-0 border-0">
                <img className="card-img-top" src={data.image} alt={data.alt} />
                <div className="card-body font-md">
                    <p className="custom-line-height">
                        { data.text }
					</p>
                </div>
            </div>
		);
	}
}

export default Slide;