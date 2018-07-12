import React, { Component } from 'react';

import data from '../../../data/openSource.json';
import Card from '../Common/openSourceCard';

class OpenSourceprojects extends Component {
    render() {
        const { projects } = data.data;
        
        return(
            <section className="mt-5 bg-green first-section">
                <div className="container pt-5">
                    <h1 className="text-center text-white pl-0 raleway-bold font-xl-x">Open Source Projects</h1>
                    <p className="text-center  text-white roboto-regular font-xs-l p-4 px-5">
                        {data.data.content}
                    </p>

                    <div className="row justify-content-md-center py-5">
                        {projects.map((project, key) => <Card data={project} key={key} />)}                       
                    </div>
                </div>
            </section>
        )
    }
}

export default OpenSourceprojects;