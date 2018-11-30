import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import OpenSourceprojects from '../components/OpenSource/index'

class OpenSource extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
                    <title>Contributions by GO-JEK towards free and open source software</title>
                    <meta name="description" content="GO-JEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                    <meta name="twitter:description" content="GO-JEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                    <meta property="og:description" content="GO-JEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                </Helmet>

                <OpenSourceprojects />
            </div>
        )
    }
}

export default OpenSource;