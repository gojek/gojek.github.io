import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Heading from '../components/News/heading'
import LatestNews from '../components/News/news'

class News extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
                    <title>Keep yourself updated with the latest news | GO-JEK Tech News</title>
					<meta property="og:title" content="Keep yourself updated with the latest news | GO-JEK Tech News" />
					<meta name="twitter:title" content="Keep yourself updated with the latest news | GO-JEK Tech News" />
                    <meta name="description" content="Read on to know more about the technological innovations and major business decisions made by GO-JEK for providing an unforgettable experience to their clients." />
                    <meta name="twitter:description" content="Read on to know more about the technological innovations and major business decisions made by GO-JEK for providing an unforgettable experience to their clients." />
                    <meta property="og:description" content="Read on to know more about the technological innovations and major business decisions made by GO-JEK for providing an unforgettable experience to their clients." />
                </Helmet>

                <Heading />
                <LatestNews />
            </div>
        )
    }
}

export default News;