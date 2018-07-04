import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { data } = this.props;
        console.log(data)

        return(
            <div className="col-md-6 col-lg-5 rounded">
                <a className="text-dark" title = {data.name} href={data.link} target="_blank"> 
                <div className="card border-0 mb-4 flex-row opensource-card">
                    <img className="align-self-center p-3" src= { `../images/open-source-projects/${data.name}.png`} alt={data.name} />
                    <div className="card-body">
                        <h3 className="raleway-bold mb-0 font-sm-l opensource-card-title">
                            {data.name}
                        </h3>
                        <p className="opensource-card-description mb-auto roboto-regular" style={{ color: "#686868" }}>{ data.description }</p>
                    </div>
                </div>
                </a>
            </div>
        );
    }
}

export default Card;