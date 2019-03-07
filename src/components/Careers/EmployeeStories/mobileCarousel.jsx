import React, { Component } from 'react';

class MobileCarouselItem extends Component {
    render() {
        const { data } = this.props;
        
        return (
            <div className={"carousel-item " + (data.active === true ? 'active' : '')}>
                <div className="card bg-white text-center">
                    <div className="card-img-top light-green-bg font-xl-l raleway-bold text-white py-2">Employee Stories</div>
                    <img className="card-img-top" src={data.employeeImage} alt={data.employeeName} />
                    <div className="card-body px-3 font-xs-l">
                        <p className="text-dark">
                        { data.testimonial }
                        </p>
                        <h5 className="text-green raleway-bold">{data.employeeName} </h5>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MobileCarouselItem;