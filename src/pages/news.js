import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Heading from '../components/News/heading'
import LatestNews from '../components/News/news'

class News extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
					<title> GO-JEK Tech News </title>
				</Helmet>

                <Heading />
                <LatestNews />
            </div>
        )
    }
}

export default News;