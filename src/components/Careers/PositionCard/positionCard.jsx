import React, { Component } from 'react';

class PositionCard extends Component {

    componentDidMount(){
        
    }
    render() {

        return (
            <div className="col-md-4 col-lg-3  col-6 text-center mt-4 mb-0 px-1 ">
                <div onClick={() => this.props.onChangeURL(this.props.id)} className={` scroll careers-position careers-position-unhighlight d-flex flex-column flex-wrap justify-content-center align-items-center ${this.props.id === this.props.positionId ? '  border-success ' : ''}`} style={{ minHeight: '135px' }}>
                    {
                        <h6 className=" px-4 roboto-regular font-sm  pt-3">{this.props.heading}</h6>
                    }
                    <p className="  px-1 text-success roboto-bold">{this.props.subHeading}</p>
                </div>
                {
                    this.props.id === this.props.positionId&&
                <div className="col-12 bg-success py-1 "/>
                }
            </div>
        );
    }
}

export default PositionCard;