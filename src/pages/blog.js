import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import OpenSourceprojects from '../components/OpenSource/index'
import CallToAction from '../components/Common/callToAction';
import Posts from '../components/Blog/posts';
import Heading from '../components/Blog/heading';

class Blog extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
					<title> GO-JEK Tech Blog </title>
				</Helmet>  

                <Heading
                    heading="Read what we do"
                />

                <Posts 
                    count="9"
                />

                <CallToAction 
					theme="green"
					text="Build the tech that powers an entire country. Soon: Singapore, Thailand, Vietnam & Philippines."
					btnText="APPLY NOW"
					link="/careers/"
				/>
            </div>
        )
    }
}

export default Blog;