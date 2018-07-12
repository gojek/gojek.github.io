import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

		return(
            <div className=" card border-0">
                <img className="card-img-top rounded-0" src={data.image} alt={data.alt} />
                <div className="font-xs-l card-body px-2">
                    <p className="roboto-regular">
                        {data.text}
					</p>
                </div>
            </div>
		);
	}
}

export default Slide;