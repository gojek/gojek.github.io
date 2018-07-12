const path = require(`path`)

module.exports = {
  	siteMetadata: {
    	title: 'GO-JEK TECH',
    	description: 'GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.',
    	siteUrl: 'http://gojek.io',
		siteImage: 'http://www.gojek.io/img/Go-Jek.png',
		twitter: '@gojektech'
  	},
  	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `data`,
			  path: path.join(__dirname, `data`),
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-transformer-json'
	],
}
