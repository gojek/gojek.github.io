import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Common/Header/index';
import Footer from '../components/Common/footer';
import data from '../components/Common/Header/data.json';

import './style.scss';

class Layout extends Component {

	render() {
		const {siteMetadata: metaData} = this.props.data.site;
		const { location, children } = this.props
		const title = location.pathname === '/' ? metaData.title : metaData.title + ' '+(location.pathname.substr(1).slice(0, -1).toUpperCase());
		const slug = location.pathname.split("/careers/");
		
		const showHeaderFooter = slug[1]!== undefined && slug[1] !== "" ? false : true;
		
		return(
			<div>
				<Helmet
					title = {title}
				>
					<meta content="yes" name="apple-mobile-web-app-capable" />
					<meta name="description" content={ metaData.description } />

					{/* Twitter meta tags */}
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content={metaData.twitter} />
					<meta name="twitter:title" content={metaData.title} />
					<meta name="twitter:description" content={ metaData.description } />
					<meta name="twitter:image" content={metaData.siteImage} />

					{/* og meta tags */}
					<meta property="og:title" content={metaData.title} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={metaData.siteUrl} />
					<meta property="og:image" content={metaData.siteImage} />
					<meta property="og:description" content={ metaData.description } />
				</Helmet>
				{
					showHeaderFooter &&
					<Header 
						siteTitle = {metaData.title} 
						data = { data }
						currentPage= { location.pathname }
					/>
				}
				
				<div>
					{children()}
				</div> 
				{
					showHeaderFooter &&
					<Footer />
				}
			</div>
		);
	}	
}
Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
				siteImage
				twitter
			}
		}
	}
`
