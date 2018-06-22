import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

		return(
            <div className="card rounded-0 border-0">
                <a href={data.link} target="_blank">
                    <div className="">
                        <img className="img-fluid w-100 w-100" alt="" src={data.image} />
                    </div>
                    <div className="card-body  text-md-left text-center">
                        <p className="neosans-bold text-black font-lg">{data.title}</p>
                    </div>
                </a>
            </div>
		);
	}
}

export default Slide;