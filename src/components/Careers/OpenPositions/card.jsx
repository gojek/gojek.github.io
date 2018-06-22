import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { data } = this.props;
        
        return(
            <div className={"card border-0 mb-1 rounded-0 " + (data.id === "1" ? 'mt-4' : '')}>
                <div className="card-body pb-0 row">
                    <h4 className="h4 col-md-4 text-black font-lg d-none d-md-block">
                        <a href={"/careers/" + data.positionSlug} className="job-title text-black" target="_blank">
                            {data.position}
						</a>
                    </h4>
                    <a href={"/careers/" + data.positionSlug} target="_blank" className="h4 btn btn-link col-md-4 font-lg d-md-none text-green">{data.position}
					</a>

                    <p className=" col-md-4 font-xs-l text-lg-left text-center">{data.place}</p>

                    <a href={"/careers/" + data.positionSlug} target="_blank" className="btn btn-link text-green col-md-4 text-success text-right d-none d-md-block pt-0">
                        Apply
					</a>
                </div>
            </div>
        );
    }
}

export default Card;