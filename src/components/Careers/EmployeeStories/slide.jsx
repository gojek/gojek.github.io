import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

		return(
            <div className="card bg-white">
                <div className="card-img-top light-green-bg font-xl-l raleway-bold text-white py-2">Employee Stories</div>
                <img className="card-img-top" src={data.employeeImage} alt={data.employeeName} />
                <div className="card-body px-3 font-xs-l">
                    <p className="text-dark">
                        {data.testimonial}
					</p>
                    <h5 className="text-green raleway-bold">{data.employeeName}</h5>
                </div>
			</div>
		);
	}
}

export default Slide;