import React, { Component } from 'react';

class Slide extends Component {
	render() {
        const { data } = this.props;

        const bgColor = data.theme === 'black' ? '#2a2b2b' :( data.theme === 'lightblue' ?  '#99d3d8' : '#009944') ;
        
        const bgStyle ={
			backgroundColor: bgColor
        }
         
        const imageMaxWidth ={
			maxWidth: "400px"
		}

		return(
            <div className="card rounded-0 border-0">
                <a href={data.link} target="_blank">
                    
                    <div className="card-body  text-md-left text-center" style={ bgStyle }>
                        <p className="raleway-bold text-black font-lg text-white">{data.title}</p>
                    </div>
                </a>
            </div>
		);
	}
}

export default Slide;