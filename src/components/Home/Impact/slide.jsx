import React, { Component } from 'react';
import $ from 'jquery';
// import Modal from './modal';

class Slide extends Component {
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
            <div className="card rounded-0 border-0">
                <div className="">
                    <a
                        onClick={() => this.handleClick(data.video)}
                    >
                        <img className="img-fluid w-100 w-100" alt={data.alt} src={`../images/${data.image}`} />
                    </a>
                </div>
                <div className="card-body  text-md-left text-center">
                    <p className="raleway-bold text-black font-lg">{data.heading}</p>
                    <p className="roboto-regular font-sm">{data.text}</p>
                </div>
            </div>
        );
    }
}

export default Slide;