import React, { Component } from 'react';

import data from './data.json';
import Card from './card';

class LatestEvents extends Component {
    render() {
        const { events } = data;
        
        return(
            <section className="py-5 ">
                <div className="container">
                    <div className="row">
                        {events.data.map((latestEvents, key) => 
                                <Card data={latestEvents} key={key} />
                        )}
                    </div>
                </div>
                <div className="modal fade" id="impactModal" tabIndex="-1" role="dialog" aria-labelledby="impactModalLabel">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body embed-responsive embed-responsive-21by9">
                                    <iframe id="iframeYoutube" className="embed-responsive-item" src="https://www.youtube.com/embed/bdHfntRaAoo?rel=0&amp;showinfo=0"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default LatestEvents;