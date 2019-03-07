import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import OpenSourceprojects from '../components/OpenSource/index'

class OpenSource extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
                    <title>Contributions by GOJEK towards free and open source software</title>
					<meta property="og:title" content="Contributions by GOJEK towards free and open source software" />
					<meta name="twitter:title" content="Contributions by GOJEK towards free and open source software" />
                    <meta name="description" content="GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                    <meta name="twitter:description" content="GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                    <meta property="og:description" content="GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page." />
                </Helmet>

                <OpenSourceprojects />
            </div>
        )
    }
}

export default OpenSource;