import React, { Component } from 'react';
import { EADDRNOTAVAIL } from 'constants';
import $ from 'jquery';


class Card extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        $("#impactModal").on("hidden.bs.modal", function () {
            $("#iframeYoutube").attr("src", "#");
        })
    }

    handleClick(video) {
        var iframe = document.getElementById("iframeYoutube");
        iframe.src = "https://www.youtube.com/embed/" + video;
        // console.log(iframe)
        $("#impactModal").modal("show");

    }
    render() {
        const { data } = this.props;
        return (
            <div className={data.mainBanner ? "col-md-12" : "col-md-4"}>
                <div className="card border-0">
                    {
                        data.mainBanner === false &&
                        <p className="card-text text-success blog-date raleway-bold py-sm-2 ">
                            {data.date}
                        </p>
                    }
                    <a
                        onClick={() => this.handleClick(data.video)}
                    >
                        <img
                            className="card-img-top img-fluid modal-btn"
                            src={data.image}
                            alt={data.name}
                        />
                    </a>
                    <div className="card-body px-0 text-center text-md-left text-black mb-3">
                        {
                            data.mainBanner === true &&
                            <p className="card-text text-success blog-date raleway-bold py-sm-2 ">
                                {data.date}
                            </p>
                        }
                        <h5 className="card-title  raleway-bold">
                            <a className="  font-lg text-black " target="_blank" href={data.link}>
                                {data.name}
                            </a>
                        </h5>
                        <p className="font-xs-l roboto-regular px-2 px-md-0">
                            {data.text}
                        </p>
                        {
                            data.tags &&
                            <span className="text-success raleway-bold py-sm-2">
                            TAGS:
                        </span>
                        }
                        
                        {
                            data.tags &&
                            data.tags.map(
                                (tag, i) => {
                                    return <span key={i} className="raleway-bold text-black font-xs">&nbsp;{tag}&nbsp;</span>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;