import React, { Component } from 'react';
import Modal from '../Common/modal';

class Slide extends Component {
	render() {
        const { employee } = this.props;
		return(
            <div className="" data-toggle="modal" data-target={"#" + employee.id}>
                <img className="img-fluid fade-in" src={employee.image} alt={employee.name + "'s story"} />
                <Modal
                    id={employee.id}
                    name={employee.name}
                    heading={employee.heading}
                    image={employee.image}
                    video={employee.video}
                    blog={employee.blog}
                    desc={employee.desc}
                />
            </div>
		);
	}
}

export default Slide;