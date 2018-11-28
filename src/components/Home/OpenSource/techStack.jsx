import React, { Component } from 'react';

class TechStack extends Component {
    render() {
        const { data } = this.props;
        return(
            <div className="col-md-2 col-4 pt-4 text-center">
                <img className="img-fluid mx-auto " src={data.image} title={data.title} alt={data.title} />
			</div>
        );
    }
}

export default TechStack;