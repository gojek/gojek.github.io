import React, { Component } from 'react';

class CarouselItem extends Component {
    render() {
        const { data } = this.props;
        
        return (
            <div className={"carousel-item " + (data.active === true ? 'active' : '')}>
                <div className="col-lg-3 col-md-3 carousel-caption  carousel-head">
                    <h1 className="light-green-bg font-xl-l raleway-extrabold py-xl-5 py-md-3  text-white">Employee Stories</h1>
                </div>
                <img className="d-block w-100" src={`../../images/${data.employeeImage}`} alt={data.employeeName} />
                <div className="emp-testimonial carousel-caption text-left p-5 font-xs-l">
                    <p className="text-white emp-testimonial-text roboto-regular"> { data.testimonial } </p>
                    <h5 className="text-green raleway-bold">{data.employeeName}</h5>
                </div>

            </div>
        );
    }
}

export default CarouselItem;