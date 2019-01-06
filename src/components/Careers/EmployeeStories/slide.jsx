import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;
        let img = '';
        
        switch(data.employeeName) {
            case 'Crystal Widjaja':
                img = "../../images/employee-stories/divya.jpg";
                break;
            case 'Shobhit Srivastava': 
                img = "../../images/employee-stories/crystal.jpg";
                break;
            case 'Divya Jaisawal':
                img = "../../images/employee-stories/shobit.jpg";
                break;
        }

		return(
            <div className="card bg-white">
                <div className="card-img-top light-green-bg font-xl-l raleway-bold text-white py-2">Employee Stories</div>
                <img className="card-img-top" src={ img } alt={data.employeeName} />
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