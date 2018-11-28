import React, { Component } from 'react';

class Button extends Component {
    render() {
        const data = this.props;
        
        return(
            
            <div className={"align-self-center text-center " + (data.position === 'left' ? 'text-md-left' : '')}>
                <a 
                    href = {data.link} 
                    className={"custom-btn btn raleway-bold text-uppercase my-1 font-md " + (data.type === 'outline' ? 'btn-outline-light' : 'btn-success')}> 
                    { data.text }  
                </a>
            </div>
        )
    }
}

export default Button;