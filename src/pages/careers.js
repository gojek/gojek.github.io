import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import Banner from '../components/Careers/Banner/index';
import BehindTheScenes from '../components/Careers/BehindTheScenes/index';
import Advantages from '../components/Careers/Advantages/index';
import EmployeeStories from '../components/Careers/EmployeeStories/index';

class Careers extends Component {
  	render() {
	    return(
      		<div className="first-section">
			  	<Helmet>
					<title> GO-JEK Careers </title>
				</Helmet>

        		<Banner />

				<BehindTheScenes />

				<Advantages />

				<EmployeeStories />
      		</div>
    	);
  	}
}

export default Careers;