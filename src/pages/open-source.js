import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import OpenSourceprojects from '../components/OpenSource/index'

class OpenSource extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
					<title> GO-JEK Open Source </title>
				</Helmet>

                <OpenSourceprojects />
            </div>
        )
    }
}

export default OpenSource;