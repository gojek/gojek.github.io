import React,  { Component } from 'react';

class Heading extends Component {
    render() {
        
        return(
            <section className="bg-green first-section">
                <div className="container">
                    <h1 className="h2 font-xl-x py-5 text-center text-white">{this.props.heading}</h1>
                </div>
            </section>
        )
    }
}

export default Heading;