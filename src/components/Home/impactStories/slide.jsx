import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

		return(
            <div className="card rounded-0 border-0">
                <div className="">
                    <a >
                        <img className="img-fluid w-100 w-100" alt={data.alt} src={`../images/${data.image}`} />
					</a>
				</div>
                <div className="card-body  text-md-left text-center">
                    <p className="raleway-bold text-black font-lg">{data.heading}</p>
                    <p className="roboto-regular font-sm">{data.text}</p>
                </div>
            </div>
		);
	}
}

export default Slide;