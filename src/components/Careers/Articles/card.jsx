import React, { Component } from 'react';

class Card extends Component {
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
            <div className={"bg-green d-flex align-items-stretch col-md-" + data.col} style ={ bgStyle }>
                <a href={ data.link } target="_blank" className="link-decoration">
                    <div className="row py-3  align-items-center py-3">
                        <div className={(data.type === 'image' ? (data.col === 12 ? 'col-md-6': 'col-md-5') : 'col-md-8')}>
                            <h5 className="p-5 text-white font-xl-l RaleWayBold">{data.title}</h5>
                        </div>
                        {
                            data.type === 'image' &&
                            <div className="col-md-6">
                                <img style = { imageMaxWidth } src={`../../images/${data.image}`} alt={data.title} className="col-md-12 img-fluid" />
                            </div>
                        }
                        
                    </div>
                </a>
            </div>
        );
    }
}

export default Card;