import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { data } = this.props;
        
        if(data.type=== 'image') {
			return(
				<div className={"col-lg-"+ data.col +" d-flex  justify-content-" + data.justify + " p-0 " +  data.background }>
					<img className="img-fluid" src= {data.content} alt={data.alt} />
				</div>
			);
		}
		else {
			return(
				<div className={"col-lg-"+ data.col +" d-flex justify-content-" + data.justify + "   align-items-center text-gray  p-0 " + data.background }>
					<p className="mb-0">
						<span className=" h2 font-xl mb-0 text-gray">{data.content}</span>
						<br />
						<span className="raleway-bold">{data.caption}</span>
					</p>
				</div>
			);
		}
    }
}

export default Card;