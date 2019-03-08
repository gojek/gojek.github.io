const path = require(`path`)

module.exports = {
	siteMetadata: {
		title: 'GO-JEK TECH',
		description: 'GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.',
		siteUrl: 'https://gojek.io',
		siteImage: 'https://www.gojek.io/images/Go-Jek.png',
		twitter: '@gojektech'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
		      options: {
		        trackingId: "UA-130067050-1",
		        // Puts tracking script in the head instead of the body
		        head: true,
		        // Setting this parameter is optional
		        anonymize: true,
		        // Setting this parameter is also optional
		        respectDNT: false,
		        // Any additional create only fields (optional)
		        sampleRate: 5,
		        siteSpeedSampleRate: 10
		      },
			resolve: '@wyze/gatsby-plugin-google-analytics',
			options: {
				gaPlugins: {
					config: [
						{
							name: 'eventTracker',
							options: {
								events: ['click', 'contextmenu'],
								hitFilter: [
									'@@/ga-function',
									['model', 'element', 'event', `model.set('eventAction', event.type, true)`],
								],
							},
						},
						'outboundLinkTracker',
					],
					sources: 'js/autotrack.custom.js',
				},
				trackingId: 'UA-130067050-1',
			},
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
