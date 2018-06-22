import React, { Component } from 'react';

import Heading from '../components/News/heading'
import LatestNews from '../components/News/news'

class News extends Component {
    render() {
        return(
            <div className="first-section">
                <Heading />
                <LatestNews />
            </div>
        )
    }
}

export default News;