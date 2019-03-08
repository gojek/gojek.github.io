import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

class Card extends Component {
    constructor(props ){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        navigateTo({
            pathname: "/careers/" + this.props.data.positionSlug,
            state: {
                referer: this.props.referer
            },
        })
    }

    render() {
        const { data } = this.props;
        
        return(
            <div className={"card border-0 mb-1 rounded-0 " + (data.id === "1" ? 'mt-2' : '')}>
                <div className="card-body pb-0 row">
                    <h4 className="h4 col-md-4 text-black font-lg d-none d-md-block ">
                        <a style = {{ cursor: "pointer" }} onClick={ this.handleClick} className="job-title text-black">
                            {data.position}
						</a>
                    </h4>
                    <a style = {{ cursor: "pointer" }} onClick={ this.handleClick } className="h4 btn btn-link col-md-4 font-lg d-md-none text-green text-elipsis">{data.position}
					</a>

                    <p className=" col-md-2 font-xs-l text-lg-left text-center">{data.place}</p>

                    <p className=" col-md-2 font-xs-l text-lg-left text-center">{ data.team }</p>
                    <p className=" col-md-2 font-xs-l text-lg-left text-center">{ (data.department === "" ? " - " : data.department) }</p>

                    <a style = {{ cursor: "pointer" }} onClick={ this.handleClick } className="btn btn-link text-green col-md-2 text-success text-right d-none d-md-block pt-0">
                        Apply
					</a>
                </div>
            </div>
        );
    }
}

export default Card;