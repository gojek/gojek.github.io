import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;
        var bgClass = "";
        var imageBgClass = "";

        // based on the theme, initialize class name for background color
        switch (data.textTheme) {
            case "light-green":
                    bgClass = "developer-bg";
                break;
            case "dark-green":
                    bgClass = "dark-green-bg";
                break;
            case "darker-green":
                    bgClass = "order-bg";
                    break;
            case "green":
                    bgClass = "rider-bg";
                break;
            default:
                bgClass = "rider-bg";
                break;
        }

        // based on the theme, initialize class name for background color
        switch (data.imageTheme) {
            case "light-green":
                    imageBgClass = "developer-bg";
                break;
            case "dark-green":
                    imageBgClass = "dark-green-bg";
                break;
            case "darker-green":
                    imageBgClass = "order-bg";
                    break;
            case "green":
                    imageBgClass = "rider-bg";
                break;
            default:
                imageBgClass = "rider-bg";
                break;
        }

		return(
            <div className="numbers-card">
                <div className={"card-img-top  " + imageBgClass}>
                    <img className="img-fluid pt-5 m-auto" src={data.image} alt={data.alt} />
                </div>
                <div className={"card-body " + bgClass}>
                    <p className="font-sm roboto-regular">
                        <span className="font-lg raleway-bold">
                            {data.heading}
                        </span>
                        <br /> {data.text}
                    </p>
                </div>
            </div>
		);
	}
}

export default Slide;