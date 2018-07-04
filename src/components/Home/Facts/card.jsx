import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { data } = this.props;
        
        if(data.type=== 'image') {
			return(
				<div className={"col-lg-"+ data.col +" d-flex  justify-content-" + data.justify + "   align-items-center " + data.theme }>
					<img className="img-fluid" src= {`../../images/${data.content}`} alt={data.alt} />
				</div>
			);
		}
		else {
			return(
				<div className={"col-lg-"+ data.col +" d-flex justify-content-" + data.justify + "   align-items-center " + data.theme }>
					<p className="mb-0">
						<span className="h2 font-xl mb-0 text-white">{data.content}</span>
						<br />
						<span className="raleway-bold">{data.caption}</span>
					</p>
				</div>
			);
		}
    }
}

export default Card;