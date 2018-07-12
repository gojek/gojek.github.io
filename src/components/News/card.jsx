import React, { Component } from 'react';
import { EADDRNOTAVAIL } from 'constants';

class Card extends Component {
    render() {
        const { data } = this.props;
        
        if(data.mainBanner) {
            return(
                <div className="row">
                    <div className="col-md-8 col-sm-12 order-sm-2 pb-sm-2">
                        <img className="img-fluid" src={data.image} alt={data.name} />
                    </div>
                    <div className="col-md-4 col-sm-12 order-sm-1">
                        <div className="card border-0">
                            <p className="card-text text-success blog-date roboto-bold pt-2 text-center text-md-left">
                                {data.date}
                            </p>
                            <div className="card-body px-0 text-center text-md-left text-black">
                                <h5 className="card-title  roboto-bold">
                                    <a className=" font-lg text-black " target="_blank " href={data.link}>
                                        {data.name}
                                    </a>
                                </h5>
                                <p className="font-xs-l roboto-regular ">
                                    {data.text}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="col-md-4 col-sm-12  pt-5">
                    <div className="card border-0">
                        <img className="card-img-top img-fluid" src={data.image} alt={data.name} />
                        <div className="card-body px-0 text-center text-md-left text-black">
                            <p className="card-text text-success blog-date raleway-bold py-sm-2 ">
                                {data.date}
                            </p>
                            <h5 className="card-title  raleway-bold">
                                <a className="  font-lg text-black " target="_blank" href={data.link}>
                                    {data.name}
                                </a>
                            </h5>
                            <p className="font-xs-l roboto-regular">
                                {data.text}
                            </p>

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Card;