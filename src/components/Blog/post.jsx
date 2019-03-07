import React, { Component } from "react";
import $ from 'jquery';
import Slider from "react-slick";
import Moment from 'react-moment';

// Card for showing blog post
const Card = (post, src) => {
	var maxLength = 100; // maximum number of characters to extract

	var stripedHtml = $("<div>").html(post.post.description).text();

	// trim the string to the maximum length
	var trimmedString = stripedHtml.substr(0, maxLength);
	//re-trim if we are in the middle of a word
	trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
	);

	return (
		<div className="card medium-blog border-0">
		<p className="card-text text-success blog-date raleway-bold text-center text-md-left">

			<Moment className="roboto-bold text-uppercase" format="MMMM DD, YYYY">
				{post.post.pubDate}
			</Moment>
		</p>
		<img className="card-img-top img-fluid blog-card-img" src={post.post.thumbnail} />
		<div className="card-body px-0 text-center text-md-left text-black">
			<h5 className="card-title  raleway-bold">
				<a className="text-dark font-lg transparent-outline-link" target="_blank" href={post.post.link}>
					{post.post.title}
				</a>
			</h5>
			{
				post.src === 'blog' &&
				<div className="post-meta ">
					<small className="text-green">By {' '}{post.post.author}</small>
				</div>
			}
			<p className='font-xs-l'></p>
			{
				post.src === 'blog' &&
				<p>{ trimmedString}</p>
			}
		</div>
	</div>
	);
  };


class Post extends Component {

    
	render() {
		const { posts } = this.props;
        
		var settings = {
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 769,
				settings: {
					arrows: true,
					infinite: true,
					centerMode: false,
					centerPadding: "40px",
					slidesToShow: 2
				}
			},
			{
				breakpoint: 577,
				settings: {
					dots: true,
					slidesToShow: 1
				}
			}
			]
		};
		const postCount = this.props.count;
		
		if(postCount > 3) {
			return(
				<div className="row">
				{posts.map((post, key) => {
					if(key < postCount) {
						return(
							<div className="col-md-4 col-lg-4" key={post.title}>
								<Card post={post} key={key}  src="blog"/>
							</div>
						)
					}
					}
				)}
			</div>
			)
			
		} else {
			return(
				<Slider {...settings} className="row blog-slider custom-controls-dark pt-4">
					{posts.map((post, key) => {
						if(key < postCount) {
							return(
								<Card post={post} key={key} src="home" />
							)
						}
					}
				)}
				</Slider>
			)
		}
		
	}
}

export default Post;