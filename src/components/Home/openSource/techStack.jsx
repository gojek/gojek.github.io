import React, { Component } from 'react';

class TechStack extends Component {
    render() {
        const { data } = this.props;
        return(
            <div className="col-md-3  col-4 pt-4">
                <img className="img-fluid mx-auto custom-logo-width" src={data.image} title={data.title} alt={data.title} />
			</div>
        );
    }
}

export default TechStack;