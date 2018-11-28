import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Carousel from '../components/Home/Carousel/index';
import GoJekFacts from '../components/Home/Facts/index';
import CallToAction from '../components/Common/callToAction';
import Principles from '../components/Home/Principles/index';
import TechFacts from '../components/Home/TechFacts/index';
import OpenSource from '../components/Home/OpenSource/index';
import ImpactStories from '../components/Home/Impact/index';
import Posts from '../components/Blog/posts';

class IndexPage extends Component {
  	render() {
		return(
			<div>
				<Helmet>
					<title> GO-JEK Tech </title>
				</Helmet>

				<Carousel />

				<GoJekFacts />

				<CallToAction 
					theme="white"
					text="Help us build startups within a startup"
					btnText="APPLY NOW"
					link="/careers/"
				/>

				{/* GO-JEK Principles */}
				<Principles />
				{/* End GO-JEK Principles */}

				<TechFacts />

				{/* BLog Section */}
				<Posts 
					heading = " Read what we do"
					count="3"
				/>
				{/* End Blog Section */}

				{/* Open Source */}
				<OpenSource />
				{/* End Open Source */}

				<ImpactStories />

				<CallToAction 
					theme="green"
					text="We have no dearth of Hard Technical Problems&trade;, work with us"
					btnText="APPLY NOW"
					link="/careers/"
				/>
			</div>
		);
	}
}

export default IndexPage
